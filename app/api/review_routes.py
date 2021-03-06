from flask import Blueprint, jsonify, session, request
from app.models import User, db, Business, Review
from app.forms import ReviewForm, EditReviewForm
from flask_login import current_user, login_user, logout_user, login_required


review_routes = Blueprint('reviews', __name__)

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

@review_routes.route('/businesses/<int:business_id>', methods=['GET'])
def get_reviews_by_business(business_id):
    reviews_before_dict = Review.query.filter(Review.business_id == business_id).order_by(Review.updated_at.desc()).all()

    # print ('\n\n\n REVIEWS FROM BACKEND:', reviews_before_dict, '\n\n\n')
    reviews_list = [review.to_dict() for review in reviews_before_dict]
    reviews_dict = {review.id: review.to_dict() for review in reviews_before_dict}

    # print ('\n\n\n REVIEWS DICT FROM BACKEND:', reviews_dict, '\n\n\n')

    # reviews = {review.id: review.to_dict() for review in reviews_before_dict}
    # business_before_dict = Business.query.get(business_id)

    # print ('\n\n\n REVIEWS FROM BACKEND:', business_before_dict.reviews, '\n\n\n')

    # business = business_before_dict.to_dict()

    # reviews = business['reviews']
    # print ('\n\n\n REVIEWS FROM BACKEND:', reviews, '\n\n\n')

    return {'reviews_list': reviews_list, 'reviews_dict': reviews_dict}

@review_routes.route('/users/<int:user_id>', methods=['GET'])
@login_required
def get_reviews_by_user(user_id):
    reviews_before_dict = Review.query.filter(Review.user_id == user_id).order_by(Review.updated_at.desc()).all()

    # print ('\n\n\n REVIEWS FROM BACKEND:', reviews_before_dict, '\n\n\n')
    # reviews_list = [review.to_dict() for review in reviews_before_dict]
    reviews_dict = {review.id: review.to_dict() for review in reviews_before_dict}
    reviews_list = []
    for review in reviews_before_dict:
        business_before_dict = Business.query.get(review.business_id)
        business = business_before_dict.to_dict()
        services = business['services']
        business_name = business['name']

        review_dict = review.to_dict()
        review_dict['services'] = services
        review_dict['business_name'] = business_name

        reviews_list.append(review_dict)



    # print ('\n\n\n REVIEWS DICT FROM BACKEND:', reviews_dict, '\n\n\n')

    # reviews = {review.id: review.to_dict() for review in reviews_before_dict}
    # business_before_dict = Business.query.get(business_id)

    # print ('\n\n\n REVIEWS FROM BACKEND:', business_before_dict.reviews, '\n\n\n')

    # business = business_before_dict.to_dict()

    # reviews = business['reviews']
    # print ('\n\n\n REVIEWS FROM BACKEND:', reviews, '\n\n\n')

    return {'reviews_list': reviews_list, 'reviews_dict': reviews_dict}


@review_routes.route('/', methods=['POST'])
@login_required
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
        )

        db.session.add(review_before_dict)
        db.session.commit()

        review = review_before_dict.to_dict()
        # review['reviewer_name'] = form.data['userName']
        # review['service_name'] = form.data['serviceName']

        # img_url_1 = form.data['img1'],
        # img_url_2 = form.data['img2'],
        # img_url_3 = form.data['img3'],

        return review
    # print('\n\n\n errors \n\n\n', validation_errors_to_error_messages(form.errors))
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def edit_review(review_id):
    form = EditReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data

    if form.validate_on_submit():
        review = Review.query.get(review_id)
        review.service_id = data['serviceId'],
        review.rating = data['rating'],
        review.review = data['review'],
        # review.img_url_1 = data['img1'],
        # review.img_url_2 = data['img2'],
        # review.img_url_3 = data['img3'],

        db.session.commit()

        return review.to_dict()
    # print('\n\n\n\n errors from business routes \n\n\n', {'errors': validation_errors_to_error_messages(form.errors)}, '\n\n\n')
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:review_id>', methods=["DELETE"])
@login_required
def delete_review(review_id):

    review = Review.query.get(review_id)
    deletedReview = review.to_dict()

    business_id = deletedReview['business_id']

    db.session.delete(review)
    db.session.commit()

    reviews_before_dict = Review.query.filter(Review.business_id == business_id).order_by(Review.updated_at.desc()).all()

    # print ('\n\n\n REVIEWS FROM BACKEND:', reviews_before_dict, '\n\n\n')
    reviews_list = [review.to_dict() for review in reviews_before_dict]
    reviews_dict = {review.id: review.to_dict() for review in reviews_before_dict}

    # print ('\n\n\n REVIEWS DICT FROM BACKEND:', reviews_dict, '\n\n\n')

    return {'reviews_list': reviews_list, 'reviews_dict': reviews_dict}
