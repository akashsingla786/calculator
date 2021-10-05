const screen=document.getElementById('screen');
const button=document.querySelectorAll('button');


for(let btn of button){
    btn.addEventListener('click',(e)=>{
        const text=e.target.innerText;

        if(text==='x'){
            screen.value +='*';
        }
        else if(text==='C'){
            screen.value="";
        }
        else if(text==='='){
            try{
                screen.value=eval(screen.value);
            }
            catch(e){
                screen.value="Invalid Operations";
            }
        }
        else{
            screen.value +=text;
        }
    })
}