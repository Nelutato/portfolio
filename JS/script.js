var clock = 0;
var slide = 0;

    function autoChangeSlide() 
    {
        slide++;
        if(slide>3) 
            {slide=1;}

        var photo = "img/image"+slide+".jpg";
        document.slide.src=photo;
        
        clock = setTimeout("autoChangeSlide() ",5000);
    }

    function clickChangeSlide(sign)
    {
        if(sign =="plus")
            {
                slide++;
                if(slide==4){slide=1;}
            }
        else if (sign == "minus")
            {slide --; if(slide==0){slide = 3}} 

        var photo = "img/image"+slide+".jpg";
            document.slide.src=photo;

        clearTimeout(clock);
        clock = setTimeout("autoChangeSlide()",5000);
    }
    
