import { ArrowRight, Sparkles } from "lucide-react";
import { BlurIn } from "./ui/BlurIn";
import { SplitText } from "./ui/SplitText";
import { HlsVideo } from "./ui/HlsVideo";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070612] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HlsVideo
          src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
          className="w-full h-full object-cover ml-[200px] scale-[1.2] origin-left"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070612] to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 max-w-3xl">
          
          {/* Top Section: Badge, Heading, Subtitle */}
          <div className="flex flex-col gap-6 items-start">
            {/* Badge */}
            <BlurIn duration={0.6} delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span className="text-sm font-medium text-white/80">
                  New AI Automation Ally
                </span>
              </div>
            </BlurIn>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.2] text-foreground">
              <span className="block">
                <SplitText text="Unlock the Power of AI" />
              </span>
              <span className="inline-block mt-2">
                <SplitText text="for Your" delay={0.08 * 5} />{" "}
                <span className="font-serif italic">
                  <SplitText text="Business." delay={0.08 * 7} />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <BlurIn duration={0.6} delay={0.4}>
              <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl">
                Our cutting-edge AI platform automates, analyzes, and accelerates your workflows so you can focus on what really matters.
              </p>
            </BlurIn>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <BlurIn duration={0.6} delay={0.6}>
              <a 
                href="/book-call" 
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Book A Free Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </BlurIn>
            
            <BlurIn duration={0.6} delay={0.6}>
              <button 
                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
              >
                Learn now
              </button>
            </BlurIn>
          </div>

        </div>
      </div>
    </section>
  );
}