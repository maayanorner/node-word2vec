const linearAlgebra = require('linear-algebra')(),     // initialise it
	Vector = linearAlgebra.Vector,
	Matrix = linearAlgebra.Matrix;


function dot(v1, v2) {
	return new Matrix(v1).dot(new Matrix(v2).trans())['data'][0][0]
}

function add(v1, v2) {
	return new Matrix(v1).plus(new Matrix(v2))['data'][0]
}

// for (_=0; _ < 100000000; _++) {
// 	dot([1,3,4,3,6],[1,5,1,3,6])
// }
//console.log(add([1,3,4,3,6],[1,5,1,3,6]))
