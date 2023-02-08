import { useRouteError } from "react-router-dom";

const error = () => {
    const err = useRouteError();
    return (<div>
        <h1>Ooops!!!</h1>
        <h2>Something went wrong!!</h2>
        <img src="https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?b=1&s=170667a&w=0&k=20&c=2LBPYkEmvRiBa0EAPX_ghqncT5Xcv7xvgrlCx4Wf9-M="></img>
        <h2>{err.status + ":" + err.statusText}</h2>
    </div>)
}

export default error;