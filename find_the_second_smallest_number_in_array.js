let s=[-2,2,3,4,8,6,0]
// let m=s.sort()
// console.log(m)
// console.log(`the smallest element in array are:${m[0]}`);


// let small=s[0]
// let secsmall=s[1]<s[0]?s[1]:s[0]
// for (let i=0;i<=s.length;i++)
// {
//     if(s[i]<small)
//     {
//         secsmall=s[i];
//         small=secsmall
//     }
//     else if(s[i]<secsmall && s[i]!==small)
//     {
//         small=secsmall
//     }

// }
// console.log(`the smallest elemnt in array are:${secsmall}`);




//another method

for(let i=0;i<=s.length;i++)
{
    for(let j=i+1;j<=s.length;j++)
    {
        if(s[j]<s[i])
        {
            let temp=s[i]
            s[i]=s[j]
            s[j]=temp
        }
    }

}
// console.log(s)
console.log(`the smallest elemnt in array are:${s[0]}`);