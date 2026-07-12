"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";

export function SpatialAudioDemo() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const supported =
      typeof window !== "undefined" && "AudioContext" in window;
    setCanPlay(supported);
    // #region agent log
    fetch('http://127.0.0.1:7857/ingest/26e2c78a-0e1d-460d-93c3-b3c35e9476b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'b94549'},body:JSON.stringify({sessionId:'b94549',runId:'post-fix',location:'SpatialAudioDemo.tsx:useEffect',message:'canPlay set after mount',data:{supported,canPlay:supported},timestamp:Date.now(),hypothesisId:'H-A'})}).catch(()=>{});
    // #endregion
    return () => cleanupRef.current?.();
  }, []);

  const stopAudio = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    audioContextRef.current = null;
    setPlaying(false);
  }, []);

  const toggleAudio = async () => {
    if (!canPlay) return;

    if (playing) {
      stopAudio();
      return;
    }

    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createPanner();

    panner.panningModel = "HRTF";
    panner.distanceModel = "inverse";
    panner.refDistance = 1;
    panner.maxDistance = 10;
    panner.rolloffFactor = 1;
    panner.coneInnerAngle = 360;
    panner.coneOuterAngle = 0;
    panner.coneOuterGain = 0;
    panner.positionX.value = 2;
    panner.positionY.value = 0;
    panner.positionZ.value = -1;

    oscillator.type = "sine";
    oscillator.frequency.value = 220;
    gain.gain.value = 0.08;

    oscillator.connect(gain);
    gain.connect(panner);
    panner.connect(ctx.destination);
    oscillator.start();

    let direction = 1;
    const interval = setInterval(() => {
      const pos = panner.positionX.value + direction * 0.1;
      panner.positionX.value = pos;
      if (pos > 3 || pos < -3) direction *= -1;
    }, 100);

    cleanupRef.current = () => {
      clearInterval(interval);
      oscillator.stop();
      ctx.close();
    };

    setPlaying(true);
  };

  // #region agent log
  fetch('http://127.0.0.1:7857/ingest/26e2c78a-0e1d-460d-93c3-b3c35e9476b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'b94549'},body:JSON.stringify({sessionId:'b94549',runId:'post-fix',location:'SpatialAudioDemo.tsx:render',message:'always rendering section',data:{canPlay,playing},timestamp:Date.now(),hypothesisId:'H-A'})}).catch(()=>{});
  // #endregion

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gradient-sage">
          Experimente o som espacial
        </h2>
        <p className="mt-4 text-lumeria-gray">
          Uma prévia da tecnologia de sonorização que utilizamos nos
          projetos. Use fones de ouvido para a melhor experiência.
        </p>
        <div className="mt-8">
          <Button
            onClick={toggleAudio}
            variant="secondary"
            size="lg"
            disabled={!canPlay}
          >
            {playing ? "Parar demonstração" : "Iniciar demonstração"}
          </Button>
        </div>
        {playing && (
          <p className="mt-4 text-xs text-lumeria-leaf">
            Som se movendo entre os canais — simulação de áudio espacial
          </p>
        )}
      </div>
    </section>
  );
}
