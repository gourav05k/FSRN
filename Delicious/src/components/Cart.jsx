import { useSelector } from "react-redux";
import { addItem, removeItem, emptyItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { menuImageBaseUrl } from "../utils/baseData";
import emptyCart from "../img/empty-cart.jpg"

function Cart() {
  console.log("cart component");

  const cartItems = useSelector(store => store.cart.items);
  // this cartItems is an array of object containing items added to cart.

  const dispatch = useDispatch();

  // handle add button to add items to cart
  const handleAddItem = ((item) => {
    dispatch(addItem(item));
  })

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  const handleEmptyItem = (item) => {
    dispatch(emptyItem(item));
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };



  const shippingEstimate = 40.00;
  const taxEstimate = (calculateSubtotal() * 0.18).toFixed(2); // Assuming 8% tax
  const orderTotal = (calculateSubtotal() + shippingEstimate + parseFloat(taxEstimate)).toFixed(2);

  return (
    <>
      {
        // check if cart is empty, else show cart items
        !cartItems.length
          ?
          <section className="bg-white min-w-max">
            <img className="flex justify-center items-center py-4 mx-auto w-48 h-auto" src={emptyCart} alt="empty cart image" />
            <div className="bg-gray-100">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6 text-center">
                <h1 className="mb-4 text-xl tracking-tight font-extrabold sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl text-orange-500">Your cart is empty</h1>
                <Link to="/" className="inline-flex text-base font-normal rounded-lg text-center transition ease-linear hover:scale-90 hover:bg-green-800 px-5 py-2.5 my-4 bg-green-600 text-white">Continue Shopping</Link>
              </div>
            </div>
          </section>
          :
          <div className="container mx-auto mt-4">

            <div className="md:flex justify-center min-w-full md:min-w-fit mx-auto">

              <div className="w-full md:w-3/4 bg-white px-10 py-10 min-w-min md:ml-10 md:mr-0 md:min-w-min text-nowrap">
                <div className="flex justify-between border-b pb-8 mx-auto min-w-max md:min-w-fit gap-72 md:gap-60 text-nowrap">
                  <h1 className="font-semibold text-2xl min-w-max">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl min-w-max">{cartItems.length} Items</h2>
                </div>
                <div className="flex mt-10 mb-5 mx-0 min-w-max text-nowrap ">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6 ">Product Details</h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center ">Quantity</h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center ">Price</h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center ">Total</h3>
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center ">Remove item</h3>
                  {/* <p>Remove</p> */}
                </div>
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center hover:bg-gray-100 -mx-6 px-6 py-5">
                    <div className="flex w-2/6 justify-start items-center truncate md:min-w-min">
                      <img className="w-1/3 object-cover object-center rounded-xl" src={`${menuImageBaseUrl}${item.imageId}`} alt="Item image" />
                      <h3 className="w-2/3 md:text-wrap flex items-center text-start ml-2 font-bold text-xs min-w-min sm:min-w-min overflow-hidden sm:line-clamp-2 lg:line-clamp-3 ">{item.name}</h3>
                    </div>
                    <div className="flex justify-center w-1/6 min-w-max">
                      <button onClick={() => handleRemoveItem(item)}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M32 256C32 238.3 46.3 224 64 224H384C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288H64C46.3 288 32 273.7 32 256z" /></svg>
                      </button>
                      <span className="mx-2 border text-center w-8 min-w-max">{item.quantity}</span>
                      <button onClick={() => handleAddItem(item)}>
                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M432 256C432 273.7 417.7 288 400 288H288V400C288 417.7 273.7 432 256 432C238.3 432 224 417.7 224 400V288H112C94.3 288 80 273.7 80 256C80 238.3 94.3 224 112 224H224V112C224 94.3 238.3 80 256 80C273.7 80 288 94.3 288 112V224H400C417.7 224 432 238.3 432 256z" /></svg>
                      </button>
                    </div>
                    <span className="text-center w-1/6 font-semibold text-sm min-w-max">&#8377; {item.price}</span>
                    <span className="text-center w-1/6 font-semibold text-sm min-w-max">&#8377; {(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => handleEmptyItem(item)} className="flex w-1/6 justify-center font-semibold hover:text-red-600 text-gray-500 text-xs min-w-max">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
                <Link to="/" className="flex font-semibold text-orange-600 text-sm mt-10">
                  <svg className="fill-current mr-2 text-orange-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H448v40H0v-40h134.059z" /></svg>
                  Continue Shopping
                </Link>
              </div>

              <div id="summary" className="md:w-1/4 px-8 py-10 sm:mx-0 md:-ml-10 lg:mx-0 min-w-max md:min-w-fit lg:min-w-max max-w-max ">
                <h1 className="font-semibold text-2xl border-b pb-8 ">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase w-2/3">Subtotal</span>
                  <span className="flex justify-end font-semibold text-sm w-1/3">&#8377; {calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase w-2/3">Delivery Fee</span>
                  <span className="flex justify-end font-semibold text-sm w-1/3">&#8377; {shippingEstimate.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase text-wrap w-2/3">GST + Restaurant Charges</span>
                  <span className="flex justify-end font-semibold text-sm w-1/3">&#8377; {taxEstimate}</span>
                </div>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase w-2/3">Order Total</span>
                  <span className="flex justify-end font-semibold text-sm w-1/3">&#8377; {orderTotal}</span>
                </div>
                <button className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
              </div>

            </div>

          </div>
      }
    </>
  );
}

export default Cart;