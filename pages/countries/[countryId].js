import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export async function getStaticPaths() {

  const res = await client.getEntries({
    content_type: 'countries'
  })

  const paths = res.items.map(item => {
    return {
      params: {countryId: item.fields.countryId}
    }
  })

  return {
    paths,
    fallback:false
  }
}

export async function getStaticProps({ params }) {

  const res = await client.getEntries({
    content_type: 'countries',
    'fields.countryId': params.countryId
  })

  return {
    props:{
      data:res.items[0]
    }
  }
}

const CountryDetails = ({ data }) => {
  console.log(data)
  const { detail, capital, largeImage, population, officialLanguage } = data.fields
  
  return (    
    <div className="m-3 md:mx-10 lg:mx-32">
      <div>
        <div className="font-bold md:text-xl xl:text-3xl text-zinc-700 my-5">Country Details:</div>
      </div>
      <div>
        <div>
          <Image alt="largeImage" 
          src={`https:${largeImage.fields.file.url}`} 
          width={largeImage.fields.file.details.image.width} 
          height={largeImage.fields.file.details.image.height} className="w-full object-cover"/>
        </div>
        <div className="mt-5 mb-2">
          <div className="text-justify">
            <div> {documentToReactComponents(detail)} </div>
          </div>
          <div className="mt-3">
            <div><span className="font-bold">Capital: </span> {capital} </div>
            <div><span className="font-bold">Population: </span> {population} </div>
            <div><span className="font-bold">Official language: </span>{officialLanguage} </div>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default CountryDetails;