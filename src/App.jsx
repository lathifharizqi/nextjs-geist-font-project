import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <header className="flex items-center justify-between max-w-4xl mx-auto p-6 border-b border-black">
        <h1 className="text-3xl font-bold">Personal Dashboard</h1>
        <img
          src="/arsip-nasional-ri-logo.png"
          alt="ARSIP NASIONAL RI Logo"
          className="h-10 w-auto"
        />
      </header>
      <main className="min-h-screen max-w-4xl mx-auto p-6 flex flex-col gap-12">
        {/* Header Section */}
        <header className="flex flex-col items-center gap-4">
          <img
            src="/profile-photo.jpg"
            alt="Profile Photo"
            className="w-32 h-32 rounded-full object-cover border-2 border-black"
          />
          <h1 className="text-4xl font-bold">Nama Lengkap, Gelar</h1>
          <p className="text-lg font-semibold text-gray-700">NIP: 1234567890</p>
        </header>

        {/* Personal Data Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b border-black pb-2">Data Personal</h2>
          <ul className="space-y-2 text-lg text-gray-800">
            <li><strong>Unit Kerja:</strong> Nama Unit Kerja</li>
            <li><strong>Pangkat + TMT:</strong> Pangkat, TMT Date</li>
            <li><strong>Prediksi KP:</strong> Prediksi KP Info</li>
            <li><strong>Angka Kredit Terakhir:</strong> Nilai Kredit</li>
            <li><strong>Jabatan + TMT:</strong> Jabatan, TMT Date</li>
            <li><strong>Sisa Cuti:</strong> Jumlah Hari</li>
            <li><strong>TMT Pensiun:</strong> Tanggal Pensiun</li>
            <li><strong>TMT Gaji Berkala Terakhir:</strong> Tanggal Gaji Berkala</li>
            <li><strong>Pemenuhan JP Tahun Lalu:</strong> Info JP</li>
            <li><strong>Alamat Domisili:</strong> Alamat Lengkap</li>
          </ul>
        </section>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
