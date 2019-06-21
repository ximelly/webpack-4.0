import './style.css'
function hello(){
    let element=document.createElement('div');
    element.classList.add('personInfo');
    document.body.appendChild(element);
}
hello();