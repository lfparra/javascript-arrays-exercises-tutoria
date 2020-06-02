let list_of_numbers = [4,	80,	85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];

// your code here

function mergeTwoList(){
    let total = [];
    let oddNumber = [];
    let evenNumber = [];
    for ( let i = 0; i<list_of_numbers.length; i++){
        if (list_of_numbers[i]%2===0){
            evenNumber.push(list_of_numbers[i])
        } else {
            oddNumber.push(list_of_numbers[i])
        }
    }
    
    total.push(oddNumber, evenNumber);
    return total
}

console.log(mergeTwoList(list_of_numbers))