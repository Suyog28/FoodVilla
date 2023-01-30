import { IMG_CDN_URL } from "../config";


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId, area }) => {
    // console.log(props.restaurant);
    return (
        <div className="card">
            <div className="card-items">
                <img src={IMG_CDN_URL + cloudinaryImageId} />
                <h2>{name}</h2>
                <br />
                <h3>{cuisines.join(", ")}</h3>
                <br />
                <h4>{avgRating} Stars</h4>
                <h5>{area}</h5>
            </div>

        </div>
    );
}

export default RestaurantCard;