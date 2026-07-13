interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const dynamic = "force-dynamic";

export default async function Page() {
  let products: Product[] = [];

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    products = await response.json();
  } catch (error) {
    console.error("Gagal mengambil data:", error);

    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>
        <p className="text-red-500">Gagal mengambil data dari API.</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>

      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-80 rounded-xl shadow-md border bg-white overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain p-4"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{product.title}</h2>

              <p className="text-green-600 font-semibold mb-2">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-sm text-gray-600 line-clamp-3">
                {product.description}
              </p>

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
