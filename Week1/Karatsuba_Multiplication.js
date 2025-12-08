/*مهم جدا انك تستخدم ال BigInt عشان تضمن دقة العمليات الحسابية 
و السبب ان ان الارقام العادية بتعاني من ما يسمي ب percision loss 
مما يسبب اخطاء صغيرة في الحسابات قد تؤدي الي خلل في الناتج النهائي
كمان ال BigInt لا يستخدم مع Math lib 
من الطرق السهلة لعد الارقام في العدد هي تحويله الي string ثم قياس طول النص 
 */
/*It is very important to use BigInt to ensure the accuracy of calculations.
The reason is that regular numbers suffer from what is called precision loss,
which causes small errors in calculations that may lead to an incorrect final result.
Also, BigInt is not used with the Math library.
One of the easiest ways to count the digits in a number is to convert it to a string and then measure the length of the string.*/



function karatsubaMultiplication(in1, in2) {
   let numOfDigits = Math.max(String(in1).length,String(in2).length) ;

    console.log(`numOfDigits = ${numOfDigits}`);
    if(numOfDigits <= 1) {
        return in1 * in2;
    }
     let numOfDigitsOver2 = Math.ceil(numOfDigits/2); 

    const PowerOfTen = BigInt(10) ** BigInt(numOfDigitsOver2);
    let A = BigInt(in1)/PowerOfTen;
    let B = BigInt(in1)%PowerOfTen;
    let C = BigInt(in2)/PowerOfTen;
    let D = BigInt(in2)%PowerOfTen;

    let AC= karatsubaMultiplication(A,C); 
    let BD= karatsubaMultiplication(B,D); 
    let ADplusBC= karatsubaMultiplication(A+B,C+D) - AC - BD; 

    let multResult = (BigInt(10)**BigInt(numOfDigitsOver2*2)* AC 
    + BigInt(10)**BigInt(numOfDigitsOver2)* ADplusBC
    + BD);

    return multResult;
    
}


let result= karatsubaMultiplication(56788n, 12345n);
console.log(result);


