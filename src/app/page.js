import Link from 'next/link';
import styles from './home.module.css';


export default function Home() {
  return (
    <main className={styles.main}>
      {/* Decorative Images */}
      <img
        src="https://res.cloudinary.com/dppiuypop/image/upload/v1751213743/uploads/vvvdgte4rhkwzoo5z6hr.png"
        alt="Laptop"
        className={`${styles.backgroundImage} ${styles.bgLaptop}`}
        width={120}
        height={120}
      />
      <img
        src="https://res.cloudinary.com/dppiuypop/image/upload/v1751213809/uploads/uedw5fxiqtw6q7fotlrg.png"
        alt="Cloud"
        className={`${styles.backgroundImage} ${styles.bgCloud}`}
        width={100}
        height={100}
      />
      <img
        src="https://res.cloudinary.com/dppiuypop/image/upload/v1751213867/uploads/r4bdbnkx8tfsk312vbg3.png"
        alt="QR Code"
        className={`${styles.backgroundImage} ${styles.bgQR}`}
        width={80}
        height={80}
      />

      <div className={styles.container}>
        <h1 className={styles.heading}>
          Welcome to <span className={styles.highlight}>Droplin</span>
        </h1>

        <section className={styles.card}>
          <p className={styles.paragraph}>
            <strong>Droplin</strong> is a smart file-sharing platform built to seamlessly transfer files, text, and links between devices like laptops and mobiles.
            Whether you&rsquo;re in a classroom, office, or working remotely, Droplin makes it effortless to upload and retrieve data using a unique code or QR scanner.
          </p>

          <h2 className={styles.subheading}>✨ Key Features</h2>

          <ul className={styles.featureList}>
            <li><span className={styles.featureLabel}>Multiple file upload:</span> Documents, PDFs, images, music, videos, APKs, and more.</li>
            <li><span className={styles.featureLabel}>Text sharing:</span> Instantly share notes or code snippets without third-party tools.</li>
            <li><span className={styles.featureLabel}>Link transfer:</span> Effortlessly pass URLs between your devices.</li>
            <li><span className={styles.featureLabel}>Session ID:</span> Organize and retrieve files via unique session codes.</li>
            <li><span className={styles.featureLabel}>QR scanning:</span> Instantly open shared files on your mobile device.</li>
            <li><span className={styles.featureLabel}>One-click download:</span> Download all session data with one tap.</li>
            <li><span className={styles.featureLabel}>Fully responsive:</span> Works seamlessly on both desktop and mobile.</li>
          </ul>

          <div className={styles.buttonGroup}>
            <Link href="/upload" className={styles.uploadButton}>
              Upload Files / Text / Link
            </Link>
            <Link href="/download" className={styles.downloadButton}>
              Download using Code / QR
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}