from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Booking


class BookingForm(FlaskForm):
  business_id = IntegerField('Business Id')
  user_id = IntegerField('User Id')
  service_id = IntegerField('Service Id')
  date = DateField('Appointment Date', format="%Y-%m-%d", validators=[DataRequired()])
  time = StringField('Appointment time', validators=[DataRequired()])
  submit = SubmitField('Submit')
