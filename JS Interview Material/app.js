// console.log("Hello welcome to java script")
// let n = prompt("Enter the number");
// function square(n) {
//     return n * n;
// }
// console.log(square(n));


// // var x=100;
// function func()
// {
//     var y=99;
//     console.log("Inside");
//     console.log(y);

// }
// console.log(x)
// func();

//HOISTING IN JAVASCRIPT.
//ex-
// var x=100
// function fun(){
//     var y=99;
//     console.log("inside");
//     console.log(y);
// }
// console.log(x);
// fun();


//--------------------
//ex-
// console.log(a);
// b();
// function b()
// {
//     var c=80;
//     console.log(c);
// }
// var a =100;



//--------------------
//Q-
// console.log(a);
// sam();
// var a=10;
// function sam()
// {
//     console.log("Hello");
// }
//output->undefined and hello

//--------------------
// console.log(a);
// sam();
// let a=10;
// function sam()
// {
//     console.log("Hello");
// }
//output->error.
//Dead Temporal Zone->it is a phase /zone between your memory creation phase and code execution phase,where variables are not allowed to be accessed.it is done 
//in the case of let and const keywords.



//HIGHER ORDER FUNCTIONS:------------------------------------------------------------------------------------------------------
// function fun(x,func)
// {
//     console.log(x);
//     console.log("Inside Fun");
//     console.log(func);
// }
// function innerFun()
// {
//     console.log("inside inner fun");
// }
// fun(30,innerFun);



// function fun()
// {
//     console.log("inside fun");
//     function innerFun()
//     {
//         console.log("inner fun");
//     }
//     return innerFun;
// }
// const F=fun();
// F();


//SCOPES:----------------------------------------------------------------------------------------------------------------------
// let a=10;
// const b=20;
// if(a>5) 
// {
//      let b=500;
//     console.log(b);
// }
// console.log(b);
// Output-500 and 20 because let and const have block scopes.



// let a = 10;
// var b = 20;
// if (a > 5) {
//     var b = 500;
//     console.log(b);
// }
// console.log(b);
//output-500 and 500  because var has functional scope so its value will not change outside the block.
//var ->global scope and functional scope.
//in case of let and const we have block scope and script scope(global scope)



// let a=10;
// var b=20;
// if(a>5)
// {
//     var b=500;//in case of var keyword variable do not created again if we recreate it.
//     console.log(b);
// }
// console.log(b);

//output-500/500.


// var a=10;
// if(a>5)
// {
//     let a=20;            it will not give error.
//     console.log(a);
// }


// let a=10;
// if(a>5)
// {
//     var a=20;    it will give error.(uninitialised access)
//     console.log(a);
// }


// var a=10;
// if(a>5)
// {
//          let a=20;    it will not produce any error.
//     console.log(a);
// }

// var a=99;
// function b(){
//     var a=88;
//     console.log(a);    //Functional scope.
// }
// b();
// console.log(a);




// var a=99;
// if(a>5){
//     var a=88;
//     console.log(a);   
// }
// console.log(a);
//Here in this case value of a remains 88 in both output because it is created with var keyword and it has functional scope and here we have created it inside a block.
//So value of a changes and it reflects globally.





//So when we craeted new variables inside the block using let and const ,it behaves like new variables.But when we craeted new variables inside the block using var keyword then it do not behave like a new variable.
//it behaves like a  new variable when we created it inside a function becasue it has a functional scope.




// console.log(a);
// b();
// function b()
// {
//     console.log("Inside func");
// }
// let a=200;
//it will generate error beacuse a in its dead temporal zone.
//Dead Temporal Zone->time till the variable is not initialised after declaration.


//CALLBACKS---------------------------------------------------------------------------------------------------------------------------
// function fun(f)
// {
//     f();
// }
// function a()
// {
//     console.log("Inside a");
// }
// fun(a);//a is called callback.




//1 - Map method.
// let arr=[1,2,3,4,5,6];
// function square(num)
// {
//     return num*num;
// }
// let res=arr.map(square);        square is a callback function.
// console.log(arr);
// console.log(res);



//2.Filter method.
// let nums=[1,2,3,4];
// function func(n)
// {
//     return n%2==0;
// }
// let res=nums.filter(func);
// console.log(nums);
// console.log(res);

// When the global execution context is created in JavaScript, a global object is indeed established. This global object varies in different environments:

// In browsers, the global object is window. In this context, variables declared globally become properties of the window object. For example, if you declare a variable x globally (let x = 10;), you can access it as window.x or simply x globally.

// In Node.js or other environments, the global object might have a different name (global in Node.js). Similar to the browser's window object, variables declared globally become properties of this global object.

//CLOSURE--------------------------------------------------------------------------------------
// function a() {
//     let b = 100;
//     function c() {
//         b++;
//         console.log(b);

//     }
//     return c;//Here c not only returns but all the dependent and non dependent content of its lexical environment also returned ,all placed in closure object.
// }
// let f = a();
// f();

//Functions bundled together withits lexical environment.
// closures are a fundamental concept in JavaScript that allows functions to retain access to variables from their lexical scope even after the outer function has finished executing.
//Here in above example, c function has access to the b which is defined in the lexical scope of c that is in function 'a' due to the closures even after the execution of function 'a'. 

//PROTOTYPES:--------------------------------------------------------------------------------------

// const person={
//     name:'Kartik',
//     age:20,
//     isAdult:true,
//     sayHello:function(){
//         console.log("hello from Kartik");
//     }

// }
// let p1=Object.create(person);
// let p2=Object.create(p1);
// p1.sayHello();
//Whenever we create a object then dunder proto also created which contains the reference of parent object .it helps in implementing inheritance.



//PROMISES--------------------------------------------------------------------------------------------------------------------------

// function fun() {
//     return new Promise((resolve, reject) => {
//         const num = Math.random();
//         console.log(num);

//         if (num > 0.5) {
//             resolve([1,2,3])
//         } else {
//             reject('errorrrr');
//         }
//     })
// }
// let k;
// fun()
//     .then(e => {
//         k = e;
//         console.log('jgkg ', e)
//     })
//     .catch(err => {
//         console.log('hhh ', err)
//     })



//Some Typical Interview Output Questions-----------------------------------

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
  
  
//   async function getData() {
//     return await Promise.resolve('I made it!');
//   }
  
//   const data = getData();
//   console.log(data);

  
//   const myPromise = () => Promise.resolve('I have resolved!');
  
//   function firstFunction() {
//     myPromise().then(res => console.log(res));
//     console.log('second');
//   }
  
//   async function secondFunction() {
//     console.log(await myPromise());
//     console.log('second');
//   }
  
//   firstFunction();
//   secondFunction();
  
  
//   const promise1 = Promise.resolve('First')
//   const promise2 = Promise.resolve('Second')
//   const promise3 = Promise.reject('Third')
//   const promise4 = Promise.resolve('Fourth')
  
//   const runPromises = async () => {
//       const res1 = await Promise.all([promise1, promise2])
//       const res2  = await Promise.all([promise3, promise4])
//       return [res1, res2]
//   }
  
//   runPromises()
//       .then(res => console.log(res))
//       .catch(err => console.log(err))