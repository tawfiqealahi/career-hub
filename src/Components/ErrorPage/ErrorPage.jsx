import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center my-60 " id="error-page">
      <h1 className="text-bold">Oops!</h1>
      
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' > <button className="bg-red-700 border-t-orange-900 m-2 p-2 "  >Go back to home</button> </Link>
    </div>
  );
}
