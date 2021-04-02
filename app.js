const ul = document.querySelectorAll("ul>li>span");

const table = document.querySelector("table");
table.addEventListener("click", (e) => {
  if (e.target.tagName !== "TD") return;
  let data = [...event.target.parentNode.children];
  let text = getDataFromTd(data);
  text.forEach((item,idx) => ul[idx].textContent = item)
});

function getDataFromTd(tdArr) {
  return tdArr.map((item) => item.textContent);
}
