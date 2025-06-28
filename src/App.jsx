import "./App.css";
import img from "/image.png";
import Card from "./components/Card";
import DonationModel from "./components/DonationModel";
import { useState } from "react";
import { users } from "/usersData.js";
function App() {
  const [showDonation, setShowDonation] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="  min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Team Profiles
      </h1>
      {/* Cards Container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {users.map((user, index) => (
            <Card
              bgImg={img}
              user={user}
              key={index}
              setShowDonation={setShowDonation}
              setSelectedUser={setSelectedUser}
              className="transform transition-transform hover:scale-105"
            />
          ))}
        </div>
      </div>
      {showDonation && (
        <DonationModel
          showDonation={showDonation}
          setShowDonation={setShowDonation}
          userInfo={selectedUser}
        />
      )}
    </div>
  );
}

export default App;
