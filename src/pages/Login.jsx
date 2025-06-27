import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Login = ({ onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLoginSubmit = (formData) => {
    // Simulate login process
    console.log('Login data:', formData);
    
    // Simple validation - in real app, this would be API call
    if (formData.email && formData.password) {
      // Simulate successful login
      onLogin({
        email: formData.email,
        name: formData.email.split('@')[0], // Simple name extraction
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleRegisterSubmit = (formData) => {
    // Simulate registration process
    console.log('Registration data:', formData);
    
    // Simple validation
    if (formData.email && formData.password && formData.firstName && formData.lastName) {
      // Simulate successful registration and auto-login
      onLogin({
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="auth-container">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center space-x-2">
          <AcademicCapIcon className="h-10 w-10 text-primary-600" />
          <span className="text-2xl font-bold text-gray-900">AlumniConnect</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {isLoginMode ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="font-medium text-primary-600 hover:text-primary-500"
          >
            {isLoginMode ? 'Register here' : 'Sign in here'}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
          {isLoginMode ? (
            <Form
              type="login"
              onSubmit={handleLoginSubmit}
            />
          ) : (
            <Form
              type="register"
              onSubmit={handleRegisterSubmit}
            />
          )}

          {/* Demo Credentials */}
          {isLoginMode && (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Demo Credentials</h3>
              <p className="text-sm text-blue-600">
                Email: demo@example.com<br />
                Password: password123
              </p>
              <button
                onClick={() => handleLoginSubmit({ email: 'demo@example.com', password: 'password123' })}
                className="mt-2 text-xs text-blue-600 hover:text-blue-500 underline"
              >
                Click to auto-fill and login
              </button>
            </div>
          )}

          {/* Features for members */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              {isLoginMode ? 'Welcome back!' : 'Join our community and enjoy:'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Access to exclusive alumni directory
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Join networking events and reunions
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Discover career opportunities
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Connect with mentors and mentees
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Support university initiatives
              </li>
            </ul>
          </div>

          {/* Social Login Alternative */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
