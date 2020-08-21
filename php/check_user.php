<?php
    include_once './db_connect.php';

        if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }

        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql_sch = "SELECT * FROM TSGUSERS WHERE username='$username';";
        $result = mysqli_query($link, $sql_sch);
        $res_rows = mysqli_num_rows($result);
        if ($res_rows > 0){
            $row = mysqli_fetch_assoc($result);
            if ($password == $row['password']){
                $is_admin = strval($row['admin']);
                $path = "Location: ../html/main_page.html?u=";
                 $path .= $username;
                 $path .= "?r=";
                 $path .= $is_admin;
                header($path);
            }else
                header("Location: ../html/Login.html?F=1");

        }else{
            header("Location: ../html/Login.html?F=1");
        }

?>