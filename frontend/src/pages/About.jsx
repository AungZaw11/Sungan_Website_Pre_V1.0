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
import dp from '../images/DP.png';
import ss from '../images/Seoul.png';
import mm from '../images/Myanmar.png';
import b2 from '../images/Branch2.png';
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
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-4 md:mb-6 text-primary"
          >
            {t("about.organization") || "Organization Chart"}
          </motion.h2>
          <motion.p
            {...fadeIn}
            className="text-center text-body text-sm md:text-lg max-w-3xl mx-auto mb-8 md:mb-16 px-4"
          >
            Our organizational structure showing leadership hierarchy and departmental divisions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 lg:p-10 overflow-x-auto"
          >
            {/* Desktop Version (hidden on mobile) */}
            <div className="hidden lg:block min-w-[900px] relative">
              {/* ===== ROW 1: CEO + DP ===== */}
              <div className="relative flex justify-center items-start mb-0 h-[120px]">
                {/* Horizontal line CEO → DP */}
                <div className="absolute top-[44px] left-1/2 right-[12%] h-px bg-blue-300" />

                {/* CEO */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center z-10">
                  <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] border-blue-400 shadow-lg ring-4 ring-blue-100">
                    <img src={Top} alt="CEO" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-5 py-1.5 text-xs font-semibold tracking-wide">
                    CEO
                  </div>
                </div>

                {/* DP */}
                <div className="absolute right-[12%] top-0 flex flex-col items-center z-10">
                  <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-[3px] border-blue-400 shadow-lg ring-4 ring-blue-100">
                    <img src={dp} alt="DP" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-5 py-1.5 text-xs font-semibold tracking-wide">
                    DP
                  </div>
                </div>
              </div>

              {/* CEO vertical drop */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-blue-300" />
              </div>

              {/* ===== 3-BRANCH SPLITTER ===== */}
              <div className="relative h-15">
                <div className="absolute top-0 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-blue-300" />
                <div className="absolute top-0 left-[calc(16.67%+20px)] w-px h-8 bg-blue-300" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-blue-300" />
                <div className="absolute top-0 right-[calc(16.67%+20px)] w-px h-8 bg-blue-300" />
              </div>

              {/* ===== THREE MAIN BRANCHES ===== */}
              <div className="grid grid-cols-3 gap-6">
                {/* Branch 1 */}
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-blue-400 shadow-md ring-4 ring-blue-100 mb-2">
                    <img src={ss} alt="Right Ship Marketing" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Right Ship Marketing (Seoul)
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Crew Affairs Ship Agency
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Marine Technical
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Safety Management
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Account
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-blue-400 shadow-md ring-4 ring-blue-100 mb-2">
                    <img src={b2} alt="Right Ship Marketing Seoul" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Right Ship Marketing (Seoul)
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    1 Marine Technical (Rightship)
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Sales
                  </div>
                </div>

                {/* Branch 3 */}
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-blue-400 shadow-md ring-4 ring-blue-100 mb-2">
                    <img src={mm} alt="Yangon Branch" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Yangon Branch
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    Crew Affairs
                  </div>
                  <div className="w-px h-5 bg-blue-300" />
                  <div className="bg-[#1a3a6b] text-white rounded-md px-4 py-2 text-xs font-semibold text-center w-full max-w-[180px]">
                    HRD
                  </div>
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="flex justify-end mt-10 pt-6">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm max-w-xs w-full">
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "D.P.", value: "A-SUNG JEON" },
                      { label: "BUSAN Head Office", value: "Crew Affairs Ship, Marine Technical, Safety Management" },
                      { label: "Marketing Manager (Seoul)", value: "Hwa bae Kim" },
                      { label: "1 Marine Technical (RIGHTSHIP)", value: "Yong Chan An" },
                      { label: "Yangon Branch scope of work", value: "Manage Myanmar Crews, Development Training Course and materials" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6b] flex-shrink-0 mt-1.5" />
                        <span>
                          <span className="font-semibold text-gray-800">{item.label}:</span>{" "}
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== MOBILE & TABLET VERSION (Stacked Layout) ===== */}
            <div className="lg:hidden">
              {/* CEO */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-blue-400 shadow-lg ring-4 ring-blue-100">
                  <img src={Top} alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-4 py-1.5 text-xs font-semibold">
                  CEO
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-6 bg-blue-300"></div>
              </div>

              {/* DP */}
              <div className="flex flex-col items-center mb-12">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-[3px] border-blue-400 shadow-lg ring-4 ring-blue-100">
                  <img src={Top} alt="DP" className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-4 py-1.5 text-xs font-semibold">
                  DP
                </div>
              </div>

              {/* Branches - Stacked vertically on mobile */}
              <div className="space-y-8">

                {/* Branch 1 */}
                <div className="border-t border-blue-200 pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-blue-400 shadow-md">
                      <img src={Top} alt="Branch" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-3 py-1.5 text-xs font-semibold text-center">
                      Right Ship Marketing (Seoul)
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="w-px h-4 bg-blue-300"></div>
                  </div>
                  <div className="space-y-3 pl-4">
                    {["Crew Affairs Ship Agency", "Marine Technical", "Safety Management", "Account"].map((dept, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-700 flex-1 border border-gray-200">
                          {dept}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="border-t border-blue-200 pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-blue-400 shadow-md">
                      <img src={Top} alt="Branch" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-3 py-1.5 text-xs font-semibold text-center">
                      Right Ship Marketing (Seoul)
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="w-px h-4 bg-blue-300"></div>
                  </div>
                  <div className="space-y-3 pl-4">
                    {["1 Marine Technical (Rightship)", "Sales"].map((dept, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-700 flex-1 border border-gray-200">
                          {dept}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Branch 3 */}
                <div className="border-t border-blue-200 pt-6">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-blue-400 shadow-md">
                      <img src={Top} alt="Branch" className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-2 bg-[#1a3a6b] text-white rounded-md px-3 py-1.5 text-xs font-semibold text-center">
                      Yangon Branch
                    </div>
                  </div>
                  <div className="flex justify-center mb-2">
                    <div className="w-px h-4 bg-blue-300"></div>
                  </div>
                  <div className="space-y-3 pl-4">
                    {["Crew Affairs", "HRD"].map((dept, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-700 flex-1 border border-gray-200">
                          {dept}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Info Card - Mobile */}
              <div className="mt-10 pt-6">
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <ul className="flex flex-col gap-2">
                    {[
                      { label: "D.P.", value: "A-SUNG JEON" },
                      { label: "BUSAN Head Office", value: "Crew Affairs Ship, Marine Technical, Safety Management" },
                      { label: "Marketing Manager (Seoul)", value: "Hwa bae Kim" },
                      { label: "1 Marine Technical (RIGHTSHIP)", value: "Yong Chan An" },
                      { label: "Yangon Branch scope of work", value: "Manage Myanmar Crews, Development Training Course and materials" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a3a6b] flex-shrink-0 mt-1.5" />
                        <span>
                          <span className="font-semibold text-gray-800">{item.label}:</span>{" "}
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
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