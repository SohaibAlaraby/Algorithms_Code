function insertionSort1(n, arr) {
    // Write your code here
    function printarr1(n,arr){ //printing method 1
        let outstr="";
        for(let index in arr){
            outstr+= arr[index];
            if(index !== (n-1)){
                outstr +=" ";
            }
        }
        return outstr;
    }
    function printarr2(n,arr){ // printing method 2
        let outstr= arr.join(" ");
        
        return outstr;
    }
    let insertItem = arr[n-1];
    let i = n-2;
    while( i>=0 && insertItem <= arr[i]){
        arr[i+1] = arr[i];
        i--;
        console.log(printarr2(n,arr));
    }
    
    arr[i+1] = insertItem;
    console.log(printarr2(n,arr));
}
