type PauseListener = (paused: boolean) => void;

const listeners = new Set<PauseListener>();
let paused = false;
let timer = 0;

export function notifyScrollActivity() {
  if (!paused) {
    paused = true;
    listeners.forEach((fn) => fn(true));
  }
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    paused = false;
    listeners.forEach((fn) => fn(false));
  }, 280);
}

export function subscribeScrollPause(fn: PauseListener) {
  listeners.add(fn);
  fn(paused);
  return () => {
    listeners.delete(fn);
  };
}

export function isScrollPaused() {
  return paused;
}
