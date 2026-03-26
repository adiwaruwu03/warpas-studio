export default function LandingPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Jasa Landing Page
      </h1>

      <p className="mb-6 text-muted-foreground">
        Halaman penjualan yang dirancang untuk meningkatkan konversi dan membantu Anda mendapatkan lebih banyak pelanggan.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Cocok Untuk
      </h2>
      <ul className="list-disc ml-5 mb-6">
        <li>Produk digital</li>
        <li>Promosi bisnis</li>
        <li>Iklan Facebook / Instagram</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Fitur
      </h2>
      <ul className="list-disc ml-5 mb-6">
        <li>Desain fokus konversi</li>
        <li>CTA jelas</li>
        <li>Mobile friendly</li>
        <li>Loading cepat</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        Harga
      </h2>
      <p className="mb-6">
        Mulai dari <strong>400K</strong>
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