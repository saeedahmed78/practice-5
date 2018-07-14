
  let stop1 ; 
  let start1;
   let jump1;

function count(){
    stop1 = parseInt(document.getElementById("stop").value); 
     start1 = parseInt(document.getElementById("start").value);
     jump1 = parseInt(document.getElementById("jump").value);
  
    
    for(let x = start1  ;x<=stop1 ;x=x+jump1){
        console.log(x)
   }
}  
