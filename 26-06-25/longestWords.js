var str1="The quick brown fox jumped over the lazy dog"

let str2=str1.split(" ")
// for(let)
// let arr=str2.
let len=0
for(let i=0;i<str2.length;i++)
{
    if(str1[i].length>len)
    {
        len=str1[i].length

    }
}
console.log(str2.length)
console.log(str2)
console.log(len)
// console.log(result)

// function longestWord(str) {
//     var words =str.split(" ");
//     var longest = 0;
//     var longestWord = "";
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest) {
//             longest = words[i].length;
//             longestWord = words[i];
//         }
//     }/
//     console.log(longestWord)
// }


// longestWord(str1);


   