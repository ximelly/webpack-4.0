import './style.css'
import headerImg from './headerImg.jpg';
function createEl(){
    let element=document.createElement('div'),
        text=document.createElement('p'),
        text2=document.createElement('p'),
        img=new Image();
    img.src=headerImg;
    text.innerHTML="hello word! 有字体";
    text2.innerHTML="hello word! 无字体";
    element.appendChild(img);
    element.appendChild(text);
    element.appendChild(text2);
    element.classList.add('personInfo');
    return element;
}

document.body.appendChild(createEl());