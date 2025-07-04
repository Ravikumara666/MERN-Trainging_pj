var string="hello"

let len=string.length;

var reverse = ""
function reverseString(string)
{
    for(let i=len-1;i>=0;i--)
    {
        reverse += string[i];
    }
    console.log(reverse);
}
reverseString(string);
