import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex-center">
                <AcademicCapIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-xl text-gray-900">AlumniConnect</span>
            </div>
            <p className="body-text">
              Connecting graduates worldwide. Building careers, fostering relationships, 
              and creating opportunities for lifelong success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/directory" className="footer-link">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/events" className="footer-link">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="footer-link">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="footer-link">
                  Job Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">Help Center</a>
              </li>
              <li>
                <a href="#" className="footer-link">Contact Us</a>
              </li>
              <li>
                <a href="#" className="footer-link">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="footer-link">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <div className="text-gray-600 text-sm">
            © {currentYear} AlumniConnect. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


