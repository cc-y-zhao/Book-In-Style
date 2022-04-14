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
            errorMessages.append(error)
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

@business_routes.route('/<int:businessId>', methods=['GET'])
def get_businesses(businessId):
    business = Business.query.get(businessId)

    return business.to_dict()


@business_routes.route('/', methods=['POST'])
# @login_required
def create_business():

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

        return business.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@business_routes.route('/<int:business_id>', methods=['PUT'])
# @login_required
def edit_business(business_id):
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        business = Business.query.get(business_id)
        business.capacity = data['capacity'],
        business.name = data['name'],
        business.description = data['description'],
        business.phone = data['phone'],
        business.street_address = data['streetAddress'],
        business.unit = data['unit'],
        business.state = data['state'],
        business.zip_code = data['zipcode']

        db.session.commit()

        return business.to_dict()
    print('\n\n\n\n errors from business routes \n\n\n', {'errors': validation_errors_to_error_messages(form.errors)}, '\n\n\n')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@business_routes.route('/<int:business_id>', methods=["DELETE"])
# @login_required
def delete_business(business_id):

    print('\n\n\n IM IN THE BUSINESS ROUTES \n\n\n')

    print('\n\n\n BUSINESS Id', business_id, '\n\n\n')

    business = Business.query.get(business_id)
    deleted_business = business.to_dict()

    print('\n\n\n deleted business before deltee', deleted_business, '\n\n\n')


    db.session.delete(business)
    db.session.commit()

    print('\n\n\n deleted business', deleted_business, '\n\n\n')
    return deleted_business
