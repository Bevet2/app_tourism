const navMenu = document.querySelector("#nav-menu");
const navTrigger = document.querySelector("#nav-trigger");
const navPanel = document.querySelector("#nav-menu-panel");
const navCurrentLabel = document.querySelector("#nav-current-label");
const calendarWeek = document.querySelector("#calendar-week");
const totalRidesNode = document.querySelector("#calendar-total-rides");
const totalClientsNode = document.querySelector("#calendar-total-clients");
const totalVehiclesNode = document.querySelector("#calendar-total-vehicles");

const vehicleForm = document.querySelector("#vehicle-form-card");
const vehicleList = document.querySelector("#vehicle-list");
const addVehicleButton = document.querySelector("#add-vehicle-button");
const openVehicleFormButton = document.querySelector("#open-vehicle-form");
const cancelVehicleFormButton = document.querySelector("#cancel-vehicle-form");
const resetVehicleFormButton = document.querySelector("#reset-vehicle-form");
const vehicleFormMessage = document.querySelector("#vehicle-form-message");
const vehicleCountSummary = document.querySelector("#vehicle-count-summary");
const vehiclePlateSummary = document.querySelector("#vehicle-plate-summary");
const vehicleFormKicker = document.querySelector("#vehicle-form-kicker");
const vehicleFormTitle = document.querySelector("#vehicle-form-title");
const submitVehicleFormButton = document.querySelector("#submit-vehicle-form");
const excludeVehicleButton = document.querySelector("#exclude-vehicle-button");
const vehicleBrandInput = document.querySelector("#vehicle-brand");
const vehicleModelInput = document.querySelector("#vehicle-model");
const vehicleColorInput = document.querySelector("#vehicle-color");
const vehiclePlateInput = document.querySelector("#vehicle-plate");
const vehicleTypeInput = document.querySelector("#vehicle-type");
const vehicleStatusInput = document.querySelector("#vehicle-status");
const vehicleTypeFilterInput = document.querySelector("#vehicle-type-filter");
const vehicleStatusFilterInput = document.querySelector("#vehicle-status-filter");
const resetVehicleFiltersButton = document.querySelector("#reset-vehicle-filters");
const vehicleFilterSummary = document.querySelector("#vehicle-filter-summary");
const vehicleRentalEndField = document.querySelector("#vehicle-rental-end-field");
const vehicleRentalEndInput = document.querySelector("#vehicle-rental-end-date");
const vehicleConsumptionInput = document.querySelector("#vehicle-consumption");
const vehicleConsumptionUnitInput = document.querySelector("#vehicle-consumption-unit");

const vehiclesStorageKey = "route-pilote-vehicles";
const vehicleTypeLabels = {
  owner: "Mon v&eacute;hicule",
  collaborator: "V&eacute;hicule d'un collaborateur",
  rental: "V&eacute;hicule lou&eacute;",
};
const vehicleStatusLabels = {
  available: "Disponible",
  in_use: "En utilisation",
  repair: "R&eacute;paration",
  rental_ended: "Location termin&eacute;e",
};
let editingVehicleIndex = -1;

const allVehicleTypeFilters = new Set(["all", "owner", "collaborator", "rental"]);
const allVehicleStatusFilters = new Set(["all", "available", "in_use", "repair", "rental_ended"]);

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

function getStoredVehicles() {
  try {
    const rawVehicles = window.localStorage.getItem(vehiclesStorageKey);
    if (!rawVehicles) {
      return [];
    }

    const parsedVehicles = JSON.parse(rawVehicles);
    return Array.isArray(parsedVehicles) ? parsedVehicles : [];
  } catch (error) {
    return [];
  }
}

function saveStoredVehicles(vehicles) {
  window.localStorage.setItem(vehiclesStorageKey, JSON.stringify(vehicles));
}

function getVehiclePlateKey(plate) {
  return plate.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function formatVehiclePlate(plate) {
  return plate.toUpperCase().trim();
}

function normalizeTextValue(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeVehicleType(value) {
  const normalizedValue = normalizeTextValue(value);

  if (
    normalizedValue === "collaborator" ||
    normalizedValue === "vehicule d'un collaborateur"
  ) {
    return "collaborator";
  }

  if (normalizedValue === "rental" || normalizedValue === "vehicule loue") {
    return "rental";
  }

  return "owner";
}

function normalizeVehicleStatus(value) {
  const normalizedValue = normalizeTextValue(value);

  if (normalizedValue === "in_use" || normalizedValue === "en utilisation") {
    return "in_use";
  }

  if (normalizedValue === "repair" || normalizedValue === "reparation") {
    return "repair";
  }

  if (normalizedValue === "rental_ended" || normalizedValue === "location terminee") {
    return "rental_ended";
  }

  return "available";
}

function normalizeRentalEndDate(value) {
  if (typeof value !== "string") {
    return "";
  }

  const trimmedValue = value.trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(trimmedValue) ? trimmedValue : "";
}

function getCurrentDateKey() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function isRentalVehicle(vehicle) {
  return normalizeVehicleType(vehicle?.vehicleType) === "rental";
}

function isRentalEnded(vehicle) {
  if (!isRentalVehicle(vehicle)) {
    return false;
  }

  const rentalEndDate = normalizeRentalEndDate(vehicle?.rentalEndDate);
  if (!rentalEndDate) {
    return false;
  }

  return getCurrentDateKey() > rentalEndDate;
}

function getVehicleTypeLabel(vehicleType) {
  return vehicleTypeLabels[normalizeVehicleType(vehicleType)] || vehicleTypeLabels.owner;
}

function getVehicleStatusLabel(vehicleStatus) {
  return vehicleStatusLabels[normalizeVehicleStatus(vehicleStatus)] || vehicleStatusLabels.available;
}

function getVehicleStatusClass(vehicleStatus) {
  const normalizedStatus = normalizeVehicleStatus(vehicleStatus);

  if (normalizedStatus === "in_use") {
    return "vehicle-status-in-use";
  }

  if (normalizedStatus === "repair") {
    return "vehicle-status-repair";
  }

  if (normalizedStatus === "rental_ended") {
    return "vehicle-status-rental-ended";
  }

  return "vehicle-status-available";
}

function getVehicleTypeFilterValue() {
  if (!vehicleTypeFilterInput) {
    return "all";
  }

  const filterValue = normalizeTextValue(vehicleTypeFilterInput.value);
  return allVehicleTypeFilters.has(filterValue) ? filterValue : "all";
}

function getVehicleStatusFilterValue() {
  if (!vehicleStatusFilterInput) {
    return "all";
  }

  const filterValue = normalizeTextValue(vehicleStatusFilterInput.value);
  return allVehicleStatusFilters.has(filterValue) ? filterValue : "all";
}

function matchesVehicleFilters(vehicle) {
  const selectedType = getVehicleTypeFilterValue();
  const selectedStatus = getVehicleStatusFilterValue();

  if (selectedType !== "all" && normalizeVehicleType(vehicle.vehicleType) !== selectedType) {
    return false;
  }

  if (selectedStatus !== "all" && normalizeVehicleStatus(vehicle.vehicleStatus) !== selectedStatus) {
    return false;
  }

  return true;
}

function updateVehicleFilterSummary(filteredCount, totalCount) {
  if (!vehicleFilterSummary) {
    return;
  }

  if (totalCount === 0) {
    vehicleFilterSummary.textContent = "Aucun vehicule enregistre pour le moment";
    return;
  }

  if (filteredCount === totalCount) {
    vehicleFilterSummary.textContent = "Tous les vehicules affiches";
    return;
  }

  if (filteredCount === 0) {
    vehicleFilterSummary.textContent = "Aucun vehicule ne correspond aux filtres";
    return;
  }

  const vehicleLabel = filteredCount > 1 ? "vehicules affiches" : "vehicule affiche";
  vehicleFilterSummary.textContent = `${filteredCount} ${vehicleLabel} sur ${totalCount}`;
}

function formatVehicleRentalEndDate(rentalEndDate) {
  const normalizedDate = normalizeRentalEndDate(rentalEndDate);
  if (!normalizedDate) {
    return "Non renseign&eacute;e";
  }

  const displayDate = new Date(`${normalizedDate}T00:00:00`);
  if (Number.isNaN(displayDate.getTime())) {
    return normalizedDate;
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(displayDate);
}

function getVehicleTypeClass(vehicleType) {
  const normalizedType = normalizeVehicleType(vehicleType);

  if (normalizedType === "collaborator") {
    return "vehicle-card-collaborator";
  }

  if (normalizedType === "rental") {
    return "vehicle-card-rental";
  }

  return "vehicle-card-owner";
}

function setVehicleCardExpanded(vehicleCard, isExpanded) {
  if (!vehicleCard) {
    return;
  }

  const detailSection = vehicleCard.querySelector(".vehicle-card-details");
  const toggleNode = vehicleCard.querySelector(".vehicle-card-toggle");

  vehicleCard.classList.toggle("is-expanded", isExpanded);
  vehicleCard.setAttribute("aria-expanded", String(isExpanded));

  if (detailSection) {
    detailSection.hidden = !isExpanded;
  }

  if (toggleNode) {
    toggleNode.innerHTML = isExpanded ? "&minus;" : "+";
  }
}

function toggleVehicleCard(vehicleCard) {
  if (!vehicleList || !vehicleCard) {
    return;
  }

  const isExpanded = vehicleCard.getAttribute("aria-expanded") === "true";
  const vehicleCards = vehicleList.querySelectorAll(".vehicle-card");

  vehicleCards.forEach((card) => {
    if (!(card instanceof HTMLElement)) {
      return;
    }

    setVehicleCardExpanded(card, false);
  });

  if (!isExpanded) {
    setVehicleCardExpanded(vehicleCard, true);
  }
}

function normalizeVehicle(vehicle) {
  const safeVehicle = vehicle && typeof vehicle === "object" ? vehicle : {};
  const vehicleType = normalizeVehicleType(safeVehicle.vehicleType);
  const rentalEndDate =
    vehicleType === "rental" ? normalizeRentalEndDate(safeVehicle.rentalEndDate) : "";
  let vehicleStatus = normalizeVehicleStatus(safeVehicle.vehicleStatus);

  if (vehicleType !== "rental" && vehicleStatus === "rental_ended") {
    vehicleStatus = "available";
  }

  const normalizedVehicle = {
    id: safeVehicle.id || "",
    brand:
      typeof safeVehicle.brand === "string" ? safeVehicle.brand.trim() : "",
    model:
      typeof safeVehicle.model === "string" ? safeVehicle.model.trim() : "",
    color:
      typeof safeVehicle.color === "string" ? safeVehicle.color.trim() : "",
    plate:
      typeof safeVehicle.plate === "string"
        ? formatVehiclePlate(safeVehicle.plate)
        : "",
    vehicleType,
    vehicleStatus,
    rentalEndDate,
    consumption:
      typeof safeVehicle.consumption === "number"
        ? safeVehicle.consumption.toString()
        : typeof safeVehicle.consumption === "string"
          ? safeVehicle.consumption.trim()
          : "",
    consumptionUnit:
      typeof safeVehicle.consumptionUnit === "string" &&
      safeVehicle.consumptionUnit.trim()
        ? safeVehicle.consumptionUnit.trim()
        : "L/100 km",
  };

  if (isRentalEnded(normalizedVehicle)) {
    normalizedVehicle.vehicleStatus = "rental_ended";
  }

  return normalizedVehicle;
}

function getVehicleDisplayName(vehicle) {
  const parts = [vehicle.brand, vehicle.model].filter(Boolean);

  if (parts.length > 0) {
    return parts.join(" ");
  }

  return "Vehicule sans nom";
}

function getVehicleIdentity(vehicle) {
  if (!vehicle || typeof vehicle !== "object") {
    return "";
  }

  if (typeof vehicle.id === "string" && vehicle.id.trim()) {
    return vehicle.id.trim();
  }

  if (typeof vehicle.plate === "string" && vehicle.plate.trim()) {
    return getVehiclePlateKey(vehicle.plate);
  }

  return "";
}

function isSameVehicle(vehicle, vehicleId) {
  if (!vehicleId) {
    return false;
  }

  return getVehicleIdentity(vehicle) === vehicleId;
}

function setVehicleFormMode(vehicle = null) {
  if (
    !vehicleFormKicker ||
    !vehicleFormTitle ||
    !submitVehicleFormButton ||
    !resetVehicleFormButton ||
    !excludeVehicleButton
  ) {
    return;
  }

  if (vehicle) {
    vehicleFormKicker.textContent = "Modifier le vehicule";
    vehicleFormTitle.textContent = `Mettre a jour ${getVehicleDisplayName(vehicle)}`;
    submitVehicleFormButton.textContent = "Enregistrer les modifications";
    resetVehicleFormButton.textContent = "Reinitialiser";
    excludeVehicleButton.hidden = false;
    return;
  }

  vehicleFormKicker.textContent = "Nouveau vehicule";
  vehicleFormTitle.textContent = "Ajouter un vehicule a la liste";
  submitVehicleFormButton.textContent = "Enregistrer le vehicule";
  resetVehicleFormButton.textContent = "Effacer";
  excludeVehicleButton.hidden = true;
}

function syncRentalEndFieldVisibility(options = {}) {
  if (!vehicleTypeInput || !vehicleRentalEndField || !vehicleRentalEndInput || !vehicleStatusInput) {
    return;
  }

  const { clearWhenHidden = true } = options;
  const isRental = normalizeVehicleType(vehicleTypeInput.value) === "rental";

  vehicleRentalEndField.hidden = !isRental;
  vehicleRentalEndInput.required = isRental;

  if (!isRental && clearWhenHidden) {
    vehicleRentalEndInput.value = "";
  }

  if (!isRental && normalizeVehicleStatus(vehicleStatusInput.value) === "rental_ended") {
    vehicleStatusInput.value = "available";
  }
}

function syncVehicleStatusWithRentalEndDate() {
  if (!vehicleTypeInput || !vehicleStatusInput || !vehicleRentalEndInput) {
    return;
  }

  if (normalizeVehicleType(vehicleTypeInput.value) !== "rental") {
    if (normalizeVehicleStatus(vehicleStatusInput.value) === "rental_ended") {
      vehicleStatusInput.value = "available";
    }
    return;
  }

  const rentalEndDate = normalizeRentalEndDate(vehicleRentalEndInput.value);
  if (rentalEndDate && getCurrentDateKey() > rentalEndDate) {
    vehicleStatusInput.value = "rental_ended";
    return;
  }

  if (normalizeVehicleStatus(vehicleStatusInput.value) === "rental_ended") {
    vehicleStatusInput.value = "available";
  }
}

function fillVehicleForm(vehicle) {
  if (
    !vehicleBrandInput ||
    !vehicleModelInput ||
    !vehicleColorInput ||
    !vehiclePlateInput ||
    !vehicleTypeInput ||
    !vehicleStatusInput ||
    !vehicleRentalEndInput ||
    !vehicleConsumptionInput ||
    !vehicleConsumptionUnitInput
  ) {
    return;
  }

  vehicleBrandInput.value = vehicle.brand;
  vehicleModelInput.value = vehicle.model;
  vehicleColorInput.value = vehicle.color;
  vehiclePlateInput.value = vehicle.plate;
  vehicleTypeInput.value = vehicle.vehicleType;
  vehicleStatusInput.value = vehicle.vehicleStatus;
  vehicleRentalEndInput.value = vehicle.rentalEndDate;
  vehicleConsumptionInput.value = vehicle.consumption;
  vehicleConsumptionUnitInput.value = vehicle.consumptionUnit;
  syncRentalEndFieldVisibility({ clearWhenHidden: false });
  syncVehicleStatusWithRentalEndDate();
}

function getStoredVehicleByIndex(vehicleIndex) {
  const vehicles = getStoredVehicles();
  const storedVehicle = vehicles[vehicleIndex];

  return storedVehicle ? normalizeVehicle(storedVehicle) : null;
}

function startVehicleEdit(vehicleIndex) {
  const vehicle = getStoredVehicleByIndex(vehicleIndex);
  if (!vehicle) {
    return;
  }

  editingVehicleIndex = vehicleIndex;
  setVehicleFormMode(vehicle);
  fillVehicleForm(vehicle);
  clearVehicleFormMessage();
  setVehicleFormOpen(true);
}

function excludeVehicle() {
  if (editingVehicleIndex < 0) {
    return;
  }

  const vehicle = getStoredVehicleByIndex(editingVehicleIndex);
  if (!vehicle) {
    return;
  }

  const shouldExclude = window.confirm(
    `Voulez-vous exclure ${getVehicleDisplayName(vehicle)} de la liste des vehicules ?`
  );

  if (!shouldExclude) {
    return;
  }

  const vehicles = getStoredVehicles().filter(
    (_storedVehicle, vehicleIndex) => vehicleIndex !== editingVehicleIndex
  );

  saveStoredVehicles(vehicles);
  renderVehicles();
  resetVehicleForm();
  setVehicleFormOpen(false);
}

function clearVehicleFormMessage() {
  if (!vehicleFormMessage) {
    return;
  }

  vehicleFormMessage.hidden = true;
  vehicleFormMessage.textContent = "";
  vehicleFormMessage.classList.remove("error", "success");
}

function showVehicleFormMessage(message, type) {
  if (!vehicleFormMessage) {
    return;
  }

  vehicleFormMessage.hidden = false;
  vehicleFormMessage.textContent = message;
  vehicleFormMessage.classList.remove("error", "success");

  if (type) {
    vehicleFormMessage.classList.add(type);
  }
}

function setVehicleFormOpen(isOpen) {
  if (!vehicleForm) {
    return;
  }

  vehicleForm.hidden = !isOpen;

  if (isOpen) {
    clearVehicleFormMessage();
    vehicleForm.scrollIntoView({ behavior: "smooth", block: "start" });
    if (vehicleBrandInput) {
      vehicleBrandInput.focus();
    }
  }
}

function resetVehicleForm() {
  if (!vehicleForm) {
    return;
  }

  editingVehicleIndex = -1;
  vehicleForm.reset();
  setVehicleFormMode();
  syncRentalEndFieldVisibility();
  syncVehicleStatusWithRentalEndDate();
  clearVehicleFormMessage();
}

function updateVehicleSummaries(vehicles) {
  if (vehicleCountSummary) {
    vehicleCountSummary.textContent = String(vehicles.length);
  }

  if (vehiclePlateSummary) {
    vehiclePlateSummary.textContent = String(vehicles.length);
  }
}

function renderVehicles() {
  if (!vehicleList) {
    return;
  }

  const vehicles = getStoredVehicles().map((storedVehicle, storedIndex) => ({
    storedVehicle,
    storedIndex,
    vehicle: normalizeVehicle(storedVehicle),
  }));
  updateVehicleSummaries(vehicles);
  const filteredVehicles = vehicles.filter(({ vehicle }) => matchesVehicleFilters(vehicle)).reverse();
  updateVehicleFilterSummary(filteredVehicles.length, vehicles.length);

  if (vehicles.length === 0) {
    vehicleList.innerHTML = `
      <article class="vehicle-empty">
        <div>
          <strong>Aucun v&eacute;hicule ajout&eacute; pour le moment.</strong>
          <p>
            Utilisez le bouton <strong>Ajouter un v&eacute;hicule</strong> pour enregistrer
            votre premi&egrave;re marque, son mod&egrave;le, son type, son &eacute;tat, sa date
            de location si besoin, sa plaque et sa consommation.
          </p>
        </div>
      </article>
    `;
    return;
  }

  if (filteredVehicles.length === 0) {
    vehicleList.innerHTML = `
      <article class="vehicle-empty">
        <div>
          <strong>Aucun v&eacute;hicule ne correspond aux filtres actuels.</strong>
          <p>
            Changez le type ou l'&eacute;tat, ou utilisez le bouton
            <strong>R&eacute;initialiser</strong> pour revoir toute la liste.
          </p>
        </div>
      </article>
    `;
    return;
  }

  vehicleList.innerHTML = filteredVehicles
    .map(({ storedIndex, vehicle }) => {
      const vehicleIndex = String(storedIndex);
      const vehicleTypeClass = getVehicleTypeClass(vehicle.vehicleType);
      const vehicleStatusClass = getVehicleStatusClass(vehicle.vehicleStatus);

      return `
        <article
          class="vehicle-card ${vehicleTypeClass}"
          data-vehicle-index="${vehicleIndex}"
          tabindex="0"
          aria-expanded="false"
        >
          <div class="vehicle-card-summary">
            <div class="vehicle-card-summary-copy">
              <div class="vehicle-kicker-wrap">
                <span class="vehicle-status-bar ${vehicleStatusClass}" aria-hidden="true"></span>
                <p class="detail-kicker">V&eacute;hicule</p>
              </div>
              <h4>${getVehicleDisplayName(vehicle)}</h4>
            </div>
            <span class="vehicle-card-toggle" aria-hidden="true">+</span>
          </div>

          <div class="vehicle-summary-meta">
            <span class="vehicle-plate">${vehicle.plate}</span>
            <span class="vehicle-color-chip vehicle-summary-chip">
              ${vehicle.color || "Couleur inconnue"}
            </span>
          </div>

          ${
            isRentalVehicle(vehicle)
              ? `
          <div class="vehicle-rental-summary">
            <span class="vehicle-meta-label">Location jusqu'au</span>
            <strong class="vehicle-rental-date">${formatVehicleRentalEndDate(vehicle.rentalEndDate)}</strong>
          </div>
          `
              : ""
          }

          <div class="vehicle-card-details" hidden>
            <div class="vehicle-meta">
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Marque</span>
                <span class="vehicle-meta-value">${vehicle.brand || "Non renseign&eacute;e"}</span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Couleur</span>
                <span class="vehicle-meta-value">${vehicle.color || "Non renseign&eacute;e"}</span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Type</span>
                <span class="vehicle-meta-value">${getVehicleTypeLabel(vehicle.vehicleType)}</span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">&Eacute;tat</span>
                <span class="vehicle-meta-value">${getVehicleStatusLabel(vehicle.vehicleStatus)}</span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Consommation</span>
                <span class="vehicle-meta-value">${vehicle.consumption} ${vehicle.consumptionUnit}</span>
              </div>
            </div>

            <div class="vehicle-card-tools">
              <button
                class="vehicle-edit-button"
                type="button"
                data-vehicle-index="${vehicleIndex}"
                aria-label="Modifier ${getVehicleDisplayName(vehicle)}"
                title="Modifier ce v&eacute;hicule"
              >
                &#9881;
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function handleVehicleSubmit(event) {
  event.preventDefault();

  if (
    !vehicleBrandInput ||
    !vehicleModelInput ||
    !vehicleColorInput ||
    !vehiclePlateInput ||
    !vehicleTypeInput ||
    !vehicleStatusInput ||
    !vehicleRentalEndInput ||
    !vehicleConsumptionInput ||
    !vehicleConsumptionUnitInput
  ) {
    return;
  }

  const brand = vehicleBrandInput.value.trim();
  const model = vehicleModelInput.value.trim();
  const color = vehicleColorInput.value.trim();
  const plate = formatVehiclePlate(vehiclePlateInput.value);
  const vehicleType = normalizeVehicleType(vehicleTypeInput.value);
  let vehicleStatus = normalizeVehicleStatus(vehicleStatusInput.value);
  const rentalEndDate =
    vehicleType === "rental" ? normalizeRentalEndDate(vehicleRentalEndInput.value) : "";
  const consumption = vehicleConsumptionInput.value.trim();
  const consumptionUnit = vehicleConsumptionUnitInput.value;

  if (!brand || !model || !color || !plate || !vehicleType || !vehicleStatus || !consumption) {
    showVehicleFormMessage("Merci de remplir tous les champs du v&eacute;hicule.", "error");
    return;
  }

  if (vehicleType === "rental" && !rentalEndDate) {
    showVehicleFormMessage(
      "Merci d'indiquer jusqu'&agrave; quand le v&eacute;hicule est lou&eacute;.",
      "error"
    );
    return;
  }

  const consumptionValue = Number(consumption);
  if (Number.isNaN(consumptionValue) || consumptionValue <= 0) {
    showVehicleFormMessage("La consommation doit &ecirc;tre un nombre sup&eacute;rieur &agrave; 0.", "error");
    return;
  }

  if (vehicleType === "rental" && rentalEndDate && getCurrentDateKey() > rentalEndDate) {
    vehicleStatus = "rental_ended";
  }

  if (vehicleType !== "rental" && vehicleStatus === "rental_ended") {
    vehicleStatus = "available";
  }

  const vehicles = getStoredVehicles();
  const plateKey = getVehiclePlateKey(plate);
  const alreadyExists = vehicles.some((vehicle, vehicleIndex) => {
    if (vehicleIndex === editingVehicleIndex) {
      return false;
    }

    return getVehiclePlateKey(vehicle.plate) === plateKey;
  });

  if (alreadyExists) {
    showVehicleFormMessage("Cette plaque d'immatriculation est d&eacute;j&agrave; enregistr&eacute;e.", "error");
    return;
  }

  const currentStoredVehicle =
    editingVehicleIndex >= 0 ? vehicles[editingVehicleIndex] : null;
  const nextVehicle = {
    id:
      currentStoredVehicle &&
      typeof currentStoredVehicle.id === "string" &&
      currentStoredVehicle.id.trim()
        ? currentStoredVehicle.id.trim()
        : `${Date.now()}-${plateKey}`,
    brand,
    model,
    color,
    plate,
    vehicleType,
    vehicleStatus,
    rentalEndDate,
    consumption: consumptionValue.toFixed(1).replace(".0", ""),
    consumptionUnit,
  };

  if (editingVehicleIndex >= 0) {
    const updatedVehicles = vehicles.map((vehicle, vehicleIndex) =>
      vehicleIndex === editingVehicleIndex ? nextVehicle : vehicle
    );
    saveStoredVehicles(updatedVehicles);
  } else {
    vehicles.push(nextVehicle);
    saveStoredVehicles(vehicles);
  }

  renderVehicles();
  resetVehicleForm();
  setVehicleFormOpen(false);
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
  resetVehicleForm();
  setVehicleFormOpen(false);

  if (navTrigger) {
    navTrigger.focus();
  }
});

if (vehicleForm) {
  vehicleForm.addEventListener("submit", handleVehicleSubmit);
}

if (vehicleTypeInput) {
  vehicleTypeInput.addEventListener("change", () => {
    syncRentalEndFieldVisibility();
    syncVehicleStatusWithRentalEndDate();
  });
}

if (vehicleTypeFilterInput) {
  vehicleTypeFilterInput.addEventListener("change", () => {
    renderVehicles();
  });
}

if (vehicleStatusFilterInput) {
  vehicleStatusFilterInput.addEventListener("change", () => {
    renderVehicles();
  });
}

if (resetVehicleFiltersButton) {
  resetVehicleFiltersButton.addEventListener("click", () => {
    if (vehicleTypeFilterInput) {
      vehicleTypeFilterInput.value = "all";
    }

    if (vehicleStatusFilterInput) {
      vehicleStatusFilterInput.value = "all";
    }

    renderVehicles();
  });
}

if (vehicleRentalEndInput) {
  vehicleRentalEndInput.addEventListener("change", () => {
    syncVehicleStatusWithRentalEndDate();
  });
}

if (addVehicleButton) {
  addVehicleButton.addEventListener("click", () => {
    resetVehicleForm();
    setVehicleFormOpen(true);
  });
}

if (openVehicleFormButton) {
  openVehicleFormButton.addEventListener("click", () => {
    resetVehicleForm();
    setVehicleFormOpen(true);
  });
}

if (cancelVehicleFormButton) {
  cancelVehicleFormButton.addEventListener("click", () => {
    resetVehicleForm();
    setVehicleFormOpen(false);
  });
}

if (resetVehicleFormButton) {
  resetVehicleFormButton.addEventListener("click", () => {
    if (editingVehicleIndex >= 0) {
      const vehicle = getStoredVehicleByIndex(editingVehicleIndex);
      if (vehicle) {
        setVehicleFormMode(vehicle);
        fillVehicleForm(vehicle);
        clearVehicleFormMessage();
        return;
      }
    }

    resetVehicleForm();
  });
}

if (excludeVehicleButton) {
  excludeVehicleButton.addEventListener("click", () => {
    excludeVehicle();
  });
}

if (vehicleList) {
  vehicleList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const editButton = event.target.closest(".vehicle-edit-button");
    if (!editButton) {
      return;
    }

    const { vehicleIndex } = editButton.dataset;
    if (!vehicleIndex) {
      return;
    }

    startVehicleEdit(Number(vehicleIndex));
  });

  vehicleList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest(".vehicle-edit-button")) {
      return;
    }

    const vehicleCard = event.target.closest(".vehicle-card");
    if (!vehicleCard || !vehicleList.contains(vehicleCard)) {
      return;
    }

    toggleVehicleCard(vehicleCard);
  });

  vehicleList.addEventListener("keydown", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest(".vehicle-edit-button")) {
      return;
    }

    const vehicleCard = event.target.closest(".vehicle-card");
    if (!vehicleCard || !vehicleList.contains(vehicleCard)) {
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();

    toggleVehicleCard(vehicleCard);
  });
}

syncCurrentLabel();
buildCurrentWeekCalendar();
setVehicleFormMode();
syncRentalEndFieldVisibility();
syncVehicleStatusWithRentalEndDate();
renderVehicles();

