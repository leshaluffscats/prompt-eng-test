interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`p-6 shadow-lg transition-all duration-200 ${
        isFeatured
          ? 'bg-blue-800 text-white scale-105 transform'
          : 'bg-white text-gray-800 hover:scale-102'
      }`}
    >
      <div className="text-center">
        <h3 className={`text-xl font-bold mb-2 ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
          {plan}
        </h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm">/month</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg
              className={`w-5 h-5 mr-2 ${isFeatured ? 'text-white' : 'text-blue-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <button
        className={`w-full mt-6 py-2 px-4 font-semibold transition-colors duration-200 ${
          isFeatured
            ? 'bg-blue-300 text-blue-800 hover:bg-gray-100'
            : 'bg-blue-800 text-blue-800 hover:bg-blue-900'
        }`}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard; 