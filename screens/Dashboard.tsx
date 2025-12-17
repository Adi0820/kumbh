import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1C1917] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FFF8F0]/95 dark:bg-[#1C1917]/95 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b border-orange-100 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full border border-orange-200 dark:border-orange-800 text-orange-600"><span className="material-symbols-outlined">temple_hindu</span></div>
          <div>
            <h1 className="text-lg font-bold text-[#431407] dark:text-white leading-tight">Namaste, Pilgrim</h1>
            <div className="flex items-center gap-1 text-xs font-medium text-stone-500"><span className="material-symbols-outlined text-[14px]">thermostat</span> 24°C • Nasik</div>
          </div>
        </div>
        <div className="flex gap-2">
           <button onClick={() => navigate('/alerts')} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-orange-600"><span className="material-symbols-outlined">notifications</span></button>
           <button onClick={() => navigate('/')} className="px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-bold flex items-center gap-1">En/Hi <span className="material-symbols-outlined text-sm">translate</span></button>
        </div>
      </header>

      <div className="p-4 flex flex-col gap-5">
        {/* Alert Banner */}
        <div onClick={() => navigate('/alerts')} className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900 rounded-2xl relative overflow-hidden active:scale-[0.98] transition-transform">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl -mr-6 -mt-6"></div>
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>
              <h3 className="font-bold text-orange-900 dark:text-orange-200">Crowd Alert: Ram Ghat</h3>
            </div>
            <p className="text-sm text-orange-800/80 dark:text-orange-300/80 font-medium">Very crowded. Please use Sita Ghat for safer bathing.</p>
          </div>
        </div>

        {/* Live Snan Card */}
        <div onClick={() => navigate('/darshan/live')} className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-stone-100 dark:border-stone-800 group active:scale-[0.98] transition-transform">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdVKkN1efMp8znFyETtEOFC51En8lwO4Dc4udYpNUgXTOh3g2qJY5gArRNlGGqfjJVtPXqf1rtEHkciSuVAce8UM8M6PrFlEEh_dEARy0vCpXdC4Kqf-xWbJaz8Dec6rAnb4d-HvkHcZVg9FIwpNOCenlxWdzcU6yo6-wHeh2IMQVG8VpNfQSSgnap93N_jOwn3usxT5x2F_6ENFq2GE8cBUpvbdYtiRT0XyFKnCu06zz8_KB9yYYvQPcPLdupFLkx-jMwzkRTQ9w" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Live Darshan" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border border-emerald-400/30">
            <span className="material-symbols-outlined text-[10px] animate-pulse">circle</span> OPEN
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-xs font-medium text-orange-100 mb-1">Friday, 24th Jan</p>
            <h2 className="text-2xl font-bold leading-tight drop-shadow-md">Mauni Amavasya Snan</h2>
          </div>
        </div>

        {/* Info Tiles */}
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-orange-50/50 dark:bg-stone-800/50 border border-orange-100 dark:border-stone-700 p-3 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-orange-600"><span className="material-symbols-outlined">schedule</span></div>
              <div><p className="text-[10px] text-stone-500 font-bold uppercase">TIMING</p><p className="text-sm font-bold">04:00 AM - 06:00 PM</p></div>
           </div>
           <div className="bg-sky-50/50 dark:bg-stone-800/50 border border-sky-100 dark:border-stone-700 p-3 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-sky-600"><span className="material-symbols-outlined">water_drop</span></div>
              <div className="flex-1"><p className="text-[10px] text-stone-500 font-bold uppercase">WATER LEVEL</p><div className="flex justify-between items-center"><p className="text-sm font-bold">Normal</p><div className="h-1 w-10 bg-sky-200 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-sky-500"></div></div></div></div>
           </div>
        </div>

        {/* Crowd Density Card */}
        <div className="bg-gradient-to-br from-[#fff7ed] to-[#fffbeb] dark:from-[#3f2e18] dark:to-[#1c1917] p-5 rounded-3xl border border-orange-100 dark:border-stone-800 relative overflow-hidden flex justify-between items-center shadow-sm">
           <div className="absolute right-0 top-0 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl"></div>
           <div>
             <p className="text-orange-800 dark:text-orange-200 text-xs font-bold uppercase tracking-wider mb-1">Crowd Density</p>
             <h2 className="text-3xl font-bold text-[#431407] dark:text-white">Moderate</h2>
             <div className="flex gap-1 mt-2">
               <div className="h-1.5 w-6 rounded-full bg-green-500/30"></div>
               <div className="h-1.5 w-6 rounded-full bg-orange-500 animate-pulse"></div>
               <div className="h-1.5 w-6 rounded-full bg-red-500/30"></div>
             </div>
           </div>
           <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/40 rounded-full flex items-center justify-center text-orange-600 border-4 border-white dark:border-stone-800 shadow-md relative z-10">
             <span className="material-symbols-outlined text-3xl">groups</span>
           </div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h3 className="text-lg font-bold mb-3 px-1">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Navigate\nto Ghats", icon: "near_me", color: "indigo", link: "/transport/map" },
              { label: "Find\nParking", icon: "local_parking", color: "teal", link: "/parking" },
              { label: "Lost &\nFound", icon: "person_search", color: "pink", link: "/alerts" },
              { label: "Official\nHelpline", icon: "support_agent", color: "emerald", link: "/guide" },
            ].map((action, idx) => (
              <button key={idx} onClick={() => navigate(action.link)} className="bg-white dark:bg-stone-800 p-4 rounded-3xl shadow-[0_4px_0_#cbd5e1] dark:shadow-[0_4px_0_#44403c] border-2 border-slate-100 dark:border-stone-700 active:shadow-none active:translate-y-1 transition-all flex flex-col items-center justify-center gap-3 h-36">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${action.color}-50 dark:bg-${action.color}-900/20 text-${action.color}-600`}>
                  <span className="material-symbols-outlined text-3xl">{action.icon}</span>
                </div>
                <span className="text-center font-bold text-sm whitespace-pre-line leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SOS Button */}
        <button onClick={() => navigate('/sos')} className="w-full bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-4 shadow-[0_6px_0_#991b1b] active:shadow-none active:translate-y-1.5 transition-all flex items-center justify-between text-white group mt-2">
           <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 shadow-lg animate-pulse-slow">
               <span className="material-symbols-outlined text-3xl font-bold">sos</span>
             </div>
             <div className="text-left">
               <h3 className="text-xl font-bold">SOS EMERGENCY</h3>
               <p className="text-red-100 text-sm">Tap for immediate help</p>
             </div>
           </div>
           <span className="material-symbols-outlined text-3xl group-active:translate-x-1 transition-transform">chevron_right</span>
        </button>
        
        {/* Extra Space for Bottom Nav */}
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;