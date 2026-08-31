import { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      // Mock submission for local testing if no key is set
      console.warn('Web3Forms access key not found. Mocking email submission.');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: 'Abhishek Yadav Portfolio',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="md:col-span-2 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let's build something great.
            </h3>
            <p className="text-slate-650 dark:text-slate-350 leading-relaxed">
              Have an exciting project idea, a job opportunity, or just want to connect? Drop me a message, and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-500 border border-sky-100/10 dark:border-sky-900/10 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Email Address</h4>
                  <a href="mailto:abhisheky0718@gmail.com" className="text-sm text-slate-650 dark:text-slate-400 hover:text-sky-500 transition-colors">
                    abhisheky0718@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-950/40 text-violet-500 border border-violet-100/10 dark:border-violet-900/10 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Phone Number</h4>
                  <a href="tel:+918299083126" className="text-sm text-slate-650 dark:text-slate-400 hover:text-sky-500 transition-colors">
                    +91 8299083126
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 border border-emerald-100/10 dark:border-emerald-900/10 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">Location</h4>
                  <span className="text-sm text-slate-655 dark:text-slate-400">
                    Lucknow, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="md:col-span-3 glass-card p-6 md:p-8 border border-slate-200/40 dark:border-slate-800/40 text-left">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-2">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-355 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been received, and I'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-705 dark:text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/10 flex items-center gap-3 text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-705 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-905 border text-slate-850 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all duration-200 ${
                      errors.name 
                        ? 'border-rose-500 focus:ring-rose-500/40' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-sky-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-705 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-905 border text-slate-855 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all duration-200 ${
                      errors.email 
                        ? 'border-rose-500 focus:ring-rose-500/40' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-sky-500'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-705 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-905 border text-slate-855 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-all duration-200 resize-none ${
                      errors.message 
                        ? 'border-rose-500 focus:ring-rose-500/40' 
                        : 'border-slate-200 dark:border-slate-800 focus:border-sky-500'
                    }`}
                    placeholder="Hi, I'd like to talk about a project..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-650 hover:from-sky-600 hover:to-violet-750 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
