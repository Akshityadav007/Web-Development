const { Pool } = require('pg');
const fs = require('fs');
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.postgresql_URL;

const pool = new Pool({
	connectionString: connectionString,
	ssl: {
		ca: fs.readFileSync('ca.crt').toString(),
	},
});

export async function getClient() {
	const client = await pool.connect();
	return client;
}
