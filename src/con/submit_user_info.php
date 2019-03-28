<?php
include 'DBConfig.php';
 
// Creating connection.
// In the access line i must change the default value (1)
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$username = $obj['username'];
$password = $obj['password'];
$name = $obj['name'];
$email = $obj['email'];
$access = 1;

$Sql_Query = "insert into user (username, password, name, email, access) values 
            ('$username','$password','$name', '$email', '$access')";
 
 
if(mysqli_query($con,$Sql_Query)){

$MSG = 'Data Inserted Successfully into MySQL Database' ;

$json = json_encode($MSG);

 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>