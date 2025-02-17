let btn = document.getElementsByTagName("button")[0];

let div = document.createElement("div");
document.body.append(div);

let img = document.createElement("img");
div.append(img);
div.style.marginTop = "20px";

btn.addEventListener("click", () => {
  let input = document.getElementsByTagName("input");

  console.log(input[0].checked, input[1].checked);

  if (input[0].checked === true && input[1].checked === false) {
    img.src = "./img/yes.jpg";
    img.alt = "yes";
    img.style.width = "50%";
  }
  if (input[0].checked === false && input[1].checked === true) {
    img.src = "./img/no.jpg";
    img.alt = "yes";
    img.style.width = "50%";
  }
});
