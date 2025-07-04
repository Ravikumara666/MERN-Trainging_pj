
let arr1=[1, [2, [3, 4], 5], 6]

var result=String(arr1);
console.log(new Array( result));

// console.log(arr1.flat(Infinity));


// function flattenArray(arr)
// {
//     let result=[]

    
//     for(let i=0;i<arr.length;i++)
//     {

//         if(Array.isArray(arr[i]))
//         {
//             result=result.concat(flattenArray(arr[i]));
//         }
//         else
//         {
//             result.push(arr[i]);
//         }
        
//     }
//     console.log(result);

// }
// flattenArray(arr1);