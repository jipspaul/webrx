(async () => {
  const { XRDevice, metaQuest3 } = await import('https://unpkg.com/iwer@1.0.4/lib/index.js');

  const xrDevice = new XRDevice(metaQuest3);
  xrDevice.installRuntime();
  window.xrdevice = xrDevice;

  // example of manipulating XRDevice
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        xrDevice.position.x -= 0.1;
        break;
      case "ArrowRight":
        xrDevice.position.x += 0.1;
        break;
      case "ArrowUp":
        xrDevice.position.y += 0.1;
        break;
      case "ArrowDown":
        xrDevice.position.y -= 0.1;
        break;
    }
  });
})