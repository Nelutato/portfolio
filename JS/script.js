
    //          ==========================      prace \/       ==================
    // var i=0;
    // var image = [];

    // image[0]="img/image1.jpg";
    // image[1]="img/image2.png";
    // image[2]="img/image3.jpg";
    var clock = 0;
    var slide = 0;
    function autoChangeImg() 
    {
        slide++;
        if(slide=4)
        {
            slide=1;
        }
        var photo = "img/image"+slide+".jpg";
        document.slide.src=photo;

        clock = setTimeout("changeImg()",5000);
    }
    function changeImg(slide_nr)
    {
        slide= slide+ slide_nr; 
        clearTimeout(clock);
        setTimeout("changeImg()",100)
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
