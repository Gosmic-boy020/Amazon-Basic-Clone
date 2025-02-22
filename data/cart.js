export let cart=JSON.parse(localStorage.getItem('cart'));
if (!cart){
cart=[{
  productid:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
  deliveryOptionId:'1'
},{
  productid:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
  deliveryOptionId:'2'
}];
}

function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId,productQuantity) {
  const producNum=Number(productQuantity)
  let matchingItem;
  document.querySelector
      cart.forEach((item) => {
        if(productId === item.productid){
          matchingItem = item;
        }
        
      }); 
      if(matchingItem){
        const quantityCheck=matchingItem.quantity+producNum
        quantityCheck <=10 ? matchingItem.quantity+=producNum : alert('This Product Reached MAX Quantity..!!');     
      }
      else{
        cart.push({
          productid:productId,
          quantity:producNum,
          deliveryOptionId:'1'
        });
      };
      saveToStorage()
}

export function removeFromCart(productId){
  const newCart=[]
  cart.forEach((cartItem) => {
      if( cartItem.productid !== productId){
        newCart.push(cartItem)
      }
  })
  cart=newCart
  saveToStorage()
}

export function updateQuantity(id,newQuantity)
{
 
  cart.forEach(item => {
    if(item.productid===id){

      if(newQuantity>=1 && newQuantity<=10 ){
      console.log('item found:',id)
      const pat='.';
      const correctNum=Math.trunc(newQuantity);
      item.quantity=correctNum;
      saveToStorage();
      console.log('updated new quantity to:',correctNum);
      }
      else{
        alert('Only Betwenn 1 to 10 Range !!')
      }
  }
    
  })
  
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;

      cart.forEach((item) => {
        if(productId === item.productid){
          matchingItem = item;
        }
      });
      matchingItem.deliveryOptionId=deliveryOptionId;
      saveToStorage()  
} 