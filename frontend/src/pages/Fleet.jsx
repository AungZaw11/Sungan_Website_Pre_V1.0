import React from 'react';
import { motion } from 'framer-motion';
import ShipCard from '../components/ShipCard';
import { bulkFleet, passengerFleet } from '../data/fleetData';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Fleet() {
  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary">
          Status of Fleets 1
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bulkFleet.map((ship, i) => <ShipCard key={i} ship={ship} index={i} />)}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary">
          Status of Fleets 2
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passengerFleet.map((ship, i) => <ShipCard key={i} ship={ship} index={i} />)}
        </div>
      </section>
    </div>
  );
}