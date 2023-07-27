const secondlarge=(arr)=>{
    let sec=arr[1]>arr[0]?arr[1]:arr[0]
    let largest=arr[0]
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]>largest)
        {
            sec=largest
            largest=arr[i]
        }
        else if(arr[i]>sec && arr[i]!==largest)
        {
            sec=arr[i]
        }
    }
    return sec
}
console.log(secondlarge([1,10,9,4,5]))