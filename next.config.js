/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengaktifkan fitur React Strict Mode untuk mendeteksi potensi masalah pada kode
  reactStrictMode: true,
  
  // Mengizinkan pengambilan gambar dari domain luar (penting untuk login Google/Avatar)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Opsional: Jika kamu ingin aplikasi tetap jalan meski ada error ESLint saat build di Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
