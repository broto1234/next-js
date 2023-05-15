import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div className="px-10 py-36 md:p-60 bg-amber-100">
      <div className="bg-blue-100 p-7 rounded-md">
      <span className="font-bold text-red-700 text-xl">Oops...</span>
      <p>The page is not found!</p>
      </div>
      <p>Go to the <Link href='/'><span className="text-red-600 font-semibold">Homepage</span></Link></p>
    </div>
  );
}

export default ErrorPage;