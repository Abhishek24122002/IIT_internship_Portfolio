document.getElementById('flip').addEventListener('click', function(event) {
  event.preventDefault();
});
document.getElementById('unflip').addEventListener('click', function(event) {
  event.preventDefault();
});
$(document).ready(function () {
    $("#card").flip({
    trigger: 'manual'
  });
  
  $('#flip').click(function (event) {
    $("#card").flip(true);
  });
  
  $('#unflip').click(function (event) {
    $("#card").flip(false);
  });
  
});