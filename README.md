# ✨ Wonderful Single Page Application (SPA)

A modern, feature-rich **Single Page Application** built with **React** and **Vite** that demonstrates dynamic UI updates without page reloads.

> 🎉 Welcome to **❤️ Chhavi SPA ❤️** - A beautiful and interactive web application!

## 🌐 **Live Demo**
**[👉 Visit the Live App Here](https://spf1.vercel.app)** 🚀

## 🚀 Features

### 📊 Counter
- Increment, Decrement, and Reset buttons
- Real-time counter value display
- Smooth animations and transitions

### ✓ Todo List
- Add new todos with input field
- Mark todos as completed with checkboxes
- Delete todos with a single click
- Track completion progress (e.g., "Completed: 2/5")
- Beautiful list styling with hover effects

### ⏱️ Stopwatch Timer
- Start/Pause functionality
- Reset button to clear the timer
- Time displayed in HH:MM:SS format
- Real-time updates with smooth animations

### 🌙 Dark Mode
- Toggle between light and dark themes
- Persistent dark mode across all tabs
- Beautiful gradient backgrounds
- Professional color schemes for both modes

### 🎨 Modern UI/UX
- Glassmorphism design with backdrop blur effects
- Smooth animations and transitions
- Responsive design for all devices (mobile, tablet, desktop)
- Professional color gradients
- Beautiful button hover effects with shimmer animation
- Tab-based navigation for different features

## 📋 Requirements

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- Modern web browser

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chhavig02/spf1.git
   cd spf1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📁 Project Structure

```
spf1/
├── src/
│   ├── App.jsx           # Main React component with all features
│   ├── App.css           # Styling for the application
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 💻 Technologies Used

- **React 19** - UI library with hooks (useState, useEffect)
- **Vite 4** - Fast build tool and dev server
- **CSS3** - Modern styling with gradients, animations, and glassmorphism
- **JavaScript ES6+** - Modern JavaScript features

## 🎯 Key Concepts Demonstrated

### State Management
- `useState` hook for managing component state
- Local state for counter, todos, timer, and theme

### Side Effects
- `useEffect` hook for timer functionality
- Interval cleanup to prevent memory leaks

### Dynamic Rendering
- Conditional rendering for tab navigation
- List rendering with map() function
- Event handling (onClick, onKeyPress, onChange)

## 🎨 Design Features

- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Text**: Beautiful gradient text effects
- **Smooth Animations**: CSS animations and transitions
- **Responsive Layout**: Flexbox-based responsive design
- **Custom Scrollbars**: Styled scrollbar for todo list
- **Color Gradients**: Professional color schemes
- **Shadow Effects**: Layered shadows for depth perception

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and above)
- 📲 Tablets (768px and above)
- 💻 Desktop screens (1024px and above)

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Your app will be live in seconds!

### Deploy to Netlify
1. Connect your GitHub repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ React hooks (useState, useEffect)
- ✅ Component-based architecture
- ✅ State management
- ✅ Event handling
- ✅ Conditional rendering
- ✅ List rendering
- ✅ Modern CSS (gradients, animations, flexbox)
- ✅ Responsive design
- ✅ Web browser APIs (intervals)

## 📝 How It Works

1. **Counter Tab**: Uses state to track count value and update display
2. **Todo Tab**: Maintains an array of todos with add/toggle/delete operations
3. **Timer Tab**: Uses useEffect to create an interval that updates every second
4. **Dark Mode**: Global state controls dark mode class on wrapper element

## 🎉 Results

A fully functional **Single Page Application** that:
- ✅ Dynamically updates UI without page reloads
- ✅ Provides smooth user experience
- ✅ Uses modern React patterns
- ✅ Features beautiful, responsive design
- ✅ Demonstrates professional development practices

## 💖 Dedicated to

Made with ❤️ for **Chhavi** - A beautiful SPA application!

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy the wonderful SPA experience!** 🚀✨
