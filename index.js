count = 3
number = 3

function changeImage() {
  var pic;
  count++
  if ((count % 2) == 1) {
    pic = "no smack.png"
  } else {
    pic = "smack.png"
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
