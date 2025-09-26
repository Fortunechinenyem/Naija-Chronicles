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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Subtle particle effect for sophistication
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
        this.size = Math.random() * 1 + 0.3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `hsla(120, 60%, ${Math.random() * 20 + 70}%, 0.1)`;
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
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.fillStyle = "rgba(5, 25, 15, 0.02)";
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-green-950 to-slate-900">
      {/* Subtle Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Navigation Header with Logo */}
      <nav className="relative z-20 py-6 px-4 border-b border-green-800/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-naija-green to-cultural-gold rounded-lg flex items-center justify-center font-bold text-white text-lg">
              NC
            </div>
            <span className="text-xl font-semibold text-white">
              NaijaChronicles
            </span>
          </div>

          <div className="flex space-x-6">
            <Link
              href="/timeline"
              className="text-green-200 hover:text-white transition-colors duration-200"
            >
              Timeline
            </Link>
            <Link
              href="/flag-creator"
              className="text-green-200 hover:text-white transition-colors duration-200"
            >
              Flag Creator
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Elegant Logo/Brand Mark */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-naija-green via-cultural-gold to-naija-green rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
              <span className="text-4xl font-bold text-white">NC</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            NaijaChronicles
            <br />
            <span className="text-2xl md:text-3xl font-light text-green-200 mt-2 block">
              Celebrating 60+ Years of Nigerian Heritage
            </span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-green-100 leading-relaxed">
              Explore Nigeria's remarkable journey since independence. A digital
              tribute to our nation's history, culture, and enduring spirit.
            </p>
          </div>

          {/* Elegant Separator */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-600"></div>
            <div className="w-2 h-2 bg-cultural-gold rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-600"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
        {/* Feature Cards - Sophisticated Design */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Link href="/timeline">
            <div className="group relative cursor-pointer">
              <div className="relative bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-green-800/30 group-hover:border-green-600/50 transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
                    1960
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Historical Timeline
                  </h2>
                </div>

                <p className="text-green-100/80 leading-relaxed mb-6">
                  Journey through Nigeria's pivotal moments from independence to
                  present day. Discover political milestones, cultural
                  achievements, and national triumphs that shaped our nation.
                </p>

                <div className="flex items-center text-green-300 group-hover:text-cultural-gold transition-colors duration-200">
                  <span className="font-medium">Explore Nigeria's Story</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>

          <Link href="/flag-creator">
            <div className="group relative cursor-pointer">
              <div className="relative bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-green-800/30 group-hover:border-cultural-gold/50 transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cultural-gold to-yellow-600 rounded-lg flex items-center justify-center text-slate-900 text-xl font-semibold">
                    🎨
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Flag Designer
                  </h2>
                </div>

                <p className="text-green-100/80 leading-relaxed mb-6">
                  Create custom Nigerian flags with our intuitive designer.
                  Express your patriotism through personalized designs that
                  celebrate our national colors and symbols.
                </p>

                <div className="flex items-center text-green-300 group-hover:text-cultural-gold transition-colors duration-200">
                  <span className="font-medium">Design Your Flag</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cultural-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Link>
        </div>

        {/* Key Features - Professional Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "📅",
              title: "Comprehensive History",
              desc: "60+ years of documented events and milestones",
            },
            {
              icon: "🎨",
              title: "Creative Tools",
              desc: "Advanced flag design with patriotic elements",
            },
            {
              icon: "📱",
              title: "Modern Experience",
              desc: "Responsive design optimized for all devices",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/40 rounded-lg border border-green-800/20"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-green-100/70 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-12 border border-green-800/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin Your Journey Through Nigerian History
          </h2>
          <p className="text-green-100/80 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians exploring their heritage and celebrating
            our nation's independence through interactive timelines and creative
            expression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/timeline">
              <Button
                size="lg"
                className="bg-naija-green hover:bg-green-700 text-white px-8"
              >
                Explore Timeline
              </Button>
            </Link>
            <Link href="/flag-creator">
              <Button
                size="lg"
                variant="outline"
                className="border-cultural-gold text-cultural-gold hover:bg-cultural-gold/10"
              >
                Start Designing
              </Button>
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { number: "60+", label: "Years of History" },
            { number: "100+", label: "Historical Events" },
            { number: "36", label: "States Represented" },
            { number: "200M+", label: "Fellow Nigerians" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl font-bold text-cultural-gold mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-green-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-800/30 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-naija-green to-cultural-gold rounded flex items-center justify-center font-bold text-white">
              NC
            </div>
            <span className="text-lg font-semibold text-white">
              NaijaChronicles
            </span>
          </div>

          <p className="text-green-200/80 mb-6">
            Celebrating Nigeria's Independence • October 1st, 1960
          </p>

          <div className="flex justify-center space-x-6 text-green-300">
            <Link
              href="/timeline"
              className="hover:text-white transition-colors"
            >
              Timeline
            </Link>
            <Link
              href="/flag-creator"
              className="hover:text-white transition-colors"
            >
              Flag Creator
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-green-800/30">
            <p className="text-green-200/60 text-sm">
              © 2025 NaijaChronicles. A tribute to Nigeria's rich heritage and
              independence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
