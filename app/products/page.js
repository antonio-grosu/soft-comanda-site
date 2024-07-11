import Presentation from "../components/products_page/presentation_section";
import Products from "../components/products_page/products_section";
const ProductsPage = () => {
  return (
    <main className="py-24 md:py-0 bg-white px-8 md:px-32 2xl:px-64">
      <Presentation />
      <Products />
    </main>
  );
};

export default ProductsPage;
