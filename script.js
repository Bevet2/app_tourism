const navMenu = document.querySelector("#nav-menu");
const navTrigger = document.querySelector("#nav-trigger");
const navPanel = document.querySelector("#nav-menu-panel");
const navCurrentLabel = document.querySelector("#nav-current-label");
const calendarWeek = document.querySelector("#calendar-week");
const totalRidesNode = document.querySelector("#calendar-total-rides");
const totalClientsNode = document.querySelector("#calendar-total-clients");
const totalVehiclesNode = document.querySelector("#calendar-total-vehicles");

const rideTemplates = [
  [
    {
      time: "08:15",
      route: "Paris centre -> Giverny",
      clients: 6,
      vehicle: "VTC 01",
      note: "Prise en charge hotel",
    },
    {
      time: "14:20",
      route: "Giverny -> Versailles",
      clients: 4,
      vehicle: "VTC 02",
      note: "Retour groupe apres visite",
    },
  ],
  [
    {
      time: "07:45",
      route: "Paris -> Reims",
      clients: 3,
      vehicle: "VTC 01",
      note: "Depart gare",
    },
    {
      time: "16:30",
      route: "Reims -> Paris",
      clients: 3,
      vehicle: "VTC 01",
      note: "Retour fin de degustation",
    },
  ],
  [
    {
      time: "09:00",
      route: "Lille centre -> Bruges",
      clients: 5,
      vehicle: "Van 03",
      note: "Passage par l'hotel",
    },
  ],
  [
    {
      time: "08:30",
      route: "Lyon -> Annecy",
      clients: 7,
      vehicle: "Minibus 04",
      note: "Circuit lac et vieille ville",
    },
    {
      time: "18:10",
      route: "Annecy -> Lyon",
      clients: 7,
      vehicle: "Minibus 04",
      note: "Retour en soiree",
    },
  ],
  [
    {
      time: "10:15",
      route: "Nice -> Monaco",
      clients: 4,
      vehicle: "VTC 02",
      note: "Arrivee client 09:50",
    },
    {
      time: "20:00",
      route: "Monaco -> Nice",
      clients: 4,
      vehicle: "VTC 02",
      note: "Retour apres diner",
    },
  ],
  [
    {
      time: "06:50",
      route: "Bordeaux -> Saint-Emilion",
      clients: 8,
      vehicle: "Minibus 05",
      note: "Circuit vignobles",
    },
  ],
  [
    {
      time: "11:00",
      route: "Marseille -> Cassis",
      clients: 6,
      vehicle: "Van 03",
      note: "Balade calanques",
    },
    {
      time: "17:40",
      route: "Cassis -> Marseille",
      clients: 6,
      vehicle: "Van 03",
      note: "Retour port et hotels",
    },
  ],
];

function capitalizeLabel(label) {
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function setNavMenuOpen(isOpen) {
  if (!navMenu || !navTrigger || !navPanel) {
    return;
  }

  navMenu.classList.toggle("open", isOpen);
  navTrigger.setAttribute("aria-expanded", String(isOpen));
  navPanel.hidden = !isOpen;
}

function syncCurrentLabel() {
  if (!navCurrentLabel) {
    return;
  }

  const activeOption = document.querySelector(".nav-option.active strong");
  if (activeOption) {
    navCurrentLabel.textContent = activeOption.textContent.trim();
  }
}

function buildCurrentWeekCalendar() {
  if (!calendarWeek) {
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekdayFormatter = new Intl.DateTimeFormat("fr-FR", { weekday: "long" });
  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
  });

  const totalRides = rideTemplates.reduce((sum, day) => sum + day.length, 0);
  const totalClients = rideTemplates.reduce(
    (sum, day) => sum + day.reduce((daySum, ride) => daySum + ride.clients, 0),
    0
  );
  const usedVehicles = new Set(
    rideTemplates.flatMap((day) => day.map((ride) => ride.vehicle))
  ).size;

  if (totalRidesNode) {
    totalRidesNode.textContent = String(totalRides);
  }

  if (totalClientsNode) {
    totalClientsNode.textContent = String(totalClients);
  }

  if (totalVehiclesNode) {
    totalVehiclesNode.textContent = String(usedVehicles);
  }

  calendarWeek.innerHTML = rideTemplates
    .map((rides, index) => {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + index);

      const weekday = capitalizeLabel(weekdayFormatter.format(currentDate));
      const displayDate = dateFormatter.format(currentDate);
      const todayBadge = index === 0 ? '<span class="today-badge">Aujourd\'hui</span>' : "";

      const tripsMarkup = rides
        .map(
          (ride) => `
            <article class="trip-item">
              <span class="trip-time">${ride.time}</span>
              <strong class="trip-route">${ride.route}</strong>
              <div class="trip-meta">
                <span>${ride.clients} clients</span>
                <span>${ride.vehicle}</span>
              </div>
              <span class="trip-note">${ride.note}</span>
            </article>
          `
        )
        .join("");

      return `
        <article class="calendar-day ${index === 0 ? "today" : ""}">
          <div class="calendar-day-head">
            <div class="calendar-day-name">
              <strong>${weekday}</strong>
              ${todayBadge}
            </div>
            <span class="calendar-day-date">${displayDate}</span>
          </div>
          <div class="day-trip-list">
            ${tripsMarkup}
          </div>
        </article>
      `;
    })
    .join("");
}

if (navTrigger) {
  navTrigger.addEventListener("click", () => {
    const isOpen = navTrigger.getAttribute("aria-expanded") === "true";
    setNavMenuOpen(!isOpen);
  });
}

document.addEventListener("click", (event) => {
  if (!navMenu) {
    return;
  }

  if (navMenu.contains(event.target)) {
    return;
  }

  setNavMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  setNavMenuOpen(false);

  if (navTrigger) {
    navTrigger.focus();
  }
});

syncCurrentLabel();
buildCurrentWeekCalendar();
