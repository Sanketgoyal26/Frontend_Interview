// this in global space
// value of this keyword in global space is globalObject (window in case of browsers)


// this inside a function 
function x() {
    console.log(this);
}
// Value of this inside a function is undefined but javascript has a concept known as "this substitution"
// In case of non strict mode it will be replaced by global object but in case of strict mode it will be undefined



// value of this keyword also depends on how the function is called
// for ex: for strict mode
// x() -> undefined
// window.x() -> global object


// this function in object's method
const obj = {
    x: 5,
    x: function () {
        console.log(this)
    }
}

obj.x()
// O/P -> {x:5, x: f}


// this keyword in arrow function
// In arrow functions there is no concept of this keyword, it actually retain the value of its enclosed lexical context

const obj2 = {
    x: 1,
    y: () => {
        console.log(this)
    }
}
obj2.y()
// O/P -> global object (here arrow function is enclosed inside obj2 and the lexical context of obj2 is global space, that is why we got global object)

const obj3 = {
    x: 2,
    y: function () {
        const z = () => {
            console.log(this)
        }

        z()
    }
}

obj3.y();
// O/P -> here the value of this will be {x:2, y:f}, bcz z is enclosed inside y () and lexical context of y() is obj3
