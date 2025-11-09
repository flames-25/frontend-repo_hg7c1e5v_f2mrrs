import React from 'react';
import { Check, Cpu, HardDrive, MemoryStick, MapPin } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    ram: 1,
    price: 0.8,
    features: ['Intel Core i5 12th Gen', 'NVMe storage', 'Singapore/Jakarta locations', 'Instant setup'],
  },
  {
    name: 'Community',
    ram: 4,
    price: 3.2,
    features: ['High clock speeds for plugins', 'Daily backups', 'DDoS protection', 'Scale anytime'],
    highlight: true,
  },
  {
    name: 'Pro',
    ram: 8,
    price: 6.4,
    features: ['Priority CPU', 'Advanced panel', 'SFTP access', '24/7 support'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Starting at just $0.80 per GB RAM. Pick what fits today and scale anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 ring-1 ring-white/10 bg-slate-900/60 ${t.highlight ? 'outline outline-emerald-400/60 outline-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">{t.name}</p>
                  <h3 className="text-2xl font-bold text-white">{t.ram} GB RAM</h3>
                </div>
                <p className="text-3xl font-extrabold text-emerald-400">${t.price.toFixed(2)}</p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-2.5"
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-white/70 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="inline-flex items-center gap-2">
            <Cpu size={18} className="text-emerald-400" /> 12th Gen Intel Core i5
          </div>
          <div className="inline-flex items-center gap-2">
            <HardDrive size={18} className="text-emerald-400" /> NVMe Storage
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin size={18} className="text-emerald-400" /> Singapore • Jakarta
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
