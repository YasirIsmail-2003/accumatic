import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Eye, Users, Award, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8A1538] to-[#B91C47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Acumatic
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Leading the future of access control solutions in the UAE with 
              innovative technology and unwavering commitment to security.
            </p>
          </div>
        </div>
      </section>

      {/* Distributor / Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Distributor</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2">Acusense — Official distributor and partner for Acumatic products in the UAE.</p>
            <p className="text-gray-700">Website: <a href="https://www.acusense.ae" target="_blank" rel="noopener noreferrer" className="text-[#8A1538] hover:underline">www.acusense.ae</a></p>
            <p className="text-gray-600 mt-4">For distribution enquiries, technical support, and supply chain requests, please contact Acusense via their website.</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Acumatic stands at the forefront of access control innovation in the UAE, 
                  providing cutting-edge door locking and security solutions that protect 
                  what matters most to our clients.
                </p>
                <p>
                  Founded with a vision to revolutionize security technology, we have 
                  established ourselves as a trusted partner for businesses, institutions, 
                  and residential complexes across Dubai and the broader UAE region.
                </p>
                <p>
                  Our commitment to excellence drives us to continuously innovate and 
                  deliver products that exceed industry standards while maintaining 
                  the highest levels of customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Access control technology"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8A1538] to-transparent opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#8A1538] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide innovative, reliable, and secure access control solutions 
                that protect people, property, and assets while delivering exceptional 
                customer service and support throughout the UAE.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#8A1538] text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading provider of access control technology in the Middle East, 
                recognized for our innovation, quality, and commitment to creating safer 
                environments for communities and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Acumatic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                We prioritize security in every product we design and deliver, 
                ensuring maximum protection for our clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality in our products 
                and services, exceeding customer expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#8A1538] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We build 
                lasting relationships through exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Acumatic?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="h-12 w-12 text-[#8A1538] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-600">
                We leverage the latest advancements in access control technology 
                to provide state-of-the-art solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-[#8A1538] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Our experienced professionals provide comprehensive support 
                from consultation to installation and maintenance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-[#8A1538] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Years of successful installations and satisfied customers 
                across the UAE demonstrate our reliability and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8A1538] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact our experts today to discuss your access control needs and 
            discover the perfect security solution for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="bg-white text-[#8A1538] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8A1538] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;