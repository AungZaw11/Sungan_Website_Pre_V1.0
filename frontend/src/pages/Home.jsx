// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaUsers,
  FaShip,
  FaWrench,
  FaBuilding,
  FaAngleRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeHeroImg from "../images/Home.jpg";
import HomeAboutImg from "../images/Home_2.jpg";
import MissionVisionImg from "../images/Mission Vision 1.png";

import NYKLogo from "../ship_logo/NYK.png";
import HaesungLogo from "../ship_logo/Haesung.png";
import DuwonLogo from "../ship_logo/Duwon.png";
import DuwonShipping from "../ship_logo/Duwon Shipping.png";
import HongLogo from "../ship_logo/Hongik.png";
import Woori from "../ship_logo/Woori.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const { t } = useTranslation();

  const affiliatedCompanies = [
    { name: "NYK BULKSHIP (KOREA) CO., LTD.", stat: "NYK", logo: NYKLogo },
    { name: "Haesung Marine CO., LTD.", stat: "HM", logo: HaesungLogo },
    { name: "DUWON CRUISE & FERRY CO., LTD.", stat: "DC", logo: DuwonLogo },
    { name: "DOWON SHIPPING CO., LTD", stat: "DS", logo: DuwonShipping },
    { name: "HONG IK S&T PTE LTD.", stat: "HI", logo: HongLogo },
    { name: "Woori Shipping Co., Ltd.", stat: "WS", logo: Woori },
  ];

  const services = [
    {
      icon: FaUsers,
      title: t("home.crew_management"),
      desc: "SUNGAN Shipping adopts an innovative system and provides a differentiated services based on...",
    },
    {
      icon: FaShip,
      title: t("home.ship_management"),
      desc: "SUNGAN Shipping guarantees the reliable management through open communication with...",
    },
    {
      icon: FaWrench,
      title: t("home.repair_supply"),
      desc: "Available to supply original ship's spare parts with competitive price",
    },
    {
      icon: FaBuilding,
      title: t("home.new_building"),
      desc: "Comprehensive supervision services for new ship building projects.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[722px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HomeHeroImg})` }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom, #0077BEe6, #0077BEd9, #0077BEe6)`,
          }}
        />

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight"
          >
            {t("home.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            {t("home.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              style={{ backgroundColor: "#dc2626" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#b91c1c")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#dc2626")
              }
            >
              {t("home.get_quote")} <FaArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-white text-heading rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              {t("home.learn_more")}
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-body font-medium mb-6">
              {t("home.establishmentdate")}
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-primary">
              {t("home.sungan_is")}
            </h2>
            <p className="text-lg text-body leading-relaxed mb-8 text-justify">
              {t("home.description")}
            </p>
            <Link
              to="/about"
              className="font-medium flex items-center gap-2 hover:underline"
              style={{ color: "#dc2626" }}
            >
              {t("home.learn_more")} <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={HomeAboutImg}
              alt="Shipping containers at port"
              className="rounded-2xl shadow-2xl h-[400px] w-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section with Image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={MissionVisionImg}
              alt="Mission & Vision"
              className=" p-2 rounded-2xl   object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                {t("home.mission_vision")}
              </h2>
              <p className="text-lg text-primary font-medium">
                {t("home.philosophy")}
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary">
                    {t("home.foundation")}
                  </h3>
                </div>
                <p className="text-body">{t("home.foundation_desc")}</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t("home.common_goal")}
                  </h3>
                </div>
                <p className="text-body">{t("home.common_goal_desc")}</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {t("home.profit")}
                  </h3>
                </div>
                <p className="text-body">{t("home.profit_desc")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Affiliated Companies - Infinite Slider */}
      <section className="py-24 w-full relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HomeAboutImg})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-primary/85" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-semibold text-white text-center mb-16"
          >
            {t("home.affiliated")}
          </motion.h2>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="affiliated-swiper"
          >
            {affiliatedCompanies.map((company, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 min-h-[250px]">
                  {/* Rectangle Frame - No longer circle */}
                  {company.logo ? (
                    <div className="w-28 h-28 bg-white/20 rounded-xl flex items-center justify-center p-3 border border-white/30">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                      <span className="text-3xl font-bold text-white">
                        {company.stat}
                      </span>
                    </div>
                  )}
                  <h4 className="font-semibold text-base text-white leading-tight">
                    {company.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-semibold mb-4 text-primary"
          >
            {t("home.our_services")}
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-body">
            {t("home.services_desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[14px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 bg-primary-light">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-4">
                {service.title}
              </h3>
              <p className="text-body mb-8 flex-grow">{service.desc}</p>
              <Link
                to="/services"
                className="font-medium flex items-center gap-2 hover:underline mt-auto"
                style={{ color: "#dc2626" }}
              >
                {t("home.learn_more")} <FaArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 w-full relative overflow-hidden">
        {/* Background Image - Home_2.jpg */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HomeAboutImg})` }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white max-w-2xl text-center md:text-left">
            "{t("home.reach_out_text")}"
          </h2>
          <Link
            to="/contact"
            className="px-8 py-4 text-white rounded-lg font-semibold text-xl hover:opacity-90 transition-colors whitespace-nowrap shadow-lg"
            style={{ backgroundColor: "#dc2626" }}
          >
            {t("home.contact_us")}
          </Link>
        </div>
      </section>
    </div>
  );
}
