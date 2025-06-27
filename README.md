# Profile Card React App

A modern and responsive React application that displays profile cards with user information, social media links, and interactive features.

## 🌟 Features

- **Responsive Design**: Beautiful profile cards that work on all device sizes
- **Interactive UI**: Hover effects and smooth transitions
- **Social Media Integration**: Links to various social platforms (Facebook, Instagram, LinkedIn, Twitter, YouTube)
- **Toast Notifications**: User feedback with react-toastify
- **Multiple Profiles**: Display multiple user profiles in a grid layout
- **Modern Styling**: Clean and professional design with Tailwind CSS

## 🚀 Demo

![Profile Cards Preview](public/image.png)

## 🛠️ Built With

- **React 19.1.0** - Frontend framework
- **Vite** - Build tool and development server
- **React Toastify** - Toast notifications
- **Tailwind CSS** - Utility-first CSS framework (implied from class names)
- **ESLint** - Code linting and formatting

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Profile-Card
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   Or if you prefer npm:

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

   Or with npm:

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
Profile-Card/
├── public/
│   ├── Facebook.svg      # Social media icons
│   ├── Instagram.svg
│   ├── Linkedn.svg
│   ├── Twitter.svg
│   ├── Youtube.svg
│   ├── image.png         # Background image
│   └── personal.png      # Personal image assets
├── src/
│   ├── components/
│   │   └── Card.jsx      # Profile card component
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

## 🎨 Components

### Card Component

The main profile card component that displays:

- User profile image
- Name and job title
- Description
- Social media links
- Interactive buttons with toast notifications

### App Component

Contains the main application logic and user data array with sample profiles including:

- UI/UX Designers
- Software Engineers
- Product Managers
- Data Scientists
- DevOps Engineers
- Frontend/Backend Developers

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎯 Key Features Explained

### Interactive Profile Cards

Each profile card includes:

- **Profile Image**: Circular profile picture with hover effects
- **User Information**: Name, job title, and description
- **Social Media Icons**: Clickable icons with hover animations
- **Thank You Button**: Interactive button that shows toast notifications

### Responsive Design

The cards are designed to be fully responsive and work seamlessly across different screen sizes.

### Toast Notifications

When users interact with the cards, they receive friendly toast notifications thanking them for their support.

## 🚀 Deployment

To build the project for production:

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ahmed Esam**

## 🙏 Acknowledgments

- Thanks to the React community for the amazing tools and resources
- Icons and images used in this project
- Inspiration from modern UI/UX design trends

---

⭐ Star this repo if you found it helpful!
