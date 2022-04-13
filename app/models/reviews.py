from .db import db


class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
  rating = db.Column(db.Integer, nullable=False)
  review = db.Column(db.Text, nullable=False)
  img_url_1 = db.Column(db.String(2000))
  img_url_2 = db.Column(db.String(2000))
  img_url_3 = db.Column(db.String(2000))
  created_at = db.Column(db.DateTime, default=db.func.now())
  updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

  user = db.relationship('User', back_populates='reviews')
  businesses = db.relationship('Business', back_populates='reviews')

  def to_dict(self):
    return {
        'id': self.id,
        'user_id': self.user_id,
        'business_id': self.business_id,
        'rating': self.rating,
        'review': self.review,
        'img_url': self.img_url_1,
        'img_url_2': self.img_url_2,
        'img_url_3': self.img_url_3,
        'user_first_name': self.user.first_name
    }
