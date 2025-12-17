import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SmartParking = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 flex flex-col pb-24">
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"><span className="material-symbols-outlined">arrow_back</span></button>
          <h1 className="text-xl font-bold">Smart Parking</h1>
        </div>
        <button className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold">En/Hi <span className="material-symbols-outlined text-sm">translate</span></button>
      </header>
      <div className="bg-blue-50 dark:bg-blue-900/20 px-4 py-4 border-b border-blue-100 dark:border-blue-800/50 flex items-center gap-3 text-blue-800 dark:text-blue-300">
        <div className="bg-blue-100 dark:bg-blue-800 p-1.5 rounded-full"><span className="material-symbols-outlined text-xl filled">my_location</span></div>
        <span className="text-sm font-semibold">Near Current Location (Panchvati)</span>
      </div>
      
      <div className="flex flex-col gap-6 p-4">
        {/* Available Card */}
        <div onClick={() => navigate('/parking/details')} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-slate-100 dark:border-slate-700 overflow-hidden active:scale-[0.98] transition-transform">
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div><h2 className="text-xl font-bold">Tapovan Parking A</h2><div className="flex items-center gap-1 text-slate-500 text-sm mt-1"><span className="material-symbols-outlined text-lg">near_me</span> 0.8 km away</div></div>
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100"><span className="material-symbols-outlined text-2xl">local_parking</span></div>
            </div>
            <div className="h-px bg-slate-100 dark:bg-slate-700"></div>
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <span className="material-symbols-outlined filled text-xl text-green-600">check_circle</span><span className="font-bold text-green-700 dark:text-green-400">Available</span>
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-[0_4px_0_#1d4ed8] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined">directions</span> Navigate</button>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 px-5 py-2 flex items-center gap-2 text-sm font-semibold text-green-800 dark:text-green-300 border-t border-green-100 dark:border-green-800/30">
            <span className="material-symbols-outlined text-base">info</span> ~120 spots remaining
          </div>
        </div>

        {/* Filling Fast Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-orange-200 dark:border-orange-800/50 overflow-hidden">
          <div className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div><h2 className="text-xl font-bold">Sadhugram Ground</h2><div className="flex items-center gap-1 text-slate-500 text-sm mt-1"><span className="material-symbols-outlined text-lg">near_me</span> 1.5 km away</div></div>
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100"><span className="material-symbols-outlined text-2xl">local_parking</span></div>
            </div>
            <div className="h-px bg-slate-100 dark:bg-slate-700"></div>
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                <span className="material-symbols-outlined filled text-xl text-orange-600">warning</span><span className="font-bold text-orange-700 dark:text-orange-400">Filling Fast</span>
              </div>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold shadow-[0_4px_0_#1d4ed8] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined">directions</span> Navigate</button>
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 px-5 py-2 flex items-center gap-2 text-sm font-semibold text-orange-800 dark:text-orange-300 border-t border-orange-100 dark:border-orange-800/30">
            <span className="material-symbols-outlined text-base">info</span> Only ~15 spots left
          </div>
        </div>
      </div>
    </div>
  );
};

const ParkingDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pb-32">
      <header className="sticky top-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700 flex items-center justify-between p-4 z-50">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-lg font-bold">Parking Details</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700"><span className="material-symbols-outlined">share</span></button>
      </header>
      
      <div className="p-4 flex flex-col gap-5">
        <div className="relative w-full aspect-[16/10] bg-blue-50 dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
           <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10"></div>
           <div className="absolute inset-0 flex items-center justify-center flex-col">
             <span className="relative flex h-full w-full justify-center items-center">
                <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-red-400 opacity-20"></span>
                <span className="material-symbols-outlined text-5xl text-red-600 drop-shadow-md z-10">location_on</span>
             </span>
             <div className="bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg -mt-2 z-10">Tapovan Gate</div>
           </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500"></div>
          <div className="flex justify-between items-start pl-2">
            <div><h2 className="text-xl font-bold">Tapovan Gate Parking</h2><p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-base">distance</span> 1.2 km from mela ground</p></div>
            <div className="text-right"><span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Open</span><p className="text-xs text-slate-400 mt-1">Zone A</p></div>
          </div>
          <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-4">
             <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
                <div className="text-blue-600 mb-1 flex justify-center gap-1 items-center font-bold text-xs uppercase"><span className="material-symbols-outlined text-lg">directions_car</span> 4-Wheeler</div>
                <div className="text-2xl font-bold">124 <span className="text-xs font-normal text-slate-500">avail</span></div>
             </div>
             <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl text-center">
                <div className="text-teal-600 mb-1 flex justify-center gap-1 items-center font-bold text-xs uppercase"><span className="material-symbols-outlined text-lg">two_wheeler</span> 2-Wheeler</div>
                <div className="text-2xl font-bold">85 <span className="text-xs font-normal text-slate-500">avail</span></div>
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700">
           <h3 className="font-bold flex items-center gap-2 mb-4"><span className="w-1 h-5 bg-orange-500 rounded-full"></span> Key Information</h3>
           <div className="space-y-4">
             <div className="flex gap-4 items-center">
               <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center"><span className="material-symbols-outlined">payments</span></div>
               <div><p className="text-xs text-slate-500">Parking Fee</p><p className="font-bold">Free for Pilgrims</p></div>
             </div>
             <div className="flex gap-4 items-center">
               <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><span className="material-symbols-outlined">schedule</span></div>
               <div><p className="text-xs text-slate-500">Operating Hours</p><p className="font-bold">24 Hours Open</p></div>
             </div>
           </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex gap-4 z-40 pb-safe">
         <button onClick={() => navigate('/parking/nav')} className="flex-1 bg-blue-50 text-blue-600 border border-blue-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2"><span className="material-symbols-outlined filled">near_me</span> Navigate</button>
         <button onClick={() => navigate('/parking/book')} className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_6px_0_#1e40af] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined">confirmation_number</span> Book Slot</button>
      </div>
    </div>
  );
};

const BookParking = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white pb-32">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700 p-4 flex gap-4 items-center">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700"><span className="material-symbols-outlined">arrow_back</span></button>
        <div><h1 className="text-xl font-bold">Book Parking</h1><div className="flex items-center gap-1 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Step 2 of 3</div></div>
      </header>
      
      <div className="p-5 flex flex-col gap-6 max-w-md mx-auto">
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border-2 border-blue-100 dark:border-slate-700 flex gap-4 items-center">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><span className="material-symbols-outlined filled">location_on</span></div>
          <div><span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded uppercase font-bold">Selected</span><h2 className="font-bold text-lg leading-tight">Tapovan Parking Zone A</h2><p className="text-xs text-slate-500">Near Ram Ghat (1.2 km)</p></div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex gap-2 items-center"><span className="material-symbols-outlined text-blue-600">directions_car</span> Select Vehicle</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="relative flex flex-col items-center justify-center gap-2 bg-white dark:bg-slate-800 border-b-[4px] border-2 border-blue-600 p-4 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600"><span className="material-symbols-outlined text-4xl">directions_car</span></div>
              <span className="text-blue-600 font-bold">Car / SUV</span>
              <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1"><span className="material-symbols-outlined text-xs font-bold block">check</span></div>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-slate-800 border-b-[4px] border-2 border-slate-200 dark:border-slate-700 p-4 rounded-2xl shadow-sm hover:bg-slate-50 transition-all text-slate-500">
              <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full"><span className="material-symbols-outlined text-4xl">two_wheeler</span></div>
              <span className="font-medium">Bike</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3 flex gap-2 items-center"><span className="material-symbols-outlined text-blue-600">calendar_clock</span> Date & Time</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="text-xs font-bold text-slate-500 uppercase">Arrival Date</label><input type="date" className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 font-bold mt-1 focus:ring-2 ring-blue-500 outline-none" defaultValue="2025-01-24" /></div>
            <div><label className="text-xs font-bold text-slate-500 uppercase">Start Time</label><input type="time" className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 font-bold mt-1 focus:ring-2 ring-blue-500 outline-none" defaultValue="09:00" /></div>
          </div>
          <div><label className="text-xs font-bold text-slate-500 uppercase">Duration</label>
            <div className="flex gap-3 mt-1 overflow-x-auto pb-2 no-scrollbar">
              <button className="flex-none px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md border-b-4 border-blue-800 active:border-b-0 active:translate-y-1">2 Hours</button>
              <button className="flex-none px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-b-4 border-slate-200 dark:border-slate-700 font-bold text-slate-600">4 Hours</button>
              <button className="flex-none px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-b-4 border-slate-200 dark:border-slate-700 font-bold text-slate-600">Full Day</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
          <h3 className="font-bold text-lg mb-4 flex justify-between">Billing Details <span className="text-xs bg-slate-100 px-2 py-1 rounded border">ID: #PKG-8821</span></h3>
          <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex justify-between"><span>Parking Fee (2 Hrs)</span><span className="font-bold text-slate-900 dark:text-white">₹40.00</span></div>
            <div className="flex justify-between"><span>Convenience Fee</span><span className="font-bold text-slate-900 dark:text-white">₹5.00</span></div>
          </div>
          <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
            <span className="font-bold text-lg text-slate-900 dark:text-white">Total to Pay</span>
            <span className="text-2xl font-bold text-blue-600">₹45.00</span>
          </div>
          
          <p className="text-xs font-bold text-slate-500 uppercase mt-4 mb-2">Payment Method</p>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-blue-600 bg-blue-50/50 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white"><span className="material-symbols-outlined text-xs">check</span></div>
              <div className="flex-1"><p className="font-bold">UPI (GPay, PhonePe)</p><p className="text-xs text-slate-500">Fast & Secure</p></div>
              <span className="material-symbols-outlined text-2xl text-blue-600">qr_code_scanner</span>
            </label>
            <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
              <span className="font-medium text-slate-700 dark:text-slate-200">Cash on Arrival</span>
              <span className="material-symbols-outlined text-2xl text-slate-400 ml-auto">payments</span>
            </label>
          </div>
        </div>

        <button onClick={() => navigate('/parking/pass')} className="w-full bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 px-6 flex items-center justify-between shadow-[0_6px_0_#15803d] active:shadow-none active:translate-y-1 transition-all group overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
           <div className="flex flex-col items-start"><span className="text-[10px] uppercase font-bold text-green-100">Total Amount</span><span className="text-2xl font-bold">Pay ₹45.00</span></div>
           <div className="bg-black/20 px-4 py-2 rounded-xl flex items-center gap-1 font-bold text-sm">CONFIRM <span className="material-symbols-outlined font-bold">arrow_forward</span></div>
        </button>
        <div className="flex items-center justify-center gap-1 text-xs text-slate-500"><span className="material-symbols-outlined text-sm filled text-green-600">lock</span> 100% Secure Payment</div>
      </div>
    </div>
  );
};

const ParkingPass = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] pb-24 flex flex-col items-center p-6 text-center">
      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4 animate-[bounce_0.5s_ease-out]"><span className="material-symbols-outlined text-4xl font-bold">check</span></div>
      <h1 className="text-2xl font-bold mb-1">Booking Confirmed</h1>
      <p className="text-slate-500 text-sm mb-8">Your parking spot is successfully reserved.</p>
      
      <div className="w-full max-w-sm bg-white dark:bg-[#1e293b] rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
        <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="p-6 pb-8 flex flex-col items-center gap-4 bg-white dark:bg-[#1e293b] relative">
           <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Entry QR Code</span>
           <div className="p-4 bg-white rounded-2xl shadow-inner border border-slate-100"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMZojwyxPkQ-hldd4XYcaTJq0jthGcNAfSCQQbgbppNGFlyJcLN5IPKMHg7q5v-UQ5AYWoxRfeyMVyES8Y2a9frRRdMDEUJvmVKSMyi9L387748AEaYznQCwkP4ClHV2cw6hRRugRH7r5K-Ko2RpPIqyHvQq_8UtEHW6iMPcurgGq93bZaiaHiYFlFjiH7rDldjweDcbdCj-yNNZ1fCmNlN7Q8ZvF1oK-HpZaSxQKt9_1wdqJJlf255cHMyC_5w63B0hPEiLJ4MPM" className="w-40 h-40 object-contain mix-blend-multiply" alt="QR Code"/></div>
           <div><p className="text-sm text-slate-500">Scan this code at</p><p className="text-xl font-bold">Tapovan Gate 4</p></div>
           
           <div className="w-full border-t-2 border-dashed border-slate-200 dark:border-slate-700 my-2 relative">
             <div className="absolute -left-8 -top-3 w-6 h-6 bg-slate-50 dark:bg-[#0f172a] rounded-full"></div>
             <div className="absolute -right-8 -top-3 w-6 h-6 bg-slate-50 dark:bg-[#0f172a] rounded-full"></div>
           </div>
           
           <div className="w-full flex flex-col gap-4 text-left">
             <div className="flex gap-4">
               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><span className="material-symbols-outlined">local_parking</span></div>
               <div><p className="text-xs font-bold text-slate-400 uppercase">PARKING LOCATION</p><p className="font-bold text-lg leading-tight">Tapovan Parking Zone B</p></div>
             </div>
             <div className="flex gap-4">
               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0"><span className="material-symbols-outlined">event</span></div>
               <div><p className="text-xs font-bold text-slate-400 uppercase">DATE & TIME</p><p className="font-bold text-lg leading-tight">24 Jan, 08:00 AM - 04:00 PM</p></div>
             </div>
             <div className="grid grid-cols-2 gap-4 mt-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
               <div><p className="text-xs font-bold text-slate-400">VEHICLE NO.</p><p className="font-bold">MH 15 AB 1234</p></div>
               <div className="border-l pl-3 border-slate-200"><p className="text-xs font-bold text-slate-400">BOOKING ID</p><p className="font-bold">#8821</p></div>
             </div>
           </div>
        </div>
      </div>
      
      <div className="w-full max-w-sm mt-6 flex flex-col gap-3">
        <button onClick={() => navigate('/parking/nav')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#1e3a8a] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined filled">navigation</span> Navigate to Location</button>
        <button onClick={() => navigate('/home')} className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 font-bold py-4 rounded-xl shadow-sm text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2"><span className="material-symbols-outlined">download</span> Download Pass</button>
      </div>
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between">
        <div className="flex gap-3 bg-white dark:bg-slate-800 p-2 pr-4 rounded-full shadow-md items-center">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h2 className="font-bold leading-tight">Navigating</h2><p className="text-xs text-slate-500">To: Tapovan Parking</p></div>
        </div>
      </header>
      
      {/* Mock 3D Nav View */}
      <div className="flex-1 relative bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDV71Nqq3sTpdmgMk-RAe-mRnSF6di4tk4RDAcRMbgLsviIO2SjghPD8b6ZKTf6IjMYJX0Aorow0rEQJ79ax16O9uaS8WPrsfpHuc2bX35U9ZFOUjZUkc_LbtkxfRtQPJYzodTmc_auvLJ8oqeF5r4NEJF__hMlsrTgsI8er5Iyl--nupz--kFelId-z8Xi7d2ZQUSN78lXqe-CmfvnQ45UjOJbpVb_0bLtI616uqYaLOlj3N_zia_jWmFvEtbk-XEkV0n3tNzRHWo")'}}></div>
        <div className="absolute top-24 left-4 right-4 bg-[#1e293b] text-white p-4 rounded-2xl shadow-lg border-2 border-slate-600 flex items-center gap-4">
           <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center border-2 border-blue-400 shadow-lg"><span className="material-symbols-outlined text-5xl">turn_right</span></div>
           <div><p className="text-4xl font-bold">200 m</p><p className="text-lg text-blue-200">Turn Right onto Main Road</p></div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-t-3xl p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-10 -mt-6">
        <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-600 rounded-full mx-auto mb-6"></div>
        <div className="flex justify-between items-center mb-6 px-4 pb-6 border-b border-slate-100 dark:border-slate-700">
           <div className="text-center"><p className="text-3xl font-black text-green-600">12</p><p className="text-xs font-bold uppercase text-slate-400">MIN</p></div>
           <div className="text-center"><p className="text-3xl font-black">3.5</p><p className="text-xs font-bold uppercase text-slate-400">KM</p></div>
           <div className="text-center"><p className="text-3xl font-black">10:45</p><p className="text-xs font-bold uppercase text-slate-400">ARRIVAL</p></div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate('/home')} className="flex-1 bg-red-50 text-red-600 border-2 border-red-100 font-bold py-3 rounded-xl flex items-center justify-center gap-2">Exit</button>
          <button className="flex-[2] bg-blue-600 text-white font-bold py-3 rounded-xl shadow-[0_4px_0_#1e3a8a] active:translate-y-1 flex items-center justify-center gap-2">Re-Center</button>
        </div>
      </div>
    </div>
  );
};

const ParkingScreens = { SmartParking, ParkingDetails, BookParking, ParkingPass, Navigation };
export default ParkingScreens;