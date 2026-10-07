"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Droplets,
  Github,
  Linkedin,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./globals.css";

const HERO_VIDEO =
  "https://cdn.21st.dev/assets/mirror/23/234bc821170e75a6b8d2e42a952078f858eb054a51fab2a5baa928a10fdc245d.mp4";
const SKYLINE_CUTOUT =
  "https://cdn.21st.dev/assets/mirror/97/97fe4402ea1d5d05c2b82befe6dbf73da1d6669b995e6d5ae9f2ebea68b1107a.png";

const projects = [
  {
    title: "StudySync AI",
    description:
      "Turns a syllabus into a personal study timetable shaped around your topics, energy, and daily routine.",
    technologies: ["TypeScript", "AI", "Study planning"],
    icon: <Brain className="h-5 w-5" />,
    repository: "https://github.com/koundalvivek073-dotcom/StudySync-ai",
    demo: "https://study-sync-ai-plum.vercel.app/upload",
  },
  {
    title: "Space Bunny GPT",
    description:
      "An AI assistant with an interactive 3D universe, voice output, searchable chats, and local conversation history.",
    technologies: ["TypeScript", "React", "Three.js"],
    icon: <Sparkles className="h-5 w-5" />,
    repository: "https://github.com/koundalvivek073-dotcom/Space-bunny-gpt",
    demo: "https://space-bunny-gpt.vercel.app/",
  },
  {
    title: "Hellock",
    description:
      "A distributed storage project exploring file replication, node failure detection, and recovery across a cluster.",
    technologies: ["JavaScript", "Distributed systems", "Storage"],
    icon: <ShieldCheck className="h-5 w-5" />,
    repository: "https://github.com/koundalvivek073-dotcom/Hellock",
    demo: "https://hel-lock.netlify.app/login",
  },
  {
    title: "JalRakshak",
    description:
      "A community water-quality monitoring concept using camera-based test-strip analysis and local aquifer alerts.",
    technologies: ["JavaScript", "Camera APIs", "Color analysis"],
    icon: <Droplets className="h-5 w-5" />,
    repository: "https://github.com/koundalvivek073-dotcom/JalRakshak",
    demo: "https://jalrakshak0101.netlify.app/",
  },
];

const skillGroups = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Web & UI",
    skills: ["React", "Vite", "Tailwind CSS", "Three.js"],
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Interests",
    skills: ["AI-powered apps", "Interactive 3D", "Study tools", "Web experiences"],
  },
];

const SCENE_COUNT = 10;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(value: number) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function useScrollProgress(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let seeking = false;
    let pendingTime: number | null = null;
    const video = videoRef.current;

    const update = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;
      setProgress(nextProgress);

      if (!video || video.duration <= 0) return;
      const time = nextProgress * video.duration;
      if (seeking) {
        pendingTime = time;
        return;
      }
      seeking = true;
      video.currentTime = time;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const onSeeked = () => {
      seeking = false;
      if (pendingTime === null || !video) return;
      const time = pendingTime;
      pendingTime = null;
      seeking = true;
      video.currentTime = time;
    };

    video?.addEventListener("loadedmetadata", onScroll);
    video?.addEventListener("seeked", onSeeked);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      video?.removeEventListener("loadedmetadata", onScroll);
      video?.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [videoRef]);

  return progress;
}

function getSceneStyle(progress: number, index: number): React.CSSProperties {
  const position = progress * SCENE_COUNT - index;
  const enter = index === 0 ? 1 : smoothstep(position / 0.16);
  const exit = index === SCENE_COUNT - 1 ? 1 : smoothstep((1 - position) / 0.18);
  const opacity = enter * exit;
  const scale = 0.94 + opacity * 0.06;
  const y = (1 - opacity) * 22;

  return {
    opacity,
    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
    filter: `blur(${(1 - opacity) * 8}px)`,
    pointerEvents: opacity > 0.85 ? "auto" : "none",
    visibility: opacity > 0.005 ? "visible" : "hidden",
  };
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progress = useScrollProgress(videoRef);
  const sceneIndex = Math.min(SCENE_COUNT - 1, Math.floor(progress * SCENE_COUNT));

  const jumpToScene = (index: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const sceneProgress = index / SCENE_COUNT + 0.02;
    window.scrollTo({ top: sceneProgress * maxScroll, behavior: "smooth" });
  };

  const scenes = [
    <div key="full-name" className="scene-copy max-w-5xl">
      <p className="scene-kicker mb-6 text-xs font-semibold uppercase tracking-[0.38em] text-blue-100/85 sm:text-sm">
        Software Product Engineering · LPU
      </p>
      <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-8xl md:text-9xl lg:text-[140px]">
        Vivek
        <br />
        <span className="text-white/65">Koundal</span>
      </h1>
      <p className="scene-description mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-xl">
        Thoughtful digital products, playful experiments, and useful tools for everyday problems.
      </p>
    </div>,
    <div key="first-name" className="scene-copy max-w-5xl">
      <p className="scene-kicker mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-blue-100/85 sm:text-sm">
        The person behind the projects
      </p>
      <h2 className="text-7xl font-semibold leading-none tracking-[-0.065em] sm:text-9xl md:text-[160px]">
        Vivek<span className="text-blue-200">.</span>
      </h2>
      <p className="scene-description mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-xl">
        B.Tech CSE · Software Product Engineering · Lovely Professional University
      </p>
    </div>,
    <div key="about" className="scene-copy grid max-w-6xl grid-cols-[1fr_88px] items-center gap-3 sm:grid-cols-[1fr_128px] sm:gap-5 md:grid-cols-[1fr_170px] md:gap-10 lg:grid-cols-[1fr_190px]">
      <div>
        <p className="scene-kicker mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/85">
          01 — About me
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          Curious by nature.
          <span className="text-white/55"> Building with purpose.</span>
        </h2>
        <p className="scene-description mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          I&apos;m a B.Tech CSE student specializing in Software Product Engineering at Lovely
          Professional University, through Kalvium. I enjoy turning ambitious ideas into useful web
          products—from AI-assisted study planning to interactive experiments in distributed
          systems and community water monitoring.
        </p>
        <p className="scene-description mt-3 flex items-center gap-2 text-sm text-white/85">
          <MapPin className="h-4 w-4 text-blue-200" />
          Phagwara · Jalandhar, India
        </p>
      </div>
      <img
        src="/profile.jpg"
        alt="Vivek Koundal"
        className="hidden aspect-[4/5] w-full rounded-xl object-cover object-center shadow-2xl md:block md:rounded-2xl"
      />
    </div>,
    ...projects.map((project, index) => (
      <div key={project.title} className="scene-copy max-w-4xl">
        <p className="scene-kicker mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/85">
          02 — Selected work · 0{index + 1} / 0{projects.length}
        </p>
        <div className="flex items-center gap-3 text-blue-200">
          {project.icon}
          <span className="text-xs uppercase tracking-[0.2em]">Featured project</span>
        </div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          {project.title}
        </h2>
        <p className="scene-description mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          {project.description}
        </p>
        <ul className="scene-description mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="scene-description scene-links mt-4 flex gap-6 text-sm">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            View source <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-200 transition-colors hover:text-white"
          >
            Live demo <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    )),
    <div key="skills" className="scene-copy max-w-4xl">
      <p className="scene-kicker mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/85">
        03 — Tools & interests
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
        What I work with.
      </h2>
      <div className="scene-columns mt-5 grid gap-4 sm:mt-7 sm:grid-cols-3 sm:gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="border-t border-white/25 pt-3">
            <div className="flex items-center gap-3 text-blue-200">
              {group.icon}
              <h3 className="font-medium text-white">{group.title}</h3>
            </div>
            <ul className="mt-2 space-y-1 text-xs text-white/85 sm:text-sm">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>,
    <div key="connect" className="scene-copy max-w-4xl">
      <p className="scene-kicker mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/85">
        04 — Find me
      </p>
      <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
        Let&apos;s connect.
      </h2>
      <p className="scene-description mt-4 text-sm text-white/90 sm:text-base">
        Explore my work or connect with me.
      </p>
      <div className="scene-description scene-links mt-5 flex flex-wrap gap-3">
        <a
          href="https://github.com/koundalvivek073-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm transition-colors hover:bg-white/10"
        >
          <Github className="h-4 w-4" />
          GitHub <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/vivek-koundal-977b42332/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm transition-colors hover:bg-white/10"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>,
    <div key="final-mark" className="scene-copy max-w-5xl text-center">
      <p className="scene-kicker mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-white/80 sm:text-sm">
        Software Product Engineering
      </p>
      <h2 className="text-7xl font-semibold leading-none tracking-[-0.07em] text-white sm:text-9xl md:text-[160px]">
        VIVEK
      </h2>
      <p className="scene-description mt-6 text-sm text-white/80 sm:text-base">Vivek Koundal · India</p>
    </div>,
  ];

  const sceneLabels = [
    "Intro",
    "Vivek",
    "About",
    "StudySync",
    "Space Bunny",
    "Hellock",
    "JalRakshak",
    "Skills",
    "Connect",
    "Final reveal",
  ];
  const skylineOpacity = smoothstep((progress - 0.88) / 0.12);

  return (
    <main className="relative bg-[#100d11] text-white">
      <div className="relative h-[900svh]">
        <section className="sticky top-0 h-[100svh] overflow-hidden">
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: `scale(${1.015 + progress * 0.04})` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[rgba(12,10,14,0.24)]"
          />

          <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between border-b border-white/10 bg-black/10 px-6 py-5 backdrop-blur-sm md:px-12 lg:px-20">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-bold tracking-[0.22em] text-white/90"
            >
              VK<span className="text-blue-300">.</span>
            </button>
            <div className="flex gap-4 text-xs font-medium text-white/75 sm:gap-7 sm:text-sm">
              {[
                ["About", 2],
                ["Work", 3],
                ["Skills", 7],
                ["Contact", 8],
              ].map(([label, index]) => (
                <button
                  key={label}
                  onClick={() => jumpToScene(Number(index))}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <div className="absolute inset-x-0 bottom-16 top-20 z-20 px-6 py-3 md:bottom-20 md:px-12 lg:px-20">
            <div className="relative mx-auto h-full w-full max-w-6xl">
              {scenes.map((scene, index) => (
                <div
                  key={scene.key}
                  aria-hidden={sceneIndex !== index}
                  className="absolute inset-0 flex items-center overflow-y-auto py-3"
                  style={getSceneStyle(progress, index)}
                >
                  <div className="max-h-full w-full py-2">{scene}</div>
                </div>
              ))}
            </div>
          </div>

          <img
            src={SKYLINE_CUTOUT}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[25] h-full w-full object-cover"
            style={{ opacity: skylineOpacity }}
          />

          <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between px-6 pb-7 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 md:px-12 lg:px-20">
            <span>Phagwara · Jalandhar, India</span>
            <span className="hidden sm:inline">
              {String(sceneIndex + 1).padStart(2, "0")} / {sceneLabels[sceneIndex]}
            </span>
            <span className="flex items-center gap-2 sm:hidden">
              Scroll <ArrowDown className="h-3 w-3" />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-40 h-[2px] bg-white/15">
            <div
              className="h-full origin-left bg-white/80"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
