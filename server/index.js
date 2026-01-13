import { Table } from "./db/table.js"

const users = new Table("./data/users.csv")
users.load()

console.log("Loaded users", users.selectAll())

users.insert(["3", "Han", "han@test.com"])
console.log("After insert", users.selectAll())