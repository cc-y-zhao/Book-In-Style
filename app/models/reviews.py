from .db import db


class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
  rating = db.Column(db.Integer, nullable=False)
  review = db.Column(db.Text, nullable=False)
  service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
  img_url_1 = db.Column(db.String(2083))
  img_url_2 = db.Column(db.String(2083))
  img_url_3 = db.Column(db.String(2083))
  created_at = db.Column(db.DateTime, default=db.func.now())
  updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

  user = db.relationship('User', back_populates='reviews')
  businesses = db.relationship('Business', back_populates='reviews')
  service = db.relationship('Service', back_populates='reviews')

  def to_dict(self):

    reviewer_name = f"{self.user.first_name} {self.user.last_name[:1]}."
    service_name = self.service.name if self.service else ''

    return {
      'id': self.id,
      'user_id': self.user_id,
      'business_id': self.business_id,
      'rating': self.rating,
      'review': self.review,
      'service_id': self.service_id,
      'img_url_1': self.img_url_1,
      'img_url_2': self.img_url_2,
      'img_url_3': self.img_url_3,
      'reviewer_name': reviewer_name,
      'service_name': service_name,
      'created_at': self.created_at,
      'updated_at': self.updated_at,
    }
