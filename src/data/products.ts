import { Product } from '../types';

export const products: Product[] = [
  // Magnetic Locks
  {
    id: 'acumatic-600',
    name: 'Acumatic-600 Magnetic Lock',
    description: 'High-security electromagnetic lock with 600kg holding force',
    price: 450,
    category: 'Magnetic Locks',
    image_url: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      '600kg holding force',
      'Fail-safe operation',
      'LED status indicator',
      'Weatherproof design',
      'Easy installation'
    ],
    specifications: {
      'Holding Force': '600kg',
      'Operating Voltage': '12V DC',
      'Current Draw': '500mA',
      'Operating Temperature': '-20°C to +55°C',
      'Dimensions': '250 x 45 x 25mm'
    },
    stock_quantity: 25,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'acumatic-600l',
    name: 'Acumatic-600L Magnetic Lock',
    description: 'Long-body electromagnetic lock with 600kg holding force for wide doors',
    price: 520,
    category: 'Magnetic Locks',
    image_url: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      '600kg holding force',
      'Extended body design',
      'Fail-safe operation',
      'LED status indicator',
      'Suitable for wide doors'
    ],
    specifications: {
      'Holding Force': '600kg',
      'Operating Voltage': '12V DC',
      'Current Draw': '500mA',
      'Operating Temperature': '-20°C to +55°C',
      'Dimensions': '350 x 45 x 25mm'
    },
    stock_quantity: 18,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // Electric Bolt Locks
  {
    id: 'acumatic-b850u',
    name: 'Acumatic-B850U Electric Bolt Lock',
    description: 'Universal electric bolt lock with adjustable backset',
    price: 380,
    category: 'Electric Bolt Locks',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Universal design',
      'Adjustable backset',
      'Fail-secure operation',
      'Silent operation',
      'Easy retrofit installation'
    ],
    specifications: {
      'Operating Voltage': '12V DC',
      'Current Draw': '200mA',
      'Backset': 'Adjustable 60-70mm',
      'Operating Temperature': '-10°C to +55°C',
      'Material': 'Stainless Steel'
    },
    stock_quantity: 32,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // Access Control Keypads
  {
    id: 'am-st-200em',
    name: 'AM-ST-200EM Access Keypad',
    description: 'Standalone access control keypad with EM card reader',
    price: 280,
    category: 'Access Control Keypads',
    image_url: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'EM card reader',
      'PIN code access',
      'Weatherproof IP65',
      'Backlit keypad',
      '1000 user capacity'
    ],
    specifications: {
      'Card Type': 'EM 125KHz',
      'User Capacity': '1000 users',
      'Operating Voltage': '12V DC',
      'Operating Temperature': '-20°C to +60°C',
      'IP Rating': 'IP65'
    },
    stock_quantity: 45,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // Remote Controls & Receivers
  {
    id: 'am-b4',
    name: 'AM-B4 Remote Control',
    description: '4-button remote control for access systems',
    price: 85,
    category: 'Remote Controls & Receivers',
    image_url: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      '4 programmable buttons',
      'Long range transmission',
      'Low battery indicator',
      'Compact design',
      'Easy programming'
    ],
    specifications: {
      'Frequency': '433MHz',
      'Range': 'Up to 100m',
      'Battery': '12V A23',
      'Buttons': '4',
      'Dimensions': '65 x 35 x 12mm'
    },
    stock_quantity: 120,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-b2',
    name: 'AM-B2 Remote Control',
    description: '2-button remote control for basic access control',
    price: 65,
    category: 'Remote Controls & Receivers',
    image_url: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      '2 programmable buttons',
      'Long range transmission',
      'Low battery indicator',
      'Compact design',
      'Cost-effective solution'
    ],
    specifications: {
      'Frequency': '433MHz',
      'Range': 'Up to 100m',
      'Battery': '12V A23',
      'Buttons': '2',
      'Dimensions': '65 x 35 x 12mm'
    },
    stock_quantity: 95,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-rc-rt11',
    name: 'AM-RC-RT11 Receiver',
    description: 'Single channel wireless receiver for remote controls',
    price: 120,
    category: 'Remote Controls & Receivers',
    image_url: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Single channel output',
      'Learning function',
      'LED status indicator',
      'Relay output',
      'Wide voltage range'
    ],
    specifications: {
      'Frequency': '433MHz',
      'Operating Voltage': '12-24V DC/AC',
      'Output': 'Relay contact',
      'Learning Capacity': '100 remotes',
      'Dimensions': '85 x 55 x 20mm'
    },
    stock_quantity: 38,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-ur',
    name: 'AM-UR Universal Receiver',
    description: 'Multi-channel universal wireless receiver',
    price: 180,
    category: 'Remote Controls & Receivers',
    image_url: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      '4 channel output',
      'Universal compatibility',
      'Learning function',
      'Multiple output modes',
      'External antenna support'
    ],
    specifications: {
      'Frequency': '433MHz',
      'Operating Voltage': '12-24V DC',
      'Channels': '4',
      'Learning Capacity': '200 remotes',
      'Dimensions': '110 x 70 x 25mm'
    },
    stock_quantity: 22,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // Exit Buttons
  {
    id: 'am-901b',
    name: 'AM-901B Exit Button',
    description: 'Standard exit button for access control systems',
    price: 45,
    category: 'Exit Buttons',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Momentary contact',
      'Vandal resistant',
      'Easy installation',
      'Standard size',
      'Reliable operation'
    ],
    specifications: {
      'Contact Type': 'NO/NC',
      'Operating Voltage': '12V DC',
      'Material': 'Stainless Steel',
      'Mounting': 'Surface/Flush',
      'Dimensions': '86 x 86 x 20mm'
    },
    stock_quantity: 85,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-901b-r',
    name: 'AM-901B-R Exit Button (Red)',
    description: 'Red illuminated exit button for emergency exits',
    price: 55,
    category: 'Exit Buttons',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Red LED illumination',
      'Emergency exit design',
      'Vandal resistant',
      'High visibility',
      'Reliable operation'
    ],
    specifications: {
      'Contact Type': 'NO/NC',
      'Operating Voltage': '12V DC',
      'LED Color': 'Red',
      'Material': 'Stainless Steel',
      'Dimensions': '86 x 86 x 20mm'
    },
    stock_quantity: 42,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-s86b',
    name: 'AM-S86B Slim Exit Button',
    description: 'Slim profile exit button for modern installations',
    price: 65,
    category: 'Exit Buttons',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Slim profile design',
      'Modern appearance',
      'Touch sensitive',
      'LED indicator',
      'Easy installation'
    ],
    specifications: {
      'Contact Type': 'NO/NC',
      'Operating Voltage': '12V DC',
      'Profile': 'Slim 15mm',
      'Material': 'Brushed Aluminum',
      'Dimensions': '86 x 86 x 15mm'
    },
    stock_quantity: 28,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-pb924b',
    name: 'AM-PB924B Push Button',
    description: 'Heavy-duty push button for industrial applications',
    price: 75,
    category: 'Exit Buttons',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Heavy-duty construction',
      'Industrial grade',
      'Weather resistant',
      'Large button surface',
      'Long service life'
    ],
    specifications: {
      'Contact Type': 'NO/NC',
      'Operating Voltage': '12-24V DC',
      'Material': 'Stainless Steel',
      'IP Rating': 'IP67',
      'Dimensions': '92 x 92 x 25mm'
    },
    stock_quantity: 35,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-rcwbp',
    name: 'AM-RCWBP Wireless Exit Button',
    description: 'Wireless exit button with long-range transmission',
    price: 95,
    category: 'Exit Buttons',
    image_url: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Wireless operation',
      'Long-range transmission',
      'Battery powered',
      'Easy installation',
      'No wiring required'
    ],
    specifications: {
      'Frequency': '433MHz',
      'Range': 'Up to 150m',
      'Battery': '12V A23',
      'Operating Temperature': '-10°C to +50°C',
      'Dimensions': '86 x 86 x 20mm'
    },
    stock_quantity: 15,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // RFID Cards
  {
    id: 'am-mf-200',
    name: 'AM-MF-200 RFID Cards (Pack of 10)',
    description: 'Mifare 13.56MHz RFID cards for access control',
    price: 25,
    category: 'RFID Cards',
    image_url: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Mifare technology',
      'High security',
      'Durable PVC construction',
      'Printable surface',
      'Pack of 10 cards'
    ],
    specifications: {
      'Frequency': '13.56MHz',
      'Technology': 'Mifare Classic 1K',
      'Material': 'PVC',
      'Thickness': '0.8mm',
      'Dimensions': '85.5 x 54mm'
    },
    stock_quantity: 200,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-em-200',
    name: 'AM-EM-200 EM Cards (Pack of 10)',
    description: 'EM 125KHz proximity cards for access control',
    price: 20,
    category: 'RFID Cards',
    image_url: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'EM technology',
      'Long read range',
      'Durable construction',
      'Cost-effective',
      'Pack of 10 cards'
    ],
    specifications: {
      'Frequency': '125KHz',
      'Technology': 'EM4100',
      'Material': 'PVC',
      'Thickness': '0.8mm',
      'Dimensions': '85.5 x 54mm'
    },
    stock_quantity: 150,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  
  // Brackets & Accessories
  {
    id: 'am-bk-z600',
    name: 'AM-BK-Z600 Z-Bracket',
    description: 'Z-bracket for magnetic lock installation',
    price: 35,
    category: 'Brackets & Accessories',
    image_url: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'Z-shaped design',
      'Adjustable mounting',
      'Stainless steel construction',
      'Easy installation',
      'Universal compatibility'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Finish': 'Brushed',
      'Compatibility': 'Most magnetic locks',
      'Adjustment': '±5mm',
      'Dimensions': '250 x 50 x 30mm'
    },
    stock_quantity: 60,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  },
  {
    id: 'am-bk-u600',
    name: 'AM-BK-U600 U-Bracket',
    description: 'U-bracket for magnetic lock installation',
    price: 30,
    category: 'Brackets & Accessories',
    image_url: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: [
      'U-shaped design',
      'Standard mounting',
      'Stainless steel construction',
      'Cost-effective',
      'Universal compatibility'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Finish': 'Brushed',
      'Compatibility': 'Most magnetic locks',
      'Type': 'Standard U-bracket',
      'Dimensions': '250 x 45 x 25mm'
    },
    stock_quantity: 75,
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z'
  }
];

export const categories = [
  'Magnetic Locks',
  'Electric Bolt Locks',
  'Access Control Keypads',
  'Remote Controls & Receivers',
  'Exit Buttons',
  'RFID Cards',
  'Brackets & Accessories'
];