const username = Symbol("username")
const password = Symbol("password")

const user = {
    [username]: "Blperez",
    [password]: "134535",
    age: 30
}

console.log(user.username)
console.log(user.password)
