

function sum(values){

    let result = 0
    for (let i in values){
        result = result + values[i]
    }

    return result
}



function test_sum(){


    let values = [1, 2, 3]

    if (sum(values) != 6){
        console.log("ERREUR")
    }
}