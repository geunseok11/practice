import {connect} from "./mongodb/connect"
import { IFake } from "./fake"

const findLimitSkip = async() => {
    let connection, cursor
    try{
        connection = await connect()
        const db = await connection.db('ch12-2')
        const usersCollection = db.collection('users')

        let cursor = await usersCollection.find({}).sort({birthday:-1, name:1}).skip(100).limit(5)
        const result = await cursor.toArray()
        console.log(result.map((users:IFake) => ({name: users.name, birthday:users.birthday})))
    }catch(e){
        console.log(e.message)
    }finally{
        connection.close()
    }

}

findLimitSkip()