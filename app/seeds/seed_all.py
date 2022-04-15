from app.models import db, User, Business, Service
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

    db.session.flush()

    business1 = Business(
        owner_id = '1',
        name = 'Nails By Jane',
        description = 'A nail salon or nail bar is a specialty beauty salon establishment that primarily offers nail care services such as manicures, pedicures, and nail enhancements. Often, nail salons also offer skin care services. Manicures are also offered by general beauty salons, spas, and hotels.',
        phone = '6261231234',
        street_address = '123 Hillsbury Lane',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://cdn.vox-cdn.com/thumbor/WenHe_SMDEmFp6FwNVc8Vkltn7A=/0x93:750x656/1200x900/filters:focal(0x93:750x656)/cdn.vox-cdn.com/uploads/chorus_image/image/49198829/stacks_image_468.0.0.0.0.0.jpg',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business2 = Business(
        owner_id = '2',
        name = 'Hair Shapers',
        description = 'A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.',
        phone = '9091231234',
        street_address = '123 Cherry Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://www.genroe.com/wp-content/uploads/customer-feedback-beauty-salon-e1591225978543.jpg',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business3 = Business(
        owner_id = '3',
        name = 'Beautiful Hair',
        description = 'A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.',
        phone = '8881231234',
        street_address = '123 Apple Ave',
        unit = '405',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcPoq0Gu_rst-vTwICDk7fsF-LWNkwtjp7g&usqp=CAU',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business4 = Business(
        owner_id = '4',
        name = 'Hair By Jen',
        description = 'A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.',
        phone = '8081231234',
        street_address = '123 Peach Ave',
        unit = '416',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://media.istockphoto.com/photos/curls-of-hair-is-freely-flying-in-front-of-the-face-of-young-woman-picture-id1267002400?k=20&m=1267002400&s=612x612&w=0&h=H3NjFxmGwdt155DQkDGqmPQEWuDzpVdf5DlVlJJpsyA=',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business5 = Business(
        owner_id = '5',
        name = 'Spa Heaven',
        description = 'The word “spa” may be derived from the Walloon word “espa” meaning fountain. This, in turn, came from the name of the Belgian town Spa, where in the 14th century a curative, thermal spring was discovered.',
        phone = '8681231234',
        street_address = '123 Pear Ave',
        unit = '4B',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://www.longisland.com/site_media/images/article/subarticle_image/shutterstock_626152427.jpg.644x0_q85.jpg',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business6 = Business(
        owner_id = '6',
        name = "Men's Cuts",
        description = 'A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.',
        phone = '8381231234',
        street_address = '123 Pear Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://dsifg2gm0y83d.cloudfront.net/bundles/assets/images/mens_haircut_2021_hp_tile.ec1c6afffd0129b6951b.png',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )




    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)

    db.session.flush()

    service1 = Service (
        business_id = '2',
        name = "Women's Haircut",
        price = 40,
    )


    service2 = Service (
        business_id = '2',
        name = "Men's Haircut",
        price = 20,
    )


    service3 = Service (
        business_id = '2',
        name = "Kid's Haircut",
        price = 15,
    )


    service4 = Service (
        business_id = '2',
        name = "Women's Hair Coloring",
        price = 80,
    )

    db.session.add(service1)
    db.session.add(service2)
    db.session.add(service3)
    db.session.add(service4)

    db.session.flush()



    db.session.commit()

def undo_seed_all():
    # undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

    # undo_services():
    db.session.execute('TRUNCATE services RESTART IDENTITY CASCADE;')
    db.session.commit()

    # undo_messages():
    # db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    # db.session.commit()

    # undo_channel_users():
    # db.session.execute('TRUNCATE channel_users RESTART IDENTITY CASCADE;')
    # db.session.commit()
