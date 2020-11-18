// Timer code
function showAlert(){
    alert("Time is up!");
  }
  const timerID = setTimeout( showAlert, 90000 ); // 15 minutes
  
  // Accessing local variables
  // A) Returning the value
  function a(){
    let _a = "a";
    return _a;
  }
  
  function b(){
   let _b = "b";
   // We want to access _a. What can we do?
   a(); // === "a"
  }
  
  
  // B) Storing the value of the variable in a global variable
  let g;
  function a(){
     let _a = "a";
     g = _a;
  }
  a();
  
  function b(){
    let _b = "b";
    console.log( g );
  }
  
  
  // C) Storing in global variable without declaring one (TRY TO AVOID)
  function a(){
    let _a = "a";
    // When using a variable without declaring it: let, var, const
    // it automatically becomes a global variable (AVOID AT ALL COSTS)
    g = _a; 
    // Another way:
    window.g = _a;
  }
  a();
  
  function b(){
   let _b = "b";
   console.log( g );
  }
  
  
  // D) what if we call function a inside the function b,
  //  or nest, can we use _a variable?
  function b(){
    function a(){
      let _a = "a";
    }
    let _b = "b";
  }
  
  // QUESTION: FUNDAMENTALS 3
  let from = "Ann";
  // As long as the local variable always shadows the global variable...! 
  // Why both <from> variables are applied in the output(call function)?                        
  // Think of it as: function showMessage(let from = <CALL>, let text = <CALL>) {
  function showMessage( let from = "Ann", let text = "Hello") {
     // let from; let text; === let from, text;
     let local = "PRIVATE IN showMessage()";
     from = '*' + from + '*'; // make "from" look nicer
     alert( from + ': ' + text );
     return "Message Shown";
   }
   // RETURN STATEMENT WHEN:
   somefunction(); --> TO BE REPLACED WITH A VALUE!
   
   showMessage(from->"Ann", "Hello"); // *Ann*: Hello
   // the value of "from" is the same, the function modified a local copy
   alert( from ); // Ann
   
   function add(numA,numB){ let output = a+b;}
   function subtract(numA,numB){ let output = first-second; }
   function divide(numA,numB){ let output = x/y; }
   function multiply(numA,numB){ let output = numA*numB; }