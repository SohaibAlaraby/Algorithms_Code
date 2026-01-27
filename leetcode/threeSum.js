/*Medium*/
function threeSum(nums, target = 0) {
    nums.sort((a ,b) => a - b);
    let matchedNumbers = new Array();

    for(let left = 0; left < nums.length ;left++) {
        let mid = left+1;
        let right = nums.length - 1;
        if(nums[left] == nums[left-1]) continue;
        while(mid < right) {
            let Sum = nums[left] + nums[mid] + nums[right];
            if(Sum == target) {
                let temp = [nums[left], nums[mid], nums[right]];
                matchedNumbers.push(temp);
            }
            if(Sum > target) {
                do right--; while(mid < right && nums[right] == nums[right + 1])
            }else{
                do mid++; while(mid < right && nums[mid] == nums[mid - 1])
            }
            
        }
    }
    return  matchedNumbers;
}
