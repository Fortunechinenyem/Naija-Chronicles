"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for magical background
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `hsl(${Math.random() * 60 + 120}, 70%, ${
          Math.random() * 30 + 60
        }%)`;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 20, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "#008751" : i % 3 === 1 ? "#FFD700" : "#FFFFFF"
              } 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 30 + 30}s`,
            }}
          />
        ))}
      </div>

      {/* Header Section with Magical Effects */}
      <header className="relative z-10 text-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Animated Title */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cultural-gold via-naija-green to-cultural-gold bg-[length:200%_200%] animate-gradient-x mb-4">
              NaijaChronicles
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer blur-xl opacity-50" />
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className="relative mb-12">
            <p className="text-xl md:text-2xl font-light text-green-100 mb-4">
              Where History Meets Magic • Celebrating Nigeria&apos;s Journey
              Since 1960
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-cultural-gold animate-pulse" />
              <div className="w-2 h-2 bg-cultural-gold rounded-full animate-bounce" />
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-cultural-gold animate-pulse" />
            </div>
          </div>

          {/* Interactive Tagline */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-green-50/90 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cultural-gold/30 transition-all duration-500 hover:scale-105">
              Step into a{" "}
              <span className="text-cultural-gold font-semibold">
                magical journey
              </span>{" "}
              through time. Explore Nigeria&apos;s rich tapestry of history,
              create stunning patriotic art, and celebrate the spirit of a
              nation that continues to shine bright.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content with 3D Card Effects */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        {/* Feature Cards with Hover 3D Effect */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Link href="/timeline">
            <div className="group relative cursor-pointer">
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cultural-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-cultural-gold/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-naija-green to-cultural-gold rounded-2xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-500">
                    📜
                  </div>
                  <div className="absolute inset-0 bg-cultural-gold/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
                </div>

                <h2 className="text-3xl font-bold text-white text-center mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Historical Timeline
                </h2>
                <p className="text-green-100/80 text-center leading-relaxed">
                  Embark on an immersive journey through Nigeria&apos;s history.
                  From independence to modern achievements, experience our story
                  like never before with interactive timelines and captivating
                  storytelling.
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-cultural-gold text-sm font-medium">
                    Explore Magic
                    <span className="animate-pulse">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/flag-creator">
            <div className="group relative cursor-pointer">
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cultural-gold/10 to-green-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Main Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-cultural-gold/50 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cultural-gold to-naija-green rounded-2xl flex items-center justify-center text-3xl transform group-hover:-rotate-12 transition-transform duration-500">
                    🎨
                  </div>
                  <div className="absolute inset-0 bg-naija-green/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
                </div>

                <h2 className="text-3xl font-bold text-white text-center mb-4 bg-gradient-to-r from-white to-cultural-gold bg-clip-text text-transparent">
                  Flag Creator
                </h2>
                <p className="text-green-100/80 text-center leading-relaxed">
                  Unleash your creativity with our magical flag designer. Craft
                  stunning patriotic art with intuitive tools, special effects,
                  and share your creations in the most enchanting way possible.
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-cultural-gold text-sm font-medium">
                    Create Magic
                    <span className="animate-pulse">→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Magical Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🌟",
              title: "Immersive Experience",
              desc: "3D timelines and magical interactions",
            },
            {
              icon: "⚡",
              title: "Real-time Creation",
              desc: "Instant flag design with special effects",
            },
            {
              icon: "🎭",
              title: "Cultural Richness",
              desc: "Authentic Nigerian heritage celebrated",
            },
          ].map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="relative inline-block mb-4">
                <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="absolute inset-0 text-4xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-green-100/70">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated CTA Section */}
        <div className="text-center relative">
          {/* Pulse Ring Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-2 border-cultural-gold/20 rounded-full animate-ping-slow" />
            <div className="w-48 h-48 border-2 border-naija-green/20 rounded-full animate-ping-slower" />
          </div>

          <div className="relative z-10">
            <Link href="/timeline">
              <Button
                size="lg"
                variant="secondary"
                className="mr-6 mb-4 transform hover:scale-110 transition-transform duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Begin Magical Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cultural-gold to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </Link>
            <Link href="/flag-creator">
              <Button
                size="lg"
                variant="outline"
                className="border-cultural-gold text-cultural-gold hover:bg-cultural-gold/10 transform hover:scale-110 transition-transform duration-300"
              >
                Start Creating Magic
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Animated Footer */}
      <footer className="relative z-10 text-center py-12 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-green-200/80 text-lg">
            <span className="animate-pulse">✨</span> Made with magical love for
            Nigeria&apos;s Independence Day Celebration{" "}
            <span className="animate-pulse">✨</span>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {["🇳🇬", "⭐", "🎉", "🌟"].map((emoji, i) => (
              <span
                key={i}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
