(() => {
  const financeWorkspace = document.querySelector("#finance-workspace");

  if (!financeWorkspace) {
    return;
  }

  const financeEntriesStorageKey = "route-pilote-finance-entries";
  const financeChartModeStorageKey = "route-pilote-finance-chart-mode";
  const invoicesStorageKey = "route-pilote-invoices";

  const financeSections = document.querySelector("#finance-sections");
  const financeDashboard = document.querySelector("#finance-dashboard");
  const financeFilterBar = document.querySelector("#finance-filter-bar");
  const toggleFinanceFiltersButton = document.querySelector("#toggle-finance-filters");
  const financeFilterToggleLabel = document.querySelector("#finance-filter-toggle-label");
  const financeForm = document.querySelector("#finance-form-card");
  const cancelFinanceFormButton = document.querySelector("#cancel-finance-form");
  const resetFinanceFormButton = document.querySelector("#reset-finance-form");
  const submitFinanceFormButton = document.querySelector("#submit-finance-form");
  const deleteFinanceEntryButton = document.querySelector("#delete-finance-entry");
  const financeFormKicker = document.querySelector("#finance-form-kicker");
  const financeFormTitle = document.querySelector("#finance-form-title");
  const financeFormContext = document.querySelector("#finance-form-context");
  const financeFormMessage = document.querySelector("#finance-form-message");
  const financeIncomeSummary = document.querySelector("#finance-income-summary");
  const financeExpenseSummary = document.querySelector("#finance-expense-summary");
  const financeBalanceSummary = document.querySelector("#finance-balance-summary");
  const financePendingSummary = document.querySelector("#finance-pending-summary");
  const financeSourceFilterInput = document.querySelector("#finance-source-filter");
  const financeCategoryFilterInput = document.querySelector("#finance-category-filter");
  const financeStatusFilterInput = document.querySelector("#finance-status-filter");
  const financeDirectionFilterInput = document.querySelector("#finance-direction-filter");
  const financePeriodFilterInput = document.querySelector("#finance-period-filter");
  const resetFinanceFiltersButton = document.querySelector("#reset-finance-filters");
  const financeFilterSummary = document.querySelector("#finance-filter-summary");
  const financeScopeInput = document.querySelector("#finance-scope");
  const financeMissionField = document.querySelector("#finance-mission-field");
  const financeLinkedMissionInput = document.querySelector("#finance-linked-mission");
  const financeEntryLabelInput = document.querySelector("#finance-entry-label");
  const financeEntryCategoryInput = document.querySelector("#finance-entry-category");
  const financeEntryDirectionInput = document.querySelector("#finance-entry-direction");
  const financeEntryAmountInput = document.querySelector("#finance-entry-amount");
  const financeEntryStatusInput = document.querySelector("#finance-entry-status");
  const financeEntrySettledAtInput = document.querySelector("#finance-entry-settled-at");
  const financeEntryNoteInput = document.querySelector("#finance-entry-note");

  const categoryLabels = {
    mission: "Mission",
    client_invoices: "Factures clients",
    external_invoices: "Factures externes",
    fuel: "Carburant",
    team: "Equipe",
    tolls_parking: "Peage + parking",
    activities: "Activites",
    maintenance: "Entretien / reparation",
    other: "Autres",
  };
  const directionLabels = {
    income: "Recette",
    expense: "Depense",
  };
  const statusLabels = {
    pending: "En attente",
    validated: "Valide",
    estimated: "Estime",
  };
  const chartModeLabels = {
    line: "Courbe mensuelle",
    bars: "Barres par categorie",
    monthly: "Barres mensuelles",
  };
  const allSourceFilters = new Set(["all", "invoices", "missions", "manual"]);
  const allStatusFilters = new Set(["all", "pending", "validated", "estimated"]);
  const allDirectionFilters = new Set(["all", "income", "expense"]);
  const allPeriodFilters = new Set(["all", "7d", "30d", "year"]);
  const allChartModes = new Set(["line", "bars", "monthly"]);
  const zeroAllowedCategories = new Set(["team", "tolls_parking", "activities"]);

  let editingFinanceEntryId = "";
  let editingFinanceSourceRowKey = "";
  let editingFinanceMode = "manual";
  let editingFinanceContext = null;
  let financeFormBaseline = null;
  let financeRowRegistry = new Map();
  let expandedFinanceMissionIds = new Set();
  let currentFinanceChartMode = getStoredFinanceChartMode();
  let financeDataSyncTimer = 0;

  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
    month: "short",
    year: "2-digit",
  });

  function clean(value) {
    if (typeof window.cleanInputValue === "function") {
      return window.cleanInputValue(value);
    }

    return typeof value === "string" ? value.trim() : "";
  }

  function escapeText(value) {
    if (typeof window.escapeHtml === "function") {
      return window.escapeHtml(String(value ?? ""));
    }

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(value) {
    return clean(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function toNumber(value, fallback = 0) {
    const parsedValue = Number(String(value ?? "").replace(",", "."));
    return Number.isFinite(parsedValue) ? parsedValue : fallback;
  }

  function normalizeDate(value) {
    const text = clean(value);
    return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : "";
  }

  function getFinanceLocale() {
    return typeof window.routePiloteLanguage?.locale === "function" ? window.routePiloteLanguage.locale() : "fr-FR";
  }

  function translateFinanceText(value) {
    const text = String(value ?? "");
    const translator = window.routePiloteLanguage?.translateText;
    return typeof translator === "function" ? translator(text) : text;
  }

  function categoryLabel(category) {
    return translateFinanceText(categoryLabels[normalizeCategory(category)] || categoryLabels.other);
  }

  function statusLabel(status) {
    return translateFinanceText(statusLabels[normalizeStatus(status)] || statusLabels.validated);
  }

  function chartModeLabel(mode) {
    return translateFinanceText(chartModeLabels[normalizeChartMode(mode)] || chartModeLabels.line);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat(getFinanceLocale(), {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(toNumber(value));
  }

  function formatDate(value) {
    const dateKey = normalizeDate(value);
    if (!dateKey) {
      return translateFinanceText("Date non renseignee");
    }

    return new Intl.DateTimeFormat(getFinanceLocale(), {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(`${dateKey}T00:00:00`));
  }

  function readStoredArray(storageKey) {
    try {
      const rawItems = window.localStorage.getItem(storageKey);
      const parsedItems = rawItems ? JSON.parse(rawItems) : [];
      return Array.isArray(parsedItems) ? parsedItems : [];
    } catch (error) {
      return [];
    }
  }

  function createFinanceEntryId() {
    if (window.crypto?.randomUUID) {
      return window.crypto.randomUUID();
    }

    return `finance-entry-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function normalizeScope(value) {
    return normalizeText(value) === "mission" ? "mission" : "general";
  }

  function normalizeCategory(value) {
    const normalizedValue = clean(value);
    return categoryLabels[normalizedValue] ? normalizedValue : "other";
  }

  function normalizeDirection(value) {
    return normalizeText(value) === "income" ? "income" : "expense";
  }

  function normalizeStatus(value) {
    const normalizedValue = clean(value);
    return statusLabels[normalizedValue] ? normalizedValue : "validated";
  }

  function normalizeEntryKind(value) {
    return normalizeText(value) === "override" ? "override" : "manual";
  }

  function normalizeChartMode(value) {
    const normalizedValue = clean(value);
    return allChartModes.has(normalizedValue) ? normalizedValue : "line";
  }

  function getStoredFinanceChartMode() {
    try {
      return normalizeChartMode(window.localStorage.getItem(financeChartModeStorageKey));
    } catch (error) {
      return "line";
    }
  }

  function saveStoredFinanceChartMode(mode) {
    currentFinanceChartMode = normalizeChartMode(mode);
    try {
      window.localStorage.setItem(financeChartModeStorageKey, currentFinanceChartMode);
    } catch (error) {
      currentFinanceChartMode = "line";
    }
  }

  function getSharedDataSync() {
    const sharedSync = window.routePiloteSharedData?.sync;
    if (typeof sharedSync === "function") {
      return sharedSync;
    }

    return typeof window.syncAppDataToServer === "function" ? window.syncAppDataToServer : null;
  }

  function queueFinanceDataSync() {
    const syncSharedData = getSharedDataSync();
    if (!syncSharedData) {
      return;
    }

    // Les edits financiers peuvent venir d'une facture, d'une mission ou d'une ligne libre.
    window.clearTimeout(financeDataSyncTimer);
    financeDataSyncTimer = window.setTimeout(() => {
      void syncSharedData().catch(() => undefined);
    }, 80);
  }

  // Normalise chaque ligne avant stockage pour garder les calculs de graphiques previsibles.
  function normalizeFinanceEntry(entry) {
    const safeEntry = entry && typeof entry === "object" ? entry : {};
    const category = normalizeCategory(safeEntry.category);

    return {
      id: clean(safeEntry.id) || createFinanceEntryId(),
      kind: normalizeEntryKind(safeEntry.kind),
      scope: normalizeScope(safeEntry.scope),
      rowKey: clean(safeEntry.rowKey),
      sourceType: clean(safeEntry.sourceType) || "manual",
      sourceId: clean(safeEntry.sourceId),
      missionId: clean(safeEntry.missionId),
      label: clean(safeEntry.label),
      description: clean(safeEntry.description),
      category,
      direction: normalizeDirection(safeEntry.direction),
      amount: Math.max(0, toNumber(safeEntry.amount)),
      status: normalizeStatus(safeEntry.status),
      settledAt: normalizeDate(safeEntry.settledAt),
      note: clean(safeEntry.note),
      createdAt: clean(safeEntry.createdAt) || new Date().toISOString(),
      updatedAt: clean(safeEntry.updatedAt) || new Date().toISOString(),
    };
  }

  function getStoredFinanceEntries() {
    return readStoredArray(financeEntriesStorageKey).map((entry) => normalizeFinanceEntry(entry));
  }

  function saveStoredFinanceEntries(entries) {
    const normalizedEntries = entries.map((entry) => normalizeFinanceEntry(entry));
    window.localStorage.setItem(financeEntriesStorageKey, JSON.stringify(normalizedEntries));

    queueFinanceDataSync();
    window.dispatchEvent(new CustomEvent("route-pilote-finances-updated"));
  }

  function getStoredInvoices() {
    if (typeof window.getStoredInvoices === "function") {
      return window.getStoredInvoices();
    }

    return readStoredArray(invoicesStorageKey);
  }

  function getInvoiceAmount(invoice) {
    return Math.max(0, toNumber(invoice?.totals?.ttc ?? invoice?.total ?? invoice?.amount ?? 0));
  }

  function getInvoiceHeading(invoice) {
    if (typeof window.getInvoiceHeading === "function") {
      return window.getInvoiceHeading(invoice);
    }

    return `Facture ${clean(invoice?.number) || clean(invoice?.id) || ""}`.trim();
  }

  function normalizeInvoiceType(invoice) {
    return normalizeText(invoice?.invoiceType) === "external" ? "external" : "client";
  }

  function normalizeInvoicePaymentStatus(invoice) {
    return normalizeText(invoice?.paymentStatus) === "paid" ? "paid" : "unpaid";
  }

  function normalizeInvoiceExternalFlow(invoice) {
    return normalizeText(invoice?.externalFlow) === "receivable" ? "receivable" : "payable";
  }

  function getOperationsMissionFinanceSnapshots() {
    const getter = window.routePiloteOperationsData?.getMissionFinanceSnapshots;
    if (typeof getter !== "function") {
      return [];
    }

    try {
      const snapshots = getter();
      return Array.isArray(snapshots) ? snapshots : [];
    } catch (error) {
      return [];
    }
  }

  function getMissionOptionLabel(snapshot) {
    return [snapshot.code, snapshot.label, snapshot.clientName].filter(Boolean).join(" - ");
  }

  function renderFinanceMissionOptions(selectedMissionId = "") {
    if (!financeLinkedMissionInput) {
      return;
    }

    const missionSnapshots = getOperationsMissionFinanceSnapshots();
    if (!missionSnapshots.length) {
      financeLinkedMissionInput.innerHTML = '<option value="">Aucune mission disponible</option>';
      financeLinkedMissionInput.disabled = true;
      return;
    }

    financeLinkedMissionInput.disabled = false;
    financeLinkedMissionInput.innerHTML = missionSnapshots
      .map(
        (snapshot) =>
          `<option value="${escapeText(snapshot.id)}">${escapeText(getMissionOptionLabel(snapshot))}</option>`
      )
      .join("");

    const hasSelectedMission = missionSnapshots.some((snapshot) => snapshot.id === selectedMissionId);
    financeLinkedMissionInput.value = hasSelectedMission ? selectedMissionId : missionSnapshots[0].id;
  }

  function syncFinanceMissionFieldVisibility() {
    if (!financeMissionField || !financeScopeInput) {
      return;
    }

    financeMissionField.hidden = normalizeScope(financeScopeInput.value) !== "mission";
  }

  function clearFinanceFormMessage() {
    if (!financeFormMessage) {
      return;
    }

    financeFormMessage.hidden = true;
    financeFormMessage.textContent = "";
    financeFormMessage.classList.remove("error", "success");
  }

  function showFinanceFormMessage(message, type = "error") {
    if (!financeFormMessage) {
      return;
    }

    financeFormMessage.hidden = false;
    financeFormMessage.textContent = message;
    financeFormMessage.classList.remove("error", "success");
    financeFormMessage.classList.add(type);
  }

  function setFinanceFormOpen(isOpen) {
    if (!financeForm) {
      return;
    }

    financeForm.hidden = !isOpen;
  }

  function revealFinanceForm(preferredField = null) {
    setFinanceFormOpen(true);

    window.requestAnimationFrame(() => {
      financeForm?.scrollIntoView({ behavior: "smooth", block: "start" });
      const fallbackField = financeForm?.querySelector("input, select, textarea, button");
      const focusNode = preferredField || fallbackField;
      if (focusNode instanceof HTMLElement) {
        focusNode.focus({ preventScroll: true });
      }
    });
  }

  function setFinanceFiltersOpen(isOpen) {
    if (!financeFilterBar) {
      return;
    }

    financeFilterBar.hidden = !isOpen;
    toggleFinanceFiltersButton?.setAttribute("aria-expanded", String(isOpen));
    if (financeFilterToggleLabel) {
      financeFilterToggleLabel.textContent = isOpen ? "Masquer les filtres" : "Afficher les filtres";
    }
  }

  function getFinanceFormValues() {
    return {
      scope: normalizeScope(financeScopeInput?.value || "general"),
      missionId: clean(financeLinkedMissionInput?.value || ""),
      label: clean(financeEntryLabelInput?.value || ""),
      category: normalizeCategory(financeEntryCategoryInput?.value || "other"),
      direction: normalizeDirection(financeEntryDirectionInput?.value || "expense"),
      amount: Math.max(0, toNumber(financeEntryAmountInput?.value || 0)),
      status: normalizeStatus(financeEntryStatusInput?.value || "validated"),
      settledAt: normalizeDate(financeEntrySettledAtInput?.value || ""),
      note: clean(financeEntryNoteInput?.value || ""),
    };
  }

  function fillFinanceForm(values) {
    if (financeScopeInput) {
      financeScopeInput.value = normalizeScope(values.scope || "general");
    }

    renderFinanceMissionOptions(values.missionId || "");
    syncFinanceMissionFieldVisibility();

    if (financeLinkedMissionInput && values.missionId) {
      financeLinkedMissionInput.value = values.missionId;
    }
    if (financeEntryLabelInput) {
      financeEntryLabelInput.value = values.label || "";
    }
    if (financeEntryCategoryInput) {
      financeEntryCategoryInput.value = normalizeCategory(values.category || "other");
    }
    if (financeEntryDirectionInput) {
      financeEntryDirectionInput.value = normalizeDirection(values.direction || "expense");
    }
    if (financeEntryAmountInput) {
      const amount = Math.max(0, toNumber(values.amount));
      financeEntryAmountInput.value =
        amount > 0 || zeroAllowedCategories.has(normalizeCategory(values.category)) ? String(amount) : "";
    }
    if (financeEntryStatusInput) {
      financeEntryStatusInput.value = normalizeStatus(values.status || "validated");
    }
    if (financeEntrySettledAtInput) {
      financeEntrySettledAtInput.value = normalizeDate(values.settledAt || "");
    }
    if (financeEntryNoteInput) {
      financeEntryNoteInput.value = values.note || "";
    }
  }

  function setFinanceFormMode() {
    if (financeFormKicker) {
      financeFormKicker.textContent = translateFinanceText(
        editingFinanceMode === "override"
          ? "Ajuster une valeur"
          : editingFinanceEntryId
            ? "Modifier la ligne"
            : "Nouvelle ligne"
      );
    }

    if (financeFormTitle) {
      financeFormTitle.textContent = translateFinanceText(
        editingFinanceMode === "override"
          ? "Ajuster la valeur de mission"
          : editingFinanceEntryId
            ? "Modifier la ligne de finance"
            : "Ajouter une ligne de finance"
      );
    }

    if (submitFinanceFormButton) {
      submitFinanceFormButton.textContent = translateFinanceText(
        editingFinanceMode === "override" || editingFinanceEntryId
          ? "Enregistrer les modifications"
          : "Enregistrer la ligne"
      );
    }

    if (resetFinanceFormButton) {
      resetFinanceFormButton.textContent = translateFinanceText(
        editingFinanceMode === "override" || editingFinanceEntryId ? "Revenir aux valeurs" : "Effacer"
      );
    }

    if (deleteFinanceEntryButton) {
      deleteFinanceEntryButton.hidden = !editingFinanceEntryId;
      deleteFinanceEntryButton.textContent = translateFinanceText(
        editingFinanceMode === "override" ? "Retirer l'ajustement" : "Supprimer"
      );
    }
  }

  function resetFinanceForm() {
    editingFinanceEntryId = "";
    editingFinanceSourceRowKey = "";
    editingFinanceMode = "manual";
    editingFinanceContext = null;
    financeFormBaseline = null;
    clearFinanceFormMessage();

    financeForm?.reset();

    if (financeScopeInput) {
      financeScopeInput.value = "general";
      financeScopeInput.disabled = false;
    }
    if (financeLinkedMissionInput) {
      financeLinkedMissionInput.disabled = false;
    }

    renderFinanceMissionOptions("");
    syncFinanceMissionFieldVisibility();

    if (financeEntryCategoryInput) {
      financeEntryCategoryInput.value = "other";
    }
    if (financeEntryDirectionInput) {
      financeEntryDirectionInput.value = "expense";
    }
    if (financeEntryStatusInput) {
      financeEntryStatusInput.value = "validated";
    }
    if (financeFormContext) {
      financeFormContext.hidden = true;
      financeFormContext.textContent = "";
    }

    setFinanceFormMode();
  }

  function openNewFinanceEntryForm(missionId = "") {
    resetFinanceForm();

    if (missionId && financeScopeInput) {
      financeScopeInput.value = "mission";
    }

    renderFinanceMissionOptions(missionId);
    syncFinanceMissionFieldVisibility();

    if (missionId && financeLinkedMissionInput) {
      financeLinkedMissionInput.value = missionId;
    }

    financeFormBaseline = getFinanceFormValues();
    revealFinanceForm(financeEntryLabelInput);
  }

  function buildFinanceInvoiceRows() {
    return getStoredInvoices().map((invoice) => {
      const invoiceType = normalizeInvoiceType(invoice);
      const isExternalInvoice = invoiceType === "external";
      const isPaid = normalizeInvoicePaymentStatus(invoice) === "paid";
      const externalFlow = normalizeInvoiceExternalFlow(invoice);
      const direction = isExternalInvoice && externalFlow === "payable" ? "expense" : "income";
      const primaryParty = isExternalInvoice
        ? clean(invoice?.seller?.name) || "Emetteur externe"
        : clean(invoice?.client?.name) || "Client non renseigne";

      return {
        rowKey: `invoice-${clean(invoice?.id) || clean(invoice?.number)}`,
        sourceType: "invoice",
        sourceId: clean(invoice?.id),
        label: getInvoiceHeading(invoice),
        description: primaryParty,
        category: isExternalInvoice ? "external_invoices" : "client_invoices",
        direction,
        amount: getInvoiceAmount(invoice),
        status: isPaid ? "validated" : "pending",
        issuedAt: normalizeDate(invoice?.issuedAt),
        settledAt: normalizeDate(invoice?.settledAt),
        note: isExternalInvoice
          ? externalFlow === "payable"
            ? "Facture externe a payer"
            : "Facture externe a recevoir"
          : "Facture client",
        linkHref: "factures.html",
        editable: false,
      };
    });
  }

  function buildFinanceManualRow(entry, missionLabel = "") {
    const normalizedEntry = normalizeFinanceEntry(entry);

    return {
      rowKey: `manual-${normalizedEntry.id}`,
      sourceEntryId: normalizedEntry.id,
      sourceType: "manual",
      sourceId: normalizedEntry.id,
      missionId: normalizedEntry.missionId,
      label: normalizedEntry.label || "Ligne libre",
      description: normalizedEntry.description || missionLabel || "Ajout manuel",
      category: normalizedEntry.category,
      direction: normalizedEntry.direction,
      amount: normalizedEntry.amount,
      status: normalizedEntry.status,
      settledAt: normalizedEntry.settledAt,
      note: normalizedEntry.note,
      editable: true,
    };
  }

  function applyFinanceOverrideToMissionRow(row, overrideEntry) {
    if (!overrideEntry) {
      return { ...row, editable: true };
    }

    const entry = normalizeFinanceEntry(overrideEntry);
    return {
      ...row,
      sourceEntryId: entry.id,
      kind: "override",
      label: entry.label || row.label,
      description: entry.description || row.description,
      category: entry.category,
      direction: entry.direction,
      amount: entry.amount,
      status: entry.status,
      settledAt: entry.settledAt || row.settledAt,
      note: entry.note,
      editable: true,
    };
  }

  function buildFinanceMissionGroups(financeEntries) {
    const missionSnapshots = getOperationsMissionFinanceSnapshots();
    // Les lignes mission automatiques restent liees aux trajets, les overrides gardent les edits utilisateur.
    const overridesByRowKey = new Map(
      financeEntries
        .filter((entry) => normalizeEntryKind(entry.kind) === "override" && clean(entry.rowKey))
        .map((entry) => [clean(entry.rowKey), normalizeFinanceEntry(entry)])
    );

    return missionSnapshots.map((snapshot) => {
      const missionLabel = getMissionOptionLabel(snapshot);
      const autoRows = Array.isArray(snapshot.rows)
        ? snapshot.rows.map((row) =>
            applyFinanceOverrideToMissionRow(
              {
                ...row,
                sourceType: "mission",
                missionId: snapshot.id,
                missionCode: snapshot.code,
                missionLabel: snapshot.label,
                serviceDate: normalizeDate(row.serviceDate || snapshot.serviceDate),
                amount: Math.max(0, toNumber(row.amount)),
                status: normalizeStatus(row.status || snapshot.status || "estimated"),
                direction: normalizeDirection(row.direction),
                category: normalizeCategory(row.category),
              },
              overridesByRowKey.get(clean(row.rowKey))
            )
          )
        : [];
      const manualRows = financeEntries
        .filter(
          (entry) =>
            normalizeEntryKind(entry.kind) === "manual" &&
            normalizeScope(entry.scope) === "mission" &&
            clean(entry.missionId) === snapshot.id
        )
        .map((entry) => buildFinanceManualRow(entry, missionLabel));

      return {
        id: snapshot.id,
        code: snapshot.code,
        label: snapshot.label,
        clientName: snapshot.clientName,
        serviceDate: normalizeDate(snapshot.serviceDate),
        rows: [...autoRows, ...manualRows],
      };
    });
  }

  function getFinanceGeneralManualRows(financeEntries, missionGroups) {
    const groupedMissionIds = new Set(missionGroups.map((group) => group.id));
    const missionLabelsById = new Map(
      getOperationsMissionFinanceSnapshots().map((snapshot) => [snapshot.id, getMissionOptionLabel(snapshot)])
    );

    return financeEntries
      .filter((entry) => {
        const normalizedEntry = normalizeFinanceEntry(entry);
        if (normalizedEntry.kind !== "manual") {
          return false;
        }

        return normalizedEntry.scope !== "mission" || !groupedMissionIds.has(normalizedEntry.missionId);
      })
      .map((entry) => {
        const normalizedEntry = normalizeFinanceEntry(entry);
        return buildFinanceManualRow(
          normalizedEntry,
          missionLabelsById.get(normalizedEntry.missionId) || ""
        );
      });
  }

  function getSourceFilterValue() {
    const value = clean(financeSourceFilterInput?.value || "all");
    return allSourceFilters.has(value) ? value : "all";
  }

  function getStatusFilterValue() {
    const value = clean(financeStatusFilterInput?.value || "all");
    return allStatusFilters.has(value) ? value : "all";
  }

  function getDirectionFilterValue() {
    const value = clean(financeDirectionFilterInput?.value || "all");
    return allDirectionFilters.has(value) ? value : "all";
  }

  function getPeriodFilterValue() {
    const value = clean(financePeriodFilterInput?.value || "all");
    return allPeriodFilters.has(value) ? value : "all";
  }

  function getRowDateKey(row) {
    return normalizeDate(row.settledAt) || normalizeDate(row.serviceDate) || normalizeDate(row.issuedAt);
  }

  function isRowWithinPeriod(row, period) {
    if (period === "all") {
      return true;
    }

    const dateKey = getRowDateKey(row);
    if (!dateKey) {
      return false;
    }

    const rowDate = new Date(`${dateKey}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (period === "year") {
      return rowDate.getFullYear() === today.getFullYear();
    }

    const days = period === "7d" ? 7 : 30;
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - days + 1);
    return rowDate >= startDate && rowDate <= today;
  }

  function matchesFinanceFilters(row) {
    const selectedSource = getSourceFilterValue();
    const selectedCategory = clean(financeCategoryFilterInput?.value || "all");
    const selectedStatus = getStatusFilterValue();
    const selectedDirection = getDirectionFilterValue();
    const selectedPeriod = getPeriodFilterValue();

    if (selectedSource === "invoices" && row.sourceType !== "invoice") {
      return false;
    }
    if (selectedSource === "missions" && row.sourceType !== "mission") {
      return false;
    }
    if (selectedSource === "manual" && row.sourceType !== "manual") {
      return false;
    }
    if (selectedCategory !== "all" && normalizeCategory(row.category) !== selectedCategory) {
      return false;
    }
    if (selectedStatus !== "all" && normalizeStatus(row.status) !== selectedStatus) {
      return false;
    }
    if (selectedDirection !== "all" && normalizeDirection(row.direction) !== selectedDirection) {
      return false;
    }

    return isRowWithinPeriod(row, selectedPeriod);
  }

  function buildTotals(rows) {
    return rows.reduce(
      (totals, row) => {
        const amount = Math.max(0, toNumber(row.amount));
        if (normalizeDirection(row.direction) === "income") {
          totals.income += amount;
        } else {
          totals.expense += amount;
        }

        if (normalizeStatus(row.status) === "pending") {
          totals.pending += amount;
        }

        return totals;
      },
      { income: 0, expense: 0, pending: 0 }
    );
  }

  function updateFinanceSummaries(rows) {
    const totals = buildTotals(rows);
    const balance = totals.income - totals.expense;

    if (financeIncomeSummary) {
      financeIncomeSummary.textContent = formatCurrency(totals.income);
    }
    if (financeExpenseSummary) {
      financeExpenseSummary.textContent = formatCurrency(totals.expense);
    }
    if (financeBalanceSummary) {
      financeBalanceSummary.textContent = formatCurrency(balance);
    }
    if (financePendingSummary) {
      financePendingSummary.textContent = formatCurrency(totals.pending);
    }
  }

  function updateFinanceFilterSummary(visibleCount, totalCount) {
    if (!financeFilterSummary) {
      return;
    }

    if (totalCount === 0) {
      financeFilterSummary.textContent = translateFinanceText("Aucune ligne financiere pour le moment");
      return;
    }

    financeFilterSummary.textContent =
      visibleCount === totalCount
        ? translateFinanceText("Toutes les lignes financieres affichees")
        : translateFinanceText(`${visibleCount} ligne(s) affichee(s) sur ${totalCount}`);
  }

  function getNetTooltipText(label, net, options = {}) {
    const safeLabel = translateFinanceText(label || "Valeur");
    const numericNet = toNumber(net);
    const directionLabel = translateFinanceText(numericNet >= 0 ? "benefice" : "perte");
    const details = [
      Number.isFinite(options.income)
        ? `${translateFinanceText("recettes")} ${formatCurrency(options.income)}`
        : "",
      Number.isFinite(options.expense)
        ? `${translateFinanceText("depenses")} ${formatCurrency(options.expense)}`
        : "",
    ]
      .filter(Boolean)
      .join(" / ");

    return `${safeLabel} - ${directionLabel} ${formatCurrency(Math.abs(numericNet))}${
      details ? ` (${details})` : ""
    }`;
  }

  function getMonthKey(dateKey) {
    const normalizedDate = normalizeDate(dateKey) || new Date().toISOString().slice(0, 10);
    return normalizedDate.slice(0, 7);
  }

  function getMonthLabel(monthKey) {
    return new Intl.DateTimeFormat(getFinanceLocale(), {
      month: "short",
      year: "2-digit",
    }).format(new Date(`${monthKey}-01T00:00:00`)).replace(".", "");
  }

  function getTimelineBuckets(rows) {
    const buckets = new Map();

    rows.forEach((row) => {
      const monthKey = getMonthKey(getRowDateKey(row));
      if (!buckets.has(monthKey)) {
        buckets.set(monthKey, { monthKey, label: getMonthLabel(monthKey), income: 0, expense: 0, net: 0 });
      }

      const bucket = buckets.get(monthKey);
      const amount = Math.max(0, toNumber(row.amount));
      if (normalizeDirection(row.direction) === "income") {
        bucket.income += amount;
      } else {
        bucket.expense += amount;
      }
      bucket.net = bucket.income - bucket.expense;
    });

    if (buckets.size === 0) {
      const monthKey = getMonthKey(new Date().toISOString().slice(0, 10));
      buckets.set(monthKey, { monthKey, label: getMonthLabel(monthKey), income: 0, expense: 0, net: 0 });
    }

    return [...buckets.values()].sort((left, right) => left.monthKey.localeCompare(right.monthKey));
  }

  function buildFinanceChartLinePath(points) {
    return points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
      .join(" ");
  }

  function renderChartModeSwitch() {
    const buttons = [
      {
        mode: "line",
        label: "Courbe",
        icon: '<polyline points="3 16 8 11 13 13 20 5"></polyline><circle cx="8" cy="11" r="1.5"></circle><circle cx="13" cy="13" r="1.5"></circle><circle cx="20" cy="5" r="1.5"></circle>',
      },
      {
        mode: "bars",
        label: "Barres",
        icon: '<rect x="4" y="10" width="3" height="8"></rect><rect x="10.5" y="6" width="3" height="12"></rect><rect x="17" y="3" width="3" height="15"></rect>',
      },
      {
        mode: "monthly",
        label: "Mois",
        icon: '<line x1="4" y1="19" x2="20" y2="19"></line><rect x="5" y="8" width="3" height="11"></rect><rect x="11" y="4" width="3" height="15"></rect><rect x="17" y="12" width="3" height="7"></rect>',
      },
    ];

    return `
      <div class="finance-market-chart-controls" aria-label="${escapeText(translateFinanceText("Changer de graphique"))}">
        ${buttons
          .map(
            (button) => `
              <button
                class="finance-market-chart-toggle ${button.mode === currentFinanceChartMode ? "active" : ""}"
                type="button"
                title="${escapeText(translateFinanceText(button.label))}"
                aria-label="${escapeText(translateFinanceText(button.label))}"
                data-finance-chart-mode="${escapeText(button.mode)}"
              >
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">${button.icon}</svg>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderTimelineChart(buckets) {
    const width = 900;
    const height = 280;
    const padding = { top: 24, right: 18, bottom: 38, left: 64 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const maxAbs = Math.max(1, ...buckets.map((bucket) => Math.abs(bucket.net)));
    const valueToY = (value) => padding.top + (maxAbs - value) * (chartHeight / (maxAbs * 2));
    const pointStep = buckets.length > 1 ? chartWidth / (buckets.length - 1) : chartWidth;
    const points = buckets.map((bucket, index) => ({
      ...bucket,
      x: padding.left + (buckets.length > 1 ? index * pointStep : chartWidth / 2),
      y: valueToY(bucket.net),
      tooltip: getNetTooltipText(bucket.label, bucket.net, bucket),
    }));
    const gridValues = [-maxAbs, -maxAbs / 2, 0, maxAbs / 2, maxAbs].map((value) => ({
      value,
      y: valueToY(value),
      label: formatCurrency(value),
    }));

    return `
      <div class="finance-market-chart-frame">
        <svg class="finance-market-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeText(
          translateFinanceText("Resultat net par mois")
        )}">
          ${gridValues
            .map(
              (gridValue) => `
                <g>
                  <line class="finance-market-gridline" x1="${padding.left}" x2="${
                    width - padding.right
                  }" y1="${gridValue.y.toFixed(2)}" y2="${gridValue.y.toFixed(2)}"></line>
                  <text x="8" y="${(gridValue.y + 4).toFixed(2)}" class="finance-market-gridlabel">${escapeText(
                    gridValue.label
                  )}</text>
                </g>
              `
            )
            .join("")}
          <line class="finance-market-zero-line" x1="${padding.left}" x2="${
            width - padding.right
          }" y1="${valueToY(0).toFixed(2)}" y2="${valueToY(0).toFixed(2)}"></line>
          <path class="finance-market-line" d="${escapeText(buildFinanceChartLinePath(points))}"></path>
          ${points
            .map(
              (point) => `
                <circle
                  class="finance-market-point"
                  cx="${point.x.toFixed(2)}"
                  cy="${point.y.toFixed(2)}"
                  r="5"
                  tabindex="0"
                  data-finance-tooltip="${escapeText(point.tooltip)}"
                ></circle>
              `
            )
            .join("")}
        </svg>
        <div class="finance-market-hover-tooltip" hidden></div>
      </div>
      <div class="finance-market-axis">
        ${points
          .map(
            (point) => `
              <article class="finance-market-axis-item">
                <strong>${escapeText(point.label)}</strong>
                <span class="${point.net < 0 ? "negative" : "positive"}">${escapeText(formatCurrency(point.net))}</span>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function buildCategoryBuckets(rows) {
    const buckets = new Map();

    rows.forEach((row) => {
      const category = normalizeCategory(row.category);
      if (!buckets.has(category)) {
        buckets.set(category, { category, income: 0, expense: 0, net: 0 });
      }

      const bucket = buckets.get(category);
      const amount = Math.max(0, toNumber(row.amount));
      if (normalizeDirection(row.direction) === "income") {
        bucket.income += amount;
      } else {
        bucket.expense += amount;
      }
      bucket.net = bucket.income - bucket.expense;
    });

    return [...buckets.values()]
      .sort((left, right) => Math.abs(right.net) - Math.abs(left.net))
      .slice(0, 8);
  }

  function renderCategoryBarChart(categoryBuckets) {
    const maxAbs = Math.max(1, ...categoryBuckets.map((bucket) => Math.abs(bucket.net)));

    return `
      <div class="finance-market-chart-frame">
        <div class="finance-bar-chart-list">
          ${
            categoryBuckets.length
              ? categoryBuckets
                .map((bucket) => {
                  const width = Math.max(5, (Math.abs(bucket.net) / maxAbs) * 100);
                  const tooltip = getNetTooltipText(categoryLabel(bucket.category), bucket.net, bucket);

                  return `
                    <article class="finance-bar-chart-row">
                      <div class="finance-bar-chart-copy">
                        <strong>${escapeText(categoryLabel(bucket.category))}</strong>
                        <span>${escapeText(translateFinanceText("Recettes"))} ${escapeText(
                          formatCurrency(bucket.income)
                        )} / ${escapeText(translateFinanceText("depenses"))} ${escapeText(formatCurrency(bucket.expense))}</span>
                      </div>
                        <div class="finance-bar-chart-track">
                          <span
                            class="finance-bar-chart-fill ${bucket.net < 0 ? "negative" : "positive"}"
                            style="width:${width.toFixed(2)}%"
                            tabindex="0"
                            data-finance-tooltip="${escapeText(tooltip)}"
                          ></span>
                        </div>
                        <strong class="finance-bar-chart-value ${bucket.net < 0 ? "negative" : "positive"}">${escapeText(
                          formatCurrency(bucket.net)
                        )}</strong>
                      </article>
                    `;
                  })
                  .join("")
              : `<article class="finance-empty-state"><strong>${escapeText(
                  translateFinanceText("Aucune categorie")
                )}</strong><p>${escapeText(
                  translateFinanceText("Ajoutez des valeurs pour afficher ce graphique.")
                )}</p></article>`
          }
        </div>
        <div class="finance-market-hover-tooltip" hidden></div>
      </div>
    `;
  }

  function renderMonthlyBarChart(buckets) {
    const maxAbs = Math.max(1, ...buckets.map((bucket) => Math.abs(bucket.net)));

    return `
      <div class="finance-market-chart-frame">
        <div class="finance-monthly-chart">
          ${buckets
            .map((bucket) => {
              const height = Math.max(5, (Math.abs(bucket.net) / maxAbs) * 100);
              const tooltip = getNetTooltipText(bucket.label, bucket.net, bucket);

              return `
                <article class="finance-monthly-column">
                  <div class="finance-monthly-bar-shell">
                    <span
                      class="finance-monthly-bar ${bucket.net < 0 ? "negative" : "positive"}"
                      style="height:${height.toFixed(2)}%"
                      tabindex="0"
                      data-finance-tooltip="${escapeText(tooltip)}"
                    ></span>
                  </div>
                  <strong>${escapeText(bucket.label)}</strong>
                  <small class="${bucket.net < 0 ? "negative" : "positive"}">${escapeText(
                    formatCurrency(bucket.net)
                  )}</small>
                </article>
              `;
            })
            .join("")}
        </div>
        <div class="finance-market-hover-tooltip" hidden></div>
      </div>
    `;
  }

  function renderSideCategoryBlock(categoryBuckets) {
    const maxAbs = Math.max(1, ...categoryBuckets.map((bucket) => Math.abs(bucket.net)));

    return `
      <section class="finance-market-side-block">
        <div class="finance-chart-head">
          <h5>${escapeText(translateFinanceText("Categories"))}</h5>
          <p class="finance-chart-note">${escapeText(translateFinanceText("Impact net par categorie"))}</p>
        </div>
        <div class="finance-category-chart">
          ${
            categoryBuckets.length
              ? categoryBuckets
                  .slice(0, 5)
                  .map((bucket) => {
                    const width = Math.max(5, (Math.abs(bucket.net) / maxAbs) * 100);
                    return `
                      <article class="finance-category-row">
                        <div class="finance-category-copy">
                          <strong>${escapeText(categoryLabel(bucket.category))}</strong>
                          <span>${escapeText(formatCurrency(bucket.net))} ${escapeText(translateFinanceText("net"))}</span>
                        </div>
                        <div class="finance-category-track">
                          <span class="finance-category-track-fill" style="width:${width.toFixed(2)}%"></span>
                        </div>
                        <span class="finance-category-meta">${escapeText(formatCurrency(bucket.income))}</span>
                      </article>
                    `;
                  })
                  .join("")
              : `<article class="finance-empty-state"><strong>${escapeText(
                  translateFinanceText("Aucune categorie")
                )}</strong><p>${escapeText(
                  translateFinanceText("Les categories apparaissent avec les premieres valeurs.")
                )}</p></article>`
          }
        </div>
      </section>
    `;
  }

  function renderSideMissionBlock(missionGroups) {
    const missionRows = missionGroups
      .map((group) => {
        const totals = buildTotals(group.rows);
        return {
          id: group.id,
          code: group.code,
          label: group.label,
          net: totals.income - totals.expense,
        };
      })
      .sort((left, right) => right.net - left.net)
      .slice(0, 5);
    const maxAbs = Math.max(1, ...missionRows.map((mission) => Math.abs(mission.net)));

    return `
      <section class="finance-market-side-block">
        <div class="finance-chart-head">
          <h5>${escapeText(translateFinanceText("Mission"))}</h5>
          <p class="finance-chart-note">${escapeText(translateFinanceText("Rentabilite par mission"))}</p>
        </div>
        <div class="finance-mission-performance">
          ${
            missionRows.length
              ? missionRows
                  .map((mission) => {
                    const width = Math.max(5, (Math.abs(mission.net) / maxAbs) * 100);
                    return `
                      <article class="finance-mission-performance-row">
                        <div class="finance-mission-performance-copy">
                          <strong>${escapeText(mission.code || translateFinanceText("Mission"))}</strong>
                          <span>${escapeText(translateFinanceText(mission.label || "Sans libelle"))}</span>
                        </div>
                        <div class="finance-mission-performance-bar">
                          <span
                            class="finance-mission-performance-fill ${mission.net < 0 ? "negative" : "positive"}"
                            style="width:${width.toFixed(2)}%"
                          ></span>
                        </div>
                        <strong class="finance-mission-performance-net ${mission.net < 0 ? "negative" : "positive"}">
                          ${escapeText(formatCurrency(mission.net))}
                        </strong>
                      </article>
                    `;
                  })
                  .join("")
              : `<article class="finance-empty-state"><strong>${escapeText(
                  translateFinanceText("Aucune mission")
                )}</strong><p>${escapeText(
                  translateFinanceText("Les missions de la page trajets seront reprises ici.")
                )}</p></article>`
          }
        </div>
      </section>
    `;
  }

  function renderFinanceDashboard(rows, missionGroups) {
    if (!financeDashboard) {
      return;
    }

    const totals = buildTotals(rows);
    const balance = totals.income - totals.expense;
    const timelineBuckets = getTimelineBuckets(rows);
    const categoryBuckets = buildCategoryBuckets(rows);
    const profitableMissions = missionGroups.filter((group) => {
      const missionTotals = buildTotals(group.rows);
      return missionTotals.income - missionTotals.expense >= 0;
    }).length;
    const chartMarkup =
      currentFinanceChartMode === "bars"
        ? renderCategoryBarChart(categoryBuckets)
        : currentFinanceChartMode === "monthly"
          ? renderMonthlyBarChart(timelineBuckets)
          : renderTimelineChart(timelineBuckets);

    financeDashboard.innerHTML = `
      <section class="finance-market-card" aria-label="${escapeText(translateFinanceText("Analyse financiere"))}">
        <div class="finance-market-head">
          <div>
            <p class="detail-kicker">${escapeText(translateFinanceText("Analyse"))}</p>
            <h4>${escapeText(translateFinanceText("Resultat net et tendance"))}</h4>
            <p class="finance-market-subtitle">
              ${escapeText(
                translateFinanceText(
                  "Vue consolidee des factures, missions et lignes ajoutees. Les montants en attente restent visibles sans etre caches dans les totaux."
                )
              )}
            </p>
          </div>
          <div class="finance-market-price ${balance < 0 ? "negative" : "positive"}">
            <span>${escapeText(translateFinanceText("Resultat net"))}</span>
            <strong>${escapeText(formatCurrency(balance))}</strong>
            <small>${escapeText(chartModeLabel(currentFinanceChartMode))}</small>
          </div>
        </div>

        <div class="finance-market-chart-stage">
          <div class="finance-market-chart-meta">
            <div class="finance-market-chart-meta-main">
              <div class="finance-market-legend">
                <span class="finance-market-legend-item total">${escapeText(translateFinanceText("Total net"))}</span>
              </div>
              <p class="finance-market-scale">${escapeText(
                translateFinanceText("Benefice ou perte, consolide par periode.")
              )}</p>
            </div>
            ${renderChartModeSwitch()}
          </div>
          ${chartMarkup}
        </div>

        <div class="finance-market-summary-grid">
          <article class="finance-insight-card">
            <span>${escapeText(translateFinanceText("Recettes"))}</span>
            <strong class="positive">${escapeText(formatCurrency(totals.income))}</strong>
          </article>
          <article class="finance-insight-card">
            <span>${escapeText(translateFinanceText("Depenses"))}</span>
            <strong class="negative">${escapeText(formatCurrency(totals.expense))}</strong>
          </article>
        </div>

        <div class="finance-market-summary-grid">
          <article class="finance-insight-card">
            <span>${escapeText(translateFinanceText("En attente"))}</span>
            <strong>${escapeText(formatCurrency(totals.pending))}</strong>
          </article>
          <article class="finance-insight-card">
            <span>${escapeText(translateFinanceText("Missions rentables"))}</span>
            <strong>${escapeText(String(profitableMissions))}/${escapeText(String(missionGroups.length))}</strong>
          </article>
        </div>

        <div class="finance-market-side">
          ${renderSideCategoryBlock(categoryBuckets)}
          ${renderSideMissionBlock(missionGroups)}
        </div>
      </section>
    `;
  }

  function getMissionSummaryStatus(rows) {
    if (rows.some((row) => normalizeStatus(row.status) === "pending")) {
      return "pending";
    }
    if (rows.some((row) => normalizeStatus(row.status) === "estimated")) {
      return "estimated";
    }
    return "validated";
  }

  function getRowSourceLabel(row) {
    if (row.sourceType === "invoice") {
      return translateFinanceText(
        normalizeCategory(row.category) === "external_invoices" ? "Facture externe" : "Facture client"
      );
    }
    if (row.sourceType === "mission") {
      return translateFinanceText("Mission");
    }
    return translateFinanceText("Ligne libre");
  }

  function getRowSortDate(row) {
    return getRowDateKey(row) || "0000-00-00";
  }

  function buildMissionSummaryRow(group) {
    const totals = buildTotals(group.rows);
    return {
      id: group.id,
      code: group.code,
      label: group.label,
      description: [group.clientName, formatDate(group.serviceDate)].filter(Boolean).join(" - "),
      income: totals.income,
      expense: totals.expense,
      net: totals.income - totals.expense,
      status: getMissionSummaryStatus(group.rows),
      sortDate: group.rows.reduce(
        (latest, row) => (getRowSortDate(row) > latest ? getRowSortDate(row) : latest),
        "0000-00-00"
      ),
    };
  }

  function renderLedgerValueRow(row, { compact = false } = {}) {
    const isExpense = normalizeDirection(row.direction) === "expense";
    const signedAmount = `${isExpense ? "-" : "+"}${formatCurrency(row.amount)}`;
    const actionMarkup = row.editable
      ? `<button class="secondary-action finance-ledger-action" type="button" data-finance-row-key="${escapeText(
          row.rowKey
        )}">${escapeText(translateFinanceText(row.sourceType === "mission" ? "Ajuster" : "Modifier"))}</button>`
      : row.linkHref
        ? `<a class="secondary-action finance-ledger-action" href="${escapeText(row.linkHref)}">${escapeText(
            translateFinanceText("Voir")
          )}</a>`
        : "";
    const rowDate = getRowDateKey(row);

    return `
      <article class="finance-ledger-row ${compact ? "compact" : ""}">
        <div class="finance-ledger-primary">
          <span class="finance-ledger-source">${escapeText(getRowSourceLabel(row))}</span>
          <strong>${escapeText(translateFinanceText(row.label || "Valeur"))}</strong>
          <p>${escapeText(translateFinanceText(row.description || row.note || "Aucun detail"))}</p>
        </div>
        <div class="finance-ledger-meta">
          <span class="finance-ledger-chip">${escapeText(categoryLabel(row.category))}</span>
          <span class="finance-ledger-chip finance-ledger-chip-${escapeText(normalizeStatus(row.status))}">
            ${escapeText(statusLabel(row.status))}
          </span>
          ${rowDate ? `<span class="finance-ledger-date">${escapeText(formatDate(rowDate))}</span>` : ""}
        </div>
        <div class="finance-ledger-value-block">
          <strong class="finance-ledger-value ${isExpense ? "negative" : "positive"}">${escapeText(signedAmount)}</strong>
          ${actionMarkup}
        </div>
      </article>
    `;
  }

  function renderMissionSummaryRow(summaryRow, group) {
    const isExpanded = expandedFinanceMissionIds.has(group.id);

    return `
      <article class="finance-ledger-mission ${isExpanded ? "open" : ""}">
        <button
          class="finance-ledger-mission-toggle"
          type="button"
          data-finance-mission-toggle="${escapeText(group.id)}"
          aria-expanded="${isExpanded ? "true" : "false"}"
        >
          <div class="finance-ledger-primary">
            <span class="finance-ledger-source">${escapeText(translateFinanceText("Mission"))}</span>
            <strong>${escapeText(summaryRow.code || translateFinanceText("Mission"))} - ${escapeText(
              translateFinanceText(summaryRow.label || "Sans libelle")
            )}</strong>
            <p>${escapeText(translateFinanceText(summaryRow.description || "Details de mission"))}</p>
          </div>
          <div class="finance-ledger-mission-overview">
            <span>${escapeText(translateFinanceText("Recettes"))} ${escapeText(formatCurrency(summaryRow.income))}</span>
            <span>${escapeText(translateFinanceText("Depenses"))} ${escapeText(formatCurrency(summaryRow.expense))}</span>
            <strong class="finance-ledger-value ${summaryRow.net < 0 ? "negative" : "positive"}">
              ${escapeText(formatCurrency(summaryRow.net))}
            </strong>
          </div>
          <span class="finance-ledger-chevron">${isExpanded ? "-" : "+"}</span>
        </button>
        <div class="finance-ledger-mission-details" ${isExpanded ? "" : "hidden"}>
          <div class="finance-ledger-mission-details-head">
            <span>${escapeText(translateFinanceText(`${group.rows.length} valeur(s) detaillee(s)`))}</span>
            <button class="secondary-action finance-ledger-action" type="button" data-finance-add-mission="${escapeText(
              group.id
            )}">
              ${escapeText(translateFinanceText("Ajouter une ligne mission"))}
            </button>
          </div>
          <div class="finance-ledger-detail-list">
            ${group.rows.map((row) => renderLedgerValueRow(row, { compact: true })).join("")}
          </div>
        </div>
      </article>
    `;
  }

  function registerFinanceRows(rows) {
    rows.forEach((row) => {
      if (row.rowKey) {
        financeRowRegistry.set(row.rowKey, row);
      }
    });
  }

  function renderFinances() {
    if (!financeSections) {
      return;
    }

    const financeEntries = getStoredFinanceEntries();
    const invoiceRows = buildFinanceInvoiceRows();
    const missionGroups = buildFinanceMissionGroups(financeEntries);
    const manualRows = getFinanceGeneralManualRows(financeEntries, missionGroups);
    const allRows = [
      ...invoiceRows,
      ...missionGroups.flatMap((group) => group.rows),
      ...manualRows,
    ];
    const filteredInvoiceRows = invoiceRows.filter((row) => matchesFinanceFilters(row));
    const filteredMissionGroups = missionGroups
      .map((group) => ({
        ...group,
        rows: group.rows.filter((row) => matchesFinanceFilters(row)),
      }))
      .filter((group) => group.rows.length > 0);
    const filteredManualRows = manualRows.filter((row) => matchesFinanceFilters(row));
    const visibleRows = [
      ...filteredInvoiceRows,
      ...filteredMissionGroups.flatMap((group) => group.rows),
      ...filteredManualRows,
    ];

    updateFinanceSummaries(visibleRows);
    updateFinanceFilterSummary(visibleRows.length, allRows.length);
    renderFinanceDashboard(visibleRows, filteredMissionGroups);

    // Registre reconstruit a chaque rendu pour que les actions ciblent seulement les lignes visibles.
    financeRowRegistry = new Map();
    registerFinanceRows(filteredInvoiceRows);
    filteredMissionGroups.forEach((group) => registerFinanceRows(group.rows));
    registerFinanceRows(filteredManualRows);

    const ledgerItems = [
      ...filteredMissionGroups.map((group) => {
        const summary = buildMissionSummaryRow(group);
        return {
          type: "mission",
          sortDate: summary.sortDate,
          group,
          summary,
        };
      }),
      ...filteredInvoiceRows.map((row) => ({
        type: "row",
        sortDate: getRowSortDate(row),
        row,
      })),
      ...filteredManualRows.map((row) => ({
        type: "row",
        sortDate: getRowSortDate(row),
        row,
      })),
    ].sort((left, right) => right.sortDate.localeCompare(left.sortDate));

    financeSections.innerHTML = `
      <section class="finance-ledger-card">
        <div class="finance-ledger-head">
          <div>
            <p class="detail-kicker">${escapeText(translateFinanceText("Valeurs"))}</p>
            <h4>${escapeText(translateFinanceText("Liste consolidee"))}</h4>
          </div>
          <div class="finance-ledger-head-actions">
            <span class="finance-section-count">${escapeText(translateFinanceText(`${ledgerItems.length} valeur(s)`))}</span>
            <button class="panel-action finance-ledger-add" type="button" data-open-finance-entry>
              ${escapeText(translateFinanceText("+ Ajouter une ligne"))}
            </button>
          </div>
        </div>
        <div class="finance-ledger-list">
          ${
            ledgerItems.length
              ? ledgerItems
                  .map((item) =>
                    item.type === "mission"
                      ? renderMissionSummaryRow(item.summary, item.group)
                      : renderLedgerValueRow(item.row)
                  )
                  .join("")
              : `<article class="finance-empty-state"><strong>${escapeText(
                  translateFinanceText("Aucune valeur trouvee")
                )}</strong><p>${escapeText(translateFinanceText("Modifiez les filtres ou ajoutez une ligne."))}</p></article>`
          }
        </div>
      </section>
    `;
  }

  function openManualEditForm(row) {
    const entry = getStoredFinanceEntries().find((storedEntry) => storedEntry.id === row.sourceEntryId);
    if (!entry) {
      return;
    }

    resetFinanceForm();
    editingFinanceMode = "manual";
    editingFinanceEntryId = entry.id;
    editingFinanceContext = { mode: "manual" };
    fillFinanceForm(entry);
    financeFormBaseline = getFinanceFormValues();
    setFinanceFormMode();
    revealFinanceForm(financeEntryLabelInput);
  }

  function openMissionOverrideForm(row) {
    resetFinanceForm();
    editingFinanceMode = "override";
    editingFinanceEntryId = row.sourceEntryId || "";
    editingFinanceSourceRowKey = row.rowKey;
    editingFinanceContext = {
      mode: "override",
      sourceType: row.sourceType || "mission",
      sourceId: row.sourceId || row.missionId || "",
      missionId: row.missionId || "",
    };

    fillFinanceForm({
      scope: "mission",
      missionId: row.missionId,
      label: row.label,
      category: row.category,
      direction: row.direction,
      amount: row.amount,
      status: row.status,
      settledAt: row.settledAt,
      note: row.note,
    });

    financeFormBaseline = getFinanceFormValues();

    if (financeScopeInput) {
      financeScopeInput.disabled = true;
    }
    if (financeLinkedMissionInput) {
      financeLinkedMissionInput.disabled = true;
    }
    if (financeFormContext) {
      financeFormContext.hidden = false;
      financeFormContext.textContent = `Cette ligne reste liee a ${row.missionCode || "la mission"} - ${
        row.description || row.label || "valeur"
      }.`;
    }

    setFinanceFormMode();
    revealFinanceForm(financeEntryAmountInput);
  }

  function canAmountBeZero(category) {
    return zeroAllowedCategories.has(normalizeCategory(category));
  }

  function handleFinanceFormSubmit(event) {
    event.preventDefault();

    if (!financeEntryLabelInput || !financeEntryAmountInput) {
      return;
    }

    const values = getFinanceFormValues();
    const rawAmountValue = clean(financeEntryAmountInput.value);
    const zeroAllowed = canAmountBeZero(values.category);

    if (!values.label) {
      showFinanceFormMessage("Ajoutez un libelle pour la ligne.", "error");
      return;
    }

    if (!rawAmountValue) {
      showFinanceFormMessage("Ajoutez un montant pour la ligne.", "error");
      return;
    }

    if (!zeroAllowed && values.amount <= 0) {
      showFinanceFormMessage(
        "Le montant doit etre superieur a 0 pour cette categorie.",
        "error"
      );
      return;
    }

    if (values.scope === "mission" && !values.missionId) {
      showFinanceFormMessage("Choisissez une mission pour cette ligne.", "error");
      return;
    }

    if (editingFinanceMode === "override" && !editingFinanceSourceRowKey) {
      showFinanceFormMessage("La ligne a ajuster est introuvable.", "error");
      return;
    }

    const entries = getStoredFinanceEntries();
    const now = new Date().toISOString();

    if (editingFinanceMode === "override") {
      const nextEntry = normalizeFinanceEntry({
        id: editingFinanceEntryId || createFinanceEntryId(),
        kind: "override",
        scope: "mission",
        rowKey: editingFinanceSourceRowKey,
        sourceType: editingFinanceContext?.sourceType || "mission",
        sourceId: editingFinanceContext?.sourceId || "",
        missionId: editingFinanceContext?.missionId || values.missionId,
        ...values,
        createdAt: entries.find((entry) => entry.id === editingFinanceEntryId)?.createdAt || now,
        updatedAt: now,
      });
      const nextEntries = editingFinanceEntryId
        ? entries.map((entry) => (entry.id === editingFinanceEntryId ? nextEntry : entry))
        : [...entries, nextEntry];

      saveStoredFinanceEntries(nextEntries);
    } else {
      const nextEntry = normalizeFinanceEntry({
        id: editingFinanceEntryId || createFinanceEntryId(),
        kind: "manual",
        sourceType: "manual",
        sourceId: editingFinanceEntryId || "",
        ...values,
        createdAt: entries.find((entry) => entry.id === editingFinanceEntryId)?.createdAt || now,
        updatedAt: now,
      });
      nextEntry.sourceId = nextEntry.sourceId || nextEntry.id;

      const nextEntries = editingFinanceEntryId
        ? entries.map((entry) => (entry.id === editingFinanceEntryId ? nextEntry : entry))
        : [...entries, nextEntry];

      saveStoredFinanceEntries(nextEntries);
    }

    resetFinanceForm();
    setFinanceFormOpen(false);
    renderFinances();
  }

  function handleFinanceDelete() {
    if (!editingFinanceEntryId) {
      return;
    }

    const nextEntries = getStoredFinanceEntries().filter((entry) => entry.id !== editingFinanceEntryId);
    saveStoredFinanceEntries(nextEntries);
    resetFinanceForm();
    setFinanceFormOpen(false);
    renderFinances();
  }

  function positionTooltip(target, event = null) {
    if (!financeDashboard) {
      return;
    }

    const tooltip = financeDashboard.querySelector(".finance-market-hover-tooltip");
    const frame = target.closest(".finance-market-chart-frame");

    if (!(tooltip instanceof HTMLElement) || !(frame instanceof HTMLElement)) {
      return;
    }

    const tooltipText = clean(target.getAttribute("data-finance-tooltip") || "");
    if (!tooltipText) {
      tooltip.hidden = true;
      return;
    }

    const frameRect = frame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const x = event ? event.clientX - frameRect.left : targetRect.left + targetRect.width / 2 - frameRect.left;
    const y = event ? event.clientY - frameRect.top : targetRect.top - frameRect.top;

    tooltip.textContent = tooltipText;
    tooltip.style.left = `${Math.max(28, Math.min(frameRect.width - 28, x))}px`;
    tooltip.style.top = `${Math.max(28, y)}px`;
    tooltip.hidden = false;
  }

  function hideTooltip() {
    const tooltip = financeDashboard?.querySelector(".finance-market-hover-tooltip");
    if (tooltip instanceof HTMLElement) {
      tooltip.hidden = true;
    }
  }

  function initializeFinancePage() {
    resetFinanceForm();
    setFinanceFiltersOpen(false);
    renderFinanceMissionOptions("");
    renderFinances();

    window.addEventListener("route-pilote-operations-updated", () => {
      const selectedMissionId = clean(financeLinkedMissionInput?.value || "");
      renderFinanceMissionOptions(selectedMissionId);
      renderFinances();
    });

    window.addEventListener("route-pilote-app-data-ready", () => {
      renderFinanceMissionOptions(clean(financeLinkedMissionInput?.value || ""));
      renderFinances();
    });

    window.addEventListener("storage", (event) => {
      if ([financeEntriesStorageKey, invoicesStorageKey].includes(event.key || "")) {
        renderFinances();
      }
    });

    window.addEventListener("route-pilote-language-changed", () => {
      renderFinanceMissionOptions(clean(financeLinkedMissionInput?.value || ""));
      renderFinances();
    });
  }

  financeForm?.addEventListener("submit", handleFinanceFormSubmit);

  toggleFinanceFiltersButton?.addEventListener("click", () => {
    setFinanceFiltersOpen(Boolean(financeFilterBar?.hidden));
  });

  cancelFinanceFormButton?.addEventListener("click", () => {
    resetFinanceForm();
    setFinanceFormOpen(false);
  });

  resetFinanceFormButton?.addEventListener("click", () => {
    if (financeFormBaseline) {
      fillFinanceForm(financeFormBaseline);
      clearFinanceFormMessage();

      if (editingFinanceMode === "override") {
        if (financeScopeInput) {
          financeScopeInput.disabled = true;
        }
        if (financeLinkedMissionInput) {
          financeLinkedMissionInput.disabled = true;
        }
      }
      return;
    }

    resetFinanceForm();
  });

  deleteFinanceEntryButton?.addEventListener("click", handleFinanceDelete);

  financeScopeInput?.addEventListener("change", () => {
    if (normalizeScope(financeScopeInput.value) === "mission") {
      renderFinanceMissionOptions(clean(financeLinkedMissionInput?.value || ""));
    }
    syncFinanceMissionFieldVisibility();
  });

  [
    financeSourceFilterInput,
    financeCategoryFilterInput,
    financeStatusFilterInput,
    financeDirectionFilterInput,
    financePeriodFilterInput,
  ].forEach((inputNode) => {
    inputNode?.addEventListener("change", renderFinances);
  });

  resetFinanceFiltersButton?.addEventListener("click", () => {
    if (financeSourceFilterInput) {
      financeSourceFilterInput.value = "all";
    }
    if (financeCategoryFilterInput) {
      financeCategoryFilterInput.value = "all";
    }
    if (financeStatusFilterInput) {
      financeStatusFilterInput.value = "all";
    }
    if (financeDirectionFilterInput) {
      financeDirectionFilterInput.value = "all";
    }
    if (financePeriodFilterInput) {
      financePeriodFilterInput.value = "all";
    }

    renderFinances();
  });

  financeDashboard?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const chartButton = event.target.closest("[data-finance-chart-mode]");
    if (!chartButton || !financeDashboard.contains(chartButton)) {
      return;
    }

    const nextMode = normalizeChartMode(chartButton.getAttribute("data-finance-chart-mode") || "");
    if (nextMode === currentFinanceChartMode) {
      return;
    }

    saveStoredFinanceChartMode(nextMode);
    renderFinances();
  });

  financeDashboard?.addEventListener("pointermove", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const tooltipTarget = event.target.closest("[data-finance-tooltip]");
    if (!tooltipTarget || !financeDashboard.contains(tooltipTarget)) {
      hideTooltip();
      return;
    }

    positionTooltip(tooltipTarget, event);
  });

  financeDashboard?.addEventListener("pointerleave", hideTooltip);

  financeDashboard?.addEventListener("focusin", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const tooltipTarget = event.target.closest("[data-finance-tooltip]");
    if (tooltipTarget && financeDashboard.contains(tooltipTarget)) {
      positionTooltip(tooltipTarget);
    }
  });

  financeDashboard?.addEventListener("focusout", () => {
    window.setTimeout(() => {
      const activeElement = document.activeElement;
      if (activeElement instanceof Element && activeElement.closest("[data-finance-tooltip]")) {
        return;
      }
      hideTooltip();
    }, 0);
  });

  financeSections?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const addEntryButton = event.target.closest("[data-open-finance-entry]");
    if (addEntryButton && financeSections.contains(addEntryButton)) {
      openNewFinanceEntryForm();
      return;
    }

    const expandButton = event.target.closest("[data-finance-mission-toggle]");
    if (expandButton && financeSections.contains(expandButton)) {
      const missionId = clean(expandButton.getAttribute("data-finance-mission-toggle") || "");
      if (expandedFinanceMissionIds.has(missionId)) {
        expandedFinanceMissionIds.delete(missionId);
      } else {
        expandedFinanceMissionIds.add(missionId);
      }
      renderFinances();
      return;
    }

    const missionButton = event.target.closest("[data-finance-add-mission]");
    if (missionButton && financeSections.contains(missionButton)) {
      openNewFinanceEntryForm(clean(missionButton.getAttribute("data-finance-add-mission") || ""));
      return;
    }

    const rowButton = event.target.closest("[data-finance-row-key]");
    if (!rowButton || !financeSections.contains(rowButton)) {
      return;
    }

    const rowKey = clean(rowButton.getAttribute("data-finance-row-key") || "");
    const row = financeRowRegistry.get(rowKey);
    if (!row) {
      return;
    }

    if (row.sourceType === "mission") {
      openMissionOverrideForm(row);
      return;
    }

    openManualEditForm(row);
  });

  initializeFinancePage();
})();
