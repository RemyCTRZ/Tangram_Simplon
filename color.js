for (var i = 0; i < 360; i++) {
  var color = document.createElement("span");
  color.setAttribute("id", "d" + i);
  color.setAttribute("onclick", `catchColor(${i})`);
  color.setAttribute("class", "cursor");
  color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)";
  color.style.msTransform = "rotate(" + i + "deg)";
  color.style.webkitTransform = "rotate(" + i + "deg)";
  color.style.MozTransform = "rotate(" + i + "deg)";
  color.style.OTransform = "rotate(" + i + "deg)";
  color.style.transform = "rotate(" + i + "deg)";
  document.getElementById("colorwheel").appendChild(color);
}

function catchColor(e) {
  let a = document.getElementById("d" + e);
  let forme = document.getElementsByClassName("forme");
  let picker = a.style.backgroundColor;
  console.log(forme);

  for (let i = 0; i < 7; i++) {
    switch (i) {
      case 0:
        forme[0].setAttribute("style", `border-top-color: ${picker}; opacity: 0.8`);
        break;
      case 1:
        forme[1].setAttribute("style", `border-left-color: ${picker}; opacity: 0.4`);
        break;
      case 2:
        forme[2].setAttribute("style", `background-color: ${picker}; opacity: 0.3`);
        break;
      case 3:
        forme[3].setAttribute("style", `border-top-color: ${picker}; opacity: 0.6`);
        break;
      case 4:
        forme[4].setAttribute("style", `background-color: ${picker}; opacity: 1`);
        break;
      case 5:
        forme[5].setAttribute("style", `border-left-color: ${picker}; opacity: 0.7`);
        break;
      case 6:
        forme[6].setAttribute("style", `border-left-color: ${picker}; opacity: 0.5`);
        break;
    }
  }
}
