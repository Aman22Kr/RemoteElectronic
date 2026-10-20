import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Tv, 
  Wind, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdBanner } from '../components/common/AdBanner';

interface FAQItem {
  question: string;
  answer: string;
  category: 'compatibility' | 'pairing' | 'shipping' | 'returns' | 'warranty';
}

const FAQ_LIST: FAQItem[] = [
  {
    category: 'compatibility',
    question: 'How do I know if a RemoteElectronic remote will work with my TV?',
    answer: 'Look at the model number of your TV on the rear sticker (e.g., Samsung QA55Q60T or LG 43UQ7500) or check the part number printed on your original remote (e.g., BN59-01312A). Check the "Compatible Models" list on our product page. If in doubt, call our Delhi technicians at +91 81307 33325 and we will look up the frequency database for you.'
  },
  {
    category: 'compatibility',
    question: 'Do universal AC remotes require complicated programming codes?',
    answer: 'No! Our Universal AC remotes feature auto-search technology. Simply press and hold the "SET" or "SEARCH" button towards your air conditioner for 5 seconds until you hear a beep, then release. They also come with an instruction manual listing direct 3-digit brand codes for Daikin, Voltas, LG, Hitachi, Carrier, Panasonic, and 1,000+ others.'
  },
  {
    category: 'pairing',
    question: 'How do I pair a Samsung Smart Voice remote via Bluetooth?',
    answer: 'Turn on your Samsung TV manually. Point the new remote at the TV from within 1 meter. Press and hold the "Return / Back" (curved arrow) and "Play / Pause" buttons together for 3 to 5 seconds. The TV screen will display "Connecting to the Smart Control" followed by "Pairing Complete".'
  },
  {
    category: 'pairing',
    question: 'How do I pair an LG Magic Remote air mouse pointer?',
    answer: 'Turn on your LG TV. Stand facing the TV and press the center "Wheel (OK)" button on the Magic Remote. A confirmation message "Your Magic Remote has been registered" will appear on webOS. If unpairing is needed, hold the "Home" and "Back" buttons simultaneously for 5 seconds.'
  },
  {
    category: 'shipping',
    question: 'How long does delivery take across India?',
    answer: 'Orders placed before 2:00 PM Monday through Saturday are dispatched the same day from our Delhi warehouse. Delhi NCR orders typically arrive within 24 to 48 hours. Metro cities (Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata) take 2 to 3 days, and all other locations take 3 to 5 days via BlueDart Air and Delhivery Express.'
  },
  {
    category: 'shipping',
    question: 'What is the shipping charge?',
    answer: 'Shipping is completely FREE for all orders of ₹499 or more across India. For orders below ₹499, a nominal ₹50 express delivery charge applies.'
  },
  {
    category: 'returns',
    question: 'What is your 7-Day Replacement Policy?',
    answer: 'If the remote you ordered is not compatible with your device or does not operate properly, you are entitled to a 7-day hassle-free replacement or refund. Simply contact our support team with your Order ID and we will arrange an exchange for the correct remote model.'
  },
  {
    category: 'warranty',
    question: 'What warranty is provided with RemoteElectronic products?',
    answer: 'All RemoteElectronic remote controls carry a 6-Month to 1-Year Replacement Warranty against manufacturing defects and key-matrix failures. Smart TVs carry a 2-Year comprehensive on-site warranty.'
  }
];

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = FAQ_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-600">
              Help & Documentation
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions & Pairing Guides
            </h1>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto">
              Find answers regarding remote control compatibility, pairing instructions, shipping times and guarantees.
            </p>

            {/* Search Bar */}
            <div className="mt-6 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search question (e.g. Samsung pairing, delivery, warranty)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 text-xs mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setSelectedCategory('compatibility')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'compatibility'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Remote Compatibility
            </button>
            <button
              onClick={() => setSelectedCategory('pairing')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'pairing'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Bluetooth & Voice Pairing
            </button>
            <button
              onClick={() => setSelectedCategory('shipping')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'shipping'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Shipping & Delivery
            </button>
            <button
              onClick={() => setSelectedCategory('returns')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'returns'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              7-Day Returns & Guarantee
            </button>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-indigo-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-xs text-slate-600">No questions found matching "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-3 text-xs text-indigo-600 font-semibold underline"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>

          {/* Need help strip */}
          <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold">Still have questions regarding your electronic setup?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Our Delhi technicians are ready to verify your remote model.</p>
            </div>
            <a
              href="tel:08130733325"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-colors shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call +91 81307 33325</span>
            </a>
          </div>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
