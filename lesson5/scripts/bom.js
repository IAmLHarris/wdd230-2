const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.value != "") {
    let chapterName = document.createElement("li");
    chapterName.textContent = input.value;

    let remove = document.createElement("button");
    remove.textContent = "X";
    chapterName.append(remove);
    list.append(chapterName);

    remove.addEventListener("click", function () {
      list.removeChild(chapterName);
    });
    input.value = "";
  }
});
