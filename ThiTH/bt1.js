let arr = [6, 7, 8, 9]

function findMax(max) {
    for (let i = 0; i < arr.length; i++) {
        max = arr[0];
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max)
}

findMax();