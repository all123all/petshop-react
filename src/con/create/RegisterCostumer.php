<?php 
include '../DBConfig.php';
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name = $obj['name'];
$email = $obj['email'];
$owner_name = $obj['owner_name'];
$age = $obj['age'];

//Checking if the email is already registered in the database
$CheckSQL = "SELECT * FROM pet WHERE email='$email'";
$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $EmailExistMSG = "invalid";
    $EmailExistJson = json_encode($EmailExistMSG);
    echo $EmailExistJson;
}else{
    $InsertSQL = "INSERT INTO pet (owner_name, name, age, email) VALUES ('$owner_name', '$name', '$age', '$email')";

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