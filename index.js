// user: rahmanriad1
// password: eAPxifZ3H6emyyuk

const express = require("express");
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://rahmanriad1:eAPxifZ3H6emyyuk@cluster0.j6nwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");

        // POST Api
        app.post('/users', (req, res) => {
            console.log("Hitting The Post");
            res.send("Hit the Post")
        })
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send("Hello Node and MongoDB");
});

// Get Port Number
app.listen(port, () => {
    console.log("Listening Port: ", port);
});