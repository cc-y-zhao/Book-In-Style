from flask_wtf import FlaskForm
from wtforms import (
  IntegerField, DateField, StringField, SubmitField )
from wtforms.validators import DataRequired

class BookingForm(FlaskForm):
  business_id = IntegerField('Business Id', validators=DataRequired())
  user_id = IntegerField('User Id', validators=DataRequired())
  service = StringField('Service', validators=[DataRequired()])
  date = DateField('Appointment Date', format="%Y-%m-%d", validators=[DataRequired()])
  time = StringField('Appointment time', validators=[DataRequired()])
  submit = SubmitField('Submit')
