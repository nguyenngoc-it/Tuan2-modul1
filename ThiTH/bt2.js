let arr = [1, 2,2, 6, 4, 5,2];
let kt = true;

function tryRemoveFromArray(num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            arr.splice(i, 1);
            kt = true
            for (let j = 0; j < arr.length-1; j++) {
                if( num===arr[j]){
                    arr.splice(j,1)
                }
            }
            // break;
        } else {
            kt = false;
        }

    }
    if (kt) {
        console.log(num + " la 1 phan tu trong mang ");
        console.log(arr);
    } else {
        console.log(num + " khong la phan tu trong mang");
        console.log(arr);
    }

}

tryRemoveFromArray(2);