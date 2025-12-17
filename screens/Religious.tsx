import React from 'react';
import { useNavigate } from 'react-router-dom';

const LiveDarshan = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBEB] dark:bg-[#1C1917] pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center sticky top-0 bg-[#FFFBEB] dark:bg-[#1C1917] z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-orange-100 dark:border-stone-700 flex items-center justify-center text-orange-600"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-2xl font-bold text-orange-600">Live Darshan</h1><p className="text-xs font-medium text-orange-800 dark:text-orange-200/70 mt-1">प्रत्यक्ष दर्शन</p></div>
        </div>
        <button onClick={() => navigate('/alerts')} className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center relative"><span className="material-symbols-outlined">notifications</span><span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-orange-100"></span></button>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div className="relative w-full">
          <div className="flex items-center justify-between mb-3 px-1"><h2 className="text-lg font-bold flex items-center gap-2"><span className="material-symbols-outlined text-red-500 animate-pulse">videocam</span> Live Now</h2><span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded-full flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> ON AIR</span></div>
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-orange-100 dark:border-stone-700">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1Q95faN72BICPi0uMfoz3PCAYLuKxbFyOeCKUSd9vuAh5DBA2e7GqCIr-WJLLjteq7sgsLAkN_BmA1oQo0KkjOUcYINeVjLIwEwOvjzdAoqqT4M-HaEZOjFXLpG-iCGBVOd40M2AsLtCF_QS-yt_CKh6vXQ0NHXOu8rgkh4CA8wklp5OQiSfOcwR-EMZoAXfbi97_RcFgY3We7Ll4ufkLrDoyyVwmIVCgLZVvza70k7H1XpS0BEBUZMPUmV2-L6lPtgX6K-3-QU" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Live"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center group-active:scale-95 transition-transform"><span className="material-symbols-outlined text-4xl text-white filled">play_arrow</span></div></div>
            <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">LIVE</div>
            <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-lg flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 12.5k</div>
            <div className="absolute bottom-0 left-0 right-0 p-4"><h3 className="text-white font-bold text-xl leading-tight">Maha Aarti at Ram Kund</h3><p className="text-orange-200 text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-sm">temple_hindu</span> Main Ghat, Nashik</p></div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-orange-800 dark:text-orange-200 uppercase tracking-wider px-1">Other Live Channels</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6">
            {[{title: "Shahi Snan", loc: "Sector 4 Ghat", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsr6GgokJZ5UuckVfdlIGT3r4rKudxw4_O5byENmbZiLByDEf8YMuG3E4RO-Azoc4RR47Ae1dSor-M5iJvO3F344FsDreJf9W9-LZMfwEvO5WsEFObeJLBs5bk1tQAdTZi3vf7J_ERtdXDZaHOoyLllb01u50VfoQc6_KYZE7kzBY0fWiiS7-yI6PqukZGxYu2KzUhwL0y1gjQ0vXbVBy9JdGt9Fso4IBzm6k7zpkXqfKvjGXaeXPbhtZUWr6_Y-Oxt6etSz4j5Z8"}, {title: "Spiritual Discourse", loc: "Sadhugram Tent 1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrj_CdqEJuXaDT9H9rMFOFbONCHX0qO9XnZjvAb0NCHuwdgToUdQK3O2cSlsD9ujAKFnX5LF9aO04SUwLUMK9x5gg3ej25FhbfUoNSiAm5Uhy8gPfxLFovPxru6pJQk_yVbToVVsoL0CvaOjEebcYnAV-cRUjIU-UaYcjrxzLnobxLEt0ZyetXp_65W3zCG-qfLaWF6hYfjqREnPX04A34w-mCSo5Ihtvhqk-j2uU4VqBffcBrQzOopk1AyeF-UL6Fl8HovQUNWc"}].map((c,i) => (
              <div key={i} className="shrink-0 w-40 flex flex-col gap-2 cursor-pointer">
                <div className="relative w-40 h-28 bg-stone-200 rounded-xl overflow-hidden shadow-sm"><img src={c.img} className="w-full h-full object-cover" alt={c.title}/><div className="absolute top-2 left-2 bg-red-600/90 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">LIVE</div><div className="absolute inset-0 flex items-center justify-center bg-black/10"><span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">play_circle</span></div></div>
                <div><p className="font-bold text-sm leading-tight">{c.title}</p><p className="text-xs text-stone-500">{c.loc}</p></div>
              </div>
            ))}
            <div className="shrink-0 w-40 flex flex-col gap-2"><div onClick={() => navigate('/schedule')} className="relative w-40 h-28 bg-orange-100 dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm flex items-center justify-center cursor-pointer border border-orange-200 dark:border-stone-700"><div className="text-center p-2"><span className="material-symbols-outlined text-orange-400 text-3xl mb-1">calendar_clock</span><p className="text-[10px] font-bold text-orange-800 dark:text-orange-200">View Full Schedule</p></div></div></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between px-1 mb-3"><h3 className="text-sm font-bold text-orange-800 dark:text-orange-200 uppercase tracking-wider">Upcoming Today</h3><span className="text-xs font-medium text-orange-600">Feb 14, 2025</span></div>
          <div className="bg-white dark:bg-[#2c2b18] rounded-2xl shadow-sm border border-orange-50 dark:border-stone-700 divide-y divide-orange-50 dark:divide-stone-700 overflow-hidden">
            {[
              {time: "05:30", ap: "PM", title: "Evening Bhajans", loc: "Trimbakeshwar Temple"},
              {time: "07:00", ap: "PM", title: "Deep Daan Ceremony", loc: "Godavari Ghat"}
            ].map((e, i)=>(
              <div key={i} className="p-4 flex items-center gap-4 hover:bg-orange-50 dark:hover:bg-stone-800">
                <div className="flex flex-col items-center justify-center w-14 h-14 bg-orange-100 dark:bg-stone-700 rounded-xl shrink-0 text-orange-600 dark:text-orange-300"><span className="text-xs font-bold uppercase">{e.ap}</span><span className="text-lg font-bold leading-none">{e.time}</span></div>
                <div className="flex-1"><h4 className="font-bold text-base">{e.title}</h4><p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">location_on</span> {e.loc}</p></div>
                <button className="w-8 h-8 rounded-full border border-orange-100 flex items-center justify-center text-stone-400 hover:text-orange-600"><span className="material-symbols-outlined text-lg">notifications</span></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/darshan/recorded')} className="mx-6 mb-6 w-[calc(100%-3rem)] bg-white border border-orange-200 text-orange-600 py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-2">View Recorded Darshan <span className="material-symbols-outlined">history</span></button>
    </div>
  );
};

const RecordedDarshan = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFDF5] dark:bg-[#1C1917] pb-24">
      <header className="px-6 pt-6 pb-4 flex justify-between items-center bg-[#FFFDF5] dark:bg-[#1C1917] sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 shadow-sm border border-orange-100 dark:border-stone-700 flex items-center justify-center text-orange-600"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-xl font-bold">Recorded Darshan</h1><p className="text-xs text-orange-600">पवित्र दर्शन वीडियो</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center"><span className="material-symbols-outlined">temple_hindu</span></div>
      </header>
      
      <div className="p-5 flex flex-col gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-stone-800 dark:to-stone-900 rounded-2xl p-5 border border-orange-100 dark:border-stone-700 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-orange-500"><span className="material-symbols-outlined text-[28px]">play_circle</span></div>
          <div><h2 className="font-bold text-lg mb-1">Divine Moments</h2><p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">Revisit the holy moments of the Kumbh. Watch aartis, snans, and sermons anytime.</p></div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3 px-1"><h3 className="font-bold text-lg">Latest Darshan</h3><span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New</span></div>
          <div className="group relative bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-md border border-stone-100 dark:border-stone-700 cursor-pointer">
            <div className="aspect-video w-full relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDawd9-NO841061RXoZ-CCwEnoHcGI_zq4nOx01P-GDEXt-KE284NTlaUa-L5KKBLKjWOgOef2mH-BoNNdb60s9JcmnYlvvY8xVM8R1rVGu9u1lVhYsmFJg8xH3xPGbxjmEVtYGtfoc8K9d5FTECZKQveJCfozJXiEljxurc5lbAnTvGhaNaF8NVseWn3_JK8xDLrp5kE8FTq3D5uaRFDLBhJGB5lYfDwMuUaIg75FSITynOvn66hombCWH9uAhJfQe9HIhthteyb0" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Aarti"/>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"><div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-orange-600 text-3xl ml-1">play_arrow</span></div></div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">14:20</div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-1">Grand evening Aarti at Ram Ghat</h4>
              <div className="flex items-center gap-2 text-sm text-stone-500 mb-2"><span className="material-symbols-outlined text-base">calendar_today</span> <span>Today, 6:00 PM</span></div>
              <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2">Experience the divine energy of the evening prayers with thousands of devotees.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5">
          {["All Videos", "Morning Aarti", "Shahi Snan", "Sermons"].map((t,i) => (<button key={i} className={`whitespace-nowrap px-4 py-2 rounded-full font-medium text-sm border shadow-sm ${i===0 ? 'bg-orange-600 text-white border-orange-600' : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700'}`}>{t}</button>))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg px-1">Previous Recordings</h3>
          {[
            {t: "Shahi Snan Highlights", d: "Yesterday • Main Ghat", time: "08:45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF0EHuGL5A7D4Z7-5Ta_dniA1iP33AOv_Yazg7QZ17wcU2Bzew7Cueupu_Jykm8b_3genGOlh-DBiwj46vjFqdrBQdAuJiC0YUIcaxjqDXRGUtlFVroQrfS_VAuWtZWALI2PJaX9ggfvf58qKfeHr9RX0Bw5Ecijle5ISnCm0iOcuoYSCeHT9wAStuSgnYNjXExlQ4ctvg1s5O9UMpw6KTO5C5ejly1H9wlLn-gjxSPmnKy-1pSx1DXHE8zwy0BlwZbRxZaj_VAis"},
            {t: "Sunrise Chanting", d: "2 days ago • Trimbakeshwar", time: "45:00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeo3TT6bajynFE-cBBxsqiMBXsqtRsv7WBuDjGjMitxh9ny7_ZXWCfx7z1u-Upq6KMJBqKitx9gKz4KO9xTLoWzFDAndeGDppXDmV1eThvf4wkB4XGScgMO7WogiZlEP3CWiRlKOlSMXZQGZj-28tJdGDRUQzz03jQYdW9oG7p-oBvl9_28riq-5v1U5SfEY6EGHpn7xgRuQkW39q00itXsnKsLwtTULB7iefRwldVKzM-W1UrW6MMtnM5dllfDBlgxYbZAZXkGMU"},
            {t: "Sadhu Procession", d: "3 days ago • Procession Path", time: "12:30", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxlDY162qZjuqviZggvkrjgmR-raOzT2Ga2xDJPGkf7eESu-s1JcmjqlorOOFw0fywCZRmd3T3oGXRpZsarWCx5g1O1mUpOwZ_Kty0NdDgTfl9Ig6WJzrTpp0LArnz6fGbdkWIQY8jGnhaZvU4Yyf7GuB3UhRGSPj1fio6KTXR_Hjn6t63QYnW3lLckxVGf12KFNlUUmwCphc1mGkHaNU7gs3a0MRezyTPqCsLmAflbuLDxQunby2MzqU7uJCNAM0IK1wsuY3oxgU"}
          ].map((v,i) => (
            <div key={i} className="bg-white dark:bg-stone-800 p-3 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 flex gap-4 items-center group cursor-pointer">
              <div className="relative w-32 h-24 shrink-0 rounded-xl overflow-hidden bg-stone-200">
                <img src={v.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Thumbnail"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/10"><span className="material-symbols-outlined text-white drop-shadow-md">play_circle</span></div>
                <span className="absolute bottom-1 right-1 bg-black/60 text-[10px] text-white px-1.5 py-0.5 rounded">{v.time}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-base leading-tight mb-1 truncate">{v.t}</h4>
                <p className="text-xs text-stone-500 mb-2">{v.d}</p>
                <div className="flex gap-3"><button className="text-xs font-semibold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">play_arrow</span> Watch</button><button className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700"><span className="material-symbols-outlined text-[18px]">share</span></button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EventSchedule = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F8F5] dark:bg-[#23220f] pb-24">
      <header className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-stone-100 dark:border-stone-800 sticky top-0 bg-[#F8F8F5] dark:bg-[#23220f] z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-[#363522] shadow-sm border border-stone-100 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-2xl font-bold">Event Schedule</h1><p className="text-sm text-stone-500">कार्यक्रम रूपरेखा</p></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">calendar_month</span></div>
      </header>
      
      <div className="p-4 flex flex-col gap-5">
        <div className="flex items-center justify-between bg-white dark:bg-[#2c2b18] rounded-2xl p-2 pr-4 shadow-sm border border-stone-100 dark:border-stone-700">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400"><span className="material-symbols-outlined">chevron_left</span></button>
          <div className="text-center"><div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-0.5">Today</div><div className="text-lg font-bold">Fri, 14 Feb</div></div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          <button className="px-5 py-2.5 rounded-full bg-[#181811] text-white dark:bg-white dark:text-black font-medium text-sm shadow-md whitespace-nowrap">All Events</button>
          <button className="px-5 py-2.5 rounded-full bg-white dark:bg-[#2c2b18] border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-medium text-sm whitespace-nowrap">Aarti</button>
          <button className="px-5 py-2.5 rounded-full bg-white dark:bg-[#2c2b18] border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 font-medium text-sm whitespace-nowrap">Yatra</button>
        </div>

        <div className="relative flex flex-col gap-6 pl-2">
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-stone-200 dark:bg-stone-700 -z-10"></div>
          
          <div className="flex gap-4 opacity-70 grayscale-[0.5]">
            <div className="flex flex-col items-center gap-2 mt-1 shrink-0 w-14">
              <div className="w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600 ring-4 ring-[#F8F8F5] dark:ring-[#23220f]"></div><span className="text-xs font-bold text-stone-500">05:00 AM</span>
            </div>
            <div className="flex-1 bg-white dark:bg-[#2c2b18] p-4 rounded-[1.25rem] border border-stone-100 dark:border-stone-700 shadow-sm">
              <div className="flex justify-between items-start mb-2"><div className="bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> Completed</div><span className="material-symbols-outlined text-stone-300">self_improvement</span></div>
              <h3 className="text-lg font-bold mb-1">Kakad Aarti</h3>
              <p className="text-sm text-stone-500 mb-2 flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Ram Ghat</p>
              <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">Early morning prayers to wake up the deities. A serene start to the day.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2 mt-1 shrink-0 w-14">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse ring-4 ring-[#F8F8F5] dark:ring-[#23220f]"></div><span className="text-sm font-bold text-red-600">NOW</span>
            </div>
            <div className="flex-1 bg-gradient-to-br from-yellow-200/50 to-transparent p-0.5 rounded-[1.35rem] shadow-glow">
              <div className="bg-white dark:bg-[#2c2b18] p-5 rounded-[1.25rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-[4rem] -mr-4 -mt-4 z-0"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-xs font-extrabold tracking-wide flex items-center gap-1 animate-pulse"><span className="material-symbols-outlined text-sm filled">sensors</span> LIVE</div>
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800"><span className="material-symbols-outlined">temple_hindu</span></div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">Shahi Snan (Royal Bath)</h3><p className="text-sm font-medium text-stone-500 mb-3">शाही स्नान</p>
                  <div className="space-y-2 mb-4 text-sm"><div className="flex items-center gap-2"><span className="material-symbols-outlined text-orange-500">location_on</span> Main Triveni Sangam</div><div className="flex items-center gap-2"><span className="material-symbols-outlined text-orange-500">schedule</span> Until 12:00 PM</div></div>
                  <div className="flex gap-3"><button onClick={() => navigate('/transport/map')} className="flex-1 bg-black text-white dark:bg-white dark:text-black py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"><span className="material-symbols-outlined text-lg">directions</span> Navigate</button><button className="w-12 h-10 rounded-xl border border-stone-200 dark:border-stone-600 flex items-center justify-center hover:bg-stone-50"><span className="material-symbols-outlined text-lg">share</span></button></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2 mt-1 shrink-0 w-14">
              <div className="w-3 h-3 rounded-full bg-yellow-400 ring-4 ring-[#F8F8F5] dark:ring-[#23220f]"></div><span className="text-xs font-bold text-stone-500">04:00 PM</span>
            </div>
            <div className="flex-1 bg-white dark:bg-[#2c2b18] p-4 rounded-[1.25rem] border border-stone-100 dark:border-stone-700 shadow-sm">
              <div className="flex justify-between items-start mb-2"><div className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-bold">Upcoming</div><span className="material-symbols-outlined text-stone-400">record_voice_over</span></div>
              <h3 className="text-lg font-bold mb-1">Spiritual Discourse</h3>
              <p className="text-sm text-stone-500 mb-2 flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Sadhugram Sector 4</p>
              <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2">Pravachan by Swami ji on the importance of Kumbh and inner peace.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#F8F8F5] via-[#F8F8F5] to-transparent dark:from-[#23220f] dark:via-[#23220f] pointer-events-none flex justify-center pb-8 z-10">
        <button className="bg-white dark:bg-[#2c2b18] border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-white px-6 py-3 rounded-full shadow-lg font-bold text-sm pointer-events-auto flex items-center gap-2 hover:scale-105 transition-transform"><span className="material-symbols-outlined text-yellow-600">download</span> Download Full PDF</button>
      </div>
    </div>
  );
};

const SnanDates = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 pt-6 pb-2 flex justify-between items-center sticky top-0 bg-background-light dark:bg-background-dark z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="w-12 h-12 rounded-full bg-white dark:bg-[#363522] shadow-sm border border-stone-100 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <div><h1 className="text-2xl font-bold">Snan Dates</h1><p className="text-sm font-medium text-stone-500">स्नान तिथियाँ</p></div>
        </div>
        <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">calendar_month</span></div>
      </header>
      
      <div className="p-6 flex flex-col gap-6">
        <div><p className="text-lg font-medium">Sacred Bathing Dates</p><p className="text-sm text-stone-500">Plan your holy dip during the auspicious Kumbh Mela.</p></div>
        
        <div className="relative overflow-hidden rounded-[2rem] border border-yellow-200 shadow-glow bg-white dark:bg-[#2c2b18]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="p-6 relative z-10">
            <div className="flex items-start justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider shadow-sm"><span className="w-2 h-2 rounded-full bg-black animate-pulse"></span> Next Upcoming</span>
              <span className="material-symbols-outlined text-orange-500 text-3xl">temple_hindu</span>
            </div>
            <div className="flex items-end gap-4 mt-2">
              <div className="bg-stone-50 dark:bg-stone-900/50 rounded-2xl px-5 py-3 text-center border border-stone-100 dark:border-stone-700"><span className="block text-sm font-bold text-stone-400 uppercase">Aug</span><span className="block text-4xl font-bold leading-none mt-1">29</span></div>
              <div className="pb-1"><h2 className="text-2xl font-bold leading-tight">First Shahi Snan</h2><p className="text-stone-500 text-sm mt-1">Shravan Purnima • श्रावण पूर्णिमा</p></div>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-700 flex items-center gap-2 text-sm text-stone-500"><span className="material-symbols-outlined text-lg text-orange-500">sunny</span> <span>Sunrise: 6:14 AM</span> <span className="mx-1">•</span> <span>Expected Crowd: High</span></div>
          </div>
        </div>

        <h3 className="text-lg font-bold flex items-center gap-2 mt-2">All Important Dates <span className="w-full h-px bg-stone-100 flex-1 ml-2"></span></h3>
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-[#2c2b18] p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white shrink-0"><span className="text-[10px] font-bold uppercase text-stone-500">Aug</span><span className="text-xl font-bold leading-none">14</span></div>
            <div className="flex-1"><h4 className="font-bold text-lg">Flag Hoisting</h4><p className="text-xs text-stone-500">Simhastha Start • ध्वजारोहण</p></div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-5 rounded-2xl shadow-sm flex items-center gap-4 border border-yellow-200 dark:border-yellow-900/50 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-black/20 shrink-0 border border-yellow-100 dark:border-yellow-900"><span className="text-[10px] font-bold uppercase text-yellow-700">Aug</span><span className="text-2xl font-bold leading-none">29</span></div>
            <div className="flex-1 relative z-10"><div className="flex items-center gap-2 mb-0.5"><h4 className="font-bold text-lg">First Shahi Snan</h4><span className="material-symbols-outlined text-orange-500 text-base">stars</span></div><p className="text-sm text-stone-500">Shravan Purnima • शाही स्नान</p></div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-5 rounded-2xl shadow-sm flex items-center gap-4 border-2 border-yellow-400 relative overflow-hidden ring-4 ring-yellow-50 dark:ring-yellow-900/20">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">MAIN DAY</div>
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-yellow-400 text-black shrink-0 shadow-sm"><span className="text-[10px] font-bold uppercase text-yellow-900">Sep</span><span className="text-2xl font-bold leading-none">13</span></div>
            <div className="flex-1"><h4 className="font-bold text-xl">Main Shahi Snan</h4><p className="text-sm text-stone-500 font-medium">Bhadrapad Amavasya • मुख्य शाही स्नान</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TempleInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fdfdfa] dark:bg-[#1a190e]">
      <div className="relative w-full h-[35vh] min-h-[300px]">
        <div className="absolute inset-0 bg-cover bg-center rounded-b-[3rem] shadow-soft" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAbM32WBayZYectfoXpWHEhijS-mlMRRflelx3HdfEIEL0X7-yDt59KR-re0AVO_nYrb-8qVPFozYmRqBXV74S0gjAvScmxuXt40wLEVt4W7y8Z6CGznttfC_c6pjp91QlpU8OkdBMFX7eqr5tzZAwDEVDP4uV9ERlbHLhbhINeC1UmSHv-oaTFiS9F8_ccx_JMF48oqKfcuEVC3Ze90yF0KtDMJN4Ai0tm92JUfsV14ZPbAF2F0ya0ULj-NA_dkSMD9TPRQg-h730)'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 rounded-b-[3rem]"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-start z-20">
          <button onClick={() => navigate(-1)} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-lg"><span className="material-symbols-outlined">arrow_back</span></button>
          <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30 shadow-lg">
            <button className="px-4 py-2 rounded-full bg-yellow-400 text-black font-bold text-sm shadow-sm">Eng</button>
            <button className="px-4 py-2 rounded-full text-white font-medium text-sm">Hin</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-12 z-20 text-white">
          <div className="flex items-center gap-2 mb-2 opacity-90"><span className="material-symbols-outlined text-yellow-400 text-xl">location_on</span><span className="font-medium tracking-wide uppercase text-sm">Panchavati, Nashik</span></div>
          <h1 className="text-4xl font-bold leading-tight drop-shadow-lg">Kalaram Temple</h1>
          <p className="text-xl font-medium mt-1 text-gray-100">काळाराम मंदिर</p>
        </div>
      </div>
      
      <main className="px-6 -mt-6 z-10 relative max-w-lg mx-auto w-full pb-24">
        <div className="bg-white dark:bg-[#2c2b18] rounded-[2rem] p-1 shadow-card mb-8 border border-yellow-400/20">
          <div className="bg-[#181811] dark:bg-black text-white p-5 rounded-[1.8rem] relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-glow active:scale-95 transition-transform"><span className="material-symbols-outlined text-4xl ml-1">play_arrow</span></button>
                <div><h3 className="font-bold text-xl leading-none mb-1">Audio Guide</h3><p className="text-gray-300 text-sm">Listen to the history • 5 min</p></div>
              </div>
              <span className="material-symbols-outlined text-4xl text-gray-600 animate-pulse">volume_up</span>
            </div>
            <div className="mt-5 bg-gray-700 h-1.5 rounded-full w-full overflow-hidden"><div className="bg-yellow-400 h-full w-1/3 rounded-full"></div></div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600"><span className="material-symbols-outlined">temple_hindu</span></span><h2 className="text-2xl font-bold">Significance</h2></div>
          <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300 font-medium">Dedicated to Lord Rama, this architectural marvel is named <span className="text-orange-700 dark:text-orange-400 font-bold">'Kalaram'</span> due to the black stone idol. It stands on the sacred ground where Lord Rama is believed to have lived during his exile.</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4"><span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600"><span className="material-symbols-outlined">history_edu</span></span><h2 className="text-2xl font-bold">History</h2></div>
          <div className="bg-white dark:bg-[#2c2b18] p-6 rounded-[2rem] shadow-soft border border-stone-100 dark:border-stone-700">
            <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300">The temple was built in 1792 by Sardar Rangrao Odhekar. It took 12 years and 2000 workers to complete this black stone masterpiece.</p>
            <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-700 flex justify-end"><button className="text-yellow-600 font-bold flex items-center gap-1">Read Full History <span className="material-symbols-outlined">arrow_forward</span></button></div>
          </div>
        </div>
      </main>
      
      <div className="fixed bottom-6 left-0 right-0 px-6 pointer-events-none z-30 flex justify-center">
        <button onClick={() => navigate('/transport/map')} className="pointer-events-auto shadow-2xl bg-[#181811] dark:bg-yellow-400 text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 active:scale-95 transition-transform border-2 border-white/20"><span className="material-symbols-outlined">map</span> Navigate Here</button>
      </div>
    </div>
  );
};

const ReligiousScreens = { LiveDarshan, RecordedDarshan, EventSchedule, SnanDates, TempleInfo };
export default ReligiousScreens;