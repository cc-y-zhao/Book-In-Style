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
@login_required
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


@favorite_routes.route('/users/<int:user_id>', methods=['GET'])
@login_required
def get_favorites_by_user(user_id):
  favorites_before_dict = Favorite.query.filter(Favorite.user_id == user_id).order_by(Favorite.created_at.desc()).all()

  favorites_dict = {}
  for favorite in favorites_before_dict:
    business = Business.query.get(favorite.business_id)
    favorites_dict[business.id] = {'business_name': business.name, 'business_cover_photo': business.cover_photo}

  favorites_list = [favorite.to_dict() for favorite in favorites_before_dict]

  return {'user_id': user_id, 'favorites_dict': favorites_dict, 'favorites_list': favorites_list}


@favorite_routes.route('/', methods=["DELETE"])
@login_required
def delete_favorite():
    body = request.json
    user_id = body['userId']
    business_id = body['businessId']

    favorite_before_dict = Favorite.query.get((user_id, business_id))

    deleted_favorite = favorite_before_dict.to_dict()

    db.session.delete(favorite_before_dict)
    db.session.commit()

    return deleted_favorite
