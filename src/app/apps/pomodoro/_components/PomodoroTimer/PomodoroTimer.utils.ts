
let POMODORO_AUDIO: HTMLAudioElement;
if (typeof window !== 'undefined') {
  POMODORO_AUDIO = new Audio('/assets/audio/pomodoro-alert.wav');
}
export function playRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.currentTime = 0;
    POMODORO_AUDIO.play();
  }
}

export function stopRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.pause();
    POMODORO_AUDIO.currentTime = 0;
  }
}