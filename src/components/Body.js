import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
}

// console.log("render()")
const Body = () => {
    // const searchKey = "KFC";
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchtxt, setSearchText] = useState();
    // console.log(restaurant);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6389315&lng=77.08668109999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optional chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null;
    //Conditional rendering
    return allRestaurants?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="searchContainer">
                <input type="text" className="input-search" placeholder="Search" value={searchtxt}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn"

                    onClick={() => {
                        {
                            const data = filterData(searchtxt, allRestaurants);
                            setFilteredRestaurants(data);
                        }
                    }}
                >Search</button>
            </div>
            <div className="card-list">
                {
                    filteredRestaurants?.length === 0 ? (
                        <h1>No Restaurant Found..! Type Something Else..</h1>
                    ) : (
                        filteredRestaurants.map((restaurant) => {
                            return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                                < RestaurantCard {...restaurant.data} />
                            </Link>

                        })
                    )}
            </div>
        </>
    );
}

export default Body;


