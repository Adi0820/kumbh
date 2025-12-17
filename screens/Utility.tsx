import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmergencySOS = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBF2] dark:bg-[#23220f] pb-8 flex flex-col">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-[#363522] shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-2xl font-bold text-red-600">Emergency SOS</h1><p className="text-xs text-stone-500">आपातकालीन मदद</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center animate-pulse"><span className="material-symbols-outlined">warning</span></div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
        <div className="text-center"><p className="text-lg font-medium">Don't panic. Help is nearby.</p><p className="text-sm text-stone-500">Tap below to alert emergency services.</p></div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center"><div className="w-64 h-64 bg-red-500/10 rounded-full animate-ping"></div></div>
          <button className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-b from-red-500 via-red-600 to-red-800 shadow-xl border-8 border-white dark:border-[#2c2b18] flex flex-col items-center justify-center active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-6xl text-white mb-1 drop-shadow-md">sos</span>
            <span className="text-2xl font-black text-white tracking-widest drop-shadow-md">HELP</span>
            <span className="text-sm text-white/90 font-medium mt-1">मदद</span>
          </button>
        </div>
        
        <div className="w-full bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-orange-200 dark:border-stone-700 flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-2xl">my_location</span></div>
          <div className="flex-1">
            <div className="flex justify-between items-center"><p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Your Location</p><span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">GPS Active</span></div>
            <p className="text-xl font-bold leading-tight mt-1">Ram Ghat, Sector 4</p>
            <p className="text-sm text-stone-500">Near Temple Entrance 2 • Nashik</p>
            <button className="mt-3 text-xs font-bold bg-stone-100 dark:bg-stone-700 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"><span className="material-symbols-outlined text-sm">share_location</span> Share</button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full">
          {[{i:"medical_services",t:"Medical",s:"चिकित्सा",c:"red"},{i:"local_police",t:"Police",s:"पुलिस",c:"blue"},{i:"local_fire_department",t:"Fire",s:"अग्निशमन",c:"orange"}].map((s,i)=>(
            <button key={i} className="bg-white dark:bg-[#2c2b18] p-4 rounded-2xl border-2 border-stone-100 dark:border-stone-700 shadow-[0_6px_0_#e5e7eb] active:shadow-none active:translate-y-1 transition-all flex flex-col items-center gap-2">
              <div className={`w-14 h-14 rounded-full bg-${s.c}-50 dark:bg-${s.c}-900/20 text-${s.c}-600 flex items-center justify-center mb-1`}><span className="material-symbols-outlined text-3xl">{s.i}</span></div>
              <div className="text-center"><span className="block font-bold text-sm">{s.t}</span><span className="block text-xs text-stone-500">{s.s}</span></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const OfflineMode = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-8 flex flex-col">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button><div><h1 className="text-2xl font-bold">Offline Mode</h1><p className="text-xs text-stone-500">ऑफ़लाइन मोड</p></div></div>
        <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center"><span className="material-symbols-outlined">wifi_off</span></div>
      </header>
      
      <div className="flex-1 flex flex-col px-6 gap-6 justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-6">
            <div className="absolute inset-0 rounded-full border-[6px] border-stone-200"></div>
            <div className="absolute inset-2 rounded-full bg-stone-100 flex items-center justify-center"><span className="material-symbols-outlined text-7xl text-stone-400">cloud_off</span></div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-stone-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">NO INTERNET</div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Don't worry, you're safe.</h2>
          <p className="text-stone-500 leading-relaxed max-w-[80%]">Your internet connection is lost, but the most important features of the app are still working for you.</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-stone-500 uppercase mb-3 px-1 tracking-wider">Working Offline</h3>
          <div className="flex flex-col gap-3">
            {[{i:"map",t:"Offline Maps",d:"Navigation & saved locations available."}, {i:"sos",t:"Emergency SOS",d:"Emergency calls work on carrier signal."}, {i:"menu_book",t:"Saved Guides",d:"All downloaded content is accessible."}].map((f,i)=>(
              <div key={i} className="bg-white dark:bg-[#2c2b18] p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-2xl">{f.i}</span></div>
                <div className="flex-1"><div className="flex justify-between items-center mb-0.5"><h4 className="font-bold">{f.t}</h4><span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active</span></div><p className="text-xs text-stone-500">{f.d}</p></div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-[#181811] dark:bg-white text-white dark:text-black font-bold text-lg py-4 rounded-2xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 mt-auto"><span className="material-symbols-outlined">refresh</span> Tap to Retry Connection</button>
      </div>
    </div>
  );
};

const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="w-12 h-12 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button><div><h1 className="text-2xl font-bold">Feedback</h1><p className="text-xs text-stone-500">प्रतिक्रिया और सुझाव</p></div></div>
        <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center"><span className="material-symbols-outlined">reviews</span></div>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div><p className="text-lg font-medium">Namaste! How was your experience?</p><p className="text-sm text-stone-500">Your feedback helps us make the Kumbh Mela safer and better.</p></div>
        
        {[{l:"Cleanliness", i:"cleaning_services", c:"blue"}, {l:"Safety & Security", i:"security", c:"green"}, {l:"Crowd Management", i:"groups", c:"orange"}].map((cat, idx)=>(
          <div key={idx} className="bg-white dark:bg-[#2c2b18] p-5 rounded-[1.5rem] shadow-soft border border-stone-100 dark:border-stone-700">
            <div className="flex items-center gap-3 mb-4"><div className={`w-10 h-10 rounded-full bg-${cat.c}-50 dark:bg-${cat.c}-900/20 text-${cat.c}-600 flex items-center justify-center`}><span className="material-symbols-outlined">{cat.i}</span></div><h3 className="font-bold">{cat.l}</h3></div>
            <div className="flex justify-between px-1">{[1,2,3,4,5].map(s=>(<button key={s} className="flex flex-col items-center active:scale-110 transition-transform"><span className={`material-symbols-outlined text-4xl ${s<=4 ? 'text-yellow-400 filled' : 'text-stone-200'}`}>star</span></button>))}</div>
          </div>
        ))}

        <div className="bg-white dark:bg-[#2c2b18] p-5 rounded-[1.5rem] shadow-soft border border-stone-100 dark:border-stone-700">
          <label className="block font-bold mb-2">Detailed Comments</label>
          <textarea className="w-full bg-background-light dark:bg-black/20 border-0 rounded-xl p-4 resize-none" placeholder="Tell us what we can improve..." rows={4}></textarea>
        </div>
        
        <button onClick={() => navigate('/feedback/confirm')} className="w-full bg-[#f9f506] hover:bg-yellow-400 text-black font-bold text-lg py-5 rounded-2xl shadow-glow active:scale-[0.98] transition-all flex items-center justify-center gap-2"><span>Submit Feedback</span><span className="material-symbols-outlined">send</span></button>
      </div>
    </div>
  );
};

const FeedbackConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-green-500/10 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center border-4 border-white shadow-sm"><span className="material-symbols-outlined text-5xl text-green-600">check</span></div>
      </div>
      <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
      <p className="text-stone-500 max-w-[80%] mx-auto leading-relaxed">Your feedback has been successfully received.</p>
      
      <div className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-6 shadow-soft border border-stone-100 dark:border-stone-700 w-full max-w-sm mt-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-100"></div>
        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-2 block">Reference ID</span>
        <div className="text-3xl font-mono font-bold tracking-wider bg-stone-50 dark:bg-stone-800 px-6 py-3 rounded-xl border border-dashed border-stone-300 mt-2">#KMB-8821</div>
      </div>
      
      <button onClick={() => navigate('/home')} className="w-full max-w-sm bg-[#f9f506] text-black font-bold h-14 rounded-2xl shadow-glow active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8">Back to Home <span className="material-symbols-outlined">arrow_forward</span></button>
    </div>
  );
};

const AlertsCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center border-b border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-4"><button onClick={() => navigate(-1)} className="w-12 h-12 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button><div><h1 className="text-2xl font-bold">Alerts Center</h1><p className="text-sm text-stone-500">सूचनाएं और अपडेट</p></div></div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">notifications_active</span></div>
      </header>
      
      <div className="p-4 flex flex-col gap-5">
        <div className="flex justify-between px-2"><p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Live Updates</p><span className="text-xs font-medium bg-stone-200 dark:bg-stone-700 px-3 py-1 rounded-full">Nasik, Today</span></div>
        
        {[{t:"Emergency Gate Closure", d:"Gate No. 4 at Ram Ghat is temporarily closed. Divert to Gate 5.", time:"10m ago", type:"high", i:"campaign"},
          {t:"High Crowd Density", d:"Extremely high footfall near Panchvati area.", time:"35m ago", type:"high", i:"groups"},
          {t:"Heavy Rain Alert", d:"Unexpected heavy rainfall predicted at 2 PM.", time:"2h ago", type:"med", i:"thunderstorm"},
          {t:"Shahi Snan Timing Update", d:"Auspicious period continues until 6 PM.", time:"4h ago", type:"low", i:"water_drop"}
        ].map((a,i)=>(
          <article key={i} className={`bg-white dark:bg-[#2c2b18] rounded-2xl p-5 shadow-card border-l-[6px] ${a.type==='high'?'border-l-red-500':a.type==='med'?'border-l-orange-500':'border-l-green-500'} relative`}>
            {a.type==='high' && i===0 && <div className="absolute top-0 right-0 p-3"><span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Critical</span></div>}
            <div className="flex items-start gap-3 mb-2">
              <div className={`w-10 h-10 rounded-full bg-${a.type==='high'?'red':a.type==='med'?'orange':'green'}-50 dark:bg-stone-800 text-${a.type==='high'?'red':a.type==='med'?'orange':'green'}-600 flex items-center justify-center shrink-0`}><span className="material-symbols-outlined text-xl">{a.i}</span></div>
              <div className="flex-1"><p className="text-xs font-bold text-stone-500 mb-1">{a.time}</p><h2 className="text-lg font-bold leading-tight">{a.t}</h2></div>
            </div>
            <p className="text-base text-stone-700 dark:text-stone-300 leading-snug pl-[3.25rem]">{a.d}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

const DosDonts = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button><div><h1 className="text-2xl font-bold">Do's & Don'ts</h1><p className="text-xs text-stone-500">यात्रा के नियम</p></div></div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">assignment</span></div>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div><p className="text-lg font-medium">Plan a safe visit.</p><p className="text-sm text-stone-500">Follow these simple guidelines for a safe experience.</p></div>
        
        <section>
          <div className="flex items-center gap-2 mb-4"><span className="material-symbols-outlined text-green-600">check_circle</span><h2 className="text-lg font-bold text-green-700 uppercase tracking-wide">Please Do</h2></div>
          <div className="space-y-3">
            {[{t:"Carry ID Proof", d:"Always keep your Aadhaar or ID card.", i:"badge"}, {t:"Stay Hydrated", d:"Drink water regularly to avoid heatstroke.", i:"water_drop"}, {t:"Stay Together", d:"Decide a meeting point in case of separation.", i:"supervised_user_circle"}].map((item,i)=>(
              <div key={i} className="bg-white dark:bg-[#2c2b18] p-4 rounded-[1.25rem] shadow-soft border-l-4 border-green-500 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined">{item.i}</span></div>
                <div><h3 className="font-bold">{item.t}</h3><p className="text-sm text-stone-500">{item.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4"><span className="material-symbols-outlined text-red-600">cancel</span><h2 className="text-lg font-bold text-red-700 uppercase tracking-wide">Please Don't</h2></div>
          <div className="space-y-3">
            {[{t:"Avoid Valuables", d:"Do not wear heavy jewelry or carry large cash.", i:"diamond"}, {t:"No Plastic", d:"Single-use plastic is strictly prohibited.", i:"recycling"}].map((item,i)=>(
              <div key={i} className="bg-white dark:bg-[#2c2b18] p-4 rounded-[1.25rem] shadow-soft border-l-4 border-red-500 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0"><span className="material-symbols-outlined">{item.i}</span></div>
                <div><h3 className="font-bold">{item.t}</h3><p className="text-sm text-stone-500">{item.d}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const TravelGuide = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center">
        <div className="flex items-center gap-3"><button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button><div><h1 className="text-2xl font-bold">Plan Your Visit</h1><p className="text-xs text-stone-500">यात्रा की योजना</p></div></div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">map</span></div>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div><p className="text-lg font-medium">Reaching Nasik</p><p className="text-sm text-stone-500">Choose the most comfortable travel option.</p></div>
        
        {[{t:"By Train", sub:"Nashik Road (NK)", i:"train", c:"blue", points:["Nashik Road station is well-connected.", "Wheelchair access available.", "Special shuttle buses outside exit."]},
          {t:"By Bus", sub:"MSRTC & Private", i:"directions_bus", c:"green", points:["Mahamarg Bus Stand is main terminal.", "Senior citizen discounts available."]},
          {t:"By Road", sub:"Highways & Parking", i:"directions_car", c:"orange", points:["Designated parking zones outside city.", "Traffic restrictions near Ram Ghat."]}
        ].map((m,i)=>(
          <section key={i} className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] p-5 shadow-soft border border-stone-100 dark:border-stone-700 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-stone-100 dark:border-stone-700 pb-3">
              <div className={`w-12 h-12 rounded-full bg-${m.c}-50 dark:bg-${m.c}-900/20 text-${m.c}-600 flex items-center justify-center shrink-0`}><span className="material-symbols-outlined text-2xl">{m.i}</span></div>
              <div><h2 className="text-lg font-bold">{m.t}</h2><p className="text-xs text-stone-500">{m.sub}</p></div>
            </div>
            <ul className="space-y-3">
              {m.points.map((p,j)=>(<li key={j} className="flex items-start gap-3"><span className={`material-symbols-outlined text-${m.c}-500 mt-0.5 text-lg`}>check_circle</span><p className="text-sm text-stone-600 dark:text-stone-300 leading-snug">{p}</p></li>))}
            </ul>
          </section>
        ))}
        
        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 p-4 rounded-xl flex gap-3 items-center mt-2">
          <span className="material-symbols-outlined text-yellow-700 text-2xl">support_agent</span>
          <div><p className="text-sm font-bold">Need travel assistance?</p><p className="text-xs text-stone-500">Call the helpline for updates.</p></div>
          <button className="ml-auto bg-white dark:bg-yellow-900/40 text-yellow-800 text-xs font-bold px-3 py-2 rounded-lg shadow-sm">Call 1033</button>
        </div>
      </div>
    </div>
  );
};

const QRScanner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white font-display min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbM32WBayZYectfoXpWHEhijS-mlMRRflelx3HdfEIEL0X7-yDt59KR-re0AVO_nYrb-8qVPFozYmRqBXV74S0gjAvScmxuXt40wLEVt4W7y8Z6CGznttfC_c6pjp91QlpU8OkdBMFX7eqr5tzZAwDEVDP4uV9ERlbHLhbhINeC1UmSHv-oaTFiS9F8_ccx_JMF48oqKfcuEVC3Ze90yF0KtDMJN4Ai0tm92JUfsV14ZPbAF2F0ya0ULj-NA_dkSMD9TPRQg-h730" className="w-full h-full object-cover opacity-70 filter brightness-90" alt="camera"/></div>
      <header className="relative z-20 pt-14 pb-4 px-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={() => navigate(-1)} className="bg-black/30 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full border border-white/10"><span className="material-symbols-outlined text-2xl">arrow_back</span></button>
        <div className="text-center drop-shadow-md"><h1 className="text-xl font-bold tracking-wide">Scan QR</h1><p className="text-yellow-400 font-medium text-sm">स्कॅन करा</p></div>
        <button className="bg-black/30 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full border border-white/10"><span className="material-symbols-outlined text-2xl">help</span></button>
      </header>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-4">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[2.5rem] shadow-[0_0_0_9999px_rgba(0,0,0,0.75)] overflow-visible ring-1 ring-white/10">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-[6px] border-l-[6px] border-yellow-400 rounded-tl-[2rem] -mt-0.5 -ml-0.5 shadow-glow"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-[6px] border-r-[6px] border-yellow-400 rounded-tr-[2rem] -mt-0.5 -mr-0.5 shadow-glow"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[6px] border-l-[6px] border-yellow-400 rounded-bl-[2rem] -mb-0.5 -ml-0.5 shadow-glow"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[6px] border-r-[6px] border-yellow-400 rounded-br-[2rem] -mb-0.5 -mr-0.5 shadow-glow"></div>
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-yellow-400/90 shadow-[0_0_15px_rgba(249,245,6,0.9)] rounded-full"></div>
        </div>
        <div className="mt-12 px-6 py-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 text-center max-w-sm mx-auto shadow-lg"><p className="text-xl font-bold mb-1">Align QR code within frame</p><p className="text-gray-300">QR कोड चौकटीत ठेवा</p></div>
      </main>
      <div className="relative z-20 pb-12 pt-4 px-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center">
        <button className="group flex flex-col items-center gap-3 active:scale-95 transition-transform duration-200">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center group-hover:bg-yellow-400/20 group-hover:border-yellow-400/50 transition-all shadow-lg"><span className="material-symbols-outlined text-4xl text-white group-hover:text-yellow-400 transition-colors filled">flashlight_on</span></div>
          <div className="text-center"><span className="block text-base font-bold tracking-wide">Flashlight</span><span className="block text-xs text-gray-400">टॉर्च</span></div>
        </button>
      </div>
    </div>
  );
};

const UtilityScreens = { EmergencySOS, OfflineMode, Feedback, FeedbackConfirmation, AlertsCenter, DosDonts, TravelGuide, QRScanner };
export default UtilityScreens;