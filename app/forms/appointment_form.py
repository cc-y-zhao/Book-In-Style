from flask_wtf import FlaskForm
from wtforms import (
  DateField, StringField, SubmitField )
from wtforms.validators import DataRequired

class AppointmentForm(FlaskForm):
  service = StringField('Service', validators=[DataRequired()])
  date = DateField('Appointment Date', format="%Y-%m-%d", validators=[DataRequired()])
  time = StringField('Appointment time', validators=[DataRequired()])
  submit = SubmitField('Submit')
