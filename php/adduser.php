<?php
    include_once './db_connect.php';

        if (!$link) {
            echo "Error: Unable to connect to MySQL." . PHP_EOL;
            echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
            echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
            exit;
        }

        $username = $_GET['username'];
        $password = $_GET['password'];
        $admin = $_GET['admin'];
        $u = $_GET['u'];
        $r = $_GET['r'];




        $sql_sch = "SELECT * FROM TSGUSERS WHERE username='$username';";
        $result = mysqli_query($link, $sql_sch);
        $res_rows = mysqli_num_rows($result);
        $adm = 0;
        if ($res_rows > 0){
            $path = "Location: ../html/Adduser.html?u=";
            $path .= $u;
            $path .= "?r=";
            $path .= $r;
             $path .= "?e=1?s=0";
             header($path);
             exit;
        }else{
            if ($admin == 'yes' || $admin == 'YES' || $admin == 'Yes'){
                $adm = 1;
            }else{
                $adm = 0;
            }
        }
        $sql_sch = "insert into TSGUSERS(username, password, admin) values ('$username', '$password', '$adm');";
        $result = mysqli_query($link, $sql_sch);
        $path = "Location: ../html/Adduser.html?u=";
        $path .= $u;
        $path .= "?r=";
        $path .= $r;
        $path .= "?e=0?s=1";
        header($path);


?>
