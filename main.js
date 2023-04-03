let image = document.createElement('img');
let image2 = document.createElement('img');
let text = document.createTextNode('Добавлен');
let i; 
if( i != true || i != false){
    i = true;
}

function add1(){
    image2.src  = '/banana.png';
    image2.classList.add('banana');
    document.querySelector('.container').insertBefore(image2, image);
} 

function add7(){
    if(i != true){
        alert("Убери")
    }else{
        image.src  = '/horn.png';
        image.classList.add('horn');
        document.querySelector('.container').appendChild(image);
        image.id = "img";
        document.querySelector('.p-7').innerText = "1";
        i = false;
    }
}
function remove7(){
    document.querySelector('#img').className = " ";
    document.querySelector('#img').remove();
    document.querySelector('.p-7').innerText = "0";
    i = true;
}
function add8(){
    if(i != true){
        alert("Убери")
    }else{
    image.src  = '/choolate-horn.png';
    image.classList.add('choc-horn');
    document.querySelector('.container').appendChild(image);
    document.querySelector('.p-8').innerText = "1";
    i = false;
    }
}
function remove8(){
    document.querySelector('#img').className = " ";
    document.querySelector('#img').remove();
    document.querySelector('.p-8').innerText = "0";
    i = true;
}