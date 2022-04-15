from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Booking
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

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking = Booking(
            business_id = form.data['businessId'],
            user_id = current_user.id,
            service_id = form.data['serviceId'],
            date = form.data['date'],
            time = form.data['time'],
        )
        db.session.add(booking)
        db.session.commit()

        return booking.to_dict()
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
