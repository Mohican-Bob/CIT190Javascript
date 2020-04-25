

 

    i=1;
    var one, two, three, four, five, six, seven, eight, nine, ten = false;
    var oneB, twoB, threeB, fourB, fiveB, sixB, sevenB, eightB, nineB, tenB = false;

    // allows images to flash on screen for half a second
    var setIntrvl = setInterval(Hide, 500);
    var clicks = 0
    function Hide(){            
    while(i<11){
        document.getElementById("pic" + i + "a").src = 'array/pick.png';
        document.getElementById("pic" + i + "b").src = 'array/pick.png';
        i++;
        clearInterval(setIntrvl);
        }
    }
    
    // each button checks for click amounts, reveals the image, and checks for wins

    $(function(){
         $('#1a').click(function(){ 
            
            //reveals image
            $('#pic1a').attr("src", "array/img1.png");
            //checks for win
            if(oneB == true){
                alert("You Win!");           
            }
            //checks for loss
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            }             
            else{
                one = true;
            }
            clicks +=1;
          
         })
         $('#2a').click(function(){        
            $('#pic2a').attr("src", "array/img2.png")
            if(twoB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                two = true;
            }
            clicks +=1;    
         })
         $('#3a').click(function(){        
            $('#pic3a').attr("src", "array/img3.png")
            if(threeB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                three = true;
            }
         
         })
         $('#4a').click(function(){
            
            $('#pic4a').attr("src", "array/img4.png")
            if(fourB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                four = true;
            }
            clicks +=1;
         
         })
         $('#5a').click(function(){
            
            $('#pic5a').attr("src", "array/img5.png")
            if(fiveB == true){
                alert("You Win!");           
            }
                    else if(clicks == 3){
                alert("you Lose!")
                location.reload();
            } 
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                fiveb = true;
            }
            clicks +=1;
         
         })
         $('#6a').click(function(){
            
            $('#pic6a').attr("src", "array/img6.png")
            if(sixB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                six = true;
            }
            clicks +=1;
       
         })
         $('#7a').click(function(){
            
            $('#pic7a').attr("src", "array/img7.png")
            if(sevenB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                seven = true;
            }
            clicks +=1;
        
         })
         $('#8a').click(function(){
            
            $('#pic8a').attr("src", "array/img8.png")
            if(eightB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                eight = true;
            }
            clicks +=1;
         
         })
         $('#9a').click(function(){
            
            $('#pic9a').attr("src", "array/img9.png")
            if(nineB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                nine = true;
            }
            clicks +=1;
        
         })
         $('#10a').click(function(){
            
            $('#pic10a').attr("src", "array/img10.png")
            if(tenB == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                ten = true;
            }
            clicks +=1;
       
         })
         $('#1b').click(function(){
            
            $('#pic1b').attr("src", "array/img1.png")
            if(one == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            }         else if(clicks == 3){
                alert("you Lose!")
                location.reload();
            } 
            else{
                oneB = true;
            }
            clicks +=1;
         
         })
         $('#2b').click(function(){
            
            $('#pic2b').attr("src", "array/img2.png")
            if(two == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                twoB = true;
            }
            clicks +=1;
         
         })
         $('#3b').click(function(){
            
            $('#pic3b').attr("src", "array/img3.png")
            if(three == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                threeB = true;
            }
            clicks +=1;
          
         })
         $('#4b').click(function(){
            
            $('#pic4b').attr("src", "array/img4.png")
            if(four == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                fourB = true;
            }
            clicks +=1;
       
         })
         $('#5b').click(function(){
            
            $('#pic5b').attr("src", "array/img5.png")
            if(five == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                fiveB = true;
            }
            clicks +=1;
          
         })
         $('#6b').click(function(){
            
            $('#pic6b').attr("src", "array/img6.png")
            if(six == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                sixB = true;
            }
            clicks +=1;
         
         })
         $('#7b').click(function(){
            
            $('#pic7b').attr("src", "array/img7.png")
            if(seven == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                sevenB = true;
            }
            clicks +=1;
        
         })
         $('#8b').click(function(){
            
            $('#pic8b').attr("src", "array/img8.png")
            if(eight == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                eightB = true;
            }
            clicks +=1;
        
         })
         $('#9b').click(function(){
            
            $('#pic9b').attr("src", "array/img9.png")
            if(nine == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                nineB = true;
            }
            clicks +=1;
        
         })
         $('#10b').click(function(){
            
            $('#pic10b').attr("src", "array/img10.png")
            if(ten == true){
                alert("You Win!");           
            }
            else if(clicks == 2){
                alert("you Lose!")
                location.reload();
            } 
            else{
                tenB = true;
            }
            clicks +=1;
        
         })
    });
    
    
    

        