<?php
    include_once './db_connect.php';

        if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }
        use \Datetime;

         $now = new DateTime();
         $ctime = $now->format('Y-m-d H:i:s');    // MySQL datetime format


        $u = $_GET['u'];
        $r = $_GET['r'];
        $sco = $_GET['s'];
        $sid = $_GET['sid'];
        $slen = $_GET['slen'];

        $sql_sch = "delete from scores where username='$u' and exam_id='$sid';";
        $result = mysqli_query($link, $sql_sch);
        $sql_sch = "insert into scores(username, exam_id, score, finshtime) values ('$u', '$sid', '$sco', '$ctime');";
        $result = mysqli_query($link, $sql_sch);

        $path = "Location: ../html/score.html?u=";
        $path .= $u;
        $path .= "?r=";
        $path .= $r;
        $path .= "?id=";
        $path .= $sid;
        $path .= "?score=";
        $path .= $sco;
        $path .= "?surveylen=";
        $path .= $slen;
        $path .= "?tt=1";

        header($path);
?>