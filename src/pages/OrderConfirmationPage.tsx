import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, ArrowRight } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
  const orderNumber = `ACC-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your purchase from Accumatic
          </p>
          <p className="text-lg text-gray-500">
            Order Number: <span className="font-semibold text-[#8A1538]">{orderNumber}</span>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Confirmation</h3>
              <p className="text-gray-600 text-sm">
                You'll receive an email confirmation with your order details shortly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-gray-600 text-sm">
                We'll prepare your order and notify you when it's ready for shipping.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Your order will be delivered within 2-3 business days across UAE.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Need Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Contact Support</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: <a href="mailto:support@acumatic.me" className="text-[#8A1538] hover:underline">support@acumatic.me</a></p>
                <p>Phone: <a href="tel:+971526311773" className="text-[#8A1538] hover:underline">+971 52 631 1773</a></p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Quick Support</h3>
              <a
                href="https://wa.me/971526311773?text=Hello! I need help with my order."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            to="/products"
            className="bg-[#8A1538] hover:bg-[#7A1230] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          
          <div>
            <Link
              to="/"
              className="text-gray-600 hover:text-[#8A1538] transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;