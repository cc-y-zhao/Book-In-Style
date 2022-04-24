from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, PasswordField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already registered')


def phone_exists(form, field):
    # Checking if phone is already registered
    phone = field.data
    user = User.query.filter(User.phone == phone).first()
    if user:
        raise ValidationError('Phone number is already registered')
    if not phone.isnumeric():
        raise ValidationError('Phone number must contain only digits')
    if not len(phone) == 10:
        raise ValidationError('Phone number must include 10 digits')

def valid_phone(form, field):
  phone = field.data

  if not phone.isnumeric():
    raise ValidationError('Phone number must contain only digits')
  if not len(phone) == 10:
    raise ValidationError('Phone number must include 10 digits')

  # print('\n\n\n phone of current user\n\n\n', phone, '\n\n\n')

  existing_user = User.query.filter(User.phone == phone).first()

  if existing_user:
      raise ValidationError('Phone number is already registered')

def valid_first_name(form, field):
  first_name = field.data

  if len(first_name) < 1:
    raise ValidationError('Please provide your first name')
  if len(first_name) > 100:
    raise ValidationError('First name is too long')

def valid_last_name(form, field):
  last_name = field.data

  if len(last_name) < 1:
    raise ValidationError('Please provide your last name')
  if len(last_name) > 100:
    raise ValidationError('Last name is too long')

# def valid_image(form, field):
#     image_url = field.data
#     if image_url != '':
#       if '?' in image_url:
#         split_image_url = image_url.split('?')
#         new_image_url = split_image_url[0]

#         if not (new_image_url.endswith('.jpg') or new_image_url.endswith('.jpeg') or new_image_url.endswith('.png')):
#           raise ValidationError('Image format must be .jpg, .jpeg, or .png')
#       else:
#         if not (image_url.endswith('.jpg') or image_url.endswith('.jpeg') or image_url.endswith('.png')):
#           raise ValidationError('Image format must be .jpg, .jpeg, or .png')
#       if not(image_url.startswith('https://') or image_url.startswith('http://')):
#         raise ValidationError('Image URL must start with "https://" or "http://"')
#       if len(image_url) > 2048:
#         raise ValidationError('Image URL is too long')


class SignUpForm(FlaskForm):
    firstName = StringField('First Name', validators=[DataRequired(), valid_first_name])
    lastName = StringField('Last Name', validators=[DataRequired(), valid_last_name])
    email = StringField('Email', validators=[DataRequired(), user_exists, Email()])
    phone = StringField('Phone', validators=[DataRequired(), valid_phone])
    password = PasswordField('Password', validators=[DataRequired()])
    businessOwner = BooleanField('Business Owner')
    # imageURL = StringField('Image URL', validators=[valid_image])

    # image_url = StringField('Image URL', validators=[Length(min=0, max=2000), valid_image])
    # confirm_password = PasswordField('confirm_password', validators=[DataRequired()])


    # phone = StringField('Phone Number', validators=[
    #                     DataRequired(), phone_exists])
