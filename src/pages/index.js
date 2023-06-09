import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

export default function Home({product}) {
  return (
    <div className="bg-gray-100 h-full">
      <Head>
        <title>Amazon</title>
      </Head>
      {/* Header component */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        
        {/* Banner */}
        <Banner />
        {/* product feed */}
        <ProductFeed product={product} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const product = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json());
return {
  props:{product,},
};
}
