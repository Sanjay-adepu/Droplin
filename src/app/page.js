import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-800 font-sans">
      <div className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#008edc] mb-8 leading-snug tracking-tight">
          Welcome to <span className="text-gray-900">Droplin</span>
        </h1>

        <section className="text-left space-y-8 bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Droplin</strong> is a smart file-sharing platform built to seamlessly transfer files, text, and links between devices like laptops and mobiles.
            Whether you're in a classroom, office, or working remotely, Droplin makes it effortless to upload and retrieve data using a unique code or QR scanner.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">✨ Key Features</h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base">
            <li><span className="font-medium">Multiple file upload:</span> Documents, PDFs, images, music, videos, APKs, and more.</li>
            <li><span className="font-medium">Text sharing:</span> Instantly share notes or code snippets without third-party tools.</li>
            <li><span className="font-medium">Link transfer:</span> Effortlessly pass URLs between your devices.</li>
            <li><span className="font-medium">Session ID:</span> Organize and retrieve files via unique session codes.</li>
            <li><span className="font-medium">QR scanning:</span> Instantly open shared files on your mobile device.</li>
            <li><span className="font-medium">One-click download:</span> Download all session data with one tap.</li>
            <li><span className="font-medium">Fully responsive:</span> Works seamlessly on both desktop and mobile.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Link
              href="/upload"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Upload Files / Text / Link
            </Link>
            <Link
              href="/download"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Download using Code / QR
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}