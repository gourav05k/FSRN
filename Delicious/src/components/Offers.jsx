import offers from "../img/offers-background.jpeg";

function Offers() {
    return (
        <div className="relative flex justify-center items-center mx-auto w-full h-auto ">
            <img className="w-full" src={offers} alt="Special offer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30"></div>
            <div className="absolute inset-0 min-w-max flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Special Coupon for your First Order: FIRST
                </h2>
                <div className="bg-red-600 px-4 py-2 rounded-lg mb-4">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold">Flat 50% OFF</span>
                </div>
                <a href="/"
                    className="inline-flex text-lg md:text-xl lg:text-2xl font-bold rounded-lg text-center px-5 py-3 bg-green-600 transition ease-linear hover:scale-90  hover:bg-green-800 text-white">Order Now</a>
                <p className="mt-2 text-sm md:text-base lg:text-lg">
                    *Maximum Discount upto ₹150 on Online Payment Only
                </p>
            </div>
        </div>
    );
}

export default Offers;