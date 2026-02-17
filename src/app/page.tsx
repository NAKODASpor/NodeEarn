'use client'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('signin') // 'signin' atau 'signup'
  const [step, setStep] = useState(1) // 1: Form, 2: OTP
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passValid, setPassValid] = useState({
    len: false, cap: false, num: false, uniq: false
  })

  // Logika Validasi Password & Username
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

  const openModal = (mode: string) => {
    setAuthMode(mode)
    setStep(1)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* NAVBAR */}
      <nav className="fixed w-full z-[60] bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <span className="font-black text-xl">N</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Node<span className="text-blue-600">Earn</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => openModal('signin')} className="hidden sm:block text-sm font-bold text-slate-600 hover:text-blue-600 px-4 py-2 transition">Masuk</button>
            <button onClick={() => openModal('signup')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-extrabold shadow-lg transition-all active:scale-95">Daftar</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[12px] font-black text-blue-600 uppercase tracking-widest">Platform Penghasilan #1</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tighter text-slate-900">
            Kerja <span className="text-blue-600">Smart</span> Tanpa Skill Coding.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Cukup bermodalkan HP dan Internet. Selesaikan misi Tiktok & harian, tarik saldo rupiah instan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button onClick={() => openModal('signup')} className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-[1.5rem] font-extrabold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-95">
              Mulai Daftar Gratis
            </button>
            <a href="#" className="bg-white border-2 border-slate-200 text-slate-700 px-12 py-5 rounded-[1.5rem] font-extrabold text-lg hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-3">
              Follow TikTok
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-50 rotate-3 hover:rotate-0 transition-all duration-500">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Saldo Anda</p>
                  <h2 className="text-4xl font-black mt-1">Rp 1.450.000</h2>
                </div>
                <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center">💳</div>
              </div>
              <div className="flex items-end gap-3 h-24 mb-8">
                <div className="flex-1 bg-white/10 rounded-t-xl h-1/2"></div>
                <div className="flex-1 bg-white/20 rounded-t-xl h-3/4"></div>
                <div className="flex-1 bg-blue-500 rounded-t-xl h-full"></div>
              </div>
              <div className="flex justify-between p-4 bg-white/5 rounded-2xl border border-white/10 text-sm font-bold">
                <span className="text-slate-400">Biaya Admin</span>
                <span className="text-blue-400">Rp 1.500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTH MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative w-full max-w-md bg-white rounded-[3rem] p-8 lg:p-10 shadow-2xl border border-white animate-in zoom-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-black text-slate-900">{step === 2 ? 'Verifikasi OTP' : authMode === 'signin' ? 'Masuk' : 'Daftar Akun'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900">✕</button>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Username (4-7 Huruf Kecil)</label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="contoh: rejeki99" className="w-full h-14 px-6 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] font-bold text-sm focus:border-blue-600 outline-none transition-all" />
                  </div>
                )}
                <input type="email" placeholder="Email Aktif" className="w-full h-14 px-6 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] font-bold text-sm focus:border-blue-600 outline-none" />
                <div>
                  {authMode === 'signup' && <label className="text-[10px] font-black text-slate-400 uppercase ml-2 mb-2 block tracking-widest">Password Kuat</label>}
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-14 px-6 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] font-bold text-sm focus:border-blue-600 outline-none" />
                  
                  {authMode === 'signup' && (
                    <div className="grid grid-cols-2 gap-y-2 mt-5 px-2">
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
                  className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-extrabold text-lg shadow-xl shadow-blue-500/20 mt-6 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all"
                >
                  {authMode === 'signin' ? 'Masuk Sekarang' : 'Kirim Kode OTP'}
                </button>
              </div>
            ) : (
              <div className="space-y-8 py-4">
                <p className="text-center text-sm font-bold text-slate-500">Masukkan 6-digit kode OTP yang telah dikirim ke email Anda.</p>
                <div className="flex justify-between gap-2 max-w-[300px] mx-auto">
                  {[...Array(6)].map((_, i) => (
                    <input key={i} type="text" maxLength={1} className="w-11 h-14 bg-slate-50 border-2 border-slate-200 rounded-xl text-center text-xl font-black focus:border-blue-600 outline-none" />
                  ))}
                </div>
                <button onClick={() => alert('Pendaftaran Berhasil!')} className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-extrabold text-lg shadow-xl">Verifikasi Akun</button>
              </div>
            )}

            <p className="text-center text-sm font-bold text-slate-400 mt-8">
              {authMode === 'signin' ? "Belum punya akun?" : "Sudah punya akun?"} 
              <button onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')} className="text-blue-600 ml-2 font-black">
                {authMode === 'signin' ? 'Daftar Gratis' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      )}
    </main>
  )
}

function Requirement({ label, valid }: { label: string, valid: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-[10px] font-black transition-colors ${valid ? 'text-green-500' : 'text-slate-400'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${valid ? 'bg-green-500' : 'bg-slate-300'}`} />
      {label}
    </div>
  )
}
