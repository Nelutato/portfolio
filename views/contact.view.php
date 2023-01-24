<?php 
    require('./components/head.component.php'); 
    require('./components/nav.component.php');
?>

<div id="contactForm">
<form action="PHP/mail.php" method="POST">
    <br/>   <i class="FormNameOfInput" >email :</i>  <br/>
        <input type="email" class="inputForm" placeholder='example@example.com'/>
    <br/>   <i class="FormNameOfInput">tytul : </i>  <br/>
        <input type="text" class="inputForm" placeholder="title">
    <br/>   <i class="FormNameOfInput">text :</i>   <br/>
        <textarea id="ContactMessageForm" name="ContactMessageForm" placeholder="text">
        </textarea>
    <br/>
    <button type="submit" value="send" class="ContactButton"> S E N D</button> ;
</form>
</div>
<?php
    require ('../components/foter.component.php');
?>