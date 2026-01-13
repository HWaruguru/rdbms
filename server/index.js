import express from "express"
import cors from "cors"
import path from "path"
import { Database } from "./db/database.js"


const app = express()
const db = new Database()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(process.cwd(), "client")))
app.get("/users", (req, res)=> res.json(db.execute("SELECT * FROM users")))
app.post("/users", (req, res)=>{
    const {id,name,email} = req.body
    db.execute(`INSERT INTO users VALUES (${id}, ${name}, ${email})`)
    res.send("ok")
})

app.listen(3000, ()=>console.log("Sever running on port 3000"))
console.log("RDBMS started");