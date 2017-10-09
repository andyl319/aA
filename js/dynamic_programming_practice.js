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


// You are planning to rob houses on a specific street, and you know that
// every house on the street has a certain amount of money hidden. The only
// thing stopping you from robbing all of them in one night is that adjacent
// houses on the street have a connected security system. The system will
// automatically trigger an alarm if two adjacent houses are broken into on
// the same night.
//
// Given a list of non-negative integers nums representing the amount of
// money hidden in each house, determine the maximum amount of money you
// can rob in one night without triggering an alarm.
//
// Example
//
// For nums = [1, 1, 1], the output should be
// houseRobber(nums) = 2.
//
// The optimal way to get the most money in one night is to rob the first
// and the third houses for a total of 2.

function houseRobber(nums) {
    let robbedPrev = 0;
    let notRobbedPrev = 0;

    for(let x = 0; x < nums.length; x++){
        let currRobbed = notRobbedPrev + nums[x];
        let currNotRobbed = Math.max(robbedPrev, notRobbedPrev);

        robbedPrev = currRobbed;
        notRobbedPrev = currNotRobbed;
    }

    return Math.max(robbedPrev, notRobbedPrev);
}


// Given a sorted integer array that does not contain any duplicates,
// return a summary of the number ranges it contains.
//
// Example
//
// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
// composeRanges(nums) = ["-1->2", "6->7", "9"].

function composeRanges(nums) {

    let stringArr = [];
    let firstNum = nums[0];
    let prevNum = nums[0];
    let currStr = `${nums[0]}`;

    if(nums.length === 0){
        return [];
    }

    for(let x = 1; x < nums.length; x++){

        if(nums[x] - 1 === prevNum){
            currStr = `${firstNum}->${nums[x]}`;

        } else {
            stringArr.push(currStr);
            currStr = `${nums[x]}`;
            firstNum = nums[x];
        }

        prevNum = nums[x];
    }

    stringArr.push(currStr);

    return stringArr;
}
