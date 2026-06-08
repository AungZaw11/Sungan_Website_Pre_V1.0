import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ShipCard from '../components/ShipCard';
import { bulkFleet, passengerFleet } from '../data/fleetData';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Fleet() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494412519320-ce68ade53f53?q=80&w=2940&auto=format&fit=crop")' }}
        />
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {t('fleet.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            {t('fleet.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          {t('fleet.bulk')}
        </motion.h2>
        <p className="text-body mb-12 max-w-2xl">
          {t('fleet.bulk_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulkFleet.map((ship, i) => <ShipCard key={i} ship={ship} index={i} />)}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          {t('fleet.passenger')}
        </motion.h2>
        <p className="text-body mb-12 max-w-2xl">
          {t('fleet.passenger_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passengerFleet.map((ship, i) => <ShipCard key={i} ship={ship} index={i} />)}
        </div>
      </section>
    </div>
  );
}