const parentDiv = document.getElementById("parentDiv");
const startBtn = document.getElementById("startBtn");
const doneImage = document.getElementById("doneImage");

let i = 0;
let array = [50, 30, 40, 45, 4, 12, 6, 43, 11, 26, 9];

// this function will be call when click start button
startBtn.addEventListener("click", async () => {
  await bubbleSort(array);
  doneImage.style.display = "block";
  setTimeout(() => {
    doneImage.style.display = "none";
  }, 1500);
});

// this function will be return promise
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// this function will be created div and append to parent div
function arrayforEach(array) {
  array.forEach((e) => {
    let tampDiv = document.createElement("div");
    tampDiv.style.height = e * 6 + "px";
    tampDiv.style.width = 50 + "px";
    tampDiv.style.backgroundColor = "#88cef7";
    tampDiv.innerHTML = e;
    tampDiv.setAttribute("id", "elem" + i);
    i++;
    tampDiv.classList.add("innerDiv");
    parentDiv.appendChild(tampDiv);
  });
}

arrayforEach(array);

// this function will be return bubble sort algorithm
async function bubbleSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      await sleep(500);
      if (array[j] > array[j + 1]) {
        await swap(array, j, j + 1);
      }
    }
  }
  return array;
}

// this function will be swap two element
async function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  let elem1 = document.getElementById("elem" + a);
  let elem2 = document.getElementById("elem" + b);
  elem1.style.backgroundColor = "red";
  elem2.style.backgroundColor = "red";
  await sleep(500);
  elem1.style.height = array[a] * 6 + "px";
  elem2.style.height = array[b] * 6 + "px";
  elem1.innerHTML = array[a];
  elem2.innerHTML = array[b];
  elem1.style.backgroundColor = "#0075ba";
  elem2.style.backgroundColor = "#0075ba";
  elem1.style.color = "white";
  elem2.style.color = "white";
}
