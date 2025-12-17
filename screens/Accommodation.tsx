import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBF2] dark:bg-[#1C1917] pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center sticky top-0 bg-[#FFFBF2] dark:bg-[#1C1917] z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-xl font-bold">Accommodation</h1><p className="text-xs text-stone-500">आवास व्यवस्था</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">bed</span></div>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div><p className="text-lg font-medium text-stone-800 dark:text-white">Where would you like to stay?</p><p className="text-sm text-stone-500">Select a category to view available options.</p></div>
        <div className="flex flex-col gap-4">
          <button className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-stone-100 dark:border-stone-700 flex items-center gap-5 text-left active:scale-[0.98] transition-all hover:shadow-md group">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-3xl">king_bed</span></div>
            <div className="flex-1"><h3 className="text-lg font-bold">Hotels & Lodges</h3><p className="text-sm text-stone-500">होटल और लॉज</p><p className="text-xs text-blue-600 mt-1 font-medium">Private rooms, AC available</p></div>
            <div className="w-8 h-8 rounded-full bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-400"><span className="material-symbols-outlined text-xl">chevron_right</span></div>
          </button>
          <button className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-stone-100 dark:border-stone-700 flex items-center gap-5 text-left active:scale-[0.98] transition-all hover:shadow-md group">
            <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-3xl">temple_hindu</span></div>
            <div className="flex-1"><h3 className="text-lg font-bold">Dharamshala</h3><p className="text-sm text-stone-500">धर्मशाला</p><p className="text-xs text-orange-600 mt-1 font-medium">Spiritual community stays</p></div>
            <div className="w-8 h-8 rounded-full bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-400"><span className="material-symbols-outlined text-xl">chevron_right</span></div>
          </button>
          <button onClick={() => navigate('/stay/details')} className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-stone-100 dark:border-stone-700 flex items-center gap-5 text-left active:scale-[0.98] transition-all hover:shadow-md group">
            <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-3xl">camping</span></div>
            <div className="flex-1"><h3 className="text-lg font-bold">Kumbh Tent City</h3><p className="text-sm text-stone-500">कुंभ टेंट सिटी</p><p className="text-xs text-green-600 mt-1 font-medium">Near the Ghats experience</p></div>
            <div className="w-8 h-8 rounded-full bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-400"><span className="material-symbols-outlined text-xl">chevron_right</span></div>
          </button>
        </div>
        
        <div className="mt-auto bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-4 rounded-xl flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-orange-900/30 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-orange-500">support_agent</span></div>
          <div className="flex-1"><p className="text-sm font-bold">Need help booking?</p><p className="text-xs text-stone-500">Call the Kumbh support helpline.</p></div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-bold shadow-sm">Call</button>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBF2] dark:bg-[#1C1917] pb-32">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center sticky top-0 bg-[#FFFBF2] dark:bg-[#1C1917] z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-xl font-bold">Accommodation</h1><p className="text-xs text-stone-500">आवास विवरण</p></div>
        </div>
        <button className="w-10 h-10 rounded-full bg-transparent hover:bg-stone-100 flex items-center justify-center"><span className="material-symbols-outlined">share</span></button>
      </header>
      
      <div className="px-4 mt-2">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md group">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYnpm2ZpCvUGpK0P_taKkjVNCjGt-LqiYFk7FF6q1HnatmeMUDmvl-gj6wBO02lVyq8AfO2AFiKMMv14fMKdO-xn2tEboZgeKfBzBegdxl1Nk5Td48gqmeLnghkKw1SOyxA81YIe0lG26k6DaELOVPo1JALOI4951SAW6cCgAYBFfynq3uArJjchcTVXZfaVpBlNNqPcTpofCj-usHLN2guw2pBbOVMrdfth0L-tUzyZQ2c45gOVP5r0DEOm5EghQ9xcNhZYLkYYE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Tent"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm text-black"><span className="material-symbols-outlined text-base text-green-600">verified</span> Verified Stay</span>
            <button className="bg-black/40 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-base">photo_library</span> 12 Photos</button>
          </div>
        </div>
      </div>

      <div className="px-6 mt-5 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div><h2 className="text-2xl font-bold leading-tight">Ganga Darshan Tents</h2><p className="text-stone-500 text-sm mt-1">Sector 4, Ram Ghat • Nashik</p></div>
          <div className="flex flex-col items-end"><div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg"><span className="material-symbols-outlined text-yellow-700 text-lg filled">star</span><span className="font-bold text-yellow-900 text-sm">4.8</span></div><span className="text-xs text-stone-500 mt-1">(128 reviews)</span></div>
        </div>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {["Near River", "Senior Friendly", "Medical Aid"].map((tag, i)=>(<span key={i} className="px-3 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs font-medium border border-stone-200 dark:border-stone-700 whitespace-nowrap">{tag}</span>))}
        </div>
        
        <hr className="border-stone-100 dark:border-stone-800"/>
        
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">Amenities <span className="text-xs font-normal text-stone-500 px-2 py-0.5 bg-stone-100 rounded-full">Available</span></h3>
          <div className="grid grid-cols-4 gap-4">
            {[{i:"wifi",l:"Free WiFi", c:"blue"},{i:"restaurant",l:"Satvik Food", c:"orange"},{i:"hot_tub",l:"Hot Water", c:"teal"},{i:"medical_services",l:"First Aid", c:"purple"}].map((a,i)=>(
              <div key={i} className="flex flex-col items-center gap-2"><div className={`w-12 h-12 rounded-full bg-${a.c}-50 dark:bg-${a.c}-900/20 text-${a.c}-600 flex items-center justify-center`}><span className="material-symbols-outlined">{a.i}</span></div><span className="text-[10px] font-medium text-center text-stone-500">{a.l}</span></div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#2c2b18] border border-stone-100 dark:border-stone-700 p-4 rounded-xl flex items-center gap-4 shadow-sm">
          <div className="relative"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPCaOlxoWI3LTj438cWuXB1j_9efOgbXDDRE8jDgNuodEQqdATN6d-DVZk99AtAIrO6o-Xmbp-LSC7MgdkPnDZC-FaymZPYrlk621yrzjGyMIFNzkQl7PxAkKnVSqsvK2cYyt7j1kgh8gvhQY4PKH_ZpTMXS2EiJYtbkuoF4OaHpYAvrcn8ped7U-Obmnw5Wbav-kJ87BCVrMUtS3VHoAJpKFLbQDgEkUxdQjZJ7C1bQ2Z1QfPIgOHn_x76pQsx-niRmHFMd5zixo" className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400" alt="Host"/><span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span></div>
          <div className="flex-1"><p className="text-sm font-bold">Rajesh Sharma</p><p className="text-xs text-stone-500">Camp Manager • Speaks Hindi, English</p></div>
          <button className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center"><span className="material-symbols-outlined">call</span></button>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">About this stay</h3>
          <p className="text-stone-500 text-sm leading-relaxed">Located just 5 minutes walk from Ram Ghat, our tent city offers a peaceful and clean environment for pilgrims. We provide separate areas for meditation and 24/7 security for your safety.</p>
          <button className="text-yellow-600 mt-2 text-sm font-bold flex items-center gap-1">Read more <span className="material-symbols-outlined text-sm">expand_more</span></button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2c2b18] border-t border-stone-200 dark:border-stone-700 px-6 py-4 shadow-lg z-30 pb-safe">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col"><span className="text-xs text-stone-500 font-medium">Total Price</span><div className="flex items-baseline gap-1"><span className="text-xl font-bold">₹1,200</span><span className="text-xs text-stone-500">/ night</span></div></div>
          <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2"><span>Book Now</span><span className="material-symbols-outlined text-lg">arrow_forward</span></button>
        </div>
      </div>
    </div>
  );
};

const AccommodationScreens = { List, Details };
export default AccommodationScreens;