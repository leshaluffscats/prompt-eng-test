
import './App.css'
import PricingCard from './components/PricingCard'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard />
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full md:w-[320px]">
            <PricingCard
              plan="Basic"
              price="$10"
              features={[
                "50,000 requests",
                "4 contributors",
                "Up to 3GB storage"
              ]}
            />
          </div>
          <div className="w-full md:w-[320px]">
            <PricingCard
              plan="Pro"
              price="$29"
              features={[
                "100,000 requests",
                "7 contributors",
                "Up to 6GB storage"
              ]}
              isFeatured={true}
            />
          </div>
          <div className="w-full md:w-[320px]">
            <PricingCard
              plan="Enterprise"
              price="$99"
              features={[
                "200,000 requests",
                "11 contributors",
                "Up to 10GB storage"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
