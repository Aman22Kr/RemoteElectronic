import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  HelpCircle 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { AdBanner } from '../components/common/AdBanner';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Remote Compatibility Verification');
  const [deviceModel, setDeviceModel] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      showToast('Please fill out all required fields', 'warning');
      return;
    }

    try {
      const inquiries = JSON.parse(localStorage.getItem('remote_electronic_inquiries') || '[]');
      inquiries.unshift({
        id: `INQ-${Date.now()}`,
        name,
        email,
        phone,
        category,
        deviceModel,
        message,
        date: new Date().toISOString()
      });
      localStorage.setItem('remote_electronic_inquiries', JSON.stringify(inquiries));
    } catch {
      // ignore
    }

    setSubmitted(true);
    showToast('Your message has been sent to our Delhi technical support team!', 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Contact RemoteElectronic Technical Support
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              Have a question regarding TV or AC remote compatibility? Our Delhi technicians are available 7 days a week.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Information & Store Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
                <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Store & Customer Care
                </h2>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Customer Helpline</span>
                      <a href="tel:08130733325" className="text-indigo-600 font-mono font-bold text-sm hover:underline block mt-0.5">
                        +91 81307 33325
                      </a>
                      <p className="text-slate-400 text-[11px] mt-0.5">Direct phone assistance for remote matching</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Email Inquiries</span>
                      <a href="mailto:support@remoteelectronic.com" className="text-indigo-600 font-medium hover:underline block mt-0.5">
                        support@remoteelectronic.com
                      </a>
                      <p className="text-slate-400 text-[11px] mt-0.5">Average reply time under 2 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Service Hours</span>
                      <p className="text-slate-700 font-medium mt-0.5">Monday to Sunday: 9:00 AM – 9:00 PM</p>
                      <p className="text-slate-400 text-[11px] mt-0.5">365 days technical support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Physical Store Address</span>
                      <p className="text-slate-700 mt-0.5 leading-relaxed">
                        A-268, Main Road, Anand Nagar, Nithari, Kirari Suleman Nagar, Delhi, 110086
                      </p>
                      <span className="text-emerald-700 font-semibold text-[11px] block mt-1">
                        Walk-in testing & remote replacement available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assistance Callout */}
              <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Send a Photo for Model Matching</span>
                </div>
                <h3 className="text-base font-bold">
                  Not Sure Which Remote Fits?
                </h3>
                <p className="text-xs text-indigo-200 leading-relaxed">
                  Call our technical helpline or leave an inquiry with your TV model number from the back panel sticker. We will verify compatibility before you place an order.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Inquiry Received!</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Thank you for contacting RemoteElectronic. A senior technician from our Delhi store will call or WhatsApp you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                      Send an Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Aman Kumar"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Contact Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="font-semibold text-slate-700 block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. aman@example.com"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Inquiry Topic</label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                        >
                          <option value="Remote Compatibility Verification">Remote Compatibility Verification</option>
                          <option value="Order Tracking & Dispatch Status">Order Tracking & Dispatch Status</option>
                          <option value="7-Day Replacement / Warranty Claim">7-Day Replacement / Warranty Claim</option>
                          <option value="Wholesale & Bulk Orders">Wholesale & Bulk Dealer Orders</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Device or TV Model No. (if known)</label>
                        <input
                          type="text"
                          value={deviceModel}
                          onChange={(e) => setDeviceModel(e.target.value)}
                          placeholder="e.g. Samsung 55AU8000 or Daikin 1.5T"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="font-semibold text-slate-700 block mb-1">Your Message or Issue Description *</label>
                        <textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what device you need a remote for or describe your inquiry..."
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Technicians</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
