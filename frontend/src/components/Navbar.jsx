import React, { useState } from "react";
import { Bell, User, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-greenDeep text-text p-4 rounded-lg mb-6">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 bg-greenDeep" />
        </button>

        <div></div>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden lg:flex items-center gap-4">
          <a href="Dashboard" className="hover:underline  text-text">Dashboard</a>
          <span className="mx-1">•</span>
          <a href="Expenses" className="hover:underline  text-text">Expenses</a>
          <span className="mx-1">•</span>
          <a href="Analytics" className="hover:underline  text-text">Analytics</a>
          <span className="mx-1">•</span>
          <a href="Savings" className="hover:underline  text-text">Savings</a>
          <span className="mx-1">•</span>
          <a href="Budgets" className="hover:underline  text-text">Budgets</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Bell 
            className="w-6 h-6 cursor-pointer hover:text-gray-300"
            onClick={() => { setNotificationsOpen(true); setProfileOpen(false); }}
          />
          <User 
            className="w-6 h-6 cursor-pointer hover:text-gray-300"
            onClick={() => { setProfileOpen(true); setNotificationsOpen(false); }}
          />
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 lg:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-greenDeep shadow-lg p-4">
            <X 
              className="w-6 h-6 cursor-pointer absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="mt-8 space-y-4">
              <a href="Dashboard" className="block hover:underline">Dashboard</a>
              <a href="Expenses" className="block hover:underline">Expenses</a>
              <a href="Analytics" className="block hover:underline">Analytics</a>
              <a href="Savings" className="block hover:underline">Savings</a>
              <a href="Budgets" className="block hover:underline">Budgets</a>
            </nav>
          </div>
        </div>
      )}

      {/* Notification Panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-greenDeep shadow-lg p-4 transition-transform ${
          isNotificationsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setNotificationsOpen(false)}
          />
        </div>
        <div className="mt-4 space-y-4">
          <p className="p-2 bg-greenMedium bg-opacity-30 rounded">🔔 New transaction added</p>
          <p className="p-2 bg-greenMedium bg-opacity-30 rounded">📈 Your analytics report is ready</p>
          <p className="p-2 bg-greenMedium bg-opacity-30 rounded">💰 You reached 80% of your savings goal!</p>
        </div>
      </div>

      {/* Profile Panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-greenDeep shadow-lg p-4 transition-transform ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Profile</h2>
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setProfileOpen(false)}
          />
        </div>
        <div className="mt-4 text-center">
          <p className="font-semibold text-lg">👤 Haripriya</p>
          <p className="text-sm text-gray-500">priyagr0104@gmail.com</p>
        </div>
        <div className="mt-6 space-y-2">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
            My Profile
          </button>
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
