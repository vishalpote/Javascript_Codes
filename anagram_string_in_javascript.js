let s="listen"
let x="silent"

let s1=s.toLowerCase().split('').sort().join('')
let x1=s.toLowerCase().split('').sort().join('')


console.log((s1===x1)?"string is anagram":"string is not anagaram")