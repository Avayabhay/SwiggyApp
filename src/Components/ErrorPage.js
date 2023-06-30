import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  //console.log(err);
  return (
    <>
      <h1> Oops!!!</h1>
      <p>
        {err.status}: {err.data}
      </p>
    </>
  );
};

export default ErrorPage;
