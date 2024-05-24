import React from "react";

const DownloadApp: React.FC = () => {
  return (
    <section className="relative px-6 md:px-20 py-10 h-[500px]">
      <div className="container mx-auto">
        <h2 className="text-[#263238] text-3xl md:text-4xl font-semibold">
          Download our app now
        </h2>
        <div className="relative z-10 mt-10 flex bg-white shadow-sm border rounded-md flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col md:flex-row md:mr-10">
            <img
              src="../assets/download-app-img.png"
              alt="App Screens"
              className="w-64 md:w-80"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-20 text-left">
            <span className="mb-4 w-[70%] hidden md:block">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </span>
            <div className="flex justify-center md:justify-start gap-4 py-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/play-store.png"
                  alt="Google Play"
                  className="w-40 h-12 object-cover"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/app-store.png"
                  alt="App Store"
                  className="w-40 h-12 object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
