/*
This is the optimal code 
*/
function fourSum(nums, target) {
    nums.sort((item1, item2) => item1- item2)
    const results = [];
    const len = nums.length -1;
    for (let left = 0; left < nums.length-3; left++) {
        if(left > 0 && nums[left] === nums[left-1] ) continue;
        for (let leftMid = left + 1; leftMid < nums.length-2; leftMid++) {
            if(leftMid > left + 1 && nums[leftMid] === nums[leftMid-1] ) continue;
            let rightMid = leftMid +1;
            let right = len;
            while(rightMid < right) {
                let Sum = nums[left] + nums[leftMid] + nums[rightMid] + nums[right];

                if(Sum === target){
                    //action when succeeded
                    results.push([nums[left] , nums[leftMid] , nums[rightMid] , nums[right]]);
                    do right--; while(rightMid < right && nums[right] === nums[right + 1])
                    do rightMid++; while(rightMid < right && nums[rightMid] === nums[rightMid - 1])

                } else if(Sum > target){
                    //reduce right
                    right--;
                } else {
                    //increment rightMid
                    rightMid++;
                }
            }
        }
        
    }
    return results;
}

/*
The code below is not optimal because of the following reasons:
1- function call overhead => nesting loops is more cpu cache friendly than function calls
2- set creation overhead
3- redundant set operation
*/
function threeSum(nums, target, start) {
    let matchedNumbers = new Array();
    const seen = new Set();
    for(let left = start; left < nums.length ;left++) {
        let mid = left+1;
        let right = nums.length - 1;

        if(seen.has(nums[left])) continue; //prevent repetition for pointer left
        seen.add(nums[left]);

        while(mid < right) {
            let Sum = nums[left] + nums[mid] + nums[right];
            if(Sum == target) {
                let temp = [nums[left], nums[mid], nums[right]];
                matchedNumbers.push(temp);
            }
            if(Sum > target) {
                do right--; while(mid < right && nums[right] == nums[right + 1]) //prevent repetition for pointer right and mid
            } else {
                do mid++; while(mid < right && nums[mid] == nums[mid - 1])
            }
            
        }
    }
    return  matchedNumbers;
}

function fourSum(nums, target) {
     nums.sort((item1, item2) => item1 - item2);
     let left = 0;
     const results = [];
     const seen = new Set();
     for (let start = 0; start < nums.length; start++) {

        if(seen.has(nums[start])) continue; //prevent repetition of start pointer
        seen.add(nums[start]);

        let triples = threeSum(nums, target - nums[start], start + 1);

        for (let triple of triples) {
            results.push([nums[start], ...triple])
            
        }
        
     }
     return results;
}

