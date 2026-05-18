import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h1
          {...fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16 leading-tight max-w-5xl text-primary"
        >
          We are committed to do our best to create a human-oriented
          organization and safety system.
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-body text-lg leading-relaxed"
          >
            <p>
              Surrounded on its other three sides by water, South Korea has been
              fostering marine workforce aiming to enter maritime.
            </p>
            <p>
              With continued increase in economic growth and national income,
              however, Korea's shipping industry is facing a shortage of
              seafarers.
            </p>
            <p>
              SUNGAN SHIPPING Co., Ltd. improves its business systematically in
              accordance with ISM CODE as the policy for safety and
              environmental protection and is committed to endeavor to create
              human-oriented organization.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2940&auto=format&fit=crop"
              alt="Ship at sea"
              className="rounded-2xl shadow-2xl object-cover h-[400px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1494412519320-ce68ade53f53?q=80&w=2940&auto=format&fit=crop")'
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, #0077BEcc, #0077BE99, #0077BEcc)`
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-white font-medium max-w-5xl mx-auto leading-relaxed">
            SUNGAN SHIPPING Co., Ltd. improves its business systematically in
            accordance with ISM CODE as the policy for safety and environmental
            protection and is committed to endeavor to create human-oriented
            organization.
          </p>
        </div>
      </section>

      {/* Area of Focus */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary">
            Area of Focus
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
              alt="Business focus"
              className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* History & To Do */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold text-center mb-20 text-primary">
          History & To Do
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: '#0077BE33' }} />

          <div className="space-y-12">
            {[
              { year: '2015', events: ['2015.12.15 Establish'], align: 'left' },
              { year: '2016', events: ['2016.02.01 Business Start', 'Management of MV MAGIC ORIENT (Bulk)', '2016.05.10 Management of MV WOORI STAR (Bulk)'], align: 'left' },
              { year: '2018', events: ['2018.02.10 Management of MV AURORA (High Speed craft)', '2018.03.01 Open Yangon Branch Office'], align: 'left' },
              { year: '2020', events: ['2020.07.10 Management of MV WOORI SKY (Bulk)'], align: 'right' },
              { year: '2021', events: ['2021.03.03 Management of MV WOORI SUN (Bulk)', '2021.09.19 Open Busan Branch Office'], align: 'right' },
              { year: '2022', events: ['2022.02.07 Management of MV MAPLE MARINA (Bulk)', '2022.06.27 Management of MT STO AZALEA / MT STO CAMELLIA', 'MT STO LOBELIA (Chemical)'], align: 'right' },
              { year: '2023', events: ['2023.07.03 Management of MV HS GLORY (Bulk)', '2023.08.15 Management of PS EASTERN DREAM (Car ferry)', 'MV SUN STAR / MV OCEAN PRIDE 1 / MV OCEAN LEADER'], align: 'left' },
              { year: '2024', events: ['2024.01.01 Management of PS EASTERN VENUS (Cruise)', '2024.12.15 Management of MV ORIENTAL FRONTIER(Bulk)'], align: 'left' },
              { year: '2025', events: ['2025.02.07 Management of M/V ORIENTAL ENTERPRISE(Bulk)'], align: 'left' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 flex ${item.align === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`flex flex-col gap-4 max-w-md ${item.align === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="inline-flex items-center justify-center px-6 py-2 text-white rounded-badge w-fit text-lg font-medium bg-primary">
                      {item.year}
                    </div>
                    <div className="text-body space-y-2">
                      {item.events.map((event, j) => (
                        <p key={j} className="text-lg">{event}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             {/* Organization Chart */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-semibold text-center mb-16 text-primary"
          >
            Organization Chart
          </motion.h2>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
            <div className="min-w-[900px] flex flex-col items-center">
              
              {/* CEO & DP Row */}
              <div className="flex justify-center items-center gap-24 mb-12">
                {/* CEO */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                    alt="CEO"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-3"
                  />
                  <div className="px-8 py-2 bg-primary text-white rounded-lg font-semibold text-lg">
                    CEO
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-primary text-3xl font-bold">→</div>

                {/* DP */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="DP"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-3"
                  />
                  <div className="px-6 py-2 bg-primary text-white rounded-lg font-semibold">
                    DP
                  </div>
                </div>
              </div>

              {/* Line from DP down */}
              <div className="w-px h-10 bg-primary" />

              {/* Horizontal line connecting three columns */}
              <div className="relative w-full flex justify-center my-4">
                <div className="w-[750px] h-px bg-primary" />
              </div>
               {/* Vertical lines from horizontal line to each column */}
              <div className="flex justify-around w-full mt-2">
                <div className="w-px h-6 bg-primary" />
                <div className="w-px h-6 bg-primary" />
                <div className="w-px h-6 bg-primary" />
              </div>

              {/* Three Columns with Images on Top */}
              <div className="grid grid-cols-3 gap-8 w-full mt-8">

                
                {/* Column 1: Right Ship Marketing (Seoul) */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
                    alt="Seoul Office"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-3"
                  />
                  <div className="bg-primary/10 rounded-xl p-3 mb-3">
                    <h4 className="font-bold text-primary">Right Ship Marketing</h4>
                    <p className="text-primary text-sm">(Seoul)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">1 Marine Technical</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">(Rightship)</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Sales</div>
                  </div>
                </div>

                {/* Column 2: BUSAN Head Office */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
                    alt="Busan Office"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-3"
                  />
                  <div className="bg-primary/10 rounded-xl p-3 mb-3">
                    <h4 className="font-bold text-primary">BUSAN Head Office</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Crew Affairs Ship Agency</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Marine Technical</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Safety Management</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Account</div>
                  </div>
                </div>

                {/* Column 3: Yangon Branch */}
                <div className="text-center">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
                    alt="Yangon Office"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-auto mb-3"
                  />
                  <div className="bg-primary/10 rounded-xl p-3 mb-3">
                    <h4 className="font-bold text-primary">Yangon Branch</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">Crew Affairs</div>
                    <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm">HRD</div>
                  </div>
                </div>
              </div>

             

              {/* Info Cards */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                  <p className="text-body mb-2"><strong className="text-primary">D.P. :</strong> A-SUNG JEON</p>
                  <p className="text-body mb-2"><strong className="text-primary">BUSAN Head Office :</strong> Crew affairs ship, Marine Technical, Safety management</p>
                  <p className="text-body mb-2"><strong className="text-primary">Marketing Manager (Seoul) :</strong> Hwa bae Kim</p>
                </div>
                <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                  <p className="text-body mb-2"><strong className="text-primary">1 Marine Technical (RIGHTSHIP) :</strong> Yong Chan An</p>
                  <p className="text-body"><strong className="text-primary">Yangon Branch's scope of work :</strong> Manage Myanmar Crews, Development Training Course and materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Resource */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-4 text-primary">
            Human Resource
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-body">
            Technology provision services (Key person)
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'A-SUNG JEON', role: 'CEO', phone: '+82-10-9873-9250', email: 'biz@sungan.kr', career: 'BOARDING CARRIER : 2/E\nSUPER INTENDENT CARRIER : 25YEARS\nNEW SHIP BUILDING CARRIER : 3YEARS\n(MEGA PASSION, MEGA CARAVAN)\nMEGA TRUST', certs: 'ISPS(CSO)\nISM(DP) / ISO9001 / ISO14001 / ISO18001\nINTERNAL AUDITOR' },
            { name: 'HWA-BAE KIM', role: 'VICE PRESIDENT', phone: '+82-10-4696-9490', email: 'smd@sungan.kr', career: 'BOARDING CARRIER : C/E\nSUPER INTENDENT CARRIER : 12YEARS\nNEW SHIP BUILDING CARRIER : 7YEARS\n(MEGA PASSION, MEGA CARAVAN)\nINTER SM CO.,LTD CEO : 5YEARS', certs: 'ISPS (CSO)\nISM(DP)/ISO9001' },
            { name: 'YONG-CHAN AN', role: 'EXECUTIVE DIRECTOR', phone: '+82-10-7284-4363', email: 'biz@sungan.kr', career: 'BOARDING CARRIER : MTR\nNEW SHIP BUILDING CARRIER : 2YEARS\nSUPER INTENDENT CARRIER : 12 YEARS', certs: 'ISPS(CSO)\nISM(DP) / ISO9001 / ISO14001 / ISO18001\nRIGHTSHIP / NAV9000' },
            { name: 'JAE-YOUNG JEONG', role: 'DUTY DIRECTOR', phone: '+82-10-2019-3288', email: 'mtt@sungan.kr', career: 'BOARDING CARRIER : C/E\nSUPER INTENDENT CARRIER : 11YEARS\nNEW SHIP BUILDING CARRIER : 1EAR\n(OC GRANCE)', certs: 'ISPS (CSO)\nISM(DP)/ISO9001\nINTERNAL AUDITOR' },
            { name: 'SE-HYUN GO', role: 'SAFETY MANAGEMENT TEAM DIRECTOR', phone: '+82-10-5437-9943', email: 'sit@sungan.kr', career: 'BOARDING CARRIER : 2/E\nSUPER INTENDENT CARRIER : 15YEARS\n(K.C LINE, HANARO SHIPPING)', certs: 'ISPS (CSO)\nISM(DP)/ISO9001\nINTERNAL AUDITOR' },
            { name: 'SOK-U NAM', role: 'MARINE TECHNICAL TEAM DIRECTOR', phone: '+82-10-9232-7790', email: 'mtt_rs@sungan.kr', career: 'BOARDING CARRIER : 2/E\nSUPER INTENDENT CARRIER : 10YEARS\nNEW SHIP BUILDING CARRIER : 2 YEARS\nPROJECT MANAGER : 5 YEARS', certs: 'ISPS(CSO)\nISM(DP) / ISO9001 / ISO14001 / ISO18001\nINTERNAL AUDITOR' },
            { name: 'IL-KWANG SON', role: 'MARINE TECHNICAL TEAM MANAGER', phone: '+82-10-9195-1555', email: 'mtt@sungan.kr', career: 'BOARDING CARRIER : 2/O\nSUPER INTENDENT CARRIER : 15YEARS\nNEW SHIP BUILDING CARRIER : 1YEAR\n(SKY PRIDE)\nCONVERSION SHIP CARRIER : 1YEAR\n(STX ROSE2, K TAJO)', certs: 'SPS(CSO)\nISM(DP) / ISO9001\nINTERNAL AUDITOR' },
            { name: 'SEONG-HUN CHOO', role: 'MARINE AFFAIR MANAGER', phone: '+82-10-9850-9983', email: 'mat@sungan.kr', career: 'BOARDING CARRIER : 2/O\nSUPER INTENDENT CARRIER : 17YEARS', certs: 'ISPS(CSO)\nISM(DP) / ISO9001 / ISO14001 / ISO18001\nINTERNAL AUDITOR\nNAV9000, RIGHTSHIP' },
            { name: 'BIN NA KIM', role: 'MARINE AFFAIR MANAGER', phone: '+82-10-4632-7588', email: 'Mtt_rs@sungan.kr', career: 'BOARDING CARRIER : C/O\nSUPER INTENDENT CARRIER : 20 YEARS', certs: 'ISPS(CSO)\nISM(DP) / ISO9001 / ISO14001 / ISO18001\nINTERNAL AUDITOR\nRIGHTSHIP' }
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[14px] shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="p-6 bg-primary-light">
                <h3 className="text-2xl font-semibold mb-2 text-primary">{person.name}</h3>
                <p className="font-medium text-primary">{person.role}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col gap-6">
                <div>
                  <p className="text-body">{person.phone}</p>
                  <p className="text-body">{person.email}</p>
                </div>
                <div className="w-12 h-1 rounded-full bg-primary" />
                <div className="whitespace-pre-line text-body text-sm leading-relaxed">{person.career}</div>
                <div className="whitespace-pre-line text-body text-sm leading-relaxed mt-auto pt-4 border-t border-gray-100">{person.certs}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}