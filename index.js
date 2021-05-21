// Add your functions here
function map(array, funct) {
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(funct(array[i]))
    }
    return newArray
}

function reduce(array, funct, startingValue) {
    let total = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1
    for (i; i < array.length; i++) {
      total = funct(array[i], total)
    }
    return total
}