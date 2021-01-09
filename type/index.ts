// import express from "express"
// const app = express(), port = 4000

import { connect } from "./mongodb/connect";
import { runServer } from "./runServer";

// app
//     .get('/',(req,res) => res.json({message:'hello world!'}))
//     .get('/users/:skip/:limit', (req,res) => {
//         const {skip, limit} = req.params
//         res.jsonp({skip, limit})
//     })
//     .listen(port, () => console.log(`http://localhost:${port} started...`))

connect()
    .then( async(connection) => {
        const db = await connection.db('ch12-2')
        return db
    })
    .then(runServer)
    .catch((e:Error) => console.log(e.message))