// All ID called
const extraMemoryCost=document.getElementById("extra-memory-cost")
const extraSsdCost=document.getElementById("extra-storage-cost");
const extraDelivaryCharge=document.getElementById("extra-delivary-charge");
const totalText=document.getElementById("total-cost");
const bestPrice=document.getElementById("price");
const totalAmount=document.getElementById("display-total")
const pomoCode=document.getElementById("pomo-code");
const pomo="stevekaku";

// price upadte on click functions
function memorysCost(price){
    extraMemoryCost.innerText=price;
    totalPrice()
}
function ssdsCost(price){
    extraSsdCost.innerText=price;
    totalPrice()
}
function delivarysCost(price){
    extraDelivaryCharge.innerText=price;
    totalPrice()
}
// total cost calculation
function totalPrice(){
    
    const memoryCost= parseInt(extraMemoryCost.innerText);
    const ssdCost=parseInt( extraSsdCost.innerText);
    const delivaryCost=parseInt( extraDelivaryCharge.innerText);
    const total =parseInt(bestPrice.innerText);
    const totalCost=total+memoryCost+ssdCost+delivaryCost
    totalText.innerText=totalCost;
    totalAmount.innerText=totalCost;
    

}
// cost Calculation after pomo code
function pomoDiscount(){
    const PreviousTotalCost=parseFloat(totalText.innerText);
    const discountAmount=PreviousTotalCost*0.2;
    const totalDiscountPrice=PreviousTotalCost-discountAmount;
    const pomoCodeText=pomoCode.value;
    pomoCode.value="";
    if (pomoCodeText.toLocaleLowerCase()==pomo){
        
        totalAmount.innerText=totalDiscountPrice;
    }
}
//--------------------------memoray-------------------------------------
document.getElementById("8gb-memory").addEventListener("click",function(){
        memorysCost(0);
   
   
})
document.getElementById("16gb-memory").addEventListener("click",function(){

        memorysCost(180);
})
//------------------------- storage-----------------------------------------
document.getElementById("256gb-ssd").addEventListener("click",function(){
    ssdsCost(0);
}) 
document.getElementById("512gb-ssd").addEventListener("click",function(){
    ssdsCost(100);
}) 
document.getElementById("1tb-ssd").addEventListener("click",function(){
    ssdsCost(180);
}) 
// -------------------------delivary------------------------------------
document.getElementById("free-delivary").addEventListener("click",function(){
    delivarysCost(0);
})
document.getElementById("withCharge-delivary").addEventListener("click",function(){
    delivarysCost(20);
})
// -----------------------pomo code apply btn-----------------------------
document.getElementById("submit-btn").addEventListener("click",function(){
    pomoDiscount()
})