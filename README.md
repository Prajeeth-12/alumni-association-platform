# Alumni Association Platform

A modern, responsive web application built with React and Tailwind CSS that connects alumni worldwide through networking, events, mentorship, and career opportunities.

## 🌟 Features

- **Alumni Directory**: Search and connect with fellow alumni by name, company, graduation year, or location
- **Events Management**: Browse upcoming and past events with registration capabilities
- **Mentorship Program**: Connect mentors and mentees based on expertise and career goals
- **Job Board**: Discover career opportunities shared by alumni and companies
- **Donation Platform**: Support university campaigns and initiatives with secure donation forms
- **Mock Authentication**: Simulated login/registration system for demonstration

## 🚀 Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS with custom blue color scheme
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **State Management**: React hooks (useState, useContext)
- **Data**: Mock data (no backend required)

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Features Overview

### Home Page
- Hero section with call-to-action buttons
- Statistics showcase
- Feature highlights

### Alumni Directory
- Grid/list view toggle
- Advanced search and filtering
- Professional profiles with contact info

### Events
- Upcoming and past events tabs
- Category filtering
- Event registration system

### Mentorship
- Mentor browsing and filtering
- Expertise-based matching
- Professional profiles

### Job Board
- Job search with filters
- Company and position details
- Application tracking

### Donation Platform
- Multiple campaign support
- Progress tracking with visual indicators
- Donor recognition

## 🎨 Design System

- **Primary Colors**: Blue shades (primary-50 to primary-900)
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and semantic HTML
- **Modern UI**: Rounded corners, subtle shadows, smooth transitions

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
├── data/               # Mock data
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 💡 Mock Data

The application includes comprehensive mock data for alumni, events, jobs, mentors, campaigns, and donations.

## 🌐 Deployment

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service.

---

**Note**: This is a frontend-only demonstration application with simulated authentication and mock data.
