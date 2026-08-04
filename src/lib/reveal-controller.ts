type Target = { node: HTMLElement; show: () => void };

const pending = new Set<Target>();
let scrolling = false;
let listening = false;

function inViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const margin = window.innerHeight * 0.08;
  return rect.top < window.innerHeight - margin && rect.bottom > 0;
}

function flush() {
  scrolling = false;
  for (const target of pending) {
    if (inViewport(target.node)) {
      target.show();
      pending.delete(target);
    }
  }
  if (pending.size === 0) stopListening();
}

function onScroll() {
  if (scrolling) return;
  scrolling = true;
  requestAnimationFrame(flush);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
}

/**
 * Backstop for the per-element IntersectionObserver. One rAF-throttled scroll
 * listener is shared by every pending reveal, so environments where
 * IntersectionObserver never delivers callbacks still release the content
 * instead of leaving the page blank.
 */
export function watch(node: HTMLElement, show: () => void) {
  const target = { node, show };
  pending.add(target);
  startListening();

  return () => {
    pending.delete(target);
    if (pending.size === 0) stopListening();
  };
}
