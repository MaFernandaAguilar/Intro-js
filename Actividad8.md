# JS Scoping exercises
​
1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  /* Como la variable a esta declarada despues del console no lo encuentra y nos dice que esta definida y pense que pasaria lo mismo con la funcion, pero las funciones las puedes mandar a 
  llamar en cualquier parte del codigo.*/
  ```
​
> undefined
> undefined

> undefined
> 2
​
​
2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> undefined
> undefined
​
​
/*3. What is the result of the following code? Explain your answer.
  ```js
  /* no entiendo esta parte de codigo*/
  var a = 1
  function foo() {
    var a = 2;
​
    function bar() {
      console.log( a );
    }
​
    return bar;
  }
  
  var baz = foo();
  baz();
  ``` 
> 2
> error*/
​
​
​
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```
​
> null o indefined por que no esta retornando nada
> indefined