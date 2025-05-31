const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeroes = marvel_heros.concat(dc_heros)
// console.log(allHeroes)

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros)