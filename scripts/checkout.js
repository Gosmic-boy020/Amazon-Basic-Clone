import { renderOrderSummery } from "./checkout/orderSummery.js";
import { renderPaymentSummery } from "./checkout/paymentSummery.js";
import { loadProducts } from "../data/products.js";
loadProducts(()=>{
  renderOrderSummery();
  renderPaymentSummery();
});


