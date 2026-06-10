import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ShipCard from '../components/ShipCard';
import { bulkFleet, passengerFleet } from '../data/fleetData';
import Logo from '../images/logo.svg'

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


      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-8">
          <img src={Logo} alt="Ship Icon" className="w-15 h-15" />
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-semibold mb-4 text-primary">
            {t('fleet.bulk')}
          </motion.h2>
        </div>

        <p className="text-body mb-12 max-w-2xl">
          {t('fleet.bulk_desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulkFleet.map((ship, i) => <ShipCard key={i} ship={ship} index={i} />)}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-4">
          <img src={Logo} alt="Ship Icon" className="w-15 h-15" />
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-semibold mb-4 text-primary">
            {t('fleet.passenger')}
          </motion.h2>
        </div>
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