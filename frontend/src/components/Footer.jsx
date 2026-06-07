import { Link } from 'react-router-dom';
import { FaShip } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaShip className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                SUNGAN <span className="text-white/80">SHIPPING</span>
              </span>
            </Link>
            <p className="text-white/80 text-base leading-relaxed">
              Your trusted partner in global maritime logistics.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Crew Management</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Ship Management</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Repair/Supply of Ship's Spare Parts</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">New Building Supervising</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="text-white/70 hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-lg mb-6">Address</h3>
            <div className="space-y-4 text-white/70">
              <p className="leading-relaxed">5fl Dong-il Bldg, 12-3, Jungang-daero 180beon-gil, Dong-gu, Busan</p>
              <div className="pt-2 space-y-2">
                <p>smd@sungan.kr</p>
                <p>+82-51-462-2227</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2026 Sungan Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}