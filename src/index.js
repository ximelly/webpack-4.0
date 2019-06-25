import './style.css';
import headerImg from './headerImg.jpg';
import {print} from './print.js';

function createEl(type,source,fun){
    let el;
    switch(type){
        case 'btn','p':
            el=document.createElement(type)
            el.innerHTML=source;
            break;
        case 'img':
            el=new Image();
            el.src=source?source:"";
            break;
        default:
            el=document.createElement('div')
            el.innerHTML=source?source:"";
    }
    if(typeof fun =='function'){
        el.onclick=fun;
    }
    return el;
}

document.body.appendChild(createEl('p','这是一段文本',print));
let element=createEl('p','这是第二段文本',print);
document.body.appendChild(element);
document.body.appendChild(createEl('img',headerImg));
document.body.appendChild(createEl('',"默认文本"));

if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      document.body.removeChild(element);
      element = createEl('p','这是第二段文本',print); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
}