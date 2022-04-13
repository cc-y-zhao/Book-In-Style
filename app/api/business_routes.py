from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business
from app.forms import BusinessForm
from flask_login import current_user, login_user, logout_user, login_required


business_routes = Blueprint('businesses', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# @business_routes.route('/', methods=['GET'])
# def get_businesses():
#     businesses = Business.query.all()

#     print('\n\n\n BUSINESSES \n\n\n', businesses)

#     businesses_dicted = {}
#     for business in businesses:
#         business_dicted = business.to_dict()
#         businesses_dicted[business_dicted.id] = business_dicted

#     return {'businesses': businesses_dicted}

@business_routes.route('/', methods=['POST'])
# @login_required
def create_business():
    print('\n\n\n CURRENT USER \n\n\n', current_user.id)

    form = BusinessForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        business = Business(
            owner_id = current_user.id,
            capacity = form.data['capacity'],
            name = form.data['name'],
            description = form.data['description'],
            phone = form.data['phone'],
            street_address = form.data['streetAddress'],
            unit = form.data['unit'],
            state = form.data['state'],
            zip_code = form.data['zipcode']
        )
        db.session.add(business)
        db.session.commit()
        print('\n\n\n NEW BUSINESS\n\n\n', business.to_dict(), '\n\n\n\n')
        return business.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
