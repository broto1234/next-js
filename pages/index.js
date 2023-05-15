import Head from "next/head";
import { createClient } from "contentful";
import CountryCard from "@/components/CountryCard";

export async function getStaticProps(){
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: 'countries'
  })

  return {
    props:{
      countriesData: res.items
    }
  }
}

export default function Home({ countriesData }) {
  return (
    <div className="md:grid  md:grid-cols-6">
      <div className="md:col-start-2 md:col-span-4">
        <Head>
          <title>Next.js App</title>
        </Head>
        <main className="p-2 md:mx-7 md:mt-4">
          <h1 className="mainHeader">The Five Happiest Countries are:</h1>
          <div className="grid md:grid-cols-2 gap-6 p-3 md:p-8 md:mt-3 bg-blue-100">
            {countriesData.map(country => (
              <CountryCard key={country.sys.id} country={ country} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
