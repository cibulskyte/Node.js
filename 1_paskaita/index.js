const casual = require('casual');
console.log(casual.city )

const randomName = casual.full_name
const randomCity=casual.city
const randomNumber = casual.integer(1,10)

console.log(`${randomName} ${randomCity} ${randomNumber}`)

