import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";

interface ProductPages {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" ][0]{
      _id,
  title,
  productImage,

  price,
  description
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPages) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-[700px] mx-auto  p-10">
      <div className="grid grid-cols-1 md:grid-cols-2  bg-blue-300 gap-10 w-[800px] ">
        <div className="h-[100px]">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url() || "/fallback-image.jpg"}
              alt="image"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-[15px] font-sans">{product.description}</p>
        </div>
      </div>
    </div>
  );
}