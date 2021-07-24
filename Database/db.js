const env = require('dotenv').config();
// console.log(env, "env is running.....");

var knex = require('knex')({
    client: "mysql",
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
})
// create auth_dtails table
knex.schema.createTable("users",(table)=>{
    table.increments("id").primary();
    table.string('name');
    table.string('email');
    table.string('password');
}).then(()=>{
    console.log({"sucess": "user table created suceesfully"});
}).catch(()=>{
    console.log({"exist":"user table already exist"});
});

module.exports = knex;