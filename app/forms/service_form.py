from flask_wtf import FlaskForm
from wtforms import (
  IntegerField, DateField, StringField, SubmitField )
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length

def valid_name(form, field):
  name = field.data
  if len(name) < 4:
    raise ValidationError('Please provide a valid name for the service you are providing')
  if len(name) > 30:
    raise ValidationError('Service name is too long - max 30 characters')

def valid_price(form, field):
  price = field.data
  if not price.isnumeric():
    raise ValidationError('Price must contain only digits')

class ServiceForm(FlaskForm):
  businessId = IntegerField('Business Id')
  name = StringField('Service Name', validators=[DataRequired()])
  price = IntegerField('Service Price', validators=[DataRequired()])
  submit = SubmitField('Submit')
