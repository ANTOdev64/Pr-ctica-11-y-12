function Iterative (arr) // ITERATIVA //
{
    let piloANDshoot = 0
    let count = 0
    for (let _person of arr)
    {
        if (_person.isForceUser === true)
        {
            piloANDshoot = _person.pilotingScore + _person.shootingScore
            count = count + piloANDshoot;
        }
    }
    return count
}

function Functional (arr) // FUNCIONAL //
{
    var isForce = arr.filter(person => person.isForceUser === true);
    var totalScoreisForce = isForce.map(person => person.pilotingScore + person.shootingScore);
    return totalScoreisForce.reduce((count, nextValue) => count + nextValue,0);
}

var personnel = [
{
id: 5 ,
name : "Luke Skywalker ",
pilotingScore : 98 ,
shootingScore : 56 ,
isForceUser : true ,
},
{
id: 82 ,
name : "Sabine Wren ",
pilotingScore : 73 ,
shootingScore : 99 ,
isForceUser : false ,
},
{
id: 22 ,
name : "Zeb Orellios ",
pilotingScore : 20 ,
shootingScore : 59 ,
isForceUser : false ,
},
{
id: 15 ,
name : "Ezra Bridger ",
pilotingScore : 43 ,
shootingScore : 67 ,
isForceUser : true ,
},
{
id: 11 ,
name : "Caleb Dume ",
pilotingScore : 71 ,
shootingScore : 85 ,
isForceUser : true ,
}
];

console.log('Iterative Total Score: ', Iterative (personnel));
console.log(' ');
console.log('Functional Total Score: ', Functional (personnel));