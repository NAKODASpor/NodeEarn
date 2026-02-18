import Link from "next/link";
import { DollarSign, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-dark text-white">
      {/* Navbar Sederhana */}
      <nav className="w-full flex justify-between items-center max-w-5xl mb-10">
        <h1 className="text-2xl font-bold text-green-500">NodeEarn</h1>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-green-400">Masuk</Link>
          <Link href="/register" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Daftar</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-6">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Ubah Waktu Luang Jadi <span className="text-green-500">Cuan</span>
        </h2>
        <p className="text-gray-400 text-xl">
          Selesaikan survei, nonton iklan, dan isi captcha. Dibayar instan ke Dana/Crypto.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition">
            Mulai Hasilkan Sekarang
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <Zap className="w-10 h-10 text-yellow-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Misi Cepat</h3>
          <p className="text-gray-400">Ratusan tugas baru setiap hari yang bisa diselesaikan dalam hitungan menit.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <DollarSign className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Bayaran Tinggi</h3>
          <p className="text-gray-400">Rate CPM kami tertinggi di industri karena kami memotong biaya perantara.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Aman & Terpercaya</h3>
          <p className="text-gray-400">Sistem validasi anti-cheat dan pembayaran otomatis 24/7.</p>
        </div>
      </div>
    </main>
  );
}
