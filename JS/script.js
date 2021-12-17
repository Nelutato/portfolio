
    //          ==========================      prace \/       ==================
var clock = 0;
var slide = 0;

    function autoChangeImg() 
    {
        slide++;
        if(slide>3) 
            {slide=1;}

        var photo = "img/image"+slide+".jpg";
        document.slide.src=photo;
        
        clock = setTimeout("autoChangeImg()",5000);
    }

    function changeImg(sign)
    {
        if(sign =="plus")
            {slide++;}
        else if (sign == "minus")
            {slide --; if(slide==0){slide = 3}} 

        var photo = "img/image"+slide+".jpg";
            document.slide.src=photo;

        clearTimeout(clock);
        clock = setTimeout("autoChangeImg() ",5000);
    }
    
//          ==========================      o mnie \/       ==================
//      NIE ZAPOMNIJ POPRAWIC insertFile !!
var omnie = "witam";
var praca = "praca";
var dlaczego = "dlaczego";
var znajdz = "znajdz";
function insertFile(id,smallBox)
{
    if(id =="omnie_small_box"){
        smallBox.innerHTML = omnie;
    }else if(id =="praca_small_box"){
        smallBox.innerHTML = praca;
    }else if(id =="dlaczego_small_box"){
        smallBox.innerHTML = dlaczego;
    }else if(id =="znajdz_small_box"){
        smallBox.innerHTML = znajdz;
    }
}

    function enlarge(smallBox)
    {

        id = smallBox
        smallBox = document.getElementById(smallBox);

        smallBox.style.width = "90%";
        smallBox.style.height = "80%";
        smallBox.style.marginTop = "0px";
        smallBox.style.clear = "both";
        smallBox.style.borderRadius= "0px";
        smallBox.style.position = "absolute";
        smallBox.style.opacity= "1";
        text =  smallBox.textContent;
        insertFile(id,smallBox);
    }

    function getSmaller(smallBox)
    {
        smallBox = document.getElementById(smallBox);
        smallBox.style.width = null;
        smallBox.style.height = null;
        smallBox.style.marginTop = null;
        smallBox.style.clear = null;
        smallBox.style.borderRadius= null;
        smallBox.style.position = null;
        smallBox.style.opacity = null;
        if(text != ""){
            smallBox.innerHTML = text;
            text = "";
        }
        

    }
