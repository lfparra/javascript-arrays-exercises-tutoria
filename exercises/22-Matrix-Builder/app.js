function matrixBuilder(num) {
    let matrix = [];
    for (let i = 0; i<num ; i++){
        matrix.push([]);
        for (let j = 0; j <num; j++){
            matrix[i][j] = 1;
        }
    }
    return matrix;
};

// do not change anything from this line down
console.log(matrixBuilder(5))