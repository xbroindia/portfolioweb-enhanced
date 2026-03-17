import Terminal from './Terminal'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 pt-32 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div className="hero-grid" />

      {/* Central glow */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)' }}
      />

      {/* Orbit ring 1 */}
      <div
        className="orbit-ring w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 animate-orbit1"
        style={{ pointerEvents: 'none' }}
      >
        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_8px_#00d4ff] -top-[3px] left-1/2 -translate-x-1/2" />
      </div>

      {/* Orbit ring 2 */}
      <div
        className="orbit-ring w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 animate-orbit2"
        style={{ pointerEvents: 'none' }}
      >
        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#6c63ff] -bottom-[3px] left-1/2 -translate-x-1/2" />
      </div>

      {/* Tag */}
      <div
        className="relative z-10 inline-flex items-center gap-2 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] text-[#a89eff] text-[12px] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-8 animate-fadeUp"
        style={{ animationFillMode: 'both' }}
      >
        <span className="text-accent2 text-[8px]">◆</span>
        Frontend Web Developer
      </div>

      {/* Heading */}
      <h1
        className="relative z-10 font-syne font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 animate-fadeUp1"
        style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', animationFillMode: 'both' }}
      >
        Hi, I'm Shah Hamdan
        <br />
        <span className="gradient-text">I build the web.</span>
      </h1>

      {/* Terminal */}
      <div className="relative z-10 w-full">
        <Terminal />
      </div>

      {/* Sub text */}
      <p
        className="relative z-10 max-w-[520px] mx-auto text-[1.05rem] text-muted leading-[1.75] mt-6 mb-10 animate-fadeUp2"
        style={{ animationFillMode: 'both' }}
      >
        I craft modern, responsive, and interactive user interfaces — turning ideas into polished digital experiences with React, Tailwind &amp; JavaScript.
      </p>

      {/* Buttons */}
      <div
        className="relative z-10 flex gap-4 justify-center flex-wrap animate-fadeUp3"
        style={{ animationFillMode: 'both' }}
      >
        <a
          href="#projects"
          className="rounded-full text-white px-9 py-3.5 text-[15px] font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(108,99,255,0.35)]"
          style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full text-[#f0eff8] px-9 py-3.5 text-[15px] font-medium border border-[rgba(255,255,255,0.07)] bg-transparent transition-all duration-200 hover:border-[rgba(108,99,255,0.5)] hover:-translate-y-1"
        >
          Let's Talk
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeUp4"
        style={{ animationFillMode: 'both' }}
      >
        <div
          className="w-px h-12 animate-scrollPulse"
          style={{ background: 'linear-gradient(180deg, #6c63ff, transparent)' }}
        />
        <span className="text-[10px] tracking-[0.15em] uppercase text-muted">Scroll</span>
      </div>
    </section>
  )
}
