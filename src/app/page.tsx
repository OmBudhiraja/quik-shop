import ProductCard from "~/components/ProductCard";
import { getProducts } from "~/server/api/products";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="m-auto grid max-w-screen-2xl grid-cols-1 justify-items-center gap-x-8 gap-y-12 overflow-hidden p-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
