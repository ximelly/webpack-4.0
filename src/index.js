import './style.css';
import headerImg from './headerImg.jpg';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

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
        el.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
          var fun = module.print;
          fun();
        });
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