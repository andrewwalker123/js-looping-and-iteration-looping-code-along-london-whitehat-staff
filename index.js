// Code your solutions in this file
const printBadges = (badgesArray) => {
    for (let index = 0; (index<badgesArray.length); index++) {
        console.log(`Welcome ${badgesArray[index]}! You are employee #${index+1}.`)
    }
    return badgesArray
}
const tailsNeverFails = () => {
    let side = Math.random()>=0.5
    let counter = 0

    while (side) {
        counter++
        console.log(`You got ${counter} tails in a row!`)
        side = Math.random()>=0.5
    }
    return `You got ${counter} tails in a row!`
}