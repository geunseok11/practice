import {connect} from "../mongodb/connect"
import {ObjectId} from 'mongodb'

const findOneTest = async() => {
    let connection, cursor
    try{
        connection = await connect()
        const db = await connection.db('ch12-2')
        const personsCollection = db.collection('persons')

        cursor = personsCollection.find({})
        const foundPersons = await cursor.toAttay()
        console.log(foundPersons)

        const _id = foundPersons[0]._id
        const result = await personsCollection.findOne({_id})
        console.log(result)
    }catch(e){
        console.log(e.message)
    }finally{
        connection.close()
    }
}

findOneTest()