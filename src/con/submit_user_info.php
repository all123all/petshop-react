<?php
include 'DBConfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name = $obj['name'];
$email = $obj['email'];
$username = $obj['username'];
$password = $obj['password'];

//Checking if the email is already registered in the database
$CheckSQL = "SELECT * FROM user WHERE email='$email'";
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $EmailExistMSG = "Choose another email.";
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson;
}else{
    $InsertSQL = "INSERT INTO user (username, password, name, email) VALUES ('$username', '$password', '$name', '$email')";

    mysqli_query($con, $InsertSQL);

    // If the record inserted successfully then show the message.
    $MSG = $InsertSQL;    
    // Converting the message into JSON format.
    $json = json_encode($MSG);    
    // Echo the message.
    echo $json ;
    }
 mysqli_close($con);
?>