let num=7
let flag=0
if(num==0 || num==1)
{
    console.log("Number is not prime")
}
else
{
for(let i=2;i<=num/2;i++)
{
    if(num%i==0)
    {
        console.log("Number is not prime")
        flag=1;
        break;
    }
}
if(flag==0)
{
    console.log("number is prime")
}
}

