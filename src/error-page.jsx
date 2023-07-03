import { useRouteError } from "react-router-dom";
//This is an error page component
export default function ErrorPage(){
    //useRouteError provides the error that was thrown when the page the user is trying to navigate to
    //doesn't exist
    const error = useRouteError();
    console.log(error);

    return(
        <div id="error-page">
            <h1>Aww!</h1>
            <p>Sorry,an expected has occurred.</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
}