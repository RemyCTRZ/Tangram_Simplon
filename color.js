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

  for (let i = 0; i < 7; i++) {
    if (i === 2) {
      forme[2].setAttribute("style", `background-color: ${picker}`);
    } else if (i === 4) {
      forme[4].setAttribute("style", `background-color: ${picker}`);
    } else {
      forme[i].setAttribute("style", `border-color: ${picker}`);
    }
  }
}
