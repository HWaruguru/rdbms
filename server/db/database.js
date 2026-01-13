import {Table} from "./table.js";
import {parse } from "./parser.js"

export class Database {
    constructor() {
        this.tables = { users: new Table("./data/users.csv") }
        this.tables.users.load()
    }

    execute(sql) {
        const cmd = parse(sql)
        if (cmd.type === "SELECT") return this.tables[cmd.table].selectAll()
        if (cmd.type === "INSERT") {
            this.tables[cmd.table].insert(cmd.values)
            return "Inserted"
        }
    }
}