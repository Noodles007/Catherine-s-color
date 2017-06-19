//获得id 元素
function $(id){
	return document.getElementById(id);
}
//获得类元素
function getClassElements(element,classname){
	return element.getElementsByClassName(classname);
}

//兼容IE5/6 创建XMLHttpRequest封装对象
function createXhr(){
	if(typeof XMLHttpRequest != 'undefined'){
		return new XMLHttpRequest();
	}
	else if(typeof ActiveXObject != 'undefined'){
		if(typeof arguments.callee.activeXstring != 'string'){
			var versions=["Msxl2.XMLHTTP.6.0","Msxl2.XMLHTTP.3.0","Msxl2.XMLHTTP"];
			var i=0;
			for(i;i<versions.length;i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXstring=versions[i];
					break;
				}catch(ex){
					//跳过	
				}	
			}
		}
		return new ActiveXObject(arguments.callee.activeXstring);
	} 
	getElementsByClassName{
		throw new Error("Please update your browser!");
	}
}
//encodeURIcomponent编码对象 封装
function encodeFormData(data){
	if(!data){
		return '';
	}
	else{
		var pairs=[];
		for(var name in data){
			if(!data.hasOwnProperty(name)) continue;
			if(typeof data[name]==="function") continue;
			var value=data[name].toString();
			name=encodeURIcomponent(name.replace("20%","+"));
			value=encodeURIcomponent(value.replace("20%","+"));
			pairs.push(name+"="+value);
		}
		return pairs.join("&");
	}
}

//实现 ajax get 封装函数
function ajaxGet(url){
	var request=createXhr();
	request.open("GET",url);
	request.setRequestHeader("Content-Type","text/plain");
	request.send(null);

}


//轮播
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

