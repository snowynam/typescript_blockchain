const name = "chales",
    age=30,
    gender = "male";

const sayHi = (name:string, age:number, gender:string):string =>{
    return `hello ${name}, you are ${age}, you are a ${gender}`;
}

//TSLint < -extension

console.log(sayHi(name, 72, gender));

export{};


//tsc-watch
//yarn add tsc-watch --dev