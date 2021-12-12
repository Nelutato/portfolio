
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="CSS/style.css" rel="stylesheet">
    <!-- <link href="CSS/icon/css/fontello.css" rel="stylesheet"> -->
    <script src="JS/script.js"></script>

    <title>Portfolio</title>
</head>
<body >
    <header>
        <img src="img/logo.png" width="5%" height="80%" class="logo">
        <nav>
            <ol>

                <li class="menu_link"><a href="?prace">Prace</a></li>
                <li class="menu_link"><a href="?x=o_mnie">O mnie</a></li>
                <li class="menu_link"><a href="?x=kontakt">Kontakt</a></li>

            </ol>
        </nav>
    </header>

    <div class="container">
        <?php
        $x="";

            if(strpos($_SERVER['REQUEST_URI'],"prace")==true){
                include 'PHP/prace.php';
            }elseif(strpos($_SERVER['REQUEST_URI'],"kontakt")==true){
            include 'PHP/kontakt.php';
            }elseif(strpos($_SERVER['REQUEST_URI'],"Omnie")==true || 1==1){
                include 'PHP/omnie.php';
           }
           
        ?>
    </div>
</body>
</html>