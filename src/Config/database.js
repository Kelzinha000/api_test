import dotenv from 'dotenv'
dotenv.config()

let db = {
    bd: process.env.BD_BD, 
    user: process.env.BD_USER, 
    password: process.env.BD_PASSWORD
}
if(process.env.NODE_ENV === 'test'){
    db = {
        bd: process.env.BD_TEST_BD, 
        user: process.env.BD_TEST_USER, 
        password: process.env.BD_TEST_PASSWORD
    }
}

export default db; 