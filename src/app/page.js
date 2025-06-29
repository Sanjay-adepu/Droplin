import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="px-4 py-12 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#008edc] mb-8 leading-tight tracking-tight font-sans">
          Welcome to Droplin
        </h1>

        <div className="text-left space-y-6">
          <p className="text-gray-700">
            Droplin is a smart file-sharing platform built to seamlessly transfer files, text, and links between devices such as laptops and mobiles. 
            Whether you&apos;re in a classroom, office, or working remotely, Droplin allows you to quickly upload your data and access it from any device via a 
            unique code or QR scanner.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Key Features</h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Multiple file upload:</strong> Documents, PDFs, images, music, videos, APKs, PPTs, and more.</li>
            <li><strong>Text sharing:</strong> Notes or code snippets without third-party tools.</li>
            <li><strong>Link transfer:</strong> Easily share web URLs across devices.</li>
            <li><strong>Session ID:</strong> Organize files using unique session IDs.</li>
            <li><strong>QR scanning:</strong> Open shared content instantly on your phone.</li>
            <li><strong>One-click download:</strong> Grab everything in a session at once.</li>
            <li>Fully responsive design for desktop and mobile use.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link
              href="/upload"
              className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-center"
            >
              Upload Files / Text / Link
            </Link>
            <Link
              href="/download"
              className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg font-medium text-center"
            >
              Download using Code / QR
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}