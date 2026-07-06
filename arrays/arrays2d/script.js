//2D arrays
//for(let i = 0; i<number_line;i++)
{
    //Outer Loop: represents the main list or the rows.
    //ıt performs only a single step and waits.f
  //  for(let j = 0; j <//number_column:j++)
    {
        //inner loop: For the single step of the outer loop, it runs to completion
        //until its own condition is met.
        //data[i][j]
    }
}
//accessing to 2d array elemetns
const seats = [['A1', 'A2','A3'], ['B1','B2', 'B3']];
console.log(seats[1][2]); // B3
//const matrix = [[1,2],[3,4]]; // is incorrect.
function getColumn(matrix, numberOfRows, colIndex) {
    let yeniDizi = [];
    for(let i  =0; i < numberOfRows;i++)
    {
        yeniDizi.push(matrix[i][colIndex]);
    }
    return yeniDizi;
}
//
let empty = "";
for(let i = 0; i<5;i++)
{
    empty;
    for(let j = 0; j<5;j++) {
        empty += "*";
    }
    console.log(empty);
}
