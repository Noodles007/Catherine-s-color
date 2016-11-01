function $(id){
	return document.getElementById(id);
}

function getClassElements(element,classname){
	return element.getElementsByClassName(classname);
}

function slide(){
	var s=$("c-blackboard");
	var children=getClassElements(s,"b-slide");
	for(var i=0;i<children.length;i++){
		for(var j=0;j<children.length;j++){
			children[j].className="b-slide";
		}
		children[i].className += " dis";
	}
}
window.onload=function(){
	slide();
}