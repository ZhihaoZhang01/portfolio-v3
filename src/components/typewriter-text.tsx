"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  /** Delay before typing starts. */
  startDelayMs?: number;
  /** Delay between each character. */
  charDelayMs?: number;
  /** Keep blinking cursor after typing completes. */
  keepCursor?: boolean;
  cursorClassName?: string;
  onDone?: () => void;
};

export function TypewriterText({
  text,
  className,
  startDelayMs = 0,
  charDelayMs = 65,
  keepCursor = true,
  cursorClassName,
  onDone,
}: TypewriterTextProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(startDelayMs === 0);
  const didCallDoneRef = useRef(false);

  useEffect(() => {
    if (startDelayMs === 0) return;
    const t = window.setTimeout(() => setStarted(true), startDelayMs);
    return () => window.clearTimeout(t);
  }, [startDelayMs]);

  useEffect(() => {
    if (!started) return;
    if (index >= chars.length) return;

    const t = window.setTimeout(() => setIndex((v) => v + 1), charDelayMs);
    return () => window.clearTimeout(t);
  }, [started, index, chars.length, charDelayMs]);

  const typed = chars.slice(0, index).join("");
  const done = index >= chars.length;

  useEffect(() => {
    if (!done) return;
    if (!onDone) return;
    if (didCallDoneRef.current) return;
    didCallDoneRef.current = true;
    onDone();
  }, [done, onDone]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span className="whitespace-pre">{typed}</span>
      {keepCursor || !done ? (
        <span
          aria-hidden="true"
          className={cn(
            "ml-[0.08em] inline-block w-[0.6ch] translate-y-[0.08em] border-r-[0.14em] border-current animate-caret-blink",
            cursorClassName,
          )}
        />
      ) : null}
    </span>
  );
}

