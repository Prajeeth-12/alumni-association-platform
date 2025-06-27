import { useState } from 'react';
import { campaigns, donations } from '../data/mockData';
import Form from '../components/Form';
import { 
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Donate = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonationSubmit = (formData) => {
    // Simulate donation processing
    alert(`Thank you for your donation of ₹${formData.amount} to ${formData.campaign}!`);
    setShowDonationForm(false);
    setSelectedCampaign(null);
  };

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalRaised = campaigns.reduce((sum, campaign) => sum + campaign.raisedAmount, 0);
  const totalGoal = campaigns.reduce((sum, campaign) => sum + campaign.goalAmount, 0);
  const totalDonors = donations.length;

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="text-center page-header">
          <h1 className="page-title">Support St. Joseph's Community</h1>
          <p className="page-subtitle max-w-3xl mx-auto">
            Your generous contributions help us build a stronger St. Joseph's College, support current students in Chennai, 
            and create lasting impact for future generations of Josephites.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="stats-grid">
          <div className="stat-card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(totalRaised)}</p>
            <p className="text-gray-600">Total Raised</p>
          </div>
          
          <div className="stat-card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <UsersIcon className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{totalDonors}+</p>
            <p className="text-gray-600">Generous Donors</p>
          </div>
          
          <div className="stat-card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <TrophyIcon className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{campaigns.length}</p>
            <p className="text-gray-600">Active Campaigns</p>
          </div>
        </div>

        {/* Quick Donation */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 mb-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <HeartIcon className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Make a Quick Donation</h2>
            <p className="text-primary-100 mb-6">
              Support our general fund to make an immediate impact across all St. Joseph's College initiatives in Chennai.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[500, 1000, 2500, 5000, 10000].map(amount => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedCampaign(null);
                    setShowDonationForm(true);
                  }}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setSelectedCampaign(null);
                setShowDonationForm(true);
              }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Custom Amount
            </button>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Active Campaigns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {campaigns.map(campaign => (
              <div key={campaign.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {campaign.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      Ends {new Date(campaign.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{campaign.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Raised: {formatCurrency(campaign.raisedAmount)}</span>
                      <span>Goal: {formatCurrency(campaign.goalAmount)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)}%` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-lg font-semibold text-primary-600">
                        {getProgressPercentage(campaign.raisedAmount, campaign.goalAmount).toFixed(1)}% funded
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedCampaign(campaign);
                      setShowDonationForm(true);
                    }}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Donate to this Campaign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donations */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Donations</h2>
          <div className="space-y-4">
            {donations.slice(0, 5).map(donation => (
              <div key={donation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{donation.donor}</p>
                      <p className="text-sm text-gray-600">donated to {donation.campaign}</p>
                      {donation.message && (
                        <p className="text-sm text-gray-500 italic mt-1">"{donation.message}"</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">{formatCurrency(donation.amount)}</p>
                  <p className="text-sm text-gray-500">{new Date(donation.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View All Donations
            </button>
          </div>
        </div>

        {/* Donation Form Modal */}
        {showDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedCampaign ? `Donate to ${selectedCampaign.title}` : 'Make a Donation'}
                  </h3>
                  <button
                    onClick={() => {
                      setShowDonationForm(false);
                      setSelectedCampaign(null);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {selectedCampaign && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{selectedCampaign.title}</h4>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Raised: {formatCurrency(selectedCampaign.raisedAmount)}</span>
                      <span>Goal: {formatCurrency(selectedCampaign.goalAmount)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${getProgressPercentage(selectedCampaign.raisedAmount, selectedCampaign.goalAmount)}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <Form
                  type="donation"
                  onSubmit={handleDonationSubmit}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
