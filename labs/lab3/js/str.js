function checkEq() {

	var msg = document.getElementById('msg');
  var str1 = document.getElementById('str1').value;
  var str2 = document.getElementById('str2').value;

  if (str1.length === str2.length){
    msg.innerHTML = 'They are equal.';
  }
  else if (str1.length != str2.length){
    msg.innerHTML = 'They are not equal.';
  }

}

function sumOfLengths() {

  var str1 = document.getElementById('str1').value;
  var str2 = document.getElementById('str2').value;
  
	var sum = str1.length + str2.length;
  
	document.getElementById('msg').innerText = "The sum of the lengths of both strings is: " + sum + ".";

}

