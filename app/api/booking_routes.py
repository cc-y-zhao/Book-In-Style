from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Booking
from app.forms import BusinessForm
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

    # form = BusinessForm()

    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    #     business = Business(
    #         owner_id = current_user.id,
    #         capacity = form.data['capacity'],
    #         name = form.data['name'],
    #         description = form.data['description'],
    #         phone = form.data['phone'],
    #         street_address = form.data['streetAddress'],
    #         city = form.data['city'],
    #         unit = form.data['unit'],
    #         state = form.data['state'],
    #         zip_code = form.data['zipcode'],
    #         cover_photo = form.data['coverPhoto'],
    #         monday = '9:00AM - 6:00PM',
    #         tuesday = '9:00AM - 6:00PM',
    #         wednesday = '9:00AM - 6:00PM',
    #         thursday = '9:00AM - 6:00PM',
    #         friday = '9:00AM - 6:00PM',
    #         saturday = '9:00AM - 6:00PM',
    #         sunday = '9:00AM - 6:00PM',
    #     )
    #     db.session.add(business)
    #     db.session.commit()

    #     return business.to_dict()
    # # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
