const names=require('./3-first_module')
console.log(names);
const sayHi=require('./2-module')

sayHi('papa')
sayHi(names.test1)