const listItem = document.querySelectorAll(".footer__list-item");

for (let i = 0; i < listItem.length; i++) {
  let n = i + 1;
  if (n < 10) {
    listItem[i].innerHTML += " 0" + n;
  } else listItem[i].innerHTML += " " + n;
}
