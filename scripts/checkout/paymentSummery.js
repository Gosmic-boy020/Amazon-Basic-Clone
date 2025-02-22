import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import { getDeliveryOption } from '../../data/delivaryOptions.js';
import { formateCurrency } from '../utils/money.js';
export function renderPaymentSummery(){
  let productPrice=0;
  let ShippingCost=0;
  let html=``;

  cart.forEach(cartItem => {
    const product=getProduct(cartItem.productid);
    productPrice+=product.priceCents*cartItem.quantity;
    const optionId=getDeliveryOption(cartItem.deliveryOptionId);
    ShippingCost+=optionId.priceCents
    
  });

  const total=productPrice+ShippingCost;

  let itemQuantity=0;
  cart.forEach((item) => {
    itemQuantity+=item.quantity;    
  });

 

  html+=`
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${itemQuantity}):</div>
            <div class="payment-summary-money">$${formateCurrency(productPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formateCurrency(ShippingCost)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formateCurrency(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formateCurrency((total)*0.1)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formateCurrency(((total)*0.1)+(total))}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `
document.querySelector('.payment-summary').innerHTML=html;
   

}