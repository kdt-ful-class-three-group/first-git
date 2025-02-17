let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {
  let input = document.getElementsByTagName("input");

  if (input[0].value === true && input[1].value === false) {
    let div = document.createElement("div");
    document.body.append(div);
    let img = document.createElement("img");
    img.src = "./img/yes.jpg";
    img.alt = "yes";

    div.append(img);
  }
});
