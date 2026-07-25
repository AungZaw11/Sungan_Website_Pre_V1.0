import React from 'react';
import { motion } from 'framer-motion';

export default function ShipCard({ ship, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-[14px] shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
    >
      {/* Ship Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={ship.image}
          alt={ship.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-primary">{ship.name}</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="font-medium text-body text-sm">{ship.country}</span>
          </div>
        </div>

        <div className="space-y-2 text-body text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">TYPE :</span>
            <span className="font-medium">{ship.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Built :</span>
            <span className="font-medium">{ship.built}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">GT :</span>
            <span className="font-medium">{ship.gt}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">DWT :</span>
            <span className="font-medium">{ship.dwt}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Class :</span>
            <span className="font-medium">{ship.class}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}