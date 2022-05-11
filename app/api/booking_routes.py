from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Booking, Service
from app.forms import BookingForm, EditBookingForm
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

@booking_routes.route('/users/<int:user_id>', methods=['GET'])
@login_required
def get_bookings_by_user(user_id):
    bookings_pre_dict = Booking.query.filter(Booking.user_id == user_id).order_by(Booking.date).all()
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


@booking_routes.route('/', methods=['POST'])
@login_required
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

        db.session.add(booking_pre_dict)
        db.session.commit()

        booking = booking_pre_dict.to_dict()
        booking['service_name'] = service_name
        booking['business_name'] = business_name

        return booking
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@booking_routes.route('/<int:booking_id>', methods=['PUT'])
@login_required
def edit_booking(booking_id):

    form = EditBookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    # print('\n\n\n FORM DATA:', data, '\n\n\n')

    if form.validate_on_submit():
        booking_pre_dict = Booking.query.get(booking_id)

        booking_pre_dict.date = data['date'],
        booking_pre_dict.time = data['time'],

        service_name = data['serviceName']
        business_name = data['businessName']

        db.session.commit()

        booking = booking_pre_dict.to_dict()
        booking['service_name'] = service_name
        booking['business_name'] = business_name

        return booking
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@booking_routes.route('/<int:booking_id>', methods=["DELETE"])
@login_required
def delete_booking(booking_id):

    booking = Booking.query.get(booking_id)
    deleted_business = booking.to_dict()

    db.session.delete(booking)
    db.session.commit()

    return deleted_business
