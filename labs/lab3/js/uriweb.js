function changePic() 
{

  /* write code to change the picture to the one linked at:
  
    - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png
    
	- change the width of the image
  */
  
   var imageElement = document.getElementById('uri_logo');
  imageElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png';
  imageElement.style.width = '200px'; 
 
}


function changeTags() 
{

  /* write code to change the color of all paragraphs to one of your choosing
  */
  var paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(function(paragraph) {
  	paragraph.style.color = 'red'; 
  });

  
}


function removeParagraph() 
{
	/* write code to use a confirmation box to confirm that the  user wants to remove the paragraph where this button is located. If the user confirms, then remove this paragraph.
  */
   if (confirm('Are you sure you want to remove this paragraph?')) {
    event.target.closest('p').remove();
  }

}
