from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length
from flask_login import current_user, login_user, logout_user, login_required
from app.models import Business


def valid_name(form, field):
  name = field.data
  if len(name) == 0:
    raise ValidationError('Please provide the name of your business.')


def valid_description(form, field):
  description = field.data
  if len(description) < 15:
    raise ValidationError('Please tell us a litte more about your business.')
  if len(description) > (2000):
    raise ValidationError('Descriptions cannot be longer than 2000 characters.')

def valid_phone(form, field):
  phone = field.data

  if not phone.isnumeric():
    raise ValidationError('Phone number must contain only digits')
  if not len(phone) == 10:
    raise ValidationError('Phone number must include 10 digits')

  # print('\n\n\n phone of current user\n\n\n', phone, '\n\n\n')

  existing_business = Business.query.filter(Business.phone == phone).first()

  # print('\n\n\n EXISTING BUSINESS \n\n\n', existing_business, '\n\n\n')

  if existing_business:
    if existing_business.owner_id != current_user.id:
        # print('\n\n\n curreent user id \n\n\n', current_user.id, '\n\n\n')
        # print('\n\n\n existing biz owner user id \n\n\n', existing_business.owner_id, '\n\n\n')
        # print('\n\n\n BOOLEAN \n\n\n', existing_business.owner_id != current_user.id, '\n\n\n')
        # print('\n\n\n VBUSINESS \n\n\n', existing_business, '\n\n\n')
        # print('\n\n\n VBUSINESS phone \n\n\n', existing_business.phone, '\n\n\n')


      raise ValidationError('Phone number is already registered with an existing business.')

def valid_street_address(form, field):
  streetAddress = field.data

  if len(streetAddress) < 4 or len(streetAddress) > 40:
    raise ValidationError('Please provide a valid street address.')

def valid_zipcode(form, field):
  zipcode = field.data
  if not zipcode.isnumeric():
    raise ValidationError('Zipcode must contain only digits')

def valid_image(form, field):
  image_url = field.data
  if image_url != '':
    if '?' in image_url:
      split_image_url = image_url.split('?')
      new_image_url = split_image_url[0]

      if not (new_image_url.endswith('.jpg') or new_image_url.endswith('.jpeg') or new_image_url.endswith('.png')):
        raise ValidationError('Image format must be .jpg, .jpeg, or .png')
    else:
      if not (image_url.endswith('.jpg') or image_url.endswith('.jpeg') or image_url.endswith('.png')):
        raise ValidationError('Image format must be .jpg, .jpeg, or .png')
    if not(image_url.startswith('https://') or image_url.startswith('http://')):
      raise ValidationError('Image URL must start with "https://" or "http://"')
    if len(image_url) > 2048:
      raise ValidationError('Image URL is too long')


class BusinessForm(FlaskForm):
  capacity = IntegerField('Capacity')
  name = StringField('Name', validators=[DataRequired(), valid_name])
  description = StringField('Description', validators=[DataRequired(), valid_description])
  phone = StringField('Phone Number', validators=[DataRequired(), valid_phone])
  streetAddress = StringField('Street Address', validators=[DataRequired(), valid_street_address])
  city = StringField('City', validators=[DataRequired()])
  coverPhoto = StringField('Cover Photo', validators=[DataRequired(), valid_image])
  unit = StringField('Unit')
  state = StringField('State', validators=[DataRequired()])
  zipcode = StringField('Zipcode', validators=[DataRequired(), valid_zipcode])

  isWomenHaircut = BooleanField("Women's Haircut")
  isLashes = BooleanField("Lashes")
  isMenHaircut = BooleanField("Men's Haircut")
  isSpa = BooleanField("Spa")
  isNailSalon = BooleanField("Nail Salon")
  isKidHaircut = BooleanField("Kid Haircut")
  isHairStyling = BooleanField("Hair Styling")
  isMakeup = BooleanField("Makeup")
  isHairColoring = BooleanField("Hair Coloring")
  isPerm = BooleanField("Perm")
