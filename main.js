let count = 0;
let number = document.getElementById('number');

function minus(){
    if(count == -1000){
        count = 0
    }else{
        count = count - 1;
    }
    number.innerHTML = count;
}

function plus(){
    count = count + 1
    number.innerHTML = count;
}