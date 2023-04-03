function nature() {
  let name = prompt(" What is your name?");
  let email = prompt("Please provide your email address");
  let update = prompt("Would you like weekly updates?");

  if (update === "yes") {
    alert("Thank you " + name + " , we will be in touch soon! 💃🕺 ");
  } else {
    alert("Thank you " + name + ", enjoy the beauty of nature around you 🌺 ");
  }
}

let updateBtton = document.querySelector("button");
updateBtton.addEventListener("click", nature);
