import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FaBuilding, FaPhone, FaEnvelope, FaCheckCircle,
  FaExclamationCircle, FaMapMarkerAlt, FaClock,
  FaGlobe
} from 'react-icons/fa';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import Logo from '../images/logo.svg';

const SectionHeader = ({ title }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
      <img src={Logo} alt="Ship Icon" className="w-15 h-15 object-contain" />
    </div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary text-center sm:text-left leading-tight">
      {title}
    </h1>
  </div>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const officeLocations = [
  {
    id: 1,
    name: 'Head Office (Busan)',
    address: '4th Floor, Dongil Bldg, 12-3 Jungang-daero 180beon-gil, Dong-gu, Busan, Rep. of KOREA',
    phone: '+82-51-462-2227',
    email: 'smd@sungan.kr',
    position: { lat: 35.1296, lng: 129.0396 },
    color: '#0077BE',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM (KST)'
  },
  {
    id: 2,
    name: 'Seoul Branch',
    address: '2FL. SK BLDG., 157, World Cup-ro, Mapo-gu, Seoul, Rep. of Korea',
    phone: '+82-51-462-2227',
    email: 'smd@sungan.kr',
    position: { lat: 37.5665, lng: 126.9780 },
    color: '#dc2626',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM (KST)'
  },
  {
    id: 3,
    name: 'Yangon Office',
    address: 'Yangon, Myanmar',
    phone: '+95-xxx-xxx-xxxx',
    email: 'smd@sungan.kr',
    position: { lat: 16.8409, lng: 96.1735 },
    color: '#0077BE',
    workingHours: 'Mon-Fri: 9:00 AM - 5:00 PM (MMT)'
  }
];

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: t('contact.success_message')
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || t('contact.error_message')
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('contact.network_error')
      });
    } finally {
      setIsLoading(false);
    }
  };

  const defaultCenter = { lat: 35.1296, lng: 129.0396 };

  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* Logo + Title */}
        <SectionHeader title={t('contact.title')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Offices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body mb-10">
              {t('contact.description')}
            </p>

            {/* Office Locations List */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-semibold text-primary">{t('contact.our_offices')}</h3>
              {officeLocations.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => setSelectedOffice(office)}
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">{office.name}</h4>
                      <p className="text-body text-sm mb-2">{office.address}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-body">
                        {office.phone && <span>📞 {office.phone}</span>}
                        <span>📧 {office.email}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                        <FaClock className="w-3 h-3" />
                        <span>{office.workingHours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">{t('contact.general_inquiries')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.phone')}</p>
                    <p className="text-body font-medium">+82-51-462-2227</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.email')}</p>
                    <p className="text-body font-medium">smd@sungan.kr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaGlobe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.website')}</p>
                    <p className="text-body font-medium">www.sungan.kr</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">{t('contact.send_message')}</h2>
              <p className="text-body mb-6">{t('contact.form_description')}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {status.message && (
                  <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {status.type === 'success' ? (
                      <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-heading font-medium mb-2">{t('contact.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder={t('contact.name_placeholder')}
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-heading font-medium mb-2">{t('contact.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder={t('contact.email_placeholder')}
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-heading font-medium mb-2">{t('contact.message')} *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder={t('contact.message_placeholder')}
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 text-white rounded-xl font-semibold transition-all ${isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 active:scale-98'
                    }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}
                    </span>
                  ) : (
                    t('contact.submit')
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">{t('contact.find_us')}</h2>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={defaultCenter}
                defaultZoom={6}
                gestureHandling={'greedy'}
                mapId={'sungan-office-map'}
                className="w-full h-full"
              >
                {officeLocations.map((office) => (
                  <AdvancedMarker
                    key={office.id}
                    position={office.position}
                    onClick={() => setSelectedOffice(office)}
                  >
                    <Pin
                      background={office.color}
                      borderColor={'#ffffff'}
                      glyphColor={'#ffffff'}
                    />
                  </AdvancedMarker>
                ))}

                {selectedOffice && (
                  <InfoWindow
                    position={selectedOffice.position}
                    onCloseClick={() => setSelectedOffice(null)}
                  >
                    <div className="p-4 min-w-[250px]">
                      <h3 className="font-bold text-primary text-lg mb-2">{selectedOffice.name}</h3>
                      <p className="text-body text-sm mb-2">{selectedOffice.address}</p>
                      <div className="space-y-1 text-sm text-body">
                        {selectedOffice.phone && <p>📞 {selectedOffice.phone}</p>}
                        <p>📧 {selectedOffice.email}</p>
                        <p>🕒 {selectedOffice.workingHours}</p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir//${selectedOffice.position.lat},${selectedOffice.position.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary text-sm font-medium hover:underline"
                      >
                        {t('contact.get_directions')} →
                      </a>
                    </div>
                  </InfoWindow>
                )}
              </Map>
            </APIProvider>
          </div>
        </motion.div>
      </section>
    </div>
  );
}