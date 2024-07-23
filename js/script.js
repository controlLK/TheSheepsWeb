

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
// nav
const navElement = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
  if (window.scrollY >= 50) {
    navElement.classList.add('navbar-scrollin');
  } else if (window.scrollY < 50) {
    navElement.classList.remove('navbar-scrollin');
  }

});


  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {console.log("ijubkjm,bjkgchvjbkm,bjnp")
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
      console.log("ijubkjm,bjkm,bjnp")
    } else {
      mySidebar.style.display = 'block';
      console.log("ijionp")
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }