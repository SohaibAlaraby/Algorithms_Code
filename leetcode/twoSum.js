/*
    total complexity => O(n)
*/
function twoSum(nums,target){
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(seen.has(complement)) {
            return [seen.get(complement),i];
        }
        seen.set(nums[i],i);
        
    }

}
/*
    part1 Complexity => O(n lg n)
    part2 Complexity => O(n)
    part3 Complexity => O(n)
    part4 Complexity => O(K) k is the number of entries in final array of result
    total complexity => O(n lg n)

*/
function twoSum(nums,target) {
    
   //part1
    let numSorted = nums.toSorted((item1,item2) => item1 - item2);
    let elements = [];
    let left = 0;
    let right = nums.length - 1;
    //part2
    while(left < right) {
        let Sum = numSorted[left] + numSorted[right];
        if(Sum == target) {
            elements.push([numSorted[left], numSorted[right]]);
        }

        if(Sum > target){
            do right--; while(left < right && numSorted[right] == numSorted[right + 1])
        } else {
            do left++; while(left < right && numSorted[left] == numSorted[left - 1])
        }
    }
    //part3
    let numsMap = new Map();
    for(let i = 0; i < nums.length ; i++) {
        if(numsMap.has(nums[i])){
            let item = numsMap.get(nums[i]);
            if(Array.isArray(item)){
                numsMap.set(nums[i] , item.push(i));
            }else{
                numsMap.set(nums[i] , [item, i]);
            }
            
            continue;
        }
        numsMap.set(nums[i] , i);
    }
    //part4
    let numsIndex = elements.map((pairs) =>{
        if(pairs[0] == pairs[1]){
            return numsMap.get(pairs[0]);
        }else{
            return [numsMap.get(pairs[0]), numsMap.get(pairs[1])];
        }
        });
    return numsIndex[0];
}
