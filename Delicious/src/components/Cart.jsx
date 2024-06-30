import { useSelector } from "react-redux";
import { addItem, removeItem, emptyItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { menuImageBaseUrl } from "../utils/mockData";

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
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5 mr-0">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6 ">Product Details</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">Quantity</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">Price</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">Total</h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">Remove item</h3>
              {/* <p>Remove</p> */}
            </div>
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center hover:bg-gray-100 -mx-6 px-6 py-5">
                <div className="flex w-2/6">
                  <div className="w-20">
                    <img className="h-full" src={`${menuImageBaseUrl}${item.imageId}`} alt="Item image" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    {/* <br /> */}
                    {/* <span className="text-red-500 text-xs">{item.details}</span> */}
                  </div>
                </div>
                <div className="flex justify-center w-1/6">
                  <button onClick={() => handleRemoveItem(item)}>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M32 256C32 238.3 46.3 224 64 224H384C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288H64C46.3 288 32 273.7 32 256z" /></svg>
                  </button>
                  <span className="mx-2 border text-center w-8">{item.quantity}</span>
                  <button onClick={() => handleAddItem(item)}>
                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M432 256C432 273.7 417.7 288 400 288H288V400C288 417.7 273.7 432 256 432C238.3 432 224 417.7 224 400V288H112C94.3 288 80 273.7 80 256C80 238.3 94.3 224 112 224H224V112C224 94.3 238.3 80 256 80C273.7 80 288 94.3 288 112V224H400C417.7 224 432 238.3 432 256z" /></svg>
                  </button>
                </div>
                <span className="text-center w-1/6 font-semibold text-sm">&#8377; {item.price}</span>
                <span className="text-center w-1/6 font-semibold text-sm">&#8377; {(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => handleEmptyItem(item)} className="flex w-1/6 justify-center font-semibold hover:text-red-600 text-gray-500 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            <a href="/" className="flex font-semibold text-orange-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-orange-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H448v40H0v-40h134.059z" /></svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Subtotal</span>
              <span className="font-semibold text-sm">&#8377; {calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Delivery Fee</span>
              <span className="font-semibold text-sm">&#8377; {shippingEstimate.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">GST + Restaurant Charges</span>
              <span className="font-semibold text-sm">&#8377; {taxEstimate}</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Order Total</span>
              <span className="font-semibold text-sm">&#8377; {orderTotal}</span>
            </div>
            <button className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;



// import { useSelector } from "react-redux";
// import { addItem, removeItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
// import { menuImageBaseUrl } from "../utils/mockData";

// function Cart() {
//     console.log("cart component");

//     const cartItems = useSelector(store => store.cart.items);
//     console.log("cartItems: ", cartItems);
//     const dispatch = useDispatch();

//     // handle add button to add items to cart
//     const handleAddItem = ((item) => {
//         dispatch(addItem(item));
//     })

//     const handleRemoveItem = (item) => {
//         dispatch(removeItem(item));
//     }

//     return (
//         <>
//             {cartItems.map((item) =>
//                 <div key={item._id} className="flex my-10 mx-72 h-32 max-w-4xl justify-between  border border-gray-100 bg-white shadow-md">
//                     <div className="flex-col mx-10 max-w-3xl">
//                         <h3 className="text-l tracking-tight font-bold text-slate-900">{item.name}</h3>
//                         <h5><span>&#8377;</span> {item.price}</h5>
//                         <h6>{item.rating}</h6>
//                         <span>{item.details}</span>
//                     </div>
//                     <a href="#" className="relative flex h-32 w-36 ">
//                         <img className="absolute top-0 right-0 h-full w-full object-cover" src={`${menuImageBaseUrl}${item.imageId}`} alt="Item image" />
//                         <button onClick={() => handleRemoveItem(item)} className="absolute top-24 left-4 w-8 items-center justify-center text-white bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto">-</button>
//                         <span className="absolute top-24 left-16 w-8 items-center justify-center">{item.quantity}</span>
//                         <button onClick={() => handleAddItem(item)} className="absolute top-24 left-20 w-8 items-center justify-center text-white bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto">+</button>
//                     </a>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Cart;

