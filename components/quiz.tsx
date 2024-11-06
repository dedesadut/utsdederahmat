"use client";
import React, { useState, FormEvent, ChangeEvent, CSSProperties } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  // Fungsi untuk mengatur rating
  const handleRating = (stars: number) => {
    setRating(stars);
  };

  // Fungsi untuk submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatusMessage(
      `Nama: ${name}, Email: ${email}, Pesan: ${message}, Rating: ${rating} bintang. Data akan segera diinput ke database. Terimakasih!`
    );
    setAllRatings((prevRatings) => [...prevRatings, rating]); // Tambahkan rating ke daftar rating
  };

  // Fungsi untuk membersihkan form
  const handleClear = () => {
    setName('');
    setEmail('');
    setMessage('');
    setRating(0);
    setStatusMessage(null);
  };

  // Hitung rata-rata rating
  const averageRating =
    allRatings.length > 0
      ? allRatings.reduce((sum, rating) => sum + rating, 0) / allRatings.length
      : 0;

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Nama"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          placeholder="Pesan"
          required
          style={styles.textarea}
        />

        {/* Rating Bintang */}
        <div style={styles.ratingContainer}>
          <p>Pilih Rating:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              style={{
                cursor: 'pointer',
                color: star <= rating ? '#FFD700' : '#ccc',
                fontSize: '24px',
                marginRight: '5px',
              }}
            >
              ★
            </span>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Submit
          </button>
          <button type="button" onClick={handleClear} style={styles.button}>
            Clear
          </button>
        </div>

        {/* Status Pesan */}
        {statusMessage && <p style={styles.status}>{statusMessage}</p>}

        {/* Rata-rata Rating */}
        <div style={styles.averageRating}>
          <p>Rata-rata Rating: {averageRating.toFixed(1)} bintang</p>
        </div>
      </form>
    </div>
  );
};

// CSS in JS
const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #ddd',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '80px',
  },
  ratingContainer: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  status: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
    marginTop: '10px',
  },
  averageRating: {
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
    marginTop: '20px',
  },
};

export default ContactForm;
