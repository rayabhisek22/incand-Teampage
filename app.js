var pos =[]
var div = 360 /15;
var radius = 280;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
var offsetToChildCenter = 8;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 15; ++i) {
  var childdiv = document.createElement('div');
  childdiv.className = 'div2';
  childdiv.style.position = 'absolute';
  var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
  var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  pos.push({top:childdiv.style.top,left:childdiv.style.left})
  parentdiv.appendChild(childdiv);
}


var c=1
pos.forEach((obj)=>{
	var d = c.toString(10)
	var i = document.getElementById(d)
	i.style.top = obj.top
	i.style.left = obj.left
	c++

})

