import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import OnboardingScreens from './screens/Onboarding';
import Dashboard from './screens/Dashboard';
import TransportScreens from './screens/Transport';
import ParkingScreens from './screens/Parking';
import AccommodationScreens from './screens/Accommodation';
import ReligiousScreens from './screens/Religious';
import UtilityScreens from './screens/Utility';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Bottom Navigation Component
const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Hide on onboarding, login, splash, map views, etc.
  const hiddenPaths = ['/', '/login', '/guest', '/qr', '/sos', '/parking/nav', '/transport/map'];
  if (hiddenPaths.includes(location.pathname)) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1c1917] border-t border-stone-200 dark:border-stone-800 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16 px-2">
        <button 
          onClick={() => navigate('/home')}
          className={`flex flex-col items-center justify-center w-full h-full gap-1 ${location.pathname === '/home' ? 'text-primary' : 'text-stone-400 dark:text-stone-500'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${location.pathname === '/home' ? 'filled' : ''}`}>home</span>
          <span className="text-xs font-bold">Home</span>
        </button>
        
        <button 
          onClick={() => navigate('/transport')}
          className={`flex flex-col items-center justify-center w-full h-full gap-1 ${location.pathname.includes('/transport') ? 'text-primary' : 'text-stone-400 dark:text-stone-500'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${location.pathname.includes('/transport') ? 'filled' : ''}`}>commute</span>
          <span className="text-xs font-medium">Transport</span>
        </button>

        <button 
          onClick={() => navigate('/parking')}
          className={`relative flex flex-col items-center justify-center w-full h-full gap-1 ${location.pathname.includes('/parking') ? 'text-primary' : 'text-stone-400 dark:text-stone-500'}`}
        >
           {location.pathname.includes('/parking') && <div className="absolute -top-1 w-8 h-1 bg-primary rounded-b-full"></div>}
          <span className={`material-symbols-outlined text-[28px] ${location.pathname.includes('/parking') ? 'filled' : ''}`}>local_parking</span>
          <span className="text-xs font-medium">Parking</span>
        </button>

        <button 
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center justify-center w-full h-full gap-1 ${location.pathname === '/profile' ? 'text-primary' : 'text-stone-400 dark:text-stone-500'}`}
        >
          <span className={`material-symbols-outlined text-[28px] ${location.pathname === '/profile' ? 'filled' : ''}`}>account_circle</span>
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-main dark:text-white font-display">
        <Routes>
          {/* Onboarding */}
          <Route path="/" element={<OnboardingScreens.LanguageSelection />} />
          <Route path="/login" element={<OnboardingScreens.Login />} />
          <Route path="/guest" element={<OnboardingScreens.GuestWelcome />} />
          
          {/* Main Dashboard */}
          <Route path="/home" element={<Dashboard />} />
          <Route path="/profile" element={<OnboardingScreens.Profile />} />
          
          {/* Transport & Maps */}
          <Route path="/transport" element={<TransportScreens.TransportHome />} />
          <Route path="/transport/map" element={<TransportScreens.TransportMap />} />
          <Route path="/shuttle" element={<TransportScreens.ShuttleRoutes />} />
          
          {/* Parking System */}
          <Route path="/parking" element={<ParkingScreens.SmartParking />} />
          <Route path="/parking/details" element={<ParkingScreens.ParkingDetails />} />
          <Route path="/parking/book" element={<ParkingScreens.BookParking />} />
          <Route path="/parking/pass" element={<ParkingScreens.ParkingPass />} />
          <Route path="/parking/nav" element={<ParkingScreens.Navigation />} />
          
          {/* Accommodation */}
          <Route path="/stay" element={<AccommodationScreens.List />} />
          <Route path="/stay/details" element={<AccommodationScreens.Details />} />
          
          {/* Religious & Events */}
          <Route path="/darshan/live" element={<ReligiousScreens.LiveDarshan />} />
          <Route path="/darshan/recorded" element={<ReligiousScreens.RecordedDarshan />} />
          <Route path="/schedule" element={<ReligiousScreens.EventSchedule />} />
          <Route path="/dates" element={<ReligiousScreens.SnanDates />} />
          <Route path="/temple" element={<ReligiousScreens.TempleInfo />} />
          
          {/* Utility & Safety */}
          <Route path="/sos" element={<UtilityScreens.EmergencySOS />} />
          <Route path="/offline" element={<UtilityScreens.OfflineMode />} />
          <Route path="/alerts" element={<UtilityScreens.AlertsCenter />} />
          <Route path="/feedback" element={<UtilityScreens.Feedback />} />
          <Route path="/feedback/confirm" element={<UtilityScreens.FeedbackConfirmation />} />
          <Route path="/dos-donts" element={<UtilityScreens.DosDonts />} />
          <Route path="/guide" element={<UtilityScreens.TravelGuide />} />
          <Route path="/qr" element={<UtilityScreens.QRScanner />} />
        </Routes>
        <BottomNav />
      </div>
    </HashRouter>
  );
}