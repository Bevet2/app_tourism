const tabs = document.querySelectorAll(".tab-link");
const panels = document.querySelectorAll(".content-panel");
const quickActions = document.querySelectorAll("[data-target]");

function activatePanel(panelName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.panel === panelName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === panelName);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activatePanel(tab.dataset.panel));
});

quickActions.forEach((button) => {
  button.addEventListener("click", () => activatePanel(button.dataset.target));
});
