<?php

use PHPMailer\PHPMailer\PHPMailer;

require '../php-mailer/PHPMailer.php';
require '../php-mailer/SMTP.php';
    $mail = new PHPMailer();
    $mail ->setFrom('purepeper@gmail.com');
    $mail ->addAddress('purepeper@gmail.com');
    // $mail ->addAddress($_POST['email']);
    $mail ->subject = "sent by PHPMailer ";
    $mail ->Body = ' wooo it works ';//$_POST['message']
    $mail ->isSMTP();
    $mail ->SMTPSecure = 'ssl';
    $mail ->Host = 'ssl://smtp.gmail.com';
    $mail ->SMTPAuth ="true";
    $mail ->Port = 465;

    // my email
    $mail -> Username = 'purepeper@gmail.com';
    
//pass
$mail->Password = "chcial bys smieciu";
if(!$mail->send())
{
    echo "nie dziala ";
}else{
    echo"woooo balanga";
}
echo "cokolwiek";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    xd
</body>
</html>