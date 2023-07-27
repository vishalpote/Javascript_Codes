let arr=[1,2,3,4,1,6,2]
let dup=[]
console.log("original Array:")
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    if(!dup.includes(arr[i]))
    {
        dup.push(arr[i])
    }
}
console.log("After removeing duplicates:")
console.log(dup)


