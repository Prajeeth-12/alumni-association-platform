import { useState } from 'react';

const Form = ({ type, onSubmit, className = "" }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      setFormData({});
    }, 1000);
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Enter your password"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-primary-600 hover:text-primary-500">
            Forgot your password?
          </a>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="batch" className="form-label">
            Graduation Year
          </label>
          <select
            id="batch"
            name="batch"
            value={formData.batch || ''}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Year</option>
            {Array.from({ length: 30 }, (_, i) => 2025 - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department || ''}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Data Science">Data Science</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Psychology">Psychology</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );

  const renderDonationForm = () => (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="amount" className="form-label">
          Donation Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount || ''}
            onChange={handleChange}
            required
            min="1"
            className="form-input pl-7"
            placeholder="0.00"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {[25, 50, 100, 250, 500, 1000].map(amount => (
            <button
              key={amount}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, amount }))}
              className="btn-secondary"
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="campaign" className="form-label">
          Choose Campaign
        </label>
        <select
          id="campaign"
          name="campaign"
          value={formData.campaign || ''}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="">Select Campaign</option>
          <option value="New Science Building Fund">New Science Building Fund</option>
          <option value="Student Scholarship Program">Student Scholarship Program</option>
          <option value="Alumni Emergency Relief Fund">Alumni Emergency Relief Fund</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="donorName" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          id="donorName"
          name="donorName"
          value={formData.donorName || ''}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your name or 'Anonymous'"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="form-label">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message || ''}
          onChange={handleChange}
          rows="3"
          className="form-textarea"
          placeholder="Leave a message with your donation..."
        />
      </div>
      
      <div className="flex items-center">
        <input
          id="anonymous"
          name="anonymous"
          type="checkbox"
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
          Make this donation anonymous
        </label>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Processing Donation...' : 'Donate Now'}
      </button>
    </form>
  );

  switch (type) {
    case 'login':
      return renderLoginForm();
    case 'register':
      return renderRegisterForm();
    case 'donation':
      return renderDonationForm();
    default:
      return <div className="p-4 bg-gray-100 rounded-md">Unknown form type</div>;
  }
};

export default Form;
