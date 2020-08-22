var line_no, lineCount = 0, num;
var remainder=0, sum=0;
//num = parseInt(document.getElementById('inputno').value);
//var num;
function getno(){
var num1 = document.getElementById('inputno').value;
var letters = /[0-9]/; 
    if(num1.match(letters))
    {
        if(num1.length > 10){
            alert("Maximum 10 Digit number allowed");
        }
        else{
            document.getElementById('startbtn').style.visibility = "visible";
            document.getElementById('submitbtn').style.visibility = "hidden";
            num = num1;
            document.getElementById('numblock').innerHTML = num;
            document.getElementById('numblock').style.borderColor = "white";
        }   
    }
    else{
        alert('Invalid Number');
        window.location.reload();
    }  
}

function startProg() {
    document.getElementById('codeTextLines').style.visibility = "visible";
    document.getElementById('startbtn').innerHTML = "<b>Next</b>";
    executeCode();
}

function executeCode(){
    if(lineCount != 0)
        document.getElementById(line_no).style.color = "white";
    lineCount += 1;
    num = parseInt(num);

    line_no = 'line' + lineCount;

    document.getElementById(line_no).style.color = "red";

    if(line_no=='line1')
    {
        num=0;
        document.getElementById('line1comment').style.visibility = 'visible';
    }

    if(line_no=='line2')
    {
        document.getElementById('line1comment').style.visibility = 'hidden';
    }

    if(line_no=='line4')
    {
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('remainderblock').style.borderColor = "white";
        document.getElementById('sumblock').style.borderColor = "white";
        document.getElementById('output-section').style.visibility = "visible";
        document.getElementById('input_no').style.visibility = "visible";
    }

    if(line_no=='line5') //printf
    {
        document.getElementById('line5comment').style.visibility = 'visible';
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('sumblock').style.borderColor = "rgb(24, 84, 216)";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
    }

    if(line_no=='line6') //scanf
    {
        document.getElementById('line5comment').style.visibility = 'hidden';
        document.getElementById('line6comment').style.visibility = 'visible';
        document.getElementById('input_section').style.visibility = 'visible';
        document.getElementById('submitbtn').style.visibility = 'visible';
        document.getElementById('inputno').style.visibility = 'visible';
        document.getElementById('startbtn').style.visibility = "hidden"; 
        document.getElementById('numblock').innerHTML = num;

    }


    if(line_no=='line7') //while
    {
        document.getElementById('numblock').innerHTML = num;
        document.getElementById('line6comment').style.visibility = 'hidden';
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('sumblock').style.borderColor = "rgb(24, 84, 216)";
        document.getElementById('output-section').style.visibility = visible;
    }

    if(line_no=='line8')//{
    {
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
    }
    if(line_no=='line9')//remainder = num%10;
    {
        remainder = num % 10;
        document.getElementById('remainderblock').innerHTML = remainder;
        document.getElementById('remainderblock').style.borderColor = "white";
        document.getElementById('numblock').style.borderColor = "white";
    }
    
    if(line_no=='line10')//sum = sum + remainder
    {
        sum += remainder;
        document.getElementById('sumblock').innerHTML = sum;
        document.getElementById('remainderblock').style.borderColor = "white";
        document.getElementById('sumblock').style.borderColor = "white";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
    }
    if(line_no=='line11')//num = num/10;
    {
        num = num / 10;
        num = parseInt(num);
        document.getElementById('numblock').innerHTML = num;
        document.getElementById('numblock').style.borderColor = "white";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('sumblock').style.borderColor = "rgb(24, 84, 216)";
    }
    
    if(line_no=='line12')
    {
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
        if(num>0)
        {
            lineCount=6;
        }
        else
        {
            lineCount=12;
        }
    }

    if(line_no =='line13')
    {
        document.getElementById('line13comment').style.visibility = 'visible';
        document.getElementById('sumblock').style.borderColor = "#FFD700";
        document.getElementById('sumblock').style.backgroundColor = "#FFD700";
        document.getElementById('sumblock').style.color = "black";
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
    }
    if(line_no =='line14')
    {
        document.getElementById('line13comment').style.visibility = 'hidden';
        document.getElementById('remainderblock').style.borderColor = "rgb(71, 170, 5)";
        document.getElementById('numblock').style.borderColor = "rgb(243, 80, 16)";
        alert("Simulation Completed");
        window.location.reload();
    }
}
