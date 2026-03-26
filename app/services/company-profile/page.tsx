export default function CompanyProfilePage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Jasa Website Company Profile
      </h1>

      <p className="mb-6 text-muted-foreground">
        Tampilkan bisnis Anda lebih profesional dengan website modern yang meningkatkan kepercayaan pelanggan.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Cocok Untuk
      </h2>
      <ul className="list-disc ml-5 mb-6">
        <li>UMKM</li>
        <li>Bisnis lokal</li>
        <li>Personal brand</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Fitur
      </h2>
      <ul className="list-disc ml-5 mb-6">
        <li>Desain modern</li>
        <li>Mobile responsive</li>
        <li>Integrasi WhatsApp</li>
        <li>Basic SEO</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Harga
      </h2>
      <p className="mb-6">
        Mulai dari <strong>400K – 700K</strong> tergantung kebutuhan.
      </p>

      <a
        href="https://wa.me/628XXXXXXXXXX"
        className="inline-block px-6 py-3 bg-black text-white rounded-lg"
      >
        Konsultasi via WhatsApp
      </a>

    </div>
  )
}