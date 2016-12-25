function $(id){
	return document.getElementById(id);
}
function getClassElements(element,classname){
	return element.getElementsByClassName(classname);
}
(function(){
	var autoplay=true;
	var SPEED=50;
	var DURATION=7000; 
	var STEP=0;
	function animation(ele,left){
		function step(){
			if(autoplay&&STEP>-100){
				STEP-=10;
				ele.style.left=left+STEP+"%";
				ele.style.opacity=1+STEP*0.01;
			}       
			else{
				STEP=0;
				ele.style.opacity=1;
				clearInterval(time);
			}
		}
		var time=setInterval(function(){step();},SPEED);
	}
	function slide(num,ele,callback){
		var left=0;
		function step(){
			if(autoplay&&left>-((num-1)*100)){
				callback(ele,left);
				left-=100;
				ele.style.left=left+"%";
			}
			else {
				function back(){
					if(autoplay&&STEP<(num-1)*100){
						STEP+=(num*5);
						ele.style.left=-(num-1)*100+STEP+"%";
						ele.style.opacity=0.5;
					}
					else{
						STEP=0;
						ele.style.opacity=1;
						clearInterval(time2);
					}
				}
				time2=setInterval(function(){back();},100);
				ele.style.left=0;
				left=0;
			}
		}
		inte=setInterval(function(){step();},DURATION);
	}
	window.onload=function(){
		(function getDate(){
			var dates=["星期天","星期 一","星期 二","星期 三","星期 四","星期 五","星期 六"];
			var date=new Date();
			$("date").innerHTML="今日"+dates[date.getDay()];
		})();
		var ele=$("slide")
		var children=ele.children;
		var num=children.length;
		ele.style.width =num*100+"%";
		for(var i=0;i<children.length;i++){
			var child=children[i];
			child.style.width=100/num+"%";
		}
		slide(num,ele,animation);

		}

})();

