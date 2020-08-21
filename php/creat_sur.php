<?php
    include_once './db_connect.php';
    if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
    }
    $sur = $_GET['sur'];
    $user = $_GET['u'];
    $isadmin = $_GET['r'];

    $sql_sch = "insert into exams(exam) values (\"$sur\");";
    $result = mysqli_query($link, $sql_sch);

    if ($result == FALSE){
        echo "Debugging errno: " . mysqli_errno($link) . PHP_EOL;
        echo "Debugging errno: something went wrong while saving the exam please try again letter " ;
        exit;
    }
    $sql_sch = "SELECT * FROM exams;";
    $result = mysqli_query($link, $sql_sch);
    $res_rows = mysqli_num_rows($result);
    if ($res_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            $id = $row['exam_id'];
        }
        $path = "Location: ../html/create_survey.html?u=";
        $path .= $user;
        $path .= "?r=";
        $path .= $isadmin;
        $path .= "?id=";
        $path .= $id;

        header($path);
    }
?>





