import { Product } from '../types';

export const products: Product[] = [
  // Remotes
  {
    id: 'am-b4',
    name: 'AM-B4 UNIVERSAL WIRELESS REMOTE (4 Button)',
    description: 'Universal 4-button wireless remote control - 433MHz. Copy coding, suitable for access control and gates.',
    // price removed
    category: 'Remote Controls',
    image_url: '/AM-B4.png',
    features: [
      'Working frequency 433MHz',
      'Transmitting distance 10-30 meters',
      'Copy coding',
      'Compact ABS housing'
    ],
    specifications: {
      'Model': 'AM-B4',
      'Dimension': '68 × 37 mm',
      'Input voltage': '5-12 VDC',
      'Output contact': 'NO/NC/COM',
      'Frequency': '433MHz',
      'Remote distance': '30m',
      'Material': 'ABS',
      'Working temperature': '-20 °C to 55 °C',
      'Working humidity': '0 to 95% RH',
      'Weight': '0.15kg'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-b2',
    name: 'AM-B2 UNIVERSAL WIRELESS REMOTE (2 Button)',
    description: 'Universal 2-button wireless remote control - 433MHz. Copy coding, compact and reliable.',
    // price removed
    category: 'Remote Controls',
    image_url: '/AM-B2.png',
    features: [
      'Working frequency 433MHz',
      'Transmitting distance 30-50 meters',
      'Study code 1527',
      'Compact ABS housing'
    ],
    specifications: {
      'Model': 'AM-B2',
      'Dimension': '60 × 30 × 11 mm',
      'Input voltage': '5-12 VDC',
      'Output contact': 'NO/NC/COM',
      'Frequency': '433MHz',
      'Study code': '1527',
      'Remote distance': '30m',
      'Material': 'ABS',
      'Working temperature': '-20 °C to 55 °C',
      'Working humidity': '0 to 95% RH',
      'Weight': '0.15kg'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Exit Buttons / Sensors
  {
    id: 'am-901b-r',
    name: 'AM-901B-R Infrared Sensor Exit Button (With Remote)',
    description: 'Infrared no-touch sensor exit button with wireless remote. Dual activation: IR induction and remote control.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-901B-R.png',
    features: [
      'Infrared sensor activation (no touch)',
      'Remote control operation (20m)',
      'LED indication',
      'Stainless steel front panel'
    ],
    specifications: {
      'Model': 'AM-901B-R',
      'Dimension': '86 × 86 mm',
      'Remote size': '32 × 57 mm',
      'Input voltage': '12/24 VDC',
      'Output contact': 'NO/NC/COM',
      'Remote distance': '20m',
      'Infrared induction distance': '10-25 cm',
      'Material': 'Stainless steel + ABS',
      'Time delay': '5-30s',
      'User capacity': '30'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-901b',
    name: 'AM-901B Infrared Sensor Exit Button (No Touch)',
    description: 'Stainless steel contactless IR exit button with LED indicator for quick, hygienic exit operation.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-901B.png',
    features: [
      'Contactless IR sensor',
      'LED indicator',
      'High sensitivity',
      'Stainless steel panel'
    ],
    specifications: {
      'Model': 'AM-901B',
      'Dimension': '86 × 86 mm',
      'Input voltage': '12/24 VDC',
      'Output contact': 'NO/NC/COM',
      'Sensing distance': '3-5 cm',
      'Material': 'Stainless steel + ABS'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Electromagnetic Locks
  {
    id: 'acumatic-600',
    name: 'Acumatic-600 Magnetic Lock',
    description: 'Electromagnetic maglock for wooden, glass or metal doors. 280 kg (600 Lbs) holding force.',
    // price removed
    category: 'Magnetic Locks',
    image_url: '/Acumatic-600.png',
    features: [
      '280 kg (600 Lbs) holding force',
      'Fail-safe (power to lock)',
      'Hard anodized aluminium housing',
      'Low power consumption'
    ],
    specifications: {
      'Model': 'Acumatic-600',
      'Lock body dimension': '250 × 48 × 26 mm',
      'Armature plate dimension': '180 × 38 × 11 mm',
      'Maximum thrust': '280 kg',
      'Input voltage': '12 VDC',
      'Working current': '450 mA'
    },
    // stock info removed
    installation_instructions: `Installation Inside Frame
1. Check off the contents and ensure you have the tools required.
2. Use the drill template to install the mounting bracket Item 1A inside the door frame.
3. Drill frame for cable entry and run cable for maglock.
4. Fit the maglock to the bracket using 2 Security Screws Item 1C.
5. Close the door and use the armature to mark the door for drilling.
6. Fit the Armature (thread lock on 8) to the door.
7. Make sure the Armature and mag lock are aligned.
8. Use spacer washers to get the Armature plate and Mag Lock to just touch.
9. Set the jumper to correct voltage, connect wiring and test.
www.acusense.ae
Adjust the gap between lock and armature plate by adding/removing spacer washers Items 13 & 14

Installation Above Door
1. Check off the contents and ensure you have the tools required.
2. Use the drill template to install the L bracket Item 19 above the door.
3. Check the door still closes.
4. Remove Qty 2 screws and replace with counter sink screws.
5. Fit the maglock to the L bracket using 2 Security Screws Item 1C.
6. Assemble (thread lock on 20,21,) both Z plates and the Armature plate as shown.
7. Close the door and use the Z plate to mark the door for drilling.
8. Fit the Armature assembly to the door.
9. Check that the Armature plate and mag lock are aligned.
10. Use rubber spacer washers (or use alternate Z bracket fixing positions) to ensure that the Armature plate and Mag Lock just touch.
11. Set the jumper to correct voltage, connect wiring and test. Replace cover plate.
Adjust the gap between lock and armature plate by adding/removing spacer washers Items 13 & 14`,
    instruction_images: [
      '/Acumatic-600 instruct 1.png',
      '/Acumatic-600 instruct 2.png'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'acumatic-600l',
    name: 'Acumatic-600L Magnetic Lock (Long Body)',
    description: 'Long-body magnetic lock with 280 kg holding force, suitable for wider doors.',
    // price removed
    category: 'Magnetic Locks',
    image_url: '/Acumatic-600L.png',
    features: [
      '280 kg (600 Lbs) holding force',
      'Long body design',
      'Durable finish',
      'Easy installation with bracket options'
    ],
    specifications: {
      'Model': 'Acumatic-600L',
      'Lock body dimension': '250 × 48 × 26 mm',
      'Armature plate dimension': '180 × 38 × 11 mm',
      'Maximum thrust': '280 kg',
      'Input voltage': '12 VDC',
      'Working current': '450 mA'
    },
    // stock info removed
    installation_instructions: `Installation Inside Frame
1. Check off the contents and ensure you have the tools required.
2. Use the drill template to install the mounting bracket Item 1A inside the door frame.
3. Drill frame for cable entry and run cable for maglock.
4. Fit the maglock to the bracket using 2 Security Screws Item 1C.
5. Close the door and use the armature to mark the door for drilling.
6. Fit the Armature (thread lock on 8) to the door.
7. Make sure the Armature and mag lock are aligned.
8. Use spacer washers to get the Armature plate and Mag Lock to just touch.
9. Set the jumper to correct voltage, connect wiring and test.
www.acusense.ae
Adjust the gap between lock and armature plate by adding/removing spacer washers Items 13 & 14

Installation Above Door
1. Check off the contents and ensure you have the tools required.
2. Use the drill template to install the L bracket Item 19 above the door.
3. Check the door still closes.
4. Remove Qty 2 screws and replace with counter sink screws.
5. Fit the maglock to the L bracket using 2 Security Screws Item 1C.
6. Assemble (thread lock on 20,21,) both Z plates and the Armature plate as shown.
7. Close the door and use the Z plate to mark the door for drilling.
8. Fit the Armature assembly to the door.
9. Check that the Armature plate and mag lock are aligned.
10. Use rubber spacer washers (or use alternate Z bracket fixing positions) to ensure that the Armature plate and Mag Lock just touch.
11. Set the jumper to correct voltage, connect wiring and test. Replace cover plate.
Adjust the gap between lock and armature plate by adding/removing spacer washers Items 13 & 14`,
    instruction_images: [
      '/Acumatic-600L instruct1.png',
      '/Acumatic-600L instruct2.png'
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Bolt Lock
  {
    id: 'acumatic-b850u',
    name: 'Acumatic-B850U Electric Bolt Lock',
    description: 'Electric bolt lock for frameless glass doors with high quality steel bolt and fail-safe operation.',
    // price removed
    category: 'Electric Bolt Locks',
    image_url: '/Acumatic-B850U.png',
    features: [
      'Instantaneous power to lock',
      'High quality steel bolt',
      'Low temperature design',
      'LED lock status indicator'
    ],
    specifications: {
      'Model': 'Acumatic-B850U',
      'Lock size': '147 × 44 × 39 mm',
      'Maximum thrust': '1000 kg',
      'Input voltage': '12 VDC',
      'Working current': '200 mA',
      'Wires': '5 (NO/NC/COM/12V/GND)'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Receivers
  {
    id: 'am-ur',
    name: 'AM-UR Universal Receiver (2 Relay)',
    description: 'Universal 433MHz receiver with wide input voltage and 2 relay outputs, suitable for remote learning.',
    // price removed
    category: 'Receivers',
    image_url: '/AM-UR.png',
    features: [
      'Power supply 9-36 VDC',
      'Built-in antenna',
      'Reception range up to 50m',
      'Learning function'
    ],
    specifications: {
      'Model': 'AM-UR',
      'Dimension': '88 × 55 × 28 mm',
      'Input voltage': '9-36 VDC',
      'Output contact': 'NO/NC/COM',
      'Frequency': '433MHz'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },

  // Access Keypad
  {
    id: 'am-st-200em',
    name: 'AM-ST-200EM Weatherproof Keypad Reader',
    description: 'Standalone weatherproof EM keypad reader supporting cards and PINs, suitable for outdoor installations.',
    // price removed
    category: 'Access Control',
    image_url: '/AM-ST-200EM.png',
    features: [
      'Zinc alloy anti-vandal case',
      'Supports 2000 users',
      'Backlit keys',
      'Card / PIN / Card+PIN'
    ],
    specifications: {
      'Model': 'AM-ST-200EM',
      'Dimension': '120 × 58 × 22 mm',
      'IP rate': 'IP68',
      'Input voltage': '12/24 VDC',
      'Card reading frequency': 'EM 125KHz',
      'User capacity': '2000'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  // Additional Exit Buttons / Remotes / Accessories
  {
    id: 'am-s86b',
    name: 'AM-S86B STAINLESS STEEL EXIT BUTTON',
    description: 'Stainless steel surface mounted exit button suitable for gates, doors and exits.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-S86B.png',
    features: [
      'Stainless steel panel',
      'Surface mounted',
      'Vandal resistant',
      'Suitable for narrow doorframes'
    ],
    specifications: {
      'Model': 'AM-S86B',
      'Dimension': '86 × 86 mm',
      'Input voltage': '12 VDC',
      'Output contact': 'NO/COM',
      'Material': 'Stainless steel',
      'Working temperature': '20 °C to 55 °C'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-rcwbp',
    name: 'AM-RCWBP WIRELESS PUSH TO EXIT BUTTON',
    description: 'Wireless plastic exit button for simple push-to-exit operations; battery powered and surface mounted.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-RCWBP.png',
    features: [
      'Wireless operation',
      'Wide button for simple operation',
      'Surface mounted',
      '433MHz frequency'
    ],
    specifications: {
      'Model': 'AM-RCWBP',
      'Dimension': '86 × 86 mm',
      'Input voltage': '5-12 VDC',
      'Output contact': 'NO/NC/COM',
      'Remote distance': '20m',
      'Material': 'ABS'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-rc-rt11',
    name: 'AM-RC-RT11 WIRELESS REMOTE CONTROL',
    description: 'Compact wireless remote control for access systems with convenient wiring and programming.',
    // price removed
    category: 'Remote Controls',
    image_url: '/AM-RC-RT11.png',
    features: [
      '433MHz frequency',
      'Compact design',
      'Easy wiring'
    ],
    specifications: {
      'Model': 'AM-RC-RT11',
      'Remote size': '60 × 30 mm',
      'Input voltage': '5-12 VDC',
      'Output contact': 'NO/NC/COM',
      'Frequency': '433MHz',
      'Study code': '1527'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-pb924b',
    name: 'AM-PB924B PLASTIC EXIT BUTTON',
    description: 'Weather resistant plastic exit button with wide surface for easy operation.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-PB924B.png',
    features: [
      'Wide push surface',
      'Surface mounted',
      'Cost-effective'
    ],
    specifications: {
      'Model': 'AM-PB924B',
      'Dimension': '86 × 86 mm',
      'Input voltage': '12 VDC',
      'Output contact': 'NO/COM',
      'Material': 'ABS'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-mf-200',
    name: 'AM-MF-200 MIFARE THIN CARD (Pack of 10)',
    description: 'MIFARE 13.56MHz printable PVC cards for access control and time attendance systems.',
    // price removed
    category: 'RFID Cards',
    image_url: '/AM-MF-200.png',
    features: [
      '13.56MHz MIFARE',
      'Printable PVC',
      'Pack of 10'
    ],
    specifications: {
      'Model': 'AM-MF-200',
      'Dimension': '86 × 54 × 0.8 mm',
      'Frequency': '13.56MHz',
      'Material': 'PVC'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-em-200',
    name: 'AM-EM-200 EM PROXIMITY CARDS (Pack of 10)',
    description: 'EM 125KHz proximity cards with unique serial numbers for access control systems.',
    // price removed
    category: 'RFID Cards',
    image_url: '/AM-EM-200.png',
    features: [
      '125KHz EM technology',
      'Printable PVC',
      'Pack of 10'
    ],
    specifications: {
      'Model': 'AM-EM-200',
      'Dimension': '86 × 54 × 0.8 mm',
      'Frequency': '125KHz',
      'Memory size': '64 bits'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-eb4g',
    name: 'AM-EB4G EMERGENCY BREAK GLASS - GREEN',
    description: 'Emergency door release unit with break-glass operation; supports electrical control or access control systems.',
    // price removed
    category: 'Exit Buttons',
    image_url: '/AM-EB4G.png',
    features: [
      'Break glass emergency release',
      'Surface or flush mount',
      'Supports electrical control systems'
    ],
    specifications: {
      'Model': 'AM-EB4G',
      'Dimension': '86 × 86 × 50 mm',
      'Input voltage': '5-36 VDC',
      'Output contact': 'NO/NC/COM',
      'Material': 'ABS'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-bk-z600',
    name: 'AM-BK-Z600 Z-Bracket',
    description: 'Z-bracket for magnetic lock installation (600 Lbs models).',
    // price removed
    category: 'Brackets & Accessories',
    image_url: '/AM-BK-Z600.png',
    features: [
      'Z-shaped mounting bracket',
      'Stainless steel',
      'Adjustable mounting'
    ],
    specifications: {
      'Model': 'AM-BK-Z600',
      'L-bracket dimension': '238 × 30 × 47 mm',
      'Z-bracket dimension': '185 × 44 × 100 mm'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'am-bk-u600',
    name: 'AM-BK-U600 U-Bracket',
    description: 'U-bracket for lower-edge frameless glass doors (600 Lbs models).',
    // price removed
    category: 'Brackets & Accessories',
    image_url: '/AM-BK-U600.png',
    features: [
      'U-shaped bracket',
      'Aluminium alloy',
      'Suitable for lower edge frameless glass door'
    ],
    specifications: {
      'Model': 'AM-BK-U600',
      'Dimension': '180 × 24.5 × 38.8 mm'
    },
    // stock info removed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const categories = [
  'Remote Controls',
  'Receivers',
  'Exit Buttons',
  'Magnetic Locks',
  'Electric Bolt Locks',
  'Access Control',
  'RFID Cards',
  'Brackets & Accessories'
];