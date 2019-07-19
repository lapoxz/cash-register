function execute1(){
    let a = document.getElementById('pri').value;
    let b = document.getElementById('quan').value;

    if      (isNaN(a) || isNaN(b) ){
       alert ('error')
    }
    else if      (a=='' || b==''){
        alert ('error')
     }
    else{
        let x = Number(a) * Number(b);
       document.getElementById('answer').innerHTML="Total :"+" "+ x;
    }
}

function execute2(){

    let prdct= document.getElementById('item').value;
    let a = document.getElementById('pri').value;
    let b = document.getElementById('quan').value;
    let x = Number(a) * Number(b);
    let money = Number(document.getElementById('cas').value);
    

    if      (isNaN(a) || isNaN(b) ){
        alert ('input a valid number')
     }
    else if      (a=='' || b==''){
         alert ('empty')
      }
      else if ( money < x){
          alert( 'insuficient cash')
      }

    else {
            let change = money - x;
    document.getElementById("product").innerHTML="Product is :"+prdct;
    document.getElementById("price").innerHTML="Product is :"+a;
    document.getElementById("quantity").innerHTML="Quantity is :"+" "+b;
    document.getElementById("total").innerHTML="Total is :"+" "+x;
    document.getElementById("cash").innerHTML="Your Cash is :"+" "+money;
    document.getElementById("change").innerHTML= "Change is:"+ " "+change;

    }
    
    }
