console.clear();
let secretArray = [ /* Don't know what's inside here... */ ];
const list = [ "A", "B", "C", "Dimitris" ];
//              0    1    2    3             4
//             -4   -3   -2   -1
// slice(            1,        3 );
secretArray; // <-- Get the last element of this.
let arrayLength = list.length; // ? 4
list.slice( arrayLength - 1 );
console.log(

  /* DISPLAY THE LAST ELEMENT OF THE ARRAY */
  /* list.slice(-1) */
  /* list.slice(-1)[0] */
  /* list.slice( arrayLength - 1 )[0] */
  /* list[ arrayLength - 1 ] */
  list[ list.length - 1 ]

);