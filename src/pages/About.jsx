import React from 'react';
import { motion } from 'framer-motion';

import AboutBannerImg from '../images/Home_2.jpg';
import AboutFocusImg from '../images/Area of Focus 1.png';

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
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h1
          {...fadeIn}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight max-w-5xl text-primary"
        >
          We are committed to do our best to create a human-oriented organization and safety system.
        </motion.h1>

        <div className="items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-body text-lg leading-relaxed"
          >
            <p>
              Surrounded on its other three sides by water, South Korea has been fostering marine workforce aiming to enter maritime.
            </p>
            <p>
              With continued increase in economic growth and national income, however, Korea's marine industry is weakening competitiveness and lack of crew. Particularly, excellent marine technicians are also deserting the marine industry.
            </p>
            <p>
              SUNGAN SHIPPING has paved a foundation for Korea's marine management to feel motivated about their career despite its harsh working environment.
            </p>
            <p>
              The definition of "Ship Management Business" is taking over liability and risk of repair, distribution, safety operation, insurance, and crew management of ships through consignment request from ship owners. The foundation, therefore, is confidence from ship owners and professional knowledge about ships.
            </p>
            <p>
              SUNGAN SHIPPING Co., Ltd. has accumulated expertise particularly in BULK carrier and RO-RO CARRIER & PASSENGER ship. The company has earned great evaluation and confidence from ship owners and thus, employees are proud of management of special ships.
            </p>
            
            <p>
              The finest goal of an enterprise through reflecting on the past and planning for the future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           
          </motion.div>
        </div>
      </section>

      {/* Banner - Safety & Environmental Protection */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutBannerImg})` }}
        />
        <div
          className="absolute inset-0 z-10 bg-primary/85"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-white font-medium max-w-5xl mx-auto ">
            
              SUNGAN SHIPPING Co., Ltd. improves its business systematically in accordance with ISM CODE as the policy for safety and environmental protection and is committed to endeavor to create human-oriented organizations and safety systems to a future.
        <br></br>
            
            The company will provide safety operation and work environment to ship owners and clients.
          </p>
        </div>
      </section>

      {/* Area of Focus */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold text-center mb-12 text-primary">
            Area of Focus
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-body text-lg max-w-4xl mx-auto mb-16">
            The company will provide safety operation and work environment to ship owners and clients.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={AboutFocusImg}
                alt="Business focus"
                className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
              />
            </motion.div>

            {/* Right Side - Focus Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">
                  We provide our clients safe operation and prevention of marine pollution as well as management and maintenance of their ships and asset with efficient quality management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">
                  We support to achieve optimal operational performance and cost efficiency for our clients by utilizing the advantages of a mix of skilled Korean crews and Myanmar crews.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">
                  In order to maintain the vessel's best safe operation, we implement a re-joining rate and strengthen training for crews.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">
                  We provide experienced crews with good skills for clients needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & To Do */}
     <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
  <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold text-center mb-20 text-primary">
    History & To Do
  </motion.h2>

  <div className="relative max-w-5xl mx-auto">
    {/* Vertical center line - hidden on mobile */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary/30" />

    <div className="space-y-12">
      {[
        { year: '2015', events: ['2015.12.15 Establishment'], align: 'left' },
        { year: '2016', events: ['2016.02.01 Business Start', 'Management of MV MAGIC ORIENT (Bulk)', '2016.05.10 Management of MV WOORI STAR (Bulk)'], align: 'left' },
        { year: '2018', events: ['2018.02.10 Management of MV AURORA (High Speed craft)', '2018.03.01 Open Yangon Branch Office'], align: 'left' },
        { year: '2020', events: ['2020.07.10 Management of MV WOORI SKY (Bulk)'], align: 'right' },
        { year: '2021', events: ['2021.03.03 Management of MV WOORI SUN (Bulk)', '2021.09.19 Open Busan Branch Office'], align: 'right' },
        { year: '2022', events: ['2022.02.07 Management of MV MAPLE MARINA (Bulk)', '2022.06.27 Management of MT STO AZALEA / MT STO CAMELLIA', 'MT STO LOBELIA (Chemicals)'], align: 'right' },
        { year: '2023', events: ['2023.07.03 Management of MV HS GLORY (Bulk)', '2023.08.15 Management of PS EASTERN DREAM (Car ferry)', 'MV SUN STAR / MV OCEAN PRIDE 1 / MV OCEAN LEADER', 'MV SUN RIO (Ro-Ro ship)'], align: 'left' },
        { year: '2024', events: ['2024.01.01 Management of PS EASTERN VENUS (Cruise)', '2024.12.15 Management of MV ORIENTAL FRONTIER (Bulk)'], align: 'left' },
        { year: '2025', events: ['2025.02.07 Management of MV ORIENTAL ENTERPRISE (Bulk)'], align: 'left' }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`flex flex-col md:flex-row gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
          <div className={`md:w-1/2 flex ${item.align === 'right' ? 'md:justify-start' : 'md:justify-end'}`}>
            <div className={`flex flex-col gap-4 max-w-md ${item.align === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
              {/* Year Badge */}
              <div className="inline-flex items-center justify-center px-6 py-2 text-white rounded-full w-fit text-lg font-medium bg-primary shadow-md">
                {item.year}
              </div>
              {/* Events List */}
              <div className="text-body space-y-2">
                {item.events.map((event, j) => (
                  <p key={j} className="text-lg leading-relaxed">{event}</p>
                ))}
              </div>
            </div>
          </div>
          {/* Empty spacer for right side when left aligned */}
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
            <div className="min-w-[800px]">
              {/* Top Row: CEO and VICE PRESIDENT side by side */}
              <div className="flex justify-center items-center gap-16 mb-16">
                {/* CEO */}
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white text-2xl font-bold">CEO</span>
                  </div>
                  <div className="font-bold text-primary text-lg">A-SUNG JEON</div>
                  <div className="text-sm text-body">+82-10-9873-9250</div>
                  <div className="text-sm text-body">biz@sungan.kr</div>
                </div>

                <div className="text-4xl text-primary">→</div>

                {/* VICE PRESIDENT */}
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-primary/80 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white text-xl font-bold">VICE<br />PRESIDENT</span>
                  </div>
                  <div className="font-bold text-primary text-lg">HWA-BAE KIM</div>
                  <div className="text-sm text-body">+82-10-4696-9490</div>
                  <div className="text-sm text-body">smd@sungan.kr</div>
                </div>
              </div>

              {/* Connecting line down */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-primary" />
              </div>

              {/* EXECUTIVE DIRECTOR */}
              <div className="flex justify-center mb-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/60 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white text-base font-bold text-center px-2">EXECUTIVE<br />DIRECTOR</span>
                  </div>
                  <div className="font-bold text-primary text-lg">YONG-CHAN AN</div>
                  <div className="text-sm text-body">+82-10-7284-4363</div>
                  <div className="text-sm text-body">biz@sungan.kr</div>
                </div>
              </div>

              {/* Horizontal line connecting three columns */}
              <div className="flex justify-center">
                <div className="w-[600px] h-px bg-primary" />
              </div>

              {/* Three Columns */}
              <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">DUTY DIRECTOR</div>
                  <div className="font-semibold">JAE-YOUNG JEONG</div>
                  <div className="text-sm">+82-10-2019-3288</div>
                  <div className="text-sm">mtt@sungan.kr</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">SAFETY MANAGEMENT<br />TEAM DIRECTOR</div>
                  <div className="font-semibold">SE-HYUN GO</div>
                  <div className="text-sm">+82-10-5437-9943</div>
                  <div className="text-sm">sit@sungan.kr</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">MARINE TECHNICAL<br />TEAM DIRECTOR</div>
                  <div className="font-semibold">SOK-U NAM</div>
                  <div className="text-sm">+82-10-9232-7790</div>
                  <div className="text-sm">mtt_rs@sungan.kr</div>
                </div>
              </div>

              {/* Second Row of Managers */}
              <div className="grid grid-cols-3 gap-6 mt-6 text-center">
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">MARINE TECHNICAL<br />TEAM MANAGER</div>
                  <div className="font-semibold">IL-KWANG SON</div>
                  <div className="text-sm">+82-10-9195-1555</div>
                  <div className="text-sm">mtt@sungan.kr</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">MARINE AFFAIR MANAGER</div>
                  <div className="font-semibold">SEONG-HUN CHOO</div>
                  <div className="text-sm">+82-10-9850-9983</div>
                  <div className="text-sm">mat@sungan.kr</div>
                </div>
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="font-bold text-primary mb-2">MARINE AFFAIR MANAGER</div>
                  <div className="font-semibold">BIN NA KIM</div>
                  <div className="text-sm">+82-10-4632-7588</div>
                  <div className="text-sm">Mtt_rs@sungan.kr</div>
                </div>
              </div>

              {/* Branch Offices Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-primary mb-3">BUSAN Head Office</h4>
                  <p className="text-body text-sm">Crew affairs ship, Marine Technical, Safety management</p>
                </div>
                <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                  <h4 className="font-bold text-primary mb-3">Yangon Branch</h4>
                  <p className="text-body text-sm">Manage Myanmar Crews, Development Training Course and materials</p>
                </div>
              </div>

              {/* Rightship Info */}
              <div className="mt-6 bg-primary/5 p-5 rounded-xl border border-primary/20">
                <h4 className="font-bold text-primary mb-3">Right Ship Marketing (Seoul)</h4>
                <p className="text-body text-sm">1 Marine Technical (RIGHTSHIP): Yong Chan An</p>
                <p className="text-body text-sm">Marketing Manager (Seoul): Hwa bae Kim</p>
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
            { name: 'JAE-YOUNG JEONG', role: 'DUTY DIRECTOR', phone: '+82-10-2019-3288', email: 'mtt@sungan.kr', career: 'BOARDING CARRIER : C/E\nSUPER INTENDENT CARRIER : 11YEARS\nNEW SHIP BUILDING CARRIER : 1YEAR\n(OC GRANCE)', certs: 'ISPS (CSO)\nISM(DP)/ISO9001\nINTERNAL AUDITOR' },
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
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="p-6 bg-primary/5 border-b border-primary/10">
                <h3 className="text-xl font-bold mb-1 text-primary">{person.name}</h3>
                <p className="font-semibold text-primary/80">{person.role}</p>
              </div>
              <div className="p-6 flex-grow flex flex-col gap-4">
                <div className="space-y-1">
                  <p className="text-body text-sm">{person.phone}</p>
                  <p className="text-body text-sm">{person.email}</p>
                </div>
                <div className="w-12 h-0.5 rounded-full bg-primary/40" />
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