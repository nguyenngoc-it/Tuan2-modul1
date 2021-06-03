let n1 = 0;
let n2 = 1;
let nextTerm;

function isFibonacci(num) {
    for (let i = 0; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        if (num === 0) {
            return true;
        }
        if (num === nextTerm) {
            return true;
        }

    }
    return false;

}

console.log(isFibonacci(0))