from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Favorite
from app.forms import ReviewForm, EditReviewForm
from flask_login import current_user, login_user, logout_user, login_required


favorite_routes = Blueprint('favorites', __name__)

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

@favorite_routes.route('/', methods=['POST'])
# @login_required
def create_favorite():
  body = request.json


  favorite_before_dict = Favorite (
    user_id = body['userId'],
    business_id = body['businessId'],
  )

  db.session.add(favorite_before_dict)
  db.session.commit()

  favorite = favorite_before_dict.to_dict()

  # print('\n\n\n FAVORTIE FROM BACKEND:', favorite, '\n\n\n')
  business_name = body['businessName']
  business_cover_photo = body['businessCoverPhoto']

  return {'favorite': favorite, 'business_name': business_name, 'business_cover_photo': business_cover_photo}
