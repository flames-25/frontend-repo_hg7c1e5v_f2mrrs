import React from 'react';
import { Rocket, MapPin, Shield, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-indigo-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-16 sm:pt-28 sm:pb-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-1 text-emerald-400 text-sm font-medium">
              <Rocket size={16} />
              NovaCloud is live in Singapore & Indonesia
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Minecraft Hosting built for Asia. Fast, simple, unstoppable.
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl">
              Launch your server in seconds with premium Intel Core i5 12th Gen CPUs, NVMe storage, and enterprise DDoS protection. Low latency from Singapore and Jakarta for the smoothest gameplay.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-black font-semibold px-6 py-3 transition-colors"
              >
                Get started from $0.80 / GB RAM
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 ring-1 ring-white/15"
              >
                Explore features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:inline-flex items-center gap-4 text-white/70">
              <div className="inline-flex items-center gap-2">
                <MapPin className="text-emerald-400" size={18} />
                <span>Singapore • Jakarta</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Shield className="text-emerald-400" size={18} />
                <span>L3+ DDoS protection</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Cpu className="text-emerald-400" size={18} />
                <span>Intel Core i5 (12th Gen)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-500/30 blur-3xl rounded-full" />
            <div className="absolute bottom-0 -left-10 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10 p-6 shadow-2xl">
              <div className="grid gap-4">
                <div className="rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">Plan preview</p>
                      <p className="text-2xl font-bold text-white">1 GB RAM</p>
                    </div>
                    <p className="text-3xl font-extrabold text-emerald-400">$0.80</p>
                  </div>
                  <ul className="mt-4 text-sm text-white/70 space-y-2">
                    <li>• Intel Core i5 12th Gen</li>
                    <li>• NVMe Storage</li>
                    <li>• Instant setup</li>
                    <li>• Singapore / Jakarta</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10 p-4">
                  <p className="text-sm text-white/70">Perfect for friends & small communities. Scale anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
