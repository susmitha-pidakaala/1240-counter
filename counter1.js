let updatevalue1=document.getElementById("updatevalue")
function onincrement() {
    
    let previousvalue=updatevalue1.textContent;
    let countervalue=parseInt(previousvalue)+1;
    if(countervalue>0){
        updatevalue1.style.color="green";
    }
    else if(countervalue<0)
    {
        updatevalue1.style.color="red";
    }
    else{
        updatevalue1.style.color="black";
    }
    updatevalue1.textContent=countervalue;
}

function ondecrement() {
    let previousvalue=updatevalue1.textContent;
    let countervalue=parseInt(previousvalue)-1;
    if(countervalue>0){
        updatevalue1.style.color="green";
    }
    else if(countervalue<0)
    {
        updatevalue1.style.color="red";
    }
    else{
        updatevalue1.style.color="black";
    }
    updatevalue1.textContent=countervalue;

}
function onReset() {
    
    updatevalue1.style.color="black";
    updatevalue1.textContent=0;

}