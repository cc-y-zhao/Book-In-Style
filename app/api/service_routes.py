from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Service
from app.forms import ServiceForm
from flask_login import current_user, login_user, logout_user, login_required


service_routes = Blueprint('services', __name__)

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

@service_routes.route('/', methods=['POST'])
@login_required
def create_service():

    form = ServiceForm()
    # print('\n\n\n SERVICE FORM DATA:', form.data, '\n\n\n')

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        service = Service(
            business_id = form.data['businessId'],
            name = form.data['name'],
            price = form.data['price'],
        )
        db.session.add(service)
        db.session.commit()

        return service.to_dict()
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
