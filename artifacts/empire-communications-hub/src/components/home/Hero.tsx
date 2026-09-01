import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a1120] pt-6 pb-12 sm:pt-12 sm:pb-20">
      {/* 1. Clear Corporate Building Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* 2. Soft Gradient Tint (Clear Sky + Visible Building) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b162c]/80 via-[#091322]/75 to-[#060b14]/95" />

      {/* 3. Main Content (Shifted Up & Compact) */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col space-y-3.5 sm:space-y-6">
          
          {/* Glowing Dot + Monospace Eyebrow Tag */}
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#93c5fd]">
            <span className="h-2 w-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#60a5fa] shrink-0" />
            <span className="text-[#bfdbfe]">
              CUSTOMER ENGAGEMENT · TELECALLING · SALES SUPPORT · BUSINESS OPERATIONS
            </span>
          </div>

          {/* Main Dual-Tone Headline */}
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ffffff] leading-[1.15]">
            Powering your business growth{" "}
            <span className="text-[#60a5fa]">
              with seamless customer engagement
            </span>{" "}
            and end-to-end operational execution.
          </h1>

          {/* Master Sub-Content (Crystal Clear Bright Text) */}
          <p className="max-w-3xl text-[13px] sm:text-[15px] md:text-base text-[#e2e8f0] leading-relaxed font-normal">
            Empire Communications Hub serves as the strategic operational backbone and customer engagement and management partner for modern businesses. We bridge the gap between your brand and your customers by deploying highly trained professionals to handle end-to-end inbound and outbound telecalling, 24/7 customer care, lead generation and sales follow-ups, chat and email support, verified data management, and essential back-office administration. By combining structured workflows with dedicated operational teams, we eliminate daily operational delays, ensure zero communication lag, and deliver measurable growth across every customer interaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-3 pt-2 sm:pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#2563eb] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#ffffff] shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-[#1d4ed8] active:scale-[0.98]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ffffff]" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-500/60 bg-[#0f172a]/80 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#ffffff] transition-all duration-200 hover:bg-[#1e293b] hover:border-slate-400 active:scale-[0.98]"
            >
              Explore Our Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
