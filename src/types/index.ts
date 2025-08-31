export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  features: string[];
  specifications: Record<string, string>;
  installation_instructions?: string; // HTML or plain text
  instruction_images?: string[]; // additional image urls specific to install instructions
  stock_quantity: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: ShippingAddress;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface ShippingAddress {
  full_name: string;
  email: string;
  phone: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  emirate: string;
  postal_code: string;
  country: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  created_at: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}