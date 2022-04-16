from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField, StringField, SubmitField
from wtforms.validators import DataRequired
from app.models import Booking


class EditBookingForm(FlaskForm):
  bookingId = IntegerField('Booking Id')
  businessId = IntegerField('Business Id')
  serviceId = IntegerField('Service Id')
  serviceName = StringField('Service Name')
  businessName = StringField('Business Name')
  date = DateField('Appointment Date', format="%Y-%m-%d", validators=[DataRequired()])
  time = StringField('Appointment time', validators=[DataRequired()])
  submit = SubmitField('Submit')
