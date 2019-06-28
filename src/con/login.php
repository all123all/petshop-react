<?php 
include 'DBConfig.php';
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$username = $obj['username'];
$password = $obj['password'];

//Checking if the username entered is already registered in the database
$CheckSQL = "SELECT * FROM user WHERE username='$username' AND password='$password'";
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $EmailExistMSG = "success";
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson;
}else{
    $QueryMessage = "Username or password wrong.";
    $MSG = $QueryMessage;    
    // Converting the message into JSON format.
    $json = json_encode($MSG);    
    // Echo the message.
    echo $json ;
    }
mysqli_close($con);
?>