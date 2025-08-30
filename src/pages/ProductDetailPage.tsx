import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Check, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === id);

  const [instructionImages, setInstructionImages] = useState<string[]>([]);

  useEffect(() => {
    if (!product) return;

    const toTitleCaseId = (rawId: string) => {
      return rawId
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-');
    };

    const baseCandidates = [
      product.id,
      product.id.toUpperCase(),
      toTitleCaseId(product.id),
      // product name first token (e.g. "Acumatic-600 Magnetic Lock" -> "Acumatic-600")
      (product.name.split(' ')[0] || product.id),
    ];

    const suffixes = [
      ' instruct .png',
      ' instruct.png',
      ' instruct 1.png',
      ' instruct 1 .png',
      ' instruct 1  (1).png',
      ' instruct 1  (2).png',
      ' instruct 2.png',
      ' instruct 2 .png',
      ' instruct 3.png',
      ' instruct 4.png',
      '  instruct 3.png',
      '  instruct 4.png'
    ];

    const candidates: string[] = [];
    baseCandidates.forEach((base) => {
      suffixes.forEach((suf) => candidates.push(`/${base}${suf}`));
    });

    // attempt to preload each candidate and keep only the ones that load
    const checkImage = (src: string) =>
      new Promise<string | null>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(null);
        img.src = src;
      });

    (async () => {
      const results = await Promise.all(candidates.map((c) => checkImage(c)));
      const found = results.filter((r): r is string => Boolean(r));
      // merge with any explicit instruction_images defined in the product data
      const explicit = Array.isArray(product.instruction_images) ? product.instruction_images : [];
      const merged = [...explicit, ...found];
      // remove duplicates and set state
      setInstructionImages(Array.from(new Set(merged)));
    })();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[#8A1538] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const images = [product.image_url, product.image_url, product.image_url]; // Placeholder for multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-[#8A1538]">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#8A1538]">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#8A1538]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#8A1538]' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-[#8A1538] transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl font-bold text-[#8A1538]">
                  AED {product.price.toLocaleString()}
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-green-600 font-medium">
                {product.stock_quantity > 0 ? `In Stock (${product.stock_quantity} available)` : 'Out of Stock'}
              </span>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#8A1538] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={product.stock_quantity === 0}
                className="w-full bg-[#8A1538] hover:bg-[#7A1230] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart - AED {(product.price * quantity).toLocaleString()}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instruction / Installation Images (auto-detected) */}
        {instructionImages.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation / Instruction Images</h2>
            <div className="space-y-4">
              {instructionImages.map((src) => (
                <div key={src} className="bg-gray-50 p-4 rounded">
                  <img src={src} alt="Instruction" className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;