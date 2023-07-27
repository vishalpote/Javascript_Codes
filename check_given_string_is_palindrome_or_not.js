let s="madam"
let x=""
for(let i=0;i<s.length;i++)
{
    x=s[i]+x
}
console.log((x===s)?"string is palindrom":"string is not palindrome")