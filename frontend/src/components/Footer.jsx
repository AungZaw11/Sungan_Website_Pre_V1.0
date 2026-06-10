import { Link } from 'react-router-dom';
import { FaShip } from 'react-icons/fa';
import Logo from '../images/logo.svg';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo & Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-1">
              <div className="rounded-lg">
                <img src={Logo} alt="Ship Icon" className="w-12 h-12 object-contain" />
              </div>
              <span className="font-bold text-xl text-heading tracking-tight">
                SUNGAN <span className="text-red">SHIPPING</span>
              </span>
            </Link>
            <p className="text-white/80 text-base leading-relaxed mt-4">
              {t('footer.best_partner')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">{t('home.crew_management')}</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">{t('home.ship_management')}</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">{t('home.repair_supply')}</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">{t('home.new_building')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">{t('footer.company')}</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/fleet" className="text-white/70 hover:text-white transition-colors">{t('nav.fleet')}</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-medium text-lg mb-6">{t('footer.address')}</h3>
            <div className="space-y-4 text-white/70">
              <p className="leading-relaxed">5fl Dong-il Bldg, 12-3, Jungang-daero 180beon-gil, Dong-gu, Busan</p>
              <div className="pt-2 space-y-2">
                <p>smd@sungan.kr</p>
                <p>+82-51-462-2227</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2026 {t('footer.sungan_shipping')}. {t('footer.all_rights')}</p>
        </div>
      </div>
    </footer>
  );
}