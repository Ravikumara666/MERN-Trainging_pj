async function getData()
{
    try
    {
        let data= await fetch('https://catfact.ninja/fact')
        data=await data.json()
        console.log(data)
        
    }
    catch(e)
    {
        console.log(e)
    }

    
}

getData()