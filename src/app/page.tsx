interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-96"
          >
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl h-96">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{product.title}</p>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
