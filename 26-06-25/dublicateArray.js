arr1=[1, 2, 2, 3, 4, 4, 5]

function removeDublicate(arr)
{
    map={}
    result=[]

    for(let item of arr)
    {
        if(!map[item])
        {
            map[item]=true
            result.push(item)
        }
    }
    return result
}
console.log(removeDublicate(arr1))