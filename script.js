/*
    Función que recibe un array de valores y un valor n, donde se dividen en grupos con 
    el valor n (como que estuvieran apliados uno encima de otro) y se devuelve el numero
    de la columna que tiene la mayor suma
*/

function columnWithMaxSum ( nums, n) {
    const res = nums.reduce((ac, cv, i) => {
        ac[i%n] = nums[i] + (ac[i%n] || 0) ;
        return ac;
    }, []);

    return res.indexOf(Math.max(...res)) + 1;
}

/*
    Ejemplo

    4 14 12 7
    14 16 5 13
    7 16 11, 19

    25 46 28 39
*/

let response = columnWithMaxSum([4,14,12,7,14,16,5,13,7,16,11,19], 4); // La columna con la suma mayor: 2
console.log("🚀 ~ file: script.js:18 ~ response:", response)
