import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUsers, FaShip, FaWrench, FaBuilding, FaFileAlt, FaCheckCircle, FaCompass, FaFilePdf, FaTimes } from 'react-icons/fa';
import ProactiveCrewImg from '../images/proactive - crew management 1.png';
import ShipManagementImg from '../images/ship management1 1.png';
import Pdf1 from '../pdf/1.pdf';
import Pdf2 from '../pdf/2.pdf';
import Pdf3 from '../pdf/3.pdf';
import Pdf4 from '../pdf/4.pdf';
import Pdf1i from '../images/ISM Code 1.png';
import Pdf2i from '../images/ISM Code 2.png';
import Pdf3i from '../images/ISM Code 3.png';
import Pdf4i from '../images/ISM Code 4.png';

import ArrangementImg from '../images/Crew.png';
import TrainingImg from '../images/Training.png';
import VerificationImg from '../images/New.png';
import MyshipImg from '../images/myship.png';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Services() {
  const { t } = useTranslation();
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certifications = [
    {
      title: t('services.cert1'),
      desc: t('services.cert1_desc'),
      pdf: Pdf1,
      previewImg: Pdf1i,
      fileName: 'ISM_CODE_Certification.pdf'
    },
    {
      title: t('services.cert2'),
      desc: t('services.cert2_desc'),
      pdf: Pdf2,
      previewImg: Pdf2i,
      fileName: 'DOC_Certificate.pdf'
    },
    {
      title: t('services.cert3'),
      desc: t('services.cert3_desc'),
      pdf: Pdf3,
      previewImg: Pdf3i,
      fileName: 'ISSC_Certificate.pdf'
    },
    {
      title: t('services.cert4'),
      desc: t('services.cert4_desc'),
      pdf: Pdf4,
      previewImg: Pdf4i,
      fileName: 'Safety_Certificate.pdf'
    }
  ];



  const crewItems = [
    { title: t('services.arrangement'), desc: t('services.arrangement_desc'), image: ArrangementImg },
    { title: t('services.crew_training'), desc: t('services.crew_training_desc'), image: TrainingImg },
    { title: t('services.verification'), desc: t('services.verification_desc'), image: VerificationImg },
    { title: t('services.myship'), desc: t('services.myship_desc'), image: MyshipImg },
  ];
  const newBuildingSteps = [
    { title: t('services.review_spec'), desc: t('services.review_spec_desc'), icon: FaFileAlt },
    { title: t('services.prereview'), desc: t('services.prereview_desc'), icon: FaCheckCircle },
    { title: t('services.review_drawings'), desc: t('services.review_drawings_desc'), icon: FaWrench },
    { title: t('services.supervising_site'), desc: t('services.supervising_site_desc'), icon: FaBuilding },
    { title: t('services.crew_management'), desc: t('services.crew_management_desc'), icon: FaUsers },
    { title: t('services.sea_trial'), desc: t('services.sea_trial_desc'), icon: FaCompass },
    { title: t('services.receiving'), desc: t('services.receiving_desc'), icon: FaFileAlt },
    { title: t('services.close_meeting'), desc: t('services.close_meeting_desc'), icon: FaShip }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Crew Management */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary">
            {t('services.crew_management')}
          </h2>
          <p className="text-lg text-body max-w-4xl leading-relaxed">
            {t('services.crew_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {crewItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[14px] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >

              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6  overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-body mb-4">{item.title}</h3>
              <p className="text-body whitespace-pre-line">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proactive Crew Management Image */}
        <div className="bg-surface rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            {t('services.proactive_crew')}
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <img
              src={ProactiveCrewImg}
              alt="Proactive Crew Management Flow"
              className="rounded-xl shadow-md w-full max-w-5xl mx-auto object-contain h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Ship Management */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary">
              {t('services.ship_management')}
            </h2>
            <p className="text-lg text-body max-w-4xl leading-relaxed">
              {t('services.ship_desc')}
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
                src={ShipManagementImg}
                alt="Ship Management Process"
                className="rounded-2xl shadow-lg w-full max-w-5xl mx-auto object-contain h-auto"
              />
            </motion.div>
          </div>

          <h3 className="text-2xl font-semibold mb-12 text-center text-primary">
            {t('services.certifications')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[14px] p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedPdf(cert.pdf)}
              >

                <div className="w-24 h-32 bg-gray-50 rounded-lg mb-6 flex items-center justify-center border border-gray-200 hover:border-primary/30 transition-colors overflow-hidden">
                  <img
                    src={cert.previewImg}
                    alt={cert.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-lg font-semibold text-body mb-3">{cert.title}</h4>
                <p className="text-body text-sm">{cert.desc}</p>
                <button
                  className="mt-4 text-primary text-sm font-medium hover:underline flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPdf(cert.pdf);
                  }}
                >
                  {t('services.view_certificate')} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair / Supply */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-3xl text-primary">
            {t('services.repair_supply')}
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=800&auto=format&fit=crop"
                alt="Repair 1"
                className="rounded-xl shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                alt="Repair 2"
                className="rounded-xl shadow-md w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop"
                alt="Repair 3"
                className="rounded-xl shadow-md w-full h-48 object-cover col-span-2"
              />
            </div>
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <ul className="space-y-6 text-lg text-body list-disc pl-6">
                <li>{t('services.repair_point1')}</li>
                <li>{t('services.repair_point2')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* New Building Supervising */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary text-center">
            {t('services.new_building')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newBuildingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-primary/20 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {step.title}
                  </h3>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-body whitespace-pre-line text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-4xl h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h3 className="font-semibold text-primary">{t('services.certificate_document')}</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <FaTimes className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <iframe
              src={selectedPdf}
              className="w-full h-[calc(85vh-60px)]"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
}