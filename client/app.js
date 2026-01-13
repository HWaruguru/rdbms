const load = async () => {
    const res = await fetch("http://localhost:3000/users")
    const data = await res.json()
    document.getElementById("out").textContent = JSON.stringify(data, null, 2)
}

const add = async () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, email })
    })
    load()
}