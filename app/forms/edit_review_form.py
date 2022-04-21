from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError, EqualTo, Length

from app.models import Booking

# def valid_image(form, field):
#   image_url = field.data
#   if image_url != '':
#     if '?' in image_url:
#       split_image_url = image_url.split('?')
#       new_image_url = split_image_url[0]

#       if not (new_image_url.endswith('.jpg') or new_image_url.endswith('.jpeg') or new_image_url.endswith('.png')):
#         raise ValidationError('Image format must be .jpg, .jpeg, or .png')
#     else:
#       if not (image_url.endswith('.jpg') or image_url.endswith('.jpeg') or image_url.endswith('.png')):
#         raise ValidationError('Image format must be .jpg, .jpeg, or .png')
#     if not(image_url.startswith('https://') or image_url.startswith('http://')):
#       raise ValidationError('Image URL must start with "https://" or "http://"')
#     if len(image_url) > 2048:
#       raise ValidationError('Image URL is too long')

def valid_review(form, field):
  review = field.data

  if len(review) < 10:
    raise ValidationError('Please tell us a little more about your experience')
  if len(review) > 3000:
    raise ValidationError('Reviews cannot be more than 3,000 characters in length')

class EditReviewForm(FlaskForm):
  businessId = IntegerField('Business Id')
  serviceId = IntegerField('Service Id')
  reviewId = IntegerField('Review Id')
  userId = IntegerField('User Id')
  rating = IntegerField('Rating', validators=[DataRequired()])
  review = StringField('Review', validators=[DataRequired(), valid_review])
  submit = SubmitField('Submit')
  # userName = StringField('Reviewer Name')
  # serviceName = StringField('Service Name')
  # businessName = StringField('Business Name')

  # img1 = StringField('Image 1', validators=[valid_image])
  # img2 = StringField('Image 2', validators=[valid_image])
  # img3 = StringField('Image 3', validators=[valid_image])
