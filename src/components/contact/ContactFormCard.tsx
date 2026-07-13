import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { contactAPI } from '../../services/api';

const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
});
const validateForm = () => {
  const newErrors = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  let valid = true;

  // First Name
  if (!formData.firstName.trim()) {
    newErrors.firstName = 'First name is required';
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(formData.firstName)) {
    newErrors.firstName = 'Only letters allowed';
    valid = false;
  }

  // Last Name
  if (!formData.lastName.trim()) {
    newErrors.lastName = 'Last name is required';
    valid = false;
  } else if (!/^[A-Za-z ]+$/.test(formData.lastName)) {
    newErrors.lastName = 'Only letters allowed';
    valid = false;
  }

  // Email
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = 'Enter a valid email';
    valid = false;
  }

  // Phone
  if (
    !/^(\+91)?[6-9]\d{9}$/.test(
      formData.phoneNumber.replace(/\s+/g, '')
    )
  ) {
    newErrors.phoneNumber = 'Enter a valid phone number';
    valid = false;
  }

  // Message
  if (formData.message.trim().length < 20) {
    newErrors.message =
      'Message should be at least 20 characters';
    valid = false;
  }

  setErrors(newErrors);

  return valid;
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!validateForm()) return;
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Map frontend fields to backend schema
      await contactAPI.submit({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phoneNumber,
        message: formData.message,
      });

      setStatus('success');
      setStatusMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(
        err.response?.data?.message || 'Something went wrong. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-sm">
      {/* Card Header */}
      <div className="mb-8">
        <h2 className="font-syne font-bold text-2xl text-[#221410] mb-2">
          Send Us a Message
        </h2>
        <p className="font-manrope font-extralight text-sm text-[#4B5563]">
          Fill in the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name & Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
              First Name
            </label>
            <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleInputChange}
  placeholder="John"
  className={`w-full bg-[#F5F1E8] rounded-xl px-4 py-3.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8]
  border transition-all duration-300 focus:outline-none focus:ring-4
  ${
    errors.firstName
      ? "border-red-400 focus:ring-red-100"
      : "border-[#E6E0DA] focus:border-[#D4755B] focus:ring-[#D4755B]/20"
  }`}
/>

{errors.firstName && (
  <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
    <AlertCircle className="w-4 h-4" />
    {errors.firstName}
  </p>
)}
          </div>

          <div>
            <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              required
              className={`w-full bg-[#F5F1E8] rounded-xl px-4 py-3.5 text-sm
border transition-all duration-300 focus:outline-none focus:ring-4
${
errors.lastName
? "border-red-400 focus:ring-red-100"
: "border-[#E6E0DA] focus:border-[#D4755B] focus:ring-[#D4755B]/20"
}`}
/>

{errors.lastName && (
<p className="mt-2 flex items-center gap-1 text-sm text-red-500">
<AlertCircle className="w-4 h-4"/>
{errors.lastName}
</p>
)}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            required
            className={`w-full bg-[#F5F1E8] rounded-xl px-4 py-3.5 text-sm
border transition-all duration-300 focus:outline-none focus:ring-4
${
errors.email
? "border-red-400 focus:ring-red-100"
: "border-[#E6E0DA] focus:border-[#D4755B] focus:ring-[#D4755B]/20"
}`}
/>

{errors.email && (
<p className="mt-2 flex items-center gap-1 text-sm text-red-500">
<AlertCircle className="w-4 h-4"/>
{errors.email}
</p>
)}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            required
            className={`w-full bg-[#F5F1E8] rounded-xl px-4 py-3.5 text-sm
border transition-all duration-300 focus:outline-none focus:ring-4
${
errors.phoneNumber
? "border-red-400 focus:ring-red-100"
: "border-[#E6E0DA] focus:border-[#D4755B] focus:ring-[#D4755B]/20"
}`}
/>

{errors.phoneNumber && (
<p className="mt-2 flex items-center gap-1 text-sm text-red-500">
<AlertCircle className="w-4 h-4"/>
{errors.phoneNumber}
</p>
)}
        </div>

        {/* Message */}
        <div>
          <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
name="message"
value={formData.message}
onChange={handleInputChange}
rows={5}
maxLength={500}
placeholder="Tell us about your inquiry..."
className={`w-full bg-[#F5F1E8] rounded-xl px-4 py-3.5 text-sm resize-none
border transition-all duration-300 focus:outline-none focus:ring-4
${
errors.message
? "border-red-400 focus:ring-red-100"
: "border-[#E6E0DA] focus:border-[#D4755B] focus:ring-[#D4755B]/20"
}`}
/>

<div className="mt-2 flex justify-between">

{errors.message ? (

<p className="flex items-center gap-1 text-sm text-red-500">
<AlertCircle className="w-4 h-4"/>
{errors.message}
</p>

) : (

<div />

)}

<p className="text-xs text-gray-400">
{formData.message.length}/500
</p>

</div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D4755B] hover:bg-[#C5674D] text-white rounded-xl py-3.5 font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Status Message */}
        {status === 'success' && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
            <p className="font-manrope text-sm text-green-700">{statusMessage}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <p className="font-manrope text-sm text-red-700">{statusMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormCard;