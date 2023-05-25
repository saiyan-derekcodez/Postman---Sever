import express from "express";
import db from './db.json' assert {type: "json"};
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).json(db);
})
 

app.get('/blog', (req,res) => {
    const id = req.query.id;
    const blog =db.filter(blog => blog.id == parseInt(id));

    if (blog.length) {
        res.status(200).json(blog);
    } else {
        res.status(404).json({message:"Not Found"})
    }
})

app.post('/addBlog', (req, res) => {
    db.push(req.body);

    res.end();
})

app.listen(3000, (req, res) => {
    console.log("You are live on port 3000")
})