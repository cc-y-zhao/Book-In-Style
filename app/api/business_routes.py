from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business
from app.forms import BusinessForm
from flask_login import current_user, login_user, logout_user, login_required

from app.models.favorites import Favorite


business_routes = Blueprint('businesses', __name__)

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

@business_routes.route('/', methods=['GET'])
def get_all_business():
    businesses_no_dict = Business.query.all()
    businesses = []

    for business in businesses_no_dict:
        businesses.append(business.to_dict())

    return {'businesses': businesses}

@business_routes.route('/<int:businessId>', methods=['GET'])
def get_business(businessId):
    business = Business.query.get(businessId)
    if not business:
        return {}
    user = current_user # get currently logged in user
    business_dict = business.to_dict()
    business_dict['is_favorited'] = _is_favorited(user, business)
    return business_dict

    # return business.to_dict()

def _is_favorited(user, business):
    if not (user.is_authenticated and business):
        return False
    favorite = Favorite.query.get((user.id, business.id))
    return True if favorite else False


@business_routes.route('/', methods=['POST'])
@login_required
def create_business():

    form = BusinessForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        business = Business(
            owner_id = current_user.id,
            capacity = form.data['capacity'],
            name = form.data['name'],
            description = form.data['description'],
            street_address = form.data['streetAddress'],
            city = form.data['city'],
            unit = form.data['unit'],
            state = form.data['state'],
            zip_code = form.data['zipcode'],
            cover_photo = form.data['coverPhoto'],
            monday = '9:00AM - 6:00PM',
            tuesday = '9:00AM - 6:00PM',
            wednesday = '9:00AM - 6:00PM',
            thursday = '9:00AM - 6:00PM',
            friday = '9:00AM - 6:00PM',
            saturday = '9:00AM - 6:00PM',
            sunday = '9:00AM - 6:00PM',
            is_women_haircut = form.data['isWomenHaircut'],
            is_lashes = form.data['isLashes'],
            is_men_haircut = form.data['isMenHaircut'],
            is_spa = form.data['isSpa'],
            is_nail_salon = form.data['isNailSalon'],
            is_kid_haircut = form.data['isKidHaircut'],
            is_hair_styling = form.data['isHairStyling'],
            is_makeup = form.data['isMakeup'],
            is_hair_coloring = form.data['isHairColoring'],
            is_perm = form.data['isPerm'],
        )
        db.session.add(business)
        db.session.commit()

        return business.to_dict()
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    # phone = form.data['phone'],
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@business_routes.route('/<int:business_id>', methods=['PUT'])
@login_required
def edit_business(business_id):
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        business = Business.query.get(business_id)
        business.capacity = data['capacity'],
        business.name = data['name'],
        business.description = data['description'],
        business.street_address = data['streetAddress'],
        business.city = data['city'],
        business.unit = data['unit'],
        business.state = data['state'],
        business.zip_code = data['zipcode']
        business.cover_photo = data['coverPhoto']

        db.session.commit()

        return business.to_dict()
        # business.phone = data['phone'],
    # print('\n\n\n\n errors from business routes \n\n\n', {'errors': validation_errors_to_error_messages(form.errors)}, '\n\n\n')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@business_routes.route('/<int:business_id>', methods=["DELETE"])
@login_required
def delete_business(business_id):

    business = Business.query.get(business_id)
    deleted_business = business.to_dict()

    db.session.delete(business)
    db.session.commit()

    return deleted_business


@business_routes.route('/categories/<category_name>', methods=['GET'])
def get_businesses_by_category(category_name):

    if category_name == "Women's-Haircuts":
        businesses_no_dict = Business.query.filter(Business.is_women_haircut == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Lashes':
        businesses_no_dict = Business.query.filter(Business.is_lashes == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == "Men's-Haircuts":
        businesses_no_dict = Business.query.filter(Business.is_men_haircut == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Spas':
        businesses_no_dict = Business.query.filter(Business.is_spa == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Nail-Salons':
        businesses_no_dict = Business.query.filter(Business.is_nail_salon == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == "Kid's-Haircuts":
        businesses_no_dict = Business.query.filter(Business.is_kid_haircut == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == "Hair-Styling":
        businesses_no_dict = Business.query.filter(Business.is_hair_styling == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Makeup':
        businesses_no_dict = Business.query.filter(Business.is_makeup == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Hair-Coloring':
        businesses_no_dict = Business.query.filter(Business.is_hair_coloring == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    if category_name == 'Perms':
        businesses_no_dict = Business.query.filter(Business.is_perm == True).all()
        businesses_list = [business.to_dict() for business in businesses_no_dict]

    return {'businesses': businesses_list}
