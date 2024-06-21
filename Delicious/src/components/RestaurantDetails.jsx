import { useParams } from "react-router-dom"; //hook for fetching dynamic routing params (resId in this case)
import { restaurantMenuItems, menuImageBaseUrl } from "../utils/mockData";

function RestaurantDetails() {
    const params = useParams();
    console.log(params);
    return (
        <>  <h1>Hello</h1>
            <h1>Restaurant Details</h1>
            <h1>Restaurant Id: {params.resId}</h1>
            <span>
                {restaurantMenuItems.map((item) => 
                <div>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.rating}</span>
                    <span>{item.details}</span>
                </div>
            )}
            </span>
        </>
    )
}

export default RestaurantDetails;