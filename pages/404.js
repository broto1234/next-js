const ErrorPage = () => {
  return (
    <div className="px-10 py-36 md:p-60 bg-amber-100">
      <div className="bg-blue-100 p-7 rounded-md">
      <span className="font-bold text-red-700 text-xl">Oops...</span>
      <p>The page is not found!</p>
      </div>
    </div>
  );
}

export default ErrorPage;