import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransportHome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#1C1917] pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center bg-[#FFF8F0] dark:bg-[#1C1917] sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-2xl font-bold">Transport</h1><p className="text-xs text-stone-500">ऑटो और टैक्सी खोजें</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">commute</span></div>
      </header>

      <div className="p-6 flex flex-col gap-6">
        <div className="bg-white dark:bg-[#2c2b18] p-5 rounded-[1.5rem] shadow-soft border border-stone-100 dark:border-stone-700 flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 rounded-full flex items-center justify-center text-2xl shrink-0"><span className="material-symbols-outlined">my_location</span></div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">PICKUP LOCATION</span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">GPS Active</span>
            </div>
            <h3 className="text-xl font-bold leading-tight">Ram Ghat, Sector 4</h3>
            <p className="text-sm text-stone-500 mt-1">Near Temple Entrance 2 • Nashik</p>
            <button className="text-xs font-bold text-blue-600 mt-2 flex items-center gap-1">Change Location <span className="material-symbols-outlined text-sm">edit</span></button>
          </div>
        </div>

        <div className="flex justify-between items-center"><h2 className="text-lg font-bold">Available Vehicles</h2><span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">High Demand</span></div>

        <div className="flex flex-col gap-4">
          {/* Rickshaw Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-[#363522] dark:to-[#2c2b18] p-5 rounded-3xl border-l-4 border-l-yellow-400 shadow-sm relative overflow-hidden">
             <div className="flex justify-between items-start z-10 relative">
               <div className="flex gap-4">
                 <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black text-3xl shadow-sm"><span className="material-symbols-outlined">electric_rickshaw</span></div>
                 <div>
                   <h3 className="text-xl font-bold">Auto Rickshaw</h3>
                   <p className="text-sm text-stone-500">ऑटो रिक्शा</p>
                   <div className="flex gap-2 mt-2"><span className="text-xs bg-white/50 border px-2 py-1 rounded">~ 3 min away</span><span className="text-xs text-stone-500 px-1 py-1">4 seats</span></div>
                 </div>
               </div>
               <div className="text-right"><p className="text-lg font-bold">₹15<span className="text-sm text-stone-500 font-normal">/km</span></p><p className="text-xs text-stone-400">Est. Fare</p></div>
             </div>
             <button className="w-full mt-5 bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"><span className="material-symbols-outlined">hail</span> Request Ride</button>
          </div>

          {/* Taxi Card */}
          <div className="bg-white dark:bg-[#2c2b18] p-5 rounded-3xl border-l-4 border-l-stone-800 dark:border-l-stone-500 shadow-sm relative overflow-hidden">
             <div className="flex justify-between items-start z-10 relative">
               <div className="flex gap-4">
                 <div className="w-14 h-14 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center text-stone-700 dark:text-stone-300 text-3xl shadow-sm"><span className="material-symbols-outlined">local_taxi</span></div>
                 <div>
                   <h3 className="text-xl font-bold">City Taxi</h3>
                   <p className="text-sm text-stone-500">सिटी टैक्सी</p>
                   <div className="flex gap-2 mt-2"><span className="text-xs bg-stone-50 dark:bg-stone-800 border dark:border-stone-700 px-2 py-1 rounded">~ 8 min away</span><span className="text-xs text-stone-500 px-1 py-1">4+ seats</span></div>
                 </div>
               </div>
               <div className="text-right"><p className="text-lg font-bold">₹22<span className="text-sm text-stone-500 font-normal">/km</span></p><p className="text-xs text-stone-400">Est. Fare</p></div>
             </div>
             <button className="w-full mt-5 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white border border-stone-200 dark:border-stone-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"><span className="material-symbols-outlined">hail</span> Request Ride</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3"><h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider">Nearby Stands</h3><button onClick={() => navigate('/transport/map')} className="text-xs font-bold text-yellow-600 underline">View Map</button></div>
          <div className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] shadow-sm border border-stone-100 dark:border-stone-700 overflow-hidden divide-y divide-stone-100 dark:divide-stone-700">
            <button className="w-full p-4 flex justify-between items-center text-left hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 rounded-full flex items-center justify-center"><span className="material-symbols-outlined">local_parking</span></div>
                <div><p className="font-bold">Ram Ghat Auto Stand</p><p className="text-xs text-stone-500">150m • Walkable • <span className="text-green-600">Autos Available</span></p></div>
              </div>
              <span className="material-symbols-outlined text-stone-400">directions</span>
            </button>
            <button className="w-full p-4 flex justify-between items-center text-left hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-100 dark:bg-stone-800 text-stone-500 rounded-full flex items-center justify-center"><span className="material-symbols-outlined">local_taxi</span></div>
                <div><p className="font-bold">Main Market Taxi Stand</p><p className="text-xs text-stone-500">400m • Near Bridge</p></div>
              </div>
              <span className="material-symbols-outlined text-stone-400">directions</span>
            </button>
          </div>
        </div>

        <button onClick={() => navigate('/shuttle')} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"><span className="material-symbols-outlined">directions_bus</span> View Shuttle Bus Routes</button>
      </div>
    </div>
  );
};

const TransportMap = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full relative bg-stone-100 dark:bg-stone-900 flex flex-col">
      <header className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-start pointer-events-none">
        <button onClick={() => navigate(-1)} className="pointer-events-auto w-12 h-12 bg-white dark:bg-stone-800 rounded-full shadow-md flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
        <div className="pointer-events-auto flex gap-2 overflow-x-auto max-w-[70%] hide-scrollbar">
          <button className="bg-white dark:bg-stone-800 px-4 py-2 rounded-full shadow text-sm font-bold whitespace-nowrap">Filters</button>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-full shadow text-sm font-bold whitespace-nowrap flex items-center gap-1"><span className="material-symbols-outlined text-base">directions_bus</span> Shuttle</button>
          <button className="bg-white dark:bg-stone-800 px-4 py-2 rounded-full shadow text-sm font-bold whitespace-nowrap">Auto</button>
        </div>
      </header>
      
      {/* Mock Map Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full bg-[#f0f0f0] dark:bg-[#202020]" xmlns="http://www.w3.org/2000/svg">
           <path d="M-100 200 C 100 200, 200 150, 400 300 S 600 400, 900 350" fill="none" stroke="#e5e7eb" strokeWidth="30" className="dark:stroke-stone-700"/>
           <path d="M200 -50 L 250 800" fill="none" stroke="#e5e7eb" strokeWidth="25" className="dark:stroke-stone-700"/>
           <circle cx="50%" cy="50%" r="10" fill="#3b82f6" stroke="white" strokeWidth="3" />
           <circle cx="50%" cy="50%" r="40" fill="#3b82f6" fillOpacity="0.2" className="animate-ping" />
        </svg>
        {/* Map Markers */}
        <div className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
           <div className="w-10 h-10 bg-emerald-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white"><span className="material-symbols-outlined text-lg">directions_bus</span></div>
           <div className="bg-white dark:bg-stone-800 text-xs font-bold px-2 py-1 rounded shadow mt-1 whitespace-nowrap">Shuttle Stop A</div>
        </div>
      </div>

      <div className="mt-auto bg-white dark:bg-[#23220f] rounded-t-[2rem] p-6 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-10">
        <div className="w-12 h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full mx-auto mb-6"></div>
        <div className="flex justify-between items-start mb-6">
          <div><h2 className="text-xl font-bold">Nearest Pickup Point</h2><p className="text-sm text-stone-500">Shuttle Bus Stop A • Ram Ghat Road</p></div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Arriving in 5m</div>
        </div>
        <button className="w-full bg-[#f9f506] hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 mb-4"><span className="material-symbols-outlined">navigation</span> Navigate to Pickup Point</button>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-xl border border-stone-100 dark:border-stone-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-stone-500">directions_walk</span></div>
            <div><p className="text-xs text-stone-500">Walking</p><p className="font-bold">5 Mins</p></div>
          </div>
          <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-xl border border-stone-100 dark:border-stone-700 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-stone-500">confirmation_number</span></div>
            <div><p className="text-xs text-stone-500">Ticket</p><p className="font-bold">Free</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShuttleRoutes = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-4 flex justify-between items-center bg-background-light dark:bg-background-dark border-b border-stone-100 dark:border-stone-800 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-xl font-bold">Shuttle Routes</h1><p className="text-xs text-stone-500">शटल बस मार्ग</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">directions_bus</span></div>
      </header>
      <div className="p-5 flex flex-col gap-5">
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300"><span className="material-symbols-outlined">schedule</span></div>
          <div><p className="text-sm font-bold text-blue-900 dark:text-blue-200">Running Every 15 Mins</p><p className="text-xs text-blue-700 dark:text-blue-300">Free service for seniors (60+)</p></div>
        </div>
        
        <div className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-stone-100 dark:border-stone-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Active Now • चल रही है</div>
          <div className="flex justify-between items-start mb-4">
            <div><span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Route No.</span><div className="flex items-center gap-2 mt-1"><span className="text-3xl font-bold">101</span><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded">Red Line</span></div></div>
            <div className="text-right mt-5"><p className="text-sm text-stone-500">Next Bus</p><p className="text-lg font-bold">5 mins</p></div>
          </div>
          <div className="relative pl-4 border-l-2 border-dashed border-stone-200 dark:border-stone-700 space-y-6 my-2">
            <div className="relative"><div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-yellow-400 bg-white"></div><p className="font-bold">Nashik Road Station</p><p className="text-xs text-stone-500">Railway Station • बस अड्डा</p></div>
            <div className="relative"><div className="absolute -left-[19px] top-2 w-2 h-2 rounded-full bg-stone-300"></div><p className="text-sm font-medium text-stone-500">CBS Stand</p></div>
            <div className="relative"><div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-400 shadow-glow"></div><p className="font-bold">Ram Kund (Ghat)</p><p className="text-xs text-stone-500">Main Bathing Area • राम कुंड</p></div>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-700 flex gap-3">
            <button onClick={() => navigate('/transport/map')} className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-xl shadow-sm text-sm flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">map</span> View Map</button>
            <button className="flex-1 bg-stone-100 dark:bg-stone-800 font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2"><span className="material-symbols-outlined text-lg">schedule</span> Timetable</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransportScreens = { TransportHome, TransportMap, ShuttleRoutes };
export default TransportScreens;