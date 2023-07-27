let arr=[1,5,2,4,3]
console.log("Array before the sorting:")
console.log(arr)
for (let i=0;i<=arr.length-1;i++)
{
    for (let j=i+1;j<=arr.length;j++)
    {
        if(arr[j]<arr[i])
        {
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log("Array after sorting in acsending order:")
console.log(arr)