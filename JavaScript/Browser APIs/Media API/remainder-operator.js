// Remainder Operator
console.log( 5 % 20 ); 
console.log( ">>", 5 / 20 ); 

console.log( 3 % 9 );
console.log( ">>", 3 / 9 ); 

console.log( 9 % 2 );
console.log( ">>", 9 / 2 ); 

console.log( 8 % 4 );
console.log( ">>", 8 / 4 ); 

// Remainder Operator Use Cases: detect odd/even
const numbers = [ 1, 2, 3, 4, 5 ];
numbers.forEach( number => {
  console.log( number % 2 );  
  if ( number % 2 === 0 ){
    console.log( number + " is an even number" );
  } else if ( number % 2 === 1 ){
    console.log( number + " is an odd number");
  }
});

// Remainder Operator Features: 24h clock to 12h
console.clear();
const date = new Date();
console.log( date.getHours() ); // 24h mode
console.log( 13 % 12 );
console.log( 15 % 12 );
console.log( 19 % 12 );

// Remainder Operator Use Cases: Getting minutes and seconds from a total seconds value
const duration = video.duration; // Example: 74.632;
const minutes = Math.floor( 74 / 60 ); // 1
const seconds = 74 % 60; // 14
console.log( minutes + "." + seconds ); // 1.14