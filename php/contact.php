<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$message = trim($message);

if (mail("belongtomars@gmail.com",
		 "New letter",
		 "nNme: ".$name."\n".
		 "Email: ".$email."\n".
	     "Number: ".$message."\n".
	     "From no-reply@mydomain.ru \r\n")

	     ) {
			echo ("Well done..");
		 }

		 else {
		 	echo("Needed a real hosting...");
		 }

?>