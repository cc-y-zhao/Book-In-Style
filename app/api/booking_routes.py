from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Booking, Service
from app.forms import BookingForm
from flask_login import current_user, login_user, logout_user, login_required


booking_routes = Blueprint('bookings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(error)
            # errorMessages.append([field, ':', error])
    return errorMessages


@booking_routes.route('/', methods=['POST'])
# @login_required
def create_booking():

    form = BookingForm()

    # print('\n\n\n current user id:', current_user, '\n\n\n')

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking_pre_dict = Booking(
            business_id = form.data['businessId'],
            user_id = current_user.id,
            service_id = form.data['serviceId'],
            date = form.data['date'],
            time = form.data['time'],
        )
        service_name = form.data['serviceName']
        business_name = form.data['businessName']

        db.session.add(booking)
        db.session.commit()

        booking = booking_pre_dict.to_dict()
        booking['service_name'] = service_name
        booking['business_name'] = business_name

        return booking
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@booking_routes.route('/users/<int:user_id>', methods=['GET'])
def get_bookings_by_user(user_id):
    bookings_pre_dict = Booking.query.filter(Booking.user_id == user_id).all()
    bookings = []

    for booking_pre_dict in bookings_pre_dict:
        booking = booking_pre_dict.to_dict()

        business = Business.query.get(booking['business_id'])
        business_name = business.to_dict()['name']
        booking['business_name'] = business_name

        service = Service.query.get(booking['service_id'])
        service_name = service.to_dict()['name']
        booking['service_name'] = service_name

        bookings.append(booking)

    return {'bookings': bookings}
