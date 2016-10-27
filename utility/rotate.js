  var curIndex = 0; 
  var timeInterval = 2000; 
  var arr = new Array(); 
  arr[0] = "./images/show1.png"; 
  arr[1] = "./images/show2.png"; 
  arr[2] = "./images/show3.png"; 
  arr[3] = "./images/show4.png"; 
  //setInterval(changeImg,timeInterval); 
  function changeImg(id) { 
   var obj = document.getElementById(id); 
   if(curIndex == arr.length-1) { 
      curIndex = 0; 
   }
   else{ 
      curIndex += 1; 
   } 
   obj.src = arr[curIndex]; 
  } 