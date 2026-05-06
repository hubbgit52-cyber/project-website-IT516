"use client";

import { useState } from 'react';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error on input
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    const value = formData[field as keyof typeof formData];
    let error = '';

    if (field === 'name' && !value.trim()) {
      error = 'Name is required.';
    } else if (field === 'email') {
      if (!value.trim()) {
        error = 'Email is required.';
      } else if (!validateEmail(value)) {
        error = 'Please enter a valid email address.';
      }
    } else if (field === 'message' && !value.trim()) {
      error = 'Please enter a message.';
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');

    // Validate all fields
    const newErrors = {
      name: !formData.name.trim() ? 'Name is required.' : '',
      email: !formData.email.trim() ? 'Email is required.' : (!validateEmail(formData.email) ? 'Please enter a valid email address.' : ''),
      message: !formData.message.trim() ? 'Please enter a message.' : ''
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error);
    if (hasErrors) {
      setStatus('Please fix the errors above before sending.');
      return;
    }

    setStatus('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
          required
          aria-describedby="name-error"
        />
        <span id="name-error" className="error-message" role="alert">{errors.name}</span>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          required
          aria-describedby="email-error"
        />
        <span id="email-error" className="error-message" role="alert">{errors.email}</span>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          required
          aria-describedby="message-error"
        />
        <span id="message-error" className="error-message" role="alert">{errors.message}</span>
      </div>

      <button type="submit">Send Message</button>
      <div className="form-status" aria-live="polite">{status}</div>
    </form>
  );
}
