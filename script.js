function formeClick(e) {
  let body = document.body;
  body.className = '';
  switch (e) {
    case 'trier':
      body.className = '';
      break;
    case 'reset':
      body.classList.add("reset");
      break;
    case "fish":
      body.classList.add("fish");
      break;
    case 'bear':
      body.classList.add("bear");
      break;
    case 'dog':
      body.classList.add("dog");
      break;
    case 'cat':
      body.classList.add("cat");
      break;
    case 'swan':
      body.classList.add("swan");
      break;
    case 'camel':
      body.classList.add("camel");
      break;
  }
}

function nightMode() {
  let body = document.body;
  let icon = document.getElementById('icon_night_mode');
  body.getAttribute("id") === "nightMode" ? body.removeAttribute("id") : body.setAttribute("id", "nightMode");
  if (icon.className === "fa-solid fa-sun")
  {
    icon.className = "fa-solid fa-moon";
  }
  else
  {
    icon.className = "fa-solid fa-sun";
  }
}

function designClick(d) {
  let forme = document.getElementsByClassName(d);
  const actifs = document.querySelectorAll('.active');
  for (active of actifs) {
    active.classList.remove('active');
  }
  forme[0].classList.add('active');
}