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
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/nails_jane.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = False,
        is_spa = False,
        is_nail_salon = True,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
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
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/hair_shapers.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = True,
        is_lashes = False,
        is_men_haircut = True,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = True,
        is_hair_styling = True,
        is_makeup = False,
        is_hair_coloring = True,
        is_perm = False,
    )

    business3 = Business(
        owner_id = '3',
        name = "Jeffrey's Salon",
        description = 'A hairstyle, hairdo, haircut or coiffure refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.',
        phone = '8881231234',
        street_address = '123 Apple Ave',
        unit = '405',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/jeff_salon.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = True,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = True,
        is_perm = False,
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
        cover_photo = 'https://raw.githubusercontent.com/cc-y-zhao/Book-In-Style/misc_v1/react-app/src/images/businessSeeds/jen_hair.png',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = True,
        is_lashes = False,
        is_men_haircut = True,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = True,
        is_hair_styling = True,
        is_makeup = False,
        is_hair_coloring = True,
        is_perm = True,
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
        cover_photo = 'https://raw.githubusercontent.com/cc-y-zhao/Book-In-Style/misc_v1/react-app/src/images/businessSeeds/spa_heaven.png',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = False,
        is_spa = True,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
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
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/mens_cuts.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = True,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
    )

    business7 = Business(
        owner_id = '7',
        name = "Perfect Nails",
        description = 'A nail salon or nail bar is a specialty beauty salon establishment that primarily offers nail care services such as manicures, pedicures, and nail enhancements. Often, nail salons also offer skin care services. Manicures are also offered by general beauty salons, spas, and hotels.',
        phone = '8381231230',
        street_address = '123 Water Ave',
        unit = '478',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/perfect_nails.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
    )

    business8 = Business(
        owner_id = '8',
        name = "Spa Therapy",
        description = 'The word “spa” may be derived from the Walloon word “espa” meaning fountain. This, in turn, came from the name of the Belgian town Spa, where in the 14th century a curative, thermal spring was discovered.',
        phone = '8381231231',
        street_address = '123 Apple Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/spa_therapy.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = False,
        is_spa = True,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
    )

    business9 = Business(
        owner_id = '9',
        name = "Makeup By Renee",
        description = "A makeup artist is someone who uses cosmetic techniques and processes to create beauty upon the human body. In its simplest form, it enhances a person's appearance, bringing out color and features and hiding or smoothing out flaws, using cosmetic products. At its most extreme, makeup artistry creates imaginative characters and special effects for films, television, photography and theatre. There are two main categories of makeup artist. Cosmetic or fashion artists range from the clerk at the store makeup counter to the artist who prepares fashion models for photo shoots. All sorts understand not only how to make their subjects look their best, but they also usually understand how makeup works in relation to lighting and photography, as they are increasingly in demand for weddings, fashion shoots, corporate headshot photography, and other special events that will be photographed or recorded.",
        phone = '8381231232',
        street_address = '123 Rancho Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/makeup_renee.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = False,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = True,
        is_hair_coloring = False,
        is_perm = False,
    )

    business10 = Business(
        owner_id = '10',
        name = "Perfect Lashes",
        description = "Eyelash extensions naturally define your eyes and automatically make them look bolder and fluffier without eyeliner or mascara. Moreover, when you don't need to do eye makeup with perfect lines and shapes anymore, you end up saving a huge chunk of time every day",
        phone = '8381231233',
        street_address = '123 Diamond Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/perfect_lashes.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = True,
        is_men_haircut = False,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
    )

    business11 = Business(
        owner_id = '10',
        name = "Lash Pros",
        description = "Eyelash extensions naturally define your eyes and automatically make them look bolder and fluffier without eyeliner or mascara. Moreover, when you don't need to do eye makeup with perfect lines and shapes anymore, you end up saving a huge chunk of time every day",
        phone = '8381231254',
        street_address = '123 Diamond Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/lash_pros.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = True,
        is_men_haircut = False,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = False,
        is_hair_coloring = False,
        is_perm = False,
    )


    business12 = Business(
        owner_id = '11',
        name = "The Makeup Pros",
        description = "A makeup artist is someone who uses cosmetic techniques and processes to create beauty upon the human body. In its simplest form, it enhances a person's appearance, bringing out color and features and hiding or smoothing out flaws, using cosmetic products. At its most extreme, makeup artistry creates imaginative characters and special effects for films, television, photography and theatre. There are two main categories of makeup artist. Cosmetic or fashion artists range from the clerk at the store makeup counter to the artist who prepares fashion models for photo shoots. All sorts understand not only how to make their subjects look their best, but they also usually understand how makeup works in relation to lighting and photography, as they are increasingly in demand for weddings, fashion shoots, corporate headshot photography, and other special events that will be photographed or recorded.",
        phone = '8381231204',
        street_address = '123 Doeskin Ave',
        unit = '',
        city = 'Pasadena',
        state = 'CA',
        zip_code = '91001',
        capacity = 1,
        cover_photo = 'https://github.com/cc-y-zhao/Book-In-Style/blob/misc_v1/react-app/src/images/businessSeeds/makeup_pros.png?raw=true',
        monday = '9:00AM - 6:00PM',
        tuesday = '9:00AM - 6:00PM',
        wednesday = '9:00AM - 6:00PM',
        thursday = '9:00AM - 6:00PM',
        friday = '9:00AM - 6:00PM',
        saturday = '9:00AM - 6:00PM',
        sunday = '9:00AM - 6:00PM',
        is_women_haircut = False,
        is_lashes = False,
        is_men_haircut = False,
        is_spa = False,
        is_nail_salon = False,
        is_kid_haircut = False,
        is_hair_styling = False,
        is_makeup = True,
        is_hair_coloring = False,
        is_perm = False,
    )


    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)

    db.session.add(business7)
    db.session.add(business8)
    db.session.add(business9)
    db.session.add(business10)
    db.session.add(business11)
    db.session.add(business12)



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
        name = "Hair Coloring",
        price = 80,
    )

    db.session.add(service1)
    db.session.add(service2)
    db.session.add(service3)
    db.session.add(service4)

    # db.session.flush()
    # //////////////////////////////////////////////

    service5 = Service (
        business_id = '1',
        name = "Manicure",
        price = 40,
    )


    service6 = Service (
        business_id = '1',
        name = "Pedicure",
        price = 50,
    )


    service7 = Service (
        business_id = '1',
        name = "Foot Massage",
        price = 60,
    )


    service8 = Service (
        business_id = '1',
        name = "Gel Manicure",
        price = 55,
    )

    db.session.add(service5)
    db.session.add(service6)
    db.session.add(service7)
    db.session.add(service8)

    # db.session.flush()

    # //////////////////////////////////////////////

    service9 = Service (
        business_id = '3',
        name = "Men's Haircut",
        price = 30,
    )


    service10 = Service (
        business_id = '3',
        name = "Fade",
        price = 40,
    )


    service11 = Service (
        business_id = '3',
        name = "Beard Shaping",
        price = 30,
    )


    service12 = Service (
        business_id = '3',
        name = "Hair Coloring",
        price = 55,
    )

    db.session.add(service9)
    db.session.add(service10)
    db.session.add(service11)
    db.session.add(service12)

    # db.session.flush()

    # //////////////////////////////////////////////

    service13 = Service (
        business_id = '4',
        name = "Women's Haircut",
        price = 40,
    )


    service14 = Service (
        business_id = '4',
        name = "Men's Haircut",
        price = 20,
    )


    service15 = Service (
        business_id = '4',
        name = "Kid's Haircut",
        price = 15,
    )


    service16 = Service (
        business_id = '4',
        name = "Hair Coloring",
        price = 80,
    )

    service17 = Service (
        business_id = '4',
        name = "Blowout",
        price = 60,
    )

    service18 = Service (
        business_id = '4',
        name = "Updo Style",
        price = 80,
    )

    service19 = Service (
        business_id = '4',
        name = "Curly Perm",
        price = 120,
    )

    db.session.add(service13)
    db.session.add(service14)
    db.session.add(service15)
    db.session.add(service16)
    db.session.add(service17)
    db.session.add(service18)
    db.session.add(service19)


    # db.session.flush()

    # //////////////////////////////////////////////

    service20 = Service (
        business_id = '5',
        name = "30 Minute Full Body Massage",
        price = 60,
    )


    service21 = Service (
        business_id = '5',
        name = "60 Minute Full Body Massage",
        price = 100,
    )


    service22 = Service (
        business_id = '5',
        name = "Facial",
        price = 40,
    )


    service23 = Service (
        business_id = '5',
        name = "Sauna",
        price = 25,
    )

    db.session.add(service20)
    db.session.add(service21)
    db.session.add(service22)
    db.session.add(service23)

    # db.session.flush()

    # //////////////////////////////////////////////

    service24 = Service (
        business_id = '6',
        name = "Men's Haircut",
        price = 30,
    )


    service25 = Service (
        business_id = '6',
        name = "Fade",
        price = 40,
    )


    service26 = Service (
        business_id = '6',
        name = "Beard Shaping",
        price = 30,
    )


    service27 = Service (
        business_id = '6',
        name = "Hair Coloring",
        price = 55,
    )

    db.session.add(service24)
    db.session.add(service25)
    db.session.add(service26)
    db.session.add(service27)

    # db.session.flush()

    # //////////////////////////////////////////////

    service28 = Service (
        business_id = '7',
        name = "Manicure",
        price = 40,
    )


    service29 = Service (
        business_id = '7',
        name = "Pedicure",
        price = 50,
    )


    service30 = Service (
        business_id = '7',
        name = "Foot Massage",
        price = 60,
    )


    service31 = Service (
        business_id = '7',
        name = "Gel Manicure",
        price = 55,
    )

    db.session.add(service28)
    db.session.add(service29)
    db.session.add(service30)
    db.session.add(service31)

    # db.session.flush()

    # //////////////////////////////////////////////


    service32 = Service (
        business_id = '8',
        name = "30 Minute Full Body Massage",
        price = 60,
    )


    service33 = Service (
        business_id = '8',
        name = "60 Minute Full Body Massage",
        price = 100,
    )


    service34 = Service (
        business_id = '8',
        name = "Facial",
        price = 40,
    )


    service35 = Service (
        business_id = '8',
        name = "Sauna",
        price = 25,
    )

    db.session.add(service32)
    db.session.add(service33)
    db.session.add(service34)
    db.session.add(service35)

    # db.session.flush()

    # //////////////////////////////////////////////

    service36 = Service (
        business_id = '9',
        name = "Natural",
        price = 50,
    )


    service37 = Service (
        business_id = '9',
        name = "Glam",
        price = 70,
    )

    db.session.add(service36)
    db.session.add(service37)


    # db.session.flush()

    # //////////////////////////////////////////////

    service38 = Service (
        business_id = '10',
        name = "Natural Look - Regular Lashes",
        price = 50,
    )


    service39 = Service (
        business_id = '10',
        name = "Glam Look - Regular Lashes",
        price = 70,
    )

    service40 = Service (
        business_id = '10',
        name = "Natural Look - Mink Lashes",
        price = 100,
    )

    service41 = Service (
        business_id = '10',
        name = "Glam Look - Mink Lashes",
        price = 120,
    )

    db.session.add(service38)
    db.session.add(service39)
    db.session.add(service40)
    db.session.add(service41)



    # db.session.flush()

    # //////////////////////////////////////////////

    service42 = Service (
        business_id = '11',
        name = "Natural Look - Regular Lashes",
        price = 50,
    )


    service43 = Service (
        business_id = '11',
        name = "Glam Look - Regular Lashes",
        price = 70,
    )

    service44 = Service (
        business_id = '11',
        name = "Natural Look - Mink Lashes",
        price = 100,
    )

    service45 = Service (
        business_id = '11',
        name = "Glam Look - Mink Lashes",
        price = 120,
    )

    db.session.add(service42)
    db.session.add(service43)
    db.session.add(service44)
    db.session.add(service45)



    # db.session.flush()

    # //////////////////////////////////////////////

    service46 = Service (
        business_id = '12',
        name = "Natural",
        price = 50,
    )


    service47 = Service (
        business_id = '12',
        name = "Glam",
        price = 70,
    )

    db.session.add(service46)
    db.session.add(service47)


    # db.session.flush()












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
