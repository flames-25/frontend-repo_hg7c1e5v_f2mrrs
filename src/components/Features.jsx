import React from 'react';
import { Zap, HardDrive, Globe, ShieldCheck, Gauge, Server, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-emerald-400" size={22} />,
    title: 'Ultra-low latency',
    desc: 'Routes optimized for Southeast Asia with peering in SG and ID.',
  },
  {
    icon: <Cpu className="text-emerald-400" size={22} />,
    title: '12th Gen Intel',
    desc: 'High-clock Intel Core i5 (12th Gen) for smooth TPS under load.',
  },
  {
    icon: <HardDrive className="text-emerald-400" size={22} />,
    title: 'NVMe storage',
    desc: 'Blazing-fast read/write speeds for world saves and chunk loading.',
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={22} />,
    title: 'DDoS protection',
    desc: 'Enterprise-grade mitigation keeps your players online 24/7.',
  },
  {
    icon: <Server className="text-emerald-400" size={22} />,
    title: 'Automatic backups',
    desc: 'Daily offsite backups with one-click restores from your panel.',
  },
  {
    icon: <Globe className="text-emerald-400" size={22} />,
    title: 'Global anycast',
    desc: 'Smart routing for stable performance, wherever your players are.',
  },
  {
    icon: <Gauge className="text-emerald-400" size={22} />,
    title: 'Instant scaling',
    desc: 'Upgrade RAM and vCores without restarts or world corruption.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why NovaCloud</h2>
          <p className="mt-3 text-white/70">Purpose-built for Minecraft servers across Singapore and Indonesia.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-emerald-400/40 transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 grid place-items-center ring-1 ring-emerald-400/30">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
