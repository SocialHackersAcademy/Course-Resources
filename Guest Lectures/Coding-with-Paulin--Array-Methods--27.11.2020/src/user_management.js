console.clear();

function createUser(firstName, surname, age) {
  return {
    firstName: firstName,
    surname: surname,
    age: age
  };
}
// INPUT: OBJECT -> OUTPUT: STRING
function getUserInfo(user) {
  //return user.firstName + " " + user.surname + ", " + user.age + " years old";
  return `${user.firstName} ${user.surname}, ${user.age} years old`;
}

function displayUsers(listID, filtered_users) {
  const user_list = document.getElementById(listID);
    user_list.innerHTML = "";

    filtered_users.forEach(function (user, index) {
    const list_item = document.createElement("li");
    const delete_button = document.createElement("button");
    delete_button.addEventListener("click", function () {
      users.splice(index, 1);
      displayUsers();
    });
    delete_button.innerText = "Delete";
    list_item.innerText = getUserInfo(user);
    user_list.appendChild(list_item);
    list_item.appendChild(delete_button);
  });

  

  //for (let i = 0; i < users.length; i++){
  /*
  for (let user of users) {
    const list_item = document.createElement("li");
    list_item.innerText = getUserInfo(user); // or users[i]
    user_list.appendChild(list_item);
  } */
}

function addUser() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  users.push(createUser(name, surname, age));
  displayUsers();
}

const submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click", addUser);

let users = [
  createUser("John", "Doe", 21),
  createUser("Kostas", "Athina", 12),
  createUser("Simon", "Garfunkel", 35),
  createUser("Scooby", "Doo", 17),
  createUser("Ben", "Duwer", 66)
];

displayUsers('adult_list', users.filter(function(user) {
  return user.age >= 18;
}))
displayUsers('youngsters_list', users.filter(function(user) {
  return user.age < 18;
}));
