import readline from "readline";
import { Database } from "./db/database.js";

const db = new Database()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "rdbms> "
})

rl.prompt()

rl.on("line", (line) => {
    if (line.trim().toLowerCase() === "quit") {
        console.log("Goodbye 👋");
        process.exit(0);
    }
    try {
        console.log(db.execute(line));
    } catch (e) {
        console.error(e.message);
    }
    rl.prompt();
});