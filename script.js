const roadmap = {
  voice: {
    stage: "Phase 1",
    title: "Voice that works hands-free.",
    text:
      "Walker OS should listen through speech-to-text, respond through text-to-speech, support typed fallback input, and expose a privacy mode that keeps sensitive commands local.",
    items: [
      "Wake phrase and push-to-talk modes",
      "Local transcript history with delete controls",
      "Voice profiles for different speakers and environments"
    ]
  },
  cars: {
    stage: "Phase 2",
    title: "A safer car companion, not a driver.",
    text:
      "Vehicle support should start with read-only integrations: OBD-II telemetry, maintenance reminders, route context, and spoken prompts that do not distract from driving.",
    items: [
      "Bluetooth and OBD-II read-only device pairing",
      "Maintenance and battery health summaries",
      "Driver-safe prompts with manual mute and disable controls"
    ]
  },
  ar: {
    stage: "Phase 3",
    title: "AR glasses for lightweight context.",
    text:
      "Walker OS can power a companion display for captions, notifications, navigation hints, and task cards on supported AR glasses or phone-connected wearable displays.",
    items: [
      "Live captions from local speech-to-text",
      "Heads-up task cards and notification filters",
      "Camera-aware assistance only with explicit permission"
    ]
  },
  home: {
    stage: "Phase 4",
    title: "A small hub for real-world devices.",
    text:
      "A Pi or mini PC build can become a local automation hub for lights, sensors, routines, and personal workflows without forcing every command through the cloud.",
    items: [
      "GPIO and sensor profiles for builder projects",
      "Local routines with visible audit logs",
      "Matter, MQTT, and home assistant style bridges"
    ]
  },
  dev: {
    stage: "Phase 5",
    title: "An extension layer for builders.",
    text:
      "Walker OS should eventually support modules, model providers, hardware drivers, and reusable skills so developers can extend it without replacing the base image.",
    items: [
      "Module SDK with signed packages",
      "Model provider adapters and local fallback rules",
      "Release channels for stable, beta, and experimental builds"
    ]
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const roadmapPanel = document.querySelector("#roadmapPanel");
const roadmapStage = document.querySelector("#roadmapStage");
const roadmapTitle = document.querySelector("#roadmapTitle");
const roadmapText = document.querySelector("#roadmapText");
const roadmapList = document.querySelector("#roadmapList");
const floatingHardware = document.querySelectorAll("[data-float-layer]");
const walkerVoiceAudio = document.querySelector("#walkerVoiceAudio");
const walkerVoiceButton = document.querySelector("#walkerVoiceButton");
const walkerVoiceStatus = document.querySelector("#walkerVoiceStatus");

function renderRoadmap(tabName) {
  const tab = roadmap[tabName];

  if (!tab || !roadmapStage || !roadmapTitle || !roadmapText || !roadmapList) {
    return;
  }

  roadmapStage.textContent = tab.stage;
  roadmapTitle.textContent = tab.title;
  roadmapText.textContent = tab.text;
  roadmapList.replaceChildren(
    ...tab.items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderRoadmap(button.dataset.tab);
    roadmapPanel.focus({ preventScroll: true });
  });
});

if (floatingHardware.length > 0) {
  let ticking = false;

  function updateFloatingHardware() {
    const scrollOffset = window.scrollY;

    floatingHardware.forEach((item) => {
      const layer = Number(item.dataset.floatLayer || 0);
      const distance = Math.min(scrollOffset * layer, 46);
      item.style.setProperty("--scroll-float", `${distance.toFixed(2)}px`);
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateFloatingHardware);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateFloatingHardware();
}

if (walkerVoiceAudio && walkerVoiceButton && walkerVoiceStatus) {
  walkerVoiceButton.addEventListener("click", async () => {
    if (walkerVoiceAudio.paused) {
      try {
        await walkerVoiceAudio.play();
        walkerVoiceStatus.textContent = "Playing";
      } catch (error) {
        walkerVoiceStatus.textContent = "Use controls";
      }
      return;
    }

    walkerVoiceAudio.pause();
    walkerVoiceStatus.textContent = "Paused";
  });

  walkerVoiceAudio.addEventListener("play", () => {
    walkerVoiceStatus.textContent = "Playing";
  });

  walkerVoiceAudio.addEventListener("pause", () => {
    walkerVoiceStatus.textContent = "Paused";
  });

  walkerVoiceAudio.addEventListener("ended", () => {
    walkerVoiceStatus.textContent = "Ready";
  });
}
