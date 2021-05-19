function updatePrincipal(){
    var p = document.getElementById("principal").value;             //this function makes sure you don't enter a negative number or zero 
    if(p <= 0){                                                     //it sends an alert and focuses on the deposit input box until you put a positive number
    
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return
    }else {
        document.getElementById("principal").innerText = p;
    }
}

function compute()
{   document.getElementById("result").innerHTML = "";               // I added this line to erase previous results so they dont stack every time you press the button
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);        
    document.getElementById("result").innerHTML += "If you deposit:<mark>$"+principal+"</mark><br/>at an interest rate of <mark>"+rate+"%.</mark><br/>You will receive an amount of <mark>$"+interest+"</mark><br/>in the year <mark>"+year+"</mark>";
}  
                                                                    //Changed the html content of "result" to be able to highlight the result numbers with te <mark> tags 

function updateRate(){
    var rateval = document.getElementById("rate").value;            //this function displays the rate value that is changed by the range input
    document.getElementById("rate_val").innerText = rateval;
}

    