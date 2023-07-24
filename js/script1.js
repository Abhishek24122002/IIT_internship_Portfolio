// function toggle() {
//     console.log('hit')
//     const displayStyle = document.getElementById('mobile-menu').style.display;
//      displayStyle === 'flex' ? document.getElementById('mobile-menu').style.display = "none": document.getElementById('mobile-menu').style.display = "flex";
// }
window.onload = function() {
    var images = ["css/img/Aziz_sir2.jpg", "css/img/Aziz_sir4.jpg", "css/img/Aziz_sir3.jpg"];
    var currentIndex = 0;
    var profilePic = document.getElementById("profile-pic");
  
    setInterval(function() {
      if (currentIndex == images.length) {
        currentIndex = 0; // reset the index to 0 to start from the first image again
      }
  
      if (currentIndex == 0) {
        profilePic.style.transition = "none"; // remove transition for the first image
      } else {
        profilePic.style.transition = "all 1s ease"; // apply transition for other images
      }
  
      profilePic.src = images[currentIndex];
      currentIndex++;
    }, 5000);
  }

  function parallax() {
    var scrollPosition = window.pageYOffset;
    var parallaxElement = document.querySelector(".parallax");
    parallaxElement.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  }

  window.addEventListener("scroll", parallax);
  
