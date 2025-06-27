import { 
  MapPinIcon, 
  CalendarIcon, 
  UserIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Card = ({ type, data, onClick, className = "" }) => {
  const renderAlumniCard = () => (
    <div className={`alumni-card ${className}`} onClick={onClick}>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-16 h-16 rounded-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=3b82f6&color=ffffff`;
          }}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.position}</p>
          <p className="text-sm text-blue-600">{data.company}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <UserIcon className="h-4 w-4 mr-2" />
          <span>Class of {data.batch} • {data.department}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{data.location}</span>
        </div>
      </div>
      {data.bio && (
        <p className="mt-3 text-sm text-gray-700 line-clamp-2">{data.bio}</p>
      )}
      {data.skills && (
        <div className="mt-3 flex flex-wrap gap-1">
          {data.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="badge badge-blue">
              {skill}
            </span>
          ))}
          {data.skills.length > 3 && (
            <span className="badge badge-gray">
              +{data.skills.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );

  const renderEventCard = () => (
    <div className={`event-card overflow-hidden ${className}`}>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop";
        }}
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`badge ${
            data.isUpcoming ? 'badge-green' : 'badge-gray'
          }`}>
            {data.isUpcoming ? 'Upcoming' : 'Past Event'}
          </span>
          <span className="badge badge-blue">
            {data.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.title}</h3>
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>{new Date(data.date).toLocaleDateString()} at {data.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-2" />
            <span>{data.location}</span>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-3 line-clamp-3">{data.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{data.attendees} attendees</span>
          {data.isUpcoming && (
            <button className="btn-primary btn-sm">
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderJobCard = () => (
    <div className={`job-card ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <BuildingOfficeIcon className="h-4 w-4 mr-2" />
            <span>{data.company}</span>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          data.type === 'Full-time' ? 'bg-green-100 text-green-800' : 
          data.type === 'Part-time' ? 'bg-blue-100 text-blue-800' : 
          'bg-orange-100 text-orange-800'
        }`}>
          {data.type}
        </span>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{data.location}</span>
        </div>
        {data.salary && (
          <div className="flex items-center text-sm text-gray-600">
            <CurrencyDollarIcon className="h-4 w-4 mr-2" />
            <span>{data.salary}</span>
          </div>
        )}
      </div>
      
      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{data.description}</p>
      
      {data.requirements && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
          <div className="flex flex-wrap gap-1">
            {data.requirements.slice(0, 3).map((req, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {req}
              </span>
            ))}
            {data.requirements.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{data.requirements.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          Posted by {data.postedBy} • {new Date(data.postedDate).toLocaleDateString()}
        </div>
        <a
          href={data.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-700 transition-colors"
        >
          Apply
        </a>
      </div>
    </div>
  );

  const renderMentorCard = () => (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-16 h-16 rounded-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=3b82f6&color=ffffff`;
          }}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.position}</p>
          <p className="text-sm text-primary-600">{data.experience} experience</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{data.bio}</p>
      
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
        <div className="flex flex-wrap gap-1">
          {data.expertise.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-1 mb-4 text-sm text-gray-600">
        <p><strong>Availability:</strong> {data.availability}</p>
        <p><strong>Best for:</strong> {data.preferredMentees}</p>
      </div>
      
      <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm hover:bg-primary-700 transition-colors">
        Connect
      </button>
    </div>
  );

  switch (type) {
    case 'alumni':
      return renderAlumniCard();
    case 'event':
      return renderEventCard();
    case 'job':
      return renderJobCard();
    case 'mentor':
      return renderMentorCard();
    default:
      return <div className="p-4 bg-gray-100 rounded-md">Unknown card type</div>;
  }
};

export default Card;
