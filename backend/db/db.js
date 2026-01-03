import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

//create a new pool -> 
//What is a pool -> a pool is a collection of connections to the database -> we use a pool to connect to the database and reuse the connections to the database
//A connection pool is a cache of database connections that are reused across requests. Instead of opening and closing a connection for each query, the pool maintains a set of ready connections.
//Without a pool (inefficient):
//1. Open a new connection for each request
//2. Close the connection after the request is complete
//3. This is inefficient because it creates a new connection for each request and closes it after the request is complete

//With a pool (efficient):
//1. Reuse the same connection for multiple requests
//2. Close the connection after the request is complete
//3. This is efficient because it reuses the same connection for multiple requests and closes it after the request is complete

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

//test connection to the database
pool.connect((err , client , release)=>{
    if(err){
        console.log(`❌ Error connecting to the database:` , err.stack)
    }
    else{
        console.log('✅ Connected to PostgreSQL database');
        release()
    }
})

export default pool; //exporting the pool so that it can be used in the controllers