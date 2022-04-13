from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(10), unique=True, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    is_business_owner = db.Column(db.Boolean)
    image_url = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime, default=db.func.now()) # FORMAT: 2022-04-02 13:27:25.457314
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    businesses = db.relationship('Business', back_populates="owner", cascade="all, delete-orphan")
    bookings = db.relationship('Booking', back_populates="user_who_booked", cascade="all, delete-orphan")
    reviews = db.relationship('Review', back_populates='user', cascade='all, delete-orphan')
    favorites = db.relationship('Favorite', back_populates='user', cascade='all, delete-orphan')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'is_business_owner': self.is_business_owner,
            'image_url': self.image_url,
            'businesses': {business.id: business.to_dict() for business in self.businesses},
            'bookings': {booking.id: booking.to_dict() for booking in self.bookings},
            'reviews': {review.id: review.to_dict() for review in self.reviews},
            'favorites': {favorite.restaurant_id: favorite.to_dict() for favorite in self.favorites},
            'created_at': self.created_at
        }
