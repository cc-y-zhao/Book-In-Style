from .db import db


# class Favorite(db.Model):
#     __tablename__ = 'favorites'

#     id = db.Column(db.Integer, primary_key=True)
#     business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

#     business = db.relationship('Business', back_populates="favorites")
#     user = db.relationship('User', back_populates="favorites")

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'business_id': self.business_id,
#             'user_id': self.user_id
#         }


class Favorite(db.Model):
    __tablename__ = 'favorites'

    # id = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), primary_key=True)
    created_at = db.Column(db.DateTime, default=db.func.now())


    business = db.relationship('Business', back_populates="favorites")
    user = db.relationship('User', back_populates="favorites")

    def to_dict(self):
        return {
            # 'id': self.id,
            'business_id': self.business_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
        }
