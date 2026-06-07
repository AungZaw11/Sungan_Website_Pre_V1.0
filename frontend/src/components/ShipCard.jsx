import React from 'react';
import { motion } from 'framer-motion';

export default function ShipCard({ ship, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-[14px] shadow-sm border border-gray-100 overflow-hidden flex flex-col"
    >
      <div className="h-40 w-full overflow-hidden">
        <img src={ship.image} alt={ship.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-grow relative">
        <h3 className="text-xl font-semibold text-body mb-4 pr-20">{ship.name}</h3>
        <div className="text-body space-y-1">
          <p>TYPE : {ship.type}</p>
          <p>Built : {ship.built}</p>
          <p>GT : {ship.gt}</p>
          <p>DWT : {ship.dwt}</p>
          <p>Class : {ship.class}</p>
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red" />
          <span className="font-medium text-primary">{ship.country}</span>
        </div>
      </div>
    </motion.div>
  );
}