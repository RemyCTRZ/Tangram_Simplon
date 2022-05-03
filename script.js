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
