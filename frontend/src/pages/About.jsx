// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutHeroImg from '../images/Section.png';
import AboutBannerImg from '../images/Home_2.jpg';
import AboutFocusImg from '../images/Area of Focus 1.png';
import Logo from '../images/logo.svg'
import history_1 from '../images/History_1.png';
import history_2 from '../images/History_2.png';
import history_3 from '../images/History_3.png';
import CEO from '../images/chart.png';
import Top from '../images/Chart_top.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
const getRightshipTeam = () => {
  return [
    { name: "YONG-CHAN AN", role: "Executive Director / 1 Marine Technical" },
    { name: "SOK-U NAM", role: "Marine Technical Director" },
    { name: "IL-KWANG SON", role: "Marine Technical Manager" },
    { name: "SEONG-HUN CHOO", role: "Marine Affair Manager" },
    { name: "BIN NA KIM", role: "Marine Affair Manager" },
    { name: "JAE-YOUNG JEONG", role: "Duty Director" },
    { name: "SE-HYUN GO", role: "Safety Management Director" },
  ];
};

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          <img src={Logo} alt="Ship Icon" className="w-12 h-12 object-contain" />
          <motion.h1
            {...fadeIn}
            className="text-2xl md:text-2xl lg:text-4xl font-semibold leading-tight text-primary"
          >
            {t('about.title')}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-body text-lg leading-relaxed"
          >
            <p>{t('about.para1')}</p>
            <p>{t('about.para2')}</p>
            <p>{t('about.para3')}</p>
            <p>{t('about.para4')}</p>
            <p>{t('about.para5')}</p>
            <p>{t('about.para6')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={AboutHeroImg}
              alt="Ship at sea"
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Banner - Safety & Environmental Protection */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutBannerImg})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/85" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl text-white font-medium max-w-7xl mx-auto leading-relaxed">
            {t('about.banner_text1')}<br /><br />
            {t('about.banner_text2')}
          </p>
        </div>
      </section>

      {/* Area of Focus */}
      <section className="py-24 bg-surface px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold text-center mb-12 text-primary">
            {t('about.area_of_focus')}
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-body text-lg max-w-4xl mx-auto mb-16">
            {t('about.area_of_focus_subtitle')}
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
                <p className="text-body leading-relaxed">{t('about.focus1')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">{t('about.focus2')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">{t('about.focus3')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-body leading-relaxed">{t('about.focus4')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & To Do */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold text-center mb-20 text-primary">
          {t('about.history')}
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary/30" />

          {/* Group 1: 2015 + 2016 + 2018 (Left) | Image (Right) */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/2 md:pr-12">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2015</div>
                <p className="text-body">2015.12.15 Establishment</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2016</div>
                <p className="text-body">2016.02.01 Business Start</p>
                <p className="text-body">Management of MV MAGIC ORIENT (Bulk)</p>
                <p className="text-body">2016.05.10 Management of MV WOORI STAR (Bulk)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2018</div>
                <p className="text-body">2018.02.10 Management of MV AURORA (High Speed craft)</p>
                <p className="text-body">2018.03.01 Open Yangon Branch Office</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={history_1} alt="History" className=" w-full h-[400px] object-cover" />
            </div>
          </div>

          {/* Group 2: Image (Left) | 2020 + 2021 + 2022 (Right) */}
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-16">
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2020</div>
                <p className="text-body">2020.07.10 Management of MV WOORI SKY (Bulk)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2021</div>
                <p className="text-body">2021.03.03 Management of MV WOORI SUN (Bulk)</p>
                <p className="text-body">2021.09.19 Open Busan Branch Office</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-primary">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2022</div>
                <p className="text-body">2022.02.07 Management of MV MAPLE MARINA (Bulk)</p>
                <p className="text-body">2022.06.27 Management of MT STO AZALEA / MT STO CAMELLIA</p>
                <p className="text-body">MT STO LOBELIA (Chemicals)</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={history_2} alt="History" className=" w-full h-[400px] object-cover" />
            </div>
          </div>

          {/* Group 3: 2023 + 2024 + 2025 (Left) | Image (Right) */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 md:pr-12">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2023</div>
                <p className="text-body">2023.07.03 Management of MV HS GLORY (Bulk)</p>
                <p className="text-body">2023.08.15 Management of PS EASTERN DREAM (Car ferry)</p>
                <p className="text-body">MV SUN STAR / MV OCEAN PRIDE 1 / MV OCEAN LEADER</p>
                <p className="text-body">MV SUN RIO (Ro-Ro ship)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary mb-6">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2024</div>
                <p className="text-body">2024.01.01 Management of PS EASTERN VENUS (Cruise)</p>
                <p className="text-body">2024.12.15 Management of MV ORIENTAL FRONTIER (Bulk)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <div className="inline-flex items-center justify-center px-4 py-1 text-white rounded-full text-sm font-medium bg-primary mb-3">2025</div>
                <p className="text-body">2025.02.07 Management of MV ORIENTAL ENTERPRISE (Bulk)</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={history_3} alt="History" className=" w-full h-[400px] object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* ========== ORGANIZATION CHART SECTION ========== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-semibold text-center mb-6 text-primary"
          >
            {t("about.organization") || "Organization Chart"}
          </motion.h2>
          <motion.p
            {...fadeIn}
            className="text-center text-body text-lg max-w-3xl mx-auto mb-16"
          >
            Our organizational structure showing leadership hierarchy and departmental divisions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 overflow-x-auto"
          >
            <div className="min-w-[900px]">

              {/* ===== CEO ROW ===== */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="rounded-2xl p-4 w-64 text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg">
                      <img
                        src={Top}
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-bold text-xl text-primary">CEO</div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-primary/30"></div>
              </div>

              {/* ===== VP ROW ===== */}
              <div className="flex justify-center mb-12">
                <div className="rounded-2xl p-4 w-64 text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-lg">
                    <img
                      src={Top}
                      alt="DP"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-xl text-primary">DP</div>
                </div>
              </div>

              {/* Branch Connector Lines */}
              <div className="relative flex justify-center mb-8">
                <div className="absolute top-0 w-[750px] h-0.5 bg-primary/20"></div>
                <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-primary/20"></div>
                <div className="absolute  left-[calc(50%-375px)] w-0.5 h-8 bg-primary/20"></div>
                <div className="absolute  right-[calc(50%-375px)] w-0.5 h-8 bg-primary/20"></div>
              </div>

              {/* ===== THREE MAIN BRANCHES ===== */}
              <div className="grid grid-cols-3 gap-6 mb-12">

                {/* Branch 1: Rightship Marketing with Departments */}
                <div className="relative">
                  <div className="rounded-xl p-5 text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-md">
                      <img
                        src={Top}
                        alt="RightShip Marketing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-primary text-base">Right Ship Marketing</h3>
                    <p className="text-sm text-gray-500">(Seoul Office)</p>
                  </div>

                  {/* Vertical line from branch to departments */}
                  <div className="flex justify-center mt-2">
                    <div className="w-0.5 h-4 bg-primary/40"></div>
                  </div>

                  {/* Horizontal line connector */}
                  <div className="relative flex justify-center my-2">
                    <div className="w-[180px] h-0.5 bg-primary/40"></div>
                  </div>

                  {/* Vertical lines down to each department */}
                  <div className="relative mt-2">
                    {/* Main vertical line */}
                    <div className="absolute left-1/2 top-0 w-0.5 h-[calc(100%-20px)] bg-primary/40 -translate-x-1/2"></div>

                    {/* Departments under RightShip Marketing */}
                    <div className="mt-4 space-y-3 relative z-10">
                      <div className="font-semibold text-primary text-xs mb-2 text-center">Departments:</div>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "Crew Affairs Ship Agency",
                          "Marine Technical",
                          "Safety Management",
                          "Account"
                        ].map((dept, idx) => (
                          <div key={idx} className="relative">
                            {/* Horizontal connector line for each department */}
                            <div className="absolute -top-3 left-1/2 w-4 h-3 border-l border-b border-primary/40 -translate-x-1/2"></div>
                            <div className="bg-blue-50 rounded-lg p-2 text-sm border border-blue-200 hover:shadow-md transition hover:border-blue-300">
                              <div className="font-medium text-primary text-center text-xs">{dept}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch 2: Yangon Branch with Departments */}
                <div className="relative">
                  <div className="rounded-xl p-5 text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-md">
                      <img
                        src={Top}
                        alt="Yangon Branch"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-green-700 text-base">Yangon Branch</h3>
                    <p className="text-sm text-gray-500">(Myanmar)</p>
                  </div>

                  {/* Vertical line from branch to departments */}
                  <div className="flex justify-center mt-2">
                    <div className="w-0.5 h-4 bg-green-700/40"></div>
                  </div>

                  {/* Horizontal line connector */}
                  <div className="relative flex justify-center my-2">
                    <div className="w-[180px] h-0.5 bg-green-700/40"></div>
                  </div>

                  {/* Vertical lines down to each department */}
                  <div className="relative mt-2">
                    <div className="absolute left-1/2 top-0 w-0.5 h-[calc(100%-20px)] bg-green-700/40 -translate-x-1/2"></div>

                    <div className="mt-4 space-y-3 relative z-10">
                      <div className="font-semibold text-green-700 text-xs mb-2 text-center">Departments:</div>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "1 Marine Technical (Rightship)",
                          "Sales"
                        ].map((dept, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -top-3 left-1/2 w-4 h-3 border-l border-b border-green-700/40 -translate-x-1/2"></div>
                            <div className="bg-green-50 rounded-lg p-2 text-sm border border-green-200 hover:shadow-md transition hover:border-green-300">
                              <div className="font-medium text-green-700 text-center text-xs">{dept}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch 3: Crew Affairs with Departments */}
                <div className="relative">
                  <div className="rounded-xl p-5 text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-md">
                      <img
                        src={Top}
                        alt="Crew Affairs"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-purple-700 text-base">Crew Affairs</h3>
                    <p className="text-sm text-gray-500">(Ship Agency)</p>
                  </div>

                  {/* Vertical line from branch to departments */}
                  <div className="flex justify-center mt-2">
                    <div className="w-0.5 h-4 bg-purple-700/40"></div>
                  </div>

                  {/* Horizontal line connector */}
                  <div className="relative flex justify-center my-2">
                    <div className="w-[180px] h-0.5 bg-purple-700/40"></div>
                  </div>

                  {/* Vertical lines down to each department */}
                  <div className="relative mt-2">
                    <div className="absolute left-1/2 top-0 w-0.5 h-[calc(100%-20px)] bg-purple-700/40 -translate-x-1/2"></div>

                    <div className="mt-4 space-y-3 relative z-10">
                      <div className="font-semibold text-purple-700 text-xs mb-2 text-center">Departments:</div>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "Crew Affairs",
                          "HRD"
                        ].map((dept, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -top-3 left-1/2 w-4 h-3 border-l border-b border-purple-700/40 -translate-x-1/2"></div>
                            <div className="bg-purple-50 rounded-lg p-2 text-sm border border-purple-200 hover:shadow-md transition hover:border-purple-300">
                              <div className="font-medium text-purple-700 text-center text-xs">{dept}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== BOTTOM INFO CARDS ===== */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-primary mb-2">Busan Office</div>
                  <div className="text-sm text-gray-600">Operational & Technical Support Center</div>
                  <div className="text-xs text-gray-400 mt-2">📍 Busan, South Korea</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-primary mb-2">Rightship Marketing</div>
                  <div className="text-sm text-gray-600">1 Marine Technical: Yong Chan An</div>
                  <div className="text-xs text-gray-400 mt-2">Marketing Manager: Hwa bae Kim</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Human Resource */}
      < section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" >
        <div className="text-center mb-16">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-4 text-primary">
            {t('about.human_resource')}
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-body">
            {t('about.technology')}
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
                <p className="font-semibold text-red/80">{person.role}</p>
                <h3 className="text-xl font-bold mb-1 text-primary">{person.name}</h3>

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
      </section >
    </div >
  );
}