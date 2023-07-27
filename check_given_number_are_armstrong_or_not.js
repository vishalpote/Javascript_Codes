let num=1634

let x=num.toString().length
let sum=0
let temp=num
while(temp>0)
{
    let rem=temp%10
    sum=sum+(rem**x)
    temp=parseInt(temp/10);
}
if(sum==num)
{
    console.log("number is armstrong ");
}
else
{
    console.log("number is not armstrong")
}
