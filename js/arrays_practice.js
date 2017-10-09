// Given an array a that contains only numbers in the range from 1 to
// a.length, find the first duplicate number for which the second occurrence
// has the minimal index. In other words, if there are more than 1 duplicated
// numbers, return the number for which the second occurrence has a smaller
// index than the second occurrence of the other number does. If there are
// no such elements, return -1.

function firstDuplicate(a) {

    let nums = {};

    for(let x = 0; x < a.length; x++){
        let currNum = a[x];

        if(nums[currNum] === true){
            return currNum;
        } else {
            nums[currNum] = true;
        }
    }

    return -1;
}
