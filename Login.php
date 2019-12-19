<script src='Initialise.js'></script>

<?php

$u = $_POST["u"];
$p = $_POST["p"];

$servername = "localhost";
$username = "root";
$password = "pass";
$dbname = "ebay_db";

$conn = new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
    die("Connection failed" + $conn->connect_error);
}

$sql = "select * from user where username='$u' and password='$p'";

$result = $conn->query($sql);
$conn->close();

if($result->num_rows>0){
    echo "<script '>setUser($u)</script>";
}
else{
    echo "<script>loginFail();</script>";
}
?>