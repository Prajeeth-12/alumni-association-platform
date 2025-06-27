import { useState, useMemo } from 'react';
import { events } from '../data/mockData';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { 
  PlusIcon,
  FunnelIcon 
} from '@heroicons/react/24/outline';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTab, setSelectedTab] = useState('upcoming'); // 'upcoming' or 'past'
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(events.map(event => event.category))].sort();
  }, []);

  // Filter events based on search, category, and tab
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = !searchTerm || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || event.category === selectedCategory;
      
      const matchesTab = selectedTab === 'upcoming' ? event.isUpcoming : !event.isUpcoming;

      return matchesSearch && matchesCategory && matchesTab;
    });
  }, [searchTerm, selectedCategory, selectedTab]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const upcomingCount = events.filter(event => event.isUpcoming).length;
  const pastCount = events.filter(event => !event.isUpcoming).length;

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="page-header">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="page-title">Events</h1>
              <p className="page-subtitle">
                Join our community events, networking sessions, and professional workshops.
              </p>
            </div>
            <button className="btn-primary mt-4 md:mt-0 flex items-center gap-2">
              <PlusIcon className="h-5 w-5" />
              Create Event
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setSelectedTab('upcoming')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'upcoming'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Events
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                  {upcomingCount}
                </span>
              </button>
              <button
                onClick={() => setSelectedTab('past')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === 'past'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past Events
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                  {pastCount}
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="search-card">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search events by title, description, or location..."
              className="flex-1"
            />
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary flex items-center gap-2"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
              {selectedCategory && (
                <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border-t pt-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {(selectedCategory || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Category Quick Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
                <span className="ml-1 text-xs">
                  ({events.filter(e => e.category === category && (selectedTab === 'upcoming' ? e.isUpcoming : !e.isUpcoming)).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} {selectedTab} events
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <Card
                key={event.id}
                type="event"
                data={event}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {selectedTab} events found
            </h3>
            <p className="text-gray-500 mb-4">
              {selectedTab === 'upcoming' 
                ? "There are no upcoming events matching your criteria."
                : "There are no past events matching your criteria."
              }
            </p>
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        {selectedTab === 'upcoming' && filteredEvents.length > 0 && (
          <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Register for upcoming events to expand your network, learn new skills, 
              and stay connected with the alumni community.
            </p>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              View My Registrations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
