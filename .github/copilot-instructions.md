<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Alumni Association Platform - Copilot Instructions

This is a React + Tailwind CSS frontend application for an Alumni Association Platform.

## Project Structure
- **Frontend Framework**: React (with Vite)
- **Styling**: Tailwind CSS with custom primary blue color scheme
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **State Management**: React useState/useContext (no external state management)
- **Data**: Mock data stored in `src/data/mockData.js` (no backend integration)

## Key Features
- Alumni Directory with search and filtering
- Events management (upcoming/past events)
- Mentorship program matching
- Job board for alumni-shared opportunities
- Donation platform with campaign tracking
- Mock authentication system

## Styling Guidelines
- Use Tailwind CSS for all styling
- Primary color: Blue (primary-600, primary-700, etc.)
- Design: Clean, modern, rounded corners (rounded-xl), subtle shadows (shadow-md)
- Responsive design: Mobile-first approach
- Component structure: Reusable Card component for different content types

## Component Architecture
- **Pages**: Each major section (Home, Directory, Events, etc.)
- **Components**: Reusable UI components (Navbar, Footer, Card, Form, SearchBar)
- **Data**: All mock data centralized in `src/data/mockData.js`

## Development Notes
- This is a frontend-only application with no backend integration
- Authentication is simulated with local state
- All data operations are performed on mock data
- Focus on responsive design and user experience
- Use semantic HTML and accessibility best practices
