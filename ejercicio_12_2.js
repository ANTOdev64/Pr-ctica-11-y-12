function Iterative (arr) // ITERATIVA //
{
    let _onlyPriority = []
    for (let _prio of arr)
    {
        if (_prio.priority === 1)
        {
            _onlyPriority.push(_prio)
        }
    }
    return _onlyPriority
}

function Functional (arr) // FUNCIONAL //
{
    return arr.filter(prio => prio.priority === 1);
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

var onlyPrioI = Iterative (tasks);
var onlyPrioF = Functional (tasks);

console.log(onlyPrioI);
console.log(' .');
console.log(onlyPrioF);