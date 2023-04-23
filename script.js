// ..................likes..........................//
var likes=document.getElementsByClassName("like");
for(let i=0;i<likes.length;i++){
    let like=likes[i]
    like.addEventListener("click" , function(){
        if( like.firstChild.style.color == "black"){
            like.firstChild.style.color = "red"
        ;} else{ like.firstChild.style.color = "black";}
 
    }
    );}  

    // ..................btn plus............//
    var btnplus=document.getElementsByClassName("plus-btn")
    for(let i=0; i<btnplus.length;i++){
        let plus=btnplus[i];
        plus.addEventListener('click', function(){
            plus.previousElementSibling.value++;
            total();
            total1 ();
            total2 ();
            total3 ();
        })

    }
    // // ..........btn minus...............//
    var btnminus=document.getElementsByClassName("minus-btn")
    for(let i=0 ; i<btnminus.length;i++){
        let minus=btnminus[i];
        minus.addEventListener('click', function(){
         if(minus.nextElementSibling.value>1){
            minus.nextElementSibling.value--;
            total(); total1 ();total2 ();total3 ();
         }
        })
    }

// ............delete btn...................//
var deletes=document.getElementsByClassName("delete")
for(let i=0; i<deletes.length;i++){
    let del =deletes[i];
del.addEventListener('click', function(){
    del.parentElement.remove();total(); total1 ();
})
}
// .......Totale.........//
var items=document.getElementsByClassName("Item");
var finalPrice=document.getElementById("finalPrice")
function total(){
    let s = 0;
    for(let i=0 ; i < items.length; i++) {
       let item = items[i];
    s =
    s +
    item.querySelector(".Quant").value *
    item.querySelector(".price").innerText;
    }
    return (finalPrice.value=s);
}
