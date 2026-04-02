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
const vehicleCollaboratorField = document.querySelector("#vehicle-collaborator-field");
const vehicleCollaboratorInput = document.querySelector("#vehicle-collaborator");
const vehicleCollaboratorHelp = document.querySelector("#vehicle-collaborator-help");
const vehicleTypeFilterInput = document.querySelector("#vehicle-type-filter");
const vehicleStatusFilterInput = document.querySelector("#vehicle-status-filter");
const resetVehicleFiltersButton = document.querySelector("#reset-vehicle-filters");
const vehicleFilterSummary = document.querySelector("#vehicle-filter-summary");
const vehicleRentalEndField = document.querySelector("#vehicle-rental-end-field");
const vehicleRentalEndInput = document.querySelector("#vehicle-rental-end-date");
const vehicleConsumptionInput = document.querySelector("#vehicle-consumption");
const vehicleConsumptionUnitInput = document.querySelector("#vehicle-consumption-unit");
const collaboratorForm = document.querySelector("#collaborator-form-card");
const collaboratorList = document.querySelector("#collaborator-list");
const addCollaboratorButton = document.querySelector("#add-collaborator-button");
const openCollaboratorFormButton = document.querySelector("#open-collaborator-form");
const cancelCollaboratorFormButton = document.querySelector("#cancel-collaborator-form");
const resetCollaboratorFormButton = document.querySelector("#reset-collaborator-form");
const collaboratorFormMessage = document.querySelector("#collaborator-form-message");
const collaboratorCountSummary = document.querySelector("#collaborator-count-summary");
const guideCountSummary = document.querySelector("#guide-count-summary");
const driverCountSummary = document.querySelector("#driver-count-summary");
const languageCountSummary = document.querySelector("#language-count-summary");
const collaboratorFormKicker = document.querySelector("#collaborator-form-kicker");
const collaboratorFormTitle = document.querySelector("#collaborator-form-title");
const submitCollaboratorFormButton = document.querySelector("#submit-collaborator-form");
const collaboratorFirstNameInput = document.querySelector("#collaborator-first-name");
const collaboratorLastNameInput = document.querySelector("#collaborator-last-name");
const collaboratorRoleInput = document.querySelector("#collaborator-role");
const collaboratorStatusInput = document.querySelector("#collaborator-status");
const collaboratorVehicleBuilder = document.querySelector("#collaborator-vehicle-builder");
const collaboratorLinkedVehicles = document.querySelector("#collaborator-linked-vehicles");
const collaboratorLinkedVehicleList = document.querySelector("#collaborator-linked-vehicle-list");
const toggleCollaboratorVehicleButton = document.querySelector("#toggle-collaborator-vehicle");
const collaboratorVehicleFields = document.querySelector("#collaborator-vehicle-fields");
const collaboratorVehicleBrandInput = document.querySelector("#collaborator-vehicle-brand");
const collaboratorVehicleModelInput = document.querySelector("#collaborator-vehicle-model");
const collaboratorVehicleColorInput = document.querySelector("#collaborator-vehicle-color");
const collaboratorVehiclePlateInput = document.querySelector("#collaborator-vehicle-plate");
const collaboratorVehicleStatusInput = document.querySelector("#collaborator-vehicle-status");
const collaboratorVehicleConsumptionInput = document.querySelector("#collaborator-vehicle-consumption");
const collaboratorVehicleConsumptionUnitInput = document.querySelector("#collaborator-vehicle-consumption-unit");
const collaboratorLanguageNameInput = document.querySelector("#collaborator-language-name");
const collaboratorLanguageLevelInput = document.querySelector("#collaborator-language-level");
const collaboratorLanguageSuggestions = document.querySelector("#collaborator-language-suggestions");
const addCollaboratorLanguageButton = document.querySelector("#add-collaborator-language");
const collaboratorLanguageList = document.querySelector("#collaborator-language-list");
const invoiceForm = document.querySelector("#invoice-form-card");
const invoiceRecordList = document.querySelector("#invoice-record-list");
const invoicePreview = document.querySelector("#invoice-preview");
const invoiceTypeFilterInput = document.querySelector("#invoice-type-filter");
const invoicePaymentStatusFilterInput = document.querySelector("#invoice-payment-status-filter");
const resetInvoiceFiltersButton = document.querySelector("#reset-invoice-filters");
const invoiceFilterSummary = document.querySelector("#invoice-filter-summary");
const addInvoiceButton = document.querySelector("#add-invoice-button");
const cancelInvoiceFormButton = document.querySelector("#cancel-invoice-form");
const resetInvoiceFormButton = document.querySelector("#reset-invoice-form");
const invoiceFormKicker = document.querySelector("#invoice-form-kicker");
const invoiceFormTitle = document.querySelector("#invoice-form-title");
const submitInvoiceFormButton = document.querySelector("#submit-invoice-form");
const invoiceFormMessage = document.querySelector("#invoice-form-message");
const invoiceCountSummary = document.querySelector("#invoice-count-summary");
const invoiceClientSummary = document.querySelector("#invoice-client-summary");
const invoiceTotalSummary = document.querySelector("#invoice-total-summary");
const invoicePaymentSummary = document.querySelector("#invoice-payment-summary");
const invoiceTypeInput = document.querySelector("#invoice-type");
const invoiceNumberInput = document.querySelector("#invoice-number");
const invoiceIssuedAtInput = document.querySelector("#invoice-issued-at");
const invoicePaymentMethodInput = document.querySelector("#invoice-payment-method");
const invoiceSettledAtInput = document.querySelector("#invoice-settled-at");
const invoiceExternalFlowField = document.querySelector("#invoice-external-flow-field");
const invoiceExternalFlowInput = document.querySelector("#invoice-external-flow");
const invoiceAttachmentField = document.querySelector("#invoice-attachment-field");
const invoiceAttachmentInput = document.querySelector("#invoice-attachment");
const invoiceAttachmentHelp = document.querySelector("#invoice-attachment-help");
const invoiceCoreSectionText = document.querySelector("#invoice-core-section-text");
const invoiceSellerSectionTitle = document.querySelector("#invoice-seller-section-title");
const invoiceSellerSectionText = document.querySelector("#invoice-seller-section-text");
const invoiceClientSection = document.querySelector("#invoice-client-section");
const invoiceClientSectionText = document.querySelector("#invoice-client-section-text");
const invoiceServiceSection = document.querySelector("#invoice-service-section");
const invoiceServiceSectionTitle = document.querySelector("#invoice-service-section-title");
const invoiceServiceSectionText = document.querySelector("#invoice-service-section-text");
const invoiceServiceDescriptionLabel = document.querySelector("#invoice-service-description-label");
const invoiceServiceDateField = document.querySelector("#invoice-service-date-field");
const invoiceServicePickupField = document.querySelector("#invoice-service-pickup-field");
const invoiceServiceDestinationField = document.querySelector("#invoice-service-destination-field");
const invoiceServicePassengersField = document.querySelector("#invoice-service-passengers-field");
const invoiceServiceDistanceField = document.querySelector("#invoice-service-distance-field");
const invoiceSellerNameInput = document.querySelector("#invoice-seller-name");
const invoiceSellerAddressInput = document.querySelector("#invoice-seller-address");
const invoiceSellerLocationInput = document.querySelector("#invoice-seller-location");
const invoiceSellerPhoneInput = document.querySelector("#invoice-seller-phone");
const invoiceSellerEvtcInput = document.querySelector("#invoice-seller-evtc");
const invoiceSellerSiretInput = document.querySelector("#invoice-seller-siret");
const invoiceClientNameInput = document.querySelector("#invoice-client-name");
const invoiceClientAddressInput = document.querySelector("#invoice-client-address");
const invoiceClientLocationInput = document.querySelector("#invoice-client-location");
const invoiceClientSiretInput = document.querySelector("#invoice-client-siret");
const invoiceClientVatInput = document.querySelector("#invoice-client-vat");
const invoiceClientContactInput = document.querySelector("#invoice-client-contact");
const invoiceClientEmailInput = document.querySelector("#invoice-client-email");
const invoiceClientPhoneInput = document.querySelector("#invoice-client-phone");
const invoiceServiceDescriptionInput = document.querySelector("#invoice-service-description");
const invoiceServiceDateInput = document.querySelector("#invoice-service-date");
const invoiceServicePickupInput = document.querySelector("#invoice-service-pickup");
const invoiceServiceDestinationInput = document.querySelector("#invoice-service-destination");
const invoiceServicePassengersInput = document.querySelector("#invoice-service-passengers");
const invoiceServiceDistanceInput = document.querySelector("#invoice-service-distance");
const invoiceTotalHtInput = document.querySelector("#invoice-total-ht");
const invoiceVat10Input = document.querySelector("#invoice-vat-10");
const invoiceVat20Input = document.querySelector("#invoice-vat-20");
const invoiceInsuranceInput = document.querySelector("#invoice-insurance");
const invoiceTaxNoteInput = document.querySelector("#invoice-tax-note");

const vehiclesStorageKey = "route-pilote-vehicles";
const collaboratorsStorageKey = "route-pilote-collaborators";
const invoicesStorageKey = "route-pilote-invoices";
const invoiceAttachmentsDbName = "route-pilote-invoice-attachments";
const invoiceAttachmentsStoreName = "attachments";
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
let editingCollaboratorIndex = -1;
let collaboratorFormLanguages = [];
let collaboratorLanguageSuggestionItems = [];
let activeCollaboratorLanguageSuggestionIndex = -1;
let editingCollaboratorVehicleId = "";
let selectedInvoiceId = "";
let editingInvoiceId = "";
let currentInvoiceAttachmentMeta = null;

const allVehicleTypeFilters = new Set(["all", "owner", "collaborator", "rental"]);
const allVehicleStatusFilters = new Set(["all", "available", "in_use", "repair", "rental_ended"]);
const allInvoiceTypeFilters = new Set(["all", "client", "external"]);
const allInvoicePaymentStatusFilters = new Set(["all", "paid", "unpaid"]);
const collaboratorRoleLabels = {
  guide: "Guide",
  driver: "Chauffeur",
};
const collaboratorAvailabilityLabels = {
  available: "Disponible",
  on_mission: "En mission",
  unavailable: "Indisponible",
};
const invoicePaymentMethodLabels = {
  wire: "Virement",
  card: "Carte",
  cash: "Especes",
  cheque: "Cheque",
};
const invoiceTypeLabels = {
  client: "Facture client",
  external: "Facture externe",
};
const invoicePaymentStatusLabels = {
  paid: "Reglee",
  unpaid: "Non reglee",
};
const invoiceExternalFlowLabels = {
  payable: "A payer",
  receivable: "A recevoir",
};
const collaboratorLanguageLevelLabels = {
  basic: "Notions",
  intermediate: "Intermediaire",
  conversational: "Conversationnel",
  fluent: "Courant",
};
const collaboratorLanguageCatalog = [
  "Francais",
  "Anglais",
  "Espagnol",
  "Italien",
  "Allemand",
  "Portugais",
  "Neerlandais",
  "Arabe",
  "Russe",
  "Chinois",
  "Mandarin",
  "Japonais",
  "Coreen",
  "Turc",
  "Grec",
  "Hebreu",
  "Hindi",
  "Polonais",
  "Ukrainien",
  "Roumain",
  "Bulgare",
  "Croate",
  "Serbe",
  "Tcheque",
  "Hongrois",
  "Danois",
  "Suedois",
  "Norvegien",
];
const calendarWeekdayFormatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
});
const calendarDayFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
});
const rentalEndDateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const invoiceDateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const invoiceCurrencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const serverBackedCollections = [
  { storageKey: vehiclesStorageKey, collectionName: "vehicles" },
  { storageKey: collaboratorsStorageKey, collectionName: "collaborators" },
  { storageKey: invoicesStorageKey, collectionName: "invoices" },
];
const serverBackedCollectionByStorageKey = new Map(
  serverBackedCollections.map(({ storageKey, collectionName }) => [storageKey, collectionName])
);
let routePiloteServerSyncQueue = Promise.resolve();

function canUseServerDataApi() {
  return typeof window.fetch === "function" && window.location.protocol !== "file:";
}

async function fetchServerJson(path, options = {}) {
  const response = await window.fetch(path, {
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
    cache: "no-store",
    ...options,
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch (error) {
    payload = {};
  }

  if (!response.ok) {
    const message =
      typeof payload?.error === "string" && payload.error.trim()
        ? payload.error.trim()
        : "Erreur de synchronisation serveur.";
    throw new Error(message);
  }

  return payload;
}

function setStoredArrayWithoutServerSync(storageKey, items) {
  window.localStorage.setItem(storageKey, JSON.stringify(items));
}

function getServerCollectionName(storageKey) {
  return serverBackedCollectionByStorageKey.get(storageKey) || "";
}

async function syncServerCollection(collectionName, items) {
  if (!collectionName || !canUseServerDataApi()) {
    return;
  }

  await fetchServerJson(`/api/${collectionName}`, {
    method: "PUT",
    body: JSON.stringify({ items }),
  });
}

function queueServerCollectionSync(storageKey, items) {
  const collectionName = getServerCollectionName(storageKey);
  if (!collectionName || !canUseServerDataApi()) {
    return;
  }

  const snapshot = JSON.parse(JSON.stringify(items));
  routePiloteServerSyncQueue = routePiloteServerSyncQueue
    .catch(() => undefined)
    .then(() => syncServerCollection(collectionName, snapshot))
    .catch(() => undefined);
}

async function blobToBase64(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = "";
  const chunkSize = 32768;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return window.btoa(binary);
}

async function saveInvoiceAttachmentToServer(file, invoiceId, existingAttachmentId = "") {
  if (!(file instanceof Blob) || !invoiceId || !canUseServerDataApi()) {
    return null;
  }

  const attachmentPayload = {
    invoiceId,
    existingAttachmentId,
    fileName: file instanceof File ? file.name : "facture",
    contentType: file.type || "application/octet-stream",
    bytesBase64: await blobToBase64(file),
  };
  const response = await fetchServerJson("/api/invoice-attachments", {
    method: "POST",
    body: JSON.stringify(attachmentPayload),
  });

  return normalizeInvoiceAttachment(response?.attachment);
}

async function deleteInvoiceAttachmentFromServer(invoiceId) {
  if (!invoiceId || !canUseServerDataApi()) {
    return;
  }

  await fetchServerJson(`/api/invoices/${encodeURIComponent(invoiceId)}/attachment`, {
    method: "DELETE",
  });
}

function getInvoiceAttachmentUrl(attachment, { download = false } = {}) {
  const normalizedAttachment = normalizeInvoiceAttachment(attachment);
  const baseUrl = cleanInputValue(normalizedAttachment?.url);
  if (!baseUrl) {
    return "";
  }

  return download ? `${baseUrl}?download=1` : baseUrl;
}

async function migrateLocalInvoiceAttachmentsToServer(invoices) {
  const migratedInvoices = [];

  for (const storedInvoice of invoices) {
    const invoice = normalizeInvoice(storedInvoice);
    const attachment = normalizeInvoiceAttachment(invoice.attachment);
    if (!attachment) {
      migratedInvoices.push(invoice);
      continue;
    }

    try {
      const localAttachment = await getStoredInvoiceAttachmentLocal(attachment.id);
      if (!localAttachment?.blob) {
        migratedInvoices.push({ ...invoice, attachment: null });
        continue;
      }

      const uploadedAttachment = await saveInvoiceAttachmentToServer(
        localAttachment.blob,
        invoice.id,
        attachment.id
      );
      migratedInvoices.push({
        ...invoice,
        attachment: uploadedAttachment,
      });
    } catch (error) {
      migratedInvoices.push(invoice);
    }
  }

  return migratedInvoices;
}

async function bootstrapServerBackedData() {
  if (!canUseServerDataApi()) {
    return;
  }

  const response = await fetchServerJson("/api/bootstrap");
  const payload = response?.data && typeof response.data === "object" ? response.data : {};
  const serverState = {
    collaborators: Array.isArray(payload.collaborators) ? payload.collaborators : [],
    vehicles: Array.isArray(payload.vehicles) ? payload.vehicles : [],
    invoices: Array.isArray(payload.invoices) ? payload.invoices : [],
  };
  const localState = {
    collaborators: readStoredArray(collaboratorsStorageKey),
    vehicles: readStoredArray(vehiclesStorageKey),
    invoices: readStoredArray(invoicesStorageKey),
  };
  const shouldSeedServer =
    serverState.collaborators.length === 0 &&
    serverState.vehicles.length === 0 &&
    serverState.invoices.length === 0 &&
    (localState.collaborators.length > 0 ||
      localState.vehicles.length > 0 ||
      localState.invoices.length > 0);

  if (shouldSeedServer) {
    const migratedInvoices = await migrateLocalInvoiceAttachmentsToServer(localState.invoices);
    setStoredArrayWithoutServerSync(collaboratorsStorageKey, localState.collaborators);
    setStoredArrayWithoutServerSync(vehiclesStorageKey, localState.vehicles);
    setStoredArrayWithoutServerSync(invoicesStorageKey, migratedInvoices);
    await syncServerCollection("collaborators", localState.collaborators);
    await syncServerCollection("vehicles", localState.vehicles);
    await syncServerCollection("invoices", migratedInvoices);
    return;
  }

  setStoredArrayWithoutServerSync(collaboratorsStorageKey, serverState.collaborators);
  setStoredArrayWithoutServerSync(vehiclesStorageKey, serverState.vehicles);
  setStoredArrayWithoutServerSync(invoicesStorageKey, serverState.invoices);
}

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
const defaultInvoiceRecord = {
  id: "invoice-sample-0027",
  number: "0027",
  issuedAt: "2025-12-16",
  invoiceType: "client",
  sourceLabel: "Facture client",
  paymentStatus: "unpaid",
  settledAt: "",
  externalFlow: "payable",
  paymentMethod: "wire",
  seller: {
    name: "Activite VTC Exemple",
    address: "12, avenue du Centre",
    location: "75000 Paris",
    phone: "0612345678",
    evtc: "EVTC000000000",
    siret: "12345678900010",
  },
  client: {
    name: "Societe exemple",
    address: "24, rue des Voyages",
    location: "69000 Lyon",
    siret: "12345678900011",
    vat: "FR12345678901",
    contact: "Sophie Martin",
    email: "contact@client-exemple.fr",
    phone: "0601020304",
  },
  service: {
    description: "Transfert touristique prive",
    date: "2025-12-12",
    pickup: "Gare centrale",
    destination: "Centre-ville",
    passengers: 4,
    distanceKm: 35,
  },
  totals: {
    ht: 120,
    vat10: 0,
    vat20: 0,
    ttc: 120,
  },
  taxNote: "TVA non applicable conformement a l'article 293 B du CGI.",
  insurance: "Assurance VTC exemple",
  attachment: null,
};

function capitalizeLabel(label) {
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function escapeHtml(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[&<>"']/g, (character) => {
    const escapedCharacters = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return escapedCharacters[character] || character;
  });
}

function cleanInputValue(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ");
}

function getDateInputValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
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

      const weekday = capitalizeLabel(calendarWeekdayFormatter.format(currentDate));
      const displayDate = calendarDayFormatter.format(currentDate);
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
  return readStoredArray(vehiclesStorageKey);
}

function saveStoredVehicles(vehicles) {
  saveStoredArray(vehiclesStorageKey, vehicles);
}

function readStoredArray(storageKey) {
  try {
    const rawItems = window.localStorage.getItem(storageKey);
    if (!rawItems) {
      return [];
    }

    const parsedItems = JSON.parse(rawItems);
    return Array.isArray(parsedItems) ? parsedItems : [];
  } catch (error) {
    return [];
  }
}

function saveStoredArray(storageKey, items) {
  setStoredArrayWithoutServerSync(storageKey, items);
  queueServerCollectionSync(storageKey, items);
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

function formatDisplayWords(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
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

  return rentalEndDateFormatter.format(displayDate);
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

function getDriverCollaborators() {
  const driverCollaborators = [];

  getStoredCollaborators().forEach((storedCollaborator) => {
    const collaborator = normalizeCollaborator(storedCollaborator);

    if (normalizeCollaboratorRole(collaborator.role) === "driver") {
      driverCollaborators.push(collaborator);
    }
  });

  return driverCollaborators;
}

function renderVehicleCollaboratorOptions(selectedCollaboratorId = "") {
  if (!vehicleCollaboratorInput || !vehicleCollaboratorHelp) {
    return;
  }

  const driverCollaborators = getDriverCollaborators();
  const selectedId =
    typeof selectedCollaboratorId === "string" ? selectedCollaboratorId.trim() : "";
  let optionsMarkup = '<option value="">Choisir un chauffeur</option>';

  if (driverCollaborators.length === 0) {
    vehicleCollaboratorInput.innerHTML =
      '<option value="">Aucun chauffeur disponible</option>';
    vehicleCollaboratorInput.disabled = true;
    vehicleCollaboratorInput.required = false;
    vehicleCollaboratorHelp.textContent =
      "Ajoutez d'abord un collaborateur avec la fonction Chauffeur dans Mes Collaborateurs.";
    return;
  }

  driverCollaborators.forEach((collaborator) => {
    const collaboratorId = collaborator.id || "";
    const collaboratorName = getCollaboratorDisplayName(collaborator);
    const isSelected = selectedId && collaboratorId === selectedId;
    optionsMarkup += `
      <option value="${escapeHtml(collaboratorId)}"${isSelected ? " selected" : ""}>
        ${escapeHtml(collaboratorName)}
      </option>
    `;
  });

  if (
    selectedId &&
    !driverCollaborators.some((collaborator) => collaborator.id === selectedId)
  ) {
    optionsMarkup += `
      <option value="${escapeHtml(selectedId)}" selected>
        Collaborateur lie non disponible
      </option>
    `;
    vehicleCollaboratorHelp.textContent =
      "Le collaborateur lie a ce vehicule n'apparait plus dans la liste des chauffeurs actifs.";
  } else {
    vehicleCollaboratorHelp.textContent =
      "Choisissez un chauffeur deja cree dans Mes Collaborateurs.";
  }

  vehicleCollaboratorInput.innerHTML = optionsMarkup;
  vehicleCollaboratorInput.disabled = false;
}

function syncVehicleCollaboratorFieldVisibility(options = {}) {
  if (!vehicleTypeInput || !vehicleCollaboratorField || !vehicleCollaboratorInput) {
    return;
  }

  const { clearWhenHidden = true, selectedCollaboratorId = "" } = options;
  const isCollaboratorVehicle = normalizeVehicleType(vehicleTypeInput.value) === "collaborator";

  vehicleCollaboratorField.hidden = !isCollaboratorVehicle;
  vehicleCollaboratorInput.required = isCollaboratorVehicle;

  if (!isCollaboratorVehicle) {
    if (clearWhenHidden) {
      vehicleCollaboratorInput.value = "";
    }
    vehicleCollaboratorInput.disabled = false;
    return;
  }

  renderVehicleCollaboratorOptions(selectedCollaboratorId || vehicleCollaboratorInput.value);
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
    linkedCollaboratorId:
      typeof safeVehicle.linkedCollaboratorId === "string"
        ? safeVehicle.linkedCollaboratorId.trim()
        : "",
    linkedCollaboratorName:
      typeof safeVehicle.linkedCollaboratorName === "string"
        ? safeVehicle.linkedCollaboratorName.trim()
        : "",
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
    !vehicleConsumptionUnitInput ||
    !vehicleCollaboratorInput
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
  vehicleCollaboratorInput.value = vehicle.linkedCollaboratorId || "";
  syncRentalEndFieldVisibility({ clearWhenHidden: false });
  syncVehicleCollaboratorFieldVisibility({
    clearWhenHidden: false,
    selectedCollaboratorId: vehicle.linkedCollaboratorId || "",
  });
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
  syncVehicleCollaboratorFieldVisibility();
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
              ${
                vehicle.linkedCollaboratorName
                  ? `
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Collaborateur</span>
                <span class="vehicle-meta-value">${escapeHtml(vehicle.linkedCollaboratorName)}</span>
              </div>
              `
                  : ""
              }
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
    !vehicleConsumptionUnitInput ||
    !vehicleCollaboratorInput
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
  const linkedCollaboratorId =
    vehicleType === "collaborator" ? vehicleCollaboratorInput.value.trim() : "";
  const linkedCollaborator = linkedCollaboratorId
    ? getDriverCollaborators().find((collaborator) => collaborator.id === linkedCollaboratorId)
    : null;

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

  if (vehicleType === "collaborator" && !linkedCollaborator) {
    showVehicleFormMessage(
      "Merci de choisir un chauffeur deja cree pour ce vehicule collaborateur.",
      "error"
    );
    return;
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
    linkedCollaboratorId: linkedCollaborator ? linkedCollaborator.id : "",
    linkedCollaboratorName: linkedCollaborator
      ? getCollaboratorDisplayName(linkedCollaborator)
      : "",
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

function getStoredCollaborators() {
  return readStoredArray(collaboratorsStorageKey);
}

function saveStoredCollaborators(collaborators) {
  saveStoredArray(collaboratorsStorageKey, collaborators);
}

function normalizeCollaboratorRole(value) {
  const normalizedValue = normalizeTextValue(value);

  if (normalizedValue === "chauffeur" || normalizedValue === "driver") {
    return "driver";
  }

  return "guide";
}

function normalizeCollaboratorAvailability(value) {
  const normalizedValue = normalizeTextValue(value);

  if (normalizedValue === "on_mission" || normalizedValue === "en mission") {
    return "on_mission";
  }

  if (
    normalizedValue === "unavailable" ||
    normalizedValue === "indisponible" ||
    normalizedValue === "absent"
  ) {
    return "unavailable";
  }

  return "available";
}

function normalizeCollaboratorLanguageLevel(value) {
  const normalizedValue = normalizeTextValue(value);

  if (
    normalizedValue === "intermediate" ||
    normalizedValue === "intermediaire"
  ) {
    return "intermediate";
  }

  if (
    normalizedValue === "conversational" ||
    normalizedValue === "conversationnel"
  ) {
    return "conversational";
  }

  if (normalizedValue === "fluent" || normalizedValue === "courant") {
    return "fluent";
  }

  return "basic";
}

function getCollaboratorRoleLabel(role) {
  return collaboratorRoleLabels[normalizeCollaboratorRole(role)] || collaboratorRoleLabels.guide;
}

function getCollaboratorAvailabilityLabel(availabilityStatus) {
  return (
    collaboratorAvailabilityLabels[
      normalizeCollaboratorAvailability(availabilityStatus)
    ] || collaboratorAvailabilityLabels.available
  );
}

function getCollaboratorAvailabilityClass(availabilityStatus) {
  const normalizedStatus = normalizeCollaboratorAvailability(availabilityStatus);

  if (normalizedStatus === "on_mission") {
    return "collaborator-status-on-mission";
  }

  if (normalizedStatus === "unavailable") {
    return "collaborator-status-unavailable";
  }

  return "collaborator-status-available";
}

function getCollaboratorLanguageLevelLabel(level) {
  return (
    collaboratorLanguageLevelLabels[normalizeCollaboratorLanguageLevel(level)] ||
    collaboratorLanguageLevelLabels.basic
  );
}

function getCollaboratorRoleClass(role) {
  return normalizeCollaboratorRole(role) === "driver"
    ? "collaborator-card-driver"
    : "collaborator-card-guide";
}

function normalizeCollaboratorLanguage(languageEntry) {
  const sourceLanguage =
    languageEntry && typeof languageEntry === "object"
      ? languageEntry.language
      : languageEntry;
  const sourceLevel =
    languageEntry && typeof languageEntry === "object" ? languageEntry.level : "";
  const language = formatDisplayWords(sourceLanguage);

  if (!language) {
    return null;
  }

  return {
    language,
    level: normalizeCollaboratorLanguageLevel(sourceLevel),
  };
}

function normalizeCollaborator(collaborator) {
  const safeCollaborator =
    collaborator && typeof collaborator === "object" ? collaborator : {};
  const collaboratorLanguages = Array.isArray(safeCollaborator.languages)
    ? safeCollaborator.languages
        .map((languageEntry) => normalizeCollaboratorLanguage(languageEntry))
        .filter(Boolean)
    : [];
  const uniqueLanguages = [];
  const seenLanguages = new Set();

  collaboratorLanguages.forEach((languageEntry) => {
    const languageKey = normalizeTextValue(languageEntry.language);
    if (!languageKey || seenLanguages.has(languageKey)) {
      return;
    }

    seenLanguages.add(languageKey);
    uniqueLanguages.push(languageEntry);
  });

  return {
    id:
      typeof safeCollaborator.id === "string" && safeCollaborator.id.trim()
        ? safeCollaborator.id.trim()
        : "",
    firstName: formatDisplayWords(safeCollaborator.firstName),
    lastName: formatDisplayWords(safeCollaborator.lastName),
    role: normalizeCollaboratorRole(safeCollaborator.role),
    availabilityStatus: normalizeCollaboratorAvailability(safeCollaborator.availabilityStatus),
    languages: uniqueLanguages,
  };
}

function getCollaboratorDisplayName(collaborator) {
  const parts = [collaborator.firstName, collaborator.lastName].filter(Boolean);

  if (parts.length > 0) {
    return parts.join(" ");
  }

  return "Collaborateur sans nom";
}

function clearCollaboratorFormMessage() {
  if (!collaboratorFormMessage) {
    return;
  }

  collaboratorFormMessage.hidden = true;
  collaboratorFormMessage.textContent = "";
  collaboratorFormMessage.classList.remove("error", "success");
}

function showCollaboratorFormMessage(message, type) {
  if (!collaboratorFormMessage) {
    return;
  }

  collaboratorFormMessage.hidden = false;
  collaboratorFormMessage.textContent = message;
  collaboratorFormMessage.classList.remove("error", "success");

  if (type) {
    collaboratorFormMessage.classList.add(type);
  }
}

function renderCollaboratorLanguagePreview() {
  if (!collaboratorLanguageList) {
    return;
  }

  if (collaboratorFormLanguages.length === 0) {
    collaboratorLanguageList.innerHTML =
      '<p class="collaborator-language-empty">Aucune langue ajoutee pour le moment.</p>';
    return;
  }

  collaboratorLanguageList.innerHTML = collaboratorFormLanguages
    .map(
      (languageEntry, languageIndex) => `
        <button
          class="collaborator-language-item"
          type="button"
          data-language-index="${languageIndex}"
          aria-label="Retirer ${escapeHtml(languageEntry.language)}"
        >
          <strong>${escapeHtml(languageEntry.language)}</strong>
          <span class="collaborator-language-level">${escapeHtml(
            getCollaboratorLanguageLevelLabel(languageEntry.level)
          )}</span>
          <span class="collaborator-language-remove" aria-hidden="true">&times;</span>
        </button>
      `
    )
    .join("");
}

function hideCollaboratorLanguageSuggestions() {
  if (!collaboratorLanguageSuggestions) {
    return;
  }

  collaboratorLanguageSuggestionItems = [];
  activeCollaboratorLanguageSuggestionIndex = -1;
  collaboratorLanguageSuggestions.innerHTML = "";
  collaboratorLanguageSuggestions.hidden = true;
}

function getCollaboratorLanguageMatches(rawQuery) {
  const query = normalizeTextValue(rawQuery);
  const usedLanguages = new Set(
    collaboratorFormLanguages.map((languageEntry) => normalizeTextValue(languageEntry.language))
  );

  return collaboratorLanguageCatalog
    .filter((language) => !usedLanguages.has(normalizeTextValue(language)))
    .filter((language) => {
      if (!query) {
        return true;
      }

      const normalizedLanguage = normalizeTextValue(language);
      return normalizedLanguage.includes(query);
    })
    .sort((leftLanguage, rightLanguage) => {
      const leftNormalized = normalizeTextValue(leftLanguage);
      const rightNormalized = normalizeTextValue(rightLanguage);
      const leftStartsWith = query ? leftNormalized.startsWith(query) : false;
      const rightStartsWith = query ? rightNormalized.startsWith(query) : false;

      if (leftStartsWith !== rightStartsWith) {
        return leftStartsWith ? -1 : 1;
      }

      return leftLanguage.localeCompare(rightLanguage, "fr");
    })
    .slice(0, 6);
}

function setActiveCollaboratorLanguageSuggestion(nextIndex) {
  if (!collaboratorLanguageSuggestionItems.length) {
    activeCollaboratorLanguageSuggestionIndex = -1;
    return;
  }

  activeCollaboratorLanguageSuggestionIndex = nextIndex;
  collaboratorLanguageSuggestionItems.forEach((suggestionButton, suggestionIndex) => {
    suggestionButton.classList.toggle("is-active", suggestionIndex === nextIndex);
  });
}

function selectCollaboratorLanguageSuggestion(language) {
  if (!collaboratorLanguageNameInput) {
    return;
  }

  collaboratorLanguageNameInput.value = language;
  hideCollaboratorLanguageSuggestions();

  if (collaboratorLanguageLevelInput) {
    collaboratorLanguageLevelInput.focus();
  }
}

function renderCollaboratorLanguageSuggestions() {
  if (!collaboratorLanguageSuggestions || !collaboratorLanguageNameInput) {
    return;
  }

  const suggestionMatches = getCollaboratorLanguageMatches(collaboratorLanguageNameInput.value);

  if (suggestionMatches.length === 0) {
    hideCollaboratorLanguageSuggestions();
    return;
  }

  collaboratorLanguageSuggestions.hidden = false;
  collaboratorLanguageSuggestions.innerHTML = suggestionMatches
    .map(
      (language) => `
        <button
          class="collaborator-language-suggestion"
          type="button"
          data-language-value="${escapeHtml(language)}"
          role="option"
        >
          ${escapeHtml(language)}
        </button>
      `
    )
    .join("");

  collaboratorLanguageSuggestionItems = Array.from(
    collaboratorLanguageSuggestions.querySelectorAll(".collaborator-language-suggestion")
  );
  setActiveCollaboratorLanguageSuggestion(-1);
}

function hasCollaboratorVehicleDraft() {
  if (
    !collaboratorVehicleBrandInput ||
    !collaboratorVehicleModelInput ||
    !collaboratorVehicleColorInput ||
    !collaboratorVehiclePlateInput ||
    !collaboratorVehicleConsumptionInput
  ) {
    return false;
  }

  return [
    collaboratorVehicleBrandInput.value,
    collaboratorVehicleModelInput.value,
    collaboratorVehicleColorInput.value,
    collaboratorVehiclePlateInput.value,
    collaboratorVehicleConsumptionInput.value,
  ].some((value) => typeof value === "string" && value.trim());
}

function updateCollaboratorVehicleToggleLabel() {
  if (!toggleCollaboratorVehicleButton) {
    return;
  }

  if (collaboratorVehicleFields && !collaboratorVehicleFields.hidden) {
    toggleCollaboratorVehicleButton.textContent = editingCollaboratorVehicleId
      ? "Masquer la modification"
      : "Masquer le vehicule";
    return;
  }

  if (editingCollaboratorVehicleId) {
    toggleCollaboratorVehicleButton.textContent = "Continuer la modification";
    return;
  }

  toggleCollaboratorVehicleButton.textContent = hasCollaboratorVehicleDraft()
    ? "Continuer le vehicule"
    : "Ajouter un vehicule";
}

function setCollaboratorVehicleFormOpen(isOpen) {
  if (!collaboratorVehicleFields) {
    return;
  }

  collaboratorVehicleFields.hidden = !isOpen;
  updateCollaboratorVehicleToggleLabel();
}

function clearCollaboratorVehicleForm() {
  if (
    !collaboratorVehicleBrandInput ||
    !collaboratorVehicleModelInput ||
    !collaboratorVehicleColorInput ||
    !collaboratorVehiclePlateInput ||
    !collaboratorVehicleStatusInput ||
    !collaboratorVehicleConsumptionInput ||
    !collaboratorVehicleConsumptionUnitInput
  ) {
    return;
  }

  editingCollaboratorVehicleId = "";
  collaboratorVehicleBrandInput.value = "";
  collaboratorVehicleModelInput.value = "";
  collaboratorVehicleColorInput.value = "";
  collaboratorVehiclePlateInput.value = "";
  collaboratorVehicleStatusInput.value = "available";
  collaboratorVehicleConsumptionInput.value = "";
  collaboratorVehicleConsumptionUnitInput.value = "L/100 km";
  setCollaboratorVehicleFormOpen(false);
}

function fillCollaboratorVehicleForm(vehicle = null) {
  if (
    !collaboratorVehicleBrandInput ||
    !collaboratorVehicleModelInput ||
    !collaboratorVehicleColorInput ||
    !collaboratorVehiclePlateInput ||
    !collaboratorVehicleStatusInput ||
    !collaboratorVehicleConsumptionInput ||
    !collaboratorVehicleConsumptionUnitInput
  ) {
    return;
  }

  if (!vehicle) {
    clearCollaboratorVehicleForm();
    return;
  }

  editingCollaboratorVehicleId =
    typeof vehicle.id === "string" && vehicle.id.trim() ? vehicle.id.trim() : "";
  collaboratorVehicleBrandInput.value = vehicle.brand || "";
  collaboratorVehicleModelInput.value = vehicle.model || "";
  collaboratorVehicleColorInput.value = vehicle.color || "";
  collaboratorVehiclePlateInput.value = vehicle.plate || "";
  collaboratorVehicleStatusInput.value = normalizeVehicleStatus(vehicle.vehicleStatus);
  collaboratorVehicleConsumptionInput.value = vehicle.consumption || "";
  collaboratorVehicleConsumptionUnitInput.value = vehicle.consumptionUnit || "L/100 km";
  setCollaboratorVehicleFormOpen(true);
}

function syncCollaboratorVehicleVisibility() {
  if (!collaboratorVehicleBuilder) {
    return;
  }

  const isDriver = normalizeCollaboratorRole(collaboratorRoleInput?.value) === "driver";
  const currentCollaborator =
    editingCollaboratorIndex >= 0
      ? getStoredCollaboratorByIndex(editingCollaboratorIndex)
      : null;
  collaboratorVehicleBuilder.hidden = !isDriver;

  if (!isDriver) {
    setCollaboratorVehicleFormOpen(false);
    renderCollaboratorLinkedVehicles();
    return;
  }

  renderCollaboratorLinkedVehicles(currentCollaborator?.id || "");
  updateCollaboratorVehicleToggleLabel();
}

function getLinkedVehiclesByCollaboratorId(collaboratorId, vehicles = getStoredVehicles()) {
  if (!collaboratorId) {
    return [];
  }

  const normalizedCollaboratorId = collaboratorId.trim();
  const linkedVehicles = [];

  vehicles.forEach((vehicle, vehicleIndex) => {
    if (
      typeof vehicle?.linkedCollaboratorId !== "string" ||
      vehicle.linkedCollaboratorId.trim() !== normalizedCollaboratorId
    ) {
      return;
    }

    linkedVehicles.push({
      vehicle: normalizeVehicle(vehicle),
      vehicleIndex,
    });
  });

  return linkedVehicles;
}

function buildLinkedVehiclesByCollaboratorId(vehicles = getStoredVehicles()) {
  const linkedVehiclesByCollaboratorId = new Map();

  vehicles.forEach((vehicle, vehicleIndex) => {
    if (typeof vehicle?.linkedCollaboratorId !== "string") {
      return;
    }

    const collaboratorId = vehicle.linkedCollaboratorId.trim();
    if (!collaboratorId) {
      return;
    }

    const linkedVehicles = linkedVehiclesByCollaboratorId.get(collaboratorId) || [];
    linkedVehicles.push({
      vehicle: normalizeVehicle(vehicle),
      vehicleIndex,
    });
    linkedVehiclesByCollaboratorId.set(collaboratorId, linkedVehicles);
  });

  return linkedVehiclesByCollaboratorId;
}

function getVehicleIndexByVehicleId(vehicleId, vehicles = getStoredVehicles()) {
  if (!vehicleId) {
    return -1;
  }

  return vehicles.findIndex(
    (vehicle) =>
      typeof vehicle?.id === "string" &&
      vehicle.id.trim() === vehicleId.trim()
  );
}

function renderCollaboratorLinkedVehicles(collaboratorId = "") {
  if (!collaboratorLinkedVehicles || !collaboratorLinkedVehicleList) {
    return;
  }

  const linkedVehicles = getLinkedVehiclesByCollaboratorId(collaboratorId);

  if (!collaboratorId || linkedVehicles.length === 0) {
    collaboratorLinkedVehicles.hidden = true;
    collaboratorLinkedVehicleList.innerHTML = "";
    return;
  }

  collaboratorLinkedVehicles.hidden = false;
  collaboratorLinkedVehicleList.innerHTML = linkedVehicles
    .map(
      ({ vehicle }) => `
        <article class="collaborator-linked-vehicle-item">
          <div class="collaborator-linked-vehicle-copy">
            <strong>${escapeHtml(getVehicleDisplayName(vehicle))}</strong>
            <span>${escapeHtml(vehicle.plate || "Immatriculation non renseignee")}</span>
          </div>
          <button
            class="secondary-action collaborator-linked-vehicle-button"
            type="button"
            data-linked-vehicle-id="${escapeHtml(vehicle.id || "")}"
          >
            Modifier ce vehicule
          </button>
        </article>
      `
    )
    .join("");
}

function startCollaboratorVehicleEdit(vehicleId) {
  const vehicles = getStoredVehicles();
  const vehicleIndex = getVehicleIndexByVehicleId(vehicleId, vehicles);
  const storedVehicle = vehicleIndex >= 0 ? vehicles[vehicleIndex] : null;

  if (!storedVehicle) {
    return;
  }

  fillCollaboratorVehicleForm(normalizeVehicle(storedVehicle));
  clearCollaboratorFormMessage();
}

function buildCollaboratorVehicleDraft(collaborator) {
  if (
    !collaboratorVehicleFields ||
    collaboratorVehicleFields.hidden ||
    !collaboratorVehicleBrandInput ||
    !collaboratorVehicleModelInput ||
    !collaboratorVehicleColorInput ||
    !collaboratorVehiclePlateInput ||
    !collaboratorVehicleStatusInput ||
    !collaboratorVehicleConsumptionInput ||
    !collaboratorVehicleConsumptionUnitInput
  ) {
    return { vehicle: null, errorMessage: "" };
  }

  const vehicles = getStoredVehicles();
  const editingVehicleIndex = editingCollaboratorVehicleId
    ? getVehicleIndexByVehicleId(editingCollaboratorVehicleId, vehicles)
    : -1;
  const brand = collaboratorVehicleBrandInput.value.trim();
  const model = collaboratorVehicleModelInput.value.trim();
  const color = collaboratorVehicleColorInput.value.trim();
  const plate = formatVehiclePlate(collaboratorVehiclePlateInput.value);
  const vehicleStatus = normalizeVehicleStatus(collaboratorVehicleStatusInput.value);
  const consumption = collaboratorVehicleConsumptionInput.value.trim();
  const consumptionUnit = collaboratorVehicleConsumptionUnitInput.value;

  if (!brand || !model || !color || !plate || !vehicleStatus || !consumption) {
    return {
      vehicle: null,
      errorMessage: "Merci de remplir tous les champs du vehicule associe.",
    };
  }

  const consumptionValue = Number(consumption);
  if (Number.isNaN(consumptionValue) || consumptionValue <= 0) {
    return {
      vehicle: null,
      errorMessage: "La consommation du vehicule associe doit etre superieure a 0.",
    };
  }

  const plateKey = getVehiclePlateKey(plate);
  const alreadyExists = vehicles.some((vehicle, vehicleIndex) => {
    if (vehicleIndex === editingVehicleIndex) {
      return false;
    }

    return getVehiclePlateKey(vehicle.plate) === plateKey;
  });

  if (alreadyExists) {
    return {
      vehicle: null,
      errorMessage: "Cette plaque d'immatriculation est deja enregistree dans Mes Vehicules.",
    };
  }

  return {
    vehicle: {
      brand,
      model,
      color,
      plate,
      vehicleType: "collaborator",
      vehicleStatus,
      rentalEndDate: "",
      consumption: consumptionValue.toFixed(1).replace(".0", ""),
      consumptionUnit,
      linkedCollaboratorId: collaborator.id,
      linkedCollaboratorName: getCollaboratorDisplayName(collaborator),
    },
    errorMessage: "",
  };
}

function syncCollaboratorLinkedVehicle(collaborator, vehicleDraft) {
  const vehicles = getStoredVehicles();
  const editingVehicleIndex = editingCollaboratorVehicleId
    ? getVehicleIndexByVehicleId(editingCollaboratorVehicleId, vehicles)
    : -1;
  const collaboratorName = getCollaboratorDisplayName(collaborator);

  if (vehicleDraft) {
    const currentStoredVehicle =
      editingVehicleIndex >= 0 ? vehicles[editingVehicleIndex] : null;
    const plateKey = getVehiclePlateKey(vehicleDraft.plate);
    const nextVehicle = {
      id:
        currentStoredVehicle &&
        typeof currentStoredVehicle.id === "string" &&
        currentStoredVehicle.id.trim()
          ? currentStoredVehicle.id.trim()
          : `${Date.now()}-${plateKey}`,
      brand: vehicleDraft.brand,
      model: vehicleDraft.model,
      color: vehicleDraft.color,
      plate: vehicleDraft.plate,
      vehicleType: "collaborator",
      vehicleStatus: vehicleDraft.vehicleStatus,
      rentalEndDate: "",
      consumption: vehicleDraft.consumption,
      consumptionUnit: vehicleDraft.consumptionUnit,
      linkedCollaboratorId: collaborator.id,
      linkedCollaboratorName: collaboratorName,
    };

    if (editingVehicleIndex >= 0) {
      vehicles[editingVehicleIndex] = nextVehicle;
    } else {
      vehicles.push(nextVehicle);
    }
  }

  const syncedVehicles = vehicles.map((vehicle) => {
    if (
      typeof vehicle?.linkedCollaboratorId !== "string" ||
      vehicle.linkedCollaboratorId.trim() !== collaborator.id.trim()
    ) {
      return vehicle;
    }

    return {
      ...vehicle,
      vehicleType: "collaborator",
      linkedCollaboratorId: collaborator.id,
      linkedCollaboratorName: collaboratorName,
    };
  });

  saveStoredVehicles(syncedVehicles);
}

function setCollaboratorFormMode(collaborator = null) {
  if (
    !collaboratorFormKicker ||
    !collaboratorFormTitle ||
    !submitCollaboratorFormButton ||
    !resetCollaboratorFormButton
  ) {
    return;
  }

  if (collaborator) {
    collaboratorFormKicker.textContent = "Modifier le collaborateur";
    collaboratorFormTitle.textContent = `Mettre a jour ${getCollaboratorDisplayName(collaborator)}`;
    submitCollaboratorFormButton.textContent = "Enregistrer les modifications";
    resetCollaboratorFormButton.textContent = "Reinitialiser";
    return;
  }

  collaboratorFormKicker.textContent = "Nouveau collaborateur";
  collaboratorFormTitle.textContent = "Ajouter un collaborateur a la liste";
  submitCollaboratorFormButton.textContent = "Enregistrer le collaborateur";
  resetCollaboratorFormButton.textContent = "Effacer";
}

function setCollaboratorFormOpen(isOpen) {
  if (!collaboratorForm) {
    return;
  }

  collaboratorForm.hidden = !isOpen;

  if (isOpen) {
    clearCollaboratorFormMessage();
    collaboratorForm.scrollIntoView({ behavior: "smooth", block: "start" });
    if (collaboratorFirstNameInput) {
      collaboratorFirstNameInput.focus();
    }
  }
}

function resetCollaboratorForm() {
  if (!collaboratorForm) {
    return;
  }

  editingCollaboratorIndex = -1;
  collaboratorForm.reset();
  collaboratorFormLanguages = [];
  clearCollaboratorVehicleForm();
  hideCollaboratorLanguageSuggestions();
  setCollaboratorFormMode();
  clearCollaboratorFormMessage();
  renderCollaboratorLanguagePreview();
  syncCollaboratorVehicleVisibility();
  renderCollaboratorLinkedVehicles();
}

function addCollaboratorLanguage() {
  if (!collaboratorLanguageNameInput || !collaboratorLanguageLevelInput) {
    return;
  }

  const language = formatDisplayWords(collaboratorLanguageNameInput.value);
  const level = normalizeCollaboratorLanguageLevel(collaboratorLanguageLevelInput.value);

  if (!language) {
    showCollaboratorFormMessage("Merci d'indiquer une langue avant de l'ajouter.", "error");
    collaboratorLanguageNameInput.focus();
    return;
  }

  const languageKey = normalizeTextValue(language);
  const alreadyExists = collaboratorFormLanguages.some(
    (languageEntry) => normalizeTextValue(languageEntry.language) === languageKey
  );

  if (alreadyExists) {
    showCollaboratorFormMessage("Cette langue est deja ajoutee pour ce collaborateur.", "error");
    collaboratorLanguageNameInput.focus();
    collaboratorLanguageNameInput.select();
    return;
  }

  collaboratorFormLanguages.push({ language, level });
  collaboratorLanguageNameInput.value = "";
  collaboratorLanguageLevelInput.value = "basic";
  hideCollaboratorLanguageSuggestions();
  clearCollaboratorFormMessage();
  renderCollaboratorLanguagePreview();
  collaboratorLanguageNameInput.focus();
}

function removeCollaboratorLanguage(languageIndex) {
  collaboratorFormLanguages = collaboratorFormLanguages.filter(
    (_languageEntry, currentIndex) => currentIndex !== languageIndex
  );
  clearCollaboratorFormMessage();
  renderCollaboratorLanguagePreview();
}

function getStoredCollaboratorByIndex(collaboratorIndex) {
  const collaborators = getStoredCollaborators();
  const storedCollaborator = collaborators[collaboratorIndex];

  return storedCollaborator ? normalizeCollaborator(storedCollaborator) : null;
}

function fillCollaboratorForm(collaborator) {
  if (
    !collaboratorFirstNameInput ||
    !collaboratorLastNameInput ||
    !collaboratorRoleInput ||
    !collaboratorStatusInput ||
    !collaboratorLanguageNameInput ||
    !collaboratorLanguageLevelInput
  ) {
    return;
  }

  collaboratorFirstNameInput.value = collaborator.firstName;
  collaboratorLastNameInput.value = collaborator.lastName;
  collaboratorRoleInput.value = collaborator.role;
  collaboratorStatusInput.value = normalizeCollaboratorAvailability(
    collaborator.availabilityStatus
  );
  collaboratorLanguageNameInput.value = "";
  collaboratorLanguageLevelInput.value = "basic";
  collaboratorFormLanguages = collaborator.languages.map((languageEntry) => ({
    language: languageEntry.language,
    level: languageEntry.level,
  }));
  clearCollaboratorVehicleForm();
  hideCollaboratorLanguageSuggestions();
  renderCollaboratorLanguagePreview();
  syncCollaboratorVehicleVisibility();
  renderCollaboratorLinkedVehicles(collaborator.id);
}

function startCollaboratorEdit(collaboratorIndex) {
  const collaborator = getStoredCollaboratorByIndex(collaboratorIndex);
  if (!collaborator) {
    return;
  }

  editingCollaboratorIndex = collaboratorIndex;
  setCollaboratorFormMode(collaborator);
  fillCollaboratorForm(collaborator);
  clearCollaboratorFormMessage();
  setCollaboratorFormOpen(true);
}

function setCollaboratorCardExpanded(collaboratorCard, isExpanded) {
  if (!collaboratorCard) {
    return;
  }

  const detailSection = collaboratorCard.querySelector(".collaborator-card-details");
  const toggleNode = collaboratorCard.querySelector(".collaborator-card-toggle");

  collaboratorCard.classList.toggle("is-expanded", isExpanded);
  collaboratorCard.setAttribute("aria-expanded", String(isExpanded));

  if (detailSection) {
    detailSection.hidden = !isExpanded;
  }

  if (toggleNode) {
    toggleNode.innerHTML = isExpanded ? "&minus;" : "+";
  }
}

function toggleCollaboratorCard(collaboratorCard) {
  if (!collaboratorList || !collaboratorCard) {
    return;
  }

  const isExpanded = collaboratorCard.getAttribute("aria-expanded") === "true";
  const collaboratorCards = collaboratorList.querySelectorAll(".collaborator-card");

  collaboratorCards.forEach((card) => {
    if (!(card instanceof HTMLElement)) {
      return;
    }

    setCollaboratorCardExpanded(card, false);
  });

  if (!isExpanded) {
    setCollaboratorCardExpanded(collaboratorCard, true);
  }
}

function updateCollaboratorSummaries(collaborators) {
  if (collaboratorCountSummary) {
    collaboratorCountSummary.textContent = String(collaborators.length);
  }

  const guideCount = collaborators.filter(
    (collaborator) => normalizeCollaboratorRole(collaborator.role) === "guide"
  ).length;
  const driverCount = collaborators.filter(
    (collaborator) => normalizeCollaboratorRole(collaborator.role) === "driver"
  ).length;
  const uniqueLanguageCount = new Set(
    collaborators.flatMap((collaborator) =>
      collaborator.languages.map((languageEntry) => normalizeTextValue(languageEntry.language))
    )
  ).size;

  if (guideCountSummary) {
    guideCountSummary.textContent = String(guideCount);
  }

  if (driverCountSummary) {
    driverCountSummary.textContent = String(driverCount);
  }

  if (languageCountSummary) {
    languageCountSummary.textContent = String(uniqueLanguageCount);
  }
}

function renderCollaborators() {
  if (!collaboratorList) {
    return;
  }

  const collaborators = getStoredCollaborators().map((storedCollaborator) =>
    normalizeCollaborator(storedCollaborator)
  );
  const linkedVehiclesByCollaboratorId = buildLinkedVehiclesByCollaboratorId();
  updateCollaboratorSummaries(collaborators);

  if (collaborators.length === 0) {
    collaboratorList.innerHTML = `
      <article class="collaborator-empty">
        <div>
          <strong>Aucun collaborateur ajoute pour le moment.</strong>
          <p>
            Utilisez le bouton <strong>Ajouter un collaborateur</strong> pour enregistrer
            un guide ou un chauffeur avec ses langues et son niveau.
          </p>
        </div>
      </article>
    `;
    return;
  }

  collaboratorList.innerHTML = collaborators
    .map((collaborator, collaboratorIndex) => ({ collaborator, collaboratorIndex }))
    .reverse()
    .map(({ collaborator, collaboratorIndex }) => {
      const linkedVehicles = linkedVehiclesByCollaboratorId.get(collaborator.id) || [];
      const primaryLinkedVehicle = linkedVehicles[0]?.vehicle || null;
      const availabilityClass = getCollaboratorAvailabilityClass(
        collaborator.availabilityStatus
      );
      const languagesMarkup = collaborator.languages
        .map(
          (languageEntry) => `
            <span class="collaborator-language-tag">
              <strong>${escapeHtml(languageEntry.language)}</strong>
              <span>${escapeHtml(getCollaboratorLanguageLevelLabel(languageEntry.level))}</span>
            </span>
          `
        )
        .join("");
      const languageCountLabel =
        collaborator.languages.length > 1
          ? `${collaborator.languages.length} langues`
          : collaborator.languages.length === 1
            ? "1 langue"
            : "0 langue";
      const linkedVehicleDetailsMarkup = primaryLinkedVehicle
        ? `
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Vehicule associe</span>
                <span class="vehicle-meta-value">${escapeHtml(getVehicleDisplayName(primaryLinkedVehicle))}</span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Immatriculation</span>
                <span class="vehicle-meta-value">${escapeHtml(primaryLinkedVehicle.plate || "Non renseignee")}</span>
              </div>
              ${
                linkedVehicles.length > 1
                  ? `
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Vehicules lies</span>
                <span class="vehicle-meta-value">${linkedVehicles.length} vehicules associes</span>
              </div>
              `
                  : ""
              }
            `
        : "";

      return `
        <article
          class="collaborator-card ${getCollaboratorRoleClass(collaborator.role)}"
          data-collaborator-index="${collaboratorIndex}"
          tabindex="0"
          aria-expanded="false"
        >
          <div class="vehicle-card-summary">
            <div class="vehicle-card-summary-copy collaborator-card-copy">
              <div class="vehicle-kicker-wrap collaborator-kicker-wrap">
                <span class="vehicle-status-bar ${availabilityClass}" aria-hidden="true"></span>
                <p class="detail-kicker">Collaborateur</p>
              </div>
              <h4>${escapeHtml(getCollaboratorDisplayName(collaborator))}</h4>
            </div>
            <span class="vehicle-card-toggle collaborator-card-toggle" aria-hidden="true">+</span>
          </div>

          <div class="vehicle-summary-meta">
            <span class="collaborator-role-badge">
              ${escapeHtml(getCollaboratorRoleLabel(collaborator.role))}
            </span>
            <span class="collaborator-language-count">${escapeHtml(languageCountLabel)}</span>
          </div>

          <div class="collaborator-card-details vehicle-card-details" hidden>
            <div class="vehicle-meta">
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Fonction</span>
                <span class="vehicle-meta-value">
                  ${escapeHtml(getCollaboratorRoleLabel(collaborator.role))}
                </span>
              </div>
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Disponibilite</span>
                <span class="vehicle-meta-value">
                  ${escapeHtml(getCollaboratorAvailabilityLabel(collaborator.availabilityStatus))}
                </span>
              </div>
              ${linkedVehicleDetailsMarkup}
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Langues</span>
                <div class="collaborator-language-tags">
                  ${languagesMarkup}
                </div>
              </div>
            </div>

            <div class="vehicle-card-tools">
              <button
                class="vehicle-edit-button collaborator-edit-button"
                type="button"
                data-collaborator-index="${collaboratorIndex}"
                aria-label="Modifier ${escapeHtml(getCollaboratorDisplayName(collaborator))}"
                title="Modifier ce collaborateur"
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

function handleCollaboratorSubmit(event) {
  event.preventDefault();

  if (
    !collaboratorFirstNameInput ||
    !collaboratorLastNameInput ||
    !collaboratorRoleInput ||
    !collaboratorStatusInput
  ) {
    return;
  }

  const firstName = formatDisplayWords(collaboratorFirstNameInput.value);
  const lastName = formatDisplayWords(collaboratorLastNameInput.value);
  const role = normalizeCollaboratorRole(collaboratorRoleInput.value);
  const availabilityStatus = normalizeCollaboratorAvailability(collaboratorStatusInput.value);
  const languages = collaboratorFormLanguages.map((languageEntry) =>
    normalizeCollaboratorLanguage(languageEntry)
  ).filter(Boolean);

  if (!firstName || !lastName) {
    showCollaboratorFormMessage("Merci de remplir le prenom et le nom du collaborateur.", "error");
    return;
  }

  if (languages.length === 0) {
    showCollaboratorFormMessage("Ajoutez au moins une langue pour ce collaborateur.", "error");
    return;
  }

  const collaborators = getStoredCollaborators();
  const currentStoredCollaborator =
    editingCollaboratorIndex >= 0 ? collaborators[editingCollaboratorIndex] : null;
  const collaboratorId =
    currentStoredCollaborator &&
    typeof currentStoredCollaborator.id === "string" &&
    currentStoredCollaborator.id.trim()
      ? currentStoredCollaborator.id.trim()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const nextCollaborator = {
    id: collaboratorId,
    firstName,
    lastName,
    role,
    availabilityStatus,
    languages,
  };
  const { vehicle: collaboratorVehicleDraft, errorMessage: collaboratorVehicleError } =
    normalizeCollaboratorRole(role) === "driver"
      ? buildCollaboratorVehicleDraft(nextCollaborator)
      : { vehicle: null, errorMessage: "" };

  if (collaboratorVehicleError) {
    showCollaboratorFormMessage(collaboratorVehicleError, "error");
    return;
  }

  if (editingCollaboratorIndex >= 0) {
    const updatedCollaborators = collaborators.map((collaborator, collaboratorIndex) =>
      collaboratorIndex === editingCollaboratorIndex ? nextCollaborator : collaborator
    );
    saveStoredCollaborators(updatedCollaborators);
  } else {
    collaborators.push(nextCollaborator);
    saveStoredCollaborators(collaborators);
  }

  syncCollaboratorLinkedVehicle(nextCollaborator, collaboratorVehicleDraft);
  syncVehicleCollaboratorFieldVisibility({
    clearWhenHidden: false,
    selectedCollaboratorId: vehicleCollaboratorInput?.value || "",
  });
  renderVehicles();
  renderCollaborators();
  resetCollaboratorForm();
  setCollaboratorFormOpen(false);
}

function normalizeInvoicePaymentMethod(value) {
  const normalizedValue = normalizeTextValue(value);

  if (normalizedValue === "card" || normalizedValue === "carte") {
    return "card";
  }

  if (
    normalizedValue === "cash" ||
    normalizedValue === "especes" ||
    normalizedValue === "espece"
  ) {
    return "cash";
  }

  if (normalizedValue === "cheque" || normalizedValue === "check") {
    return "cheque";
  }

  return "wire";
}

function normalizeInvoiceType(value) {
  const normalizedValue = normalizeTextValue(value);

  if (
    normalizedValue === "external" ||
    normalizedValue === "facture externe" ||
    normalizedValue === "externe"
  ) {
    return "external";
  }

  return "client";
}

function normalizeInvoicePaymentStatus(value) {
  const normalizedValue = normalizeTextValue(value);

  if (
    normalizedValue === "paid" ||
    normalizedValue === "settled" ||
    normalizedValue === "reglee" ||
    normalizedValue === "regle"
  ) {
    return "paid";
  }

  return "unpaid";
}

function getInvoicePaymentStatusLabel(value) {
  return invoicePaymentStatusLabels[normalizeInvoicePaymentStatus(value)] || invoicePaymentStatusLabels.unpaid;
}

function normalizeInvoiceExternalFlow(value) {
  const normalizedValue = normalizeTextValue(value);

  if (
    normalizedValue === "receivable" ||
    normalizedValue === "arecevoir" ||
    normalizedValue === "a recevoir" ||
    normalizedValue === "recevoir"
  ) {
    return "receivable";
  }

  return "payable";
}

function getInvoiceExternalFlowLabel(value) {
  return invoiceExternalFlowLabels[normalizeInvoiceExternalFlow(value)] || invoiceExternalFlowLabels.payable;
}

function getInvoiceTypeFilterValue() {
  if (!invoiceTypeFilterInput) {
    return "all";
  }

  const filterValue = normalizeTextValue(invoiceTypeFilterInput.value);
  return allInvoiceTypeFilters.has(filterValue) ? filterValue : "all";
}

function getInvoicePaymentStatusFilterValue() {
  if (!invoicePaymentStatusFilterInput) {
    return "all";
  }

  const filterValue = normalizeTextValue(invoicePaymentStatusFilterInput.value);
  return allInvoicePaymentStatusFilters.has(filterValue) ? filterValue : "all";
}

function getInvoiceTypeLabel(value) {
  return invoiceTypeLabels[normalizeInvoiceType(value)] || invoiceTypeLabels.client;
}

function getInvoiceRecordTypeClass(value) {
  return normalizeInvoiceType(value) === "external"
    ? "invoice-record-type-external"
    : "invoice-record-type-client";
}

function matchesInvoiceFilters(invoice) {
  const selectedType = getInvoiceTypeFilterValue();
  const selectedPaymentStatus = getInvoicePaymentStatusFilterValue();

  if (selectedType !== "all" && normalizeInvoiceType(invoice?.invoiceType) !== selectedType) {
    return false;
  }

  if (
    selectedPaymentStatus !== "all" &&
    normalizeInvoicePaymentStatus(invoice?.paymentStatus) !== selectedPaymentStatus
  ) {
    return false;
  }

  return true;
}

function updateInvoiceFilterSummary(filteredCount, totalCount) {
  if (!invoiceFilterSummary) {
    return;
  }

  if (totalCount === 0) {
    invoiceFilterSummary.textContent = "Aucune facture enregistree pour le moment";
    return;
  }

  if (filteredCount === totalCount) {
    invoiceFilterSummary.textContent = "Toutes les factures affichees";
    return;
  }

  if (filteredCount === 0) {
    invoiceFilterSummary.textContent = "Aucune facture ne correspond au filtre";
    return;
  }

  const invoiceLabel = filteredCount > 1 ? "factures affichees" : "facture affichee";
  invoiceFilterSummary.textContent = `${filteredCount} ${invoiceLabel} sur ${totalCount}`;
}

function normalizeInvoiceAttachment(attachment) {
  const safeAttachment = attachment && typeof attachment === "object" ? attachment : {};
  const attachmentId =
    typeof safeAttachment.id === "string" ? safeAttachment.id.trim() : "";

  if (!attachmentId) {
    return null;
  }

  return {
    id: attachmentId,
    name: cleanInputValue(safeAttachment.name) || "fichier",
    type: cleanInputValue(safeAttachment.type) || "application/octet-stream",
    size: Math.max(0, Number(safeAttachment.size) || 0),
    updatedAt: cleanInputValue(safeAttachment.updatedAt),
    url: cleanInputValue(safeAttachment.url),
  };
}

function formatInvoiceAttachmentSize(size) {
  const normalizedSize = Math.max(0, Number(size) || 0);
  if (normalizedSize < 1024) {
    return `${normalizedSize} o`;
  }

  if (normalizedSize < 1024 * 1024) {
    return `${(normalizedSize / 1024).toFixed(1)} Ko`;
  }

  return `${(normalizedSize / (1024 * 1024)).toFixed(1)} Mo`;
}

function openInvoiceAttachmentsDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("IndexedDB indisponible"));
      return;
    }

    const request = window.indexedDB.open(invoiceAttachmentsDbName, 1);

    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(invoiceAttachmentsStoreName)) {
        database.createObjectStore(invoiceAttachmentsStoreName, { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error("Impossible d'ouvrir IndexedDB"));
    };
  });
}

function saveInvoiceAttachmentFileLocal(file, existingAttachmentId = "") {
  if (!(file instanceof File)) {
    return Promise.resolve(null);
  }

  return openInvoiceAttachmentsDb().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(invoiceAttachmentsStoreName, "readwrite");
        const store = transaction.objectStore(invoiceAttachmentsStoreName);
        const attachmentId =
          existingAttachmentId ||
          `invoice-attachment-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
        const record = {
          id: attachmentId,
          name: file.name,
          type: file.type || "application/octet-stream",
          size: file.size,
          updatedAt: new Date().toISOString(),
          blob: file,
        };

        transaction.oncomplete = () => {
          database.close();
          resolve({
            id: record.id,
            name: record.name,
            type: record.type,
            size: record.size,
            updatedAt: record.updatedAt,
          });
        };

        transaction.onerror = () => {
          database.close();
          reject(transaction.error || new Error("Impossible d'enregistrer le fichier"));
        };

        store.put(record);
      })
  );
}

function getStoredInvoiceAttachmentLocal(attachmentId) {
  if (!attachmentId) {
    return Promise.resolve(null);
  }

  return openInvoiceAttachmentsDb().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(invoiceAttachmentsStoreName, "readonly");
        const store = transaction.objectStore(invoiceAttachmentsStoreName);
        const request = store.get(attachmentId);

        request.onsuccess = () => {
          database.close();
          resolve(request.result || null);
        };

        request.onerror = () => {
          database.close();
          reject(request.error || new Error("Impossible de lire le fichier"));
        };
      })
  );
}

function deleteStoredInvoiceAttachmentLocal(attachmentId) {
  if (!attachmentId) {
    return Promise.resolve();
  }

  return openInvoiceAttachmentsDb().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(invoiceAttachmentsStoreName, "readwrite");
        const store = transaction.objectStore(invoiceAttachmentsStoreName);

        transaction.oncomplete = () => {
          database.close();
          resolve();
        };

        transaction.onerror = () => {
          database.close();
          reject(transaction.error || new Error("Impossible de supprimer le fichier"));
        };

        store.delete(attachmentId);
      })
  );
}

async function saveInvoiceAttachmentFile(file, invoiceId = "", existingAttachmentId = "") {
  try {
    const serverAttachment = await saveInvoiceAttachmentToServer(file, invoiceId, existingAttachmentId);
    if (serverAttachment) {
      return serverAttachment;
    }
  } catch (error) {
    // Fallback local si le serveur n'est pas joignable.
  }

  return saveInvoiceAttachmentFileLocal(file, existingAttachmentId);
}

async function getStoredInvoiceAttachment(attachmentOrId) {
  const attachment =
    typeof attachmentOrId === "string"
      ? { id: attachmentOrId }
      : normalizeInvoiceAttachment(attachmentOrId);
  const attachmentUrl = getInvoiceAttachmentUrl(attachment);
  if (attachmentUrl && canUseServerDataApi()) {
    try {
      const response = await window.fetch(attachmentUrl, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Impossible de recuperer la piece jointe.");
      }

      return {
        id: attachment?.id || "",
        blob: await response.blob(),
        name: attachment?.name || "fichier",
        type: attachment?.type || response.headers.get("Content-Type") || "application/octet-stream",
        size: attachment?.size || Number(response.headers.get("Content-Length") || 0),
      };
    } catch (error) {
      // Fallback local si l'endpoint distant n'est pas disponible.
    }
  }

  return getStoredInvoiceAttachmentLocal(attachment?.id || "");
}

async function deleteStoredInvoiceAttachment(invoiceId = "", attachmentId = "") {
  if (invoiceId && canUseServerDataApi()) {
    try {
      await deleteInvoiceAttachmentFromServer(invoiceId);
      return;
    } catch (error) {
      // Fallback local si le serveur n'est pas disponible.
    }
  }

  await deleteStoredInvoiceAttachmentLocal(attachmentId);
}

function getInvoicePaymentMethodLabel(value) {
  return (
    invoicePaymentMethodLabels[normalizeInvoicePaymentMethod(value)] ||
    invoicePaymentMethodLabels.wire
  );
}

function normalizeInvoiceAmount(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) && value >= 0 ? value : 0;
  }

  if (typeof value !== "string") {
    return 0;
  }

  const normalizedValue = value
    .replace(/\s+/g, "")
    .replace(/€/g, "")
    .replace(",", ".");
  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : 0;
}

function formatInvoiceAmount(value) {
  return invoiceCurrencyFormatter.format(normalizeInvoiceAmount(value));
}

function formatInvoiceDate(value) {
  const normalizedDate = normalizeRentalEndDate(value);
  if (!normalizedDate) {
    return "Non renseignee";
  }

  const displayDate = new Date(`${normalizedDate}T00:00:00`);
  if (Number.isNaN(displayDate.getTime())) {
    return normalizedDate;
  }

  return invoiceDateFormatter.format(displayDate);
}

function getStoredInvoices() {
  const storedInvoices = readStoredArray(invoicesStorageKey);

  if (storedInvoices.length === 0) {
    return [defaultInvoiceRecord];
  }

  const migratedInvoices = storedInvoices.map((storedInvoice) => {
    if (
      storedInvoice &&
      typeof storedInvoice === "object" &&
      storedInvoice.id === defaultInvoiceRecord.id
    ) {
      return defaultInvoiceRecord;
    }

    return storedInvoice;
  });

  const hasMigratedInvoice = migratedInvoices.some(
    (invoice, index) => invoice !== storedInvoices[index]
  );

  if (hasMigratedInvoice) {
    saveStoredArray(invoicesStorageKey, migratedInvoices);
  }

  return migratedInvoices;
}

function saveStoredInvoices(invoices) {
  saveStoredArray(invoicesStorageKey, invoices);
}

function normalizeInvoice(invoice) {
  const safeInvoice = invoice && typeof invoice === "object" ? invoice : {};
  const invoiceType = normalizeInvoiceType(safeInvoice.invoiceType);
  const totals = safeInvoice.totals && typeof safeInvoice.totals === "object"
    ? safeInvoice.totals
    : {};
  const normalizedHt = normalizeInvoiceAmount(totals.ht);
  const normalizedVat10 = normalizeInvoiceAmount(totals.vat10);
  const normalizedVat20 = normalizeInvoiceAmount(totals.vat20);
  const normalizedTtc = normalizeInvoiceAmount(
    typeof totals.ttc !== "undefined"
      ? totals.ttc
      : normalizedHt + normalizedVat10 + normalizedVat20
  );

  return {
    id:
      typeof safeInvoice.id === "string" && safeInvoice.id.trim()
        ? safeInvoice.id.trim()
        : `invoice-${Date.now()}`,
    number: cleanInputValue(safeInvoice.number) || "Sans numero",
    issuedAt: normalizeRentalEndDate(safeInvoice.issuedAt),
    invoiceType,
    sourceLabel: cleanInputValue(safeInvoice.sourceLabel) || getInvoiceTypeLabel(invoiceType),
    paymentStatus: normalizeInvoicePaymentStatus(safeInvoice.paymentStatus),
    settledAt: normalizeRentalEndDate(safeInvoice.settledAt),
    externalFlow: normalizeInvoiceExternalFlow(safeInvoice.externalFlow),
    paymentMethod: normalizeInvoicePaymentMethod(safeInvoice.paymentMethod),
    seller: {
      name: cleanInputValue(safeInvoice.seller?.name),
      address: cleanInputValue(safeInvoice.seller?.address),
      location: cleanInputValue(safeInvoice.seller?.location),
      phone: cleanInputValue(safeInvoice.seller?.phone),
      evtc: cleanInputValue(safeInvoice.seller?.evtc),
      siret: cleanInputValue(safeInvoice.seller?.siret),
    },
    client: {
      name: cleanInputValue(safeInvoice.client?.name),
      address: cleanInputValue(safeInvoice.client?.address),
      location: cleanInputValue(safeInvoice.client?.location),
      siret: cleanInputValue(safeInvoice.client?.siret),
      vat: cleanInputValue(safeInvoice.client?.vat),
      contact: cleanInputValue(safeInvoice.client?.contact),
      email: cleanInputValue(safeInvoice.client?.email),
      phone: cleanInputValue(safeInvoice.client?.phone),
    },
    service: {
      description: cleanInputValue(safeInvoice.service?.description),
      date: normalizeRentalEndDate(safeInvoice.service?.date),
      pickup: cleanInputValue(safeInvoice.service?.pickup),
      destination: cleanInputValue(safeInvoice.service?.destination),
      passengers: Math.max(0, Number(safeInvoice.service?.passengers) || 0),
      distanceKm: Math.max(0, Number(safeInvoice.service?.distanceKm) || 0),
    },
    totals: {
      ht: normalizedHt,
      vat10: normalizedVat10,
      vat20: normalizedVat20,
      ttc: normalizedTtc,
    },
    taxNote: cleanInputValue(safeInvoice.taxNote),
    insurance: cleanInputValue(safeInvoice.insurance),
    attachment: normalizeInvoiceAttachment(safeInvoice.attachment),
  };
}

function getNextInvoiceNumber(invoices = getStoredInvoices()) {
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

function clearInvoiceFormMessage() {
  if (!invoiceFormMessage) {
    return;
  }

  invoiceFormMessage.hidden = true;
  invoiceFormMessage.textContent = "";
  invoiceFormMessage.classList.remove("error", "success");
}

function showInvoiceFormMessage(message, type) {
  if (!invoiceFormMessage) {
    return;
  }

  invoiceFormMessage.hidden = false;
  invoiceFormMessage.textContent = message;
  invoiceFormMessage.classList.remove("error", "success");

  if (type) {
    invoiceFormMessage.classList.add(type);
  }
}

function setInvoiceFormOpen(isOpen) {
  if (!invoiceForm) {
    return;
  }

  invoiceForm.hidden = !isOpen;

  if (isOpen) {
    clearInvoiceFormMessage();
    invoiceForm.scrollIntoView({ behavior: "smooth", block: "start" });
    if (invoiceTypeInput && normalizeInvoiceType(invoiceTypeInput.value) === "external" && invoiceSellerNameInput) {
      invoiceSellerNameInput.focus();
    } else if (invoiceClientNameInput) {
      invoiceClientNameInput.focus();
    }
  }
}

function setInvoiceFormMode(invoice = null) {
  if (!invoiceFormKicker || !invoiceFormTitle || !submitInvoiceFormButton || !resetInvoiceFormButton) {
    return;
  }

  if (invoice) {
    invoiceFormKicker.textContent = "Modifier la facture";
    invoiceFormTitle.textContent = `Mettre a jour ${getInvoiceHeading(invoice)}`;
    submitInvoiceFormButton.textContent = "Enregistrer les modifications";
    resetInvoiceFormButton.textContent = "Revenir aux valeurs";
    return;
  }

  invoiceFormKicker.textContent = "Nouvelle facture";
  invoiceFormTitle.textContent = "Renseigner les informations du document";
  submitInvoiceFormButton.textContent = "Ajouter la facture";
  resetInvoiceFormButton.textContent = "Reinitialiser";
}

function updateInvoiceAttachmentHelp() {
  if (!invoiceAttachmentHelp || !invoiceAttachmentInput) {
    return;
  }

  const selectedFile = invoiceAttachmentInput.files?.[0] || null;
  if (selectedFile) {
    invoiceAttachmentHelp.textContent = `Nouveau fichier selectionne : ${selectedFile.name} (${formatInvoiceAttachmentSize(selectedFile.size)})`;
    return;
  }

  if (currentInvoiceAttachmentMeta) {
    invoiceAttachmentHelp.textContent =
      `Fichier deja enregistre : ${currentInvoiceAttachmentMeta.name} (${formatInvoiceAttachmentSize(currentInvoiceAttachmentMeta.size)}). Ajoutez un nouveau fichier pour le remplacer.`;
    return;
  }

  invoiceAttachmentHelp.textContent =
    "Ajoutez le fichier de la facture pour le retrouver plus tard dans l'application.";
}

function syncInvoiceTypeFields() {
  if (
    !invoiceTypeInput ||
    !invoiceExternalFlowField ||
    !invoiceExternalFlowInput ||
    !invoiceAttachmentField ||
    !invoiceCoreSectionText ||
    !invoiceSellerSectionTitle ||
    !invoiceSellerSectionText ||
    !invoiceClientSection ||
    !invoiceClientSectionText ||
    !invoiceServiceSectionTitle ||
    !invoiceServiceSectionText ||
    !invoiceServiceDescriptionLabel ||
    !invoiceServiceDateField ||
    !invoiceServicePickupField ||
    !invoiceServiceDestinationField ||
    !invoiceServicePassengersField ||
    !invoiceServiceDistanceField ||
    !invoiceClientNameInput ||
    !invoiceServiceDateInput ||
    !invoiceServicePickupInput ||
    !invoiceServiceDestinationInput ||
    !invoiceServiceDescriptionInput
  ) {
    return;
  }

  const isExternalInvoice = normalizeInvoiceType(invoiceTypeInput.value) === "external";

  invoiceExternalFlowField.hidden = !isExternalInvoice;
  invoiceAttachmentField.hidden = !isExternalInvoice;
  invoiceClientSection.hidden = isExternalInvoice;
  invoiceServiceDateField.hidden = isExternalInvoice;
  invoiceServicePickupField.hidden = isExternalInvoice;
  invoiceServiceDestinationField.hidden = isExternalInvoice;
  invoiceServicePassengersField.hidden = isExternalInvoice;
  invoiceServiceDistanceField.hidden = isExternalInvoice;

  invoiceClientNameInput.required = !isExternalInvoice;
  invoiceExternalFlowInput.required = isExternalInvoice;
  invoiceServiceDescriptionInput.required = true;
  invoiceServiceDateInput.required = !isExternalInvoice;
  invoiceServicePickupInput.required = !isExternalInvoice;
  invoiceServiceDestinationInput.required = !isExternalInvoice;

  if (isExternalInvoice) {
    invoiceCoreSectionText.textContent =
      "Choisissez un document externe recu, indiquez s'il est a payer ou a recevoir, puis ajoutez son fichier si vous voulez l'archiver ici.";
    invoiceSellerSectionTitle.textContent = "Emetteur externe";
    invoiceSellerSectionText.textContent =
      "Garage, collaborateur ou prestataire qui a emis la facture.";
    invoiceClientSectionText.textContent = "Section masquee pour une facture externe.";
    invoiceServiceSectionTitle.textContent = "Objet";
    invoiceServiceSectionText.textContent =
      "Resumez la depense ou le service facture par ce document externe.";
    invoiceServiceDescriptionLabel.textContent = "Designation / objet";
    updateInvoiceAttachmentHelp();
    return;
  }

  invoiceCoreSectionText.textContent = "Informations generales du document.";
  invoiceSellerSectionTitle.textContent = "Emetteur";
  invoiceSellerSectionText.textContent = "Informations de votre activite.";
  invoiceClientSectionText.textContent = "Entreprise et contact de facturation.";
  invoiceServiceSectionTitle.textContent = "Prestation";
  invoiceServiceSectionText.textContent = "Details de la course ou du service facture.";
  invoiceServiceDescriptionLabel.textContent = "Designation / objet";

  if (invoiceAttachmentInput) {
    invoiceAttachmentInput.value = "";
  }
  if (invoiceExternalFlowInput && !isExternalInvoice) {
    invoiceExternalFlowInput.value = "payable";
  }
  updateInvoiceAttachmentHelp();
}

function resetInvoiceForm() {
  if (!invoiceForm) {
    return;
  }

  editingInvoiceId = "";
  currentInvoiceAttachmentMeta = null;
  setInvoiceFormMode();
  invoiceForm.reset();

  if (invoiceTypeInput) {
    invoiceTypeInput.value = "client";
  }

  if (invoiceNumberInput) {
    invoiceNumberInput.value = getNextInvoiceNumber();
  }
  if (invoiceIssuedAtInput) {
    invoiceIssuedAtInput.value = getDateInputValue();
  }
  if (invoicePaymentMethodInput) {
    invoicePaymentMethodInput.value = "wire";
  }
  if (invoiceSettledAtInput) {
    invoiceSettledAtInput.value = "";
  }
  if (invoiceExternalFlowInput) {
    invoiceExternalFlowInput.value = "payable";
  }
  if (invoiceSellerNameInput) {
    invoiceSellerNameInput.value = "";
  }
  if (invoiceSellerAddressInput) {
    invoiceSellerAddressInput.value = "";
  }
  if (invoiceSellerLocationInput) {
    invoiceSellerLocationInput.value = "";
  }
  if (invoiceSellerPhoneInput) {
    invoiceSellerPhoneInput.value = "";
  }
  if (invoiceSellerEvtcInput) {
    invoiceSellerEvtcInput.value = "";
  }
  if (invoiceSellerSiretInput) {
    invoiceSellerSiretInput.value = "";
  }
  if (invoiceServiceDescriptionInput) {
    invoiceServiceDescriptionInput.value = "";
  }
  if (invoiceServiceDateInput) {
    invoiceServiceDateInput.value = getDateInputValue();
  }
  if (invoiceServicePickupInput) {
    invoiceServicePickupInput.value = "";
  }
  if (invoiceServiceDestinationInput) {
    invoiceServiceDestinationInput.value = "";
  }
  if (invoiceServicePassengersInput) {
    invoiceServicePassengersInput.value = "";
  }
  if (invoiceServiceDistanceInput) {
    invoiceServiceDistanceInput.value = "";
  }
  if (invoiceTotalHtInput) {
    invoiceTotalHtInput.value = "";
  }
  if (invoiceVat10Input) {
    invoiceVat10Input.value = "0";
  }
  if (invoiceVat20Input) {
    invoiceVat20Input.value = "0";
  }
  if (invoiceInsuranceInput) {
    invoiceInsuranceInput.value = "";
  }
  if (invoiceTaxNoteInput) {
    invoiceTaxNoteInput.value = "";
  }

  syncInvoiceTypeFields();
  clearInvoiceFormMessage();
}

function fillInvoiceForm(invoice) {
  if (!invoice) {
    return;
  }

  currentInvoiceAttachmentMeta = invoice.attachment || null;

  if (invoiceTypeInput) {
    invoiceTypeInput.value = normalizeInvoiceType(invoice.invoiceType);
  }
  if (invoiceNumberInput) {
    invoiceNumberInput.value = invoice.number || "";
  }
  if (invoiceIssuedAtInput) {
    invoiceIssuedAtInput.value = invoice.issuedAt || getDateInputValue();
  }
  if (invoicePaymentMethodInput) {
    invoicePaymentMethodInput.value = normalizeInvoicePaymentMethod(invoice.paymentMethod);
  }
  if (invoiceSettledAtInput) {
    invoiceSettledAtInput.value = invoice.settledAt || "";
  }
  if (invoiceExternalFlowInput) {
    invoiceExternalFlowInput.value = normalizeInvoiceExternalFlow(invoice.externalFlow);
  }
  if (invoiceSellerNameInput) {
    invoiceSellerNameInput.value = invoice.seller?.name || "";
  }
  if (invoiceSellerAddressInput) {
    invoiceSellerAddressInput.value = invoice.seller?.address || "";
  }
  if (invoiceSellerLocationInput) {
    invoiceSellerLocationInput.value = invoice.seller?.location || "";
  }
  if (invoiceSellerPhoneInput) {
    invoiceSellerPhoneInput.value = invoice.seller?.phone || "";
  }
  if (invoiceSellerEvtcInput) {
    invoiceSellerEvtcInput.value = invoice.seller?.evtc || "";
  }
  if (invoiceSellerSiretInput) {
    invoiceSellerSiretInput.value = invoice.seller?.siret || "";
  }
  if (invoiceClientNameInput) {
    invoiceClientNameInput.value = invoice.client?.name || "";
  }
  if (invoiceClientAddressInput) {
    invoiceClientAddressInput.value = invoice.client?.address || "";
  }
  if (invoiceClientLocationInput) {
    invoiceClientLocationInput.value = invoice.client?.location || "";
  }
  if (invoiceClientSiretInput) {
    invoiceClientSiretInput.value = invoice.client?.siret || "";
  }
  if (invoiceClientVatInput) {
    invoiceClientVatInput.value = invoice.client?.vat || "";
  }
  if (invoiceClientContactInput) {
    invoiceClientContactInput.value = invoice.client?.contact || "";
  }
  if (invoiceClientEmailInput) {
    invoiceClientEmailInput.value = invoice.client?.email || "";
  }
  if (invoiceClientPhoneInput) {
    invoiceClientPhoneInput.value = invoice.client?.phone || "";
  }
  if (invoiceServiceDescriptionInput) {
    invoiceServiceDescriptionInput.value = invoice.service?.description || "";
  }
  if (invoiceServiceDateInput) {
    invoiceServiceDateInput.value = invoice.service?.date || getDateInputValue();
  }
  if (invoiceServicePickupInput) {
    invoiceServicePickupInput.value = invoice.service?.pickup || "";
  }
  if (invoiceServiceDestinationInput) {
    invoiceServiceDestinationInput.value = invoice.service?.destination || "";
  }
  if (invoiceServicePassengersInput) {
    invoiceServicePassengersInput.value =
      typeof invoice.service?.passengers === "number" && invoice.service.passengers > 0
        ? String(invoice.service.passengers)
        : "";
  }
  if (invoiceServiceDistanceInput) {
    invoiceServiceDistanceInput.value =
      typeof invoice.service?.distanceKm === "number" && invoice.service.distanceKm > 0
        ? String(invoice.service.distanceKm)
        : "";
  }
  if (invoiceTotalHtInput) {
    invoiceTotalHtInput.value = String(normalizeInvoiceAmount(invoice.totals?.ht));
  }
  if (invoiceVat10Input) {
    invoiceVat10Input.value = String(normalizeInvoiceAmount(invoice.totals?.vat10));
  }
  if (invoiceVat20Input) {
    invoiceVat20Input.value = String(normalizeInvoiceAmount(invoice.totals?.vat20));
  }
  if (invoiceInsuranceInput) {
    invoiceInsuranceInput.value = invoice.insurance || "";
  }
  if (invoiceTaxNoteInput) {
    invoiceTaxNoteInput.value = invoice.taxNote || "";
  }

  if (invoiceAttachmentInput) {
    invoiceAttachmentInput.value = "";
  }

  syncInvoiceTypeFields();
}

function getInvoiceHeading(invoice) {
  return `FACTURE n\u00b0 ${invoice.number}`;
}

function getInvoicePrimaryPartyName(invoice) {
  if (normalizeInvoiceType(invoice?.invoiceType) === "external") {
    return invoice?.seller?.name || "Emetteur externe";
  }

  return invoice?.client?.name || "Client non renseigne";
}

function renderInvoicePartyLines(lines) {
  const filteredLines = lines.filter(Boolean);

  if (filteredLines.length === 0) {
    return "<p>Non renseigne</p>";
  }

  return filteredLines
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");
}

function renderExternalInvoiceAttachmentSection(invoice) {
  if (normalizeInvoiceType(invoice?.invoiceType) !== "external") {
    return "";
  }

  const attachment = normalizeInvoiceAttachment(invoice?.attachment);
  if (!attachment) {
    return `
      <div class="invoice-attachment-card">
        <div class="invoice-section-head">
          <span class="invoice-section-title">Fichier joint</span>
          <span class="invoice-section-note">Facture externe</span>
        </div>
        <p class="invoice-attachment-empty">
          Aucun fichier n'est encore associe a cette facture externe.
        </p>
      </div>
    `;
  }

  return `
    <div class="invoice-attachment-card">
      <div class="invoice-section-head">
        <span class="invoice-section-title">Fichier joint</span>
        <span class="invoice-section-note">${escapeHtml(attachment.type || "document")}</span>
      </div>

      <div class="invoice-attachment-details">
        <strong>${escapeHtml(attachment.name)}</strong>
        <span>${escapeHtml(formatInvoiceAttachmentSize(attachment.size))}</span>
      </div>

      <div class="invoice-attachment-actions">
        <button
          class="invoice-attachment-button"
          type="button"
          data-open-invoice-attachment="${escapeHtml(invoice.id)}"
        >
          Ouvrir le fichier
        </button>
        <button
          class="invoice-attachment-button secondary"
          type="button"
          data-download-invoice-attachment="${escapeHtml(invoice.id)}"
        >
          Telecharger le fichier
        </button>
      </div>
    </div>
  `;
}

function getInvoiceById(invoiceId) {
  if (!invoiceId) {
    return null;
  }

  const invoices = getStoredInvoices().map((storedInvoice) => normalizeInvoice(storedInvoice));
  return invoices.find((invoice) => invoice.id === invoiceId) || null;
}

function toggleInvoicePaymentStatus(invoiceId) {
  if (!invoiceId) {
    return;
  }

  const invoices = getStoredInvoices().map((storedInvoice) => normalizeInvoice(storedInvoice));
  const targetInvoice = invoices.find((invoice) => invoice.id === invoiceId);
  if (!targetInvoice) {
    return;
  }

  const nextPaymentStatus =
    normalizeInvoicePaymentStatus(targetInvoice.paymentStatus) === "paid" ? "unpaid" : "paid";
  const nextSettledAt =
    nextPaymentStatus === "paid"
      ? normalizeRentalEndDate(targetInvoice.settledAt) || getDateInputValue()
      : "";

  saveStoredInvoices(
    invoices.map((invoice) =>
      invoice.id === invoiceId
        ? {
            ...invoice,
            paymentStatus: nextPaymentStatus,
            settledAt: nextSettledAt,
          }
        : invoice
    )
  );

  renderInvoices();
}

function getInvoicePdfDocumentTitle(invoice) {
  const safeNumber = String(invoice?.number || "sans-numero")
    .trim()
    .replace(/[^a-z0-9_-]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return `facture-${safeNumber || "sans-numero"}`;
}

function startInvoiceEdit(invoiceId) {
  const invoice = getInvoiceById(invoiceId);
  if (!invoice) {
    return;
  }

  editingInvoiceId = invoice.id;
  setInvoiceFormMode(invoice);
  fillInvoiceForm(invoice);
  clearInvoiceFormMessage();
  setInvoiceFormOpen(true);
}

async function openInvoiceAttachment(invoiceId) {
  const invoice = getInvoiceById(invoiceId);
  const attachment = normalizeInvoiceAttachment(invoice?.attachment);
  if (!attachment) {
    window.alert("Aucun fichier n'est associe a cette facture.");
    return;
  }

  try {
    const storedAttachment = await getStoredInvoiceAttachment(attachment);
    if (!storedAttachment?.blob) {
      window.alert("Le fichier de cette facture n'a pas ete retrouve.");
      return;
    }

    const objectUrl = window.URL.createObjectURL(storedAttachment.blob);
    window.open(objectUrl, "_blank", "noopener");
    window.setTimeout(() => {
      window.URL.revokeObjectURL(objectUrl);
    }, 60000);
  } catch (error) {
    window.alert("Impossible d'ouvrir le fichier joint.");
  }
}

async function downloadInvoiceAttachment(invoiceId) {
  const invoice = getInvoiceById(invoiceId);
  const attachment = normalizeInvoiceAttachment(invoice?.attachment);
  if (!attachment) {
    window.alert("Aucun fichier n'est associe a cette facture.");
    return;
  }

  try {
    const storedAttachment = await getStoredInvoiceAttachment(attachment);
    if (!storedAttachment?.blob) {
      window.alert("Le fichier de cette facture n'a pas ete retrouve.");
      return;
    }

    const objectUrl = window.URL.createObjectURL(storedAttachment.blob);
    const downloadLink = document.createElement("a");
    downloadLink.href = objectUrl;
    downloadLink.download = attachment.name || getInvoicePdfDocumentTitle(invoice);
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => {
      window.URL.revokeObjectURL(objectUrl);
    }, 5000);
  } catch (error) {
    window.alert("Impossible de telecharger le fichier joint.");
  }
}

function exportInvoiceToPdf(invoiceId) {
  const invoice = getInvoiceById(invoiceId);
  if (!invoice) {
    return;
  }

  const stylesheetHref =
    document.querySelector('link[href*="styles.css"]')?.href ||
    `${window.location.origin}/styles.css`;
  const exportWindow = window.open("", "_blank", "width=1100,height=1400");

  if (!exportWindow) {
    window.alert("Autorisez l'ouverture des fenetres pour exporter la facture en PDF.");
    return;
  }

  exportWindow.document.open();
  exportWindow.document.write(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(getInvoicePdfDocumentTitle(invoice))}</title>
        <link rel="stylesheet" href="${escapeHtml(stylesheetHref)}" />
        <style>
          @page {
            size: A4;
            margin: 8mm;
          }

          html, body {
            margin: 0;
            padding: 0;
            background: #ffffff;
          }

          body {
            color: #1c2931;
            font-size: 12px;
            line-height: 1.35;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .invoice-print-shell {
            padding: 0;
          }

          .invoice-sheet {
            max-width: 190mm;
            margin: 0;
            padding: 10mm;
            gap: 9px;
            border: none;
            box-shadow: none;
            background: #ffffff;
          }

          .invoice-sheet-head h4 {
            font-size: 20px;
          }

          .invoice-sheet-actions {
            gap: 6px;
          }

          .invoice-date-box {
            min-width: 0;
            padding: 8px 10px;
            gap: 3px;
          }

          .invoice-party-grid {
            gap: 8px;
          }

          .invoice-party-card,
          .invoice-service-card,
          .invoice-total-card {
            padding: 10px 12px;
            border-radius: 14px;
            background: #ffffff;
          }

          .invoice-party-card {
            gap: 4px;
          }

          .invoice-party-card p,
          .invoice-legal p {
            font-size: 11px;
            line-height: 1.35;
          }

          .invoice-service-card,
          .invoice-total-card {
            gap: 8px;
          }

          .invoice-service-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
          }

          .invoice-service-row {
            display: grid;
            gap: 4px;
            padding: 8px 10px;
          }

          .invoice-service-row strong {
            text-align: left;
          }

          .invoice-total-card {
            grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
            gap: 8px;
          }

          .invoice-totals {
            gap: 6px;
          }

          .invoice-total-row {
            padding-bottom: 6px;
          }

          .invoice-total-row-strong {
            padding: 10px 12px;
          }

          .invoice-sheet-actions,
          .invoice-preview-close,
          .invoice-edit-button,
          .invoice-export-button,
          .invoice-attachment-actions {
            display: none !important;
          }
        </style>
      </head>
      <body>
        <div class="invoice-print-shell">
          ${renderInvoiceFullSheet(invoice, { showActions: false })}
        </div>
        <script>
          window.addEventListener("load", function () {
            window.setTimeout(function () {
              window.print();
            }, 300);
          });

          window.addEventListener("afterprint", function () {
            window.close();
          });
        </script>
      </body>
    </html>
  `);
  exportWindow.document.close();
}

function renderInvoiceFullSheet(invoice, options = {}) {
  const { showActions = true } = options;
  const isExternalInvoice = normalizeInvoiceType(invoice?.invoiceType) === "external";
  const paymentStatusLabel = getInvoicePaymentStatusLabel(invoice.paymentStatus);
  const settledAt = normalizeRentalEndDate(invoice?.settledAt);
  const settledAtLabel = settledAt ? formatInvoiceDate(settledAt) : "";
  const externalFlowLabel = isExternalInvoice ? getInvoiceExternalFlowLabel(invoice.externalFlow) : "";
  const sellerLines = [
    invoice.seller.address,
    invoice.seller.location,
    invoice.seller.phone,
    invoice.seller.evtc ? `Registre EVTC : ${invoice.seller.evtc}` : "",
    invoice.seller.siret ? `N\u00b0 SIRET ${invoice.seller.siret}` : "",
  ];
  const clientLines = [
    invoice.client.address,
    invoice.client.location,
    invoice.client.siret ? `SIRET ${invoice.client.siret}` : "",
    invoice.client.vat,
    invoice.client.contact,
    invoice.client.email,
    invoice.client.phone,
  ];
  const serviceRowsMarkup = isExternalInvoice
    ? `
        <div class="invoice-service-row">
          <span>Designation / objet</span>
          <strong>${escapeHtml(invoice.service.description || "Non renseignee")}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Date du document</span>
          <strong>${escapeHtml(formatInvoiceDate(invoice.issuedAt))}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Mode de paiement</span>
          <strong>${escapeHtml(getInvoicePaymentMethodLabel(invoice.paymentMethod))}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Nature du document</span>
          <strong>${escapeHtml(externalFlowLabel)}</strong>
        </div>
      `
    : `
        <div class="invoice-service-row">
          <span>Designation / objet</span>
          <strong>${escapeHtml(invoice.service.description || "Non renseignee")}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Date de prise en charge</span>
          <strong>${escapeHtml(formatInvoiceDate(invoice.service.date))}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Lieu de prise en charge</span>
          <strong>${escapeHtml(invoice.service.pickup || "Non renseigne")}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Destination</span>
          <strong>${escapeHtml(invoice.service.destination || "Non renseignee")}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Nombre de passagers</span>
          <strong>${String(invoice.service.passengers || 0).padStart(2, "0")}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Kilometres parcourus</span>
          <strong>${invoice.service.distanceKm ? `${invoice.service.distanceKm} km` : "Non renseignes"}</strong>
        </div>
        <div class="invoice-service-row">
          <span>Mode de paiement</span>
          <strong>${escapeHtml(getInvoicePaymentMethodLabel(invoice.paymentMethod))}</strong>
        </div>
      `;

  return `
    <section class="invoice-sheet" aria-label="Apercu detaille de facture">
      <div class="invoice-sheet-head">
        <div>
          <p class="detail-kicker">${escapeHtml(isExternalInvoice ? "Document externe" : "Document client")}</p>
          <h4>${escapeHtml(getInvoiceHeading(invoice))}</h4>
        </div>

        <div class="invoice-sheet-actions">
          ${
            showActions
              ? `
                <div class="invoice-sheet-action-buttons">
                  <button
                    class="invoice-edit-button"
                    type="button"
                    data-edit-invoice="${escapeHtml(invoice.id)}"
                  >
                    Modifier la facture
                  </button>
                  ${
                    isExternalInvoice
                      ? ""
                      : `
                        <button
                          class="invoice-export-button"
                          type="button"
                          data-export-invoice-pdf="${escapeHtml(invoice.id)}"
                        >
                          Telecharger en PDF
                        </button>
                      `
                  }
                  <button class="invoice-preview-close" type="button" data-close-invoice-preview>
                    Reduire l'affichage
                  </button>
                </div>
              `
              : ""
          }

          <div class="invoice-sheet-meta-boxes">
            <div class="invoice-date-box">
              <span>Date d'emission</span>
              <strong>${escapeHtml(formatInvoiceDate(invoice.issuedAt))}</strong>
            </div>
            <div class="invoice-date-box invoice-date-box-settlement ${escapeHtml(
              normalizeInvoicePaymentStatus(invoice.paymentStatus)
            )}">
              <span>Reglement</span>
              <strong>${escapeHtml(paymentStatusLabel)}</strong>
              ${
                settledAtLabel
                  ? `<small>Le ${escapeHtml(settledAtLabel)}</small>`
                  : `<small>Date non renseignee</small>`
              }
            </div>
            ${
              isExternalInvoice
                ? `
                  <div class="invoice-date-box invoice-date-box-flow">
                    <span>Nature</span>
                    <strong>${escapeHtml(externalFlowLabel)}</strong>
                  </div>
                `
                : ""
            }
          </div>
        </div>
      </div>

      <div class="invoice-party-grid">
        <article class="invoice-party-card">
          <span class="invoice-party-title">${isExternalInvoice ? "Emetteur externe" : "Emetteur"}</span>
          <strong>${escapeHtml(invoice.seller.name || "Non renseigne")}</strong>
          ${renderInvoicePartyLines(sellerLines)}
        </article>

        ${
          isExternalInvoice
            ? `
              <article class="invoice-party-card">
                <span class="invoice-party-title">Type de document</span>
                <strong>${escapeHtml(getInvoiceTypeLabel(invoice.invoiceType))}</strong>
                <p>${escapeHtml(externalFlowLabel)}</p>
                <p>${escapeHtml(settledAtLabel ? `${paymentStatusLabel} le ${settledAtLabel}` : paymentStatusLabel)}</p>
              </article>
            `
            : `
              <article class="invoice-party-card">
                <span class="invoice-party-title">Client</span>
                <strong>${escapeHtml(invoice.client.name || "Non renseigne")}</strong>
                ${renderInvoicePartyLines(clientLines)}
              </article>
            `
        }
      </div>

      ${renderExternalInvoiceAttachmentSection(invoice)}

      <div class="invoice-service-card">
        <div class="invoice-section-head">
          <span class="invoice-section-title">${isExternalInvoice ? "Document externe" : "Prestation facturee"}</span>
          <span class="invoice-section-note">${escapeHtml(
            isExternalInvoice
              ? `${getInvoiceTypeLabel(invoice.invoiceType)} - ${externalFlowLabel}`
              : getInvoiceTypeLabel(invoice.invoiceType)
          )}</span>
        </div>

        <div class="invoice-service-grid">
          ${serviceRowsMarkup}
        </div>
      </div>

      <div class="invoice-total-card">
        <div class="invoice-totals">
          <div class="invoice-total-row">
            <span>Total HT</span>
            <strong>${escapeHtml(formatInvoiceAmount(invoice.totals.ht))}</strong>
          </div>
          <div class="invoice-total-row">
            <span>TVA 10 %</span>
            <strong>${escapeHtml(formatInvoiceAmount(invoice.totals.vat10))}</strong>
          </div>
          <div class="invoice-total-row">
            <span>TVA 20 %</span>
            <strong>${escapeHtml(formatInvoiceAmount(invoice.totals.vat20))}</strong>
          </div>
          <div class="invoice-total-row invoice-total-row-strong">
            <span>Total TTC</span>
            <strong>${escapeHtml(formatInvoiceAmount(invoice.totals.ttc))}</strong>
          </div>
        </div>

        <div class="invoice-legal">
          <p>${escapeHtml(invoice.taxNote || "TVA non applicable conformement a l'article 293 B du CGI.")}</p>
          <p>${escapeHtml(invoice.insurance ? `Assurance : ${invoice.insurance}` : "Assurance non renseignee")}</p>
        </div>
      </div>
    </section>
  `;
}

function updateInvoiceSummaries(invoices, activeInvoice) {
  if (invoiceCountSummary) {
    invoiceCountSummary.textContent = String(invoices.length);
  }

  if (invoiceClientSummary) {
    invoiceClientSummary.textContent = activeInvoice
      ? getInvoicePrimaryPartyName(activeInvoice)
      : "Choisir une facture";
  }

  if (invoiceTotalSummary) {
    invoiceTotalSummary.textContent = activeInvoice
      ? formatInvoiceAmount(activeInvoice.totals.ttc)
      : "A selectionner";
  }

  if (invoicePaymentSummary) {
    invoicePaymentSummary.textContent = activeInvoice
      ? getInvoiceTypeLabel(activeInvoice.invoiceType)
      : "A selectionner";
  }
}

function renderInvoicePreview(invoice) {
  if (!invoicePreview) {
    return;
  }

  if (!invoice) {
    invoicePreview.hidden = true;
    invoicePreview.innerHTML = "";
    return;
  }

  invoicePreview.hidden = false;
  invoicePreview.innerHTML = `
    <section class="invoice-preview-stack" aria-label="Apercu de facture">
      ${renderInvoiceFullSheet(invoice)}
    </section>
  `;
}

function renderInvoices() {
  if (!invoiceRecordList) {
    return;
  }

  const invoices = getStoredInvoices()
    .map((storedInvoice) => normalizeInvoice(storedInvoice))
    .sort((leftInvoice, rightInvoice) => {
      const dateCompare = (rightInvoice.issuedAt || "").localeCompare(leftInvoice.issuedAt || "");
      if (dateCompare !== 0) {
        return dateCompare;
      }

      return rightInvoice.number.localeCompare(leftInvoice.number, "fr", {
        numeric: true,
        sensitivity: "base",
      });
    });

  const filteredInvoices = invoices.filter((invoice) => matchesInvoiceFilters(invoice));
  updateInvoiceFilterSummary(filteredInvoices.length, invoices.length);

  if (invoices.length === 0) {
    updateInvoiceSummaries([], null);
    invoiceRecordList.innerHTML = `
      <article class="invoice-empty">
        <strong>Aucune facture creee pour le moment.</strong>
        <p>Utilisez le bouton Ajouter une facture pour enregistrer votre premier document.</p>
      </article>
    `;
    renderInvoicePreview(null);
    return;
  }

  if (!selectedInvoiceId || !filteredInvoices.some((invoice) => invoice.id === selectedInvoiceId)) {
    selectedInvoiceId = "";
  }

  const activeInvoice = filteredInvoices.find((invoice) => invoice.id === selectedInvoiceId) || null;
  updateInvoiceSummaries(invoices, activeInvoice);

  if (filteredInvoices.length === 0) {
    invoiceRecordList.innerHTML = `
      <article class="invoice-empty">
        <strong>Aucune facture ne correspond au filtre actif.</strong>
        <p>Changez le type de facture ou reinitialisez le filtre pour revoir tous vos documents.</p>
      </article>
    `;
    renderInvoicePreview(null);
    return;
  }

  invoiceRecordList.innerHTML = filteredInvoices
    .map((invoice) => {
      const isActive = activeInvoice ? invoice.id === activeInvoice.id : false;
      const typeClassName = getInvoiceRecordTypeClass(invoice.invoiceType);
      const paymentStatus = normalizeInvoicePaymentStatus(invoice.paymentStatus);
      const isPaid = paymentStatus === "paid";
      const settledAt = normalizeRentalEndDate(invoice.settledAt);
      const settledAtLabel = settledAt ? formatInvoiceDate(settledAt) : "";

      return `
        <article
          class="invoice-record ${typeClassName} ${isActive ? "active" : ""}"
          data-invoice-id="${escapeHtml(invoice.id)}"
          tabindex="0"
          aria-current="${isActive ? "true" : "false"}"
        >
          <div class="invoice-record-head">
            <div>
              <p class="detail-kicker">Facture</p>
              <h4>${escapeHtml(getInvoiceHeading(invoice))}</h4>
            </div>
            <span class="invoice-record-status">${escapeHtml(getInvoiceTypeLabel(invoice.invoiceType))}</span>
          </div>

          <div class="invoice-record-meta">
            <span class="invoice-record-client">${escapeHtml(getInvoicePrimaryPartyName(invoice))}</span>
            <span class="invoice-record-date">${escapeHtml(formatInvoiceDate(invoice.issuedAt))}</span>
          </div>

          <div class="invoice-record-amounts">
            <article>
              <span>Total TTC</span>
              <strong>${escapeHtml(formatInvoiceAmount(invoice.totals.ttc))}</strong>
            </article>
            <article>
              <span>${normalizeInvoiceType(invoice.invoiceType) === "external" ? "Nature" : "Paiement"}</span>
              <strong>${escapeHtml(
                normalizeInvoiceType(invoice.invoiceType) === "external"
                  ? getInvoiceExternalFlowLabel(invoice.externalFlow)
                  : getInvoicePaymentMethodLabel(invoice.paymentMethod)
              )}</strong>
            </article>
          </div>

          <div class="invoice-record-settlement">
            <div class="invoice-record-settlement-copy">
              <span class="invoice-record-settlement-label">Reglement</span>
              <span class="invoice-record-settlement-date">${escapeHtml(
                settledAtLabel ? `Le ${settledAtLabel}` : "Date non renseignee"
              )}</span>
            </div>
            <button
              class="invoice-settlement-switch ${paymentStatus}"
              type="button"
              role="switch"
              aria-checked="${isPaid ? "true" : "false"}"
              aria-label="${escapeHtml(
                isPaid ? "Marquer la facture comme non reglee" : "Marquer la facture comme reglee"
              )}"
              data-toggle-invoice-paid="${escapeHtml(invoice.id)}"
            >
              <span class="invoice-settlement-switch-text">${escapeHtml(
                getInvoicePaymentStatusLabel(invoice.paymentStatus)
              )}</span>
              <span class="invoice-settlement-switch-track" aria-hidden="true">
                <span class="invoice-settlement-switch-thumb"></span>
              </span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  renderInvoicePreview(activeInvoice);
}

async function handleInvoiceSubmit(event) {
  event.preventDefault();

  if (
    !invoiceTypeInput ||
    !invoiceNumberInput ||
    !invoiceIssuedAtInput ||
    !invoicePaymentMethodInput ||
    !invoiceSellerNameInput ||
    !invoiceSellerAddressInput ||
    !invoiceSellerLocationInput ||
    !invoiceClientNameInput ||
    !invoiceServiceDescriptionInput ||
    !invoiceServiceDateInput ||
    !invoiceServicePickupInput ||
    !invoiceServiceDestinationInput ||
    !invoiceTotalHtInput
  ) {
    return;
  }

  const invoices = getStoredInvoices().map((storedInvoice) => normalizeInvoice(storedInvoice));
  const invoiceType = normalizeInvoiceType(invoiceTypeInput.value);
  const isExternalInvoice = invoiceType === "external";
  const number = cleanInputValue(invoiceNumberInput.value);
  const issuedAt = normalizeRentalEndDate(invoiceIssuedAtInput.value);
  const paymentMethod = normalizeInvoicePaymentMethod(invoicePaymentMethodInput.value);
  const settledAt = normalizeRentalEndDate(invoiceSettledAtInput?.value);
  const externalFlow = normalizeInvoiceExternalFlow(invoiceExternalFlowInput?.value || "payable");
  const totalHt = normalizeInvoiceAmount(invoiceTotalHtInput.value);
  const vat10 = normalizeInvoiceAmount(invoiceVat10Input?.value || 0);
  const vat20 = normalizeInvoiceAmount(invoiceVat20Input?.value || 0);
  const totalTtc = totalHt + vat10 + vat20;

  if (!number || !issuedAt) {
    showInvoiceFormMessage("Merci de renseigner le numero et la date de facture.", "error");
    return;
  }

  if (!isExternalInvoice && !cleanInputValue(invoiceClientNameInput.value)) {
    showInvoiceFormMessage("Merci de renseigner le nom du client.", "error");
    return;
  }

  if (!cleanInputValue(invoiceServiceDescriptionInput.value)) {
    showInvoiceFormMessage("Merci de renseigner l'objet de la facture.", "error");
    return;
  }

  if (
    !isExternalInvoice &&
    (!cleanInputValue(invoiceServicePickupInput.value) || !cleanInputValue(invoiceServiceDestinationInput.value))
  ) {
    showInvoiceFormMessage("Merci de renseigner la prise en charge et la destination.", "error");
    return;
  }

  if (totalHt <= 0) {
    showInvoiceFormMessage("Le total HT doit etre superieur a 0.", "error");
    return;
  }

  const duplicateInvoice = invoices.some(
    (invoice) =>
      invoice.id !== editingInvoiceId &&
      normalizeTextValue(invoice.number) === normalizeTextValue(number)
  );
  if (duplicateInvoice) {
    showInvoiceFormMessage("Ce numero de facture existe deja.", "error");
    return;
  }

  const existingInvoice = editingInvoiceId
    ? invoices.find((invoice) => invoice.id === editingInvoiceId) || null
    : null;
  const nextInvoiceId = existingInvoice?.id || `invoice-${Date.now()}-${number}`;
  let nextAttachment = existingInvoice?.attachment || null;
  const selectedAttachmentFile = invoiceAttachmentInput?.files?.[0] || null;

  try {
    if (isExternalInvoice && selectedAttachmentFile) {
      nextAttachment = await saveInvoiceAttachmentFile(
        selectedAttachmentFile,
        nextInvoiceId,
        existingInvoice?.attachment?.id || ""
      );
    } else if (!isExternalInvoice && existingInvoice?.attachment?.id) {
      await deleteStoredInvoiceAttachment(existingInvoice.id, existingInvoice.attachment.id);
      nextAttachment = null;
    }
  } catch (error) {
    showInvoiceFormMessage("Impossible d'enregistrer le fichier joint pour cette facture.", "error");
    return;
  }

  const nextInvoice = normalizeInvoice({
    id: nextInvoiceId,
    number,
    issuedAt,
    invoiceType,
    sourceLabel: getInvoiceTypeLabel(invoiceType),
    paymentStatus: settledAt ? "paid" : "unpaid",
    settledAt,
    externalFlow: isExternalInvoice ? externalFlow : "payable",
    paymentMethod,
    seller: {
      name: invoiceSellerNameInput.value,
      address: invoiceSellerAddressInput?.value || "",
      location: invoiceSellerLocationInput?.value || "",
      phone: invoiceSellerPhoneInput?.value || "",
      evtc: invoiceSellerEvtcInput?.value || "",
      siret: invoiceSellerSiretInput?.value || "",
    },
    client: {
      name: isExternalInvoice ? "" : invoiceClientNameInput.value,
      address: isExternalInvoice ? "" : invoiceClientAddressInput?.value || "",
      location: isExternalInvoice ? "" : invoiceClientLocationInput?.value || "",
      siret: isExternalInvoice ? "" : invoiceClientSiretInput?.value || "",
      vat: isExternalInvoice ? "" : invoiceClientVatInput?.value || "",
      contact: isExternalInvoice ? "" : invoiceClientContactInput?.value || "",
      email: isExternalInvoice ? "" : invoiceClientEmailInput?.value || "",
      phone: isExternalInvoice ? "" : invoiceClientPhoneInput?.value || "",
    },
    service: {
      description: invoiceServiceDescriptionInput.value,
      date: isExternalInvoice ? "" : invoiceServiceDateInput.value,
      pickup: isExternalInvoice ? "" : invoiceServicePickupInput.value,
      destination: isExternalInvoice ? "" : invoiceServiceDestinationInput.value,
      passengers: isExternalInvoice ? 0 : Number(invoiceServicePassengersInput?.value || 0),
      distanceKm: isExternalInvoice ? 0 : Number(invoiceServiceDistanceInput?.value || 0),
    },
    totals: {
      ht: totalHt,
      vat10,
      vat20,
      ttc: totalTtc,
    },
    taxNote: invoiceTaxNoteInput?.value || "",
    insurance: invoiceInsuranceInput?.value || "",
    attachment: isExternalInvoice ? nextAttachment : null,
  });

  if (existingInvoice) {
    saveStoredInvoices(
      invoices.map((invoice) => (invoice.id === existingInvoice.id ? nextInvoice : invoice))
    );
    selectedInvoiceId = nextInvoice.id;
  } else {
    invoices.push(nextInvoice);
    saveStoredInvoices(invoices);
    selectedInvoiceId = "";
  }

  renderInvoices();
  resetInvoiceForm();
  setInvoiceFormOpen(false);
}

if (navTrigger) {
  navTrigger.addEventListener("click", () => {
    const isOpen = navTrigger.getAttribute("aria-expanded") === "true";
    setNavMenuOpen(!isOpen);
  });
}

document.addEventListener("click", (event) => {
  if (!navMenu) {
    if (
      !(event.target instanceof Element) ||
      event.target.closest(".collaborator-language-autocomplete")
    ) {
      return;
    }

    hideCollaboratorLanguageSuggestions();
    return;
  }

  if (navMenu.contains(event.target)) {
    if (
      event.target instanceof Element &&
      !event.target.closest(".collaborator-language-autocomplete")
    ) {
      hideCollaboratorLanguageSuggestions();
    }
    return;
  }

  setNavMenuOpen(false);

  if (
    !(event.target instanceof Element) ||
    event.target.closest(".collaborator-language-autocomplete")
  ) {
    return;
  }

  hideCollaboratorLanguageSuggestions();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  setNavMenuOpen(false);
  resetVehicleForm();
  setVehicleFormOpen(false);
  resetCollaboratorForm();
  setCollaboratorFormOpen(false);

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
    syncVehicleCollaboratorFieldVisibility();
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

if (collaboratorForm) {
  collaboratorForm.addEventListener("submit", handleCollaboratorSubmit);
}

if (collaboratorRoleInput) {
  collaboratorRoleInput.addEventListener("change", () => {
    syncCollaboratorVehicleVisibility();
  });
}

if (toggleCollaboratorVehicleButton) {
  toggleCollaboratorVehicleButton.addEventListener("click", () => {
    if (!collaboratorVehicleFields) {
      return;
    }

    setCollaboratorVehicleFormOpen(collaboratorVehicleFields.hidden);
  });
}

if (addCollaboratorButton) {
  addCollaboratorButton.addEventListener("click", () => {
    resetCollaboratorForm();
    setCollaboratorFormOpen(true);
  });
}

if (openCollaboratorFormButton) {
  openCollaboratorFormButton.addEventListener("click", () => {
    resetCollaboratorForm();
    setCollaboratorFormOpen(true);
  });
}

if (cancelCollaboratorFormButton) {
  cancelCollaboratorFormButton.addEventListener("click", () => {
    resetCollaboratorForm();
    setCollaboratorFormOpen(false);
  });
}

if (resetCollaboratorFormButton) {
  resetCollaboratorFormButton.addEventListener("click", () => {
    if (editingCollaboratorIndex >= 0) {
      const collaborator = getStoredCollaboratorByIndex(editingCollaboratorIndex);
      if (collaborator) {
        setCollaboratorFormMode(collaborator);
        fillCollaboratorForm(collaborator);
        clearCollaboratorFormMessage();
        return;
      }
    }

    resetCollaboratorForm();
  });
}

if (addCollaboratorLanguageButton) {
  addCollaboratorLanguageButton.addEventListener("click", () => {
    addCollaboratorLanguage();
  });
}

if (collaboratorLanguageNameInput) {
  collaboratorLanguageNameInput.addEventListener("input", () => {
    renderCollaboratorLanguageSuggestions();
  });

  collaboratorLanguageNameInput.addEventListener("focus", () => {
    renderCollaboratorLanguageSuggestions();
  });

  collaboratorLanguageNameInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      if (!collaboratorLanguageSuggestionItems.length) {
        renderCollaboratorLanguageSuggestions();
      }

      if (!collaboratorLanguageSuggestionItems.length) {
        return;
      }

      event.preventDefault();
      const nextIndex =
        activeCollaboratorLanguageSuggestionIndex >=
        collaboratorLanguageSuggestionItems.length - 1
          ? 0
          : activeCollaboratorLanguageSuggestionIndex + 1;
      setActiveCollaboratorLanguageSuggestion(nextIndex);
      return;
    }

    if (event.key === "ArrowUp") {
      if (!collaboratorLanguageSuggestionItems.length) {
        return;
      }

      event.preventDefault();
      const nextIndex =
        activeCollaboratorLanguageSuggestionIndex <= 0
          ? collaboratorLanguageSuggestionItems.length - 1
          : activeCollaboratorLanguageSuggestionIndex - 1;
      setActiveCollaboratorLanguageSuggestion(nextIndex);
      return;
    }

    if (event.key === "Escape") {
      hideCollaboratorLanguageSuggestions();
      return;
    }

    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    if (
      activeCollaboratorLanguageSuggestionIndex >= 0 &&
      activeCollaboratorLanguageSuggestionIndex < collaboratorLanguageSuggestionItems.length
    ) {
      const selectedSuggestion =
        collaboratorLanguageSuggestionItems[activeCollaboratorLanguageSuggestionIndex];
      const { languageValue } = selectedSuggestion.dataset;

      if (languageValue) {
        selectCollaboratorLanguageSuggestion(languageValue);
        return;
      }
    }

    addCollaboratorLanguage();
  });
}

if (collaboratorLanguageList) {
  collaboratorLanguageList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const languageButton = event.target.closest(".collaborator-language-item");
    if (!languageButton) {
      return;
    }

    const { languageIndex } = languageButton.dataset;
    if (!languageIndex) {
      return;
    }

    removeCollaboratorLanguage(Number(languageIndex));
  });
}

if (collaboratorList) {
  collaboratorList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const editButton = event.target.closest(".collaborator-edit-button");
    if (!editButton) {
      return;
    }

    const { collaboratorIndex } = editButton.dataset;
    if (!collaboratorIndex) {
      return;
    }

    startCollaboratorEdit(Number(collaboratorIndex));
  });

  collaboratorList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest(".collaborator-edit-button")) {
      return;
    }

    const collaboratorCard = event.target.closest(".collaborator-card");
    if (!collaboratorCard || !collaboratorList.contains(collaboratorCard)) {
      return;
    }

    toggleCollaboratorCard(collaboratorCard);
  });

  collaboratorList.addEventListener("keydown", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest(".collaborator-edit-button")) {
      return;
    }

    const collaboratorCard = event.target.closest(".collaborator-card");
    if (!collaboratorCard || !collaboratorList.contains(collaboratorCard)) {
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    toggleCollaboratorCard(collaboratorCard);
  });
}

if (collaboratorLinkedVehicleList) {
  collaboratorLinkedVehicleList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const vehicleButton = event.target.closest(".collaborator-linked-vehicle-button");
    if (!vehicleButton) {
      return;
    }

    const { linkedVehicleId } = vehicleButton.dataset;
    if (!linkedVehicleId) {
      return;
    }

    startCollaboratorVehicleEdit(linkedVehicleId);
  });
}

if (collaboratorLanguageSuggestions) {
  collaboratorLanguageSuggestions.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const suggestionButton = event.target.closest(".collaborator-language-suggestion");
    if (!suggestionButton) {
      return;
    }

    const { languageValue } = suggestionButton.dataset;
    if (!languageValue) {
      return;
    }

    selectCollaboratorLanguageSuggestion(languageValue);
  });
}

if (invoiceForm) {
  invoiceForm.addEventListener("submit", handleInvoiceSubmit);
}

if (addInvoiceButton) {
  addInvoiceButton.addEventListener("click", () => {
    resetInvoiceForm();
    setInvoiceFormOpen(true);
  });
}

if (invoiceTypeInput) {
  invoiceTypeInput.addEventListener("change", () => {
    syncInvoiceTypeFields();
  });
}

if (invoiceAttachmentInput) {
  invoiceAttachmentInput.addEventListener("change", () => {
    updateInvoiceAttachmentHelp();
  });
}

if (invoiceTypeFilterInput) {
  invoiceTypeFilterInput.addEventListener("change", () => {
    renderInvoices();
  });
}

if (invoicePaymentStatusFilterInput) {
  invoicePaymentStatusFilterInput.addEventListener("change", () => {
    renderInvoices();
  });
}

if (resetInvoiceFiltersButton) {
  resetInvoiceFiltersButton.addEventListener("click", () => {
    if (invoiceTypeFilterInput) {
      invoiceTypeFilterInput.value = "all";
    }
    if (invoicePaymentStatusFilterInput) {
      invoicePaymentStatusFilterInput.value = "all";
    }

    renderInvoices();
  });
}

if (cancelInvoiceFormButton) {
  cancelInvoiceFormButton.addEventListener("click", () => {
    resetInvoiceForm();
    setInvoiceFormOpen(false);
  });
}

if (resetInvoiceFormButton) {
  resetInvoiceFormButton.addEventListener("click", () => {
    if (editingInvoiceId) {
      const invoice = getInvoiceById(editingInvoiceId);
      if (invoice) {
        setInvoiceFormMode(invoice);
        fillInvoiceForm(invoice);
        clearInvoiceFormMessage();
        return;
      }
    }

    resetInvoiceForm();
  });
}

if (invoiceRecordList) {
  invoiceRecordList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const settlementSwitch = event.target.closest("[data-toggle-invoice-paid]");
    if (settlementSwitch && invoiceRecordList.contains(settlementSwitch)) {
      const { toggleInvoicePaid } = settlementSwitch.dataset;
      if (toggleInvoicePaid) {
        toggleInvoicePaymentStatus(toggleInvoicePaid);
      }
      return;
    }

    const invoiceCard = event.target.closest(".invoice-record");
    if (!invoiceCard || !invoiceRecordList.contains(invoiceCard)) {
      return;
    }

    const { invoiceId } = invoiceCard.dataset;
    if (!invoiceId) {
      return;
    }

    selectedInvoiceId = selectedInvoiceId === invoiceId ? "" : invoiceId;
    renderInvoices();
    if (invoicePreview && !invoicePreview.hidden) {
      invoicePreview.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  invoiceRecordList.addEventListener("keydown", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const interactiveControl = event.target.closest("button, input, select, textarea, a");
    if (interactiveControl && !interactiveControl.classList.contains("invoice-record")) {
      return;
    }

    const invoiceCard = event.target.closest(".invoice-record");
    if (!invoiceCard || !invoiceRecordList.contains(invoiceCard)) {
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();

    const { invoiceId } = invoiceCard.dataset;
    if (!invoiceId) {
      return;
    }

    selectedInvoiceId = selectedInvoiceId === invoiceId ? "" : invoiceId;
    renderInvoices();
    if (invoicePreview && !invoicePreview.hidden) {
      invoicePreview.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

if (invoicePreview) {
  invoicePreview.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const editButton = event.target.closest("[data-edit-invoice]");
    if (editButton && invoicePreview.contains(editButton)) {
      const { editInvoice } = editButton.dataset;
      if (editInvoice) {
        startInvoiceEdit(editInvoice);
      }
      return;
    }

    const exportButton = event.target.closest("[data-export-invoice-pdf]");
    if (exportButton && invoicePreview.contains(exportButton)) {
      const { exportInvoicePdf } = exportButton.dataset;
      if (exportInvoicePdf) {
        exportInvoiceToPdf(exportInvoicePdf);
      }
      return;
    }

    const openAttachmentButton = event.target.closest("[data-open-invoice-attachment]");
    if (openAttachmentButton && invoicePreview.contains(openAttachmentButton)) {
      const { openInvoiceAttachment: attachmentInvoiceId } = openAttachmentButton.dataset;
      if (attachmentInvoiceId) {
        openInvoiceAttachment(attachmentInvoiceId);
      }
      return;
    }

    const downloadAttachmentButton = event.target.closest("[data-download-invoice-attachment]");
    if (downloadAttachmentButton && invoicePreview.contains(downloadAttachmentButton)) {
      const { downloadInvoiceAttachment: attachmentInvoiceId } = downloadAttachmentButton.dataset;
      if (attachmentInvoiceId) {
        downloadInvoiceAttachment(attachmentInvoiceId);
      }
      return;
    }

    const closeButton = event.target.closest("[data-close-invoice-preview]");
    if (!closeButton || !invoicePreview.contains(closeButton)) {
      return;
    }

    selectedInvoiceId = "";
    renderInvoices();
  });
}

async function initializeRoutePiloteApp() {
  try {
    await bootstrapServerBackedData();
  } catch (error) {
    // L'application garde le fallback local si l'API n'est pas disponible.
  }

  syncCurrentLabel();
  buildCurrentWeekCalendar();
  setVehicleFormMode();
  syncRentalEndFieldVisibility();
  syncVehicleCollaboratorFieldVisibility();
  syncVehicleStatusWithRentalEndDate();
  renderVehicles();
  setCollaboratorFormMode();
  syncCollaboratorVehicleVisibility();
  renderCollaboratorLanguagePreview();
  renderCollaborators();
  resetInvoiceForm();
  syncInvoiceTypeFields();
  renderInvoices();
}

window.routePiloteAppDataReady = initializeRoutePiloteApp();

