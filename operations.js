const planningBoard = document.querySelector("#planning-board");
const planningAlerts = document.querySelector("#planning-alerts");
const collaboratorPool = document.querySelector("#collaborator-pool");
const vehiclePool = document.querySelector("#vehicle-pool");
const planningWeekLabel = document.querySelector("#planning-week-label");
const planningTotalMissionsNode = document.querySelector("#planning-total-missions");
const planningCoveredMissionsNode = document.querySelector("#planning-covered-missions");
const planningTotalPassengersNode = document.querySelector("#planning-total-passengers");
const planningTotalRevenueNode = document.querySelector("#planning-total-revenue");
const planningOpenAlertsNode = document.querySelector("#planning-open-alerts");
const planningReadyVehiclesNode = document.querySelector("#planning-ready-vehicles");
const planningAvailableCollaboratorsNode = document.querySelector(
  "#planning-available-collaborators"
);
const planningDetail = document.querySelector("#planning-detail");
const openGlobalCalendarButton = document.querySelector("#open-global-calendar");
const planningGlobalCalendar = document.querySelector("#planning-global-calendar");
const closeGlobalCalendarButton = document.querySelector("#close-global-calendar");
const planningGlobalMonthLabel = document.querySelector("#planning-global-month-label");
const planningGlobalCalendarGrid = document.querySelector("#planning-global-calendar-grid");
const planningGlobalPrevMonthButton = document.querySelector("#planning-global-prev-month");
const planningGlobalNextMonthButton = document.querySelector("#planning-global-next-month");
const planningResetWeekButton = document.querySelector("#planning-reset-week");
const tripList = document.querySelector("#trip-list");
const tripDetail = document.querySelector("#trip-detail");
const tripTotalDistanceNode = document.querySelector("#trip-total-distance");
const tripTotalRevenueNode = document.querySelector("#trip-total-revenue");
const tripTotalCostNode = document.querySelector("#trip-total-cost");
const tripAverageMarginNode = document.querySelector("#trip-average-margin");
const missionForm = document.querySelector("#mission-form-card");
const openMissionFormButton = document.querySelector("#open-mission-form");
const cancelMissionFormButton = document.querySelector("#cancel-mission-form");
const resetMissionFormButton = document.querySelector("#reset-mission-form");
const missionFormMessage = document.querySelector("#mission-form-message");
const missionCodeInput = document.querySelector("#mission-code");
const missionServiceTypeInput = document.querySelector("#mission-service-type");
const missionClientNameInput = document.querySelector("#mission-client-name");
const missionServiceDateInput = document.querySelector("#mission-service-date");
const missionDepartureTimeInput = document.querySelector("#mission-departure-time");
const missionArrivalTimeInput = document.querySelector("#mission-arrival-time");
const missionPickupAddressInput = document.querySelector("#mission-pickup-address");
const missionMeetingPointInput = document.querySelector("#mission-meeting-point");
const missionDestinationAddressInput = document.querySelector("#mission-destination-address");
const missionPassengersInput = document.querySelector("#mission-passengers");
const missionLuggageInput = document.querySelector("#mission-luggage");
const missionQuotedPriceInput = document.querySelector("#mission-quoted-price");
const missionTargetMarginInput = document.querySelector("#mission-target-margin");
const missionTollsInput = document.querySelector("#mission-tolls");
const missionParkingInput = document.querySelector("#mission-parking");
const missionPriorityInput = document.querySelector("#mission-priority");
const missionBillingStatusInput = document.querySelector("#mission-billing-status");
const missionNotesInput = document.querySelector("#mission-notes");
const missionStopsList = document.querySelector("#mission-stops-list");
const addMissionStopButton = document.querySelector("#add-mission-stop");
const missionPreviewStopsNode = document.querySelector("#mission-preview-stops");
const missionPreviewActivitiesNode = document.querySelector("#mission-preview-activities");
const missionPreviewPriceNode = document.querySelector("#mission-preview-price");
const missionFormKicker = document.querySelector("#mission-form-kicker");
const missionFormTitle = document.querySelector("#mission-form-title");
const missionFormSubmitButton = document.querySelector("#submit-mission-form");

if (planningBoard || tripList || tripDetail) {
  const collaboratorsStorageKey = "route-pilote-collaborators";
  const vehiclesStorageKey = "route-pilote-vehicles";
  const invoicesStorageKey = "route-pilote-invoices";
  const missionAssignmentsStorageKey = "route-pilote-mission-assignments-v2";
  const selectedTripStorageKey = "route-pilote-selected-trip-v1";
  const customMissionsStorageKey = "route-pilote-custom-missions-v1";
  const missionOverridesStorageKey = "route-pilote-mission-overrides-v1";
  const defaultMissionInvoiceTemplate = {
    seller: {
      name: "Activite VTC Exemple",
      address: "12, avenue du Centre",
      location: "75000 Paris",
      phone: "0612345678",
      evtc: "EVTC000000000",
      siret: "12345678900010",
    },
    taxNote: "TVA non applicable conformement a l'article 293 B du CGI.",
    insurance: "Assurance VTC exemple",
  };

  const collaboratorLabels = {
    available: "Disponible",
    limited: "Disponibilite limitee",
    off: "Indisponible",
  };
  const vehicleStatusLabels = {
    available: "Disponible",
    in_use: "En utilisation",
    repair: "Reparation",
    rental_ended: "Location terminee",
  };
  const ownershipLabels = {
    company: "Flotte societe",
    collaborator: "Vehicule collaborateur",
    rental: "Location",
  };
  const billingLabels = {
    quote_signed: "Devis valide",
    to_invoice: "A facturer",
    invoice_sent: "Facture envoyee",
    paid: "Reglee",
  };
  const priorityLabels = {
    standard: "Standard",
    high: "Prioritaire",
    vip: "VIP",
  };
  const energyPrices = { diesel: 1.86, hybrid: 1.91, electric: 0.24 };

  const collaborators = [
    ["collab-jade", "Jade Bouvier", "Chauffeur premium", ["FR", "EN"], "available", 34, true, "veh-peugeot-508"],
    ["collab-noa", "Noa Marchand", "Chauffeur aeroport", ["FR", "EN", "IT"], "available", 31, true, ""],
    ["collab-lucas", "Lucas Perrin", "Chauffeur renfort", ["FR", "EN"], "limited", 29, true, "veh-tesla-y"],
    ["collab-salma", "Salma Riviere", "Accompagnatrice VIP", ["FR", "EN", "AR"], "available", 26, false, ""],
    ["collab-ines", "Ines Carrel", "Coordinatrice terrain", ["FR", "EN", "ES"], "available", 24, false, ""],
    ["collab-hugo", "Hugo Bernard", "Chauffeur back-up", ["FR", "EN"], "off", 28, true, ""],
  ].map(([id, name, role, languages, availability, hourlyRate, canDrive, personalVehicleId]) => ({
    id,
    name,
    role,
    languages,
    availability,
    hourlyRate,
    canDrive,
    personalVehicleId,
  }));

  const baseVehicles = [
    ["veh-mercedes-v", "Mercedes Classe V", "GA-402-LT", "company", "", 7, 6, 8.6, "L/100 km", "diesel", "available", "Noir obsidienne"],
    ["veh-vito-tourer", "Mercedes Vito Tourer", "FT-118-MR", "company", "", 8, 8, 8.9, "L/100 km", "diesel", "available", "Gris graphite"],
    ["veh-peugeot-508", "Peugeot 508 SW", "CG-771-NE", "collaborator", "collab-jade", 4, 4, 6.1, "L/100 km", "diesel", "available", "Bleu nuit"],
    ["veh-tesla-y", "Tesla Model Y", "ET-604-HL", "collaborator", "collab-lucas", 4, 4, 18.4, "kWh/100 km", "electric", "available", "Blanc nacre"],
    ["veh-kodiaq", "Skoda Kodiaq", "GM-235-AV", "rental", "", 6, 5, 7.4, "L/100 km", "hybrid", "in_use", "Argent"],
  ].map(([id, label, plate, ownershipType, ownerCollaboratorId, seats, luggageCapacity, consumption, consumptionUnit, energyKind, status, color]) => ({
    id,
    label,
    plate,
    ownershipType,
    ownerCollaboratorId,
    seats,
    luggageCapacity,
    consumption,
    consumptionUnit,
    energyKind,
    status,
    color,
  }));

  const missionSeeds = [
    ["mission-cdg-paris", "RP-301", 0, "Transfert aeroport", "CDG Terminal 2 -> Hotels rive droite", "08:10", "09:05", 32, 55, 4, 6, 210, 6, 14, "Maison Azur Travel", "Aeroport Charles-de-Gaulle, Terminal 2E, Roissy", "Hotels rive droite, Paris 1er et 8e", "Sortie porte 16 avec panneau nominatif", "Couple americain et deux enfants, siege rehausseur a prevoir.", "to_invoice", "high"],
    ["mission-giverny", "RP-302", 0, "Circuit demi-journee", "Paris centre -> Giverny", "14:20", "15:55", 82, 95, 6, 4, 420, 16, 18, "Ateliers Seine Voyages", "Hotel Regina Louvre, Paris", "Fondation Claude Monet, Giverny", "Lobby principal, cote concierge", "Groupe japonais, accueil bilingue recommande.", "quote_signed", "standard"],
    ["mission-reims", "RP-303", 1, "Transfert vignoble", "Paris -> Reims", "07:45", "09:35", 147, 110, 3, 3, 390, 28, 22, "Signature Cellars", "Gare de l'Est, Paris", "Domaine partner, Reims", "Sortie voie 17, parvis central", "Transport degustation premium, bouteilles a charger au retour.", "invoice_sent", "vip"],
    ["mission-monaco", "RP-304", 2, "Transfert evenement", "Nice -> Monaco", "09:45", "10:25", 25, 40, 4, 2, 310, 9, 22, "Riviera Event Desk", "Promenade des Anglais, Nice", "Hotel de Paris, Monaco", "Devant l'entree principale, voie bus", "Timing serre avant conference, chauffeur en tenue sombre.", "quote_signed", "high"],
    ["mission-annecy", "RP-305", 3, "Seminaire entreprise", "Lyon -> Annecy", "08:30", "10:35", 144, 125, 7, 7, 540, 24, 16, "Nova Executive Mobility", "Part-Dieu, Lyon", "Imperial Palace, Annecy", "Hall affaires, sortie Villette", "Groupe corporate avec bagages cabine, besoin d'un vehicule 7+ places.", "to_invoice", "high"],
    ["mission-cassis", "RP-306", 4, "Circuit mer", "Marseille -> Cassis", "11:00", "11:48", 30, 48, 6, 5, 460, 10, 18, "Calanques Leisure", "Vieux-Port, Marseille", "Port de Cassis", "Face au ponton tourisme", "Famille nombreuse, poussette pliable et glaciere souple.", "paid", "standard"],
    ["mission-saint-emilion", "RP-307", 5, "Circuit journee", "Bordeaux -> Saint-Emilion", "06:50", "07:48", 46, 58, 8, 8, 490, 8, 12, "Bordeaux Heritage Tours", "Hotel Intercontinental, Bordeaux", "Chateau partenaire, Saint-Emilion", "Porte cocheres, allee laterale", "Circuit vignobles, renfort utile pour la logistique bagages.", "quote_signed", "vip"],
  ];

  const defaultAssignments = {
    "mission-cdg-paris": { leadCollaboratorId: "collab-noa", supportCollaboratorId: "", vehicleId: "veh-mercedes-v" },
    "mission-giverny": { leadCollaboratorId: "collab-jade", supportCollaboratorId: "collab-salma", vehicleId: "veh-vito-tourer" },
    "mission-reims": { leadCollaboratorId: "collab-jade", supportCollaboratorId: "", vehicleId: "veh-peugeot-508" },
    "mission-monaco": { leadCollaboratorId: "collab-lucas", supportCollaboratorId: "", vehicleId: "veh-tesla-y" },
    "mission-annecy": { leadCollaboratorId: "collab-noa", supportCollaboratorId: "", vehicleId: "" },
    "mission-cassis": { leadCollaboratorId: "", supportCollaboratorId: "collab-salma", vehicleId: "veh-mercedes-v" },
    "mission-saint-emilion": { leadCollaboratorId: "collab-noa", supportCollaboratorId: "collab-ines", vehicleId: "veh-vito-tourer" },
  };

  const missionGeo = {
    "mission-cdg-paris": {
      pickup: [49.0044, 2.5715],
      destination: [48.8706, 2.3318],
      line: [
        [49.0044, 2.5715],
        [48.982, 2.445],
        [48.923, 2.357],
        [48.8706, 2.3318],
      ],
    },
    "mission-giverny": {
      pickup: [48.8638, 2.3363],
      destination: [49.0761, 1.5333],
      line: [
        [48.8638, 2.3363],
        [48.944, 2.048],
        [49.021, 1.733],
        [49.0761, 1.5333],
      ],
    },
    "mission-reims": {
      pickup: [48.8764, 2.3592],
      destination: [49.2529, 4.0317],
      line: [
        [48.8764, 2.3592],
        [48.94, 2.61],
        [49.09, 3.32],
        [49.2529, 4.0317],
      ],
    },
    "mission-monaco": {
      pickup: [43.6959, 7.2653],
      destination: [43.7384, 7.4276],
      line: [
        [43.6959, 7.2653],
        [43.707, 7.314],
        [43.724, 7.377],
        [43.7384, 7.4276],
      ],
    },
    "mission-annecy": {
      pickup: [45.7609, 4.8599],
      destination: [45.8992, 6.1294],
      line: [
        [45.7609, 4.8599],
        [45.827, 5.305],
        [45.874, 5.793],
        [45.8992, 6.1294],
      ],
    },
    "mission-cassis": {
      pickup: [43.2951, 5.3743],
      destination: [43.214, 5.5396],
      line: [
        [43.2951, 5.3743],
        [43.268, 5.431],
        [43.236, 5.489],
        [43.214, 5.5396],
      ],
    },
    "mission-saint-emilion": {
      pickup: [44.8422, -0.5734],
      destination: [44.8936, -0.1564],
      line: [
        [44.8422, -0.5734],
        [44.856, -0.441],
        [44.874, -0.291],
        [44.8936, -0.1564],
      ],
    },
  };

  let tripRouteMap = null;
  let tripRouteMarkers = [];
  let tripRoutePolylines = [];
  let activeRouteRequestId = 0;
  const routeGeometryCache = new Map();
  const addressAutocompleteRegistry = new WeakMap();
  let missionStopDrafts = [];
  let editingMissionId = null;
  let placesLibraryPromise = null;
  let geocodingLibraryPromise = null;
  let activePlanningDate = new Date();
  let planningCalendarMonthCursor = new Date();

  function getStartOfWeek(date = new Date()) {
    const value = new Date(date);
    value.setHours(0, 0, 0, 0);
    const day = value.getDay();
    value.setDate(value.getDate() + (day === 0 ? -6 : 1 - day));
    return value;
  }

  function normalizeCalendarDate(value = new Date()) {
    const normalizedValue = value instanceof Date ? new Date(value) : new Date(value);
    if (Number.isNaN(normalizedValue.getTime())) {
      const fallbackValue = new Date();
      fallbackValue.setHours(0, 0, 0, 0);
      return fallbackValue;
    }

    normalizedValue.setHours(0, 0, 0, 0);
    return normalizedValue;
  }

  function setActivePlanningDate(value) {
    activePlanningDate = normalizeCalendarDate(value);
  }

  function setPlanningCalendarMonthCursor(value) {
    planningCalendarMonthCursor = normalizeCalendarDate(value);
    planningCalendarMonthCursor.setDate(1);
  }

  function toISODate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function formatCurrency(value, decimals = 0) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  function formatDistance(value) {
    return `${new Intl.NumberFormat("fr-FR").format(value)} km`;
  }

  function formatDuration(value) {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return !hours ? `${minutes} min` : minutes ? `${hours} h ${String(minutes).padStart(2, "0")}` : `${hours} h`;
  }

  function formatPercent(value) {
    return `${Math.round(value * 100)}%`;
  }

  function formatDay(dateKey, short = false) {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: short ? "short" : "long",
      day: "numeric",
      month: short ? "short" : "long",
    }).format(new Date(`${dateKey}T00:00:00`));
  }

  function weekLabel(date = activePlanningDate) {
    const start = getStartOfWeek(date);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const formatter = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" });
    return `Semaine du ${formatter.format(start)} au ${formatter.format(end)}`;
  }

  function monthLabel(date = planningCalendarMonthCursor) {
    return new Intl.DateTimeFormat("fr-FR", {
      month: "long",
      year: "numeric",
    }).format(normalizeCalendarDate(date));
  }

  function sameMonth(dateA, dateB) {
    return (
      dateA.getFullYear() === dateB.getFullYear() &&
      dateA.getMonth() === dateB.getMonth()
    );
  }

  function isDateWithinVisibleWeek(dateKey, anchor = activePlanningDate) {
    if (!dateKey) {
      return false;
    }

    const start = getStartOfWeek(anchor);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    const target = new Date(`${dateKey}T00:00:00`);
    target.setHours(0, 0, 0, 0);
    return target >= start && target <= end;
  }

  function openPlanningGlobalCalendar() {
    if (!planningGlobalCalendar) {
      return;
    }

    setPlanningCalendarMonthCursor(activePlanningDate);
    planningGlobalCalendar.hidden = false;
    document.body.classList.add("planning-global-calendar-open");
  }

  function closePlanningGlobalCalendar() {
    if (!planningGlobalCalendar) {
      return;
    }

    planningGlobalCalendar.hidden = true;
    document.body.classList.remove("planning-global-calendar-open");
  }

  function mountPlanningGlobalCalendarToBody() {
    if (!planningGlobalCalendar || planningGlobalCalendar.parentElement === document.body) {
      return;
    }

    document.body.appendChild(planningGlobalCalendar);
  }

  async function ensureGoogleMapsLibraries() {
    if (!window.routePiloteGoogleMapsLoader) {
      throw new Error("google-maps-loader-missing");
    }

    await window.routePiloteGoogleMapsLoader.load();

    const [mapsLibrary, routesLibrary] = await Promise.all([
      window.google.maps.importLibrary("maps"),
      window.google.maps.importLibrary("routes"),
    ]);

    return {
      ...mapsLibrary,
      ...routesLibrary,
      googleMaps: window.google.maps,
    };
  }

  async function ensureGooglePlacesLibrary() {
    if (placesLibraryPromise) {
      return placesLibraryPromise;
    }

    placesLibraryPromise = (async () => {
      await window.routePiloteGoogleMapsLoader.load();
      return window.google.maps.importLibrary("places");
    })().catch((error) => {
      placesLibraryPromise = null;
      throw error;
    });

    return placesLibraryPromise;
  }

  async function ensureGoogleGeocodingLibrary() {
    if (geocodingLibraryPromise) {
      return geocodingLibraryPromise;
    }

    geocodingLibraryPromise = (async () => {
      await window.routePiloteGoogleMapsLoader.load();
      return window.google.maps.importLibrary("geocoding");
    })().catch((error) => {
      geocodingLibraryPromise = null;
      throw error;
    });

    return geocodingLibraryPromise;
  }

  function toCoordArray(location) {
    if (!location || typeof location.lat !== "number" || typeof location.lng !== "number") {
      return null;
    }

    return [Number(location.lat), Number(location.lng)];
  }

  function toLatLngLiteral(coords) {
    if (!Array.isArray(coords) || coords.length !== 2) {
      return null;
    }

    const [lat, lng] = coords.map(Number);
    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      return null;
    }

    return { lat, lng };
  }

  function clearAddressInputMetadata(input) {
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    delete input.dataset.placeId;
    delete input.dataset.lat;
    delete input.dataset.lng;
  }

  function setAddressInputMetadata(input, location = {}) {
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    const coords = Array.isArray(location.coords) ? location.coords : null;
    if (location.placeId) {
      input.dataset.placeId = location.placeId;
    } else {
      delete input.dataset.placeId;
    }

    if (coords) {
      input.dataset.lat = String(coords[0]);
      input.dataset.lng = String(coords[1]);
    } else {
      delete input.dataset.lat;
      delete input.dataset.lng;
    }
  }

  function readAddressInputMetadata(input) {
    if (!(input instanceof HTMLInputElement)) {
      return { placeId: "", coords: null };
    }

    const lat = Number(input.dataset.lat);
    const lng = Number(input.dataset.lng);
    return {
      placeId: input.dataset.placeId || "",
      coords:
        !Number.isNaN(lat) && !Number.isNaN(lng)
          ? [lat, lng]
          : null,
    };
  }

  function routeLocationFromStop(stop) {
    return toLatLngLiteral(stop.coords) || stop.address;
  }

  function directionsLocationFromStop(stop, googleMaps) {
    return toLatLngLiteral(stop.coords) || stop.address;
  }

  function directionsLatLngToCoords(location) {
    if (!location) {
      return null;
    }

    const lat =
      typeof location.lat === "function" ? location.lat() : typeof location.lat === "number" ? location.lat : NaN;
    const lng =
      typeof location.lng === "function" ? location.lng() : typeof location.lng === "number" ? location.lng : NaN;

    return !Number.isNaN(lat) && !Number.isNaN(lng) ? [lat, lng] : null;
  }

  function requestDirections(directionsService, request) {
    return new Promise((resolve, reject) => {
      directionsService.route(request, (result, status) => {
        if (status === "OK" && result) {
          resolve(result);
          return;
        }

        reject(new Error(`directions-${String(status || "failed").toLowerCase()}`));
      });
    });
  }

  function buildDirectionsRequest(mission, googleMaps) {
    const stops = missionStopsForRoute(mission);
    if (stops.length < 2) {
      throw new Error("mission-addresses-incomplete");
    }

    return {
      stops,
      request: {
        origin: directionsLocationFromStop(stops[0], googleMaps),
        destination: directionsLocationFromStop(stops[stops.length - 1], googleMaps),
        waypoints: stops.slice(1, -1).map((stop) => ({
          location: directionsLocationFromStop(stop, googleMaps),
          stopover: true,
        })),
        travelMode: googleMaps.TravelMode.DRIVING,
        drivingOptions: {
          departureTime: buildMissionDepartureDateTime(mission),
          trafficModel: googleMaps.TrafficModel.BEST_GUESS,
        },
        provideRouteAlternatives: false,
        region: "fr",
      },
    };
  }

  function geocodeWithGoogle(geocoder, request) {
    return new Promise((resolve, reject) => {
      geocoder.geocode(request, (results, status) => {
        if (status === "OK" && Array.isArray(results) && results.length > 0) {
          resolve(results[0]);
          return;
        }

        reject(new Error(`geocode-${String(status || "failed").toLowerCase()}`));
      });
    });
  }

  async function enrichStopsWithGeocoding(stops) {
    const geocodingLibrary = await ensureGoogleGeocodingLibrary();
    const Geocoder = geocodingLibrary.Geocoder || window.google.maps.Geocoder;
    if (!Geocoder) {
      throw new Error("google-geocoder-unavailable");
    }

    const geocoder = new Geocoder();

    const resolvedStops = [];
    for (const stop of stops) {
      if (Array.isArray(stop.coords) && stop.coords.length === 2) {
        resolvedStops.push(stop);
        continue;
      }

      const request = stop.placeId
        ? { placeId: stop.placeId }
        : { address: stop.address, region: "fr" };
      const result = await geocodeWithGoogle(geocoder, request);
      const location = result?.geometry?.location;

      if (!location || typeof location.lat !== "function" || typeof location.lng !== "function") {
        throw new Error("geocode-location-missing");
      }

      resolvedStops.push({
        ...stop,
        address: result.formatted_address || stop.address,
        placeId: result.place_id || stop.placeId || "",
        coords: [location.lat(), location.lng()],
      });
    }

    return resolvedStops;
  }

  async function bindAddressAutocomplete(input, onPlaceSelected) {
    if (!(input instanceof HTMLInputElement) || addressAutocompleteRegistry.has(input)) {
      return;
    }

    const placesLibrary = await ensureGooglePlacesLibrary();
    const Autocomplete =
      placesLibrary.Autocomplete || window.google.maps.places?.Autocomplete;
    if (!Autocomplete) {
      throw new Error("google-places-autocomplete-unavailable");
    }

    const autocomplete = new Autocomplete(input, {
      componentRestrictions: { country: ["fr", "mc"] },
      fields: ["formatted_address", "geometry", "name", "place_id"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const geometry = place?.geometry?.location;
      const selection = {
        address: place?.formatted_address || place?.name || input.value.trim(),
        placeId: place?.place_id || "",
        coords:
          geometry && typeof geometry.lat === "function" && typeof geometry.lng === "function"
            ? [geometry.lat(), geometry.lng()]
            : null,
      };

      if (selection.address) {
        input.value = selection.address;
      }

      setAddressInputMetadata(input, selection);
      if (typeof onPlaceSelected === "function") {
        onPlaceSelected(selection);
      }
    });

    addressAutocompleteRegistry.set(input, autocomplete);
  }

  function missionStopsForRoute(mission) {
    const baseStops =
      Array.isArray(mission.stops) && mission.stops.length >= 2
        ? mission.stops
        : buildMissionStops({
            pickupAddress: mission.pickupAddress,
            meetingPoint: mission.meetingPoint || "",
            destinationAddress: mission.destinationAddress,
            activityStops: getMissionActivityStops(mission),
            pickupCoords: mission.pickupCoords || null,
            destinationCoords: mission.destinationCoords || null,
          });

    return baseStops
      .filter((stop) => stop && stop.address)
      .map((stop) => ({
        ...stop,
        activityBudget: Number(stop.activityBudget || 0),
        coords: Array.isArray(stop.coords) ? stop.coords : null,
        placeId: stop.placeId || "",
      }));
  }

  function destroyTripRouteMap() {
    tripRouteMarkers.forEach((marker) => marker.setMap(null));
    tripRoutePolylines.forEach((polyline) => polyline.setMap(null));
    tripRouteMarkers = [];
    tripRoutePolylines = [];
    tripRouteMap = null;
  }

  function buildMissionDepartureDateTime(mission) {
    const now = new Date();
    if (!mission.serviceDate || !mission.departureTime) {
      return new Date(now.getTime() + 5 * 60 * 1000);
    }

    const value = new Date(`${mission.serviceDate}T${mission.departureTime}:00`);
    if (Number.isNaN(value.getTime())) {
      return new Date(now.getTime() + 5 * 60 * 1000);
    }

    return value.getTime() <= now.getTime()
      ? new Date(now.getTime() + 5 * 60 * 1000)
      : value;
  }

  function buildGoogleRouteRequest(mission, routesLibrary) {
    const stops = missionStopsForRoute(mission);
    if (stops.length < 2) {
      throw new Error("mission-addresses-incomplete");
    }

    return {
      stops,
      request: {
        origin: routeLocationFromStop(stops[0]),
        destination: routeLocationFromStop(stops[stops.length - 1]),
        intermediates: stops.slice(1, -1).map((stop) => ({
          location: routeLocationFromStop(stop),
        })),
        travelMode: routesLibrary.TravelMode?.DRIVING || "DRIVING",
        routingPreference:
          routesLibrary.RoutingPreference?.TRAFFIC_AWARE_OPTIMAL ||
          "TRAFFIC_AWARE_OPTIMAL",
        polylineQuality: routesLibrary.PolylineQuality?.HIGH_QUALITY || "HIGH_QUALITY",
        departureTime: buildMissionDepartureDateTime(mission),
        language: "fr",
        fields: ["path", "legs", "distanceMeters", "durationMillis", "viewport"],
      },
    };
  }

  function routeDistanceKm(route) {
    const totalMeters =
      typeof route.distanceMeters === "number"
        ? route.distanceMeters
        : (route.legs || []).reduce((sum, leg) => sum + Number(leg.distanceMeters || 0), 0);

    return Number((totalMeters / 1000).toFixed(1));
  }

  function routeDurationMinutes(route) {
    const totalDurationMillis =
      typeof route.durationMillis === "number"
        ? route.durationMillis
        : (route.legs || []).reduce((sum, leg) => sum + Number(leg.durationMillis || 0), 0);

    return Math.max(1, Math.round(totalDurationMillis / 60000));
  }

  function extractStopCoordsFromRoute(route, stopCount) {
    const legs = Array.isArray(route.legs) ? route.legs : [];
    if (legs.length) {
      return [
        toCoordArray(legs[0].startLocation),
        ...legs.map((leg) => toCoordArray(leg.endLocation)),
      ].slice(0, stopCount);
    }

    const path = Array.isArray(route.path) ? route.path : [];
    if (path.length >= 2) {
      return [
        toCoordArray(path[0]),
        ...Array(Math.max(0, stopCount - 2)).fill(null),
        toCoordArray(path[path.length - 1]),
      ].slice(0, stopCount);
    }

    return [];
  }

  async function computeRoadRoute(mission) {
    const { googleMaps } = await ensureGoogleMapsLibraries();
    let { stops, request } = buildDirectionsRequest(mission, googleMaps);
    const directionsService = new googleMaps.DirectionsService();
    let directionsResult = null;

    try {
      directionsResult = await requestDirections(directionsService, request);
    } catch (error) {
      const geocodedStops = await enrichStopsWithGeocoding(stops);
      stops = geocodedStops;
      request = {
        ...request,
        origin: directionsLocationFromStop(geocodedStops[0], googleMaps),
        destination: directionsLocationFromStop(geocodedStops[geocodedStops.length - 1], googleMaps),
        waypoints: geocodedStops.slice(1, -1).map((stop) => ({
          location: directionsLocationFromStop(stop, googleMaps),
          stopover: true,
        })),
      };
      directionsResult = await requestDirections(directionsService, request);
    }

    const route = directionsResult?.routes?.[0];
    const legs = Array.isArray(route?.legs) ? route.legs : [];
    if (!route || !legs.length) {
      throw new Error("route-empty");
    }

    const stopCoords = [
      directionsLatLngToCoords(legs[0].start_location),
      ...legs.map((leg) => directionsLatLngToCoords(leg.end_location)),
    ].slice(0, stops.length);
    const resolvedStops = stops.map((stop, index) => ({
      ...stop,
      address:
        index === 0
          ? legs[0]?.start_address || stop.address
          : legs[index - 1]?.end_address || stop.address,
      coords: stopCoords[index] || stop.coords || null,
    }));
    const totalDistanceMeters = legs.reduce(
      (sum, leg) => sum + Number(leg.distance?.value || 0),
      0
    );
    const totalDurationSeconds = legs.reduce(
      (sum, leg) => sum + Number(leg.duration_in_traffic?.value || leg.duration?.value || 0),
      0
    );

    return {
      kind: "directions",
      directionsResult,
      route,
      stops: resolvedStops,
      stopCoords,
      path: Array.isArray(route.overview_path)
        ? route.overview_path
            .map((point) => ({
              lat:
                typeof point.lat === "function" ? Number(point.lat()) : Number(point.lat),
              lng:
                typeof point.lng === "function" ? Number(point.lng()) : Number(point.lng),
            }))
            .filter((point) => !Number.isNaN(point.lat) && !Number.isNaN(point.lng))
        : [],
      distanceKm: Number((totalDistanceMeters / 1000).toFixed(1)),
      durationMinutes: Math.max(1, Math.round(totalDurationSeconds / 60)),
    };
  }

  function renderRouteSummaryOnMap(routeSummary, mission, googleMaps) {
    if (!tripRouteMap || !routeSummary) {
      return;
    }

    if (routeSummary.kind === "google" && typeof routeSummary.route?.createPolylines === "function") {
      tripRoutePolylines = routeSummary.route.createPolylines({
        strokeColor: "#1d4e63",
        strokeOpacity: 0.82,
        strokeWeight: 5,
      });
    } else if (Array.isArray(routeSummary.path) && routeSummary.path.length >= 2) {
      tripRoutePolylines = [
        new googleMaps.Polyline({
          path: routeSummary.path,
          strokeColor: "#1d4e63",
          strokeOpacity: 0.82,
          strokeWeight: 5,
        }),
      ];
    }

    tripRoutePolylines.forEach((polyline) => polyline.setMap(tripRouteMap));

    const stops = routeSummary.stops || missionStopsForRoute(mission);
    tripRouteMarkers = stops
      .map((stop, index) => {
        const coords = routeSummary.stopCoords?.[index] || stop.coords;
        const position = toLatLngLiteral(coords);
        if (!position) {
          return null;
        }

        return new googleMaps.Marker({
          map: tripRouteMap,
          position,
          label: String(index + 1),
          title: `${stop.label || `Etape ${index + 1}`} - ${stop.address}`,
        });
      })
      .filter(Boolean);

    if (routeSummary.kind === "google" && routeSummary.route?.viewport) {
      tripRouteMap.fitBounds(routeSummary.route.viewport, 48);
      return;
    }

    const bounds = new googleMaps.LatLngBounds();
    let hasBounds = false;

    (routeSummary.path || []).forEach((point) => {
      if (!point) {
        return;
      }

      bounds.extend(point);
      hasBounds = true;
    });

    tripRouteMarkers.forEach((marker) => {
      bounds.extend(marker.getPosition());
      hasBounds = true;
    });

    if (hasBounds) {
      tripRouteMap.fitBounds(bounds, 48);
    }
  }

  async function renderTripRouteMap(mission) {
    const mapContainer = document.querySelector("#trip-route-map");
    const requestId = ++activeRouteRequestId;

    destroyTripRouteMap();

    if (!mapContainer) {
      return;
    }

    mapContainer.innerHTML = "";

    try {
      const { Map, googleMaps } = await ensureGoogleMapsLibraries();
      if (requestId !== activeRouteRequestId) {
        return;
      }

      tripRouteMap = new Map(mapContainer, {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 7,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: "cooperative",
      });

      let routeSummary = routeGeometryCache.get(mission.id);
      if (!routeSummary) {
        try {
          routeSummary = await computeRoadRoute(mission);
          routeGeometryCache.set(mission.id, routeSummary);
        } catch (error) {
          routeSummary = buildFallbackRouteSummary(mission);
          if (!routeSummary) {
            throw error;
          }
        }
      }

      if (requestId !== activeRouteRequestId || !tripRouteMap) {
        return;
      }

      renderRouteSummaryOnMap(routeSummary, mission, googleMaps);
    } catch (error) {
      mapContainer.innerHTML =
        "<p class=\"map-fallback\">Carte Google Maps indisponible pour le moment.</p>";
    }
  }

  function computeDurationBetweenTimes(startTime, endTime) {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);
    const startTotal = startHours * 60 + startMinutes;
    let endTotal = endHours * 60 + endMinutes;

    if (endTotal < startTotal) {
      endTotal += 24 * 60;
    }

    return endTotal - startTotal;
  }

  function roundPrice(value) {
    return Math.ceil(value / 5) * 5;
  }

  function shortLocationLabel(address) {
    return address.split(",")[0].trim();
  }

  function buildRouteLabelFromStops(stops) {
    const labels = stops.map((stop) => stop.label || shortLocationLabel(stop.address));
    return labels.join(" -> ");
  }

  function buildMissionStops({
    pickupAddress,
    meetingPoint,
    destinationAddress,
    activityStops = [],
    pickupCoords = null,
    destinationCoords = null,
    pickupPlaceId = "",
    destinationPlaceId = "",
  }) {
    const stops = [
      {
        kind: "pickup",
        label: "Recuperation",
        address: pickupAddress,
        meetingPoint,
        activityBudget: 0,
        coords: pickupCoords,
        placeId: pickupPlaceId,
      },
      ...activityStops.map((stop, index) => ({
        kind: "activity",
        label: stop.label || `Etape ${index + 1}`,
        address: stop.address,
        meetingPoint: "",
        activityBudget: Number(stop.activityBudget || 0),
        coords: stop.coords || null,
        placeId: stop.placeId || "",
      })),
      {
        kind: "dropoff",
        label: "Destination",
        address: destinationAddress,
        meetingPoint: "",
        activityBudget: 0,
        coords: destinationCoords,
        placeId: destinationPlaceId,
      },
    ];

    return stops;
  }

  function hydrateMissionRecord(mission) {
    const activityStops = Array.isArray(mission.stops)
      ? mission.stops.filter((stop) => stop.kind === "activity")
      : [];
    const stops =
      Array.isArray(mission.stops) && mission.stops.length >= 2
        ? mission.stops.map((stop) => ({
            ...stop,
            activityBudget: Number(stop.activityBudget || 0),
            coords: Array.isArray(stop.coords) ? stop.coords.map(Number) : null,
          }))
        : buildMissionStops({
            pickupAddress: mission.pickupAddress,
            meetingPoint: mission.meetingPoint || "",
            destinationAddress: mission.destinationAddress,
            activityStops,
            pickupCoords: mission.pickupCoords || null,
            destinationCoords: mission.destinationCoords || null,
          });

    return {
      ...mission,
      distanceKm: Number(mission.distanceKm || 0),
      durationMinutes: Number(mission.durationMinutes || 0),
      driveDurationMinutes: Number(mission.driveDurationMinutes || mission.durationMinutes || 0),
      passengers: Number(mission.passengers || 0),
      luggage: Number(mission.luggage || 0),
      quotedPrice: Number(mission.quotedPrice || 0),
      recommendedPrice: Number(mission.recommendedPrice || mission.quotedPrice || 0),
      tolls: Number(mission.tolls || 0),
      parking: Number(mission.parking || 0),
      targetMarginRate: Number(mission.targetMarginRate || 0.3),
      stops,
      routeLabel: mission.routeLabel || buildRouteLabelFromStops(stops),
    };
  }

  const missions = missionSeeds
    .map((seed) => {
      const [id, code, offset, serviceType, routeLabel, departureTime, arrivalTime, distanceKm, durationMinutes, passengers, luggage, quotedPrice, tolls, parking, clientName, pickupAddress, destinationAddress, meetingPoint, notes, billingStatus, priority] = seed;
      const serviceDate = new Date(getStartOfWeek());
      serviceDate.setDate(serviceDate.getDate() + offset);
      const stops = buildMissionStops({
        pickupAddress,
        meetingPoint,
        destinationAddress,
      });
      return hydrateMissionRecord({
        id,
        code,
        serviceType,
        routeLabel,
        departureTime,
        arrivalTime,
        distanceKm,
        durationMinutes,
        driveDurationMinutes: durationMinutes,
        passengers,
        luggage,
        quotedPrice,
        tolls,
        parking,
        targetMarginRate: 0.3,
        clientName,
        pickupAddress,
        destinationAddress,
        meetingPoint,
        stops,
        notes,
        billingStatus,
        priority,
        serviceDate: toISODate(serviceDate),
      });
    })
    .sort((left, right) =>
      `${left.serviceDate}-${left.departureTime}`.localeCompare(
        `${right.serviceDate}-${right.departureTime}`
      )
    );

  function getMissionOverrides() {
    try {
      const raw = window.localStorage.getItem(missionOverridesStorageKey);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function saveMissionOverrides(overrides) {
    window.localStorage.setItem(missionOverridesStorageKey, JSON.stringify(overrides));
  }

  function getCustomMissions() {
    try {
      const raw = window.localStorage.getItem(customMissionsStorageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.map((mission) => hydrateMissionRecord(mission));
    } catch (error) {
      return [];
    }
  }

  function saveCustomMissions(customMissions) {
    window.localStorage.setItem(customMissionsStorageKey, JSON.stringify(customMissions));
  }

  function cleanStoredText(value) {
    if (typeof value !== "string") {
      return "";
    }

    return value.trim().replace(/\s+/g, " ");
  }

  function normalizeStoredTextValue(value) {
    if (typeof value !== "string") {
      return "";
    }

    return value
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function normalizeStoredInvoiceAmount(value) {
    if (typeof value === "number") {
      return Number.isFinite(value) && value >= 0 ? value : 0;
    }

    if (typeof value !== "string") {
      return 0;
    }

    const normalizedValue = value
      .replace(/\s+/g, "")
      .replace(/\u20AC/g, "")
      .replace(",", ".");
    const parsedValue = Number(normalizedValue);

    return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : 0;
  }

  function readStoredInvoices() {
    try {
      const raw = window.localStorage.getItem(invoicesStorageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveStoredInvoices(invoices) {
    window.localStorage.setItem(invoicesStorageKey, JSON.stringify(invoices));
  }

  function isClientInvoice(invoice) {
    return normalizeStoredTextValue(invoice?.invoiceType) !== "external";
  }

  function getNextMissionInvoiceNumber(invoices = readStoredInvoices()) {
    const maxInvoiceNumber = invoices.reduce((highest, invoice) => {
      const matches = String(invoice?.number || "").match(/\d+/g);
      if (!matches || matches.length === 0) {
        return highest;
      }

      const currentValue = Number(matches[matches.length - 1]);
      return Number.isFinite(currentValue) && currentValue > highest ? currentValue : highest;
    }, 0);

    return String(maxInvoiceNumber + 1).padStart(4, "0");
  }

  function findRecentClientInvoiceSnapshot(clientName, invoices, excludedInvoiceId = "") {
    const normalizedClientName = normalizeStoredTextValue(clientName);
    if (!normalizedClientName) {
      return null;
    }

    return (
      invoices
        .filter(
          (invoice) =>
            cleanStoredText(invoice?.id) !== excludedInvoiceId &&
            isClientInvoice(invoice) &&
            normalizeStoredTextValue(invoice?.client?.name) === normalizedClientName
        )
        .sort((leftInvoice, rightInvoice) =>
          String(rightInvoice?.issuedAt || "").localeCompare(String(leftInvoice?.issuedAt || ""))
        )[0] || null
    );
  }

  function findRecentSellerInvoiceSnapshot(invoices, excludedInvoiceId = "") {
    return (
      invoices
        .filter(
          (invoice) =>
            cleanStoredText(invoice?.id) !== excludedInvoiceId &&
            isClientInvoice(invoice) &&
            cleanStoredText(invoice?.seller?.name)
        )
        .sort((leftInvoice, rightInvoice) =>
          String(rightInvoice?.issuedAt || "").localeCompare(String(leftInvoice?.issuedAt || ""))
        )[0] || null
    );
  }

  function missionActivityStops(mission) {
    return Array.isArray(mission?.stops)
      ? mission.stops.filter((stop) => cleanStoredText(stop?.kind) === "activity")
      : [];
  }

  function buildMissionInvoiceDescription(mission) {
    const serviceDescriptionParts = [
      mission?.serviceType || "Mission chauffeur",
      mission?.code,
      mission?.routeLabel,
    ];
    const activityStops = missionActivityStops(mission);

    if (activityStops.length > 0) {
      serviceDescriptionParts.push(`${activityStops.length} etape(s) activite`);
    }

    return serviceDescriptionParts.filter(Boolean).join(" - ");
  }

  function buildMissionLinkedInvoice(missionRecord, existingInvoice, invoices) {
    const existingInvoiceId = cleanStoredText(existingInvoice?.id);
    const sellerReference =
      existingInvoice && cleanStoredText(existingInvoice?.seller?.name)
        ? existingInvoice
        : findRecentSellerInvoiceSnapshot(invoices, existingInvoiceId);
    const clientReference =
      existingInvoice &&
      normalizeStoredTextValue(existingInvoice?.client?.name) ===
        normalizeStoredTextValue(missionRecord.clientName)
        ? existingInvoice
        : findRecentClientInvoiceSnapshot(missionRecord.clientName, invoices, existingInvoiceId);
    const totalHt = Math.max(
      Number(missionRecord?.quotedPrice || 0),
      Number(missionRecord?.recommendedPrice || 0)
    );
    const vat10 = normalizeStoredInvoiceAmount(existingInvoice?.totals?.vat10);
    const vat20 = normalizeStoredInvoiceAmount(existingInvoice?.totals?.vat20);
    const paymentStatus = missionRecord?.billingStatus === "paid" ? "paid" : "unpaid";

    return {
      id: existingInvoiceId || `invoice-${missionRecord.id}`,
      number: cleanStoredText(existingInvoice?.number) || getNextMissionInvoiceNumber(invoices),
      issuedAt:
        cleanStoredText(existingInvoice?.issuedAt) || missionRecord.serviceDate || toISODate(new Date()),
      invoiceType: "client",
      missionId: missionRecord.id,
      missionCode: cleanStoredText(missionRecord.code),
      sourceLabel: "Facture client",
      paymentStatus,
      settledAt:
        paymentStatus === "paid"
          ? cleanStoredText(existingInvoice?.settledAt) ||
            missionRecord.serviceDate ||
            toISODate(new Date())
          : "",
      externalFlow: "payable",
      paymentMethod: cleanStoredText(existingInvoice?.paymentMethod) || "wire",
      seller: {
        name:
          cleanStoredText(sellerReference?.seller?.name) ||
          defaultMissionInvoiceTemplate.seller.name,
        address:
          cleanStoredText(sellerReference?.seller?.address) ||
          defaultMissionInvoiceTemplate.seller.address,
        location:
          cleanStoredText(sellerReference?.seller?.location) ||
          defaultMissionInvoiceTemplate.seller.location,
        phone:
          cleanStoredText(sellerReference?.seller?.phone) ||
          defaultMissionInvoiceTemplate.seller.phone,
        evtc:
          cleanStoredText(sellerReference?.seller?.evtc) ||
          defaultMissionInvoiceTemplate.seller.evtc,
        siret:
          cleanStoredText(sellerReference?.seller?.siret) ||
          defaultMissionInvoiceTemplate.seller.siret,
      },
      client: {
        name: cleanStoredText(missionRecord.clientName),
        address: cleanStoredText(clientReference?.client?.address),
        location: cleanStoredText(clientReference?.client?.location),
        siret: cleanStoredText(clientReference?.client?.siret),
        vat: cleanStoredText(clientReference?.client?.vat),
        contact: cleanStoredText(clientReference?.client?.contact),
        email: cleanStoredText(clientReference?.client?.email),
        phone: cleanStoredText(clientReference?.client?.phone),
      },
      service: {
        description: buildMissionInvoiceDescription(missionRecord),
        date: missionRecord.serviceDate || "",
        pickup: cleanStoredText(missionRecord.pickupAddress),
        destination: cleanStoredText(missionRecord.destinationAddress),
        passengers: Math.max(0, Number(missionRecord.passengers || 0)),
        distanceKm: Math.max(0, Number(missionRecord.distanceKm || 0)),
      },
      totals: {
        ht: totalHt,
        vat10,
        vat20,
        ttc: totalHt + vat10 + vat20,
      },
      taxNote:
        cleanStoredText(existingInvoice?.taxNote) || defaultMissionInvoiceTemplate.taxNote,
      insurance:
        cleanStoredText(existingInvoice?.insurance) || defaultMissionInvoiceTemplate.insurance,
      attachment: existingInvoice?.attachment || null,
    };
  }

  function syncMissionInvoiceRecord(missionRecord) {
    if (!missionRecord || !cleanStoredText(missionRecord.id)) {
      return;
    }

    const invoices = readStoredInvoices();
    const existingInvoiceIndex = invoices.findIndex(
      (invoice) =>
        isClientInvoice(invoice) && cleanStoredText(invoice?.missionId) === missionRecord.id
    );
    const existingInvoice = existingInvoiceIndex >= 0 ? invoices[existingInvoiceIndex] : null;
    const nextInvoice = buildMissionLinkedInvoice(missionRecord, existingInvoice, invoices);

    if (existingInvoiceIndex >= 0) {
      invoices[existingInvoiceIndex] = nextInvoice;
    } else {
      invoices.push(nextInvoice);
    }

    saveStoredInvoices(invoices);
  }

  function missionCatalog() {
    const overrides = getMissionOverrides();
    const seededMissions = missions.map((mission) =>
      overrides[mission.id] ? hydrateMissionRecord({ ...mission, ...overrides[mission.id] }) : mission
    );

    return [...seededMissions, ...getCustomMissions()].sort((left, right) =>
      `${left.serviceDate}-${left.departureTime}`.localeCompare(
        `${right.serviceDate}-${right.departureTime}`
      )
    );
  }

  function getMissionCoordinates(mission) {
    if (Array.isArray(mission.stops) && mission.stops.length >= 2) {
      const coords = mission.stops
        .map((stop) => stop.coords)
        .filter((coordsValue) => Array.isArray(coordsValue) && coordsValue.length === 2);

      if (coords.length >= 2) {
        return {
          pickup: coords[0],
          destination: coords[coords.length - 1],
          points: coords,
          stops: mission.stops,
        };
      }
    }

    const fallbackGeo = missionGeo[mission.id] || null;
    if (!fallbackGeo) {
      return null;
    }

    const fallbackStops = mission.stops || [];
    return {
      ...fallbackGeo,
      points: [fallbackGeo.pickup, fallbackGeo.destination],
      routePoints: fallbackGeo.line || [fallbackGeo.pickup, fallbackGeo.destination],
      stops: fallbackStops,
    };
  }

  function buildFallbackRouteSummary(mission) {
    const geo = getMissionCoordinates(mission);
    if (!geo) {
      return null;
    }

    const stops = missionStopsForRoute(mission);
    const stopCoords = stops.map((stop, index) => {
      if (stop.coords) {
        return stop.coords;
      }

      if (Array.isArray(geo.points) && geo.points[index]) {
        return geo.points[index];
      }

      if (index === 0) {
        return geo.pickup;
      }

      if (index === stops.length - 1) {
        return geo.destination;
      }

      return null;
    });

    return {
      kind: "fallback",
      stops,
      stopCoords,
      path: (geo.routePoints || geo.line || geo.points || [])
        .map((coords) => toLatLngLiteral(coords))
        .filter(Boolean),
      distanceKm: mission.distanceKm,
      durationMinutes: mission.driveDurationMinutes || mission.durationMinutes,
    };
  }

  function nextMissionCode() {
    const codes = missionCatalog()
      .map((mission) => mission.code)
      .map((code) => {
        const match = /RP-(\d+)/.exec(code);
        return match ? Number(match[1]) : 0;
      });

    const maxCode = codes.length ? Math.max(...codes) : 399;
    return `RP-${maxCode + 1}`;
  }

  function createEmptyMissionStop() {
    return {
      id: `stop-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      label: "",
      address: "",
      activityBudget: "0",
      placeId: "",
      coords: null,
    };
  }

  function getMissionStopsBudgetTotal() {
    return missionStopDrafts.reduce((sum, stop) => sum + (Number(stop.activityBudget) || 0), 0);
  }

  function getFilledMissionStopsCount() {
    return missionStopDrafts.filter(
      (stop) => stop.label.trim() || stop.address.trim() || Number(stop.activityBudget || 0) > 0
    ).length;
  }

  function updateMissionPricingPreview() {
    if (missionPreviewStopsNode) {
      missionPreviewStopsNode.textContent = String(getFilledMissionStopsCount());
    }

    if (missionPreviewActivitiesNode) {
      missionPreviewActivitiesNode.textContent = formatCurrency(getMissionStopsBudgetTotal(), 0);
    }

    if (missionPreviewPriceNode) {
      const quotedPrice = Number(missionQuotedPriceInput?.value || 0);
      const targetMarginRate = Number(missionTargetMarginInput?.value || 30) / 100;
      const tolls = Number(missionTollsInput?.value || 0);
      const parking = Number(missionParkingInput?.value || 0);
      const activityBudgetTotal = getMissionStopsBudgetTotal();
      const baseEstimate = tolls + parking + activityBudgetTotal;
      const suggestedPrice =
        targetMarginRate < 1 ? roundPrice(baseEstimate / Math.max(0.1, 1 - targetMarginRate)) : baseEstimate;

      missionPreviewPriceNode.textContent =
        quotedPrice > 0 ? `${formatCurrency(suggestedPrice)} conseille` : formatCurrency(suggestedPrice);
    }
  }

  function renderMissionStopsBuilder() {
    if (!missionStopsList) {
      return;
    }

    missionStopsList.innerHTML = missionStopDrafts
      .map(
        (stop, index) => `
          <article class="mission-stop-row" data-stop-id="${stop.id}">
            <div class="mission-stop-row-head">
              <strong>Etape ${index + 1}</strong>
              <button class="danger-action mission-stop-remove" type="button" data-stop-id="${stop.id}">
                Retirer
              </button>
            </div>
            <div class="mission-stop-row-grid">
              <label class="field-group">
                <span>Nom de l'etape</span>
                <input type="text" data-stop-field="label" data-stop-id="${stop.id}" value="${stop.label}" placeholder="Eurodisney" />
              </label>
              <label class="field-group">
                <span>Budget activite (EUR)</span>
                <input type="number" min="0" step="0.01" data-stop-field="activityBudget" data-stop-id="${stop.id}" value="${stop.activityBudget}" placeholder="120" />
              </label>
              <label class="field-group field-group-wide">
                <span>Adresse etape</span>
                <input type="text" data-stop-field="address" data-stop-id="${stop.id}" value="${stop.address}" placeholder="Adresse complete de l'etape" />
              </label>
            </div>
          </article>
        `
      )
      .join("");

    missionStopsList
      .querySelectorAll("input[data-stop-field='address']")
      .forEach((inputNode) => {
        if (!(inputNode instanceof HTMLInputElement)) {
          return;
        }

        const stop = missionStopDrafts.find((draft) => draft.id === inputNode.dataset.stopId);
        if (stop) {
          setAddressInputMetadata(inputNode, stop);
        }
      });

    void setupMissionAddressAutocompletes();
    updateMissionPricingPreview();
  }

  function clearMissionFormMessage() {
    if (!missionFormMessage) {
      return;
    }

    missionFormMessage.hidden = true;
    missionFormMessage.textContent = "";
    missionFormMessage.classList.remove("error", "success");
  }

  function showMissionFormMessage(message, type) {
    if (!missionFormMessage) {
      return;
    }

    missionFormMessage.hidden = false;
    missionFormMessage.textContent = message;
    missionFormMessage.classList.remove("error", "success");

    if (type) {
      missionFormMessage.classList.add(type);
    }
  }

  async function setupMissionAddressAutocompletes() {
    try {
      await Promise.all([
        bindAddressAutocomplete(missionPickupAddressInput),
        bindAddressAutocomplete(missionDestinationAddressInput),
      ]);

      if (!missionStopsList) {
        return;
      }

      const stopAddressInputs = Array.from(
        missionStopsList.querySelectorAll("input[data-stop-field='address']")
      );

      await Promise.all(
        stopAddressInputs.map((inputNode) =>
          bindAddressAutocomplete(inputNode, (selection) => {
            const stopId = inputNode.dataset.stopId;
            if (!stopId) {
              return;
            }

            missionStopDrafts = missionStopDrafts.map((stop) =>
              stop.id === stopId
                ? {
                    ...stop,
                    address: selection.address || stop.address,
                    placeId: selection.placeId || "",
                    coords: selection.coords || null,
                  }
                : stop
            );
          })
        )
      );
    } catch (error) {
      // Leave plain text inputs usable if the Places library is unavailable.
    }
  }

  function syncMissionFormMode() {
    if (missionFormKicker) {
      missionFormKicker.textContent = editingMissionId ? "Modification mission" : "Nouvelle mission";
    }

    if (missionFormTitle) {
      missionFormTitle.textContent = editingMissionId
        ? "Modifier la mission selectionnee"
        : "Ajouter une mission au planning";
    }

    if (missionFormSubmitButton) {
      missionFormSubmitButton.textContent = editingMissionId
        ? "Enregistrer les modifications"
        : "Ajouter la mission";
    }

    if (resetMissionFormButton) {
      resetMissionFormButton.textContent = editingMissionId ? "Annuler la modification" : "Effacer";
    }
  }

  function setMissionFormOpen(isOpen) {
    if (!missionForm) {
      return;
    }

    missionForm.hidden = !isOpen;

    if (isOpen && missionCodeInput) {
      clearMissionFormMessage();
      missionForm.scrollIntoView({ behavior: "smooth", block: "start" });
      missionCodeInput.focus();
    }
  }

  function openMissionFormForDate(dateKey) {
    setActivePlanningDate(dateKey);
    setPlanningCalendarMonthCursor(dateKey);
    closePlanningGlobalCalendar();
    resetMissionForm();

    if (missionServiceDateInput) {
      missionServiceDateInput.value = dateKey;
    }

    setMissionFormOpen(true);
    showMissionFormMessage(`Nouvelle mission pre-remplie pour le ${formatDay(dateKey)}.`, "success");
    renderOperations();
  }

  function buildStopDraftsFromMission(mission) {
    const activityStops = getMissionActivityStops(mission);
    return activityStops.length
      ? activityStops.map((stop, index) => ({
          id: `stop-${mission.id}-${index + 1}`,
          label: stop.label || "",
          address: stop.address || "",
          activityBudget: String(Number(stop.activityBudget || 0)),
          placeId: stop.placeId || "",
          coords: Array.isArray(stop.coords) ? stop.coords : null,
        }))
      : [createEmptyMissionStop()];
  }

  function fillMissionForm(mission) {
    editingMissionId = mission.id;
    const missionCoordinates = getMissionCoordinates(mission);

    if (missionCodeInput) {
      missionCodeInput.value = mission.code || "";
    }
    if (missionServiceTypeInput) {
      missionServiceTypeInput.value = mission.serviceType || "";
    }
    if (missionClientNameInput) {
      missionClientNameInput.value = mission.clientName || "";
    }
    if (missionServiceDateInput) {
      missionServiceDateInput.value = mission.serviceDate || toISODate(new Date());
    }
    if (missionDepartureTimeInput) {
      missionDepartureTimeInput.value = mission.departureTime || "";
    }
    if (missionArrivalTimeInput) {
      missionArrivalTimeInput.value = mission.arrivalTime || "";
    }
    if (missionPickupAddressInput) {
      missionPickupAddressInput.value = mission.pickupAddress || "";
      setAddressInputMetadata(missionPickupAddressInput, {
        placeId: mission.stops?.[0]?.placeId || "",
        coords: mission.stops?.[0]?.coords || missionCoordinates?.pickup || null,
      });
    }
    if (missionMeetingPointInput) {
      missionMeetingPointInput.value = mission.meetingPoint || "";
    }
    if (missionDestinationAddressInput) {
      missionDestinationAddressInput.value = mission.destinationAddress || "";
      setAddressInputMetadata(missionDestinationAddressInput, {
        placeId: mission.stops?.[mission.stops.length - 1]?.placeId || "",
        coords:
          mission.stops?.[mission.stops.length - 1]?.coords ||
          missionCoordinates?.destination ||
          null,
      });
    }
    if (missionPassengersInput) {
      missionPassengersInput.value = String(mission.passengers || "");
    }
    if (missionLuggageInput) {
      missionLuggageInput.value = String(mission.luggage || "");
    }
    if (missionQuotedPriceInput) {
      missionQuotedPriceInput.value = String(mission.quotedPrice || "");
    }
    if (missionTargetMarginInput) {
      missionTargetMarginInput.value = String(Math.round((mission.targetMarginRate || 0.3) * 100));
    }
    if (missionTollsInput) {
      missionTollsInput.value = String(mission.tolls || 0);
    }
    if (missionParkingInput) {
      missionParkingInput.value = String(mission.parking || 0);
    }
    if (missionPriorityInput) {
      missionPriorityInput.value = mission.priority || "standard";
    }
    if (missionBillingStatusInput) {
      missionBillingStatusInput.value = mission.billingStatus || "to_invoice";
    }
    if (missionNotesInput) {
      missionNotesInput.value = mission.notes || "";
    }

    missionStopDrafts = buildStopDraftsFromMission(mission);
    clearMissionFormMessage();
    syncMissionFormMode();
    renderMissionStopsBuilder();
    void setupMissionAddressAutocompletes();
  }

  function resetMissionForm() {
    if (!missionForm) {
      return;
    }

    editingMissionId = null;
    missionForm.reset();
    missionStopDrafts = [createEmptyMissionStop()];
    clearMissionFormMessage();

    if (missionCodeInput) {
      missionCodeInput.value = nextMissionCode();
    }

    if (missionServiceDateInput) {
      missionServiceDateInput.value = toISODate(new Date());
    }

    if (missionPriorityInput) {
      missionPriorityInput.value = "standard";
    }

    if (missionBillingStatusInput) {
      missionBillingStatusInput.value = "to_invoice";
    }

    if (missionTargetMarginInput) {
      missionTargetMarginInput.value = "30";
    }

    clearAddressInputMetadata(missionPickupAddressInput);
    clearAddressInputMetadata(missionDestinationAddressInput);

    syncMissionFormMode();
    renderMissionStopsBuilder();
    void setupMissionAddressAutocompletes();
  }

  function isSeedMission(missionId) {
    return missions.some((mission) => mission.id === missionId);
  }

  function saveMissionRecord(missionRecord) {
    if (isSeedMission(missionRecord.id)) {
      const overrides = getMissionOverrides();
      overrides[missionRecord.id] = missionRecord;
      saveMissionOverrides(overrides);
      syncMissionInvoiceRecord(missionRecord);
      return;
    }

    const customMissions = getCustomMissions();
    const missionIndex = customMissions.findIndex((mission) => mission.id === missionRecord.id);

    if (missionIndex >= 0) {
      customMissions[missionIndex] = missionRecord;
    } else {
      customMissions.push(missionRecord);
    }

    saveCustomMissions(customMissions);
    syncMissionInvoiceRecord(missionRecord);
  }

  async function handleMissionSubmit(event) {
    event.preventDefault();

    if (
      !missionCodeInput ||
      !missionServiceTypeInput ||
      !missionClientNameInput ||
      !missionServiceDateInput ||
      !missionDepartureTimeInput ||
      !missionArrivalTimeInput ||
      !missionPickupAddressInput ||
      !missionMeetingPointInput ||
      !missionDestinationAddressInput ||
      !missionPassengersInput ||
      !missionLuggageInput ||
      !missionQuotedPriceInput ||
      !missionTargetMarginInput ||
      !missionTollsInput ||
      !missionParkingInput ||
      !missionPriorityInput ||
      !missionBillingStatusInput ||
      !missionNotesInput
    ) {
      return;
    }

    const code = missionCodeInput.value.trim();
    const serviceType = missionServiceTypeInput.value.trim();
    const clientName = missionClientNameInput.value.trim();
    const serviceDate = missionServiceDateInput.value;
    const departureTime = missionDepartureTimeInput.value;
    const arrivalTime = missionArrivalTimeInput.value;
    const pickupAddress = missionPickupAddressInput.value.trim();
    const meetingPoint = missionMeetingPointInput.value.trim();
    const destinationAddress = missionDestinationAddressInput.value.trim();
    const passengers = Number(missionPassengersInput.value);
    const luggage = Number(missionLuggageInput.value);
    const quotedPrice = Number(missionQuotedPriceInput.value);
    const targetMarginRate = Number(missionTargetMarginInput.value) / 100;
    const tolls = Number(missionTollsInput.value);
    const parking = Number(missionParkingInput.value);
    const priority = missionPriorityInput.value;
    const billingStatus = missionBillingStatusInput.value;
    const notes = missionNotesInput.value.trim();
    const pickupLocation = {
      address: pickupAddress,
      ...readAddressInputMetadata(missionPickupAddressInput),
    };
    const destinationLocation = {
      address: destinationAddress,
      ...readAddressInputMetadata(missionDestinationAddressInput),
    };
    const activityStops = missionStopDrafts
      .map((stop) => ({
        id: stop.id,
        label: stop.label.trim(),
        address: stop.address.trim(),
        activityBudget: Number(stop.activityBudget || 0),
        placeId: stop.placeId || "",
        coords: Array.isArray(stop.coords) ? stop.coords : null,
      }))
      .filter((stop) => stop.label || stop.address || stop.activityBudget > 0);

    if (
      !code ||
      !serviceType ||
      !clientName ||
      !serviceDate ||
      !departureTime ||
      !arrivalTime ||
      !pickupAddress ||
      !meetingPoint ||
      !destinationAddress ||
      !notes
    ) {
      showMissionFormMessage("Merci de remplir tous les champs de la mission.", "error");
      return;
    }

    if (
      [passengers, luggage, quotedPrice, targetMarginRate, tolls, parking].some(
        (value) => Number.isNaN(value) || value < 0
      )
    ) {
      showMissionFormMessage("Les montants, distances et volumes doivent etre valides.", "error");
      return;
    }

    if (passengers <= 0) {
      showMissionFormMessage("Le nombre de passagers doit etre superieur a 0.", "error");
      return;
    }

    if (targetMarginRate <= 0 || targetMarginRate >= 0.95) {
      showMissionFormMessage("La marge cible doit rester entre 1% et 94%.", "error");
      return;
    }

    if (
      missionCatalog().some(
        (mission) => mission.code === code && mission.id !== editingMissionId
      )
    ) {
      showMissionFormMessage("Ce code mission existe deja.", "error");
      return;
    }

    const hasInvalidStop = activityStops.some(
      (stop) => !stop.label || !stop.address || Number.isNaN(stop.activityBudget) || stop.activityBudget < 0
    );

    if (hasInvalidStop) {
      showMissionFormMessage(
        "Chaque etape ajoutee doit avoir un nom, une adresse et un budget activite valide.",
        "error"
      );
      return;
    }

    showMissionFormMessage("Calcul de l'itineraire Google Maps...", "success");

    try {
      const draftStops = buildMissionStops({
        pickupAddress,
        meetingPoint,
        destinationAddress,
        activityStops,
        pickupCoords: pickupLocation.coords,
        destinationCoords: destinationLocation.coords,
        pickupPlaceId: pickupLocation.placeId,
        destinationPlaceId: destinationLocation.placeId,
      });
      const routeSummary = await computeRoadRoute({
        pickupAddress,
        destinationAddress,
        meetingPoint,
        serviceDate,
        departureTime,
        stops: draftStops,
      });
      const resolvedStops = routeSummary.stops || draftStops;
      const resolvedPickup = resolvedStops[0] || {};
      const resolvedDestination = resolvedStops[resolvedStops.length - 1] || {};

      const pickupCoords = routeSummary.stopCoords[0] || resolvedPickup.coords || null;
      const destinationCoords =
        routeSummary.stopCoords[routeSummary.stopCoords.length - 1] ||
        resolvedDestination.coords ||
        null;
      const enrichedActivityStops = activityStops.map((stop, index) => ({
        ...stop,
        address: resolvedStops[index + 1]?.address || stop.address,
        placeId: resolvedStops[index + 1]?.placeId || stop.placeId || "",
        coords: routeSummary.stopCoords[index + 1] || resolvedStops[index + 1]?.coords || null,
      }));
      const missionStops = buildMissionStops({
        pickupAddress: resolvedPickup.address || pickupAddress,
        meetingPoint,
        destinationAddress: resolvedDestination.address || destinationAddress,
        activityStops: enrichedActivityStops,
        pickupCoords,
        destinationCoords,
        pickupPlaceId: resolvedPickup.placeId || pickupLocation.placeId,
        destinationPlaceId: resolvedDestination.placeId || destinationLocation.placeId,
      });
      const serviceDurationMinutes = Math.max(
        computeDurationBetweenTimes(departureTime, arrivalTime),
        routeSummary.durationMinutes
      );
      const missionId = editingMissionId || `custom-mission-${Date.now()}`;
      const draftMission = hydrateMissionRecord({
        id: missionId,
        code,
        serviceType,
        routeLabel: buildRouteLabelFromStops(missionStops),
        departureTime,
        arrivalTime,
        distanceKm: routeSummary.distanceKm,
        durationMinutes: serviceDurationMinutes,
        driveDurationMinutes: routeSummary.durationMinutes,
        passengers,
        luggage,
        quotedPrice,
        recommendedPrice: 0,
        tolls,
        parking,
        targetMarginRate,
        clientName,
        pickupAddress: resolvedPickup.address || pickupAddress,
        destinationAddress: resolvedDestination.address || destinationAddress,
        meetingPoint,
        stops: missionStops,
        notes,
        billingStatus,
        priority,
        serviceDate,
      });
      const pricingSnapshot = pricingSnapshotForMission(draftMission);
      const nextMission = hydrateMissionRecord({
        ...draftMission,
        quotedPrice: pricingSnapshot.quotedPrice,
        recommendedPrice: pricingSnapshot.recommendedPrice,
      });

      saveMissionRecord(nextMission);
      routeGeometryCache.set(missionId, { ...routeSummary, stops: missionStops });
      saveSelectedTrip(nextMission.id);
      resetMissionForm();
      setMissionFormOpen(false);
      renderOperations();
    } catch (error) {
      const currentMission = editingMissionId
        ? missionCatalog().find((mission) => mission.id === editingMissionId)
        : null;

      if (currentMission) {
        const currentMissionCoordinates = getMissionCoordinates(currentMission);
        const fallbackPickupCoords =
          pickupLocation.coords ||
          currentMission.stops?.[0]?.coords ||
          currentMissionCoordinates?.pickup ||
          null;
        const fallbackDestinationCoords =
          destinationLocation.coords ||
          currentMission.stops?.[currentMission.stops.length - 1]?.coords ||
          currentMissionCoordinates?.destination ||
          null;
        const fallbackActivityStops = activityStops.map((stop) => ({
          ...stop,
          coords: stop.coords || null,
        }));
        const missionStops = buildMissionStops({
          pickupAddress,
          meetingPoint,
          destinationAddress,
          activityStops: fallbackActivityStops,
          pickupCoords: fallbackPickupCoords,
          destinationCoords: fallbackDestinationCoords,
          pickupPlaceId: pickupLocation.placeId || currentMission.stops?.[0]?.placeId || "",
          destinationPlaceId:
            destinationLocation.placeId ||
            currentMission.stops?.[currentMission.stops.length - 1]?.placeId ||
            "",
        });
        const baseDriveDuration =
          currentMission.driveDurationMinutes ||
          currentMission.durationMinutes ||
          computeDurationBetweenTimes(departureTime, arrivalTime);
        const nextMission = hydrateMissionRecord({
          ...currentMission,
          code,
          serviceType,
          routeLabel: buildRouteLabelFromStops(missionStops),
          departureTime,
          arrivalTime,
          durationMinutes: Math.max(
            computeDurationBetweenTimes(departureTime, arrivalTime),
            baseDriveDuration
          ),
          driveDurationMinutes: baseDriveDuration,
          passengers,
          luggage,
          quotedPrice,
          recommendedPrice: 0,
          tolls,
          parking,
          targetMarginRate,
          clientName,
          pickupAddress,
          destinationAddress,
          meetingPoint,
          stops: missionStops,
          notes,
          billingStatus,
          priority,
          serviceDate,
        });
        const pricingSnapshot = pricingSnapshotForMission(nextMission);
        const savedMission = hydrateMissionRecord({
          ...nextMission,
          quotedPrice: pricingSnapshot.quotedPrice,
          recommendedPrice: pricingSnapshot.recommendedPrice,
        });

        saveMissionRecord(savedMission);
        routeGeometryCache.delete(savedMission.id);
        saveSelectedTrip(savedMission.id);
        resetMissionForm();
        setMissionFormOpen(false);
        renderOperations();
        return;
      }

      showMissionFormMessage(
        "Impossible de calculer la route. La mission existante peut etre modifiee, mais une nouvelle mission demande une adresse plus precise.",
        "error"
      );
    }
  }

  function normalizeStoredVehicle(vehicle, index) {
    const vehicleType = (vehicle.vehicleType || "owner").toLowerCase();
    const ownershipType =
      vehicleType === "collaborator" ? "collaborator" : vehicleType === "rental" ? "rental" : "company";
    const label = [vehicle.brand, vehicle.model].filter(Boolean).join(" ") || "Vehicule ajoute";
    const seats = /vito|minibus/i.test(label) ? 8 : /classe v|van/i.test(label) ? 7 : 4;
    const ownerCollaboratorId =
      ownershipType === "collaborator" && typeof vehicle.linkedCollaboratorId === "string"
        ? vehicle.linkedCollaboratorId.trim()
        : "";

    return {
      id: vehicle.id || `stored-vehicle-${index}`,
      label,
      plate: vehicle.plate || "",
      ownershipType,
      ownerCollaboratorId,
      seats,
      luggageCapacity: seats >= 7 ? seats : Math.max(3, seats),
      consumption: Number(vehicle.consumption || 7.5),
      consumptionUnit: vehicle.consumptionUnit || "L/100 km",
      energyKind: vehicle.consumptionUnit === "kWh/100 km" ? "electric" : "diesel",
      status: (vehicle.vehicleStatus || "available").toLowerCase(),
      color: vehicle.color || "",
    };
  }

  function vehicleCatalog() {
    let stored = [];

    try {
      stored = JSON.parse(window.localStorage.getItem(vehiclesStorageKey) || "[]");
    } catch (error) {
      stored = [];
    }

    if (Array.isArray(stored) && stored.length > 0) {
      return stored.map(normalizeStoredVehicle);
    }

    return [...baseVehicles];
  }

  function normalizeStoredCollaborator(collaborator, index, catalog) {
    const firstName = typeof collaborator?.firstName === "string" ? collaborator.firstName.trim() : "";
    const lastName = typeof collaborator?.lastName === "string" ? collaborator.lastName.trim() : "";
    const name = [firstName, lastName].filter(Boolean).join(" ") || `Collaborateur ${index + 1}`;
    const role = String(collaborator?.role || "guide").toLowerCase() === "driver" ? "Chauffeur" : "Guide";
    const availabilityStatus = String(collaborator?.availabilityStatus || "available").toLowerCase();
    const availability =
      availabilityStatus === "on_mission"
        ? "limited"
        : availabilityStatus === "unavailable"
          ? "off"
          : "available";
    const languages = Array.isArray(collaborator?.languages)
      ? collaborator.languages
          .map((entry) => (typeof entry === "string" ? entry : entry?.language))
          .filter(Boolean)
      : [];
    const canDrive = String(collaborator?.role || "").toLowerCase() === "driver";
    const personalVehicleId =
      catalog.find(
        (vehicle) => vehicle.ownershipType === "collaborator" && vehicle.ownerCollaboratorId === collaborator.id
      )?.id || "";

    return {
      id: collaborator.id || `stored-collaborator-${index}`,
      name,
      role,
      languages,
      availability,
      hourlyRate: canDrive ? 30 : 24,
      canDrive,
      personalVehicleId,
    };
  }

  function collaboratorCatalog(catalog = vehicleCatalog()) {
    let stored = [];

    try {
      stored = JSON.parse(window.localStorage.getItem(collaboratorsStorageKey) || "[]");
    } catch (error) {
      stored = [];
    }

    if (Array.isArray(stored) && stored.length > 0) {
      return stored.map((collaborator, index) => normalizeStoredCollaborator(collaborator, index, catalog));
    }

    return [...collaborators];
  }

  function collaboratorById(id, collaboratorsList = collaboratorCatalog()) {
    return collaboratorsList.find((collaborator) => collaborator.id === id) || null;
  }

  function vehicleById(catalog, id) {
    return catalog.find((vehicle) => vehicle.id === id) || null;
  }

  function seedAssignments() {
    const raw = window.localStorage.getItem(missionAssignmentsStorageKey);
    let current = {};

    if (raw) {
      try {
        current = JSON.parse(raw);
      } catch (error) {
        current = {};
      }
    }

    const next = {};
    missionCatalog().forEach((mission) => {
      const baseAssignment = defaultAssignments[mission.id] || {
        leadCollaboratorId: "",
        supportCollaboratorId: "",
        vehicleId: "",
      };
      next[mission.id] = {
        leadCollaboratorId:
          current[mission.id]?.leadCollaboratorId ?? baseAssignment.leadCollaboratorId,
        supportCollaboratorId:
          current[mission.id]?.supportCollaboratorId ??
          baseAssignment.supportCollaboratorId,
        vehicleId: current[mission.id]?.vehicleId ?? baseAssignment.vehicleId,
      };
    });

    window.localStorage.setItem(missionAssignmentsStorageKey, JSON.stringify(next));
    return next;
  }

  function assignments() {
    return seedAssignments();
  }

  function selectedTripId() {
    const stored = window.localStorage.getItem(selectedTripStorageKey);
    const missionsList = missionCatalog();
    if (missionsList.some((mission) => mission.id === stored)) {
      return stored;
    }

    const fallbackId = missionsList[0]?.id || "";
    if (fallbackId) {
      saveSelectedTrip(fallbackId);
    }

    return fallbackId;
  }

  function saveSelectedTrip(id) {
    window.localStorage.setItem(selectedTripStorageKey, id);
  }

  function vehicleScore(vehicle, mission, leadId) {
    const seatPenalty =
      vehicle.seats < mission.passengers
        ? 100 + (mission.passengers - vehicle.seats) * 20
        : vehicle.seats - mission.passengers;
    const luggagePenalty =
      vehicle.luggageCapacity < mission.luggage
        ? 80 + (mission.luggage - vehicle.luggageCapacity) * 15
        : vehicle.luggageCapacity - mission.luggage;
    const statusPenalty = vehicle.status === "available" ? 0 : 70;
    const ownerBonus =
      vehicle.ownerCollaboratorId && vehicle.ownerCollaboratorId === leadId ? -30 : 0;

    return seatPenalty + luggagePenalty + statusPenalty + ownerBonus;
  }

  function canLeadUseVehicle(vehicle, leadCollaboratorId) {
    if (!vehicle) {
      return false;
    }

    if (vehicle.ownershipType !== "collaborator" || !vehicle.ownerCollaboratorId) {
      return true;
    }

    return vehicle.ownerCollaboratorId === leadCollaboratorId;
  }

  function recommendedVehicle(mission, assignment, catalog) {
    return (
      [...catalog]
        .filter((vehicle) => canLeadUseVehicle(vehicle, assignment.leadCollaboratorId))
        .sort(
        (left, right) =>
          vehicleScore(left, mission, assignment.leadCollaboratorId) -
          vehicleScore(right, mission, assignment.leadCollaboratorId)
        )[0] || null
    );
  }

  function diagnostics(mission, assignment, catalog, collaboratorsList = collaboratorCatalog(catalog)) {
    const lead = collaboratorById(assignment.leadCollaboratorId, collaboratorsList);
    const support = collaboratorById(assignment.supportCollaboratorId, collaboratorsList);
    const vehicle = vehicleById(catalog, assignment.vehicleId);
    const suggestion = recommendedVehicle(mission, assignment, catalog);
    const blockers = [];
    const notices = [];

    if (!lead) {
      blockers.push("Chauffeur principal manquant.");
    } else if (lead.availability === "off") {
      blockers.push(`${lead.name} est indisponible.`);
    } else if (lead.availability === "limited") {
      notices.push(`${lead.name} a une disponibilite limitee.`);
    }

    if (!vehicle) {
      blockers.push("Vehicule non affecte.");
    } else {
      if (!canLeadUseVehicle(vehicle, assignment.leadCollaboratorId)) {
        const owner = collaboratorById(vehicle.ownerCollaboratorId, collaboratorsList);
        blockers.push(
          `${vehicle.label} appartient a ${owner ? owner.name : "un collaborateur"} et ne peut pas etre utilise par un autre chauffeur.`
        );
      }

      if (vehicle.status !== "available") {
        blockers.push(
          `${vehicle.label} est ${
            vehicleStatusLabels[vehicle.status]?.toLowerCase() || "indisponible"
          }.`
        );
      }

      if (mission.passengers > vehicle.seats) {
        blockers.push(
          `Capacite insuffisante: ${vehicle.seats} places pour ${mission.passengers} passagers.`
        );
      }

      if (mission.luggage > vehicle.luggageCapacity) {
        blockers.push(
          `Capacite bagages insuffisante: ${vehicle.luggageCapacity} pour ${mission.luggage}.`
        );
      }
    }

    if (!support && (mission.passengers >= 6 || mission.priority === "vip")) {
      notices.push("Renfort recommande pour l'accueil et la logistique.");
    }

    if (suggestion && (!vehicle || suggestion.id !== vehicle.id)) {
      notices.push(`Vehicule recommande: ${suggestion.label}.`);
    }

    return { lead, support, vehicle, suggestion, blockers, notices, ready: blockers.length === 0 };
  }

  function getMissionActivityStops(mission) {
    return Array.isArray(mission.stops)
      ? mission.stops.filter((stop) => stop.kind === "activity")
      : [];
  }

  function getMissionActivityBudgetTotal(mission) {
    return getMissionActivityStops(mission).reduce(
      (sum, stop) => sum + (Number(stop.activityBudget) || 0),
      0
    );
  }

  function financials(mission, assignment, catalog, collaboratorsList = collaboratorCatalog(catalog)) {
    const state = diagnostics(mission, assignment, catalog, collaboratorsList);
    const activeVehicle = state.vehicle || state.suggestion;
    const leadCost = state.lead ? state.lead.hourlyRate * (mission.durationMinutes / 60) : 0;
    const supportCost = state.support ? state.support.hourlyRate * (mission.durationMinutes / 60) : 0;
    const loadFactor = 1 + Math.max(0, mission.passengers - 1) * 0.018 + mission.luggage * 0.012;
    const consumption = activeVehicle ? Number(activeVehicle.consumption) : 7.5;
    const activityBudgetTotal = getMissionActivityBudgetTotal(mission);
    const fuelCost =
      ((mission.distanceKm * consumption * loadFactor) / 100) *
      (activeVehicle ? energyPrices[activeVehicle.energyKind] || energyPrices.diesel : energyPrices.diesel);
    const totalCost =
      fuelCost + leadCost + supportCost + mission.tolls + mission.parking + activityBudgetTotal;
    const margin = mission.quotedPrice - totalCost;
    const targetMarginRate = Number(mission.targetMarginRate || 0.3);
    const recommendedPrice = roundPrice(totalCost / Math.max(0.1, 1 - targetMarginRate));

    return {
      ...state,
      activeVehicle,
      leadCost,
      supportCost,
      staffCost: leadCost + supportCost,
      loadFactor,
      fuelCost,
      activityBudgetTotal,
      totalCost,
      margin,
      marginRate: mission.quotedPrice > 0 ? margin / mission.quotedPrice : 0,
      targetMarginRate,
      recommendedPrice,
    };
  }

  function pricingSnapshotForMission(missionDraft) {
    const currentAssignments = assignments();
    const catalog = vehicleCatalog();
    const collaboratorsList = collaboratorCatalog(catalog);
    const assignment = currentAssignments[missionDraft.id] || {
      leadCollaboratorId: "",
      supportCollaboratorId: "",
      vehicleId: "",
    };
    const snapshot = financials(missionDraft, assignment, catalog, collaboratorsList);

    return {
      recommendedPrice: snapshot.recommendedPrice,
      quotedPrice: Math.max(Number(missionDraft.quotedPrice || 0), snapshot.recommendedPrice),
    };
  }

  function optionMarkup(options, emptyLabel) {
    return [`<option value="">${emptyLabel}</option>`, ...options].join("");
  }

  function collaboratorOptions(selected, driversOnly = false) {
    const options = collaboratorCatalog()
      .filter((collaborator) => (driversOnly ? collaborator.canDrive : true))
      .map(
        (collaborator) =>
          `<option value="${collaborator.id}"${
            collaborator.id === selected ? " selected" : ""
          }>${collaborator.name} · ${collaboratorLabels[collaborator.availability]}</option>`
      );

    return optionMarkup(options, driversOnly ? "Choisir un chauffeur" : "Aucun renfort");
  }

  function vehicleOptions(selected, catalog, leadCollaboratorId) {
    const options = [...catalog]
      .filter((vehicle) => canLeadUseVehicle(vehicle, leadCollaboratorId))
      .sort((left, right) => left.seats - right.seats)
      .map(
        (vehicle) =>
          `<option value="${vehicle.id}"${vehicle.id === selected ? " selected" : ""}>${
            vehicle.label
          } · ${vehicle.seats} pl · ${ownershipLabels[vehicle.ownershipType]}</option>`
      );

    return optionMarkup(options, "Choisir un vehicule");
  }

  function assignmentState() {
    const catalog = vehicleCatalog();
    return {
      currentAssignments: assignments(),
      catalog,
      collaboratorsList: collaboratorCatalog(catalog),
      missionsList: missionCatalog(),
    };
  }

  function getPersonalVehicleForCollaborator(
    leadCollaboratorId,
    catalog,
    collaboratorsList = collaboratorCatalog(catalog)
  ) {
    const collaborator = collaboratorById(leadCollaboratorId, collaboratorsList);
    if (!collaborator || !collaborator.personalVehicleId) {
      return null;
    }

    const vehicle = vehicleById(catalog, collaborator.personalVehicleId);
    return vehicle && canLeadUseVehicle(vehicle, leadCollaboratorId) ? vehicle : null;
  }

  function updateAssignment(missionId, field, value) {
    const next = assignments();
    const catalog = vehicleCatalog();
    const collaboratorsList = collaboratorCatalog(catalog);
    next[missionId] = { ...next[missionId], [field]: value };

    if (field === "leadCollaboratorId") {
      const personalVehicle = getPersonalVehicleForCollaborator(value, catalog, collaboratorsList);

      if (personalVehicle) {
        next[missionId].vehicleId = personalVehicle.id;
      } else {
        const currentVehicle = vehicleById(catalog, next[missionId].vehicleId);
        if (currentVehicle && !canLeadUseVehicle(currentVehicle, value)) {
          next[missionId].vehicleId = "";
        }
      }
    }

    if (next[missionId].supportCollaboratorId === next[missionId].leadCollaboratorId) {
      next[missionId].supportCollaboratorId = "";
    }

    window.localStorage.setItem(missionAssignmentsStorageKey, JSON.stringify(next));
    renderOperations();
  }

  function applyRecommendation(missionId) {
    const { currentAssignments, catalog } = assignmentState();
    const mission = missionCatalog().find((item) => item.id === missionId);
    if (!mission) {
      return;
    }

    const suggestion = recommendedVehicle(mission, currentAssignments[mission.id], catalog);
    if (!suggestion) {
      return;
    }

    currentAssignments[mission.id] = {
      ...currentAssignments[mission.id],
      vehicleId: suggestion.id,
    };

    window.localStorage.setItem(missionAssignmentsStorageKey, JSON.stringify(currentAssignments));
    renderOperations();
  }

  function missionPriorityClass(priority) {
    return priority === "vip"
      ? "priority-vip"
      : priority === "high"
        ? "priority-high"
        : "priority-standard";
  }

  function planningCalendarItemMarkup(mission, assignment, catalog) {
    const state = financials(mission, assignment, catalog);
    const activeTrip = mission.id === selectedTripId();

    return `
      <button class="trip-item ${activeTrip ? "active" : ""}" type="button" data-trip-id="${mission.id}">
        <span class="trip-time">${mission.departureTime} - ${mission.arrivalTime}</span>
        <strong class="trip-route">${mission.routeLabel}</strong>
        <div class="trip-meta">
          <span>${mission.code} · ${mission.passengers} passagers · ${formatDistance(mission.distanceKm)}</span>
          <span>${state.lead ? state.lead.name : "Chauffeur a affecter"}</span>
          <span>${
            state.vehicle
              ? state.vehicle.label
              : state.suggestion
                ? `${state.suggestion.label} recommande`
                : "Vehicule a affecter"
          }</span>
        </div>
        <span class="trip-note ${state.ready ? "trip-note-ready" : "trip-note-warning"}">
          ${state.ready ? "Clique pour piloter la mission." : state.blockers[0]}
        </span>
      </button>
    `;
  }

  function planningSelectionMarkup(mission, assignment, catalog) {
    const state = financials(mission, assignment, catalog);

    return `
      <div class="planner-selection-grid">
        <article class="detail-card emphasis-card trip-focus-card">
          <p class="detail-kicker">Mission selectionnee</p>
          <h4>${mission.routeLabel}</h4>
          <p>${mission.clientName} · ${formatDay(mission.serviceDate)} · ${mission.departureTime} - ${mission.arrivalTime}</p>
          <div class="mission-badges">
            <span class="mission-badge neutral">${mission.serviceType}</span>
            <span class="mission-badge ${missionPriorityClass(mission.priority)}">${priorityLabels[mission.priority]}</span>
            <span class="mission-badge neutral">${billingLabels[mission.billingStatus]}</span>
          </div>
          <div class="planner-selection-actions">
            <button class="primary-action small-action" type="button" data-action="edit-mission" data-mission-id="${mission.id}">
              Modifier la mission
            </button>
            <a class="secondary-action small-action" href="trajets.html" data-open-mission-id="${mission.id}" data-open-mission-target="trajets.html">Voir la fiche trajet</a>
            <a class="secondary-action small-action" href="factures.html" data-open-mission-id="${mission.id}" data-open-mission-target="factures.html">Ouvrir la facture</a>
          </div>
        </article>

        <article class="detail-card trip-assignment-card">
          <p class="detail-kicker">Affectation</p>
          <h4>Equipe et vehicule de mission</h4>
          <div class="assignment-form-grid trip-assignment-grid">
            <label class="field-group assignment-field">
              <span>Chauffeur</span>
              <select data-assignment-field="leadCollaboratorId" data-mission-id="${mission.id}">
                ${collaboratorOptions(assignment.leadCollaboratorId, true)}
              </select>
            </label>
            <label class="field-group assignment-field">
              <span>Renfort</span>
              <select data-assignment-field="supportCollaboratorId" data-mission-id="${mission.id}">
                ${collaboratorOptions(assignment.supportCollaboratorId, false)}
              </select>
            </label>
            <label class="field-group assignment-field assignment-field-wide">
              <span>Vehicule</span>
              <select data-assignment-field="vehicleId" data-mission-id="${mission.id}">
                ${vehicleOptions(assignment.vehicleId, catalog, assignment.leadCollaboratorId)}
              </select>
            </label>
          </div>
          <div class="assignment-note-row">
            <p class="assignment-note ${state.ready ? "note-success" : "note-warning"}">
              ${state.ready ? "Mission exploitable avec l'affectation actuelle." : state.blockers[0]}
            </p>
            ${state.notices[0] ? `<p class="assignment-note note-neutral">${state.notices[0]}</p>` : ""}
          </div>
          ${
            state.suggestion && (!state.vehicle || state.vehicle.id !== state.suggestion.id)
              ? `<button class="secondary-action small-action" type="button" data-action="apply-suggestion" data-mission-id="${mission.id}">Basculer sur ${state.suggestion.label}</button>`
              : ""
          }
        </article>

        <article class="detail-card">
          <p class="detail-kicker">Etapes mission</p>
          <h4>Recuperation, activites et destination</h4>
          <div class="stop-list">
            ${buildMissionStopListMarkup(mission)}
          </div>
        </article>

        <article class="detail-card trip-cost-card">
          <p class="detail-kicker">Lecture rapide</p>
          <h4>Cout, vente et consignes</h4>
          <div class="trip-metric-grid">
            <div class="trip-metric-card"><span>Prix vendu</span><strong>${formatCurrency(mission.quotedPrice)}</strong></div>
            <div class="trip-metric-card"><span>Prix conseille</span><strong>${formatCurrency(state.recommendedPrice)}</strong></div>
            <div class="trip-metric-card"><span>Cout total</span><strong>${formatCurrency(state.totalCost, 2)}</strong></div>
            <div class="trip-metric-card"><span>Marge</span><strong>${formatCurrency(state.margin, 2)}</strong></div>
          </div>
          <ul class="feature-list">
            <li>${mission.passengers} passagers et ${mission.luggage} bagages a gerer.</li>
            <li>${formatDistance(mission.distanceKm)} de route pour ${formatDuration(mission.durationMinutes)} de mission totale.</li>
            <li>${getMissionActivityStops(mission).length} etape(s) activite et ${formatCurrency(state.activityBudgetTotal, 2)} de budget alloue.</li>
            <li>${mission.notes}</li>
          </ul>
        </article>
      </div>
    `;
  }

  function buildMissionStopListMarkup(mission) {
    return (mission.stops || [])
      .map((stop, index) => {
        const budgetText =
          stop.kind === "activity" && Number(stop.activityBudget) > 0
            ? `<p class="stop-budget">Budget activite: ${formatCurrency(Number(stop.activityBudget), 2)}</p>`
            : "";
        const meetingText =
          stop.kind === "pickup" && mission.meetingPoint
            ? `<p class="stop-meeting">Rendez-vous: ${mission.meetingPoint}</p>`
            : "";

        return `
          <div class="stop-item">
            <span class="stop-index">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${stop.label}</strong>
              <p>${stop.address}</p>
              ${meetingText}
              ${budgetText}
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderPlanningGlobalCalendar(missionsList, currentAssignments, catalog) {
    if (!planningGlobalCalendarGrid || !planningGlobalMonthLabel) {
      return;
    }

    const monthCursor = normalizeCalendarDate(planningCalendarMonthCursor);
    monthCursor.setDate(1);
    planningGlobalMonthLabel.textContent = monthLabel(monthCursor);

    const firstMonthDay = new Date(monthCursor);
    const monthGridStart = getStartOfWeek(firstMonthDay);
    const byDay = missionsList.reduce((map, mission) => {
      if (!map.has(mission.serviceDate)) {
        map.set(mission.serviceDate, []);
      }
      map.get(mission.serviceDate).push(mission);
      return map;
    }, new Map());

    planningGlobalCalendarGrid.innerHTML = Array.from({ length: 42 }, (_, index) => {
      const dayDate = new Date(monthGridStart);
      dayDate.setDate(monthGridStart.getDate() + index);
      const dayKey = toISODate(dayDate);
      const dayMissions = (byDay.get(dayKey) || []).slice().sort((leftMission, rightMission) =>
        `${leftMission.departureTime}-${leftMission.code}`.localeCompare(
          `${rightMission.departureTime}-${rightMission.code}`
        )
      );
      const currentMonth = sameMonth(dayDate, monthCursor);
      const isToday = dayKey === toISODate(new Date());
      const isVisibleWeek = isDateWithinVisibleWeek(dayKey, activePlanningDate);
      const readyCount = dayMissions.filter((mission) =>
        diagnostics(mission, currentAssignments[mission.id], catalog).ready
      ).length;

      return `
        <article class="planning-global-day ${
          currentMonth ? "current-month" : "outside-month"
        } ${isToday ? "today" : ""} ${isVisibleWeek ? "active-week" : ""}">
          <button
            class="planning-global-day-trigger"
            type="button"
            data-calendar-day="${dayKey}"
            aria-label="Ouvrir la semaine du ${formatDay(dayKey)}"
          >
            <span>${new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(dayDate)}</span>
            <strong>${dayDate.getDate()}</strong>
          </button>

          <div class="planning-global-day-stack">
            ${
              dayMissions.length
                ? `
                  <span class="planning-global-day-summary">${readyCount}/${dayMissions.length} pretes</span>
                  ${dayMissions
                    .slice(0, 3)
                    .map(
                      (mission) => `
                        <button
                          class="planning-global-mission ${mission.id === selectedTripId() ? "active" : ""}"
                          type="button"
                          data-calendar-trip-id="${mission.id}"
                        >
                          <strong>${mission.departureTime} · ${mission.code}</strong>
                          <span>${mission.routeLabel}</span>
                        </button>
                      `
                    )
                    .join("")}
                  ${
                    dayMissions.length > 3
                      ? `
                        <button
                          class="planning-global-more"
                          type="button"
                          data-calendar-day="${dayKey}"
                        >
                          +${dayMissions.length - 3} autres missions
                        </button>
                      `
                      : ""
                  }
                `
                : `<p class="planning-global-day-empty">${
                    currentMonth ? "Aucune mission · cliquer pour en ajouter une" : ""
                  }</p>`
            }
          </div>
        </article>
      `;
    }).join("");
  }

  function renderOperations() {
    const { currentAssignments, catalog, collaboratorsList, missionsList } = assignmentState();

    const weekStart = getStartOfWeek(activePlanningDate);
    const weekDays = Array.from({ length: 7 }, (_, index) => {
      const value = new Date(weekStart);
      value.setDate(weekStart.getDate() + index);
      return toISODate(value);
    });
    const visiblePlanningMissions = missionsList.filter((mission) =>
      weekDays.includes(mission.serviceDate)
    );

    if (planningWeekLabel) {
      planningWeekLabel.textContent = weekLabel(activePlanningDate);
    }

    if (planningBoard || planningDetail || collaboratorPool || vehiclePool || planningAlerts) {
      const byDay = missionsList.reduce((map, mission) => {
        if (!map.has(mission.serviceDate)) {
          map.set(mission.serviceDate, []);
        }
        map.get(mission.serviceDate).push(mission);
        return map;
      }, new Map());

      if (planningBoard) {
        planningBoard.innerHTML = `
          <div class="calendar-week">
            ${weekDays
              .map((day) => {
                const dayMissions = byDay.get(day) || [];
                const readyCount = dayMissions.filter((mission) =>
                  diagnostics(mission, currentAssignments[mission.id], catalog).ready
                ).length;
                const isToday = day === toISODate(new Date());

                return `
                  <section class="calendar-day ${isToday ? "today" : ""}">
                    <div class="calendar-day-head">
                      <div class="calendar-day-name">
                        <strong>${formatDay(day, true)}</strong>
                        ${isToday ? '<span class="today-badge">Aujourd\'hui</span>' : ""}
                      </div>
                      <span class="calendar-day-date">${new Intl.DateTimeFormat("fr-FR", {
                        day: "numeric",
                        month: "long",
                      }).format(new Date(`${day}T00:00:00`))}</span>
                    </div>
                    <span class="planning-day-summary">${readyCount}/${dayMissions.length} pretes</span>
                    <div class="day-trip-list">
                      ${
                        dayMissions.length
                          ? dayMissions
                              .map((mission) =>
                                planningCalendarItemMarkup(
                                  mission,
                                  currentAssignments[mission.id],
                                  catalog
                                )
                              )
                              .join("")
                          : '<p class="calendar-day-empty">Aucune mission planifiee.</p>'
                      }
                    </div>
                  </section>
                `;
              })
              .join("")}
          </div>
        `;
      }

      renderPlanningGlobalCalendar(missionsList, currentAssignments, catalog);

      const states = visiblePlanningMissions.map((mission) =>
        diagnostics(mission, currentAssignments[mission.id], catalog)
      );
      const blockerCount = states.reduce((sum, state) => sum + state.blockers.length, 0);

      if (planningTotalMissionsNode) {
        planningTotalMissionsNode.textContent = String(visiblePlanningMissions.length);
      }
      if (planningCoveredMissionsNode) {
        planningCoveredMissionsNode.textContent = String(states.filter((state) => state.ready).length);
      }
      if (planningTotalPassengersNode) {
        planningTotalPassengersNode.textContent = String(
          visiblePlanningMissions.reduce((sum, mission) => sum + mission.passengers, 0)
        );
      }
      if (planningTotalRevenueNode) {
        planningTotalRevenueNode.textContent = formatCurrency(
          visiblePlanningMissions.reduce((sum, mission) => sum + mission.quotedPrice, 0)
        );
      }
      if (planningOpenAlertsNode) {
        planningOpenAlertsNode.textContent = blockerCount
          ? `${blockerCount} points a traiter`
          : "Aucun point bloquant";
      }
      if (planningReadyVehiclesNode) {
        planningReadyVehiclesNode.textContent = String(
          catalog.filter((vehicle) => vehicle.status === "available").length
        );
      }
      if (planningAvailableCollaboratorsNode) {
        planningAvailableCollaboratorsNode.textContent = String(
          collaboratorsList.filter((collaborator) => collaborator.availability !== "off").length
        );
      }
      if (planningDetail) {
        const mission =
          visiblePlanningMissions.find((item) => item.id === selectedTripId()) ||
          visiblePlanningMissions[0] ||
          null;

        planningDetail.innerHTML = mission
          ? planningSelectionMarkup(mission, currentAssignments[mission.id], catalog)
          : `
              <article class="detail-card">
                <p class="detail-kicker">Mission selectionnee</p>
                <h4>Aucune mission disponible</h4>
                <p>Ajoute une mission pour commencer a remplir le calendrier.</p>
              </article>
            `;
      }
      if (collaboratorPool) {
        collaboratorPool.innerHTML = collaboratorsList
          .map((collaborator) => {
            const personalVehicle = collaborator.personalVehicleId
              ? vehicleById(catalog, collaborator.personalVehicleId)
              : null;

            return `
              <article class="resource-card">
                <div class="resource-card-head">
                  <strong>${collaborator.name}</strong>
                  <span class="resource-status ${
                    collaborator.availability === "off"
                      ? "resource-status-off"
                      : collaborator.availability === "limited"
                        ? "resource-status-limited"
                        : "resource-status-available"
                  }">${collaboratorLabels[collaborator.availability]}</span>
                </div>
                <p class="resource-copy">${collaborator.role} · ${collaborator.languages.join(" / ")}</p>
                <div class="resource-meta-grid">
                  <span>${formatCurrency(collaborator.hourlyRate)} / h</span>
                  <span>${personalVehicle ? personalVehicle.label : "Vehicule a fournir"}</span>
                </div>
              </article>
            `;
          })
          .join("");
      }
      if (vehiclePool) {
        vehiclePool.innerHTML = catalog
          .map(
            (vehicle) => `
              <article class="resource-card resource-card-vehicle">
                <div class="resource-card-head">
                  <strong>${vehicle.label}</strong>
                  <span class="resource-status ${
                    vehicle.status === "available"
                      ? "resource-status-available"
                      : vehicle.status === "in_use"
                        ? "resource-status-limited"
                        : "resource-status-off"
                  }">${vehicleStatusLabels[vehicle.status] || "Indisponible"}</span>
                </div>
                <p class="resource-copy">${vehicle.plate} · ${vehicle.color || "Couleur non renseignee"}</p>
                <div class="resource-meta-grid">
                  <span>${vehicle.seats} places / ${vehicle.luggageCapacity} bagages</span>
                  <span>${ownershipLabels[vehicle.ownershipType]}</span>
                </div>
              </article>
            `
          )
          .join("");
      }
      if (planningAlerts) {
        const alerts = visiblePlanningMissions.flatMap((mission) => {
          const state = diagnostics(mission, currentAssignments[mission.id], catalog);
          return [
            ...state.blockers.map((message) => ({
              code: mission.code,
              message,
              css: "alert-warning",
            })),
            ...state.notices.slice(0, 1).map((message) => ({
              code: mission.code,
              message,
              css: "alert-neutral",
            })),
          ];
        });

        planningAlerts.innerHTML = alerts.length
          ? alerts
              .map(
                (alert) => `
                  <article class="alert-item ${alert.css}">
                    <strong>${alert.code}</strong>
                    <p>${alert.message}</p>
                  </article>
                `
              )
              .join("")
          : `
              <article class="alert-item alert-success">
                <strong>Aucune alerte bloquante</strong>
                <p>Toutes les missions disposent de leur equipe et de leur vehicule.</p>
              </article>
            `;
      }
    }

    if (tripList || tripDetail) {
      const totalRevenue = missionsList.reduce((sum, mission) => sum + mission.quotedPrice, 0);
      const totalDistance = missionsList.reduce((sum, mission) => sum + mission.distanceKm, 0);
      const totalCost = missionsList.reduce(
        (sum, mission) => sum + financials(mission, currentAssignments[mission.id], catalog).totalCost,
        0
      );

      if (tripTotalDistanceNode) {
        tripTotalDistanceNode.textContent = formatDistance(totalDistance);
      }
      if (tripTotalRevenueNode) {
        tripTotalRevenueNode.textContent = formatCurrency(totalRevenue);
      }
      if (tripTotalCostNode) {
        tripTotalCostNode.textContent = formatCurrency(totalCost);
      }
      if (tripAverageMarginNode) {
        tripAverageMarginNode.textContent = formatPercent(
          totalRevenue > 0 ? (totalRevenue - totalCost) / totalRevenue : 0
        );
      }
      if (tripList) {
        tripList.innerHTML = missionsList
          .map((mission) => {
            const state = diagnostics(mission, currentAssignments[mission.id], catalog);
            const activeTrip = mission.id === selectedTripId();

            return `
              <button class="trip-list-item ${activeTrip ? "active" : ""}" type="button" data-trip-id="${mission.id}">
                <span class="trip-list-code">${mission.code}</span>
                <strong>${mission.routeLabel}</strong>
                <span class="trip-list-meta">${formatDay(mission.serviceDate, true)} · ${mission.departureTime}</span>
                <span class="trip-list-meta">${state.lead ? state.lead.name : "Chauffeur a affecter"}</span>
                <span class="trip-list-meta">${
                  state.vehicle ? state.vehicle.label : state.suggestion ? `${state.suggestion.label} (reco)` : "Vehicule a affecter"
                }</span>
              </button>
            `;
          })
          .join("");
      }
      if (tripDetail) {
        const mission =
          missionsList.find((item) => item.id === selectedTripId()) || missionsList[0];
        const assignment = currentAssignments[mission.id];
        const state = financials(mission, assignment, catalog);

        tripDetail.innerHTML = `
          <div class="trip-detail-grid">
            <article class="detail-card emphasis-card trip-focus-card">
              <p class="detail-kicker">Mission selectionnee</p>
              <h4>${mission.routeLabel}</h4>
              <p>${mission.clientName} · ${formatDay(mission.serviceDate)} · ${mission.departureTime} - ${mission.arrivalTime}</p>
              <div class="mission-badges">
                <span class="mission-badge neutral">${mission.serviceType}</span>
                <span class="mission-badge ${
                  mission.priority === "vip"
                    ? "priority-vip"
                    : mission.priority === "high"
                      ? "priority-high"
                      : "priority-standard"
                  }">${priorityLabels[mission.priority]}</span>
                <span class="mission-badge neutral">${billingLabels[mission.billingStatus]}</span>
              </div>
              <div class="planner-selection-actions">
                <button class="primary-action small-action" type="button" data-action="edit-mission" data-mission-id="${mission.id}">
                  Modifier la mission
                </button>
                <a class="secondary-action small-action" href="factures.html" data-open-mission-id="${mission.id}" data-open-mission-target="factures.html">Ouvrir la facture</a>
              </div>
            </article>
            <article class="detail-card trip-assignment-card">
              <p class="detail-kicker">Affectation</p>
              <h4>Equipe et vehicule de mission</h4>
              <div class="assignment-form-grid trip-assignment-grid">
                <label class="field-group assignment-field">
                  <span>Chauffeur</span>
                  <select data-assignment-field="leadCollaboratorId" data-mission-id="${mission.id}">
                    ${collaboratorOptions(assignment.leadCollaboratorId, true)}
                  </select>
                </label>
                <label class="field-group assignment-field">
                  <span>Renfort</span>
                  <select data-assignment-field="supportCollaboratorId" data-mission-id="${mission.id}">
                    ${collaboratorOptions(assignment.supportCollaboratorId, false)}
                  </select>
                </label>
                <label class="field-group assignment-field assignment-field-wide">
                  <span>Vehicule</span>
                  <select data-assignment-field="vehicleId" data-mission-id="${mission.id}">
                    ${vehicleOptions(assignment.vehicleId, catalog, assignment.leadCollaboratorId)}
                  </select>
                </label>
              </div>
              <div class="assignment-note-row">
                <p class="assignment-note ${state.ready ? "note-success" : "note-warning"}">
                  ${state.ready ? "Mission exploitable avec l'affectation actuelle." : state.blockers[0]}
                </p>
                ${state.notices[0] ? `<p class="assignment-note note-neutral">${state.notices[0]}</p>` : ""}
              </div>
              ${
                state.suggestion && (!state.vehicle || state.vehicle.id !== state.suggestion.id)
                  ? `<button class="secondary-action small-action" type="button" data-action="apply-suggestion" data-mission-id="${mission.id}">Basculer sur ${state.suggestion.label}</button>`
                  : ""
              }
            </article>
            <article class="detail-card trip-route-card">
              <p class="detail-kicker">Parcours</p>
              <h4>Itineraire voiture et etapes de mission</h4>
              <div class="trip-route-map-shell">
                <div class="trip-route-map" id="trip-route-map" aria-label="Carte du trajet"></div>
                <p class="trip-route-map-caption">Itineraire routier calcule sur le parcours complet de la mission.</p>
              </div>
              <div class="stop-list">
                ${buildMissionStopListMarkup(mission)}
              </div>
            </article>
            <article class="detail-card trip-cost-card">
              <p class="detail-kicker">Estimation couts</p>
              <h4>Carburant, equipe, activites et frais annexes</h4>
              <div class="trip-metric-grid">
                <div class="trip-metric-card"><span>Carburant</span><strong>${formatCurrency(state.fuelCost, 2)}</strong></div>
                <div class="trip-metric-card"><span>Equipe</span><strong>${formatCurrency(state.staffCost, 2)}</strong></div>
                <div class="trip-metric-card"><span>Activites</span><strong>${formatCurrency(state.activityBudgetTotal, 2)}</strong></div>
                <div class="trip-metric-card"><span>Peages + parking</span><strong>${formatCurrency(mission.tolls + mission.parking, 2)}</strong></div>
                <div class="trip-metric-card"><span>Cout total</span><strong>${formatCurrency(state.totalCost, 2)}</strong></div>
              </div>
              <p class="trip-formula-note">
                Simulation ${state.vehicle ? "sur le vehicule affecte" : "sur le vehicule recommande"}:
                ${state.activeVehicle ? state.activeVehicle.label : "vehicule moyen"} ·
                ${state.activeVehicle ? state.activeVehicle.consumption : 7.5}
                ${state.activeVehicle ? state.activeVehicle.consumptionUnit : "L/100 km"} ·
                charge estimee ${Math.round((state.loadFactor - 1) * 100)}% ·
                conduite ${formatDuration(state.activeVehicle ? mission.driveDurationMinutes || mission.durationMinutes : mission.durationMinutes)}.
              </p>
            </article>
            <article class="detail-card trip-billing-card">
              <p class="detail-kicker">Facturation</p>
              <h4>Prix saisi, prix conseille et marge estimee</h4>
              <div class="trip-metric-grid">
                <div class="trip-metric-card"><span>Prix vendu</span><strong>${formatCurrency(mission.quotedPrice)}</strong></div>
                <div class="trip-metric-card"><span>Prix conseille</span><strong>${formatCurrency(state.recommendedPrice)}</strong></div>
                <div class="trip-metric-card"><span>Marge brute</span><strong>${formatCurrency(state.margin, 2)}</strong></div>
                <div class="trip-metric-card"><span>Taux de marge</span><strong>${formatPercent(state.marginRate)}</strong></div>
                <div class="trip-metric-card"><span>Marge cible</span><strong>${formatPercent(state.targetMarginRate)}</strong></div>
                <div class="trip-metric-card"><span>Prix / passager</span><strong>${formatCurrency(mission.quotedPrice / mission.passengers, 2)}</strong></div>
              </div>
            </article>
            <article class="detail-card trip-constraints-card">
              <p class="detail-kicker">Infos mission</p>
              <h4>Passagers, bagages et notes</h4>
              <ul class="feature-list">
                <li>${mission.passengers} passagers et ${mission.luggage} bagages a gerer.</li>
                <li>${formatDistance(mission.distanceKm)} de route pour ${formatDuration(mission.durationMinutes)} de mission totale.</li>
                <li>${getMissionActivityStops(mission).length} etape(s) activite et ${formatCurrency(state.activityBudgetTotal, 2)} de budget alloue.</li>
                <li>${mission.notes}</li>
                <li>Statut facturation: ${billingLabels[mission.billingStatus]}.</li>
              </ul>
            </article>
          </div>
        `;

        renderTripRouteMap(mission);
      }
    }
  }

  document.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }

    const missionId = event.target.dataset.missionId;
    const field = event.target.dataset.assignmentField;
    if (!missionId || !field) {
      return;
    }

    updateAssignment(missionId, field, event.target.value);
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const closeGlobalCalendar = event.target.closest("[data-close-global-calendar]");
    if (closeGlobalCalendar) {
      closePlanningGlobalCalendar();
      return;
    }

    const globalMissionButton = event.target.closest("[data-calendar-trip-id]");
    if (globalMissionButton) {
      const missionId = globalMissionButton.getAttribute("data-calendar-trip-id");
      const mission = missionCatalog().find((item) => item.id === missionId);
      if (!mission) {
        return;
      }

      setActivePlanningDate(mission.serviceDate);
      setPlanningCalendarMonthCursor(mission.serviceDate);
      saveSelectedTrip(mission.id);
      closePlanningGlobalCalendar();
      renderOperations();
      return;
    }

    const globalDayButton = event.target.closest("[data-calendar-day]");
    if (globalDayButton) {
      const dayKey = globalDayButton.getAttribute("data-calendar-day");
      const dayMissions = missionCatalog()
        .filter((mission) => mission.serviceDate === dayKey)
        .sort((leftMission, rightMission) =>
          `${leftMission.departureTime}-${leftMission.code}`.localeCompare(
            `${rightMission.departureTime}-${rightMission.code}`
          )
        );

      if (!dayMissions.length) {
        openMissionFormForDate(dayKey);
        return;
      }

      setActivePlanningDate(dayKey);
      setPlanningCalendarMonthCursor(dayKey);
      saveSelectedTrip(dayMissions[0].id);
      closePlanningGlobalCalendar();
      renderOperations();
      return;
    }

    const tripButton = event.target.closest("[data-trip-id]");
    if (tripButton) {
      const missionId = tripButton.getAttribute("data-trip-id");
      const mission = missionCatalog().find((item) => item.id === missionId);
      if (mission) {
        setActivePlanningDate(mission.serviceDate);
      }
      saveSelectedTrip(missionId);
      renderOperations();
      return;
    }

    const editMissionButton = event.target.closest("[data-action='edit-mission']");
    if (editMissionButton) {
      const missionId = editMissionButton.getAttribute("data-mission-id");
      const mission = missionCatalog().find((item) => item.id === missionId);
      if (!mission) {
        return;
      }

      saveSelectedTrip(mission.id);
      fillMissionForm(mission);
      setMissionFormOpen(true);
      return;
    }

    const recommendationButton = event.target.closest("[data-action='apply-suggestion']");
    if (recommendationButton) {
      applyRecommendation(recommendationButton.getAttribute("data-mission-id"));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && planningGlobalCalendar && !planningGlobalCalendar.hidden) {
      closePlanningGlobalCalendar();
    }
  });

  if (missionStopsList) {
    missionStopsList.addEventListener("input", (event) => {
      if (!(event.target instanceof HTMLInputElement)) {
        return;
      }

      const stopId = event.target.dataset.stopId;
      const field = event.target.dataset.stopField;
      if (!stopId || !field) {
        return;
      }

      missionStopDrafts = missionStopDrafts.map((stop) =>
        stop.id === stopId
          ? {
              ...stop,
              [field]: event.target.value,
              ...(field === "address" ? { placeId: "", coords: null } : {}),
            }
          : stop
      );

      if (field === "address") {
        clearAddressInputMetadata(event.target);
      }

      updateMissionPricingPreview();
    });

    missionStopsList.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const removeButton = event.target.closest(".mission-stop-remove");
      if (!removeButton) {
        return;
      }

      const stopId = removeButton.getAttribute("data-stop-id");
      missionStopDrafts = missionStopDrafts.filter((stop) => stop.id !== stopId);
      if (missionStopDrafts.length === 0) {
        missionStopDrafts = [createEmptyMissionStop()];
      }
      renderMissionStopsBuilder();
    });
  }

  if (addMissionStopButton) {
    addMissionStopButton.addEventListener("click", () => {
      missionStopDrafts.push(createEmptyMissionStop());
      renderMissionStopsBuilder();
    });
  }

  [
    missionQuotedPriceInput,
    missionTargetMarginInput,
    missionTollsInput,
    missionParkingInput,
  ].forEach((inputNode) => {
    if (!inputNode) {
      return;
    }

    inputNode.addEventListener("input", () => {
      updateMissionPricingPreview();
    });
  });

  [missionPickupAddressInput, missionDestinationAddressInput].forEach((inputNode) => {
    if (!inputNode) {
      return;
    }

    inputNode.addEventListener("input", () => {
      clearAddressInputMetadata(inputNode);
    });
  });

  if (missionForm) {
    missionForm.addEventListener("submit", handleMissionSubmit);
  }

  if (openMissionFormButton) {
    openMissionFormButton.addEventListener("click", () => {
      resetMissionForm();
      setMissionFormOpen(true);
    });
  }

  if (openGlobalCalendarButton) {
    openGlobalCalendarButton.addEventListener("click", () => {
      openPlanningGlobalCalendar();
      renderOperations();
    });
  }

  if (closeGlobalCalendarButton) {
    closeGlobalCalendarButton.addEventListener("click", () => {
      closePlanningGlobalCalendar();
    });
  }

  if (planningGlobalPrevMonthButton) {
    planningGlobalPrevMonthButton.addEventListener("click", () => {
      const previousMonth = new Date(planningCalendarMonthCursor);
      previousMonth.setMonth(previousMonth.getMonth() - 1);
      setPlanningCalendarMonthCursor(previousMonth);
      renderOperations();
    });
  }

  if (planningGlobalNextMonthButton) {
    planningGlobalNextMonthButton.addEventListener("click", () => {
      const nextMonth = new Date(planningCalendarMonthCursor);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setPlanningCalendarMonthCursor(nextMonth);
      renderOperations();
    });
  }

  if (planningResetWeekButton) {
    planningResetWeekButton.addEventListener("click", () => {
      setActivePlanningDate(new Date());
      setPlanningCalendarMonthCursor(new Date());
      closePlanningGlobalCalendar();
      renderOperations();
    });
  }

  if (cancelMissionFormButton) {
    cancelMissionFormButton.addEventListener("click", () => {
      resetMissionForm();
      setMissionFormOpen(false);
    });
  }

  if (resetMissionFormButton) {
    resetMissionFormButton.addEventListener("click", () => {
      resetMissionForm();
    });
  }

  resetMissionForm();
  setActivePlanningDate(new Date());
  setPlanningCalendarMonthCursor(new Date());
  mountPlanningGlobalCalendarToBody();
  void setupMissionAddressAutocompletes();
  renderOperations();
}
