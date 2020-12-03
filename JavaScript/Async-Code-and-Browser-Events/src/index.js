document.querySelector("button#a")
.addEventListener("click", handleClickA );

function handleClickA(e){
  // console.log("A!");
}

document.querySelector(".parent")
.addEventListener("click", function(e){
  console.log( typeof e.target );
  if ( e.target.getAttribute("id") === "a" ){
    alert("You won!");
  } else {
    alert("You lost!");
  }
});

document.querySelector("#update").
addEventListener("click", function(){
  document.querySelector(".parent").innerHTML = `
    <button class="child" id="a">ANSWER A</button>
    <button class="child" id="c">ANSWER C</button>
  `;
  // document.querySelector("button#a")
  // .addEventListener("click", handleClickA );
});