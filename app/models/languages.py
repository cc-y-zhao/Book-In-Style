import datetime
from .db import db
from .businesses import business_languages



class Language(db.Model):
    __tablename__ = 'languages'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    businesses = db.relationship('Business', secondary=business_languages, back_populates="languages")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
