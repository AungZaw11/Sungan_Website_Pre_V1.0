import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaShip, FaWrench, FaBuilding, FaFileAlt, FaCheckCircle, FaCompass } from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Crew Management */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary">
            Crew Management
          </h2>
          <p className="text-lg text-body max-w-4xl leading-relaxed">
            SUNGAN Shipping adopts an innovative system and provide a
            differentiated services based on abundant ship management
            experience. In addition, SUNGAN Shipping will respond to new system
            requirements of shipowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { title: 'Arrangement after Disembarkation', desc: 'Duration of Vacation\nExpected next Joining Schedule\nApproval by Shipowner\nProvisional Contract', icon: FaUsers },
            { title: 'Crew Training', desc: 'M/B: Cooking Training\nE/C : Welding Training and Certification\nD/C: Office Work', icon: FaFileAlt },
            { title: 'Verification New Joiner', desc: 'Catering : Cooking Test\nFTR : Welding Test\nOfficer/Engineer: English Test', icon: FaCheckCircle },
            { title: 'MYSHIP', desc: 'Teamwork rises by operating MYSHIP for all crew members under the captain/Chief Engineer\nStrengthening emergency response\nInspire loyalty through long-term service induction', icon: FaShip }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[14px] p-8 shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-primary-light">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-body mb-4">{item.title}</h3>
              <p className="text-body whitespace-pre-line">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proactive Crew Management Image */}
        <div className="bg-surface rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            Proactive Crew Management
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <img
              src="src/images/proactive - crew management 1.png"
              alt="Proactive Crew Management Flow"
              className="rounded-xl shadow-md w-full max-w-5xl mx-auto object-contain h-auto"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400?text=Proactive+Crew+Management';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Ship Management */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary">
              Ship Management
            </h2>
            <p className="text-lg text-body max-w-4xl leading-relaxed">
              SUNGAN Shipping guarantees the reliable management through open
              communication with managed vessels ↔ manager ↔ client, and
              report and approval of results by stage.
            </p>
          </motion.div>

          {/* Ship Management Process Image */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-x-auto"
            >
              <img
                src="src/images/ship management1 1.png"
                alt="Ship Management Process"
                className="rounded-2xl shadow-lg w-full max-w-5xl mx-auto object-contain h-auto"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400?text=Ship+Management+Process';
                }}
              />
            </motion.div>
          </div>

          <h3 className="text-2xl font-semibold mb-12 text-center text-primary">
            Status of System Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Certification of Company under ISM CODE', desc: 'Certification that it is a company entrusted with the establishment and implementation of the safety management system for the shipowner.' },
              { title: 'DOC', desc: "Certification that the shipping company's safety management system complies with the requirements of the International Management CODE for the safety operation of ship's and for pollution prevention." },
              { title: 'ISSC', desc: 'This certificate, it proves that there are no violations related to ship security activities and prevents disadvantages such as refusal of entry or suspension of departure.' }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[14px] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-32 h-40 bg-gray-100 rounded mb-8 flex items-center justify-center border border-gray-200">
                  <FaFileAlt className="w-12 h-12 text-gray-400" />
                </div>
                <h4 className="text-xl font-semibold text-body mb-4">{cert.title}</h4>
                <p className="text-body">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair / Supply */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-3xl text-primary">
            Managing of Repair / Supply of Ship's Part and Store
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop" alt="Repair 1" className="rounded-xl shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Repair 2" className="rounded-xl shadow-md w-full h-48 object-cover" />
              <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop" alt="Repair 3" className="rounded-xl shadow-md w-full h-48 object-cover col-span-2" />
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <ul className="space-y-6 text-lg text-body list-disc pl-6">
                <li>Available to supply original ship's spare parts with competitive price</li>
                <li>Available to support repairing ship's spares through collaboration with professional repair/technical companies related to old ships</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Building Supervising */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary">
            New Building Supervising
          </motion.h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-[150px] left-0 right-0 h-px" style={{ backgroundColor: '#0077BE33' }} />
            <div className="hidden lg:block absolute top-[470px] left-0 right-0 h-px" style={{ backgroundColor: '#0077BE33' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Review Specification', desc: '•Review specifications of similar ship types\n•Identify problems of delivered ships', icon: FaFileAlt },
                { title: 'Prereview for Maker Approval', desc: '•Decision of Maker to secure safe operation and easy maintenance', icon: FaCheckCircle },
                { title: 'Review Drawings and Approval', desc: '•Review shipyard drawings by checking construction specifications and classification rules\n•Classification of approved drawings, etc.', icon: FaWrench },
                { title: 'Supervising Site', desc: '•hull inspection\n•Electrical inspection\n•Identify nonconformity\n•Management supervision of corrective measures, etc.', icon: FaBuilding },
                { title: 'Crew Management', desc: '•Support for work related to ship supply', icon: FaUsers },
                { title: 'Sea Trial', desc: '•Ensuring ship building as intended\n•attend the sea trial and supervise', icon: FaCompass },
                { title: 'Receiving Supplies and Certificates', desc: 'Acquisition of legal equipment provided by shipyard\nReceiving certificates provided by shipyard\nSupport loading ship supplies.', icon: FaFileAlt },
                { title: 'Close Meeting and Departure', desc: '•Identification of Extras & Credits\n•Completing the procedures\n•Reporting vessel departure and results', icon: FaShip }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-[14px] p-8 shadow-sm border border-gray-100 relative z-10 h-[300px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold text-body max-w-[180px]">{step.title}</h3>
                    <step.icon className="w-8 h-8" style={{ color: '#dc2626' }} />
                  </div>
                  <p className="text-body whitespace-pre-line text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}