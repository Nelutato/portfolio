<?php 
    require('./components/head.component.php'); 
    require('./components/nav.component.php');
?>


<body onload="autoChangeSlide()">

<div id="prace"  >

    <div class="carusel">
        <div class="back_slide" onclick='clickChangeSlide("minus")' >  
            <i class ="angle_bracet" >
                 < 
            </i>   
        </div>
        <img name="slide"id="slide" >

        <div class="skip_slide" onclick='clickChangeSlide("plus")' > 
            <i class="angle_bracet"> 
                > 
            </i> 
        </div>
    </div>

</div>
</body>

<?php
    require ('../components/foter.component.php');
?>