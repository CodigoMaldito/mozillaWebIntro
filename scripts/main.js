window.onload = function(){
  var myImage = document.querySelector('img');

  myImage.onclick = function() {
  	var mySrc = myImage.getAttribute('src');
  	if(mySrc === 'images/my-image.png') {
        myImage.setAttribute ('src','images/firefox-developer-logo.png');
  	} else {
  	  myImage.setAttribute ('src','images/my-image.png');
  	}
  }
  // Personalized welcome message code

  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');

  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
}
