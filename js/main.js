const inputs = document.querySelectorAll(".input input");

function focusFunc() {
  let parent = this.parentNode.parentNode.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode.parentNode.parentNode;
  if (this.value == "") parent.classList.remove("focus");
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
