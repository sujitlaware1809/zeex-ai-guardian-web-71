import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Play, Shield, Zap, Eye } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (!isVideoLoaded) {
      setIsVideoLoaded(true);
      setTimeout(() => {
        videoRef.current?.play();
        setIsPlaying(true);
      }, 100);
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  // Seek video
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const value = Number(e.target.value);
      videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
      setProgress(value);
    }
  };

  // Volume control
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
    }
  };

  // Sync play/pause state
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Fullscreen toggle
  const handleFullscreen = () => {
    if (!isFullscreen && videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Set initial volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Add initial animation to hero elements without waiting for scroll
    setTimeout(() => {
      document.querySelectorAll('.hero-element').forEach(el => {
        el.classList.add('animate-fade-up');
      });
    }, 100);

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20 md:pt-24">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-30 animate-gradient-pan"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent opacity-25 animate-gradient-pan-reverse"></div>
      </div>

      {/* Enhanced floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[15%] w-6 h-6 rounded-full bg-blue-500/40 filter blur-[20px] animate-float-slow"></div>
        <div className="absolute top-1/3 right-[20%] w-8 h-8 rounded-full bg-indigo-500/40 filter blur-[25px] animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-[15%] w-10 h-10 rounded-full bg-purple-500/40 filter blur-[30px] animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-[10%] w-12 h-12 rounded-full bg-cyan-500/40 filter blur-[35px] animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-emerald-500/30 filter blur-[15px] animate-float-medium"></div>
      </div>

      <div className="container-default relative z-10 pb-24 px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-blue-200/50 shadow-lg hero-element">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Real-Time Intelligence. Real-World Impact</span>
            <Zap className="w-4 h-4 text-blue-600" />
          </div>

          {/* Enhanced main heading */}
          <div className="overflow-visible mb-8">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 gradient-text-safe hero-element leading-[1.2] md:leading-[1.3] pb-4">
              AI-Powered Surveillance for
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">Safety & Smart Management</span>
            </h1>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-4xl mx-auto hero-element leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Zeex AI redefines how businesses, cities, and industries protect and manage their environments using 
            <span className="font-semibold text-blue-600"> AI-driven surveillance</span> to detect, respond, and prevent incidents before they escalate.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 hero-element" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/solutions"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-500/20"
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50 hover:border-blue-200"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Enhanced video section */}
          <div 
            className="w-full max-w-5xl mx-auto aspect-video rounded-3xl mb-10 overflow-hidden hero-element relative group shadow-2xl border border-white/20" 
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 opacity-30 rounded-3xl group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="absolute inset-1 rounded-2xl bg-white overflow-hidden">
              {!isVideoLoaded && (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative" onClick={handlePlayPause} style={{ cursor: 'pointer' }}>
                  <img
                    src="/video_thumbnail.png"
                    alt="Video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-2xl z-10"></div>
                  <div className="text-center relative z-20">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-blue-600 ml-1" />
                    </div>
                    <p className="text-white font-medium text-lg">Watch Our Demo</p>
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                src="/video.mp4"
                className={`w-full h-full object-cover rounded-2xl ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                poster="/video_thumbnail.png"
                onTimeUpdate={handleTimeUpdate}
                onPlay={handlePlay}
                onPause={handlePause}
                onClick={handlePlayPause}
                tabIndex={0}
                style={{ outline: 'none' }}
              />
              {/* Enhanced Custom Controls */}
              {isVideoLoaded && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <button
                        onClick={handleFullscreen}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="flex flex-col items-center hero-element" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-gray-600 mb-4 font-medium">Discover More</p>
            <button
              onClick={scrollToContent}
              className="group p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/50"
            >
              <ArrowDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll target */}
      <div ref={scrollRef} className="absolute bottom-0"></div>
    </section>
  );
};

export default Hero;