// demo array for sorting
const array = [50, 30, 40, 90, 4, 12, 6, 43, 67];
const parentDiv = document.getElementById("parentDiv");
const startBtn = document.getElementById("startBtn");

let i = 0;

array.forEach((e) => {
  let tampDiv = document.createElement("div");
  tampDiv.style.height = e * 6 + "px";
  tampDiv.style.width = 50 + "px";
  tampDiv.style.backgroundColor = "red";
  tampDiv.setAttribute("id", "elem" + i);
  i++;
  tampDiv.classList.add("innerDiv");
  parentDiv.appendChild(tampDiv);
});
