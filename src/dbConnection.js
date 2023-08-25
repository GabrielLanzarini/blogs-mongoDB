const { MongoClient, ServerApiVersion } = require("mongodb")

const uri = ""

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export const collectionBlog = () => {
    const db = client.db()
    return db.collection("blogs")
}