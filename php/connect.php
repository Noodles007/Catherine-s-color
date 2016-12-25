<?php
	$mysqli=new mysqli("localhost","root","xiaokang","dingxueyang");
	if($mysqli->connect_errno){
		printf("Connect wrong: ",$mysqli->connect_error);
		exit();
	}
	echo "success";
?>
