from .db import db

# - user can upload multiple images per review
#   - if review contains multiple images, may involve mulitple posts for ONE request
# - business can upload multiple images for their business
#   - businesses can upload specific images pertaining to a particular service they offer


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String(2083), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    name = db.Column(db.String(25))
    description = db.Column(db.String(50))


    business = db.relationship('Business', back_populates="images")
    service = db.relationship('Service', back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'img_url': self.img_url,
            'business_id': self.business_id,
            'service_id': self.service_id,
            'name': self.name,
            'description': self.description,
        }
