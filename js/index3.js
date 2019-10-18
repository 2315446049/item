//var bimg=document.getElementById('bimg');
var simg=document.getElementById('simg');
var ass=simg.getElementsByTagName('a');


for(var i=0;i<ass.length;i++){
	
	
	ass[i].onclick=function(){
		for(var j=0;j<ass.length;j++){
			ass[j].className='';
			lis[j].style.display='none';
		}
		this.className='active';
	}
}
