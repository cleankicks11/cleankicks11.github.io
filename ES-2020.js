//BigInt - type feature

//number.MAX_SAFE_INTEGER - use n for BigInt operation
Number.MAX_SAFE_INTEGER

n-1n

//optional Chaining operator

let will_pokemon = {
    pikachu: {
        species: 'MOuse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

//old style of if statement to verify objects
//let weight = will_pokemon.pikachu.weight
//console.log('weight:', weight)
//
//if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
//    let weight2 = andrei_pokemon.pikachu.weight
//} else {
//    let weight2 = undefined
//    console.log(weight2)
//}
//
//let weight2 = andrei_pokemon.pikachu.weight
//console.log('weight:', weight)


let weight3 = andrei_pokemon?.pikachu?.weight

console.log(weight3)

//Nullish coalescing Operator -- || or operator ?? null or undefined

let power = andrei_pokemon?.pikachu?.power || 'no power'

console.log(power)




