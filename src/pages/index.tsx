import Head from "next/head";
import Link from "next/link";
import { useUser} from "@clerk/nextjs"
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { type Listing } from "@prisma/client";
import Image from "next/image";



function Card({ listing }: { listing: Listing }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-700">
      {/* <div className="relative h-32 w-full">
        <Image className="object-cover" src="/shoe.png" alt="" fill />
      </div> */}
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {listing.name} - ${listing.price}
          </h5>
        </a>
        <p className="mb-3 h-20 font-normal text-gray-700 dark:text-gray-400">
          {listing.description}
        </p>
        <Link
          href={`/listings/${listing.id}`}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}


export default function Home() {
  const listings = api.listings.list.useQuery()

  const user = useUser();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className="flex min-h-screen flex-col pl-4 gap-12 bg-gray-800">
        <h1 className="mt-12 pl-4 text-4xl">Items for Sale</h1>
        <div className="container grid grid-cols-3 items-center justify-center gap-4">
          {listings?.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </>
  );
}
