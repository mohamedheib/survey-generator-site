<?php
    include_once './db_connect.php';
    if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
    }
    $sid = $_GET['sid'];
    $user = $_GET['u'];
    $isadmin = $_GET['r'];

    $sql_sch = "SELECT * FROM exams WHERE exam_id='$sid';";
    $result = mysqli_query($link, $sql_sch);
    $res_rows = mysqli_num_rows($result);

    if ($res_rows == 0){
              $path = "Location: ../html/answer_survey.html?u=";
              $path .= $user;
              $path .= "?r=";
              $path .= $isadmin;
              $path .= "?sid=";
              $path .= $sid;
              $path .= "?sur=-1";
              header($path);
    }else{
            $row = mysqli_fetch_assoc($result);
            $path = "Location: ../html/answer_survey.html?u=";
            $path .= $user;
            $path .= "?r=";
            $path .= $isadmin;
            $path .= "?sid=";
            $path .= $sid;
            $path .= "?sur=";
            $path .= $row['exam'];
            header($path);
    }
?>