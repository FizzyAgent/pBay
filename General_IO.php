<?php
$servername = "localhost";
$username = "root";
$password = "pass";
$dbname = "ebay_db";

$conn = new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
    die("Connection failed" + $conn->connect_error);
}

if($_GET){
    $v = $_GET["v"];
    $db = $_GET["db"];
    $c = $_GET["c"];
}
else if($_POST){
    $v = $_POST["v"];
    $db = $_POST["db"];
    $c = $_POST["c"];
}

$sql = "select ";

if ($v === ""){
    $sql .= "* from ";
}
else{
    $sql .= "$v from ";
}

$sql .= $db;

if ($c !== ""){
    $sql .= " where $c";
}
$result = $conn->query($sql);
$array = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($array);

$conn->close();
?>