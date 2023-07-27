let arr=[1,4,3,2]
let n=arr.length

total_sum=(n+1)*(n+2)/2

arr_sum=arr.reduce((acc,ele)=>{
    return acc+=ele
})

let miss=total_sum-arr_sum

console.log(`the missing number in array are:${miss}`);
