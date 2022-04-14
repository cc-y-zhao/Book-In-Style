from app.models import db, User
# from app.models import db, Business

# from app.models import db, User, Business, Booking, Review, Favorite, Image, Language, Service
# from app.models import db, User, Business, Booking, Review, Favorite, Image, Language, Service
# from app.models import db, User, Business, Booking, Review, Favorite, Image, Language, Service


def seed_all():

    demo = User(
        first_name='Jane', last_name='Doe', email='demo@aa.io', phone='9091231234', password='password', is_business_owner=True, image_url='')
    user1 = User(
        first_name='John', last_name='Doe', email='john@aa.io', phone='9091131234', password='password', is_business_owner=True, image_url='')
    user2 = User(
        first_name='Jeffrey', last_name='Doe', email='jeff@aa.io', phone='9091111234', password='password', is_business_owner=True, image_url='')
    user3 = User(
        first_name='Jen', last_name='Doe', email='jen@aa.io', phone='9091231231', password='password', is_business_owner=True, image_url='')
    user4 = User(
        first_name='Katie', last_name='Doe', email='katie@aa.io', phone='7091231234', password='password', is_business_owner=True, image_url='')
    user5 = User(
        first_name='Dan', last_name='Doe', email='dan@aa.io', phone='8091231234', password='password', is_business_owner=True, image_url='')
    user6 = User(
        first_name='Luke', last_name='Doe', email='luke@aa.io', phone='6091231234', password='password', is_business_owner=True, image_url='')
    user7 = User(
        first_name='Andy', last_name='Doe', email='andy@aa.io', phone='5091231234', password='password', is_business_owner=True, image_url='')
    user8 = User(
        first_name='Renee', last_name='Doe', email='renee@aa.io', phone='9091728374', password='password', is_business_owner=True, image_url='')
    user9 = User(
        first_name='Robert', last_name='Doe', email='rob@aa.io', phone='9096781234', password='password', is_business_owner=True, image_url='')
    user10 = User(
        first_name='Jake', last_name='Doe', email='jake@aa.io', phone='6261231234', password='password', is_business_owner=True, image_url='')

    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)



    # db.session.flush()

    # seed_channels():
    # channel2 = Channel(
    #     owner_id='1', title='App Academy', is_dm=False, description='This is BootCAMP!')
    # channel3 = Channel(
    #     owner_id='1', title='Just For Funsies', is_dm=False, description='Slackin\' around!')
    # channel4 = Channel(
    #     owner_id='2', title='RIOT', is_dm=False, description='Sharon loves Riot Games')
    # channel5 = Channel(
    #     owner_id='3', title='Interview Prep', is_dm=False, description='Gabe\'s Interview Preppers')
    # channel6 = Channel(
    #     owner_id='4', title='Cecilia\'s Corner', is_dm=False, description='Welcome to Cecilia\'s Corner!')


    # db.session.add(channel2)
    # db.session.add(channel3)
    # db.session.add(channel4)
    # db.session.add(channel5)
    # db.session.add(channel6)








    db.session.commit()

def undo_seed_all():
    # undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

    # undo_channels():
    # db.session.execute('TRUNCATE channels RESTART IDENTITY CASCADE;')
    # db.session.commit()

    # undo_messages():
    # db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    # db.session.commit()

    # undo_channel_users():
    # db.session.execute('TRUNCATE channel_users RESTART IDENTITY CASCADE;')
    # db.session.commit()
