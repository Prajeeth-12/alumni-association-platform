import { useState, useMemo } from 'react';
import { jobs } from '../data/mockData';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { 
  PlusIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique job types and locations
  const filterOptions = useMemo(() => {
    const uniqueTypes = [...new Set(jobs.map(job => job.type))].sort();
    const uniqueLocations = [...new Set(jobs.map(job => job.location))].sort();
    
    return {
      types: uniqueTypes,
      locations: uniqueLocations
    };
  }, []);

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesType = !selectedType || job.type === selectedType;
      const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedType, selectedLocation]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedLocation('');
  };

  const activeFilterCount = [selectedType, selectedLocation].filter(Boolean).length;

  const stats = [
    { label: 'Active Jobs', value: jobs.length, icon: BriefcaseIcon },
    { label: 'Companies', value: new Set(jobs.map(job => job.company)).size, icon: BuildingOfficeIcon },
    { label: 'This Month', value: jobs.filter(job => {
      const jobDate = new Date(job.postedDate);
      const now = new Date();
      return jobDate.getMonth() === now.getMonth() && jobDate.getFullYear() === now.getFullYear();
    }).length, icon: ClockIcon },
  ];

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="page-header">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="page-title">Job Board</h1>
              <p className="page-subtitle">
                Discover career opportunities shared by fellow alumni and leading companies.
              </p>
            </div>
            <button className="btn-primary mt-4 md:mt-0 flex items-center gap-2">
              <PlusIcon className="h-5 w-5" />
              Post a Job
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

        {/* Search and Filters */}
        <div className="search-card">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search jobs by title, company, or skills..."
              className="flex-1"
            />
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-secondary flex items-center gap-2"
              >
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">All Types</option>
                    {filterOptions.types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">All Locations</option>
                    {filterOptions.locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              {activeFilterCount > 0 && (
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

        {/* Quick Filter Buttons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Job Types</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedType
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Jobs
              <span className="ml-1 text-xs">({jobs.length})</span>
            </button>
            {filterOptions.types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type}
                <span className="ml-1 text-xs">
                  ({jobs.filter(job => job.type === type).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ClockIcon className="h-4 w-4" />
            <span>Updated daily</span>
          </div>
        </div>

        {/* Jobs List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map(job => (
              <Card
                key={job.id}
                type="job"
                data={job}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BriefcaseIcon className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or filters to find more opportunities.
            </p>
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Job Alerts CTA */}
        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss Your Dream Job
            </h3>
            <p className="text-gray-600 mb-6">
              Set up job alerts based on your preferences and get notified when new opportunities 
              matching your criteria are posted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                Create Job Alert
              </button>
              <button className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                Upload Resume
              </button>
            </div>
          </div>
        </div>

        {/* For Employers */}
        <div className="mt-8 bg-gray-800 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Hiring? Post Your Job Here</h3>
            <p className="text-gray-300 mb-6">
              Connect with our talented alumni network. Post your job openings and find 
              qualified candidates from our diverse community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Post a Job
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
                Learn About Hiring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
