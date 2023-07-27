const isprime=(n,i=2)=>{
    if(n==0 ||n==1)
    {if(n==2)
        {
        return true
        }
        else
        {
            return false
        }
    }
    if(n%i==0)
    {
        return false
        
    }
    if(i*i>n)
    {
        return true
    }

    return isprime(n,i+1)
}
let n=8
if(isprime(n))
{
    console.log("number is prime")
}
else
{
    console.log("Number is not prime")
}