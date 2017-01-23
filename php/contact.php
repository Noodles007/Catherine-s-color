<?php
	echo "now";
	include './connect.php';
	if(isset($_POST)) echo "yes";
	$name=$_POST[hisname];
	echo "name";
	$email=$_POST[hisemail];
	$tel=$_POST[histel];
	$txt=$_POST[message];
	$sql="insert into contact(hisname,hisEmail,histel,message) values('$name','$email','$tel','$txt')";
	$mysqli->query($sql);
?>		