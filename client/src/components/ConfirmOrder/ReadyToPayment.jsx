import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import {
  getCart,
  getShippingInfo,
  getUserDetails,
  setConfirmOrder,
} from "../../helper/SassionHelper.js";

const ConfirmOrder = () => {
  const shippingInfo = getShippingInfo();
  const userDetails = getUserDetails();
  const cartItems = getCart();

  const address = `${shippingInfo?.address}, ${shippingInfo?.city}, ${shippingInfo?.state}, ${shippingInfo?.pinCode}, ${shippingInfo?.country}`;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCharges = subtotal > 1000 ? 10 : 5;
  const tax = 0;
  const totalPrice = subtotal + tax + shippingCharges;

  const navigate = useNavigate();
  const proceedToPayment = async () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };
    await setConfirmOrder(data);
    navigate("/process/payment");
  };
  return (
    <Fragment>
      <div >
        {/* <div>
          <div className="confirmShippingArea">
            <Typography>Shipping Info :</Typography>
            <div className="confirmShippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{userDetails[0]?.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo?.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>

          <div className="confirmCartItems">
            <Typography>Your Cart Items :</Typography>
            <div className="confirmCartItemsContainer">
              {getCart()?.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt="Product" />
                  <Link to={`/product/${item.id}`}>{item.name}</Link>{" "}
                  <span>
                    {item.quantity} X ৳{item.price} ={" "}
                    <b>৳{item.price * item.quantity}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/*2nd part*/}

        <div>
          <div className="orderSummary ">
            <Typography>Order Summary</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>৳ {subtotal}</span>
              </div>
              <div>
                <p>Delivery Charges:</p>
                <span>৳ {shippingCharges}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>৳{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
