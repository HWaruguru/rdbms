import { Table } from "./db/table.js"
import {parse} from "./db/parser.js"

const users = new Table("./data/users.csv")
users.load()

console.log("Loaded users", users.selectAll())

users.insert(["3", "Han", "han@test.com"])
console.log("After insert", users.selectAll())


console.log(parse("SELECT * FROM users"))
console.log(parse("INSERT INTO users VALUES (4, charlie, charlie@gmail.com)"))