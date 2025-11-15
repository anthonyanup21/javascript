const user1={
    name:"anup"
}
Object.seal(user1)

delete user1.name
console.log(user1)