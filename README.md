# Prof### 🎨 **Beautiful Profile Cards**le Card React App 🚀

A modern and interactive React application showcasing professional profile cards with a beautiful donation system. Built with the latest React 19 and featuring a sophisticated design with premium user badges and "Buy me a coffee" functionality.

## 🌟 Key Features

### � **Beautiful Profile Cards**

- **Responsive Design**: Optimized for all screen sizes with a mobile-first approach
- **Premium Badges**: Special visual indicators for premium users with gradient backgrounds
- **Professional Layout**: Clean, card-based design with hover animations and smooth transitions
- **Custom Styling**: Tailwind CSS integration for consistent and modern UI

### 💳 **Donation System**

- **Interactive Modal**: Beautiful donation interface with customizable amounts
- **Preset Amounts**: Quick selection buttons ($10, $25, $50)
- **Custom Donations**: User can enter any custom amount
- **Thank You Experience**: Elegant confirmation screen with success animation
- **User Context**: Shows recipient information during donation process

### 🔗 **Social Media Integration**

- **Five Platform Support**: Facebook, Instagram, LinkedIn, Twitter, YouTube
- **SVG Icons**: High-quality vector icons for crisp display
- **External Links**: Proper link handling with target="\_blank" and security attributes
- **Accessibility**: Screen reader support and proper alt text

### 👥 **Team Showcase**

- **20+ Sample Profiles**: Diverse team members with various job roles
- **Real Profile Images**: Integration with external image sources
- **Rich Descriptions**: Detailed professional descriptions for each team member
- **Premium Memberships**: Special highlighting for premium users

## 🚀 Live Demo

![Profile Cards Preview](public/image.png)

## 🛠️ Technology Stack

- **React 19.1.0** - Latest React with modern features and performance improvements
- **TypeScript** - Type safety for the donation modal component
- **Vite 7.0.0** - Ultra-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PNPM** - Fast, disk space efficient package manager
- **ESLint** - Code quality and consistency enforcement

## 📦 Quick Start

### Prerequisites

- Node.js 18+
- PNPM (recommended) or NPM

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmedEsam2002/Profile-Card.git
   cd Profile-Card
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## 📁 Project Architecture

```
Profile-Card/
├── public/                    # Static assets
│   ├── Facebook.svg          # Social media icons
│   ├── Instagram.svg
│   ├── Linkedn.svg
│   ├── Twitter.svg
│   ├── Youtube.svg
│   ├── image.png            # Background image
│   └── personal.png         # Default personal image
├── src/
│   ├── components/
│   │   ├── Card.jsx         # Main profile card component
│   │   └── DonationModel.tsx # Donation modal (TypeScript)
│   ├── assets/              # React assets
│   ├── App.jsx              # Main application
│   ├── App.css              # Tailwind imports
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── usersData.js              # User profiles database
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules
├── package.json             # Dependencies & scripts
└── pnpm-lock.yaml           # Lock file
```

## 🎨 Component Overview

### 🃏 **Card Component** (`Card.jsx`)

The main profile card featuring:

- **Dynamic Premium Badges**: Conditional rendering based on user status
- **Profile Image Overlay**: Circular profile image with border effects
- **Social Media Grid**: Five social platform links with hover animations
- **Donation Trigger**: "Buy me a coffee" button with custom styling
- **Responsive Layout**: 408px × 625px cards with flexible content

**Key Props:**

- `bgImg`: Background image for the card
- `user`: User object containing all profile information
- `setShowDonation`: Function to trigger donation modal
- `setSelectedUser`: Function to set current donation recipient

### 💰 **DonationModel Component** (`DonationModel.tsx`)

Sophisticated donation interface with:

- **TypeScript Integration**: Type-safe props and state management
- **Two-Phase UI**: Donation form → Thank you confirmation
- **Amount Selection**: Preset buttons and custom input field
- **User Context Display**: Shows recipient info during donation
- **Success Animation**: SVG checkmark with smooth transitions
- **Auto-Close Timer**: 1.5-second delay before modal closes

**TypeScript Interface:**

```typescript
interface UserInfo {
  name: string;
  jobTitle: string;
  personalImg: string;
}
```

### 📱 **App Component** (`App.jsx`)

Main application controller:

- **State Management**: Controls donation modal visibility and selected user
- **Grid Layout**: Responsive card grid with Flexbox
- **Background Gradient**: Beautiful gradient background
- **User Data Integration**: Maps through users array for card generation

## 📊 User Data Structure

The application includes 20 diverse team members stored in `usersData.js`:

```javascript
{
  name: "Walter White",
  jobTitle: "Chemistry Specialist",
  description: "Former high school chemistry teacher...",
  personalImg: "https://...",
  socialMedia: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
    linkedin: "https://linkedin.com/...",
    twitter: "https://twitter.com/...",
    youtube: "https://youtube.com/..."
  },
  isPremium: true  // Optional premium status
}
```

**Job Roles Included:**

- Software Engineers & Developers
- UI/UX & Graphic Designers
- Product & Project Managers
- Data Scientists & AI Engineers
- DevOps & System Administrators
- QA Engineers & Security Analysts
- Content & Marketing Specialists

## 🎯 Key Implementation Details

### **Premium User System**

- Conditional styling with gradient backgrounds
- Special badge positioning and animations
- Premium-specific visual treatments

### **Donation Flow**

1. User clicks "Buy me a coffee" button
2. Modal opens with donation form
3. User selects or enters amount
4. Donation confirmation triggers thank you screen
5. Auto-close after success message

### **Responsive Design**

- Mobile-first approach with Tailwind utilities
- Flexible grid system adapting to screen sizes
- Hover effects and touch-friendly interactions

### **Performance Optimizations**

- Vite for fast HMR during development
- React 19 optimizations for rendering
- Efficient state management with minimal re-renders

## 🔧 Configuration Files

### **Vite Configuration**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### **ESLint Setup**

Modern ESLint configuration with React-specific rules and TypeScript support.

## 🚀 Future Enhancements

- [ ] **Backend Integration**: Connect to real payment processing
- [ ] **User Authentication**: Login system for personalized experiences
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Card Animations**: Enhanced micro-interactions
- [ ] **Search & Filter**: Find specific team members
- [ ] **Admin Panel**: Manage user profiles dynamically
- [ ] **Analytics**: Track donation patterns and user interactions

## 📝 Development Notes

- Uses React 19's latest features and performance improvements
- TypeScript integration for critical components
- Tailwind CSS for maintainable styling
- PNPM for efficient dependency management
- Modern ESLint configuration for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React 19 and modern web technologies

## �‍💻 Author

**Ahmed Esam**

- GitHub: [@AhmedEsam2002](https://github.com/AhmedEsam2002)
- Repository: [Profile-Card](https://github.com/AhmedEsam2002/Profile-Card)

## 🙏 Acknowledgments

- Thanks to the React community for the amazing tools and resources
- Icons and images used in this project
- Inspiration from modern UI/UX design trends

---

⭐ Star this repo if you found it helpful!
