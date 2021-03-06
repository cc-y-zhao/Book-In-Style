"""empty message

Revision ID: df607f6e4308
Revises: 
Create Date: 2022-04-25 08:54:10.626586

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df607f6e4308'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('languages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable=False),
    sa.Column('last_name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('phone', sa.String(length=10), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('is_business_owner', sa.Boolean(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone')
    )
    op.create_table('businesses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=2000), nullable=True),
    sa.Column('street_address', sa.String(length=255), nullable=False),
    sa.Column('unit', sa.String(length=10), nullable=True),
    sa.Column('state', sa.String(length=3), nullable=False),
    sa.Column('city', sa.String(length=20), nullable=False),
    sa.Column('zip_code', sa.String(length=10), nullable=True),
    sa.Column('capacity', sa.Integer(), nullable=True),
    sa.Column('cover_photo', sa.String(length=2083), nullable=True),
    sa.Column('is_women_haircut', sa.Boolean(), nullable=True),
    sa.Column('is_lashes', sa.Boolean(), nullable=True),
    sa.Column('is_men_haircut', sa.Boolean(), nullable=True),
    sa.Column('is_spa', sa.Boolean(), nullable=True),
    sa.Column('is_nail_salon', sa.Boolean(), nullable=True),
    sa.Column('is_kid_haircut', sa.Boolean(), nullable=True),
    sa.Column('is_hair_styling', sa.Boolean(), nullable=True),
    sa.Column('is_makeup', sa.Boolean(), nullable=True),
    sa.Column('is_hair_coloring', sa.Boolean(), nullable=True),
    sa.Column('is_perm', sa.Boolean(), nullable=True),
    sa.Column('monday', sa.String(length=20), nullable=True),
    sa.Column('tuesday', sa.String(length=20), nullable=True),
    sa.Column('wednesday', sa.String(length=20), nullable=True),
    sa.Column('thursday', sa.String(length=20), nullable=True),
    sa.Column('friday', sa.String(length=20), nullable=True),
    sa.Column('saturday', sa.String(length=20), nullable=True),
    sa.Column('sunday', sa.String(length=20), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('business_languages',
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('language_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['language_id'], ['languages.id'], ),
    sa.PrimaryKeyConstraint('business_id', 'language_id')
    )
    op.create_table('favorites',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'business_id')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('time', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(length=2083), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=25), nullable=True),
    sa.Column('description', sa.String(length=50), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('business_id', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('review', sa.Text(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('img_url_1', sa.String(length=2083), nullable=True),
    sa.Column('img_url_2', sa.String(length=2083), nullable=True),
    sa.Column('img_url_3', sa.String(length=2083), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('images')
    op.drop_table('bookings')
    op.drop_table('services')
    op.drop_table('favorites')
    op.drop_table('business_languages')
    op.drop_table('businesses')
    op.drop_table('users')
    op.drop_table('languages')
    # ### end Alembic commands ###
