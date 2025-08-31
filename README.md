# Acumatic E-commerce Website

# A modern, fully-featured e-commerce website for Acumatic - a leading provider of door locking and access control products in Dubai, UAE.

## Features

### 🛍️ E-commerce Functionality
- Product catalog with categories and search
- Shopping cart with persistent storage
- Secure checkout process
- Order management system
- User authentication and profiles

### 🎨 Modern Design
- Responsive design for all devices
- Professional UI with Accumatic branding
- Smooth animations and micro-interactions
- Optimized for performance and accessibility

### 🔐 Security Features
- Supabase authentication
- Row-level security (RLS)
- Secure payment processing
- Data validation and sanitization

### 📱 User Experience
- WhatsApp integration for instant support
- Advanced product filtering and sorting
- Real-time cart updates
- Mobile-optimized interface

## Product Categories

- **Magnetic Locks** - High-security electromagnetic locks
- **Electric Bolt Locks** - Reliable electric bolt locking systems
- **Access Control Keypads** - Advanced keypad access control
- **Remote Controls & Receivers** - Wireless access solutions
- **Exit Buttons** - Various exit button options
- **RFID Cards** - Access cards and credentials
- **Brackets & Accessories** - Installation accessories

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe integration ready
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites
- Node.js 18+ 
- Supabase account
- Stripe account (for payments)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase and Stripe credentials.

4. Set up the database:
   - Click "Connect to Supabase" in the top right
   - Run the migration files in `/supabase/migrations`

5. Start the development server:
   ```bash
   npm run dev
   ```

## Database Setup

The application uses Supabase for data storage. You'll need to:

1. Create a new Supabase project
2. Run the provided migration files to set up the database schema
3. Configure Row Level Security (RLS) policies
4. Add your Supabase credentials to the environment variables

## Payment Integration

The site is ready for Stripe integration:

1. Create a Stripe account
2. Get your publishable key from the Stripe dashboard
3. Add the key to your environment variables
4. The checkout process will handle payment processing

## Contact Information

- **Sales**: sales@acumatic.me
- **Support**: support@acumatic.me
- **Phone**: +971 52 631 1773
- **Location**: Dubai, UAE

## License

© 2025 Acumatic. All rights reserved.