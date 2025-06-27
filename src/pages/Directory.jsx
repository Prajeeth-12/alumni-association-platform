import { useState, useMemo } from 'react';
import { alumni } from '../data/mockData';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { 
  FunnelIcon,
  ViewColumnsIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    batch: '',
    department: '',
    location: ''
  });
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filters
  const filterOptions = useMemo(() => {
    return {
      batches: [...new Set(alumni.map(person => person.batch))].sort(),
      departments: [...new Set(alumni.map(person => person.department))].sort(),
      locations: [...new Set(alumni.map(person => person.location))].sort()
    };
  }, []);

  // Filter alumni based on search and filters
  const filteredAlumni = useMemo(() => {
    return alumni.filter(person => {
      const matchesSearch = !searchTerm || 
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBatch = !selectedFilters.batch || person.batch === selectedFilters.batch;
      const matchesDepartment = !selectedFilters.department || person.department === selectedFilters.department;
      const matchesLocation = !selectedFilters.location || person.location === selectedFilters.location;

      return matchesSearch && matchesBatch && matchesDepartment && matchesLocation;
    });
  }, [searchTerm, selectedFilters]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      batch: '',
      department: '',
      location: ''
    });
    setSearchTerm('');
  };

  const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Alumni Directory</h1>
          <p className="page-subtitle">
            Connect with fellow alumni from around the world. Search by name, company, or location.
          </p>
        </div>

        {/* Search and Controls */}
        <div className="search-card">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search alumni by name, company, position..."
              className="flex-1"
            />
            
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex rounded-md border border-gray-300">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  <Squares2X2Icon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  <ViewColumnsIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-secondary flex items-center gap-2"
              >
                <FunnelIcon className="h-5 w-5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <select
                    value={selectedFilters.batch}
                    onChange={(e) => handleFilterChange('batch', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">All Years</option>
                    {filterOptions.batches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    value={selectedFilters.department}
                    onChange={(e) => handleFilterChange('department', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">All Departments</option>
                    {filterOptions.departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedFilters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
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
                  onClick={clearAllFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredAlumni.length} of {alumni.length} alumni
          </p>
        </div>

        {/* Alumni Grid/List */}
        {filteredAlumni.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredAlumni.map(person => (
              <Card
                key={person.id}
                type="alumni"
                data={person}
                className={viewMode === 'list' ? 'md:flex md:items-center md:space-x-6' : ''}
                onClick={() => {
                  // Handle alumni profile view - in a real app, this would open a modal or navigate to profile
                  alert(`View profile for ${person.name}`);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="empty-state-title">No alumni found</h3>
            <p className="empty-state-subtitle">
              Try adjusting your search terms or filters to find more alumni.
            </p>
            <button
              onClick={clearAllFilters}
              className="btn-primary"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
