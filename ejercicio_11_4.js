const users = [
{ id: 11 , name : 'Adam ' , age : 23 , group : 'editor '},
{ id: 47 , name : 'John ', age : 28 , group : 'admin '},
{ id: 85 , name : 'William ', age : 34 , group : 'editor ' },
{ id: 97 , name : 'Oliver ', age : 28 , group : 'admin '} ,
{ id: 100 , name : 'Vicente ', age : 30 , group : 'admin '}
];

var admins = users.map(user => user.group.toLowerCase().includes('admin'));
var frecAdmins = admins.filter (ad => ad === true);

var editors = users.map(user => user.group.toLowerCase().includes('editor'));
var frecEditors = editors.filter (ed => ed === true);

console.log("editor:", frecEditors.length, "admin:", frecAdmins.length);