'use client'
import React, { useState, useEffect } from 'react'
import { 
  ShieldCheck, Zap, Wallet, Gift, ChevronRight, 
  Star, Users, ArrowRight, CheckCircle2, X 
} from 'lucide-react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passValid, setPassValid] = useState({
    len: false, cap: false, num: false, uniq: false
  })

  // --- Logic Validasi ---
  useEffect(() => {
    setPassValid({
      len: password.length >= 6 && password.length <= 15,
      cap: /[A-Z]/.test(password),
      num: /[0-9]/.test(password),
      uniq: /[^A-Za-z0-9]/.test(password)
    })
  }, [password])

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase().replace(/\s/g, '')
    setUsername(val)
  }

  const isSignupValid = username.length >= 4 && username.length <= 7 && 
                        Object.values(passValid).every(Boolean)

  const openModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setStep(1)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* --- DEKORASI BACKGROUND (BLOBS) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">Node<span className="text-blue-600">Earn</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#features" className="hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#proof" className="hover:text-blue-600 transition-colors">Bukti Bayar</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">Bantuan</a>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => openModal('signin')} className="hidden sm:block text-sm font-bold text-slate-600 hover:text-blue-600 px-4 py-2">Masuk</button>
            <button onClick={() => openModal('signup')} className="group bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
              Daftar Gratis <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Live: 2,400+ User Online</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Platform Cuan <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Generasi Digital.
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            NodeEarn mengubah aktivitas scrolling Anda menjadi saldo nyata. Tanpa deposit, tanpa ribet, cair dalam hitungan detik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={() => openModal('signup')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
              <Wallet size={20} /> Mulai Hasilkan
            </button>
            <div className="flex -space-x-4 items-center px-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="User" />
                </div>
              ))}
              <div className="pl-6 text-sm font-bold text-slate-600">
                <span className="text-blue-600">50k+</span> Bergabung
              </div>
            </div>
          </div>
        </div>

        {/* Complex Floating Card Visual */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Main Card */}
          <div className="absolute top-10 left-10 z-20 w-80 bg-white rounded-[2.5rem] p-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 animate-[float_6s_ease-in-out_infinite]">
            <div className="flex justify-between items-center mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><Wallet size={20}/></div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Verified</span>
            </div>
            <div className="space-y-1 mb-8">
              <p className="text-slate-400 text-xs font-bold uppercase">Total Earnings</p>
              <h3 className="text-3xl font-black text-slate-900">Rp 2.450.000</h3>
            </div>
            <div className="space-y-3">
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full w-[70%] bg-blue-600 rounded-full"></div></div>
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Target Bulanan</span>
                <span>70%</span>
              </div>
            </div>
          </div>

          {/* Floating Notification Card */}
          <div className="absolute bottom-32 right-0 z-30 w-72 bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-white flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_1s]">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Penarikan Sukses</p>
              <p className="text-xs text-slate-500">Baru saja ke DANA • Rp 50.000</p>
            </div>
          </div>

          {/* Background Decorative Mesh */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50 z-0 scale-75 animate-pulse" />
        </div>
      </section>

      {/* --- RUNNING TICKER (Live Proof) --- */}
      <div className="bg-slate-900 py-3 overflow-hidden whitespace-nowrap relative z-20">
        <div className="inline-block animate-[marquee_20s_linear_infinite] text-xs font-bold text-slate-400">
          <span className="mx-8"><span className="text-green-400">●</span> Budi (Jakarta) baru saja menarik Rp 25.000</span>
          <span className="mx-8"><span className="text-green-400">●</span> Siti (Bandung) menyelesaikan Misi Tiktok</span>
          <span className="mx-8"><span className="text-green-400">●</span> Reza (Surabaya) baru saja menarik Rp 100.000</span>
          <span className="mx-8"><span className="text-green-400">●</span> NodeEarn Server: Status Optimal</span>
          <span className="mx-8"><span className="text-green-400">●</span> Anto (Medan) baru saja menarik Rp 50.000</span>
        </div>
      </div>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Fitur Pro, <span className="text-blue-600">Akses Gratis</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Kami mendesain sistem yang adil dan menguntungkan bagi semua pengguna.</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Box Besar */}
          <div className="lg:col-span-2 bg-blue-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-white/20"></div>
            <ShieldCheck size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-2">Keamanan Enkripsi AES-256</h3>
            <p className="text-blue-100 opacity-90 leading-relaxed">Data Anda adalah prioritas kami. Sistem keamanan tingkat bank menjaga saldo dan privasi Anda tetap aman 24/7.</p>
          </div>

          {/* Box Kecil */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Payout</h3>
            <p className="text-sm text-slate-500">Tarik saldo kapan saja, masuk dalam hitungan detik.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gift size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Bonus Harian</h3>
            <p className="text-sm text-slate-500">Login setiap hari untuk mendapatkan poin tambahan.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 w-8 h-8 rounded-lg flex items-center justify-center text-white"><Zap size={16}/></div>
              <span className="text-xl font-black text-slate-900">NodeEarn</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Membangun ekosistem ekonomi digital yang inklusif untuk seluruh masyarakat Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Cara Kerja</a></li>
              <li><a href="#" className="hover:text-blue-600">Bukti Pembayaran</a></li>
              <li><a href="#" className="hover:text-blue-600">Leaderboard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium">
          <p>© 2026 NodeEarn Inc. Jakarta, Indonesia.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>TikTok</span>
          </div>
        </div>
      </footer>

      {/* --- AUTH MODAL (LOGIC PRESERVED) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {step === 2 ? 'Verifikasi OTP' : authMode === 'signin' ? 'Selamat Datang' : 'Buat Akun'}
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">NodeEarn Secure Auth</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                <X size={16} />
              </button>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username (4-7 huruf kecil)" className="w-full h-14 px-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm focus:border-blue-600 focus:bg-white outline-none transition-all placeholder:font-medium" />
                  </div>
                )}
                <input type="email" placeholder="Alamat Email" className="w-full h-14 px-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm focus:border-blue-600 focus:bg-white outline-none transition-all placeholder:font-medium" />
                
                <div>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-14 px-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm focus:border-blue-600 focus:bg-white outline-none transition-all placeholder:font-medium" />
                  {authMode === 'signup' && (
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <Requirement label="6-15 Huruf" valid={passValid.len} />
                      <Requirement label="Kapital" valid={passValid.cap} />
                      <Requirement label="Angka" valid={passValid.num} />
                      <Requirement label="Simbol" valid={passValid.uniq} />
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => authMode === 'signup' ? setStep(2) : alert('Login Berhasil')}
                  disabled={authMode === 'signup' && !isSignupValid}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4 flex items-center justify-center gap-2"
                >
                  {authMode === 'signin' ? 'Masuk Sekarang' : 'Lanjutkan'} <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="space-y-8 py-2">
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                  <p className="text-sm font-bold text-blue-800">Kode OTP dikirim ke Email Anda.</p>
                </div>
                <div className="flex justify-between gap-2 max-w-[320px] mx-auto">
                  {[...Array(6)].map((_, i) => (
                    <input key={i} type="text" maxLength={1} className="w-11 h-14 bg-white border-2 border-slate-200 rounded-xl text-center text-xl font-black focus:border-blue-600 focus:-translate-y-1 outline-none transition-all shadow-sm" />
                  ))}
                </div>
                <button onClick={() => alert('Berhasil!')} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all">Verifikasi Akun</button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-100">
               <button onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')} className="w-full text-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                {authMode === 'signin' ? "Belum punya akun? Daftar Sekarang" : "Sudah punya akun? Login di sini"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Requirement({ label, valid }: { label: string, valid: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 text-[10px] font-bold transition-all ${valid ? 'text-green-600 bg-green-50' : 'text-slate-400 bg-slate-50'} py-1.5 px-3 rounded-lg border ${valid ? 'border-green-100' : 'border-slate-100'}`}>
      {valid ? <CheckCircle2 size={10} /> : <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />}
      {label}
    </div>
  )
}
