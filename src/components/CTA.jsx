import React from 'react';
import { Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-1">
          <div className="rounded-2xl bg-slate-950 p-8 grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-300/90">
                <Sparkles size={16} />
                Limited-time launch pricing
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">Spin up your Minecraft server now</h3>
              <p className="mt-2 text-white/80">Start at just $0.80 for 1 GB RAM. Deploy in seconds in Singapore or Jakarta.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-950 font-semibold px-5 py-3">View plans</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 px-5 py-3 hover:bg-white/15">Contact sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
