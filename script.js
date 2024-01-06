window.onload = function() {
  var isHuman = confirm("Are you a human?");
  if (!isHuman) {
    window.location.href = "error.html";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirection prevented.');
  });
});
