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


// Note: Write a solution that only iterates over the string once and uses
// O(1) additional memory, since this is what you would be asked to do
// during a real interview.
//
// Given a string s, find and return the first instance of a non-repeating
// character in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {

    let dups = {};
    let x = 0;
    let y = 1;

    while(y < s.length){

        if(s[y] === s[x] || dups[s[x]] === true){
            dups[s[x]] = true;
            x++;
            y = x+1;
        } else {
            y++;
        }
    }

    if(dups[s[x]] === undefined){
        return s[x];
    } else {
        return '_';
    }
}


// Note: Try to solve this task in-place (with O(1) additional memory),
// since this is what you'll be asked to do during an interview.
//
// You are given an n x n 2D matrix that represents an image. Rotate the
// image by 90 degrees (clockwise).

function rotateImage(a) {
    let newArr = [];

    for(let x = 0; x < a.length; x++){

        newArr.push([]);

        for(let y = a.length - 1; y > -1; y--){

            newArr[x].push(a[y][x]);
        }
    }

    return newArr;
}


// You are climbing a staircase that has n steps. You can take the steps
// either 1 or 2 at a time. Calculate how many distinct ways you can climb
// to the top of the staircase.
//
// Example
//
// For n = 1, the output should be
// climbingStairs(n) = 1;
//
// For n = 2, the output should be
// climbingStairs(n) = 2.
//
// You can either climb 2 steps at once or climb 1 step two times.

function climbingStairs(n) {


    let first = 1;
    let second = 2;

    if(n === 1){
        return 1;
    }

    if(n === 2){
        return 2;
    }

    for(let x = 3; x <= n; x++){
        let third = first + second;

        first = second;
        second = third;
    }

    return second;
}
