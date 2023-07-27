const findprime=(start,end)=>{
    // let start=1
    // let end=100
    let prime=[]
    for (let i=start;i<=end;i++)
    {
        let isprime=true
        for(let j=2;j<=i/2;j++)
        {
            if(i%j==0)
            {
                isprime=false
                break
            }
        }
        if(isprime && i>1)
        {
            prime.push(i);
        }

    }
    console.log(prime)
}

findprime(2,200)