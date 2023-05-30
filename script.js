let result = document.querySelector("#result");

function insert(number){

    let firstNumber = result.innerHTML;
    result.innerHTML = firstNumber += number;

}

function clean(){

    result.innerHTML = ('');
}

function back(){

     let result = document.querySelector("#result").innerHTML;
     document.querySelector("#result").innerHTML = result.substring(0, result.length - 1);
}

function calculate(){

    const resultFinal = result.innerHTML;
   
    if(resultFinal){

        result.innerHTML = eval(resultFinal);
    }else{
        result.innerHTML = ""
    }
}

