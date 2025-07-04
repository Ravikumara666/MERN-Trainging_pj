let input=["listen", "silent", "enlist", "google", "gooogle"];

// let [a,b]=input

function anagram()
{
    for(let item in input)
    {
        for(let i=0;i<input.length;i++)
        {
            if(item!==input[i])
            {
                if(item.split("").sort().join("")===input[i].split("").sort().join(""))
                {
                    console.log(`${item} and ${input[i]} are Anagrams`);
                }
            }
        }
    }

//     if(a.split("").sort().join("")=== b.split("").sort().join(""))
//    {
//          console.log("Anagram");
//    }
//    else
//    {
//          console.log("Not Anagram");
//    }
}
anagram(a,b);
