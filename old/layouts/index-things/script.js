const list = document.querySelectorAll(".tag-element");

const form = document.querySelector(".form-group");

const input = document.querySelector("#name");

const content = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      input.value += this.innerText + " ";
    } else {
      input.value = input.value.replace(this.innerText + " ", "");
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = input.value;

  content.forEach((item) => {
    if (item.innerText.includes(inputValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  input.value = "";
});
