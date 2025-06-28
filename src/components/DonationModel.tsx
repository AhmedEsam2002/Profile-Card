import { useState } from "react";

interface UserInfo {
  name: string;
  jobTitle: string;
  personalImg: string;
}

export default function DonationModel({
  showDonation,
  setShowDonation,
  userInfo,
}: {
  showDonation: boolean;
  setShowDonation: (show: boolean) => void;
  userInfo: UserInfo;
}) {
  const [amount, setAmount] = useState(25);
  const [showThankYou, setShowThankYou] = useState(false);

  if (!showDonation) return null;

  const handleDonate = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowDonation(false);
      setShowThankYou(false);
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80  flex items-center justify-center p-4"
      onClick={(e) => {
        e.currentTarget === e.target && setShowDonation(false);
      }}
    >
      <div className="bg-white rounded-lg w-full max-w-sm">
        {showThankYou ? (
          // Thank You Screen
          <div className="p-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Thank You for Your Generosity!
            </h3>
            <div className="flex items-center justify-center mb-4">
              <img
                src={userInfo.personalImg}
                alt={userInfo.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <p className="text-gray-700 font-medium">
                You donated{" "}
                <span className="text-green-600 font-bold">${amount}</span> to{" "}
                {userInfo.name}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Your support makes a difference!
            </p>
          </div>
        ) : (
          // Donation Form
          <div className="p-6 space-y-6 shadow-md rounded-b-lg">
            {/* Header */}
            <div className="flex justify-between items-center pb-3 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Support {userInfo.name}
              </h2>
              <button
                onClick={() => setShowDonation(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <img
                src={userInfo.personalImg}
                alt={userInfo.name}
                className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100 shadow-sm object-cover"
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">
                  {userInfo.name}
                </p>
                <p className="text-gray-600">{userInfo.jobTitle}</p>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">
                Select amount
              </p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[10, 25, 50].map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`py-3 rounded-md transition-all duration-200 font-medium ${
                      amount === value
                        ? "bg-blue-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label
                htmlFor="custom-amount"
                className="block text-sm text-gray-600 font-medium mb-2"
              >
                Or enter custom amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-3 pl-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md font-medium transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              <span>Donate ${amount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your donation will directly support {userInfo.name}'s work. Thank
              you for your generosity!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
