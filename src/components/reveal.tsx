"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { watch } from "@/lib/reveal-controller";

type RevealProps = {
  children: ReactNode;
  /** Stagger sibling reveals without hand-writing transition delays. */
  delay?: number;
  /** Rendered element — use "li", "section", etc. where semantics matter. */
  as?: "div" | "section" | "li" | "p" | "span" | "header" | "footer";
  className?: string;
  id?: string;
};

/**
 * Reveals its children once they scroll into view, then stops observing.
 *
 * Invisible-by-default content is a liability on an invitation, so the hidden
 * state is layered behind three guards: it only applies when JS has run (the
 * `data-js` flag set in the root layout), it is skipped entirely under
 * prefers-reduced-motion, and anything already on screen at mount is revealed
 * from its measured rect rather than waiting on an observer callback.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;
    const show = () => {
      done = true;
      node.setAttribute("data-visible", "");
    };

    // Already on screen (deep link, restored scroll position, short page):
    // show it now instead of depending on an observer callback.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return;
    }

    const unwatch = watch(node, show);

    if (typeof IntersectionObserver === "undefined") {
      return unwatch;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          show();
          observer.disconnect();
          unwatch();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      unwatch();
    };
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      data-reveal=""
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
