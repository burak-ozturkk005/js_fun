
function calcAverage(score1,score2,score3)
{
    return (score1 + score2 + score3) / 3; 
}

let avgDolphins = calcAverage(55,64,85);
let avgKoalas = calcAverage(64,34,95);

function checkWinner()
{
    if(avgDolphins > avgKoalas)
    {
        console.log("Dolpins winner!");
    }
    else{
        console.log("koalas winner!");
    }
}
checkWinner(avgDolphins,avgKoalas);
