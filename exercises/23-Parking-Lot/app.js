let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

function getParkingLotState(arr){
    const state = {
        totalSlots : 0,
        availableSlots : 0,
        occupiedSlots : 0,
        
    }
    for (let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if (arr[i][j] === 1) {
                state.occupiedSlots += 1;
                state.totalSlots += 1;
            } else if (arr[i][j] === 2) {
                state.availableSlots += 1;
                state.totalSlots += 1;
            }
        }
    }
    return state;
};    


console.log(getParkingLotState(parking_state));