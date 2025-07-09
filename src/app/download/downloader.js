
"use client"; // Required for Next.js App Router (for components using useState/useEffect)

import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Downloader = () => {
  const [code, setCode] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef(null);

  const handleDownload = () => {
    if (!code) return alert("Please enter or scan a code");
    window.open(`https://airbridge-backend.vercel.app/download/${code}`, '_blank');
  };

  useEffect(() => {
    if (showScanner) {
      const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 }, false);

      scanner.render(
        (decodedText) => {
          scanner.clear();
          const extracted = decodedText.split('/').pop();
          setCode(extracted);
          setShowScanner(false);
          window.open(`https://airbridge-backend.vercel.app/download/${extracted}`, '_blank');
        },
        (error) => {
          console.warn('QR Scan Error:', error);
        }
      );

      scannerRef.current = scanner;

      return () => {
        scanner.clear().catch((error) => console.error('Clear Error:', error));
      };
    }
  }, [showScanner]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Download Your File</h2>
      <p style={styles.description}>
        Enter your unique file code or scan the QR code to download the file directly.
      </p>

      <input
        type="text"
        placeholder="Enter Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonGroup}>
        <button style={styles.downloadBtn} onClick={handleDownload}>Download</button>
        <button style={styles.scanBtn} onClick={() => setShowScanner(!showScanner)}>
          {showScanner ? 'Close Scanner' : 'Scan QR Code'}
        </button>
      </div>

      {showScanner && (
        <div id="reader" style={{ width: '100%', marginTop: '20px' }}></div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  title: {
    fontSize: '24px',
    marginBottom: '1rem',
  },
  description: {
    marginBottom: '1.5rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginBottom: '1rem',
  },
  downloadBtn: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
  scanBtn: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  }
};

export default Downloader;
