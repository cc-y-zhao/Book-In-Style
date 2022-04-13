from .db import db


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now()) # FORMAT: 2022-04-02 13:27:25.457314
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    businesses = db.relationship('Business', back_populates="bookings")
    user_who_booked = db.relationship('User', back_populates="bookings")

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'user_id': self.user_id,
            'service_id': self.service_id,
            'date': self.date,
            'time': self.time,
            'updated_at': self.updated_at
        }
