const longword=(s)=>{
    let word=s.split(" ")
    let longwords=''
    for(let i=0;i<word.length;i++)
    {
        if(word[i].length>longwords.length)
        {
            longwords=word[i]
        }
    }
    return longwords
}
console.log(longword("vishal bhausaheb pote"))