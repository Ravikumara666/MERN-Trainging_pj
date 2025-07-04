var string="madam"

let len=string.length;

var reverse = "";


function palidrom(str)
{
    for(let i=len-1;i>=0;i--)
    {
        reverse += string[i]
    }

    if(str==reverse)
    {
        console.log(`the stirng ${string} is palindrom `)
    }
    else
    {
        console.log("stirng is not palindrom")
    }
}
palidrom(string)