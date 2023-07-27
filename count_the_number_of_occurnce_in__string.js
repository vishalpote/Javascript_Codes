let s="hello world"
let count={}
for (let i=0;i<s.length;i++)
{
    // const char=s[i];
    count[s[i]]=count[s[i]]?count[s[i]]+1:1
}
console.log(count)