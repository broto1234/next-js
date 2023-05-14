import Image from "next/image";
import Link from "next/link";

function CountryCard({ country }) {

  const { title, countryId, shortImage, rating } = country.fields
  return (
    <div className="shadow-md hover:shadow-xl">
      <div>
        <Image alt="smallImage" 
        src={`https:${shortImage.fields.file.url}`} 
        width={shortImage.fields.file.details.image.width} 
        height={shortImage.fields.file.details.image.height} className="w-full object-cover"/>
      </div>
      <div className="bg-white">
        <div className="flex justify-between font-bold px-5 py-1">
          <h4> No. {rating} </h4>
          <h1 className="text-indigo-800 text-lg"> {title} </h1>
        </div>
        <div className="flex justify-center">
          <Link href={`/countries/${countryId}`} className="linkStyle">Read More</Link>
        </div>
      </div>
    </div>      
  );
}

export default CountryCard;