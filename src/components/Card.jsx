const Facebook = "/Facebook.svg";
const Instagram = "/Instagram.svg";
const Linkedn = "/Linkedn.svg";
const Twitter = "/Twitter.svg";
const Youtube = "/Youtube.svg";

export default function Card({
  bgImg,
  user,
  setShowDonation,
  setSelectedUser,
}) {
  function handleClick(user) {
    setSelectedUser(user);
    setShowDonation(true);
  }
  return (
    <div>
      <div className="w-[408px] h-[625px] bg-[#FBF4FA] rounded-2xl flex flex-col items-center justify-start shadow-lg">
        <img src={bgImg} alt="" className="w-full h-[211px]" />
        {/* Card Content */}
        <div className=" relative  flex flex-col items-center  w-full h-full   text-center gap-6">
          {/* Personal Image */}
          <img
            src={user.personalImg}
            alt="Profile"
            className="  absolute top-0 m-auto -translate-y-1/2  w-[145.79px] h-[145.79px] rounded-full object-cover "
          />
          {/* Name and job */}
          <div className="text-center  font-poppins text-[#111827] mt-22">
            <h2 className="text-2xl 4 font-poppins font-medium">{user.name}</h2>
            <h3 className="text-[14px] 4 font-poppins text-[#3D7793]">
              {user.jobTitle}
            </h3>
          </div>
          {/* Description */}
          <p className="text-[14px] text-[#111827]">{user.description}</p>
          {/* Scoial Media */}

          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href={user.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="hover:text-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
              />
              <span className="sr-only">Facebook profile</span>
            </a>
            <a
              href={user.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="hover:text-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
              />
              <span className="sr-only">Instagram profile</span>
            </a>
            <a
              href={user.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkedn}
                alt="LinkedIn"
                className="hover:text-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
              />
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <a
              href={user.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Twitter}
                alt="Twitter"
                className="hover:text-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
              />
              <span className="sr-only">Twitter profile</span>
            </a>
            <a
              href={user.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Youtube}
                alt="YouTube"
                className="hover:text-gray-400 transition duration-300 transform hover:scale-110 cursor-pointer"
              />
              <span className="sr-only">YouTube channel</span>
            </a>
          </div>
          <button
            className="bg-[#3D7793] py-2.5 px-6 hover:bg-[#4a5e68] translate-2 cursor-pointer rounded-md  "
            onClick={() => handleClick(user)}
          >
            Buy me a coffee
          </button>
        </div>
      </div>
    </div>
  );
}
