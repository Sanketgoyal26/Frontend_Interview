// Promises----

//First way to generate Promises

// const promise= new Promise(function(resolve,reject){
//     console.log("Click to download");   
//     console.log("start downloading....."); 
//     setTimeout(()=>{
//         resolve();
//     },2000)
//     console.log("Bye");
// })
// promise.then(function(){
//     console.log("Downloaded Successfully");
// })

// .catch(function(){
//   console.log("Error");  
// });

// -----------------------------------------------------------

// const promise= new Promise(function(resolve,reject){
//     console.log("Click to download");   
//     console.log("start downloading....."); 
//     setTimeout(()=>{
//         resolve({name:"Utkarsh"});
//     },2000)
//     console.log("Bye");
// })
// promise.then(function(user){
//     console.log("Downloaded Successfully");
//     return user.name;
// })
// .then((name)=>{
//     console.log(name);
// })
// .catch(function(){
//   console.log("Error");  
// });

//In the above we can see how we can pass data in resolve functions and when we return something from one ".then" then it is available in next .then(function chaining).

// -----------------------------------------------------------

// const promise = new Promise(function(resolve, reject){
//     console.log("Click to download");   
//     console.log("start downloading....."); 
//     setTimeout(() => {
//         resolve({user:"Utkarsh"});
//     }, 2000);
//     console.log("Bye");
// });

// async function handlePromise() {
//     try {
//         const response = await promise;
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// handlePromise(); // Call the async function to start handling the promise

//In js, we can also handle promises with the help of async and await.

// **********************************************************************************************************************************************************
//Function Currying in JS->It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single 
// argument in sequence. 
//****Working of Bind function. It is used to explicitly bind "this" keyword.It creates new function that , when called, has its 'this' keyword sets to the specified value.
// const module = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // Output: undefined, because 'this' is not bound

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX()); // Output: 42, because 'this' is now bound to 'module'


//Continue function currying--
//->Using Bind Functions------

// let add=function(x,y){
//     console.log(x+y);
// }
// let curryingAdd= add.bind(this,2);//: This binds the add function with a specific this value (which is this in the current context, typically the global object in this case) and the first argument set to 2. This essentially creates a new function where the x parameter is fixed to 2.
// curryingAdd(3);


// "use strict"; // prevent `this` from being boxed into the wrapper object

// function log(...args) {
//    console.log(this, ...args);
// }

// const boundLog = log.bind("this value", 1, 2);
// boundLog()
// const boundLog2 = boundLog.bind("new this value", 3, 4);
// boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6 // Here bind function will not alter the value of "this" once set


//->Using Closures----

// let curryingAdd=function (x){
//     return function(y){
//         return x+y;
//     }
// }
// let add = curryingAdd(5);
// console.log(add(5));


// ************************************************************************************************************************************************************

// =>Interview Question--------
// let sum=(x)=>{
//     return function(y){
//         return function(z){
//             return x+y+z;
//         }
//     }
// };
// console.log(sum(1)(2)(3));// From this line we can assume that how this line will work by seeing the above function.But if we use multiple calls then we cannot
// return multiple methods . So In this case recursion comes into the picture.


// let sum=function(x)
// {
//     if(!x)
//     {
//         return 0;
//     }
//     return function(y){
//         if(!y)
//         {
//             return x;
//         }
//         return sum(x+y);
//     }
// }                         
// console.log(sum(1)(2)(3)(4)());//So, the () at the end is necessary to signal the end of the function chain and to obtain the final result.

// ************************************************************************************************************************************************************

// #Event Bubbling and Event Capturing----
// Event bubbling and event capturing are two mechanisms used by browsers to handle events propagating through the DOM hierarchy.

// Event Bubbling:
// In event bubbling, when an event is triggered on an element inside another element, the event is first captured by the deepest element and then propagated upward through its ancestors.
// This means that the innermost element's event handler is executed first, then its parent's event handler, and so on up to the root of the document.
// Bubbling is the default behavior in most browsers.

// Event Capturing (also known as Event trickling):
// Event capturing is the reverse of event bubbling. In this model, the event is captured by the outermost element first, then propagated downward through its descendants to the target element.
// This means that the outermost element's event handler is executed first, then its children's event handlers, and so on down to the target element.
// Event capturing is less commonly used but is available for use in JavaScript.

// example--Consider we have a grandparent div, inside that there is a parent div, inside that there is another child div.
//          In case of bubbling when we triggered an event on child element then it get executed first then its parent's event will get execute and so on.
//          Capturing is opposite to Bubbling.

// In JavaScript, you can specify whether to use event capturing or event bubbling by using the addEventListener() method. The third parameter of 
// addEventListener() is a boolean value that indicates whether to use capturing (true) or bubbling (false, default) phase.

// Bubbling--
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grand Parent Clicked");
//     }, false)

// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked");
//     }, false)

// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("child Clicked");
//     }, false)

//Capturing--
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grand Parent Clicked");
//     }, true)

// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked");
//     }, true)

// document.querySelector('#child')
//     .addEventListener('click', () => {
//         console.log("child Clicked");
//     }, true)

// **
// To control event propagation in JavaScript, we can use methods such as stopPropagation() within the event handler functions.
// document.querySelector('#grandparent')
//     .addEventListener('click', () => {
//         console.log("Grand Parent Clicked");
//     }, false)

// document.querySelector('#parent')
//     .addEventListener('click', () => {
//         console.log("Parent Clicked");
//     }, false)

// document.querySelector('#child')
//     .addEventListener('click', (e) => {
//         console.log("child Clicked");
//         e.stopPropagation();//by using this , when i click on child then only child's event will call and will stop the propagation of event upto the root element.
//     }, false)

// ***************************************************************************************************************************************************************

// #Event Deligation-----
// Event delegation is a technique in JavaScript where you attach an event listener to a parent element instead of individual child elements. 
// This allows you to handle events that occur on multiple child elements using a single event listener on their common parent.

//for ex-Consider a e-commerce website, We have a category section and when a user clicks on a particular category then he should redirect to that category page.
//       For that we need to add an event to each and every category that will redirect the user to that particular page when user clicks on it.But if we have
//       let say 1000 categories, in that case is it good to use  1000 event listeners? No . In this situation event deligation comes into the picture.
//       So in event delegation, we define that event listener to parent element and whenever we click on child list inside the parent then due to concept of 
//       bubbling event attached to parent is called which gives the info about the list item . Using this info, we can redirect the user to another page without using multiple event listeners.

// document.querySelector('#category').addEventListener('click', (e) => {
//     console.log(e.target);
//     if (e.target.tagName == "LI") {
//         window.location.href = "/" + e.target.id;
//     }
// })

// Advantages--(i)-Saves Memory and increases performance.
//             (ii)-No need to write more code for each category(event listeners)
//             (iii)-Dom Manipulation improves.

// Disadvantages-(i)-All the events are not bubbled up like focus, blur . In this case event will not call.
//               (ii)-If we use stop propagation in any child element then in this case , event will not bubbled up.


// *************************************************************************************************************************************************************

// Debouncing-----
// Debouncing is a technique used to manage the frequency of function calls,Debouncing ensures that a function is not executed until a certain amount of time has passed since the last invocation of the function.
// It is generally used in search bars.

// let counter = 0;
// const getData = () => {
//     counter++;
//     console.log(counter);
// }
// let timeOutId;
// const debounce = (getData, delay) => {
//     clearTimeout(timeOutId);
//     timeOutId = setTimeout(getData, delay);
// }
// Using clearTimeout(timeoutId) is necessary to ensure that only one timeout is active at any given time. When the onkeyup event occurs multiple times in 
// rapid succession, debounce() will be called each time. If we don't clear the previous timeout before setting a new one, it can lead to unexpected behavior.




// Throttling----
// Throttling is a technique used to manage the frequency of function calls.
// Throttling in JavaScript refers to a technique where you limit the rate at which a function can be executed. It ensures that a function is called at most 
// once within a specified time interval, regardless of how many times it is invoked.It ensures that the function is called periodically at a specified interval.
//In simple words, in throttling a function is invoked after a specific time interval and it does not executed in between time interval if a user is invoked function continuously.

// let counter = 0;
// const getData = () => {
//     counter++;
//     console.log(counter);
// }

// let throttling = false;
// function throttle(func, delay) {
//     if (!throttling) {
//         throttling = true;
//         func();
//         setTimeout(() => {
//             throttling = false;
//         }, delay);
//     }
// }

// ***********************************************************************************************************************************************************
// Polyfills-Polyfill JS provides functionality to the browser to support the methods and events which are not natively supported by them.

// _______________________________________________
// example->polyfill of bind method.
// let name = {
//     firstName: "Utkarsh",
//     lastName: "Goyal"
// }
// let printName = function (homeTown,state) {
//     console.log(this.firstName + " " + this.lastName + ", " + homeTown+ ", "+state);
// }
// // let myPrintName = printName.bind(name);//already built-in bind method.
// // myPrintName();


// Function.prototype.myBind = function (...args) {// the ...args syntax is used to represent a rest parameter, which allows a function to accept an indefinite number of arguments as an array.
//     let obj = this;//here this is pointing to printName().When you invoke printName.myBind, this inside the myBind function refers to the printName function itself because you're calling myBind on printName.
//     params = args.slice(1);
//     return function (...args2) {
//         obj.apply(args[0], params.concat(args2));
//     }
// }

// let myPrintName2 = printName.myBind(name, "Bharatpur");
// myPrintName2("Rajasthan");

//_________________________________________________________
// example-polyfill of map method
//Built-in-method----
// let arr=[1,2,3,4,5];
// arr=arr.map((item)=>{
//     return item*2;
// })
// console.log(arr);


// let arr=[1,2,3,4,5];
// Array.prototype.myMap=function(func){
//     let count=0;
//     const arr=this;
//     let a=[]
//     while(count<arr.length)
//     {
//         a.push(func(arr[count++]));
//     }
//     return a
// }
// arr=arr.myMap((item)=>{
//     return item*2;
// })
// console.log(arr);

//__________________________________________________________
//example-polyfill of filter method.
//Built-in-method-
// let arr=[1,2,3,4,5,6];
// arr=arr.filter((item)=>{
//     return item%2==0;
// })
// console.log(arr);


// let arr=[1,2,3,4,5,6];
// Array.prototype.myFilter=function(func){
//     const arr=this;
//     let a=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(func(arr[i]))
//         {
//             a.push(arr[i]);
//         }
//     }
//     return a;
// }

// arr=arr.myFilter((item)=>{
//     return item%2==0;
// })
// console.log(arr);

// _______________________________________________
//example- polyfill of reduce method.

//reduce() in js is used to reduce the elements of the array to a single value.
//sytax-reduce(function(total(accumulator), currentValue, currentIndex(optional), arr(optional)), initialValue(initial accumulator value))

//Built-in-method----
// let arr=[1,2,3,4,5];
// let value=arr.reduce((total,current)=>{
//     return total+current;
// },0);

// console.log(value);

// let arr=[1,2,3,4,5];
 
// Array.prototype.myReduce=function(func,initial){
//     let accumulator = initial !== undefined ? initial : this[0];
//     const startIdx = initial !== undefined ? 0 : 1;
//     const A=this;
//     for(let i=startIdx;i<A.length;i++)
//     {
//         accumulator=func(accumulator,A[i],i,A);
//     }
//     return accumulator;
// }

// const value=arr.myReduce((total,current)=>{
//     return total+current;
// },0);

// console.log(value);

// _________________________________________________

//for-each loop
// array.forEach(function(currentValue, index, arr), thisValue)

// let arr=[1,2,3,4,5];
// let sum=0;
// arr.forEach((item)=>{
//     sum+=item;
// })
// console.log(sum);

// Array.prototype.myForEach = function(callback) {
//     const arr = this;
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// };

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// arr.myForEach((item) => {
//     res += item;
// });
// console.log(res); // Output: 15


// *********************************************************************************************************8
// Difference between normal, async, defer attribute of script tag.

// (i)-Normal->In this case when browser meets with the script tag then it stops execution(parsing) and start fetching the scripts,and after that executes it immediately
//             and remaining html parsing is done only after the script is completely executed. 

// (ii)-async->When we add async attribute to our script tag, then the scripts will be fetched in parallel to html parsing ,when they are available then they get
//     executed immediately, potentially before the html document is fully parsed.

// (iii)defer->When we add the defer attribute to a <script> tag, then the scripts will be fetched in parallel to html parsing but will be executed only after the 
//      HTML document has been fully parsed.

// Note->async attribute does not maintain the order of the scripts in case we have multiple scripts to execute and it may harm our output.
//       But defer maintains the order of scripts that's why defer is more preferable.



// Polyfill for Promise.all
Promise.myAll = function (values) {
    const resultArray = [];
    let noOfPromisses = 0;
    
    return new Promise((resolve, reject) => {
        values.forEach((promise, index) => {
            promise
                .then((val) => {
                    resultArray[index] = val;
                    noOfPromisses++;
                    
                    if (noOfPromisses === values.length) {
                        resolve(resultArray);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        })
    })
}
// example to test above method
const p1 = new Promise((resolve, reject) => {
    resolve(200);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("I am resolved 11");
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
     setTimeout(()=> {
        resolve("I am resolved 22");
    }, 2000)
})

Promise.myAll([p1, p2, p3])
    .then((val) => {
        console.log(val)
    })
    .catch((err) => {
        console.log(err);
    })



// Object Flatten
const obj = {
    1: "Hello",
    2: {
        3: "YoYo"
    },
    4: {
        5: {
            6: "Howdy !!!!"
        },
        7: "Wowwwwww"   
    },
    8: "Aeeee"
}
// Output
// {
//     1: "Hello",
//     2.3: "YoYo",
//     4.5.6: "Howdy !!!!",
//.    4.7: "Wowwwwww"
//     8: "Aeeee",
// }
const res = {};
function flattenObj (obj, key = "") {
    for (o in obj) {
        const objKey = key ? `${key}_${o}` : o;
        if (typeof (obj[o]) === 'object' && typeof (obj[o]) !== null) {
            flattenObj (obj[o], objKey);
        } else {
            res[objKey] = obj[o];
        }
    }
}
flattenObj(obj)
console.log(res)


// Function Currying Advanced
sum(10, 20, 30)(40,50)(10, 40, 30, 90, 2000)(0, 78)()

function sum (...args) {
    let total = 0;
    for (let k of args) {
        total = total + k;
    }
    return function (...args2) {
        if (args2.length > 0) {
                return sum(...args, ...args2);
        } else {
                return total;
        }
    }
}

// Function Chain Calculator 

// Class based approach
class ChainCalculator {
    constructor(value = 0) {
      this.value = value;
    }
  
    add(number) {
      this.value += number;
      return this; // return the instance to allow chaining
    }
  
    subtract(number) {
      this.value -= number;
      return this;
    }
  
    multiply(number) {
      this.value *= number;
      return this;
    }
  
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        console.error("Division by zero is not allowed.");
      }
      return this;
    }
  
    clear() {
      this.value = 0;
      return this;
    }
  
    result() {
      return this.value;
    }
  }
  
  // Usage:
  const calculator = new ChainCalculator();
  const result = calculator
    .add(10)
    .subtract(2)
    .multiply(4)
    .divide(2)
    .result();
  
  console.log(result); // 16


// function based approach

function createCalculator (initialValue = 0) {
    return {
        value: initialValue,
        
        add(num) {
            this.value += num;
            return this;
        },
        
        subtract(num) {
            this.value -= num;
            return this;
        },
        
        multiply(num) {
            this.value *= num;
            return this;
        },
        divide(num) {
            if (num !== 0) { // Prevent division by zero
                this.value /= num;
            } else {
                throw new Error('Cannot divide by zero');
            }
            return this;
        },
        
        result() {
            return this.value;
        }
    }
}

const calculatorFun = createCalculator();
const resultFun = calculator
    .add(10)
    .subtract(2)
    .multiply(8)
    .divide(2)
    .result();

// Object based approach

const calculatorObj = {
    value: 0,

    add(num) {
        this.value += num;
        return this;  // Return the object to allow method chaining
    },

    subtract(num) {
        this.value -= num;
        return this;
    },

    multiply(num) {
        this.value *= num;
        return this;
    },

    divide(num) {
        if (num !== 0) {  // Prevent division by zero
            this.value /= num;
        } else {
            throw new Error('Cannot divide by zero');
        }
        return this;
    },

    result() {
        return this.value;
    },

    reset() {
        this.value = 0;
        return this;
    }
};

// Usage
const resultObj = calculatorObj
    .add(10)
    .subtract(2)
    .multiply(10)
    .divide(2)
    .result();

console.log(resultObj);  // Outputs: 32

// Pollyfill of Array.flat
Array.prototype.myFlat = function (level = 1) {
    const arr = this;
    let res = [];
    
    function functionFlatArray(arry, l) {
        for (let i = 0; i < arry.length; i++) {
        if (l > 0 && Array.isArray(arry[i])) {
            functionFlatArray(arry[i], l-1)
        } else {
            res.push(arry[i]);
        }
      }
    }
    
    functionFlatArray(arr, level);
    
    return res;
}
  
  
const arr1 = [1, 2, [3, 4, [5, 6]]];
console.log(arr1.myFlat(1));

// Polyfill for reduce function

Array.prototype.myReduce = function(callback, initialValue)  {
    const arr = this;
    let accValue = initialValue ? initialValue : arr[0];
    let iValue = initialValue ? 0 : 1
    for (let i = iValue; i < arr.length; i++) {
        const data = callback(accValue, arr[i]);
        accValue = data;
    }
    
    return accValue;
}

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => {
      return accumulator + currentValue
  },
  initialValue,
);

console.log(sumWithInitial);

// Deep cloning an object

function deepClone(obj) {
    // Check if value is a non-null object or array
    if (obj && typeof obj === 'object') {
        // Handle Array case
        if (Array.isArray(obj)) {
            let copy = [];
            for (let index = 0; index < obj.length; index++) {
                copy[index] = deepClone(obj[index]);
            }
            return copy;
        }

        // Handle Object case
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            let copy = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copy[key] = deepClone(obj[key]);
                }
            }
            return copy;
        }
    }

    // Return the value if obj is not an object or array
    return obj;
}

// Usage example
const myObj = {
    name: "Sanket",
    lName: "Goyal",
    favourites: {
        color: "Black",
        movie: "HP",
        food: {
            drink: "coca cola",
            snack: "Noodles",
            sT: function() {
                console.log("Hello");
            }
        }
    }
};

const clonedObj = deepClone(myObj);

// Modifying the clone
clonedObj.favourites.color = "Red";

// Logs to demonstrate that original is unchanged
console.log(myObj.favourites.color); // Outputs: "Black"
console.log(clonedObj.favourites.color); // Outputs: "Red"




// Document getElementById Pollyfill

function getElementByIdCustom(root, id) {
    // Base case: if the current element's ID matches, return it
    if (root.id === id) {
        return root;
    }

    // Recursive case: check all child nodes
    for (let i = 0; i < root.children.length; i++) {
        const foundElement = getElementByIdCustom(root.children[i], id);
        if (foundElement) {
            return foundElement;
        }
    }

    // If no matching element is found
    return null;
}

// Usage example: find an element with the ID 'myElementId' starting from the document's root
const myElement = getElementByIdCustom(document.body, 'myElementId');

if (myElement) {
    console.log(`Element with ID 'myElementId' was found.`);
} else {
    console.log(`Element with ID 'myElementId' was not found.`);
}


// Cancellable Promise
function makeCancellable (promise) {
    let hasCancelled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise
        .then ((res) => {
            hasCancelled ? reject({ isCancelled: true }) : resolve ( res )
        })
        .catch ((err) => {
            hasCancelled ? reject({ isCancelled: true }) : reject ( err )
        })
    })
    
    return {
        promise: wrappedPromise,
        cancel() {
            hasCancelled = true
        }
    }
}


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved Successfully")
    }, 1000)
})
 
const updatedPromise = makeCancellable(myPromise);

updatedPromise.promise
    .then (val => {
        console.log(val)
    })
    .catch (err => {
        if (err.isCancelled) {
             console.log("Promise is cancelled")
        } else {
             console.log("Some error occured")
        }
    })
    
