import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {
    // const searchKey = "KFC";
    const [restaurant, setRestaurant] = useState(restaurantList);
    const [searchtxt, setSearchText] = useState();

    return (
        <>
            <div className="searchContainer">
                <input type="text" className="input-search" placeholder="Search" value={searchtxt}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn"

                    onClick={() => {
                        {
                            const data = filterData(searchtxt, restaurant);
                            setRestaurant(data);
                        }
                    }}
                >Search</button>
            </div>
            <div className="card-list">
                {
                    restaurant.map((restaurant) => {
                        return < RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    );
}

export default Body;


