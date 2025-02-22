import { PRODUCTS_INFO } from "~/constants";
import ProductsCard from "~/components/ProductsCard";

const Products = ({ products }) => {
  const { title, main } = PRODUCTS_INFO;
  return (
    <div className="py-16 bg-gray-100">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md">
          {title}
        </h1>
        <span className="w-16 md:w-24 h-[4px] bg-blue-500 rounded"></span>
        <p className="w-[85%] md:max-w-[700px] lg:max-w-[900px] text-gray-700 text-lg leading-relaxed">
          {main}
        </p>
      </div>
      <div
        className="
          max-w-screen-xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-12 justify-items-center
        "
      >
        {products?.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
