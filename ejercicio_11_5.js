arr = [
{ name :'luna ' , sex :'f', age :7 , species :'dog '},
{ name :'jimmy ' , sex :'m', age :122 , species :'human '},
{ name :'snoop ', sex :'m', age :60 , species :'human '},
{ name :'jennifer ', sex :'f', age :250 , species :'human '},
{ name :'yeller ', sex:'20' , age :20 , species :'dog '},
];

var dogs = arr.filter(dog => dog.species.toLowerCase().includes('dog'));

var sumAges = dogs.reduce(function(count, nextValue){return {age: count.age + nextValue.age};});

var promAges = sumAges.age / dogs.length;

console.log(promAges)