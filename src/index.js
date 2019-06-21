import './style.css'
import headerImg from './headerImg.jpg';
function createEl(){
    let element=document.createElement('div'),
        img=new Image();
    img.src=headerImg; 
    element.appendChild(img);
    element.classList.add('personInfo');
    return element;
}

document.body.appendChild(createEl());