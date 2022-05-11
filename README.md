# Book-In-Style

<!-- <img width="1023" alt="image" src="https://user-images.githubusercontent.com/89670029/163025684-5dff7a8f-0a23-4e49-ace0-b24a1705d73a.png"> -->

[Book-In-Style](https://book-in-style.herokuapp.com/) is inspired by StyleSeat (https://www.styleseat.com/), an online destination for beauty & wellness where clients can discover new services and providers, book appointments, leave reviews, and more. 

## Meet the developer behind Book-In-Style~

Book-In-Style is brought to you by [Cecilia Zhao](https://www.linkedin.com/in/ceciliazh/). Thank you for visiting!

---

# Index


### Navigating this ReadMe

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Features](#features)
- [Technical Implementation Details](#technical-implementation-details)
- [Helpful Commands](#helpful-commands)

<br>

# Technologies Used

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python" width="60" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" alt="sqlalchemy" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="60" />

<br>

# Getting Started

<details>
<summary>How do I run this project?</summary>

1. Clone this repo.

   ```bash
   git clone git@github.com:cc-y-zhao/Book-In-Style.git
   ```

2. Install dependencies from the root directory

   ```bash
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

   ```bash
   pipenv install psycopg2-binary
   ```

3. Install dependencies from the `react-app` directory

   ```bash
   npm install
   ```

4. In the `react-app` directory, create a `.env` file using the `.env.example` that will be used to define your desired `PORT` (preferably 5000).

5. In the root directory, create a `.env` file that will be used to define your environment variables.

   > Use the `.env.example` found in the root directory as a template. Use a secured combination of characters for your `SECRET_KEY`. The `DATABASE_URL` should be in the format of `postgresql://<database_user>:<password>@localhost/<database_name>`

6. Create a **user** using the same credentials in the `.env` file of the root directory with the ability to create databases

   ```bash
    psql -c "CREATE USER <database_username> PASSWORD '<password>' CREATEDB"
   ```

7. Create a **database** using the same credentials in the `.env` file of the root directory

   ```bash
    psql -c "CREATE DATABASE <database_name> WITH OWNER <database_username>"
   ```

8. Enter `pipenv` to migrate and seed your database

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

9. Inside of the `pipenv` shell, start the services in the root directory

   ```bash
   flask run
   ```

10. In a separate terminal, start the services in the `react-app` directory

    ```bash
    npm start
    ```

</details>

<details>
<summary>How do I log in as a Demo User?</summary>
On the log in page, click "Demo Login".
   
   
</details>

<br>

# Features

Logged in users can perform the following actions.

- View all businesses listed and information pertaining to them (services, reviews, business description)
- Create, read, edit, and delete appointments with businesses 
- Create, read, edit, and business listings 
- Create, read, edit, and delete reviews 
- Create, read, and delete favorites

<br>


# Helpful commands

| Command              | Purpose                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `pipenv shell`       | Open your terminal in the virtual environment and be able to run flask commands without a prefix                                             |
| `pipenv run`         | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands |
| `flask db upgrade`   | Check in with the database and run any needed migrations                                                                                     |
| `flask db downgrade` | Check in with the database and revert any needed migrations                                                                                  |
| `flask seed all`     | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details                |
