# Profile App - ARMIN

A modern React application built with Vite, featuring a user profile with multiple sections including food library, achievements, financial management, and personal profile.

## 🚀 Features

- **Modern React Architecture**: Clean component structure with hooks
- **Responsive Design**: Works on all device sizes
- **Multiple Sections**: Food library, achievements, finance tracking, and profile management
- **Vietnamese Language Support**: Full Vietnamese localization
- **Modern UI**: Beautiful gradients and animations using Tailwind CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Header.jsx
│   │   ├── UserStats.jsx
│   │   └── index.js
│   ├── pages/            # Page components
│   │   ├── FoodLibraryPage.jsx
│   │   ├── AchievementsPage.jsx
│   │   ├── FinancePage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── index.js
│   └── index.js
├── hooks/                # Custom React hooks
│   ├── useNavigation.js
│   └── index.js
├── constants/            # App constants
│   ├── routes.js
│   ├── familyMembers.js
│   └── index.js
├── utils/                # Utility functions
│   ├── formatCurrency.js
│   └── index.js
├── styles/               # CSS files
│   └── globals.css
├── App.jsx              # Main App component
└── main.jsx            # Entry point
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd profile-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📋 Dependencies

### Main Dependencies
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **Lucide React**: ^0.263.1 (for icons)

### Development Dependencies
- **Vite**: ^4.4.5 (build tool)
- **Tailwind CSS**: ^3.3.3 (styling)
- **PostCSS**: ^8.4.27
- **Autoprefixer**: ^10.4.14
- **ESLint**: ^8.45.0 (linting)

## 🎨 Features by Section

### 🍕 Food Library (Thư viện đồ ăn)
- Food collection display
- Interactive food cards
- Notes system

### 🏆 Achievements (Thành tích)
- Achievement badges
- Gold, Silver, Bronze medals
- Progress tracking

### 💰 Finance Management (Quản lý tài chính)
- Balance tracking
- Income/Expense analysis
- Monthly spending charts
- Vietnamese currency formatting

### 👤 Profile (Hồ sơ)
- Family member profiles
- Health-based meal planning
- Age-appropriate recommendations

## 🎯 Key Components

### Header Component
- Navigation between sections
- Active route highlighting
- Responsive design

### UserStats Component
- User information display
- Social statistics
- Action buttons (Follow, Message)

### Custom Hooks
- `useNavigation`: Manages routing state
- Clean separation of concerns

### Utility Functions
- Currency formatting (USD/VND)
- Number formatting
- Reusable helper functions

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Classes**: For common patterns
- **Gradient Backgrounds**: Modern visual appeal
- **Responsive Design**: Mobile-first approach

## 🌐 Localization

- Vietnamese language support
- Currency formatting for VND
- Cultural considerations for family structure

## 🔧 Development

- **Hot Reload**: Instant updates during development
- **ESLint**: Code quality enforcement
- **Modern JavaScript**: ES6+ features
- **Component-based Architecture**: Reusable and maintainable

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Deployment

The app is ready for deployment on any static hosting service:

```bash
npm run build
# Deploy the 'dist' folder
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

Built with ❤️ using React + Vite + Tailwind CSS