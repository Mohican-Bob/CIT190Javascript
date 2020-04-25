
        
    var word = ['j','a','v','a','s','c','r','i','p','t'];
    var j,a,v,s,c,r,eye,p,t = false;
    var lose = 0;
    
    for ( i = 0; i<word.length; i += 1){
        console.info("array:", word[i]);
    }

    // hides the images that create the hangman and resets the text areas
    $(function(){
        $('#seven').hide();
        $('#six').hide();
        $('#five').hide();
        $('#four').hide();
        $('#three').hide();
        $('#two').hide();
        document.getElementById("j").value = "";
        document.getElementById("a").value = "";
        document.getElementById("v").value = "";
        document.getElementById("a2").value = "";
        document.getElementById("s").value = "";
        document.getElementById("c").value = "";
        document.getElementById("r").value = "";
        document.getElementById("i").value = "";
        document.getElementById("p").value = "";
        document.getElementById("t").value = "";
                    
        
    });        
    // takes the letter information to be tested
    $(function(){
        $('#check').click(function(){
            var test = document.getElementById("letter").value;
            var win = false;
            
            for ( i = 0; i<word.length; i += 1){
                    console.info("test: ", test);
                    console.info("array1", word[i]);                        
                    if(test == word[i]){
                    Win(test);
                    win = true;
                    console.info("win: ", win);
                    }
            }
                
            // checks if letters match, if match is true, letter reveals, if match is false, hides old image and reveals new image

            if(win == false){
                lose +=1;                        
                switch(lose){
                        case 1:
                            $('#one').hide();
                            $('#two').show();
                            break;
                        case 2:
                            $('#two').hide();
                            $('#three').show();
                            break;
                        case 3:
                            $('#three').hide();
                            $('#four').show();
                            break;
                        case 4:
                            $('#four').hide();
                            $('#five').show();
                            break;
                        case 5:
                            $('#five').hide();
                            $('#six').show();
                            break;
                        case 6:
                            $('#six').hide();
                            $('#seven').show();
                            alert("You lost Bro!");
                            break;
                    }
            }
            if(j && a && v && s && r && i && p && t){
                alert("you win!");                    
            }


        })
    })


function Win(test){
    switch (test){
                        case "j": 
                            document.getElementById("j").value = "J";                                
                            j=true;
                            win=false;                                
                            break;
                        case "a": 
                            document.getElementById("a").value = "A";
                            document.getElementById("a2").value = "A";
                            a=true;
                            win=false;                                
                            break;
                        case "v": 
                            document.getElementById("v").value = "V";
                            v=true;
                            win=false;                                
                            break;  
                        case "s": 
                            document.getElementById("s").value = "S";
                            s=true;
                            win=false;                                
                            break;
                        case "c": 
                            document.getElementById("c").value = "C";
                            c=true;
                            win=false;                                 
                            break;
                        case "r": 
                            document.getElementById("r").value = "R";
                            r=true;
                            win=false;                                
                            break;
                        case "i":
                            document.getElementById("i").value = "I";
                            eye=true; 
                            win=false;                                
                            break;
                        case "p": 
                            document.getElementById("p").value = "P";
                            p=true; 
                            win=false;                                
                            break;
                        case "t": 
                            document.getElementById("t").value = "T";
                            t=true; 
                            win=false;                                
                            break; 
                                               
                    } 
}

