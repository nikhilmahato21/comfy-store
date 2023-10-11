import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className=" grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 txt-lg leading-7">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className=" grid min-h-screen place-items-center px-8">
      <h1 className="text-center font-bold text-4xl">error occured</h1>
    </main>
  );
};

export default Error;
