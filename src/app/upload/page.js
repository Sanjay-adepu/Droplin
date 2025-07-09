"use client";
import React, { useState } from 'react';
import styles from './upload.module.css'; // ✅ Correct import for CSS Module
import Navbar from '../Navbar.js';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://ahqwlfgoxmepucldmpyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocXdsZmdveG1lcHVjbGRtcHljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTE3MDQ4OCwiZXhwIjoyMDY2NzQ2NDg4fQ.5jRexF8EgyBcg4kv5Z7mgypOeE3NPcVVskN7_LcTQL4'
);

const UploadInterface = () => {
  const [selectedType, setSelectedType] = useState('files');
  const [fileInputMode, setFileInputMode] = useState('files');
  const [files, setFiles] = useState([]);
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [code, setCode] = useState('');
  const [qrImage, setQrImage] = useState('');

  const handleSubmit = async () => {
    if (selectedType === 'files') {
      if (files.length === 0) return alert("Please select at least one file.");
      try {
        const uploadedFiles = [];

        for (const file of files) {
          const path = `uploads/${Date.now()}-${file.name}`;
          const { error } = await supabase.storage
            .from('uploads')
            .upload(path, file, {
              cacheControl: '3600',
              contentType: file.type,
              upsert: true,
            });

          if (error) throw error;

          const { data } = supabase.storage.from('uploads').getPublicUrl(path);
          uploadedFiles.push({ name: file.name, type: file.type, url: data.publicUrl });
        }

        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: uploadedFiles, text: '', link: '' }),
        });

        const result = await response.json();
        setCode(result.code);

        const qrRes = await fetch(`/api/qrcode/${result.code}`);
        const qrData = await qrRes.json();
        setQrImage(qrData.qr);
      } catch (err) {
        console.error('Upload failed:', err);
        alert('Upload failed');
      }
    } else {
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: [], text, link }),
        });

        const result = await response.json();
        setCode(result.code);

        const qrRes = await fetch(`/api/qrcode/${result.code}`);
        const qrData = await qrRes.json();
        setQrImage(qrData.qr);
      } catch (err) {
        console.error('Text/Link upload failed:', err);
        alert("Upload failed");
      }
    }
  };

  return (
<>
<Navbar/>
    <div className={styles.uploadContainer}>
      <div className={styles.instructions}>
      <h3 className={styles.heading}>How to upload</h3>
  


        <p>
          1. Select the type of data you want to upload: <strong>Files</strong>, <strong>Text</strong>, or <strong>Link</strong>.<br />
          2. Based on your selection, provide the required input and click <strong>Submit</strong>.
        </p>
        <p className={styles.fileInfo}>
          <strong>File Upload Info:</strong><br />
          - You can select <strong>multiple files</strong> or an entire <strong>folder</strong>.<br />
          - Supported types: <strong>Images, PDFs, PPTs, Word Docs, MP3s, MP4s, APKs</strong>, and more.
        </p>
        <hr />
      </div>

      <div className={styles.optionContainer}>
        {['files', 'text', 'link'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${styles.optionBtn} ${selectedType === type ? styles.active : ''}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.dynamicField}>
        {selectedType === 'files' && (
          <div className={styles.fileUploadMode}>
            <div className={styles.toggleMode}>
              <label>
                <input
                  type="radio"
                  value="files"
                  checked={fileInputMode === 'files'}
                  onChange={() => setFileInputMode('files')}
                />
                Select Files
              </label>
              <label>
                <input
                  type="radio"
                  value="folder"
                  checked={fileInputMode === 'folder'}
                  onChange={() => setFileInputMode('folder')}
                />
                Select Folder
              </label>
            </div>

            <input
              type="file"
              multiple
              {...(fileInputMode === 'folder' ? { webkitdirectory: 'true', directory: '' } : {})}
              onChange={(e) => setFiles(Array.from(e.target.files))}
              className={styles.inputField}
            />
          </div>
        )}

        {selectedType === 'text' && (
          <textarea
            rows="4"
            placeholder="Enter your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textareaField}
          />
        )}

        {selectedType === 'link' && (
          <input
            type="url"
            placeholder="Paste your link..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className={styles.inputField}
          />
        )}
      </div>

      <button onClick={handleSubmit} className={styles.submitBtn}>
        Submit
      </button>

      {code && (
        <div className={styles.resultContainer}>
          <h3>Generated Code:</h3>
          <p>{code}</p>
          <a
            href={`https://airbridge-backend.vercel.app/download/${code}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            Download Files
          </a>
          {qrImage && (
            <div className={styles.qrPreview}>
              <h4>QR Code:</h4>
              <img src={qrImage} alt="QR Code" />
            </div>
          )}
        </div>
      )}
    </div>
</>
  );
};

export default UploadInterface;