import { useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { menuImageBaseUrl } from "../utils/mockData";

function Cart() {
    console.log("cart component");

    const cartItems = useSelector(store => store.cart.items);
    console.log("cartItems: ", cartItems);
    const dispatch = useDispatch();

    // handle add button to add items to cart
    const handleAddItem = ((item) => {
        dispatch(addItem(item));
    })

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <>
            {cartItems.map((item) =>
                <div key={item._id} className="flex my-10 mx-72 h-32 max-w-4xl justify-between  border border-gray-100 bg-white shadow-md">
                    <div className="flex-col mx-10 max-w-3xl">
                        <h3 className="text-l tracking-tight font-bold text-slate-900">{item.name}</h3>
                        <h5><span>&#8377;</span> {item.price}</h5>
                        <h6>{item.rating}</h6>
                        <span>{item.details}</span>
                    </div>
                    <a href="#" className="relative flex h-32 w-36 ">
                        <img className="absolute top-0 right-0 h-full w-full object-cover" src={`${menuImageBaseUrl}${item.imageId}`} alt="Item image" />
                        <button onClick={() => handleRemoveItem(item)} className="absolute top-24 left-4 w-8 items-center justify-center text-white bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto">-</button>
                        <span className="absolute top-24 left-16 w-8 items-center justify-center">{item.quantity}</span>
                        <button onClick={() => handleAddItem(item)} className="absolute top-24 left-20 w-8 items-center justify-center text-white bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto">+</button>
                    </a>
                </div>
            )}
        </>
    )
}

export default Cart;