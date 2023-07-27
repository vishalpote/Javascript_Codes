let n=53
count=0
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        count+=1
    }
}
console.log((count==2)?"number is prime":"number is not prime")