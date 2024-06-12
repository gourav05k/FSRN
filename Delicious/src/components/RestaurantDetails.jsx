import { useParams } from "react-router-dom"; //hook for fetching dynamic routing params (resId in this case)

function RestaurantDetails() {
    const params = useParams();
    console.log(params);
    return (
        <>
        <h1>Restaurant Details</h1>
        <h1>Restaurant Id: {params.resId}</h1>
        </>
    )
}

export default RestaurantDetails;