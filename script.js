function lanzarConfeti() {
  var duration = 15 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti ({
      particleCount: 5,
      // angle: 60,
      spread: 160,
      origin: { y: 0.6}
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

};

lanzarConfeti();