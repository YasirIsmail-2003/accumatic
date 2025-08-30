import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            // fallback to a generic placeholder if the product image is missing
            target.src = '/placeholder.png';
          }}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Eye className="h-5 w-5" />
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-[#8A1538] text-white p-2 rounded-full hover:bg-[#7A1230] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
        {product.stock_quantity < 10 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
            Low Stock
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#8A1538]">
            AED {product.price.toLocaleString()}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#8A1538] text-white px-4 py-2 rounded-lg hover:bg-[#7A1230] transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;