function Iterative (arr)
{
    let _onlyNames = []
    for (let _name of arr)
    {
        _onlyNames.push({name : _name.name})
    }
    return _onlyNames
}
function Functional (arr)
{
    return arr.map(task => ({name : task.name}));
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

var onlyNameI = Iterative (tasks);
var onlyNameF = Functional (tasks);

console.log(onlyNameI);
console.log(onlyNameF);