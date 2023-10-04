
import {testFunctionCallback} from '../../site.js';


export function addButton(){
    let myApp=document.getElementById('app');

let myButt=document.createElement('button');

myButt.innerText='test';

myButt.addEventListener('click',(e)=>{
    testFunctionCallback(e.target);
 
    
});

myApp.appendChild(myButt);

}