
function anadirNumeroDisplay(idNumber,idDisplay){
    if(document.getElementById(idDisplay).value === "0")
    {
        document.getElementById(idDisplay).value = document.getElementById(idNumber).value 
    }
    else
    {
        document.getElementById(idDisplay).value += document.getElementById(idNumber).value
    }
    console.log (document.getElementById(idDisplay).value)
}

function sumar(){
    document.getElementById("screen-result-anterior").value = document.getElementById("screen-result").value 
    document.getElementById("screen-operacion").value ="SUMA"
    document.getElementById("screen-result").value = ""
    document.getElementById("screen-show-operation").value = document.getElementById("screen-result-anterior").value + " +"
    console.log (document.getElementById("screen-result-anterior").value + "+")

}

function restar(){
    document.getElementById("screen-result-anterior").value = document.getElementById("screen-result").value 
    document.getElementById("screen-operacion").value ="RESTA"
    document.getElementById("screen-result").value = ""
    document.getElementById("screen-show-operation").value = document.getElementById("screen-result-anterior").value + " -"
    console.log (document.getElementById("screen-result-anterior").value + "-")

}

function mult(){
    document.getElementById("screen-result-anterior").value = document.getElementById("screen-result").value 
    document.getElementById("screen-operacion").value ="MULT"
    document.getElementById("screen-result").value = ""
    document.getElementById("screen-show-operation").value = document.getElementById("screen-result-anterior").value + " *"
    console.log (document.getElementById("screen-result-anterior").value + "*")

}

function div(){
    document.getElementById("screen-result-anterior").value = document.getElementById("screen-result").value 
    document.getElementById("screen-operacion").value ="DIV"
    document.getElementById("screen-result").value = ""
    document.getElementById("screen-show-operation").value = document.getElementById("screen-result-anterior").value + " /"
    console.log (document.getElementById("screen-result-anterior").value + "/")

}
function result(){
    element = document.getElementById("screen-result-anterior")
    display = document.getElementById("screen-result")
    operation = document.getElementById("screen-operacion")
    if(operation.value === "SUMA")
    {
        value1 = parseInt(element.value)
        value2 = parseInt(display.value)
        resultado = value1 + value2
        display.value = resultado
        document.getElementById("screen-show-operation").value = value1 + " + " + value2 + " =" 
        console.log(value1, "+", value2, "=", resultado)
    } 
    else if(operation.value === "RESTA")
    {
        value1 = parseInt(element.value)
        value2 = parseInt(display.value)
        resultado = value1 - value2
        display.value = resultado
        document.getElementById("screen-show-operation").value = value1 + " - " + value2 + " =" 
        console.log(value1, "-", value2, "=", resultado)
    } 
    else if(operation.value === "MULT")
    {
        value1 = parseInt(element.value)
        value2 = parseInt(display.value)
        resultado = value1 * value2
        display.value = resultado
        document.getElementById("screen-show-operation").value = value1 + " * " + value2 + " =" 
        console.log(value1, "*", value2, "=", resultado)
    }
    else if(operation.value === "DIV")
    {
        value1 = parseInt(element.value)
        value2 = parseInt(display.value)
        if (value2 === 0){ 
            display.value = "ERROR"}
        
        else {resultado = value1 / value2
        display.value = resultado
        document.getElementById("screen-show-operation").value = value1 + " / " + value2 + " =" 
        }
        console.log(value1, "/", value2, "=", resultado)
    }  
}
function clean(){

    document.getElementById("screen-result-anterior").value = ""
    document.getElementById("screen-result").value = ""
    document.getElementById("screen-show-operation").value = ""

}