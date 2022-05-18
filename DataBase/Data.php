<?php
	$email = $_POST['Email'];
	$password = $_POST['Password'];
	$numberphone = $_POST['Numberphone'];

	// Database connection
	$conn = new mysqli('localhost','root','','data');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(Email,Password,Numberphone) values(?, ?, ?)");
		$stmt->bind_param("ssi", $email, $password, $numberphone);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>