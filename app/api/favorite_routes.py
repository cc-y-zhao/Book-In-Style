from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Review
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
def create_review():

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review_before_dict = Review(
          business_id = form.data['businessId'],
          service_id = form.data['serviceId'],
          user_id = form.data['userId'],
          rating = form.data['rating'],
          review = form.data['review'],
          img_url_1 = form.data['img1'],
          img_url_2 = form.data['img2'],
          img_url_3 = form.data['img3'],
        )

        db.session.add(review_before_dict)
        db.session.commit()

        review = review_before_dict.to_dict()
        # review['reviewer_name'] = form.data['userName']
        # review['service_name'] = form.data['serviceName']

        return review
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
