import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  filters = [], 
  onFilterChange,
  className = "" 
}) => {
  const clearSearch = () => {
    onChange('');
  };

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="search-input"
          placeholder={placeholder}
        />
        {value && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Filter Buttons */}
      {filters.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange && onFilterChange(filter.key, filter.value)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filter.active
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
              {filter.count !== undefined && (
                <span className={`ml-1 ${filter.active ? 'text-primary-200' : 'text-gray-500'}`}>
                  ({filter.count})
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
