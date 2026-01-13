import fs from "fs";


export class Table {
    constructor(filePath) {
        this.filePath = filePath
        this.headers = []
        this.rows = []
    }

    load() {
        const data = fs.readFileSync(this.filePath, "utf8")
        const lines = data.trim().split("\n");
        this.headers = lines[0].split(",")
        this.rows = lines.slice(1).map(line => line.split(","))
    }

    save() {
        const csv = [
            this.headers.join(","),
            ...this.rows.map(row => row.join(","))
        ].join("\n")
        fs.writeFileSync(this.filePath, csv)
    }
    
    insert(values) {
        const idIndex = this.headers.indexOf("id");

        const exists = this.rows.some(row => row[idIndex] === values[idIndex]);
        if (exists) {
            throw new Error("Duplicate ID not allowed");
        }

        this.rows.push(values);
        this.save();
    }


    selectAll() {
        return this.rows.map(row => Object.fromEntries(this.headers.map((h, i) => [h, row[i]]))
        )
    }
}