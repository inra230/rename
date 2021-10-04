count = 3
number = 3

function changeImage() {
  var pic;
  count++
  if ((count % 2) == 1) {
    pic = "/images/no smack.png"
  } else {
    pic = "/images/smack.png"
  }
  document.getElementById('myImage').src = pic;
}

function changeButton() {
  var button;
  number++
  if ((number % 2) == 1) {
    button = "Flip"
  } else {
    button = "Flip Again"
  }
  document.getElementById('firstButton').innerHTML = button
}
