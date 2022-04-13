from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, PasswordField, TelField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already registered.')


def phone_exists(form, field):
    # Checking if phone is already registered
    phone = field.data
    user = User.query.filter(User.phone == phone).first()
    if user:
        raise ValidationError('Phone number is already registered.')
    if not phone.isnumeric():
        raise ValidationError('Phone number must contain only digits')
    if not len(phone) == 10:
        raise ValidationError('Phone number must include 10 digits')

def valid_image(form, field):
    img_url = field.data
    if not (img_url.endswith('.jpg') or img_url.endswith('.jpeg') or img_url.endswith('.png') or img_url.endswith('.gif')):
        raise ValidationError('Image format must be .jpg, .jpeg, or .png')


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    email = StringField('Email Address', validators=[DataRequired(), user_exists, Email()])
    phone = TelField('Phone Number', validators=[DataRequired(), phone_exists])
    password = PasswordField('Password', validators=[DataRequired(), EqualTo('confirm_password', message="Passwords do not match.")])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired()])
    business_owner = BooleanField('business_owner', validators=[DataRequired()])
    img_url = StringField('Image URL', validators=[DataRequired(), Length(min=0, max=2000), valid_image])
