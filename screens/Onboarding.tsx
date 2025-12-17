import React from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-[#FDFBF7] dark:bg-[#2D241F]">
      <div className="relative w-full h-[35vh] min-h-[260px]">
        <div className="absolute inset-0 bg-cover bg-center rounded-b-[3rem]" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAbM32WBayZYectfoXpWHEhijS-mlMRRflelx3HdfEIEL0X7-yDt59KR-re0AVO_nYrb-8qVPFozYmRqBXV74S0gjAvScmxuXt40wLEVt4W7y8Z6CGznttfC_c6pjp91QlpU8OkdBMFX7eqr5tzZAwDEVDP4uV9ERlbHLhbhINeC1UmSHv-oaTFiS9F8_ccx_JMF48oqKfcuEVC3Ze90yF0KtDMJN4Ai0tm92JUfsV14ZPbAF2F0ya0ULj-NA_dkSMD9TPRQg-h730)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FDFBF7] dark:to-[#2D241F] rounded-b-[3rem]"></div>
        </div>
        <div className="absolute -bottom-10 left-0 right-0 flex justify-center z-10">
          <div className="bg-[#FDFBF7] dark:bg-[#2D241F] p-2.5 rounded-full shadow-lg">
            <div className="bg-orange-50 dark:bg-[#3E2723] p-5 rounded-full border-4 border-orange-100 dark:border-orange-900">
              <span className="material-symbols-outlined text-5xl text-orange-600 dark:text-orange-400">temple_hindu</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-w-md px-6 mt-16 pb-10 flex flex-col gap-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-[#4E342E] dark:text-white">Namaste <span className="block text-orange-600 mt-2">नमस्ते</span></h1>
          <p className="text-[#8D6E63] mt-4 font-medium">Please select your language<br/><span className="text-sm opacity-80 font-normal">कृपया आपली भाषा निवडा</span></p>
        </div>
        <button onClick={() => navigate('/guest')} className="w-full h-24 bg-gradient-to-b from-orange-400 to-orange-600 rounded-[2rem] shadow-lg flex items-center px-6 relative overflow-hidden group active:scale-95 transition-transform">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-bold text-white mr-4">अ</div>
          <div className="text-left text-white"><div className="text-2xl font-bold">मराठी</div><div>Marathi</div></div>
          <div className="ml-auto w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><span className="material-symbols-outlined">arrow_forward</span></div>
        </button>
        <button onClick={() => navigate('/guest')} className="w-full h-20 bg-white dark:bg-[#3E2723] border-2 border-stone-100 dark:border-stone-700 rounded-[2rem] flex items-center px-6 shadow-sm active:scale-95 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-2xl font-bold text-orange-600 mr-4">क</div>
          <div className="text-left text-[#4E342E] dark:text-white"><div className="text-xl font-bold">हिंदी</div><div className="text-xs opacity-70">Hindi</div></div>
        </button>
        <button onClick={() => navigate('/guest')} className="w-full h-20 bg-white dark:bg-[#3E2723] border-2 border-stone-100 dark:border-stone-700 rounded-[2rem] flex items-center px-6 shadow-sm active:scale-95 transition-transform">
          <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-xl font-bold text-orange-600 mr-4">Aa</div>
          <div className="text-left text-[#4E342E] dark:text-white"><div className="text-xl font-bold">English</div></div>
        </button>
      </div>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBF2] dark:bg-[#1C1917] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-white dark:bg-stone-800 shadow-xl flex items-center justify-center mb-8 border-[6px] border-white dark:border-stone-700">
           <div className="w-full h-full rounded-full bg-contain bg-center opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFGEUHLYxV3R4-uBqknbTcBjoGJ62Lu0nmrMZi-6YY2ipXmXVfHrYjkxYzghKAQaqrjoaWvudBj3ULlJsIc1c3EWKzVO1OmGk_1dR0vdjG0WUfQb4UuEPLXi3TBGJeZ5au3Bh0VYTOj1_QQCfsXHjapxr5EbxxTv6gsTCmyPRhPGxa4baKpOHjySqIUzC1SvCuqFT9yK9-84GJcLIhgg0W6nCAHUjuyt1Q1wSdw0DKPGEx68t18IreWKraDopXvOUAdC1Z74IyLDo")'}}></div>
        </div>
        <h1 className="text-4xl font-bold text-[#44403C] dark:text-white mb-2">Namaste</h1>
        <p className="text-stone-500 text-center mb-8">Welcome to Nasik.<br/>Enter your number to begin your Yatra.</p>
        
        <div className="w-full bg-white dark:bg-[#292524] p-6 rounded-3xl shadow-lg border border-stone-100 dark:border-stone-800 mb-6">
          <label className="flex items-center gap-2 font-bold text-stone-700 dark:text-stone-300 mb-4">Mobile Number <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">SECURE</span></label>
          <div className="flex gap-3">
            <div className="w-24 bg-stone-100 dark:bg-stone-900 rounded-xl flex items-center justify-center font-bold text-lg text-stone-800 dark:text-white">+91</div>
            <input type="tel" placeholder="999 999 9999" className="flex-1 bg-stone-100 dark:bg-stone-900 rounded-xl px-4 py-4 font-bold text-lg outline-none focus:ring-2 ring-orange-400" />
          </div>
          <button onClick={() => navigate('/home')} className="w-full bg-[#FFB300] hover:bg-orange-500 text-[#292524] font-bold text-xl py-4 rounded-xl mt-6 shadow-[0_4px_0_#B45309] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
            Get OTP <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <button onClick={() => navigate('/guest')} className="text-stone-500 font-medium hover:text-orange-600">Continue as Guest</button>
      </div>
    </div>
  );
};

const GuestWelcome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFFBF2] dark:bg-[#1C1917] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm bg-white dark:bg-[#292524] rounded-[2.5rem] shadow-xl p-8 border border-orange-100 dark:border-stone-800">
        <div className="w-full aspect-square bg-orange-50 dark:bg-stone-800 rounded-3xl mb-6 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVVByubccF7DNtlvmIPKSn6cXC7J7L-n1DUluuewy2gsLGoCZBAfqN8VYBPe_G2delWrSBkYp36F_-Dtdhx1FimSmpiUZjnL_MG4HPwF05TfvvslArmVL37qIv-NP41w-sCBLma0RDyj1GtngR1yKtkdFWEhxqqGEV83Er9whuEbDu1ciyQCu7p7pktebf1k3YoeoqbxKzzPrtTMqka6wp_42t3biH77tOpL5up2r5HdVi2yl4Zt2WQMPmMyxKXziCG0Lbv-Bmu6o")'}}></div>
        <h1 className="text-3xl font-bold text-[#431407] dark:text-white mb-2">Welcome to<br/><span className="text-orange-600">Nasik Kumbh</span></h1>
        <div className="flex items-center justify-center gap-2 text-orange-800 dark:text-orange-300 font-bold text-xs uppercase tracking-wider mb-4">
          <span className="material-symbols-outlined text-lg">temple_hindu</span> Spiritual Capital of India
        </div>
        <p className="text-stone-500 text-lg mb-8">Your guide to a safe journey. Access maps and safety features instantly.</p>
        <button onClick={() => navigate('/home')} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-4 rounded-full shadow-[0_6px_0_#9A3412] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
          Start as Guest <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button onClick={() => navigate('/login')} className="mt-6 text-stone-500 font-bold hover:text-orange-600 underline">I have an account, Log In</button>
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="px-6 py-4 flex items-center gap-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
        <h1 className="text-2xl font-bold">Profile & Settings</h1>
      </header>
      <div className="px-6 flex flex-col gap-6">
        <div className="bg-white dark:bg-[#2c2b18] p-5 rounded-[1.5rem] shadow-soft border border-gray-100 dark:border-stone-700 flex items-center gap-4 mt-2">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl text-orange-700 border-2 border-orange-200"><span className="material-symbols-outlined text-4xl">person</span></div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Rajesh Kumar</h2>
            <p className="text-stone-500">+91 98*** **210</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center"><span className="material-symbols-outlined text-stone-500">edit</span></button>
        </div>

        <div>
          <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3 px-1">Preferences</h3>
          <div className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] shadow-sm border border-stone-100 dark:border-stone-700 overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center"><span className="material-symbols-outlined">translate</span></div>
                <div className="text-left"><p className="font-bold text-lg">Language</p><p className="text-xs text-stone-500">English / हिंदी</p></div>
              </div>
              <span className="material-symbols-outlined text-stone-400">chevron_right</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3 px-1">My Yatra</h3>
          <div className="bg-white dark:bg-[#2c2b18] rounded-[1.5rem] shadow-sm border border-stone-100 dark:border-stone-700 overflow-hidden divide-y divide-stone-100 dark:divide-stone-700">
            <button className="w-full p-4 flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 flex items-center justify-center"><span className="material-symbols-outlined">qr_code_2</span></div>
                <div className="text-left"><p className="font-bold text-lg">Passes & QR</p><p className="text-xs text-stone-500">View saved bookings</p></div>
              </div>
              <span className="material-symbols-outlined text-stone-400">chevron_right</span>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center"><span className="material-symbols-outlined">contact_emergency</span></div>
                <div className="text-left"><p className="font-bold text-lg">Emergency Contacts</p><p className="text-xs text-stone-500">Manage family alerts</p></div>
              </div>
              <span className="material-symbols-outlined text-stone-400">chevron_right</span>
            </button>
          </div>
        </div>

        <button onClick={() => navigate('/')} className="w-full py-4 border-2 border-stone-200 dark:border-stone-700 rounded-2xl font-bold text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">logout</span> Sign Out
        </button>
      </div>
    </div>
  );
};

const OnboardingScreens = { LanguageSelection, Login, GuestWelcome, Profile };
export default OnboardingScreens;