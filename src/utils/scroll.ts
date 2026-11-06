function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

let animId: number | null = null;

function cancel() {
  if (animId !== null) {
    cancelAnimationFrame(animId);
    animId = null;
  }
}

function animateScroll(targetY: number, duration = 650) {
  cancel();
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;

  const start = performance.now();

  function step(now: number) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeOutCubic(t));
    if (t < 1) {
      animId = requestAnimationFrame(step);
    } else {
      animId = null;
    }
  }
  animId = requestAnimationFrame(step);
}

export function scrollToId(id: string) {
  if (id === "top") {
    animateScroll(0);
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // sticky navbar height
  const target = el.getBoundingClientRect().top + window.scrollY - offset;
  animateScroll(target);
}

export function setupSmoothScroll() {
  const clickHandler = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest?.(
      'a[href^="#"]'
    ) as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const id = href.slice(1);
    if (id !== "top" && !document.getElementById(id)) return;
    e.preventDefault();
    scrollToId(id);
  };

  const interrupt = () => cancel();

  document.addEventListener("click", clickHandler);
  window.addEventListener("wheel", interrupt, { passive: true });
  window.addEventListener("touchmove", interrupt, { passive: true });

  return () => {
    document.removeEventListener("click", clickHandler);
    window.removeEventListener("wheel", interrupt);
    window.removeEventListener("touchmove", interrupt);
  };
}