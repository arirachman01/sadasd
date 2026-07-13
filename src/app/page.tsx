export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div>
      <h1>Daftar Produk</h1>

      <div className="flex flex-wrap gap-4">
        {products.map(
          (product: {
            id: number;
            title: string;
            price: number;
            image: string;
            description: string;
          }) => (
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={product.image}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {product.title}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                  {product.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="bg-blue-300 text-amber-50 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
