function toggleImage() {
  var cake = document.getElementById('cake');
  cake.classList.toggle('hidden');
}

var button = document.getElementById('button')
button.addEventListener('click', toggleImage)
