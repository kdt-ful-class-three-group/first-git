let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", () => {
  let input = document.getElementsByTagName("input");

  console.log(input[0].checked, input[1].checked);

  if (input[0].checked === true && input[1].checked === false) {
    let div = document.createElement("div");
    document.body.append(div);
    let img = document.createElement("img");
    img.src = "./img/yes.jpg";
    img.alt = "yes";
    // img.width = "100px";

    div.append(img);
  }
});
