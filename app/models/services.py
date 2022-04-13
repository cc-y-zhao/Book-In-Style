import datetime
from .db import db
from .businesses import business_services


class Service(db.Model):
    __tablename__ = 'services'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    businesses = db.relationship('Business', secondary=business_services, back_populates="services")
    bookings = db.relationship('Booking', back_populates='service', cascade='all, delete-orphan')
    images = db.relationship('Image', back_populates='service', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'businesses': {booking.restaurant_id: booking.to_dict() for business in self.businesses},
            'images': {image.restaurant_id: image.to_dict() for image in self.images},


        }
