// THE LIVING CANVAS — PROCEDURAL SOUND ENGINE & SPOKEN AUDIO GUIDE
// Native Web Audio API Soundscape (Tanpura Drone Synthesis) & SpeechSynthesis

class MuseumSoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.uiGain = null;
    this.oscillators = [];
    this.isPlayingAmbient = false;
    this.isMuted = true;
    this.isSpeaking = false;
    this.activeUtterance = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master Gains
      this.ambientGain = this.ctx.createGain();
      this.uiGain = this.ctx.createGain();

      this.ambientGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.uiGain.gain.setValueAtTime(0.2, this.ctx.currentTime);

      this.ambientGain.connect(this.ctx.destination);
      this.uiGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not supported or blocked", e);
    }
  }

  toggleAmbient(forceState = null) {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const nextState = forceState !== null ? forceState : !this.isPlayingAmbient;

    if (nextState) {
      this.startTanpuraDrone();
      this.isPlayingAmbient = true;
      this.isMuted = false;
      this.ambientGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.ambientGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 2.5);
    } else {
      this.isPlayingAmbient = false;
      if (this.ambientGain) {
        this.ambientGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.ambientGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.2);
        setTimeout(() => this.stopTanpuraDrone(), 1300);
      }
    }
    return this.isPlayingAmbient;
  }

  startTanpuraDrone() {
    this.stopTanpuraDrone();
    if (!this.ctx) return;

    // Sa (C#3 / 138.59 Hz), Pa (G#3 / 207.65 Hz), Sa' (C#4 / 277.18 Hz)
    const fundamental = 138.59;
    const notes = [
      fundamental * 1.5,      // Pa (G#3)
      fundamental * 2.0,      // Sa' (C#4)
      fundamental * 2.0,      // Sa' (C#4)
      fundamental             // Kharaj Sa (C#3)
    ];

    notes.forEach((freq, idx) => {
      // Create rich dual-oscillator voice for warm resonant harmonic beating
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const voiceGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = "sawtooth";
      osc2.type = "triangle";

      osc1.frequency.setValueAtTime(freq + (idx * 0.15), this.ctx.currentTime);
      osc2.frequency.setValueAtTime(freq - (idx * 0.12), this.ctx.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(380 + (idx * 60), this.ctx.currentTime);
      filter.Q.setValueAtTime(4, this.ctx.currentTime);

      // Gentle cyclical pulsing LFO
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.18 + (idx * 0.05), this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      lfo.connect(voiceGain.gain);
      voiceGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(voiceGain);
      voiceGain.connect(this.ambientGain);

      osc1.start();
      osc2.start();
      lfo.start();

      this.oscillators.push(osc1, osc2, lfo);
    });
  }

  stopTanpuraDrone() {
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this.oscillators = [];
  }

  // Subtle acoustic UI interaction feedback
  playChime(type = "select") {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    const now = this.ctx.currentTime;

    if (type === "select") {
      // Golden bell harmonic chime
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.65);
    } else if (type === "open") {
      // Deep resonant bronze gong strike
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.8);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc.start(now);
      osc.stop(now + 1.25);
    } else if (type === "route") {
      // Rising harmonic sequence
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(659.25, now + 0.2);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.55);
    }

    osc.connect(gain);
    gain.connect(this.uiGain);
  }

  // Curatorial Spoken Audio Narration (Web Speech API)
  speakLocationGuide(location, onStart = () => {}, onEnd = () => {}) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    this.isSpeaking = false;

    if (!location) return;

    const narrative = `${location.name}, located in ${location.state}. ${location.title}. ${location.description} Historical context: ${location.context} Spatial philosophy: ${location.spatialPhilosophy}`;

    const utterance = new SpeechSynthesisUtterance(narrative);
    utterance.rate = 0.92;
    utterance.pitch = 0.98;

    // Pick English (Indian) or natural high-quality voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.includes("en-IN") || v.lang.includes("en-GB") || v.lang.includes("en-US"));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.activeUtterance = utterance;
      onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.activeUtterance = null;
      onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.activeUtterance = null;
      onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    this.activeUtterance = null;
  }
}

export const soundEngine = new MuseumSoundEngine();
