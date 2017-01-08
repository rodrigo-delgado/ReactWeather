// var names = ['Rodrigo', 'Georgia', 'Ellie']
//
// var person = {
//   name: 'Rodrigo',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name);
//     })
//   }
// }
//
// person.greet()
function add (a, b) {
  return a + b
}
console.log(add(1, 3))
console.log(add(9, 0))

var addStatement = (a, b) => {
  return a + b
}
console.log(addStatement(10, 10))

var addNumbers = (a, b) => a + b

console.log(addNumbers(5, 5));
