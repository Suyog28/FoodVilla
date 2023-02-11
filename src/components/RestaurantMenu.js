import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { id } = useParams();//Smart/Cool developer use this method

    // const { id } = param; distrucring 

    console.log(id);

    return (<div>
        <h1>restaurant:{id}</h1>
    </div>)

}

export default RestaurantMenu;