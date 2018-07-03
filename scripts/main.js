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
}
