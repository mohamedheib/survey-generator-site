<?php
    include_once './db_connect.php';

        if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }


        $u = $_GET['u'];
        $r = $_GET['r'];
        $resall = "";



        $sql_sch = "SELECT * FROM scores";
        $result = mysqli_query($link, $sql_sch);
        $res_rows = mysqli_num_rows($result);
        if ($res_rows > 0){
            while($row = mysqli_fetch_assoc($result)){
                $res = $row['username'];
                $res .= " ";
                $res .= $row['exam_id'];
                $res .= " ";
                $res .= $row['score'];
                $res .= " ";
                $res .= $row['finshtime'];
                $res .= ")(";
                $resall .= $res;
            }

        }
            $path = "Location: ../html/users_gra.html?u=";
            $path .= $u;
            $path .= "?r=";
            $path .= $r;
            $path .= "?resall=";
            $path .= $resall;
            header($path);


?>