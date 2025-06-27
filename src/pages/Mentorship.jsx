import { useState, useMemo } from 'react';
import { mentors } from '../data/mockData';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { 
  PlusIcon,
  UsersIcon,
  AcademicCapIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  // Get unique expertise areas and availability options
  const filterOptions = useMemo(() => {
    const allExpertise = mentors.flatMap(mentor => mentor.expertise);
    const uniqueExpertise = [...new Set(allExpertise)].sort();
    const uniqueAvailability = [...new Set(mentors.map(mentor => mentor.availability))].sort();
    
    return {
      expertise: uniqueExpertise,
      availability: uniqueAvailability
    };
  }, []);

  // Filter mentors based on search and filters
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      const matchesSearch = !searchTerm || 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        mentor.bio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesExpertise = !selectedExpertise || mentor.expertise.includes(selectedExpertise);
      const matchesAvailability = !selectedAvailability || mentor.availability === selectedAvailability;

      return matchesSearch && matchesExpertise && matchesAvailability;
    });
  }, [searchTerm, selectedExpertise, selectedAvailability]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedExpertise('');
    setSelectedAvailability('');
  };

  const activeFilterCount = [selectedExpertise, selectedAvailability].filter(Boolean).length;

  const stats = [
    { label: 'Available Mentors', value: mentors.length, icon: UsersIcon },
    { label: 'Expertise Areas', value: filterOptions.expertise.length, icon: AcademicCapIcon },
    { label: 'Active Connections', value: '150+', icon: LightBulbIcon },
  ];

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="page-header">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="page-title">Mentorship Program</h1>
              <p className="page-subtitle">
                Connect with experienced alumni for career guidance, skill development, and professional growth.
              </p>
            </div>
            <button className="btn-primary mt-4 md:mt-0 flex items-center gap-2">
              <PlusIcon className="h-5 w-5" />
              Become a Mentor
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Mentors</h3>
              <p className="text-gray-600">
                Explore our network of experienced alumni mentors across various industries and expertise areas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600">
                Send a connection request to mentors whose expertise aligns with your goals and interests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Grow Together</h3>
              <p className="text-gray-600">
                Engage in meaningful conversations, receive guidance, and advance your career with ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search mentors by name, expertise, or company..."
              className="flex-1"
            />
            
            {activeFilterCount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{activeFilterCount} filters applied</span>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expertise Area
              </label>
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <option value="">All Expertise Areas</option>
                {filterOptions.expertise.map(expertise => (
                  <option key={expertise} value={expertise}>{expertise}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <option value="">Any Time</option>
                {filterOptions.availability.map(availability => (
                  <option key={availability} value={availability}>{availability}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Expertise Quick Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Expertise Areas</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedExpertise('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedExpertise
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Areas
            </button>
            {filterOptions.expertise.slice(0, 8).map(expertise => (
              <button
                key={expertise}
                onClick={() => setSelectedExpertise(expertise)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedExpertise === expertise
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {expertise}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMentors.length} of {mentors.length} mentors
          </p>
        </div>

        {/* Mentors Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <Card
                key={mentor.id}
                type="mentor"
                data={mentor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <UsersIcon className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No mentors found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters to find more mentors.
            </p>
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Share your knowledge and experience by becoming a mentor. Help shape the next generation 
            of professionals while building meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Become a Mentor
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
