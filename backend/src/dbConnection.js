const { MongoClient, ServerApiVersion } = require("mongodb")
require("dotenv").config()

const uri = process.env.URI_MONGO

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

const collectionBlog = () => {
    const db = client.db()
    return db.collection("blogs")
}

module.exports = collectionBlog
