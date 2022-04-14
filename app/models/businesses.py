from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql import func

# Join table for businesses/services
business_services = db.Table(
    "business_services",
    db.Column("business_id", db.ForeignKey("businesses.id"), primary_key=True),
    db.Column("service_id", db.ForeignKey("services.id"), primary_key=True)
)

# Join table for businesses/languages
business_languages = db.Table(
    "business_languages",
    db.Column("business_id", db.ForeignKey("businesses.id"), primary_key=True),
    db.Column("language_id", db.ForeignKey("languages.id"), primary_key=True)
)

class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(2000))
    phone = db.Column(db.String(10), unique=True, nullable=False)
    street_address = db.Column(db.String(255), nullable=False)
    unit = db.Column(db.String(10))
    state = db.Column(db.String(3), nullable=False)
    zip_code = db.Column(db.String(10))
    capacity = db.Column(db.Integer)
    cover_photo = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())


    owner = db.relationship("User", back_populates="businesses")
    services = db.relationship('Service', secondary=business_services, back_populates="businesses")
    languages = db.relationship('Language', secondary=business_languages, back_populates="businesses")
    bookings = db.relationship('Booking', back_populates="businesses", cascade="all, delete-orphan")
    reviews = db.relationship('Review', back_populates='businesses', cascade='all, delete-orphan')
    favorites = db.relationship('Favorite', back_populates='business', cascade='all, delete-orphan')
    images = db.relationship('Image', back_populates='business', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'description': self.description,
            'phone': self.phone,
            'street_address': self.street_address,
            'unit': self.unit,
            'state': self.state,
            'zip_code': self.zip_code,
            'capacity': self.capacity,
            'cover_photo': self.cover_photo,
            'services' : [service.to_dict() for service in self.services],
            'languages': [language.to_dict() for language in self.languages],
            'images': [image.to_dict() for image in self.images],
            'bookings': {booking.id: booking.to_dict() for booking in self.bookings},
            'reviews': {review.id: review.to_dict() for review in self.reviews},
        }
