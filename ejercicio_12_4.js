function Iterative (arr) // ITERATIVA //
{
    let result = []
    let count = 0
    for (let _type of arr)
    {
        if (_type.type === 'suv ')
        {
            count = count + _type.price;
        }
    }
    result.push({price:count})
    return result
}

function Functional (arr) // FUNCIONAL //
{
    var suvs = arr.filter(suv => suv.type.toLowerCase().includes('suv'))
    return suvs.reduce(function(count, nextValue){return {price: count.price + nextValue.price};});
}

const vehicles = [
{ make : 'Honda ', model : 'CR -V', type : 'suv ', price : 24045 },
{ make : 'Honda ', model : 'Accord ', type : 'sedan ', price : 22455 },
{ make : 'Mazda ', model : 'Mazda 6', type : 'sedan ', price : 24195 } ,
{ make : 'Mazda ', model : 'CX -9 ', type : 'suv ', price : 31520 },
{ make : 'Toyota ', model : '4 Runner ', type : 'suv ', price : 34210 },
{ make : 'Toyota ', model : 'Sequoia ', type : 'suv ', price : 45560 },
{ make : 'Toyota ', model : 'Tacoma ', type : 'truck ', price : 24320 },
{ make : 'Ford ', model : 'F -150 ', type : 'truck ', price : 27110 },
{ make : 'Ford ', model : 'Fusion ', type : 'sedan ', price : 22120 },
{ make : 'Ford ', model : 'Explorer ', type : 'suv ', price : 31660 }
];

console.log('SUV total price: ', Iterative (vehicles));
console.log(' ');
console.log('SUV total price: ', Functional (vehicles));