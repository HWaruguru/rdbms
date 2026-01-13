export function parse(sql) {
    const tokens = sql.trim().split(" ");
    const command = tokens[0].toUpperCase()

    if (command === "SELECT") {
        const table = tokens[3]
        return { type: "SELECT", table }
    }

    if (command === "INSERT") {
        const table = tokens[2]
        const values = sql.match(/\((.*?)\)/)[1].split(",")
        return { type: "INSERT", table, values }
    }
    throw new Error("Unknown SQL command")
}