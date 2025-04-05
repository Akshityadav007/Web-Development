# Step 1 - Types of Databases
💡
What all we’ll learn today -
Simple - SQL vs NoSQL, how to create Postgres Databases, How to do CRUD on them
Advance - Relationships, Joins, Transactions

There are a few types of databases, all service different types of use-cases

**NoSQL databases**
- Store data in a schema-less fashion. Extremely lean and fast way to store data. 
- Examples - MongoDB, 
 
![alt text](image-3.png)
 
**Graph databases** 
- Data is stored in the form of a graph. Specially useful in cases where relationships need to be stored (social networks)
- Examples - Neo4j
 
![alt text](image-2.png)
 
**Vector databases**
- Stores data in the form of vectors
- Useful in Machine learning
- Examples - Pinecone
![alt text](image-1.png)
 
**SQL databases**
- Stores data in the form of rows
- Most full stack applications will use this
- Examples - MySQL, Postgres
 
![alt text](image.png)


# Step 2 - Why not NoSQL
 
You might’ve used MongoDB 
It’s schemaless properties make it ideal to for bootstraping a project fast.
But as your app grows, this property makes it very easy for data to get curropted
 
What is schemaless?
Different rows can have different schema (keys/types)
notion image
 
Problems?
1. Can lead to inconsistent database
2. Can cause runtime errors 
3. Is too flexible for an app that needs strictness
 
Upsides?
1. Can move very fast
2. Can change schema very easily
 
💡
You might think that mongoose does add strictness to the codebase because we used to define a schema there. 
That strictness is present at the Node.js level, not at the DB level. You can still put in erroneous data in the database that doesn’t follow that schema.


# Step 3 - Why SQL?
 
SQL databases have a strict schema. They require you to
1. Define your schema
2. Put in data that follows that schema
3. Update the schema as your app changes and perform migrations
 
So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it)
1. Running the database.
2. Using a library that let’s you connect and put data in it.
3. Creating a table and defining it’s schema.
4. Run queries on the database to interact with the data (Insert/Update/Delete)


# Step 4 - Creating a database
You can start a Potgres database in a few ways - 
 
**Using neondb**
https://neon.tech/ is a decent service that let’s you create a server. 
![alt text](image-4.png)
![alt text](image-5.png)

Connection String
```markdown
postgresql://username:password@ep-broken-frost-69135494.us-east-2.aws.neon.tech/calm-gobbler-41_db_2253874
```

**Using docker locally**
```markdown
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

Connection String
```markdown
postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable
```

**Using docker on windows**
How to run postgrSQL in windows terminal(if you have docker installed).
- fist run docker gui application that help in running commands in terminal.
- After that run it with the docker instance by the help of following command .
-- for the first time if the image is not downloaded .
-- docker run --name my-postgres1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres.
-- if the docker image is there, prior to use the it can simply be runned by docker run <image name>.
- After that ,
-- use docker exec -it my-postgres1 psql -U postgres -d postgres this command in terminal .
-- then enter the password and it will connect to localhost Postgress instance .
-- now you will be inside the postress command line that looks like postgres-#  .
- U can check it by running \\dt , (the command to display all the tables.)
💡
The connection string is similar to the string we had in mongoose.

Connection String
 
![alt text](image-6.png)
 
where does Akshit live ⇒ [1, 2, 2, 2, 3001, 100]
 
Akshit lives in India ⇒ [1, 2, 2, 2, 2,2 ]
Akshit is from chandigarh ⇒ [1, 2, 2, 2, 3] 
Akshit has been living in india, chandigarh ⇒ [1, 2, 2, 2, 2, 3]
The world is round ⇒ [1, 2, 10001, 1001, 001001]
Pacman is such a good game ⇒ [100, 10001, 20020, 1-001, 100]


# Step 5 - Using a library that let’s you connect and put data in it.
1. psql
- psql is a terminal-based front-end to PostgreSQL. 
- It provides an interactive command-line interface to the PostgreSQL (or TimescaleDB) database. 
- With psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results.

How to connect to your database?
- psql Comes bundled with postgresql. You don’t need it for this tutorial.
- We will directly be communicating with the database from Node.js
    psql -h p-broken-frost-69135494.us-east-2.aws.neon.tech -d database1 -U 100xdevs

 
2. pg
- pg is a Node.js library that you can use in your backend app to store data in the Postgres DB (similar to mongoose).
- We will be installing this eventually in our app.


# Step 6 - Creating a table and defining it’s schema.
 
**Tables in SQL**
A single database can have multiple tables inside. Think of them as collections in a MongoDB database.
![alt text](image-7.png)
![alt text](image-8.png)
 
- Until now, we have a database that we can interact with.
- The next step in case of postgres is to define the schema of your tables.
- SQL stands for Structured query language. 
- It is a language in which you can describe what/how you want to put data in the database.
- To create a table, the command to run is - 

    ```markdown
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    ```

There are a few parts of this SQL statement, let’s decode them one by one
1. CREATE TABLE users
CREATE TABLE users: This command initiates the creation of a new table in the database named users.

2. id SERIAL PRIMARY KEY
- id: The name of the first column in the users table, typically used as a unique identifier for each row (user). Similar to _id in mongodb
- SERIAL: A PostgreSQL-specific data type for creating an auto-incrementing integer. Every time a new row is inserted, this value automatically increments, ensuring each user has a unique id.
- PRIMARY KEY: This constraint specifies that the id column is the primary key for the table, meaning it uniquely identifies each row. Values in this column must be unique and not null.

3.  email VARCHAR(255) UNIQUE NOT NULL,
- email: The name of the second column, intended to store the user's username.
- VARCHAR(50): A variable character string data type that can store up to 50 characters. It's used here to limit the length of the username.
- UNIQUE: This constraint ensures that all values in the username column are unique across the table. No two users can have the same username.
- NOT NULL: This constraint prevents null values from being inserted into the username column. Every row must have a username value.

4. password VARCHAR(255) NOT NUL
Same as above, can be non unique

5. created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
- created_at: The name of the fifth column, intended to store the timestamp when the user was created.
- TIMESTAMP WITH TIME ZONE: This data type stores both a timestamp and a time zone, allowing for the precise tracking of when an event occurred, regardless of the user's or server's time zone.
- DEFAULT CURRENT_TIMESTAMP: This default value automatically sets the created_at column to the date and time at which the row is inserted into the table, using the current timestamp of the database server.
 
💡
If you have access to a database right now, try running this command to create a simple table in there

```markdown
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

Then try running 

```markdown
\dt;
```

to see if the table has been created or not


# Step 7 - Interacting with the database
 
There are 4 things you’d like to do with a database 
 
1. INSERT
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');

💡
Notice how you didn’t have to specify the id  because it auto increments
2. UPDATE
UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';

3. DELETE
DELETE FROM users
WHERE id = 1;

4. Select
SELECT * FROM users
WHERE id = 1;

 
💡
Try running all 4 of these in your terminal if you have psql  installed locally.
If not, that’s fine we’ll eventually be doing these through the pg  library.


# Step 8 - How to do queries from a Node.js app?

In the end, postgres exposes a protocol that someone needs to talk to be able to send these commands (update, delete) to the database.
psql  is one such library that takes commands from your terminal and sends it over to the database.
To do the same in a Node.js , you can use one of many Postgres clients 
pg library
https://www.npmjs.com/package/pg
Non-blocking PostgreSQL client for Node.js. 
Documentation - https://node-postgres.com/
 
Connecting - 

```javascript
import { Client } from 'pg'
 
const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
  user: 'database-user',
  password: 'secretpassword!!',
})

client.connect()
```

 
Querying -

```javascript
const result = await client.query('SELECT * FROM USERS;')
console.log(result)
```

 
// write a function to create a users table in your database.

```javascript
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();
```

 

# Step 9 - Creating a simple Node.js app

Initialise an empty typescript project

```markdown
npm init -y
npx tsc --init
```

Change the rootDir and outDir in tsconfig.json

```json
"rootDir": "./src",
"outDir": "./dist",
```

Install the pg library and it’s types (because we’re using TS)

```markdown
npm install pg
npm install @types/pg
```

Create a simple Node.js app that lets you put data
Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert

Answer

```javascript
import { Client } from 'pg';

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
```

💡
This is an insecure way to store data in your tables. 
When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.
More secure way to store data.
Update the code so you don’t put user provided fields in the SQL string
What are user provided strings?
In your final app, this insert statement will be done when a user signs up on your app. 
Email, username, password are all user provided strings
What is the SQL string ?
const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";

Hint
const insertQuery = 'INSERT INTO example_table(column1, column2) VALUES($1, $2)';
const res = await client.query(insertQuery, [column1Value, column2Value]);

 
Solution

```javascript
import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
```

Query data
Write a function getUser that lets you fetch data from the database given a email as input.

```javascript
import { Client } from 'pg';

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('user5@example.com').catch(console.error);
```



# Step 10 - Relationships and Transactions
Relationships let you store data in different tables and relate it with each other.
Relationships in Mongodb
Since mongodb is a NoSQL database, you can store any shape of data in it. 
If I ask you to store a users details along with their address, you can store it in an object that has the address details.
![alt text](image-9.png)
 
Relationships in SQL
Since SQL can not store objects as such, we need to define two different tables to store this data in.
 
![alt text](image-10.png)

This is called a relationship , which means that the Address table is related to the Users table.
When defining the table, you need to define the relationship 

```markdown
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

 
SQL query
To insert the address of a user - 

```markdown
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
```

 
Now if you want to get the address of a user given an id , you can run the following query -

```markdown
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
```

Extra - Transactions in SQL
💡
Good question to have at this point is what queries are run when the user signs up and sends both their information and their address in a single request.
Do we send two SQL queries into the database? What if one of the queries (address query for example) fails? 
This would require transactions  in SQL to ensure either both the user information and address goes in, or neither does

**SQL Query**

```markdown
BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;
```

**Node.js Code**

```javascript
import { Client } from 'pg';

async function insertUserAndAddress(
    username: string, 
    email: string, 
    password: string, 
    city: string, 
    country: string, 
    street: string, 
    pincode: string
) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();

        // Start transaction
        await client.query('BEGIN');

        // Insert user
        const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;

        // Insert address using the returned user ID
        const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(insertAddressText, [userId, city, country, street, pincode]);

        // Commit transaction
        await client.query('COMMIT');

        console.log('User and address inserted successfully');
    } catch (err) {
        await client.query('ROLLBACK'); // Roll back the transaction on error
        console.error('Error during transaction, rolled back.', err);
        throw err;
    } finally {
        await client.end(); // Close the client connection
    }
}

// Example usage
insertUserAndAddress(
    'johndoe', 
    'john.doe@example.com', 
    'securepassword123', 
    'New York', 
    'USA', 
    '123 Broadway St', 
    '10001'
);
```



# Step 11 - Joins
Defining relationships is easy.
What’s hard is joining  data from two (or more) tables together.
For example, if I ask you to fetch me a users details and  their address, what SQL would you run?

**Approach 1 (Bad)**

```markdown
-- Query 1: Fetch user's details
SELECT id, username, email
FROM users
WHERE id = YOUR_USER_ID;

-- Query 2: Fetch user's address
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = YOUR_USER_ID;
```

**Approach 2 (using joins)**

```markdown
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';

SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;
```

 
Now try converting the same to your node app

**Approach 1 (Bad)**

```javascript
import { Client } from 'pg';

// Async function to fetch user details and address separately
async function getUserDetailsAndAddressSeparately(userId: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();

        // Fetch user details
        const userDetailsQuery = 'SELECT id, username, email FROM users WHERE id = $1';
        const userDetails = await client.query(userDetailsQuery, [userId]);

        // Fetch user address
        const userAddressQuery = 'SELECT city, country, street, pincode FROM addresses WHERE user_id = $1';
        const userAddress = await client.query(userAddressQuery, [userId]);

        if (userDetails.rows.length > 0) {
            console.log('User found:', userDetails.rows[0]);
            console.log('Address:', userAddress.rows.length > 0 ? userAddress.rows[0] : 'No address found');
            return { user: userDetails.rows[0], address: userAddress.rows.length > 0 ? userAddress.rows[0] : null };
        } else {
            console.log('No user found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}
getUserDetailsAndAddressSeparately("1");
```

**Approach 2 (using joins)**

```javascript
import { Client } from 'pg';

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}
getUserDetailsWithAddress("1");
```

 
No
 
Benefits of using a join - 
Reduced Latency
Simplified Application Logic
Transactional Integrity
 
Types of Joins
1. INNER JOIN
Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;

2. LEFT JOIN
Returns all rows from the left table, and the matched rows from the right table.
Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;

3. RIGHT JOIN
Returns all rows from the right table, and the matched rows from the left table.
Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;

4. FULL JOIN
Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;



# **ORMs**


Object-Relational Mapping (ORM) is a crucial concept in modern software development, particularly when dealing with databases in object-oriented programming languages. Prisma is an ORM that exemplifies the use of this technique. Here's an elaboration on ORMs, with a focus on how Prisma fits into this context:

![alt text](image-12.png)

# What are ORMs?
Official Definition
ORM: Object-Relational Mapping is a programming technique for converting data between incompatible systems using object-oriented programming languages. It creates a "virtual object database" that developers can interact with using their programming language instead of direct database queries.
Abstraction: ORMs abstract the complexities of the database, allowing developers to work with database records as if they were objects in their code. This includes handling CRUD operations (Create, Read, Update, Delete) and managing database connections and transactions.
Simplified Definition
Ease of Use: ORMs simplify database interactions by letting developers use the syntax and paradigms of their programming language rather than writing SQL queries. This can make code more readable and maintainable.
Prisma as an ORM
Prisma is a next-generation ORM that takes the concept of ORMs further by providing additional tools and features that enhance the developer experience:
Schema Definition: Prisma uses a declarative Prisma schema to define the application's data model. This schema is used to generate a Prisma Client that provides type-safe database access.
Migrations: Prisma Migrate allows developers to define and perform database schema migrations in a controlled and versioned manner.
Type Safety: Prisma ensures type safety by generating a client that is tailored to the schema, reducing the risk of runtime errors due to mismatched data types.
Query Building: Prisma Client provides a fluent API for building queries, which can be more intuitive than writing raw SQL, especially for complex queries.
Performance: Prisma is designed to be performant and efficient, with a focus on minimizing the overhead typically associated with ORMs.
 
ORMs, including Prisma, offer a high-level abstraction over database interactions, making it easier for developers to work with data in the context of their applications.
 
# Why ORMs?
Object-Relational Mapping (ORM) frameworks provide a bridge between the object-oriented world of application development and the relational world of databases. They offer several advantages that make them an attractive choice for developers. Let's delve into these benefits with explanations and code snippets to illustrate their impact.
1. Simpler Syntax
ORMs allow developers to work with high-level programming constructs instead of writing SQL queries directly. This means you can manipulate database entries using objects and methods in your programming language.
Without ORM: SQL Query

```markdown
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
```

With ORM: Object Manipulation (Example in JavaScript using Prisma)

```javascript
await prisma.users.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
  },
});
```

2. Database Abstraction

ORMs provide a unified API to interact with different databases, making it easier to switch databases if needed without rewriting your data access layer.

Prisma Example: The same Prisma client code works across different databases. Switching from PostgreSQL to MySQL, for instance, primarily requires changes in the configuration, not in the code that interacts with the database.

Prisma Schema for PostgreSQL

```markdown
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Prisma Schema for MySQL

```markdown
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

3. Type Safety/Auto-completion

Modern ORMs, especially those used in statically typed languages or with TypeScript support, offer type safety and auto-completion, reducing runtime errors and improving developer productivity.

TypeScript Example with Prisma: When you query the database, the Prisma client provides auto-completion for table names and columns, and the returned data is automatically typed.

```markdown
// TypeScript understands the structure of the expected result,
// providing auto-completion and type checking
const user = await prisma.user.findUnique({
  where: {
    email: 'john@example.com',
  },
});
```

4. Automatic Migrations

ORMs can automate the process of generating and applying database schema migrations, making it easier to evolve your database schema as your application grows.

Prisma Migration Example: Prisma Migrate generates SQL migration files for your schema changes, which can be applied to update the database schema.

Generate Migration

```markdown
npx prisma migrate dev --name add_phone_number
```

This command might generate a SQL file similar to:

```markdown
-- Migration SQL generated by Prisma Migrate
ALTER TABLE "users"
ADD COLUMN "phone_number" VARCHAR(15);
```

Apply Migration
Applying migrations is handled by Prisma Migrate when you run the above command, keeping your database schema in sync with your Prisma schema.
 
# Prisma

Prisma is a next-generation ORM (Object-Relational Mapping) tool for Node.js and TypeScript applications. It simplifies database workflows by providing a robust set of features that enhance developer productivity and code quality. Let's delve into the core components that make Prisma a powerful tool for modern application development.
 
![alt text](image-11.png)

1. Data Model

Prisma uses a Prisma Schema file to define the data model of your application. This schema acts as a single source of truth for your database structure, including tables, columns, relationships, and more. The Prisma Schema Language (PSL) is intuitive yet powerful, allowing you to define your database schema in a clear and concise manner.

Example Prisma Schema:

```markdown
// schema.prisma

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

This schema defines two models, User and Post, representing tables in the database. It specifies fields for each table, their types, and the relationship between users and posts.

2. Automated Migrations

Prisma Migrate is a feature that automatically generates and runs database migrations based on changes to your Prisma schema. This means that when you modify your data model, Prisma Migrate can automatically update your database schema to match, without the need for manual SQL migration scripts.

Generating and Applying Migrations:

```markdown
npx prisma migrate dev --name init
```

This command generates SQL migration files for the current state of your Prisma schema and applies them to your database, creating or altering tables and relationships as defined.

3. Type Safety

Prisma Client is a type-safe database client generated based on your Prisma schema. This means that every database query you write is checked against the schema, significantly reducing the risk of runtime errors due to data type mismatches. The client provides full auto-completion and type checking in supported editors, making it easier to write and refactor code confidently.

Example Usage of Prisma Client:

```javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(newUser);
}

main();
```

4. Auto-Completion

Prisma's integration with code editors (such as VSCode) provides auto-completion for model fields, operations, and even potential query results. This feature not only speeds up development but also helps prevent errors by ensuring that your queries align with the defined schema.

Auto-Completion Example:
When writing queries with Prisma Client, your editor can suggest model fields, available methods, and more, based on the Prisma schema.
 
![alt text](image-13.png)
 
# Installing Prisma

Creating a simple TODO app with Prisma in a Node.js environment involves several steps, from initializing your Node.js project to setting up Prisma. Here's a detailed guide to get you started:

Step 1: Initialize an Empty Node.js Project
First, create a new directory for your project and navigate into it. Then, initialize a new Node.js project:

```markdown
mkdir todo-app
cd todo-app
npm init -y
```

This command creates a package.json file with default values.

Step 2: Add Dependencies

Install Prisma, TypeScript, ts-node (for running TypeScript files directly), and @types/node (for Node.js type definitions) as development dependencies:

```console
npm install prisma typescript ts-node @types/node --save-dev
```

Step 3: Initialize TypeScript

Set up TypeScript in your project:

```console
npx tsc --init
```

This command creates a tsconfig.json file, which configures TypeScript options.

Step 4: Configure TypeScript

Edit the tsconfig.json file to specify the root directory and the output directory for the compiled JavaScript files:

- Change "rootDir" to "./src". This tells TypeScript to look for .ts files in the src directory.
- Change "outDir" to "./dist". Compiled .js files will be output to the dist directory.

Your tsconfig.json should include these changes like so:
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

Step 5: Initialize a Fresh Prisma Project

Initialize Prisma in your project:

```console
npx prisma init
```
 
![alt text](image-14.png)
 
This command performs several actions:

- Creates a prisma directory with a schema.prisma file inside. This is where you define your database schema.
- Creates a .env file in the root of your project. This is where you set environment variables, such as your database connection string.

# Next Steps

After initializing Prisma, you can proceed to define your database schema in the schema.prisma file. For a TODO app, you might define a Todo model like this:

```markdown
// prisma/schema.prisma

datasource db {
  provider = "postgresql" // Or another database provider like "mysql", "sqlite", etc.
  url      = env("DATABASE_URL")
}

model Todo {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
}
```

Remember to replace "postgresql" with your database provider and set your database connection string in the .env file:

```markdown
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

Finally, to create the Todo table in your database, run Prisma Migrate:

```console
npx prisma migrate dev --name init
```

This command generates and applies a migration based on your schema changes.
 
You can start adding functionality to your TODO app, such as creating, reading, updating, and deleting TODO items using Prisma Client in your application code.
 
# Selecting Your Database

Prisma supports a variety of databases, including relational databases like MySQL and PostgreSQL, as well as the document-oriented database MongoDB (in Preview). Selecting and configuring your database with Prisma involves updating the schema.prisma file and setting the database connection URL in your environment variables. Here's how you can do it:

Step 1: Update schema.prisma for Your Database

The schema.prisma file contains a datasource block where you specify your database connection. You need to update the provider field according to the database you want to use.

For PostgreSQL

```markdown
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

For MySQL

```markdown
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

For MongoDB (Preview)

```markdown
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

Step 2: Set Your Database Connection URL

The url field in the datasource block references an environment variable DATABASE_URL where you should set your database connection string. This is done in the .env file in the root of your project.

Example .env Content for PostgreSQL

```markdown
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
```

Replace username, password, localhost, 5432, and mydatabase with your actual database credentials and details.

Example .env Content for MySQL

```markdown
DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"
```

Example .env Content for MongoDB

```markdown
DATABASE_URL="mongodb+srv://username:password@cluster0.example.mongodb.net/mydatabase"
```

Step 3: Install the Prisma VSCode Extension

To enhance your development experience with Prisma, it's highly recommended to install the Prisma VSCode extension. This extension provides features like syntax highlighting, formatting, auto-completion, and a visual overview of your Prisma schema.

You can install the Prisma extension directly from the Visual Studio Code Marketplace:
1. Open VSCode.
2. Go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X
3. Search for "Prisma".
4. Find the Prisma extension by Prisma and click "Install".
 
Remember, when using MongoDB with Prisma, it's currently in Preview, so it's a good idea to keep an eye on the official Prisma documentation for any updates or changes.
 
 
# Defining Models

Defining your data model in Prisma involves specifying the structure of your database tables and their relationships directly in the schema.prisma file. This schema acts as a blueprint for your database, allowing Prisma to generate the necessary code to interact with your data in a type-safe manner. Let's walk through the process of defining a data model for a simple application with Users and Todos tables, and then generating the corresponding migrations to update your database schema.

Step 1: Define Your Data Model in schema.prisma

To add a Users and a Todos table to your application, you'll define two models in your schema.prisma file: User and Todo. At this stage, we won't worry about defining relationships between these tables.

```markdown
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Or your database provider of choice
  url      = env("DATABASE_URL")
}

model User {
  id        Int     @id @default(autoincrement())
  username  String  @unique
  password  String
  firstName String
  lastName  String
}

model Todo {
  id          Int     @id @default(autoincrement())
  title       String
  description String
  done        Boolean @default(false)
  userId      Int     // This will later be used to establish a relationship
}
```

In this schema:

- Each model keyword defines a table in your database.
- The fields within each model represent columns in the table.
- Attributes like @id, @default(autoincrement()), and @unique specify column constraints and behaviors.

Step 2: Generate Migrations

After defining your data model, the next step is to generate migrations to create these tables in your database. Prisma Migrate translates changes in your Prisma schema into SQL migration files, which are then applied to your database to update its schema.

Run the following command to generate and apply migrations:

```markdown
npx prisma migrate dev --name initialize_schema
```

This command does a few things:

- It generates SQL migration files that represent the schema changes (in this case, creating the User and Todo tables).
- It applies these migrations to your database, creating the tables.
- It generates or updates the Prisma Client, which you use to interact with your database in your application code.

Step 3: Inspect the Migrations Folder

After running the migrations, you can find them in the prisma/migrations folder in your project directory. Each migration is stored in a separate folder, named with a timestamp and the name you provided (initialize_schema in this case). Inside, you'll find:

- A migration.sql file containing the SQL commands that were run against your database.
- A README.md file with information about the migration.

Inspecting these files can give you insights into the exact changes made to your database schema.
 

By defining your data model in the schema.prisma file and using Prisma Migrate, you've successfully created a Users and a Todos table in your database without manually writing any SQL. 
 
This process not only simplifies database schema management but also ensures that your application's data model is version-controlled and easily reproducible across different environments.
 
# Exploring Your Databases

Exploring your database with psql after Prisma has created tables for you is a straightforward process. psql is a command-line interface for interacting with PostgreSQL that allows you to execute queries, view table structures, and manage your database. Here's how you can use psql to explore the tables created by Prisma:

Step 1: Connect to Your Database

Open your terminal and use the psql command to connect to your PostgreSQL database. Replace localhost, postgres, and postgres with your database's host, database name, and user, respectively, if they are different.

```markdown
psql -h localhost -d postgres -U postgres
```

You might be prompted to enter the password for the PostgreSQL user.

Step 2: List Tables

Once connected, you can list all the tables in your database using the \\dt command.

```markdown
\\dt
```

This command will display a list of tables, including those created by Prisma. You should see the User and Todo tables listed if you followed the previous steps to define your data model and run migrations.

Step 3: Describe Table Structure

To get detailed information about the structure of a specific table, use the \\d command followed by the table name. For example, to describe the User table:

```markdown
\\d "User"
```

This will show you the columns, their data types, and any constraints or indexes associated with the table.

Step 4: Query Data

You can also execute SQL queries directly to retrieve data from your tables. For instance, to select all records from the User table:

```markdown
SELECT * FROM "User";
```

Step 5: Exit psql

When you're done exploring, you can exit psql by typing \\q and pressing Enter.

```markdown
\\q
```
 
Using psql to explore your database gives you a direct view of the underlying structure and data. It's a powerful tool for database administration and can be particularly useful for verifying the results of ORM operations, such as those performed by Prisma. Whether you're developing, debugging, or simply curious about the state of your database, psql provides the necessary commands to interact with and inspect your PostgreSQL database effectively.
 
# Prisma Client

What is a Prisma Client?

The Prisma Client is an auto-generated and type-safe query builder that's tailored to your data model. It provides a fluent API that lets you compose queries in a way that is both intuitive and close to natural language. The client abstracts away the SQL layer, offering methods that correspond to various database operations, such as creating, reading, updating, and deleting records.

How Does the Prisma Client Work?

When you use Prisma Client in your application, you write code like this:

```markdown
const newUser = await prisma.user.create({
  data: {
    email: "harkirat@gmail.com",
  },
});
```

Under the hood, Prisma Client converts this operation into an SQL query similar to:

```markdown
INSERT INTO users (email) VALUES ('harkirat@gmail.com');
```

This conversion is handled automatically, so you don't need to write SQL queries manually.

**How to Generate the Prisma Client?**

After defining your data model in the schema.prisma file, you can generate the Prisma Client by running the following command in your terminal:

```markdown
npx prisma generate
```

This command reads your Prisma schema and generates the client code accordingly. The generated client includes all the necessary functions to interact with your database based on the models you've defined.

**Using the Generated Prisma Client**

Once generated, you can import and use the Prisma Client in your Node.js application to perform database operations. Here's an example of how you might use the client in an async function:

```javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: "harkirat@gmail.com",
    },
  });
  console.log(newUser);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

In this example, we're using the create method on the user model to insert a new user into the database. The Prisma Client provides similar methods for other CRUD operations and supports complex queries, including filtering, sorting, and joining data across tables.
 
**Creating Your First Application**

1. Insert

Creating a function to insert data into the Users table using Prisma in a TypeScript application

The provided solution defines an asynchronous function insertUser that takes four parameters: username, password, firstName, and lastName. This function uses the Prisma Client to insert a new user into the Users table with the provided details.

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  });
  console.log(res);
}

insertUser("admin1", "123456", "harkirat", "singh");
```

Here's a breakdown of the key parts of this function:

- Prisma Client Initialization: const prisma = new PrismaClient(); creates a new instance of the Prisma Client. This instance is used to perform operations on your database.
- The insertUser Function: This is an asynchronous function, indicated by the async keyword. It's designed to insert a new user into the database.
- Inserting Data: prisma.user.create() is a method provided by the Prisma Client to create (or insert) a new record in the user table. The method takes an object with a data property, which itself is an object containing the fields to be inserted into the table.
- Awaiting the Promise: The await keyword is used to wait for the promise returned by prisma.user.create() to resolve. This is necessary because database operations are asynchronous.
- Logging the Result: The result of the insert operation (the newly created user record) is stored in the res variable and then logged to the console.
- Executing the Function: Finally, insertUser("admin1", "123456", "harkirat", "singh"); calls the function with sample data. In a real application, you would likely call this function in response to user input, such as a form submission.
 
2. Update

Updating data in the Users table using Prisma in a TypeScript application involves specifying the criteria for selecting the user to update and providing the new data for the selected fields.

The solution defines an asynchronous function updateUser that takes a username and an object containing the new firstName and lastName values. This function uses the Prisma Client to update the specified user in the database.

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstName: "new name",
    lastName: "singh"
});
```

Here's a breakdown of the key components:

- Prisma Client Initialization: const prisma = new PrismaClient(); creates a new instance of the Prisma Client, which is used to interact with your database.
- The UpdateParams Interface: This TypeScript interface defines the shape of the object expected by the updateUser function for the update operation. It specifies that both firstName and lastName should be strings.
- The updateUser Function: This asynchronous function is designed to update a user's firstName and lastName in the database. It takes a username to identify the user to update and an UpdateParams object containing the new values.
- Updating Data: prisma.user.update() is a method provided by the Prisma Client to update a record in the user table. It requires two main arguments:
  i. where: An object specifying the criteria to find the record to update. In this case, it's the username of the user.
  ii. data: An object containing the fields to update and their new values.
- Awaiting the Promise: The await keyword pauses execution until the promise returned by prisma.user.update() is resolved, ensuring the update operation completes before proceeding.
- Logging the Result: The result of the update operation (the updated user record) is stored in the res variable and then logged to the console.
- Executing the Function: The function is called with a sample username and new values for firstName and lastName. In a real application, these values would likely come from user input.
 
 
3. Get a User’s Detail

Fetching a user's details from the database based on their username can be done efficiently using Prisma Client.

The solution defines an asynchronous function getUser that takes a username as an argument. This function uses the Prisma Client to find the first user that matches the given username.

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        username: username
    }
  });
  console.log(user);
}

getUser("admin1");
```

Here's a breakdown of the key components:

- Prisma Client Initialization: const prisma = new PrismaClient(); creates a new instance of the Prisma Client, which is used to interact with your database.
- The getUser Function: This asynchronous function is designed to fetch a user's details from the database. It takes a username to identify the user.
- Fetching Data: prisma.user.findFirst() is a method provided by the Prisma Client to retrieve the first record that matches the given criteria from the user table. It requires an object with a where clause:
  i. where: An object specifying the criteria to find the record. In this case, it's looking for a user with a matching username.
- Awaiting the Promise: The await keyword is used to wait for the promise returned by prisma.user.findFirst() to resolve. This is necessary because database operations are asynchronous.
- Logging the Result: The result of the fetch operation (the user record) is stored in the user variable and then logged to the console.
- Executing the Function: The function is called with a sample username of "admin1". In a real application, this value would likely come from user input, such as a login form or a search query.







