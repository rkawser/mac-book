// memoryCost  function
function memoryInput(number){
    const memoryCost =document.getElementById('output-Memory');
    memoryCost.innerText=number;
    
};


// Storage function
function storageInput(outputStorage){
    const storageCost =document.getElementById('storage-OutPut');
    storageCost.innerText=outputStorage;
};

// delivary function
function delivaryInput(delivaryNumber){
   const delivaryCharge = document.getElementById('delivary-OutPut');
   delivaryCharge.innerText =delivaryNumber;
};

// total Price 
function totalAmount(){
const bestPrice =document.getElementById('best-Price').innerText  

const memoryPrice =document.getElementById('output-Memory').innerText;
  
const storagePrice =document.getElementById('storage-OutPut').innerText;

const delivaryPrice =document.getElementById('delivary-OutPut').innerText;

const totalPrice =parseFloat( memoryPrice )+parseFloat(storagePrice) + parseFloat(delivaryPrice) +parseFloat(bestPrice);

const totalAmount= document.getElementById('total-Price');
  const totalAmountText = totalAmount.innerText= totalPrice;

 const totalText =parseFloat(document.getElementById('total-Amount').innerText =totalAmountText);
//   totalText.innerText = totalAmountText;
};



// memory
document.getElementById('input-btn').addEventListener('click',function(){
   memoryInput(0);
  totalAmount();
});

document.getElementById('memory-btn').addEventListener('click',function(){
   memoryInput(180);
  totalAmount();
});

// Storage
document.getElementById('storage-FirstButton').addEventListener('click',function(){
    storageInput(0);
    totalAmount();
});

document.getElementById('storage-secondButton').addEventListener('click',function(){
    storageInput(100);
    totalAmount();
});

document.getElementById('storage-thirdButton').addEventListener('click',function(){
    storageInput(180);
    totalAmount();
});

// delivary

document.getElementById('delivary-firstButton').addEventListener('click',function(){
    delivaryInput(0);
    totalAmount();
});

document.getElementById('delivary-secondButton').addEventListener('click',function(){
    delivaryInput(20);
    totalAmount();
});

// apply
document.getElementById('apply-btn').addEventListener('click',function(){
    const getInputValue=document.getElementById('promo-code');
    const getInputValueText =getInputValue.value;
    getInputValue.value ='';

    if (getInputValueText == 'stevekaku') {
        const finalAmount =document.getElementById('total-Amount');
        const finalAmountText =finalAmount.innerText;
        finalAmount.innerText =finalAmountText -(finalAmountText*0.20);
    }
    else{
        alert('pleage try agin,Give the correct promo code')
    }
})