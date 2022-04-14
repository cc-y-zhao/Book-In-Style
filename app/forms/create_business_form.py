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

    businesses = Business.query.all()
    for business in businesses:
        existing_business = Business.query.filter(business.phone == phone).first()
        if existing_business:
            if existing_business.owner_id is not current_user.id:
                raise ValidationError('Phone number is already registered with an existing business.')

def valid_street_address(form, field):
    streetAddress = field.data

    if len(streetAddress) < 4 or len(streetAddress) > 40:
        raise ValidationError('Please provide a valid street address.')

def valid_zipcode(form, field):
    zipcode = field.data
    if not zipcode.isnumeric():
        raise ValidationError('Phone number must contain only digits')




class BusinessForm(FlaskForm):
    capacity = IntegerField('Capacity')
    name = StringField('Name', validators=[DataRequired(), valid_name])
    description = StringField('Description', validators=[DataRequired(), valid_description])
    phone = StringField('Phone Number', validators=[DataRequired(), valid_phone])
    streetAddress = StringField('Street Address', validators=[DataRequired(), valid_street_address])
    coverPhoto = StringField('Cover Photo', validators=[DataRequired()])
    unit = StringField('Unit')
    state = StringField('State', validators=[DataRequired()])
    zipcode = IntegerField('Zipcode', validators=[DataRequired()])
