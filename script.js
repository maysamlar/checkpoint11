
 
function findSum(A, B, n) {
 
    let hash = new Map();
    for (let i = 0; i < n; i++) {
        if (hash.has(A[i]))
            hash.set(A[i], 1 + hash.get(A[i]));
        else
            hash.set(A[i], 1);
 
        if (hash.has(B[i]))
            hash.set(B[i], 1 + hash.get(B[i]));
        else
            hash.set(B[i], 1);
    }
 

    let sum = 0;
    for (let entry of hash) {
        if (parseInt((entry[1]).toString()) == 1)
            sum += parseInt((entry[0]).toString());
    }
 
    return sum;
 
}
 

 
let A = [5, 4, 9, 2, 3];
let B = [2, 8, 7, 6, 3];
 
let n = A.length;
 

document.write(findSum(A, B, n));
 
