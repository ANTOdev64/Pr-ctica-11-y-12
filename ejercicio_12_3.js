function Iterative (arr) // ITERATIVA //
{
    let result = []
    let count = 0
    for (let _dura of arr)
    {
        count = count + _dura.duration;
    }
    result.push({duration:count})
    return result
}

function Functional (arr) // FUNCIONAL //
{
    return arr.reduce(function(count, nextValue){return {duration: count.duration + nextValue.duration};});
}

let tasks = [
{
'name' : 'Buy milk from the shop ',
'duration' : 20 ,
'priority' : 1
},
{
'name' : 'Clean the house ',
'duration' : 120 ,
'priority' : 3
},
{
'name' : 'Study JS functions ',
'duration' : 180 ,
'priority' : 1
}
];

var onlyDuraI = Iterative (tasks);
var onlyDuraF = Functional (tasks);

console.log(onlyDuraI);
console.log(' .');
console.log(onlyDuraF);