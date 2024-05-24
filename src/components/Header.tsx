import React from "react";


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white flex justify-between items-center px-6 py-6 shadow-md z-10">
      <div className="font-bold text-2xl">
        <img src="../assets/bhive-logo.png" alt="company_logo" height="30" width="140" />
      </div>
     <div className="block md:hidden border px-2.5 py-2 rounded-sm border-yellow-400">
     <button className="block md:hidden">
        <img src="../assets/call.png" alt="Contact" />
      </button>
     </div>
    </header>
  );
};

export default Header;
