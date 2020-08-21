var line_no, lineCount = 0, num;
        var remainder=0, sum=0;
        num = parseInt(document.getElementById('inputno').value);
        function getno(){
            var num1 = document.getElementById('inputno').value;
            
            var letters = /[0-9]/; 
            if(num1.match(letters))
            {
                if(num1.length > 10){
                    alert("Maximum 10 Digit number allowed");
                }
                else{
                    document.getElementById('nextbtn').style.visibility = "visible";
                    document.getElementById('codeTextLines').style.visibility = "visible";
                    document.getElementById('submitbtn').style.visibility = "unset";
                    num = num1;
                }   
            }
            else
                alert('Enter a Valid Number');                
        }

        function executeCode(){
            if(lineCount != 0)
                document.getElementById(line_no).style.color = "white";
            lineCount += 1;
            num = parseInt(num);
            //var remainder, sum=0;
            line_no = 'line' + lineCount;

            // Converts text to RED
            document.getElementById(line_no).style.color = "red";
            
            if(line_no=='line1')
            {
                //document.getElementById('numblock').style.borderColor = "white";
            }
            if(line_no=='line4')
            {
                document.getElementById('numblock').innerHTML = num;
                document.getElementById('numblock').style.borderColor = "white";
                document.getElementById('remainderblock').style.borderColor = "white";
                document.getElementById('sumblock').style.borderColor = "white";
                document.getElementById('output-section').style.visibility = visible;
            }
            if(line_no=='line5')
            {
                document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
                document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
                document.getElementById('sumblock').style.borderColor = "rgb(24, 84, 216)";
                document.getElementById('output-section').style.visibility = visible;
            }
            if(line_no=='line7')
            {
                remainder = num % 10;
                document.getElementById('remainderblock').innerHTML = remainder;
                document.getElementById('remainderblock').style.borderColor = "white";
                document.getElementById('numblock').style.borderColor = "white";
            }
            
            if(line_no=='line8')
            {
                sum+=remainder;
                document.getElementById('sumblock').innerHTML = sum;
                document.getElementById('remainderblock').style.borderColor = "white";
                document.getElementById('sumblock').style.borderColor = "white";
                document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
            }
            if(line_no=='line9')
            {
                num = num / 10;
                num = parseInt(num);
                document.getElementById('numblock').innerHTML = num;
                document.getElementById('numblock').style.borderColor = "white";
                document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
                document.getElementById('sumblock').style.borderColor = "rgb(24, 84, 216)";
            }
            
            if(line_no=='line10')
            {
                if(num>0)
                {
                    lineCount=4;
                }
                else
                {
                    lineCount=10;
                }
            }
            if(line_no =='line11')
            {
                //document.getElementById('demo-output').innerHTML = sum;
                document.getElementById('sumblock').style.borderColor = "#FFD700";
                document.getElementById('sumblock').style.backgroundColor = "#FFD700";
                document.getElementById('sumblock').style.color = "black";
                document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
                document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
            }
            if(line_no =='line12')
            {
                //document.getElementById('demo-output').innerHTML = sum;
                //document.getElementById('sumblock').style.borderColor = "#FFD700";
                document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
                document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
                alert("Simulation Completed");
                window.location.reload();
            }
        }
