import { Link } from 'react-router-dom';
import {  
  AcademicCapIcon,
  UsersIcon,
  CalendarIcon,
  BriefcaseIcon,
  HeartIcon,
  GlobeAltIcon,
  StarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const stats = [
    {
      icon: UsersIcon,
      value: '8,500+',
      label: 'Active Alumni',
      growth: '12%',
      iconColor: 'bg-blue-500'
    },
    {
      icon: GlobeAltIcon,
      value: '25+',
      label: 'Indian States',
      growth: '8%',
      iconColor: 'bg-green-500'
    },
    {
      icon: CalendarIcon,
      value: '150+',
      label: 'Events This Year',
      growth: '25%',
      iconColor: 'bg-purple-500'
    },
    {
      icon: BriefcaseIcon,
      value: '400+',
      label: 'Job Opportunities',
      growth: '30%',
      iconColor: 'bg-orange-500'
    }
  ];

  const features = [
    {
      icon: UsersIcon,
      title: 'Alumni Directory',
      description: 'Connect with fellow graduates from your program and beyond.',
      href: '/directory'
    },
    {
      icon: CalendarIcon,
      title: 'Events & Networking',
      description: 'Join exclusive events, workshops, and networking opportunities.',
      href: '/events'
    },
    {
      icon: BriefcaseIcon,
      title: 'Career Opportunities',
      description: 'Access job postings and career resources from our network.',
      href: '/jobs'
    },
    {
      icon: AcademicCapIcon,
      title: 'Mentorship Program',
      description: 'Find mentors or become one to guide the next generation.',
      href: '/mentorship'
    },
    {
      icon: HeartIcon,
      title: 'Give Back',
      description: 'Support scholarships and university programs through donations.',
      href: '/donate'
    },
    {
      icon: StarIcon,
      title: 'Success Stories',
      description: 'Read inspiring stories from our accomplished alumni.',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-xl mb-6">
              Welcome to St. Joseph's Alumni Connect
            </h1>
            
            <p className="subtitle mb-12 max-w-3xl mx-auto">
              Where lifelong connections are made. Join our thriving community 
              of Josephites making an impact across Tamil Nadu and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/directory" className="btn-primary">
                Explore Directory
              </Link>
              <Link to="/login" className="btn-primary">
                Join Community
              </Link>
              <Link to="/donate" className="btn-secondary">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="content-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Growing Community</h2>
            <p className="subtitle">Join thousands of Josephites making a difference across India</p>
          </div>
          
          <div className="grid-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex-center mb-4">
                  <div className={`icon-container ${stat.iconColor}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 mb-1">{stat.label}</div>
                <div className="text-sm text-green-600 font-medium">+{stat.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Everything You Need</h2>
            <p className="subtitle">Discover all the ways to stay connected and grow your career</p>
          </div>
          
          <div className="grid-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="flex-center mb-6">
                  <div className="icon-container bg-blue-500 text-white group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.href} className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container">
          <div className="text-center text-white">
            <TrophyIcon className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of Josephites who are already part of our vibrant community. 
              Build relationships, advance your career, and give back to St. Joseph's College.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Join Today
              </Link>
              <Link to="/directory" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Browse Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;