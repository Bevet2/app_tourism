const navMenu = document.querySelector("#nav-menu");
const navTrigger = document.querySelector("#nav-trigger");
const navPanel = document.querySelector("#nav-menu-panel");
const navCurrentLabel = document.querySelector("#nav-current-label");
const languageStorageKey = "route-pilote-language";
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
const invoiceMissionField = document.querySelector("#invoice-mission-field");
const invoiceMissionInput = document.querySelector("#invoice-mission-source");
const invoiceMissionHelp = document.querySelector("#invoice-mission-help");
const invoiceMissionActions = document.querySelector("#invoice-mission-actions");
const invoiceGenerateFromMissionButton = document.querySelector("#invoice-generate-from-mission");
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
const financeWorkspace = document.querySelector("#finance-workspace");
const operationsWorkspace = document.querySelector("#planning-board, #trip-list, #trip-detail");

const vehiclesStorageKey = "route-pilote-vehicles";
const collaboratorsStorageKey = "route-pilote-collaborators";
const invoicesStorageKey = "route-pilote-invoices";
const financeEntriesStorageKey = "route-pilote-finance-entries";
const selectedTripStorageKey = "route-pilote-selected-trip-v1";
const customMissionsStorageKey = "route-pilote-custom-missions-v1";
const missionOverridesStorageKey = "route-pilote-mission-overrides-v1";
const missionAssignmentsStorageKey = "route-pilote-mission-assignments-v2";
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
let remotePersistenceEnabled = false;

const appDataApiEndpoint = "/api/app-data";
const bundledAppSnapshotPath = "data/app_state.json";

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
const missionBillingStatusLabels = {
  quote_signed: "Devis valide",
  to_invoice: "A facturer",
  invoice_sent: "Facture envoyee",
  paid: "Reglee",
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

const supportedAppLanguages = new Set(["fr", "pt"]);
const appTranslationTable = {
  pt: {
    "Route Pilote | Tableau de bord chauffeur": "Route Pilote | Painel do motorista",
    "Route Pilote | Mes Véhicules": "Route Pilote | Meus Veículos",
    "Route Pilote | Mes Collaborateurs": "Route Pilote | Meus Colaboradores",
    "Route Pilote | Factures": "Route Pilote | Faturas",
    "Route Pilote | Finances": "Route Pilote | Finanças",
    "Route Pilote | Planification des missions": "Route Pilote | Planejamento das missões",
    "Route Pilote | Trajets": "Route Pilote | Trajetos",
    "Tableau de bord chauffeur": "Painel do motorista",
    "Pilotage des missions": "Gestão das missões",
    "Navigation": "Navegação",
    "Ouvrir une page": "Abrir uma página",
    "Langue": "Idioma",
    "Changer la langue": "Alterar idioma",
    "Français": "Francês",
    "Português": "Português BR",
    "Mon Calendrier": "Meu Calendário",
    "Mes Collaborateurs": "Meus Colaboradores",
    "Mes Véhicules": "Meus Veículos",
    "Mes Vehicules": "Meus Veículos",
    "Finances": "Finanças",
    "Trajets": "Trajetos",
    "Factures": "Faturas",
    "Une page d'accueil simple et directe pour suivre les clients, les trajets, les véhicules et l'activité du jour.": "Uma página inicial simples e direta para acompanhar clientes, trajetos, veículos e a atividade do dia.",
    "Page de planification pour affecter les chauffeurs, les accompagnateurs et les véhicules sur chaque départ de la semaine.": "Página de planejamento para atribuir motoristas, acompanhantes e veículos a cada saída da semana.",
    "Page d'exploitation des trajets pour suivre les parcours, les couts estimés et les informations de facturation liées à chaque mission.": "Página operacional dos trajetos para acompanhar percursos, custos estimados e informações de faturamento ligadas a cada missão.",
    "Page dédiée à l'équipe terrain, aux contacts utiles et aux disponibilités.": "Página dedicada à equipe de campo, aos contatos úteis e às disponibilidades.",
    "Page dediee a l'equipe terrain, aux contacts utiles et aux disponibilites.": "Página dedicada à equipe de campo, aos contatos úteis e às disponibilidades.",
    "Page dédiée à la flotte, à l'état des véhicules et à la capacité d'accueil.": "Página dedicada à frota, ao estado dos veículos e à capacidade de recepção.",
    "Page dediee a la flotte, a l'etat des vehicules et a la capacite d'accueil.": "Página dedicada à frota, ao estado dos veículos e à capacidade de recepção.",
    "Page dédiée aux factures, aux statuts de paiement et aux documents clients.": "Página dedicada às faturas, aos status de pagamento e aos documentos dos clientes.",
    "Page dediee aux factures, aux statuts de paiement et aux documents clients.": "Página dedicada às faturas, aos status de pagamento e aos documentos dos clientes.",
    "Page dédiée au suivi des recettes, des frais de route et de la rentabilité.": "Página dedicada ao acompanhamento das receitas, dos custos de rota e da rentabilidade.",
    "Page dediee au suivi des recettes, des frais de route et de la rentabilite.": "Página dedicada ao acompanhamento das receitas, dos custos de rota e da rentabilidade.",
    "Vue complète du planning et des courses.": "Visão completa do planejamento e das corridas.",
    "Planifier les missions, l'équipe et la flotte.": "Planejar as missões, a equipe e a frota.",
    "Contacts utiles et disponibilités de l'équipe.": "Contatos úteis e disponibilidades da equipe.",
    "Etat, capacité et suivi de la flotte.": "Estado, capacidade e acompanhamento da frota.",
    "Recettes, dépenses et suivi financier.": "Receitas, despesas e acompanhamento financeiro.",
    "Parcours, horaires et points de prise en charge.": "Percursos, horários e pontos de embarque.",
    "Parcours, couts carburant et suivi des missions.": "Percursos, custos de combustível e acompanhamento das missões.",
    "Documents clients et paiements à suivre.": "Documentos de clientes e pagamentos a acompanhar.",
    "Résumé de la journée": "Resumo do dia",
    "Retrouvez l'essentiel en un coup d'oeil avant chaque départ.": "Veja o essencial de relance antes de cada partida.",
    "Cette base regroupe les six espaces clés de votre activité de chauffeur. Le bloc calendrier reste visible sur l'accueil, et le menu ouvre les pages dédiées que nous allons détailler ensuite.": "Esta base reúne os seis espaços principais da sua atividade de motorista. O bloco do calendário fica visível na página inicial, e o menu abre as páginas dedicadas que vamos detalhar depois.",
    "Voir le calendrier": "Ver o calendário",
    "Ouvrir la page trajets": "Abrir a página de trajetos",
    "Accès rapides": "Acessos rápidos",
    "Acces rapides": "Acessos rápidos",
    "Accéder à la page complète du planning chauffeur.": "Acessar a página completa do planejamento do motorista.",
    "Acceder a la page complete du planning chauffeur.": "Acessar a página completa do planejamento do motorista.",
    "Planning": "Planejamento",
    "Retrouver la future page de gestion de la flotte et des entretiens.": "Encontrar a futura página de gestão da frota e das manutenções.",
    "Accéder à la page de suivi des recettes, frais et paiements.": "Acessar a página de acompanhamento das receitas, custos e pagamentos.",
    "Acceder a la page de suivi des recettes, frais et paiements.": "Acessar a página de acompanhamento das receitas, custos e pagamentos.",
    "Budget": "Orçamento",
    "Ouvrir la page qui servira aux transferts et circuits du jour.": "Abrir a página dos traslados e circuitos do dia.",
    "Consulter la future page des documents clients et des relances.": "Consultar a futura página dos documentos de clientes e lembretes.",
    "Parcours": "Percurso",
    "Documents": "Documentos",
    "Prochain service": "Próximo serviço",
    "Trajets du jour": "Trajetos do dia",
    "Clients attendus": "Clientes previstos",
    "Véhicules prêts": "Veículos prontos",
    "Calendrier": "Calendário",
    "Courses planifiées sur les 7 prochains jours": "Corridas planejadas para os próximos 7 dias",
    "Page véhicules": "Página de veículos",
    "Page vehicules": "Página de veículos",
    "Ajouter et retrouver rapidement les véhicules utilisés.": "Adicionar e encontrar rapidamente os veículos utilizados.",
    "Cette page sert à enregistrer les véhicules avec les informations essentielles: marque, modèle, couleur, plaque d'immatriculation et consommation.": "Esta página serve para registrar os veículos com as informações essenciais: marca, modelo, cor, matrícula e consumo.",
    "Retour à l'accueil": "Voltar ao início",
    "Ajouter un véhicule": "Adicionar um veículo",
    "Ajouter un vehicule": "Adicionar um veículo",
    "Flotte": "Frota",
    "Liste simple des véhicules": "Lista simples dos veículos",
    "Liste simple des vehicules": "Lista simples dos veículos",
    "Une base rapide pour retrouver les véhicules déjà ajoutés.": "Uma base rápida para encontrar os veículos já adicionados.",
    "Véhicules ajoutés": "Veículos adicionados",
    "Vehicules ajoutes": "Veículos adicionados",
    "Véhicules loués": "Veículos alugados",
    "Véhicules disponibles": "Veículos disponíveis",
    "Plaques enregistrées": "Placas registradas",
    "Plaques enregistrees": "Placas registradas",
    "Formulaire": "Formulário",
    "Stockage": "Armazenamento",
    "Simple": "Simples",
    "Local": "Local",
    "Mes véhicules": "Meus veículos",
    "Mes vehicules": "Meus veículos",
    "Les véhicules déjà ajoutés": "Veículos já adicionados",
    "Les vehicules deja ajoutes": "Veículos já adicionados",
    "Gestion simple": "Gestão simples",
    "Ajoutez un véhicule pour retrouver rapidement son modèle, sa couleur, sa plaque et sa consommation.": "Adicione um veículo para encontrar rapidamente o modelo, a cor, a matrícula e o consumo.",
    "Nouveau véhicule": "Novo veículo",
    "Nouveau vehicule": "Novo veículo",
    "Modifier le véhicule": "Editar o veículo",
    "Modifier le vehicule": "Editar o veículo",
    "Ajouter un véhicule à la liste": "Adicionar um veículo à lista",
    "Marque": "Marca",
    "Modele": "Modelo",
    "Modèle": "Modelo",
    "Couleur": "Cor",
    "Plaque d'immatriculation": "Matrícula",
    "Type de véhicule": "Tipo de veículo",
    "Type de vehicule": "Tipo de veículo",
    "Mon véhicule": "Meu veículo",
    "Mon vehicule": "Meu veículo",
    "Véhicule d'un collaborateur": "Veículo de um colaborador",
    "Vehicule d'un collaborateur": "Veículo de um colaborador",
    "Véhicule loué": "Veículo alugado",
    "Vehicule loue": "Veículo alugado",
    "Etat du véhicule": "Estado do veículo",
    "Etat du vehicule": "Estado do veículo",
    "Disponible": "Disponível",
    "En utilisation": "Em utilização",
    "Reparation": "Reparação",
    "Réparation": "Reparação",
    "Location terminée": "Aluguel terminado",
    "Location terminee": "Aluguel terminado",
    "Location": "Aluguel",
    "Consommation": "Consumo",
    "Unite": "Unidade",
    "Date de fin de location": "Data de fim do aluguel",
    "Location jusqu'au": "Alugado até",
    "Mission liee": "Missão vinculada",
    "Mission liée": "Missão vinculada",
    "Ce vehicule n'est affecte a aucune mission du planning.": "Este veículo não está atribuído a nenhuma missão do planejamento.",
    "Ce véhicule n'est affecté à aucune mission du planning.": "Este veículo não está atribuído a nenhuma missão do planejamento.",
    "Collaborateur chauffeur": "Colaborador motorista",
    "Choisir un chauffeur": "Escolher um motorista",
    "Enregistrer le véhicule": "Salvar o veículo",
    "Enregistrer le vehicule": "Salvar o veículo",
    "Exclure le véhicule": "Excluir o veículo",
    "Exclure le vehicule": "Excluir o veículo",
    "Filtres": "Filtros",
    "Type": "Tipo",
    "Etat": "Estado",
    "Tous les types": "Todos os tipos",
    "Tous les états": "Todos os estados",
    "Tous les etats": "Todos os estados",
    "Réinitialiser": "Reiniciar",
    "Reinitialiser": "Reiniciar",
    "Toutes les factures affichées": "Todas as faturas exibidas",
    "Toutes les factures affichees": "Todas as faturas exibidas",
    "Page collaborateurs": "Página de colaboradores",
    "Ajouter et retrouver rapidement les personnes qui travaillent avec vous.": "Adicionar e encontrar rapidamente as pessoas que trabalham com você.",
    "Cette page sert à enregistrer les collaborateurs avec les informations essentielles: prénom, nom, fonction et langues parlées avec leur niveau.": "Esta página serve para registrar os colaboradores com as informações essenciais: nome, sobrenome, função e idiomas falados com nível.",
    "Equipe": "Equipe",
    "Liste simple des collaborateurs": "Lista simples de colaboradores",
    "Une base rapide pour retrouver les guides et les chauffeurs déjà ajoutés.": "Uma base rápida para encontrar os guias e motoristas já adicionados.",
    "Collaborateurs ajoutés": "Colaboradores adicionados",
    "Guides": "Guias",
    "Chauffeurs": "Motoristas",
    "Langues suivies": "Idiomas acompanhados",
    "Les collaborateurs déjà ajoutés": "Colaboradores já adicionados",
    "Ajoutez un collaborateur pour retrouver rapidement son nom, sa fonction et les langues qu'il peut utiliser avec vos clients.": "Adicione um colaborador para encontrar rapidamente o nome, a função e os idiomas que ele pode usar com seus clientes.",
    "Ajouter un collaborateur": "Adicionar um colaborador",
    "Nouveau collaborateur": "Novo colaborador",
    "Modifier le collaborateur": "Editar o colaborador",
    "Ajouter un collaborateur à la liste": "Adicionar um colaborador à lista",
    "Prénom": "Nome",
    "Prenom": "Nome",
    "Nom": "Sobrenome",
    "Fonction": "Função",
    "Guide": "Guia",
    "Chauffeur mission": "Motorista da missão",
    "Motorista mission": "Motorista da missão",
    "Chauffeur": "Motorista",
    "Disponibilite": "Disponibilidade",
    "Disponibilité": "Disponibilidade",
    "En mission": "Em missão",
    "Indisponible": "Indisponível",
    "Vehicule associe": "Veículo associado",
    "Véhicule associé": "Veículo associado",
    "Vehicules associes": "Veículos associados",
    "Véhicules associés": "Veículos associados",
    "Langues": "Idiomas",
    "Langue": "Idioma",
    "Niveau": "Nível",
    "Notions": "Noções",
    "Intermediaire": "Intermediário",
    "Intermédiaire": "Intermediário",
    "Conversationnel": "Conversacional",
    "Courant": "Fluente",
    "Ajouter la langue": "Adicionar idioma",
    "Enregistrer le collaborateur": "Salvar o colaborador",
    "Effacer": "Limpar",
    "Page factures": "Página de faturas",
    "Construire une base claire pour vos factures clients.": "Construir uma base clara para suas faturas de clientes.",
    "Voir la page finances": "Ver a página de finanças",
    "Facturation": "Faturamento",
    "Modele de facture generique": "Modelo de fatura genérico",
    "Une base neutre pour ensuite générer vos propres documents.": "Uma base neutra para depois gerar seus próprios documentos.",
    "Factures creees": "Faturas criadas",
    "Factures créées": "Faturas criadas",
    "Interlocuteur": "Contato",
    "Societe exemple": "Empresa exemplo",
    "Société exemple": "Empresa exemplo",
    "Total actif": "Total ativo",
    "Facture client": "Fatura de cliente",
    "Facture externe": "Fatura externa",
    "Une base de travail pour vos documents clients": "Uma base de trabalho para seus documentos de clientes",
    "Creation simple": "Criação simples",
    "Ajouter une facture": "Adicionar uma fatura",
    "Reglement": "Pagamento",
    "Règlement": "Pagamento",
    "Toutes": "Todas",
    "Reglees": "Pagas",
    "Réglées": "Pagas",
    "Non reglees": "Não pagas",
    "Non réglées": "Não pagas",
    "Nouvelle facture": "Nova fatura",
    "Renseigner les informations du document": "Preencher as informações do documento",
    "Facture": "Fatura",
    "Informations generales du document.": "Informações gerais do documento.",
    "Type de facture": "Tipo de fatura",
    "Numero de facture": "Número da fatura",
    "Numéro de facture": "Número da fatura",
    "Date d'emission": "Data de emissão",
    "Date d'émission": "Data de emissão",
    "Mission source": "Missão de origem",
    "Choisir une mission du planning": "Escolher uma missão do planejamento",
    "Pre-remplir depuis la mission": "Preencher a partir da missão",
    "Mode de paiement": "Forma de pagamento",
    "Virement": "Transferência",
    "Carte": "Cartão",
    "Especes": "Dinheiro",
    "Espèces": "Dinheiro",
    "Cheque": "Cheque",
    "Chèque": "Cheque",
    "Date de reglement": "Data de pagamento",
    "Date de règlement": "Data de pagamento",
    "Nature de la facture externe": "Natureza da fatura externa",
    "Facture a payer": "Fatura a pagar",
    "Facture à payer": "Fatura a pagar",
    "Facture a recevoir": "Fatura a receber",
    "Facture à recevoir": "Fatura a receber",
    "Fichier de la facture externe": "Arquivo da fatura externa",
    "Emetteur": "Emissor",
    "Émetteur": "Emissor",
    "Informations de votre activite.": "Informações da sua atividade.",
    "Nom ou raison sociale": "Nome ou razão social",
    "Adresse": "Endereço",
    "Code postal et ville": "Código postal e cidade",
    "Telephone": "Telefone",
    "Téléphone": "Telefone",
    "Registre EVTC": "Registro EVTC",
    "SIRET": "SIRET",
    "Client": "Cliente",
    "Entreprise et contact de facturation.": "Empresa e contato de faturamento.",
    "Nom du client": "Nome do cliente",
    "TVA intracommunautaire": "IVA intracomunitário",
    "Contact": "Contato",
    "Email": "Email",
    "Prestation": "Serviço",
    "Details de la course ou du service facture.": "Detalhes da corrida ou do serviço faturado.",
    "Designation / objet": "Designação / objeto",
    "Désignation / objet": "Designação / objeto",
    "Date de prise en charge": "Data de embarque",
    "Lieu de prise en charge": "Local de embarque",
    "Destination": "Destino",
    "Nombre de passagers": "Número de passageiros",
    "Kilometres parcourus": "Quilômetros percorridos",
    "Kilomètres parcourus": "Quilômetros percorridos",
    "Montants et mentions": "Valores e observações",
    "Total HT": "Total sem IVA",
    "Total TTC": "Total com IVA",
    "TVA 10 %": "IVA 10 %",
    "TVA 20 %": "IVA 20 %",
    "Assurance": "Seguro",
    "Mention legale": "Observação legal",
    "Mention légale": "Observação legal",
    "Ajouter la facture": "Adicionar a fatura",
    "Page finances": "Página de finanças",
    "Piloter les recettes, les dépenses et les missions depuis un seul endroit.": "Gerir receitas, despesas e missões em um só lugar.",
    "Cette page est pensée comme un cockpit de rentabilité : elle met en avant les gains, les pertes et les montants en attente, avec des graphiques et des filtres pour comprendre rapidement la santé financière de la société.": "Esta página foi pensada como um cockpit de rentabilidade: ela destaca ganhos, perdas e valores pendentes, com gráficos e filtros para entender rapidamente a saúde financeira da empresa.",
    "Cette page est pensee comme un cockpit de rentabilite : elle met en avant les gains, les pertes et les montants en attente, avec des graphiques et des filtres pour comprendre rapidement la sante financiere de la societe.": "Esta página foi pensada como um cockpit de rentabilidade: ela destaca ganhos, perdas e valores pendentes, com gráficos e filtros para entender rapidamente a saúde financeira da empresa.",
    "Voir la page factures": "Ver a página de faturas",
    "Voir la page trajets": "Ver a página de trajetos",
    "Voir les finances": "Ver as finanças",
    "Voir la fiche trajet": "Ver a ficha do trajeto",
    "Voir la mission": "Ver a missão",
    "Vue globale": "Visão global",
    "Finances liées aux factures et aux missions": "Finanças ligadas às faturas e missões",
    "Les valeurs en attente restent visibles en jaune jusqu'à validation.": "Os valores pendentes continuam visíveis em amarelo até a validação.",
    "Factures, missions et lignes complémentaires": "Faturas, missões e linhas complementares",
    "Factures, missions et lignes complementaires": "Faturas, missões e linhas complementares",
    "Les factures sont reprises automatiquement, les routes restent séparées par mission, et vous pouvez ajouter des lignes manuelles pour compléter votre suivi.": "As faturas são retomadas automaticamente, as rotas ficam separadas por missão, e você pode adicionar linhas manuais para completar o acompanhamento.",
    "Les factures sont reprises automatiquement, les routes restent separees par mission, et vous pouvez ajouter des lignes manuelles pour completer votre suivi.": "As faturas são retomadas automaticamente, as rotas ficam separadas por missão, e você pode adicionar linhas manuais para completar o acompanhamento.",
    "Recettes": "Receitas",
    "Dépenses": "Despesas",
    "Depenses": "Despesas",
    "Résultat net": "Resultado líquido",
    "Resultat net": "Resultado líquido",
    "En attente": "Pendente",
    "Suivi actif": "Acompanhamento ativo",
    "Afficher les filtres": "Mostrar filtros",
    "Masquer les filtres": "Ocultar filtros",
    "Source": "Origem",
    "Toutes": "Todas",
    "Factures clients": "Faturas de clientes",
    "Factures externes": "Faturas externas",
    "Routes / missions": "Rotas / missões",
    "Lignes libres": "Linhas livres",
    "Catégorie": "Categoria",
    "Categorie": "Categoria",
    "Mission": "Missão",
    "Carburant": "Combustível",
    "Peage + parking": "Pedágio + estacionamento",
    "Péage + parking": "Pedágio + estacionamento",
    "Activites": "Atividades",
    "Activités": "Atividades",
    "Entretien / reparation": "Manutenção / reparo",
    "Entretien / réparation": "Manutenção / reparo",
    "Autres": "Outros",
    "Flux": "Fluxo",
    "Tous": "Todos",
    "Recette": "Receita",
    "Depense": "Despesa",
    "Dépense": "Despesa",
    "Période": "Período",
    "Periode": "Período",
    "Tout": "Tudo",
    "7 jours": "7 dias",
    "30 jours": "30 dias",
    "Cette année": "Este ano",
    "Cette annee": "Este ano",
    "Année en cours": "Ano atual",
    "Annee en cours": "Ano atual",
    "Analyse": "Análise",
    "Analyse financière": "Análise financeira",
    "Analyse financiere": "Análise financeira",
    "Analyse visuelle en préparation": "Análise visual em preparação",
    "Analyse visuelle en preparation": "Análise visual em preparação",
    "Les graphiques de gains et pertes apparaîtront ici.": "Os gráficos de ganhos e perdas aparecerão aqui.",
    "Les graphiques de gains et pertes apparaitront ici.": "Os gráficos de ganhos e perdas aparecerão aqui.",
    "Résultat net et tendance": "Resultado líquido e tendência",
    "Resultat net et tendance": "Resultado líquido e tendência",
    "Vue consolidee des factures, missions et lignes ajoutees. Les montants en attente restent visibles sans etre caches dans les totaux.": "Visão consolidada das faturas, missões e linhas adicionadas. Os valores pendentes continuam visíveis sem serem escondidos dos totais.",
    "Vue consolidée des factures, missions et lignes ajoutées. Les montants en attente restent visibles sans être cachés dans les totaux.": "Visão consolidada das faturas, missões e linhas adicionadas. Os valores pendentes continuam visíveis sem serem escondidos dos totais.",
    "Total net": "Total líquido",
    "Benefice ou perte, consolide par periode.": "Lucro ou perda, consolidado por período.",
    "Bénéfice ou perte, consolidé par période.": "Lucro ou perda, consolidado por período.",
    "Barres par categorie": "Barras por categoria",
    "Barres par catégorie": "Barras por categoria",
    "Courbe mensuelle": "Curva mensal",
    "Barres mensuelles": "Barras mensais",
    "Courbe": "Curva",
    "Barres": "Barras",
    "Mois": "Mês",
    "Changer de graphique": "Alterar gráfico",
    "Resultat net par mois": "Resultado líquido por mês",
    "Résultat net par mois": "Resultado líquido por mês",
    "Impact net par categorie": "Impacto líquido por categoria",
    "Impact net par catégorie": "Impacto líquido por categoria",
    "Rentabilite par mission": "Rentabilidade por missão",
    "Rentabilité par mission": "Rentabilidade por missão",
    "Categories": "Categorias",
    "Catégories": "Categorias",
    "Valeurs": "Valores",
    "Liste consolidee": "Lista consolidada",
    "Liste consolidée": "Lista consolidada",
    "+ Ajouter une ligne": "+ Adicionar uma linha",
    "Ajouter une ligne": "Adicionar uma linha",
    "Ajouter une ligne de finance": "Adicionar uma linha financeira",
    "Nouvelle ligne": "Nova linha",
    "Modifier la ligne": "Editar a linha",
    "Modifier la ligne de finance": "Editar a linha financeira",
    "Ajuster une valeur": "Ajustar um valor",
    "Ajuster la valeur de mission": "Ajustar o valor da missão",
    "Ajuster": "Ajustar",
    "Voir": "Ver",
    "Rattachement": "Vinculação",
    "Ligne générale": "Linha geral",
    "Ligne generale": "Linha geral",
    "Ligne rattachée à une mission": "Linha vinculada a uma missão",
    "Ligne rattachee a une mission": "Linha vinculada a uma missão",
    "Libelle": "Rótulo",
    "Libellé": "Rótulo",
    "Nature": "Natureza",
    "Montant": "Valor",
    "Statut": "Status",
    "Validé": "Validado",
    "Valide": "Validado",
    "Estimé": "Estimado",
    "Estime": "Estimado",
    "Date de validation / règlement": "Data de validação / pagamento",
    "Date de validation / reglement": "Data de validação / pagamento",
    "Note": "Nota",
    "Enregistrer": "Salvar",
    "Enregistrer la ligne": "Salvar a linha",
    "Enregistrer les modifications": "Salvar as alterações",
    "Revenir aux valeurs": "Voltar aos valores",
    "Retirer l'ajustement": "Remover o ajuste",
    "Supprimer": "Excluir",
    "Missions rentables": "Missões rentáveis",
    "Chargement des finances...": "Carregando finanças...",
    "Les factures, les missions et les lignes complémentaires arrivent ici.": "As faturas, missões e linhas complementares aparecem aqui.",
    "Les factures, les missions et les lignes complementaires arrivent ici.": "As faturas, missões e linhas complementares aparecem aqui.",
    "Aucune ligne financière pour le moment": "Nenhuma linha financeira por enquanto",
    "Aucune ligne financiere pour le moment": "Nenhuma linha financeira por enquanto",
    "Toutes les lignes financières affichées": "Todas as linhas financeiras exibidas",
    "Toutes les lignes financieres affichees": "Todas as linhas financeiras exibidas",
    "Aucune valeur trouvée": "Nenhum valor encontrado",
    "Aucune valeur trouvee": "Nenhum valor encontrado",
    "Modifiez les filtres ou ajoutez une ligne.": "Altere os filtros ou adicione uma linha.",
    "Sans libelle": "Sem rótulo",
    "Sans libellé": "Sem rótulo",
    "Details de mission": "Detalhes da missão",
    "Détails de mission": "Detalhes da missão",
    "Ajouter une ligne mission": "Adicionar uma linha à missão",
    "Aucun detail": "Nenhum detalhe",
    "Aucun détail": "Nenhum detalhe",
    "Valeur": "Valor",
    "Fermer le formulaire": "Fechar o formulário",
    "Ex : plein carburant retour mission": "Ex.: abastecimento no retorno da missão",
    "Ex : avance faite par le chauffeur, à régulariser.": "Ex.: adiantamento feito pelo motorista, a regularizar.",
    "Ex : avance faite par le chauffeur, a regulariser.": "Ex.: adiantamento feito pelo motorista, a regularizar.",
    "Planning exploitation": "Planejamento operacional",
    "Affecter les bons collaborateurs et les bons véhicules mission par mission.": "Atribuir os colaboradores e veículos certos missão por missão.",
    "Ouvrir les trajets": "Abrir os trajetos",
    "Verifier la flotte": "Verificar a frota",
    "Vérifier la flotte": "Verificar a frota",
    "Semaine active": "Semana ativa",
    "Semaine en cours": "Semana atual",
    "Missions semaine": "Missões da semana",
    "Missions complètes": "Missões completas",
    "Missions completes": "Missões completas",
    "Passagers planifiés": "Passageiros planejados",
    "Passagers planifies": "Passageiros planejados",
    "CA estimé": "Faturamento estimado",
    "CA estime": "Faturamento estimado",
    "Le planning hebdomadaire des missions et des affectations": "Planejamento semanal das missões e atribuições",
    "Pret a exploiter": "Pronto para operar",
    "Prêt à exploiter": "Pronto para operar",
    "Calendrier global": "Calendário global",
    "Nouvelle mission": "Nova missão",
    "Toutes les missions par mois": "Todas as missões por mês",
    "Mois precedent": "Mês anterior",
    "Mois précédent": "Mês anterior",
    "Mois actif": "Mês ativo",
    "Mois suivant": "Mês seguinte",
    "Revenir a cette semaine": "Voltar a esta semana",
    "Revenir à cette semaine": "Voltar a esta semana",
    "Lun": "Seg",
    "Mar": "Ter",
    "Mer": "Qua",
    "Jeu": "Qui",
    "Ven": "Sex",
    "Sam": "Sáb",
    "Dim": "Dom",
    "Pilotage": "Gestão",
    "Prioriser les missions et fermer les trous de planning": "Priorizar missões e fechar lacunas no planejamento",
    "Points ouverts": "Pontos abertos",
    "Ressources": "Recursos",
    "Vehicules exploitables": "Veículos operacionais",
    "Véhicules exploitables": "Veículos operacionais",
    "Collaborateurs mobilisables": "Colaboradores disponíveis",
    "Ajouter une mission au planning": "Adicionar uma missão ao planejamento",
    "Code mission": "Código da missão",
    "Type de service": "Tipo de serviço",
    "Date": "Data",
    "Heure de depart": "Hora de partida",
    "Heure de départ": "Hora de partida",
    "Heure d'arrivee": "Hora de chegada",
    "Heure d'arrivée": "Hora de chegada",
    "Adresse de recuperation": "Endereço de embarque",
    "Adresse de récupération": "Endereço de embarque",
    "Point de rendez-vous": "Ponto de encontro",
    "Etapes et activites": "Etapas e atividades",
    "Étapes et activités": "Etapas e atividades",
    "Ajouter une etape": "Adicionar uma etapa",
    "Ajouter une étape": "Adicionar uma etapa",
    "Adresse de destination": "Endereço de destino",
    "Passagers": "Passageiros",
    "Bagages": "Bagagens",
    "Prix vendu (EUR)": "Preço vendido (EUR)",
    "Marge cible (%)": "Margem alvo (%)",
    "Peages (EUR)": "Pedágios (EUR)",
    "Péages (EUR)": "Pedágios (EUR)",
    "Parking (EUR)": "Estacionamento (EUR)",
    "Priorite": "Prioridade",
    "Priorité": "Prioridade",
    "Standard": "Padrão",
    "Prioritaire": "Prioritária",
    "VIP": "VIP",
    "Statut facturation": "Status de faturamento",
    "Devis valide": "Orçamento validado",
    "Devis validé": "Orçamento validado",
    "A facturer": "A faturar",
    "À facturer": "A faturar",
    "Facture envoyee": "Fatura enviada",
    "Facture envoyée": "Fatura enviada",
    "Reglee": "Paga",
    "Réglée": "Paga",
    "Notes mission": "Notas da missão",
    "Simulation": "Simulação",
    "Etapes activites": "Etapas de atividades",
    "Étapes activités": "Etapas de atividades",
    "Budget activites": "Orçamento de atividades",
    "Budget activités": "Orçamento de atividades",
    "Prix conseille": "Preço recomendado",
    "Prix conseillé": "Preço recomendado",
    "Calcule a l'ajout": "Calculado ao adicionar",
    "Calculé à l'ajout": "Calculado ao adicionar",
    "Ajouter la mission": "Adicionar a missão",
    "Collaborateurs disponibles": "Colaboradores disponíveis",
    "Vehicules utilisables cette semaine": "Veículos utilizáveis esta semana",
    "Véhicules utilisables cette semaine": "Veículos utilizáveis esta semana",
    "Alertes": "Alertas",
    "Ce qui bloque encore": "O que ainda bloqueia",
    "Page trajets": "Página de trajetos",
    "Exploitation trajet": "Operação de trajeto",
    "Suivre chaque parcours avec son cout carburant, sa marge et ses contraintes terrain.": "Acompanhar cada percurso com seu custo de combustível, sua margem e suas restrições de campo.",
    "Suivre chaque parcours avec son coût carburant, sa marge et ses contraintes terrain.": "Acompanhar cada percurso com seu custo de combustível, sua margem e suas restrições de campo.",
    "Vue exploitation": "Visão operacional",
    "Une lecture directe pour arbitrer rapidement sur la journée.": "Uma leitura direta para decidir rapidamente durante o dia.",
    "Une lecture directe pour arbitrer rapidement sur la journee.": "Uma leitura direta para decidir rapidamente durante o dia.",
    "CA estimé": "Faturamento estimado",
    "CA estime": "Faturamento estimado",
    "Cout opérationnel": "Custo operacional",
    "Cout operationnel": "Custo operacional",
    "Coût opérationnel": "Custo operacional",
    "Marge moyenne": "Margem média",
    "Le détail d'exploitation mission par mission": "O detalhe operacional missão por missão",
    "Le detail d'exploitation mission par mission": "O detalhe operacional missão por missão",
    "Ajouter une mission exploitable": "Adicionar uma missão operacional",
    "Choisir un trajet": "Escolher um trajeto",
    "Sélectionnez une mission pour retrouver son parcours, ses ressources, son estimation carburant et son statut de facturation.": "Selecione uma missão para encontrar o percurso, os recursos, a estimativa de combustível e o status de faturamento.",
    "Selectionnez une mission pour retrouver son parcours, ses ressources, son estimation carburant et son statut de facturation.": "Selecione uma missão para encontrar o percurso, os recursos, a estimativa de combustível e o status de faturamento.",
    "Carte du trajet": "Mapa do trajeto",
    "Mission selectionnee": "Missão selecionada",
    "Mission sélectionnée": "Missão selecionada",
    "Modifier la mission": "Editar a missão",
    "Ouvrir la facture": "Abrir a fatura",
    "Affectation": "Atribuição",
    "Equipe et vehicule de mission": "Equipe e veículo da missão",
    "Équipe et véhicule de mission": "Equipe e veículo da missão",
    "Renfort": "Reforço",
    "Vehicule": "Veículo",
    "Véhicule": "Veículo",
    "Parcours": "Percurso",
    "Itineraire voiture et etapes de mission": "Itinerário de carro e etapas da missão",
    "Itinéraire voiture et étapes de mission": "Itinerário de carro e etapas da missão",
    "Estimation couts": "Estimativa de custos",
    "Estimation coûts": "Estimativa de custos",
    "Recuperation, activites et destination": "Retirada, atividades e destino",
    "Récupération, activités et destination": "Retirada, atividades e destino",
    "Recuperation": "Retirada",
    "Récupération": "Retirada",
    "Cout total": "Custo total",
    "Coût total": "Custo total",
    "Prix saisi, prix conseille et marge estimee": "Preço inserido, preço recomendado e margem estimada",
    "Prix saisi, prix conseillé et marge estimée": "Preço inserido, preço recomendado e margem estimada",
    "Prix vendu": "Preço vendido",
    "Prix conseille": "Preço recomendado",
    "Prix conseillé": "Preço recomendado",
    "Marge brute": "Margem bruta",
    "Marge cible": "Margem alvo",
    "Taux de marge": "Taxa de margem",
    "Prix / passager": "Preço / passageiro",
    "Infos mission": "Informações da missão",
    "Passagers, bagages et notes": "Passageiros, bagagens e notas",
    "Aujourd'hui": "Hoje",
    "Toujours visible": "Sempre visível",
    "Résumé": "Resumo",
    "Resume": "Resumo",
    "Courses planifiées": "Corridas planejadas",
    "Courses planifiees": "Corridas planejadas",
    "Transfert prive": "Traslado privado",
    "Transfert privé": "Traslado privado",
    "Transfert vignoble": "Traslado vinícola",
    "Transfert evenement": "Traslado evento",
    "Transfert événement": "Traslado evento",
    "Circuit demi-journee": "Circuito de meio dia",
    "Circuit demi-journée": "Circuito de meio dia",
    "Aucune mission · cliquer pour en ajouter une": "Nenhuma missão · clique para adicionar",
    "Aucune mission Â· cliquer pour en ajouter une": "Nenhuma missão · clique para adicionar",
    "Ajouter une mission": "Adicionar uma missão"
  },
};
const reverseAppTranslationTable = new Map();
Object.entries(appTranslationTable.pt).forEach(([sourceText, translatedText]) => {
  if (!reverseAppTranslationTable.has(translatedText)) {
    reverseAppTranslationTable.set(translatedText, sourceText);
  }
});
const appPartialTranslationTable = {
  pt: [
    ["FACTURES À SUIVRE", "FATURAS A ACOMPANHAR"],
    ["FACTURES A SUIVRE", "FATURAS A ACOMPANHAR"],
    ["Factures à suivre", "Faturas a acompanhar"],
    ["Factures a suivre", "Faturas a acompanhar"],
    ["COLLABORATEURS", "COLABORADORES"],
    ["COLLABORATEUR", "COLABORADOR"],
    ["Collaborateurs", "Colaboradores"],
    ["Collaborateur", "Colaborador"],
    ["CLIENTS PRÉVUS", "CLIENTES PREVISTOS"],
    ["CLIENTS PREVUS", "CLIENTES PREVISTOS"],
    ["Clients prévus", "Clientes previstos"],
    ["Clients prevus", "Clientes previstos"],
    ["VÉHICULES MOBILISÉS", "VEÍCULOS MOBILIZADOS"],
    ["VEHICULES MOBILISES", "VEÍCULOS MOBILIZADOS"],
    ["Véhicules mobilisés", "Veículos mobilizados"],
    ["Vehicules mobilises", "Veículos mobilizados"],
    ["KILOMETRES SEMAINE", "QUILÔMETROS DA SEMANA"],
    ["KILOMÈTRES SEMAINE", "QUILÔMETROS DA SEMANA"],
    ["Kilometres semaine", "Quilômetros da semana"],
    ["Kilomètres semaine", "Quilômetros da semana"],
    ["SEMAINE", "SEMANA"],
    ["Semaine", "Semana"],
    ["PAIEMENT", "PAGAMENTO"],
    ["Paiement", "Pagamento"],
    ["Documents", "Documentos"],
    ["FACTURE n°", "FATURA n°"],
    ["Factures clients + factures externes", "Faturas de clientes + faturas externas"],
    ["Détail course + montant + mode de paiement", "Detalhe da corrida + valor + forma de pagamento"],
    ["Detail course + montant + mode de paiement", "Detalhe da corrida + valor + forma de pagamento"],
    ["CE QUE L'ON POURRA AJOUTER", "O QUE PODEREMOS ADICIONAR"],
    ["Ce que l'on pourra ajouter", "O que poderemos adicionar"],
    ["Ce que l'on garde", "O que mantemos"],
    ["Accéder à la page complète du planning chauffeur", "Acessar a página completa do planejamento do motorista"],
    ["Acceder a la page complete du planning chauffeur", "Acessar a página completa do planejamento do motorista"],
    ["Planning", "Planejamento"],
    ["Voir la page dédiée à l'équipe terrain et aux contacts", "Ver a página dedicada à equipe de campo e aos contatos"],
    ["Voir la page dediee a l'equipe terrain et aux contacts", "Ver a página dedicada à equipe de campo e aos contatos"],
    ["Consulter la future page des documents clients et des relances", "Consultar a futura página dos documentos de clientes e lembretes"],
    ["Retrouver la future page de gestion de la flotte et des entretiens", "Encontrar a futura página de gestão da frota e das manutenções"],
    ["Accéder à la page de suivi des recettes, frais et paiements", "Acessar a página de acompanhamento das receitas, custos e pagamentos"],
    ["Acceder a la page de suivi des recettes, frais et paiements", "Acessar a página de acompanhamento das receitas, custos e pagamentos"],
    ["Ouvrir la page qui servira aux transferts et circuits du jour", "Abrir a página dos traslados e circuitos do dia"],
    ["Budget", "Orçamento"],
    ["Parcours", "Percurso"],
    ["Flotte", "Frota"],
    ["Flotte societe", "Frota da empresa"],
    ["Flotte société", "Frota da empresa"],
    ["Plaques enregistrées", "Placas registradas"],
    ["Plaques enregistrees", "Placas registradas"],
    ["Formulaire", "Formulário"],
    ["Stockage", "Armazenamento"],
    ["Location jusqu'au", "Alugado até"],
    ["Mission liee", "Missão vinculada"],
    ["Mission liée", "Missão vinculada"],
    ["Ce vehicule n'est affecte a aucune mission du planning", "Este veículo não está atribuído a nenhuma missão do planejamento"],
    ["Ce véhicule n'est affecté à aucune mission du planning", "Este veículo não está atribuído a nenhuma missão do planejamento"],
    ["Toujours visible", "Sempre visível"],
    ["Résumé", "Resumo"],
    ["Resume", "Resumo"],
    ["Courses planifiées", "Corridas planejadas"],
    ["Courses planifiees", "Corridas planejadas"],
    ["Les 7 prochains jours de courses planifiées", "Os próximos 7 dias de corridas planejadas"],
    ["Les 7 prochains jours de courses planifiees", "Os próximos 7 dias de corridas planejadas"],
    ["Vue glissante sur 7 jours", "Visão móvel de 7 dias"],
    ["Retrouvez ici tous les départs prévus sur les 7 jours courants, avec l'heure, le trajet, le nombre de clients et le véhicule affecté", "Veja aqui todas as saídas previstas nos próximos 7 dias, com horário, trajeto, número de clientes e veículo atribuído"],
    ["Retrouvez ici tous les departs prevus sur les 7 jours courants, avec l'heure, le trajet, le nombre de clients et le vehicule affecte", "Veja aqui todas as saídas previstas nos próximos 7 dias, com horário, trajeto, número de clientes e veículo atribuído"],
    ["Le calendrier devient une vraie vue opérationnelle: vous placez les chauffeurs, les renforts et les véhicules au bon moment, puis vous repérez tout de suite les trous de planning, les soucis de capacité et les missions prêtes à partir", "O calendário vira uma visão operacional de verdade: você posiciona motoristas, reforços e veículos no momento certo, depois identifica rapidamente lacunas no planejamento, problemas de capacidade e missões prontas para sair"],
    ["Le calendrier devient une vraie vue operationnelle: vous placez les chauffeurs, les renforts et les vehicules au bon moment, puis vous reperez tout de suite les trous de planning, les soucis de capacite et les missions pretes a partir", "O calendário vira uma visão operacional de verdade: você posiciona motoristas, reforços e veículos no momento certo, depois identifica rapidamente lacunas no planejamento, problemas de capacidade e missões prontas para sair"],
    ["Une seule vue pour les missions, les ressources et les arbitrages", "Uma única visão para missões, recursos e decisões"],
    ["Chaque mission affiche directement le chauffeur, le renfort, le véhicule et les signaux d'alerte. L'objectif n'est plus seulement de voir un agenda, mais de valider l'exécution", "Cada missão mostra diretamente o motorista, o reforço, o veículo e os alertas. O objetivo deixa de ser apenas ver uma agenda e passa a validar a execução"],
    ["Chaque mission affiche directement le chauffeur, le renfort, le vehicule et les signaux d'alerte. L'objectif n'est plus seulement de voir un agenda, mais de valider l'execution", "Cada missão mostra diretamente o motorista, o reforço, o veículo e os alertas. O objetivo deixa de ser apenas ver uma agenda e passa a validar a execução"],
    ["Capacité insuffisante, ressource indisponible, mission sans chauffeur ou véhicule non encore affecté: tout remonte ici", "Capacidade insuficiente, recurso indisponível, missão sem motorista ou veículo ainda não atribuído: tudo aparece aqui"],
    ["Capacite insuffisante, ressource indisponible, mission sans chauffeur ou vehicule non encore affecte: tout remonte ici", "Capacidade insuficiente, recurso indisponível, missão sem motorista ou veículo ainda não atribuído: tudo aparece aqui"],
    ["La page trajets devient le centre de détail de chaque mission: départ, destination, passagers, bagages, affectation, estimation carburant selon le véhicule choisi, puis lecture directe de la marge et de l'état de facturation", "A página de trajetos vira o centro de detalhe de cada missão: saída, destino, passageiros, bagagens, atribuição, estimativa de combustível conforme o veículo escolhido e leitura direta da margem e do status de faturamento"],
    ["La page trajets devient le centre de detail de chaque mission: depart, destination, passagers, bagages, affectation, estimation carburant selon le vehicule choisi, puis lecture directe de la marge et de l'etat de facturation", "A página de trajetos vira o centro de detalhe de cada missão: saída, destino, passageiros, bagagens, atribuição, estimativa de combustível conforme o veículo escolhido e leitura direta da margem e do status de faturamento"],
    ["Trajets, couts et facturation", "Trajetos, custos e faturamento"],
    ["Trajets, coûts et facturation", "Trajetos, custos e faturamento"],
    ["Le détail d'exploitation mission par mission", "O detalhe operacional missão por missão"],
    ["Le detail d'exploitation mission par mission", "O detalhe operacional missão por missão"],
    ["Choisir un trajet", "Escolher um trajeto"],
    ["Sélectionnez une mission pour retrouver son parcours, ses ressources, son estimation carburant et son statut de facturation", "Selecione uma missão para encontrar o percurso, os recursos, a estimativa de combustível e o status de faturamento"],
    ["Selectionnez une mission pour retrouver son parcours, ses ressources, son estimation carburant et son statut de facturation", "Selecione uma missão para encontrar o percurso, os recursos, a estimativa de combustível e o status de faturamento"],
    ["Itineraire routier calcule sur le parcours complet de la mission", "Itinerário rodoviário calculado sobre todo o percurso da missão"],
    ["Itinéraire routier calculé sur le parcours complet de la mission", "Itinerário rodoviário calculado sobre todo o percurso da missão"],
    ["Recuperation, activites et destination", "Retirada, atividades e destino"],
    ["Récupération, activités et destination", "Retirada, atividades e destino"],
    ["Recuperation", "Retirada"],
    ["Récupération", "Retirada"],
    ["Rendez-vous", "Ponto de encontro"],
    ["Carburant, equipe, activites et frais annexes", "Combustível, equipe, atividades e custos adicionais"],
    ["Carburant, équipe, activités et frais annexes", "Combustível, equipe, atividades e custos adicionais"],
    ["Simulation sur le vehicule affecte", "Simulação no veículo atribuído"],
    ["Simulation sur le véhicule affecté", "Simulação no veículo atribuído"],
    ["Simulation sur le vehicule recommande", "Simulação no veículo recomendado"],
    ["Simulation sur le véhicule recommandé", "Simulação no veículo recomendado"],
    ["Prise en charge", "Embarque"],
    ["sur le vehicule affecte", "no veículo atribuído"],
    ["sur le véhicule affecté", "no veículo atribuído"],
    ["sur le vehicule recommande", "no veículo recomendado"],
    ["sur le véhicule recommandé", "no veículo recomendado"],
    ["vehicule moyen", "veículo médio"],
    ["véhicule moyen", "veículo médio"],
    ["charge estimee", "carga estimada"],
    ["charge estimée", "carga estimada"],
    ["conduite", "condução"],
    ["Capacite insuffisante", "Capacidade insuficiente"],
    ["Capacité insuffisante", "Capacidade insuficiente"],
    ["places pour", "lugares para"],
    ["passageiros et", "passageiros e"],
    ["bagagens para", "bagagens para"],
    ["Location", "Aluguel"],
    ["Prix saisi, prix conseille et marge estimee", "Preço inserido, preço recomendado e margem estimada"],
    ["Prix saisi, prix conseillé et marge estimée", "Preço inserido, preço recomendado e margem estimada"],
    ["Prix vendu", "Preço vendido"],
    ["Prix conseille", "Preço recomendado"],
    ["Prix conseillé", "Preço recomendado"],
    ["Marge cible", "Margem alvo"],
    ["Passagers, bagages et notes", "Passageiros, bagagens e notas"],
    ["Cette première version reprend la structure d'une vraie facture PDF pour poser une base propre: émetteur, client, détail de course, mode de paiement, totaux et mentions", "Esta primeira versão retoma a estrutura de uma fatura PDF real para criar uma base limpa: emissor, cliente, detalhe da corrida, forma de pagamento, totais e observações"],
    ["Cette premiere version reprend la structure d'une vraie facture PDF pour poser une base propre: emetteur, client, detail de course, mode de paiement, totaux et mentions", "Esta primeira versão retoma a estrutura de uma fatura PDF real para criar uma base limpa: emissor, cliente, detalhe da corrida, forma de pagamento, totais e observações"],
    ["Ajoutez ici vos factures clients et vos factures externes. Chaque document restera visible dans la grille avec son détail complet si vous l'ouvrez", "Adicione aqui suas faturas de clientes e suas faturas externas. Cada documento ficará visível na grade com o detalhe completo quando você abrir"],
    ["Ajoutez ici vos factures clients et vos factures externes. Chaque document restera visible dans la grille avec son detail complet si vous l'ouvrez", "Adicione aqui suas faturas de clientes e suas faturas externas. Cada documento ficará visível na grade com o detalhe completo quando você abrir"],
    ["Toutes les factures apparaissent ici sous forme de grille. Vous pouvez y ranger vos factures clients et vos factures externes, puis ouvrir le document complet au clic", "Todas as faturas aparecem aqui em formato de grade. Você pode guardar faturas de clientes e faturas externas, depois abrir o documento completo com um clique"],
    ["Ajoutez un véhicule pour retrouver rapidement sa marque, son modèle, sa couleur, sa plaque, sa consommation, son type et son état", "Adicione um veículo para encontrar rapidamente marca, modelo, cor, placa, consumo, tipo e estado"],
    ["Ajoutez un vehicule pour retrouver rapidement sa marque, son modele, sa couleur, sa plaque, sa consommation, son type et son etat", "Adicione um veículo para encontrar rapidamente marca, modelo, cor, placa, consumo, tipo e estado"],
    ["Tous les vehicules affiches", "Todos os veículos exibidos"],
    ["Tous les véhicules affichés", "Todos os veículos exibidos"],
    ["Pret pour le suivi", "Pronto para acompanhamento"],
    ["Prêt pour le suivi", "Pronto para acompanhamento"],
    ["Revenir au calendrier", "Voltar ao calendário"],
    ["Modifier la facture", "Editar a fatura"],
    ["Modifier ce vehicule", "Editar este veículo"],
    ["Modifier ce véhicule", "Editar este veículo"],
    ["Modifier ce collaborateur", "Editar este colaborador"],
    ["Modifier", "Editar"],
    ["Non reglee", "Não paga"],
    ["Non réglée", "Não paga"],
    ["Reglee", "Paga"],
    ["Réglée", "Paga"],
    ["Aucun renfort", "Nenhum reforço"],
    ["Choisir un vehicule", "Escolher um veículo"],
    ["Choisir un véhicule", "Escolher um veículo"],
    ["Vehicule a fournir", "Veículo a definir"],
    ["Véhicule à fournir", "Veículo a definir"],
    ["Vehicule collaborateur", "Veículo de colaborador"],
    ["Véhicule collaborateur", "Veículo de colaborador"],
    ["Vehicule recommande", "Veículo recomendado"],
    ["Véhicule recommandé", "Veículo recomendado"],
    ["pour l'accueil et la logistique", "para recepção e logística"],
    ["Renfort recommande", "Reforço recomendado"],
    ["Renfort recommandé", "Reforço recomendado"],
    ["Disponibilite limitee", "Disponibilidade limitada"],
    ["Disponibilité limitée", "Disponibilidade limitada"],
    ["a une disponibilite limitee", "tem disponibilidade limitada"],
    ["a une disponibilité limitée", "tem disponibilidade limitada"],
    ["Francais", "Francês"],
    ["Français", "Francês"],
    ["Anglais", "Inglês"],
    ["Italien", "Italiano"],
    ["Espagnol", "Espanhol"],
    ["Portugais", "Português"],
    ["Chauffeur mission", "Motorista da missão"],
    ["Motorista mission", "Motorista da missão"],
    ["Chauffeur", "Motorista"],
    ["prefere, retour apres spectacle", "preferido, retorno após o espetáculo"],
    ["préféré, retour après spectacle", "preferido, retorno após o espetáculo"],
    ["clients", "clientes"],
    ["langues", "idiomas"],
    ["Retour groupe apres visite", "Retorno do grupo após a visita"],
    ["Retour fin de degustation", "Retorno no fim da degustação"],
    ["Retour en soiree", "Retorno à noite"],
    ["Retour apres diner", "Retorno após o jantar"],
    ["Retour port et hotels", "Retorno ao porto e hotéis"],
    ["Portugais BR prefere, retour apres spectacle", "Português BR preferido, retorno após o espetáculo"],
    ["Eau et accueil groupe Normandie", "Água e recepção grupo Normandia"],
    ["Ajustement caisse especes", "Ajuste caixa dinheiro"],
    ["Ajustement caisse espèces", "Ajuste caixa dinheiro"],
    ["Hotels rive droite", "Hotéis margem direita"],
    ["Hôtels rive droite", "Hotéis margem direita"],
    ["Famille Oliveira", "Família Oliveira"],
    ["Transfert prive Disneyland", "Traslado privado Disneyland"],
    ["Transfert privé Disneyland", "Traslado privado Disneyland"],
    ["Transfert prive", "Traslado privado"],
    ["Transfert privé", "Traslado privado"],
    ["Transfert vignoble", "Traslado vinícola"],
    ["Transfert evenement", "Traslado evento"],
    ["Transfert événement", "Traslado evento"],
    ["Maison Azur Travel", "Casa Azur Travel"],
    ["Ateliers Seine Voyages", "Ateliês Seine Voyages"],
    ["Simbora Paris Tourisme", "Simbora Paris Tourisme"],
    ["Paris centre", "Paris centro"],
    ["Circuit demi-journee", "Circuito de meio dia"],
    ["Circuit demi-journée", "Circuito de meio dia"],
    ["Transfert aeroport", "Traslado aeroporto"],
    ["Transfert aéroport", "Traslado aeroporto"],
    ["Statut facturation", "Status de faturamento"],
    ["Statut de faturamento", "Status de faturamento"],
    ["Status facturation", "Status de faturamento"],
    ["A facturer", "A faturar"],
    ["À facturer", "A faturar"],
    ["Facture envoyee", "Fatura enviada"],
    ["Facture envoyée", "Fatura enviada"],
    ["Devis valide", "Orçamento validado"],
    ["Devis validé", "Orçamento validado"],
    ["etape(s) activite", "etapa(s) de atividade"],
    ["étape(s) activité", "etapa(s) de atividade"],
    ["budget alloue", "orçamento alocado"],
    ["budget alloué", "orçamento alocado"],
    ["passagers", "passageiros"],
    ["passagers et", "passageiros e"],
    ["passageiros et", "passageiros e"],
    ["bagages a gerer", "bagagens para gerenciar"],
    ["bagages à gérer", "bagagens para gerenciar"],
    ["bagages", "bagagens"],
    ["de route pour", "de percurso por"],
    ["de mission totale", "de missão total"],
    ["Clique pour piloter la mission", "Clique para gerenciar a missão"],
    ["Couple americain et deux enfants, siege rehausseur a prevoir", "Casal americano e duas crianças, assento de elevação a prever"],
    ["Couple américain et deux enfants, siège rehausseur à prévoir", "Casal americano e duas crianças, assento de elevação a prever"],
    ["Les factures sont reprises automatiquement", "As faturas são retomadas automaticamente"],
    ["les routes restent séparées par mission", "as rotas ficam separadas por missão"],
    ["les routes restent separees par mission", "as rotas ficam separadas por missão"],
    ["vous pouvez ajouter des lignes manuelles pour compléter votre suivi", "você pode adicionar linhas manuais para completar o acompanhamento"],
    ["vous pouvez ajouter des lignes manuelles pour completer votre suivi", "você pode adicionar linhas manuais para completar o acompanhamento"],
    ["Vue consolidee des factures, missions et lignes ajoutees", "Visão consolidada das faturas, missões e linhas adicionadas"],
    ["Vue consolidée des factures, missions et lignes ajoutées", "Visão consolidada das faturas, missões e linhas adicionadas"],
    ["Les montants en attente restent visibles sans etre caches dans les totaux", "Os valores pendentes continuam visíveis sem serem escondidos dos totais"],
    ["Les montants en attente restent visibles sans être cachés dans les totaux", "Os valores pendentes continuam visíveis sem serem escondidos dos totais"],
    ["Benefice ou perte, consolide par periode", "Lucro ou perda, consolidado por período"],
    ["Bénéfice ou perte, consolidé par période", "Lucro ou perda, consolidado por período"],
    ["Barres par categorie", "Barras por categoria"],
    ["Barres par catégorie", "Barras por categoria"],
    ["Courbe mensuelle", "Curva mensal"],
    ["Barres mensuelles", "Barras mensais"],
    ["Impact net par categorie", "Impacto líquido por categoria"],
    ["Impact net par catégorie", "Impacto líquido por categoria"],
    ["Rentabilite par mission", "Rentabilidade por missão"],
    ["Rentabilité par mission", "Rentabilidade por missão"],
    ["Categories", "Categorias"],
    ["Catégories", "Categorias"],
    ["Aucune categorie", "Nenhuma categoria"],
    ["Aucune catégorie", "Nenhuma categoria"],
    ["Aucune mission", "Nenhuma missão"],
    ["Aucune ligne financiere pour le moment", "Nenhuma linha financeira por enquanto"],
    ["Aucune ligne financière pour le moment", "Nenhuma linha financeira por enquanto"],
    ["Aucune valeur trouvee", "Nenhum valor encontrado"],
    ["Aucune valeur trouvée", "Nenhum valor encontrado"],
    ["Ajoutez des valeurs pour afficher ce graphique", "Adicione valores para exibir este gráfico"],
    ["Modifiez les filtres ou ajoutez une ligne", "Altere os filtros ou adicione uma linha"],
    ["Les categories apparaissent avec les premieres valeurs", "As categorias aparecem com os primeiros valores"],
    ["Les catégories apparaissent avec les premières valeurs", "As categorias aparecem com os primeiros valores"],
    ["Les missions de la page trajets seront reprises ici", "As missões da página de trajetos serão retomadas aqui"],
    ["Toutes les lignes financieres affichees", "Todas as linhas financeiras exibidas"],
    ["Toutes les lignes financières affichées", "Todas as linhas financeiras exibidas"],
    ["ligne(s) affichee(s) sur", "linha(s) exibida(s) de"],
    ["ligne(s) affichée(s) sur", "linha(s) exibida(s) de"],
    ["valeur(s) detaillee(s)", "valor(es) detalhado(s)"],
    ["valeur(s) détaillée(s)", "valor(es) detalhado(s)"],
    ["valeur(s)", "valor(es)"],
    ["Recettes", "Receitas"],
    ["recettes", "receitas"],
    ["Depenses", "Despesas"],
    ["Dépenses", "Despesas"],
    ["depenses", "despesas"],
    ["dépenses", "despesas"],
    ["Resultat net", "Resultado líquido"],
    ["Résultat net", "Resultado líquido"],
    ["Total net", "Total líquido"],
    ["Date non renseignee", "Data não informada"],
    ["Date non renseignée", "Data não informada"],
    ["Facture client", "Fatura de cliente"],
    ["Facture externe", "Fatura externa"],
    ["Facture externe a payer", "Fatura externa a pagar"],
    ["Facture externe à payer", "Fatura externa a pagar"],
    ["Facture externe a recevoir", "Fatura externa a receber"],
    ["Facture externe à recevoir", "Fatura externa a receber"],
    ["Ligne libre", "Linha livre"],
    ["Sans libelle", "Sem rótulo"],
    ["Sans libellé", "Sem rótulo"],
    ["Details de mission", "Detalhes da missão"],
    ["Détails de mission", "Detalhes da missão"],
    ["Aucun detail", "Nenhum detalhe"],
    ["Aucun détail", "Nenhum detalhe"],
    ["Ajout manuel", "Adição manual"],
    ["Emetteur externe", "Emissor externo"],
    ["Émetteur externe", "Emissor externo"],
    ["Client non renseigne", "Cliente não informado"],
    ["Client non renseigné", "Cliente não informado"],
    ["net", "líquido"],
    [" net", " líquido"],
    ["benefice", "lucro"],
    ["bénéfice", "lucro"],
    ["perte", "perda"],
    ["consolide", "consolidado"],
    ["consolidé", "consolidado"],
    ["periode", "período"],
    ["période", "período"],
  ],
};
const translatedTextNodeSources = new WeakMap();
const translatedAttributeSources = new WeakMap();
let currentAppLanguage = getStoredAppLanguage();
let appLanguageObserver = null;
let isApplyingAppLanguage = false;

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
  missionId: "",
  missionCode: "",
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

const defaultCollaboratorRecords = [
  {
    id: "collab-jade",
    firstName: "Jade",
    lastName: "Bouvier",
    role: "driver",
    availabilityStatus: "available",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "conversational" },
    ],
  },
  {
    id: "collab-noa",
    firstName: "Noa",
    lastName: "Marchand",
    role: "driver",
    availabilityStatus: "available",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "fluent" },
      { language: "Italien", level: "intermediate" },
    ],
  },
  {
    id: "collab-lucas",
    firstName: "Lucas",
    lastName: "Perrin",
    role: "driver",
    availabilityStatus: "on_mission",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "intermediate" },
    ],
  },
  {
    id: "collab-salma",
    firstName: "Salma",
    lastName: "Riviere",
    role: "guide",
    availabilityStatus: "available",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "conversational" },
      { language: "Arabe", level: "fluent" },
    ],
  },
  {
    id: "collab-ines",
    firstName: "Ines",
    lastName: "Carrel",
    role: "guide",
    availabilityStatus: "available",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "conversational" },
      { language: "Espagnol", level: "intermediate" },
    ],
  },
  {
    id: "collab-hugo",
    firstName: "Hugo",
    lastName: "Bernard",
    role: "driver",
    availabilityStatus: "unavailable",
    languages: [
      { language: "Francais", level: "fluent" },
      { language: "Anglais", level: "intermediate" },
    ],
  },
];

const defaultVehicleRecords = [
  {
    id: "veh-mercedes-v",
    brand: "Mercedes",
    model: "Classe V",
    color: "Noir obsidienne",
    plate: "GA-402-LT",
    vehicleType: "owner",
    vehicleStatus: "available",
    rentalEndDate: "",
    consumption: "8.6",
    consumptionUnit: "L/100 km",
    linkedCollaboratorId: "",
    linkedCollaboratorName: "",
  },
  {
    id: "veh-vito-tourer",
    brand: "Mercedes",
    model: "Vito Tourer",
    color: "Gris graphite",
    plate: "FT-118-MR",
    vehicleType: "owner",
    vehicleStatus: "available",
    rentalEndDate: "",
    consumption: "8.9",
    consumptionUnit: "L/100 km",
    linkedCollaboratorId: "",
    linkedCollaboratorName: "",
  },
  {
    id: "veh-peugeot-508",
    brand: "Peugeot",
    model: "508 SW",
    color: "Bleu nuit",
    plate: "CG-771-NE",
    vehicleType: "collaborator",
    vehicleStatus: "available",
    rentalEndDate: "",
    consumption: "6.1",
    consumptionUnit: "L/100 km",
    linkedCollaboratorId: "collab-jade",
    linkedCollaboratorName: "Jade Bouvier",
  },
  {
    id: "veh-tesla-y",
    brand: "Tesla",
    model: "Model Y",
    color: "Blanc nacre",
    plate: "ET-604-HL",
    vehicleType: "collaborator",
    vehicleStatus: "available",
    rentalEndDate: "",
    consumption: "18.4",
    consumptionUnit: "kWh/100 km",
    linkedCollaboratorId: "collab-lucas",
    linkedCollaboratorName: "Lucas Perrin",
  },
  {
    id: "veh-kodiaq",
    brand: "Skoda",
    model: "Kodiaq",
    color: "Argent",
    plate: "GM-235-AV",
    vehicleType: "rental",
    vehicleStatus: "in_use",
    rentalEndDate: "",
    consumption: "7.4",
    consumptionUnit: "L/100 km",
    linkedCollaboratorId: "",
    linkedCollaboratorName: "",
  },
];

const invoiceMissionSeeds = [
  {
    id: "mission-cdg-paris",
    code: "RP-301",
    dayOffset: 0,
    serviceType: "Transfert aeroport",
    routeLabel: "CDG Terminal 2 -> Hotels rive droite",
    departureTime: "08:10",
    arrivalTime: "09:05",
    distanceKm: 32,
    durationMinutes: 55,
    passengers: 4,
    luggage: 6,
    quotedPrice: 210,
    recommendedPrice: 210,
    clientName: "Maison Azur Travel",
    pickupAddress: "Aeroport Charles-de-Gaulle, Terminal 2E, Roissy",
    destinationAddress: "Hotels rive droite, Paris 1er et 8e",
    meetingPoint: "Sortie porte 16 avec panneau nominatif",
    notes: "Couple americain et deux enfants, siege rehausseur a prevoir.",
    billingStatus: "to_invoice",
    priority: "high",
    stops: [],
  },
  {
    id: "mission-giverny",
    code: "RP-302",
    dayOffset: 0,
    serviceType: "Circuit demi-journee",
    routeLabel: "Paris centre -> Giverny",
    departureTime: "14:20",
    arrivalTime: "15:55",
    distanceKm: 82,
    durationMinutes: 95,
    passengers: 6,
    luggage: 4,
    quotedPrice: 420,
    recommendedPrice: 420,
    clientName: "Ateliers Seine Voyages",
    pickupAddress: "Hotel Regina Louvre, Paris",
    destinationAddress: "Fondation Claude Monet, Giverny",
    meetingPoint: "Lobby principal, cote concierge",
    notes: "Groupe japonais, accueil bilingue recommande.",
    billingStatus: "quote_signed",
    priority: "standard",
    stops: [],
  },
  {
    id: "mission-reims",
    code: "RP-303",
    dayOffset: 1,
    serviceType: "Transfert vignoble",
    routeLabel: "Paris -> Reims",
    departureTime: "07:45",
    arrivalTime: "09:35",
    distanceKm: 147,
    durationMinutes: 110,
    passengers: 3,
    luggage: 3,
    quotedPrice: 390,
    recommendedPrice: 390,
    clientName: "Signature Cellars",
    pickupAddress: "Gare de l'Est, Paris",
    destinationAddress: "Domaine partner, Reims",
    meetingPoint: "Sortie voie 17, parvis central",
    notes: "Transport degustation premium, bouteilles a charger au retour.",
    billingStatus: "invoice_sent",
    priority: "vip",
    stops: [],
  },
  {
    id: "mission-monaco",
    code: "RP-304",
    dayOffset: 2,
    serviceType: "Transfert evenement",
    routeLabel: "Nice -> Monaco",
    departureTime: "09:45",
    arrivalTime: "10:25",
    distanceKm: 25,
    durationMinutes: 40,
    passengers: 4,
    luggage: 2,
    quotedPrice: 310,
    recommendedPrice: 310,
    clientName: "Riviera Event Desk",
    pickupAddress: "Promenade des Anglais, Nice",
    destinationAddress: "Hotel de Paris, Monaco",
    meetingPoint: "Devant l'entree principale, voie bus",
    notes: "Timing serre avant conference, chauffeur en tenue sombre.",
    billingStatus: "quote_signed",
    priority: "high",
    stops: [],
  },
  {
    id: "mission-annecy",
    code: "RP-305",
    dayOffset: 3,
    serviceType: "Seminaire entreprise",
    routeLabel: "Lyon -> Annecy",
    departureTime: "08:30",
    arrivalTime: "10:35",
    distanceKm: 144,
    durationMinutes: 125,
    passengers: 7,
    luggage: 7,
    quotedPrice: 540,
    recommendedPrice: 540,
    clientName: "Nova Executive Mobility",
    pickupAddress: "Part-Dieu, Lyon",
    destinationAddress: "Imperial Palace, Annecy",
    meetingPoint: "Hall affaires, sortie Villette",
    notes: "Groupe corporate avec bagages cabine, besoin d'un vehicule 7+ places.",
    billingStatus: "to_invoice",
    priority: "high",
    stops: [],
  },
  {
    id: "mission-cassis",
    code: "RP-306",
    dayOffset: 4,
    serviceType: "Circuit mer",
    routeLabel: "Marseille -> Cassis",
    departureTime: "11:00",
    arrivalTime: "11:48",
    distanceKm: 30,
    durationMinutes: 48,
    passengers: 6,
    luggage: 5,
    quotedPrice: 460,
    recommendedPrice: 460,
    clientName: "Calanques Leisure",
    pickupAddress: "Vieux-Port, Marseille",
    destinationAddress: "Port de Cassis",
    meetingPoint: "Face au ponton tourisme",
    notes: "Famille nombreuse, poussette pliable et glaciere souple.",
    billingStatus: "paid",
    priority: "standard",
    stops: [],
  },
  {
    id: "mission-saint-emilion",
    code: "RP-307",
    dayOffset: 5,
    serviceType: "Circuit journee",
    routeLabel: "Bordeaux -> Saint-Emilion",
    departureTime: "06:50",
    arrivalTime: "07:48",
    distanceKm: 46,
    durationMinutes: 58,
    passengers: 8,
    luggage: 8,
    quotedPrice: 490,
    recommendedPrice: 490,
    clientName: "Bordeaux Heritage Tours",
    pickupAddress: "Hotel Intercontinental, Bordeaux",
    destinationAddress: "Chateau partenaire, Saint-Emilion",
    meetingPoint: "Porte cocheres, allee laterale",
    notes: "Circuit vignobles, renfort utile pour la logistique bagages.",
    billingStatus: "quote_signed",
    priority: "vip",
    stops: [],
  },
];

const defaultMissionAssignments = {
  "mission-cdg-paris": { leadCollaboratorId: "collab-noa", supportCollaboratorId: "", vehicleId: "veh-mercedes-v" },
  "mission-giverny": { leadCollaboratorId: "collab-jade", supportCollaboratorId: "collab-salma", vehicleId: "veh-vito-tourer" },
  "mission-reims": { leadCollaboratorId: "collab-jade", supportCollaboratorId: "", vehicleId: "veh-peugeot-508" },
  "mission-monaco": { leadCollaboratorId: "collab-lucas", supportCollaboratorId: "", vehicleId: "veh-tesla-y" },
  "mission-annecy": { leadCollaboratorId: "collab-noa", supportCollaboratorId: "", vehicleId: "" },
  "mission-cassis": { leadCollaboratorId: "", supportCollaboratorId: "collab-salma", vehicleId: "veh-mercedes-v" },
  "mission-saint-emilion": {
    leadCollaboratorId: "collab-noa",
    supportCollaboratorId: "collab-ines",
    vehicleId: "veh-vito-tourer",
  },
};

function hasPersistenceManagedView() {
  return Boolean(vehicleForm || collaboratorForm || invoiceForm || financeWorkspace || operationsWorkspace);
}

function createEntityId(prefix = "item") {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function apiRequest(url, options = {}) {
  const response = await window.fetch(url, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  let payload = {};

  try {
    payload = await response.json();
  } catch (error) {
    payload = {};
  }

  if (!response.ok || payload?.ok === false) {
    throw new Error(payload?.error || "Impossible de joindre l'API PostgreSQL.");
  }

  return payload;
}

function hasObjectEntries(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0);
}

function snapshotHasField(snapshot, fieldName) {
  return Object.prototype.hasOwnProperty.call(snapshot || {}, fieldName);
}

function getSnapshotArray(snapshot, fieldName) {
  return Array.isArray(snapshot?.[fieldName]) ? snapshot[fieldName] : [];
}

function getSnapshotObject(snapshot, fieldName) {
  const value = snapshot?.[fieldName];
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function writeSnapshotArray(snapshot, fieldName, storageKey) {
  if (!snapshotHasField(snapshot, fieldName)) {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify(getSnapshotArray(snapshot, fieldName)));
}

function writeSnapshotObject(snapshot, fieldName, storageKey) {
  if (!snapshotHasField(snapshot, fieldName)) {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify(getSnapshotObject(snapshot, fieldName)));
}

// Les pages statiques continuent de lire localStorage, donc le snapshot serveur
// devient la source commune et chaque page recupere uniquement ses donnees utiles.
function hasMeaningfulRemoteData(snapshot) {
  return Boolean(
    getSnapshotArray(snapshot, "collaborators").length > 0 ||
    getSnapshotArray(snapshot, "vehicles").length > 0 ||
    getSnapshotArray(snapshot, "invoices").length > 0 ||
    getSnapshotArray(snapshot, "financeEntries").length > 0 ||
    getSnapshotArray(snapshot, "customMissions").length > 0 ||
    hasObjectEntries(snapshot?.missionOverrides) ||
    hasObjectEntries(snapshot?.missionAssignments)
  );
}

function hasRichAppData(snapshot) {
  return Boolean(
    getSnapshotArray(snapshot, "invoices").length > 1 ||
    getSnapshotArray(snapshot, "financeEntries").length > 0 ||
    getSnapshotArray(snapshot, "customMissions").length > 0
  );
}

function hasMeaningfulLocalData() {
  return (
    readStoredArray(collaboratorsStorageKey).length > 0 ||
    readStoredArray(vehiclesStorageKey).length > 0 ||
    readStoredArray(invoicesStorageKey).length > 0 ||
    readStoredArray(financeEntriesStorageKey).length > 0 ||
    readStoredArray(customMissionsStorageKey).length > 0 ||
    hasObjectEntries(readStoredObject(missionOverridesStorageKey)) ||
    hasObjectEntries(readStoredObject(missionAssignmentsStorageKey))
  );
}

function applyRemoteAppData(snapshot) {
  if (!snapshot || typeof snapshot !== "object") {
    return;
  }

  writeSnapshotArray(snapshot, "collaborators", collaboratorsStorageKey);
  writeSnapshotArray(snapshot, "vehicles", vehiclesStorageKey);
  writeSnapshotArray(snapshot, "invoices", invoicesStorageKey);
  writeSnapshotArray(snapshot, "financeEntries", financeEntriesStorageKey);
  writeSnapshotArray(snapshot, "customMissions", customMissionsStorageKey);
  writeSnapshotObject(snapshot, "missionOverrides", missionOverridesStorageKey);
  writeSnapshotObject(snapshot, "missionAssignments", missionAssignmentsStorageKey);

  if (snapshotHasField(snapshot, "selectedTripId")) {
    window.localStorage.setItem(selectedTripStorageKey, cleanInputValue(snapshot.selectedTripId));
  }
}

// Snapshot complet envoye au serveur : il rassemble les collections classiques
// et les donnees partagees entre calendrier, trajets, factures et finances.
function getLocalAppSnapshot() {
  return {
    collaborators: readStoredArray(collaboratorsStorageKey).map((storedCollaborator) =>
      normalizeCollaborator(storedCollaborator)
    ),
    vehicles: readStoredArray(vehiclesStorageKey).map((storedVehicle) =>
      normalizeVehicle(storedVehicle)
    ),
    invoices: readStoredArray(invoicesStorageKey).map((storedInvoice) => {
      const normalizedInvoice = normalizeInvoice(storedInvoice);

      if (storedInvoice?.attachment?.payloadBase64 && normalizedInvoice.attachment) {
        normalizedInvoice.attachment = {
          ...normalizedInvoice.attachment,
          payloadBase64: storedInvoice.attachment.payloadBase64,
        };
      }

      return normalizedInvoice;
    }),
    financeEntries: readStoredArray(financeEntriesStorageKey),
    customMissions: readStoredArray(customMissionsStorageKey),
    missionOverrides: readStoredObject(missionOverridesStorageKey),
    missionAssignments: readStoredObject(missionAssignmentsStorageKey),
    selectedTripId: cleanInputValue(window.localStorage.getItem(selectedTripStorageKey)),
  };
}

async function fetchBundledAppSnapshot() {
  try {
    const response = await window.fetch(bundledAppSnapshotPath, { cache: "no-store" });
    if (!response.ok) {
      return null;
    }

    const snapshot = await response.json();
    return snapshot && typeof snapshot === "object" ? snapshot : null;
  } catch (error) {
    return null;
  }
}

async function bootstrapBundledAppSnapshot() {
  if (hasMeaningfulLocalData()) {
    return false;
  }

  const bundledSnapshot = await fetchBundledAppSnapshot();
  if (!hasMeaningfulRemoteData(bundledSnapshot)) {
    return false;
  }

  applyRemoteAppData(bundledSnapshot);
  return true;
}

function mergeLocalOnlySharedData(remoteSnapshot) {
  const nextSnapshot = { ...(remoteSnapshot || {}) };
  let didMerge = false;
  const localArrayFallbacks = [
    { fieldName: "financeEntries", value: readStoredArray(financeEntriesStorageKey) },
    { fieldName: "customMissions", value: readStoredArray(customMissionsStorageKey) },
  ];
  const localObjectFallbacks = [
    { fieldName: "missionOverrides", value: readStoredObject(missionOverridesStorageKey) },
    { fieldName: "missionAssignments", value: readStoredObject(missionAssignmentsStorageKey) },
  ];

  // Si le serveur n'a pas encore une collection recente, on garde le travail local.
  localArrayFallbacks.forEach(({ fieldName, value }) => {
    if (value.length > 0 && getSnapshotArray(nextSnapshot, fieldName).length === 0) {
      nextSnapshot[fieldName] = value;
      didMerge = true;
    }
  });

  localObjectFallbacks.forEach(({ fieldName, value }) => {
    if (hasObjectEntries(value) && !hasObjectEntries(getSnapshotObject(nextSnapshot, fieldName))) {
      nextSnapshot[fieldName] = value;
      didMerge = true;
    }
  });

  return { didMerge, snapshot: nextSnapshot };
}

async function ensureRemotePersistenceReady() {
  if (remotePersistenceEnabled) {
    return true;
  }

  if (!hasPersistenceManagedView()) {
    return false;
  }

  try {
    await apiRequest("/api/health", { method: "GET" });
    remotePersistenceEnabled = true;
    return true;
  } catch (error) {
    remotePersistenceEnabled = false;
    return false;
  }
}

async function syncAppDataToServer() {
  const canSync = await ensureRemotePersistenceReady();
  if (!canSync) {
    return null;
  }

  const result = await apiRequest(appDataApiEndpoint, {
    method: "PUT",
    body: JSON.stringify(getLocalAppSnapshot()),
  });

  applyRemoteAppData(result.data);
  return result.data;
}

// Au demarrage, on evite d'ecraser un navigateur deja rempli par une base vide.
async function bootstrapAppPersistence() {
  if (!hasPersistenceManagedView()) {
    return;
  }

  const canSync = await ensureRemotePersistenceReady();
  if (!canSync) {
    return;
  }

  try {
    const result = await apiRequest(appDataApiEndpoint, { method: "GET" });
    const remoteSnapshot = result.data || {};
    const localSnapshot = getLocalAppSnapshot();

    if (!hasRichAppData(remoteSnapshot) && hasRichAppData(localSnapshot)) {
      await syncAppDataToServer();
      return;
    }

    if (!hasMeaningfulRemoteData(remoteSnapshot) && hasMeaningfulLocalData()) {
      await syncAppDataToServer();
      return;
    }

    const { didMerge, snapshot: mergedSnapshot } = mergeLocalOnlySharedData(remoteSnapshot);
    applyRemoteAppData(mergedSnapshot);

    if (didMerge) {
      await syncAppDataToServer();
      return;
    }
  } catch (error) {
    remotePersistenceEnabled = false;
  }
}

function arrayBufferToBase64(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const chunkSize = 0x8000;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return window.btoa(binary);
}

async function buildInvoiceAttachmentPayload(file, existingAttachmentId = "") {
  if (!(file instanceof File)) {
    return null;
  }

  const payloadBase64 = arrayBufferToBase64(await file.arrayBuffer());

  return {
    id: existingAttachmentId || createEntityId("invoice-attachment"),
    name: file.name,
    payloadBase64,
    size: file.size,
    type: file.type || "application/octet-stream",
    updatedAt: new Date().toISOString(),
  };
}

async function fetchRemoteInvoiceAttachment(invoiceId) {
  const response = await window.fetch(
    `/api/invoices/${encodeURIComponent(invoiceId)}/attachment`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Impossible de recuperer la piece jointe.");
  }

  return response.blob();
}

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

function getInvoiceMissionWeekStart(date = new Date()) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  const day = value.getDay();
  value.setDate(value.getDate() + (day === 0 ? -6 : 1 - day));
  return value;
}

function buildInvoiceMissionRouteLabel(stops) {
  if (!Array.isArray(stops) || stops.length === 0) {
    return "";
  }

  return stops
    .map((stop) => cleanInputValue(stop?.label) || cleanInputValue(stop?.address) || "Etape")
    .join(" -> ");
}

function buildInvoiceMissionStops({
  pickupAddress = "",
  meetingPoint = "",
  destinationAddress = "",
  activityStops = [],
}) {
  return [
    {
      kind: "pickup",
      label: "Recuperation",
      address: pickupAddress,
      meetingPoint,
      activityBudget: 0,
      placeId: "",
      coords: null,
    },
    ...activityStops.map((stop, index) => ({
      kind: "activity",
      label: cleanInputValue(stop?.label) || `Etape ${index + 1}`,
      address: cleanInputValue(stop?.address),
      meetingPoint: "",
      activityBudget: Number(stop?.activityBudget || 0),
      placeId: cleanInputValue(stop?.placeId),
      coords: Array.isArray(stop?.coords) ? stop.coords.map(Number) : null,
    })),
    {
      kind: "dropoff",
      label: "Destination",
      address: destinationAddress,
      meetingPoint: "",
      activityBudget: 0,
      placeId: "",
      coords: null,
    },
  ].filter((stop) => cleanInputValue(stop.address) || cleanInputValue(stop.label));
}

function hydrateInvoiceMissionRecord(mission) {
  const safeMission = mission && typeof mission === "object" ? mission : {};
  const activityStops = Array.isArray(safeMission.stops)
    ? safeMission.stops.filter((stop) => stop?.kind === "activity")
    : [];
  const stops =
    Array.isArray(safeMission.stops) && safeMission.stops.length >= 2
      ? safeMission.stops.map((stop) => ({
          ...stop,
          kind: cleanInputValue(stop?.kind) || "waypoint",
          label: cleanInputValue(stop?.label),
          address: cleanInputValue(stop?.address),
          meetingPoint: cleanInputValue(stop?.meetingPoint),
          activityBudget: Number(stop?.activityBudget || 0),
          placeId: cleanInputValue(stop?.placeId),
          coords: Array.isArray(stop?.coords) ? stop.coords.map(Number) : null,
        }))
      : buildInvoiceMissionStops({
          pickupAddress: cleanInputValue(safeMission.pickupAddress),
          meetingPoint: cleanInputValue(safeMission.meetingPoint),
          destinationAddress: cleanInputValue(safeMission.destinationAddress),
          activityStops,
        });

  return {
    id: cleanInputValue(safeMission.id),
    code: cleanInputValue(safeMission.code),
    serviceType: cleanInputValue(safeMission.serviceType),
    routeLabel: cleanInputValue(safeMission.routeLabel) || buildInvoiceMissionRouteLabel(stops),
    departureTime: cleanInputValue(safeMission.departureTime),
    arrivalTime: cleanInputValue(safeMission.arrivalTime),
    serviceDate: normalizeRentalEndDate(safeMission.serviceDate),
    clientName: cleanInputValue(safeMission.clientName),
    pickupAddress: cleanInputValue(safeMission.pickupAddress) || cleanInputValue(stops[0]?.address),
    destinationAddress:
      cleanInputValue(safeMission.destinationAddress) ||
      cleanInputValue(stops[stops.length - 1]?.address),
    meetingPoint: cleanInputValue(safeMission.meetingPoint),
    notes: cleanInputValue(safeMission.notes),
    billingStatus: cleanInputValue(safeMission.billingStatus),
    priority: cleanInputValue(safeMission.priority) || "standard",
    distanceKm: Math.max(0, Number(safeMission.distanceKm) || 0),
    durationMinutes: Math.max(0, Number(safeMission.durationMinutes) || 0),
    passengers: Math.max(0, Number(safeMission.passengers) || 0),
    luggage: Math.max(0, Number(safeMission.luggage) || 0),
    quotedPrice: Math.max(0, Number(safeMission.quotedPrice) || 0),
    recommendedPrice: Math.max(
      0,
      Number(
        typeof safeMission.recommendedPrice !== "undefined"
          ? safeMission.recommendedPrice
          : safeMission.quotedPrice
      ) || 0
    ),
    targetMarginRate: Math.max(0, Number(safeMission.targetMarginRate) || 0),
    tolls: Math.max(0, Number(safeMission.tolls) || 0),
    parking: Math.max(0, Number(safeMission.parking) || 0),
    stops,
  };
}

function getSeededInvoiceMissionCatalog() {
  const weekStart = getInvoiceMissionWeekStart();

  return invoiceMissionSeeds.map((seedMission) => {
    const serviceDate = new Date(weekStart);
    serviceDate.setDate(serviceDate.getDate() + Number(seedMission.dayOffset || 0));

    return hydrateInvoiceMissionRecord({
      ...seedMission,
      serviceDate: getDateInputValue(serviceDate),
      stops: Array.isArray(seedMission.stops) ? seedMission.stops : [],
    });
  });
}

function getStoredInvoiceMissionOverrides() {
  try {
    const rawValue = window.localStorage.getItem(missionOverridesStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch (error) {
    return {};
  }
}

function getStoredInvoiceCustomMissions() {
  try {
    const rawValue = window.localStorage.getItem(customMissionsStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];
    return Array.isArray(parsedValue)
      ? parsedValue.map((mission) => hydrateInvoiceMissionRecord(mission))
      : [];
  } catch (error) {
    return [];
  }
}

function getInvoiceMissionCatalog() {
  const overrides = getStoredInvoiceMissionOverrides();
  const seededMissions = getSeededInvoiceMissionCatalog().map((mission) =>
    overrides[mission.id] ? hydrateInvoiceMissionRecord({ ...mission, ...overrides[mission.id] }) : mission
  );

  return [...seededMissions, ...getStoredInvoiceCustomMissions()].sort((leftMission, rightMission) =>
    `${leftMission.serviceDate}-${leftMission.departureTime}`.localeCompare(
      `${rightMission.serviceDate}-${rightMission.departureTime}`
    )
  );
}

function getInvoiceMissionById(missionId) {
  if (!missionId) {
    return null;
  }

  return getInvoiceMissionCatalog().find((mission) => mission.id === missionId) || null;
}

function getSelectedTripId() {
  return cleanInputValue(window.localStorage.getItem(selectedTripStorageKey));
}

function saveSelectedTripId(missionId) {
  const normalizedMissionId = cleanInputValue(missionId);
  if (!normalizedMissionId) {
    return;
  }

  window.localStorage.setItem(selectedTripStorageKey, normalizedMissionId);
}

function getMissionBillingStatusLabel(status) {
  return missionBillingStatusLabels[cleanInputValue(status)] || "A suivre";
}

function getStoredMissionAssignments() {
  let storedAssignments = {};

  try {
    const rawValue = window.localStorage.getItem(missionAssignmentsStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    storedAssignments = parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch (error) {
    storedAssignments = {};
  }

  return getInvoiceMissionCatalog().reduce((assignments, mission) => {
    const fallbackAssignment =
      defaultMissionAssignments[mission.id] || {
        leadCollaboratorId: "",
        supportCollaboratorId: "",
        vehicleId: "",
      };
    const storedAssignment =
      storedAssignments[mission.id] && typeof storedAssignments[mission.id] === "object"
        ? storedAssignments[mission.id]
        : {};

    assignments[mission.id] = {
      leadCollaboratorId:
        cleanInputValue(storedAssignment.leadCollaboratorId) ||
        cleanInputValue(fallbackAssignment.leadCollaboratorId),
      supportCollaboratorId:
        cleanInputValue(storedAssignment.supportCollaboratorId) ||
        cleanInputValue(fallbackAssignment.supportCollaboratorId),
      vehicleId:
        cleanInputValue(storedAssignment.vehicleId) ||
        cleanInputValue(fallbackAssignment.vehicleId),
    };

    return assignments;
  }, {});
}

function buildMissionRelationsSnapshot() {
  const missions = getInvoiceMissionCatalog();
  const assignments = getStoredMissionAssignments();
  const selectedTripId = getSelectedTripId();
  const collaboratorNamesById = new Map(
    getStoredCollaborators().map((storedCollaborator) => {
      const collaborator = normalizeCollaborator(storedCollaborator);
      return [collaborator.id, getCollaboratorDisplayName(collaborator)];
    })
  );
  const invoicesByMissionId = new Map();

  getStoredInvoices()
    .map((storedInvoice) => normalizeInvoice(storedInvoice))
    .filter((invoice) => normalizeInvoiceType(invoice.invoiceType) === "client")
    .forEach((invoice) => {
      if (!invoice.missionId || invoicesByMissionId.has(invoice.missionId)) {
        return;
      }

      invoicesByMissionId.set(invoice.missionId, invoice);
    });

  const collaboratorMissionMap = new Map();
  const vehicleMissionMap = new Map();

  missions.forEach((mission) => {
    const assignment = assignments[mission.id] || {
      leadCollaboratorId: "",
      supportCollaboratorId: "",
      vehicleId: "",
    };
    const linkedInvoice = invoicesByMissionId.get(mission.id) || null;
    const relation = {
      missionId: mission.id,
      missionCode: mission.code,
      routeLabel: mission.routeLabel,
      clientName: mission.clientName,
      sortKey: `${normalizeRentalEndDate(mission.serviceDate)}-${cleanInputValue(mission.departureTime) || "00:00"}`,
      serviceDateLabel: mission.serviceDate ? formatInvoiceDate(mission.serviceDate) : "Date a definir",
      departureTime: mission.departureTime || "",
      billingLabel: getMissionBillingStatusLabel(mission.billingStatus),
      invoiceId: linkedInvoice?.id || "",
      invoiceNumber: linkedInvoice?.number || "",
      invoiceStatusLabel: linkedInvoice
        ? getInvoicePaymentStatusLabel(linkedInvoice.paymentStatus)
        : getMissionBillingStatusLabel(mission.billingStatus),
      isSelected: mission.id === selectedTripId,
      leadCollaboratorId: assignment.leadCollaboratorId,
      leadCollaboratorName: collaboratorNamesById.get(assignment.leadCollaboratorId) || "Chauffeur a affecter",
    };

    if (assignment.leadCollaboratorId) {
      const currentRelations = collaboratorMissionMap.get(assignment.leadCollaboratorId) || [];
      currentRelations.push({
        ...relation,
        roleLabel: "Chauffeur principal",
      });
      collaboratorMissionMap.set(assignment.leadCollaboratorId, currentRelations);
    }

    if (assignment.supportCollaboratorId) {
      const currentRelations = collaboratorMissionMap.get(assignment.supportCollaboratorId) || [];
      currentRelations.push({
        ...relation,
        roleLabel: "Renfort mission",
      });
      collaboratorMissionMap.set(assignment.supportCollaboratorId, currentRelations);
    }

    if (assignment.vehicleId) {
      const currentRelations = vehicleMissionMap.get(assignment.vehicleId) || [];
      currentRelations.push({
        ...relation,
        roleLabel: "Vehicule affecte",
      });
      vehicleMissionMap.set(assignment.vehicleId, currentRelations);
    }
  });

  const sortRelations = (leftRelation, rightRelation) => {
    if (leftRelation.isSelected !== rightRelation.isSelected) {
      return leftRelation.isSelected ? -1 : 1;
    }

    return leftRelation.sortKey.localeCompare(rightRelation.sortKey);
  };

  collaboratorMissionMap.forEach((relations, collaboratorId) => {
    collaboratorMissionMap.set(collaboratorId, relations.sort(sortRelations));
  });
  vehicleMissionMap.forEach((relations, vehicleId) => {
    vehicleMissionMap.set(vehicleId, relations.sort(sortRelations));
  });

  return {
    collaboratorMissionMap,
    vehicleMissionMap,
  };
}

function buildMissionConnectionMarkup(relations, options = {}) {
  const safeRelations = Array.isArray(relations) ? relations : [];
  const primaryRelation = safeRelations[0] || null;
  const emptyLabel = options.emptyLabel || "Aucune mission liee pour le moment.";

  if (!primaryRelation) {
    return `
      <div class="entity-connection-card entity-connection-card-empty">
        <strong>Mission liee</strong>
        <p>${escapeHtml(emptyLabel)}</p>
      </div>
    `;
  }

  const missionCountLabel =
    safeRelations.length > 1 ? `${safeRelations.length} missions reliees` : "1 mission reliee";
  const invoiceActionLabel = primaryRelation.invoiceNumber ? "Voir la facture" : "Preparer la facture";

  return `
    <div class="entity-connection-card">
      <div class="entity-connection-head">
        <strong>${escapeHtml(primaryRelation.missionCode)} · ${escapeHtml(primaryRelation.routeLabel)}</strong>
        <span>${escapeHtml(primaryRelation.roleLabel)}</span>
      </div>
      <p class="entity-connection-copy">
        ${escapeHtml(primaryRelation.serviceDateLabel)}
        ${primaryRelation.departureTime ? ` · ${escapeHtml(primaryRelation.departureTime)}` : ""}
        · ${escapeHtml(primaryRelation.clientName || "Client non renseigne")}
      </p>
      <div class="entity-connection-meta">
        <span>${escapeHtml(missionCountLabel)}</span>
        <span>${escapeHtml(primaryRelation.billingLabel)}</span>
        <span>${
          primaryRelation.invoiceNumber
            ? escapeHtml(`Facture ${primaryRelation.invoiceNumber} · ${primaryRelation.invoiceStatusLabel}`)
            : escapeHtml(primaryRelation.invoiceStatusLabel)
        }</span>
      </div>
      <div class="entity-connection-actions">
        <a
          class="secondary-action small-action"
          href="trajets.html"
          data-open-mission-id="${escapeHtml(primaryRelation.missionId)}"
          data-open-mission-target="trajets.html"
        >
          Voir la mission
        </a>
        <a
          class="secondary-action small-action"
          href="factures.html"
          data-open-mission-id="${escapeHtml(primaryRelation.missionId)}"
          data-open-mission-target="factures.html"
        >
          ${escapeHtml(invoiceActionLabel)}
        </a>
      </div>
    </div>
  `;
}

function saveStoredInvoiceMissionOverrides(overrides) {
  window.localStorage.setItem(missionOverridesStorageKey, JSON.stringify(overrides));
}

function saveStoredInvoiceCustomMissions(missions) {
  window.localStorage.setItem(customMissionsStorageKey, JSON.stringify(missions));
}

function isSeedInvoiceMissionId(missionId) {
  return getSeededInvoiceMissionCatalog().some((mission) => mission.id === missionId);
}

function syncMissionFromInvoiceRecord(invoice) {
  const missionId = cleanInputValue(invoice?.missionId);
  if (!missionId || normalizeInvoiceType(invoice?.invoiceType) !== "client") {
    return;
  }

  const nextBillingStatus =
    normalizeInvoicePaymentStatus(invoice.paymentStatus) === "paid" ? "paid" : "invoice_sent";
  const nextQuotedPrice = normalizeInvoiceAmount(invoice?.totals?.ht);

  if (isSeedInvoiceMissionId(missionId)) {
    const overrides = getStoredInvoiceMissionOverrides();
    const currentOverride =
      overrides[missionId] && typeof overrides[missionId] === "object" ? overrides[missionId] : {};
    overrides[missionId] = {
      ...currentOverride,
      billingStatus: nextBillingStatus,
      quotedPrice: nextQuotedPrice > 0 ? nextQuotedPrice : currentOverride.quotedPrice,
    };
    saveStoredInvoiceMissionOverrides(overrides);
    return;
  }

  const customMissions = getStoredInvoiceCustomMissions();
  const nextMissions = customMissions.map((mission) =>
    mission.id === missionId
      ? {
          ...mission,
          billingStatus: nextBillingStatus,
          quotedPrice: nextQuotedPrice > 0 ? nextQuotedPrice : mission.quotedPrice,
        }
      : mission
  );
  saveStoredInvoiceCustomMissions(nextMissions);
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

function normalizeAppLanguage(language) {
  return supportedAppLanguages.has(language) ? language : "fr";
}

function getStoredAppLanguage() {
  try {
    return normalizeAppLanguage(window.localStorage.getItem(languageStorageKey) || "fr");
  } catch (error) {
    return "fr";
  }
}

function getAppLocale() {
  return currentAppLanguage === "pt" ? "pt-BR" : "fr-FR";
}

function normalizeTranslationText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function getTranslationSourceText(value) {
  const normalizedValue = normalizeTranslationText(value);
  return reverseAppTranslationTable.get(normalizedValue) || normalizedValue;
}

function getTranslatedText(sourceText, language) {
  if (language === "fr") {
    return sourceText;
  }

  const exactTranslation = appTranslationTable[language]?.[sourceText];
  if (exactTranslation) {
    return exactTranslation;
  }

  return (appPartialTranslationTable[language] || []).reduce(
    (translatedText, [sourcePart, translatedPart]) =>
      translatedText.split(sourcePart).join(translatedPart),
    sourceText
  );
}

function shouldSkipTranslationNode(node) {
  const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return Boolean(element?.closest("script, style, svg, canvas, textarea"));
}

function translateTextNode(textNode, language) {
  if (!textNode?.nodeValue || shouldSkipTranslationNode(textNode)) {
    return;
  }

  const normalizedValue = normalizeTranslationText(textNode.nodeValue);
  if (!normalizedValue) {
    return;
  }

  const sourceText =
    translatedTextNodeSources.get(textNode) || getTranslationSourceText(normalizedValue);
  translatedTextNodeSources.set(textNode, sourceText);

  const translatedText = getTranslatedText(sourceText, language);
  if (translatedText === normalizedValue) {
    return;
  }

  const leadingSpace = textNode.nodeValue.match(/^\s*/)?.[0] || "";
  const trailingSpace = textNode.nodeValue.match(/\s*$/)?.[0] || "";
  textNode.nodeValue = `${leadingSpace}${translatedText}${trailingSpace}`;
}

function translateElementAttributes(element, language) {
  if (!(element instanceof Element) || shouldSkipTranslationNode(element)) {
    return;
  }

  ["placeholder", "aria-label", "title", "alt"].forEach((attributeName) => {
    if (!element.hasAttribute(attributeName)) {
      return;
    }

    const attributeValue = element.getAttribute(attributeName) || "";
    const normalizedValue = normalizeTranslationText(attributeValue);
    if (!normalizedValue) {
      return;
    }

    const sourceMap = translatedAttributeSources.get(element) || {};
    const sourceText = sourceMap[attributeName] || getTranslationSourceText(normalizedValue);
    sourceMap[attributeName] = sourceText;
    translatedAttributeSources.set(element, sourceMap);

    const translatedValue = getTranslatedText(sourceText, language);
    if (translatedValue !== attributeValue) {
      element.setAttribute(attributeName, translatedValue);
    }
  });
}

function translateNodeTree(rootNode, language) {
  if (!rootNode || shouldSkipTranslationNode(rootNode)) {
    return;
  }

  if (rootNode.nodeType === Node.TEXT_NODE) {
    translateTextNode(rootNode, language);
    return;
  }

  if (!(rootNode instanceof Element) && rootNode !== document.body) {
    return;
  }

  if (rootNode instanceof Element) {
    translateElementAttributes(rootNode, language);
  }

  const textWalker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      shouldSkipTranslationNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
  });
  let textNode = textWalker.nextNode();
  while (textNode) {
    translateTextNode(textNode, language);
    textNode = textWalker.nextNode();
  }

  const attributeNodes =
    rootNode instanceof Element
      ? [rootNode, ...rootNode.querySelectorAll("[placeholder], [aria-label], [title], [alt]")]
      : Array.from(document.querySelectorAll("[placeholder], [aria-label], [title], [alt]"));
  attributeNodes.forEach((element) => translateElementAttributes(element, language));
}

function updateLanguageSwitcherState(language) {
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.getAttribute("data-language-option") === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyAppLanguage(language = currentAppLanguage, rootNode = document.body) {
  currentAppLanguage = normalizeAppLanguage(language);
  document.documentElement.lang = currentAppLanguage === "pt" ? "pt-BR" : "fr";
  isApplyingAppLanguage = true;

  const sourceTitle = getTranslationSourceText(document.title);
  document.title = getTranslatedText(sourceTitle, currentAppLanguage);
  translateNodeTree(rootNode, currentAppLanguage);
  updateLanguageSwitcherState(currentAppLanguage);

  isApplyingAppLanguage = false;
}

function setAppLanguage(language) {
  currentAppLanguage = normalizeAppLanguage(language);

  try {
    window.localStorage.setItem(languageStorageKey, currentAppLanguage);
  } catch (error) {
    // La langue reste appliquee meme si le navigateur bloque localStorage.
  }

  buildCurrentWeekCalendar();
  renderVehicles();
  renderCollaborators();
  renderInvoices();
  applyAppLanguage(currentAppLanguage);
  window.dispatchEvent(
    new CustomEvent("route-pilote-language-changed", {
      detail: { language: currentAppLanguage, locale: getAppLocale() },
    })
  );
}

function mountLanguageSwitcher() {
  const quickNavShell = document.querySelector(".quick-nav-shell");
  if (!quickNavShell || quickNavShell.querySelector(".language-switcher")) {
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("role", "group");
  switcher.setAttribute("aria-label", "Changer la langue");
  switcher.innerHTML = `
    <span class="language-switcher-label">Langue</span>
    <div class="language-switcher-options">
      <button class="language-switch-option" type="button" data-language-option="fr" aria-pressed="false" title="Français">FR</button>
      <button class="language-switch-option" type="button" data-language-option="pt" aria-pressed="false" title="Português BR">PT</button>
    </div>
  `;

  switcher.addEventListener("click", (event) => {
    const option = event.target instanceof Element ? event.target.closest("[data-language-option]") : null;
    if (!option) {
      return;
    }

    setAppLanguage(option.getAttribute("data-language-option"));
  });

  quickNavShell.insertBefore(switcher, quickNavShell.firstChild);
  updateLanguageSwitcherState(currentAppLanguage);
}

function startAppLanguageObserver() {
  if (appLanguageObserver || !document.body) {
    return;
  }

  appLanguageObserver = new MutationObserver((mutations) => {
    if (isApplyingAppLanguage || currentAppLanguage === "fr") {
      return;
    }

    mutations.forEach((mutation) => {
      if (mutation.type === "characterData") {
        translateTextNode(mutation.target, currentAppLanguage);
        return;
      }

      if (mutation.type === "attributes") {
        translateElementAttributes(mutation.target, currentAppLanguage);
        return;
      }

      mutation.addedNodes.forEach((node) => translateNodeTree(node, currentAppLanguage));
    });
  });
  appLanguageObserver.observe(document.body, {
    attributeFilter: ["alt", "aria-label", "placeholder", "title"],
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  });
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

      const weekday = capitalizeLabel(
        new Intl.DateTimeFormat(getAppLocale(), { weekday: "long" }).format(currentDate)
      );
      const displayDate = new Intl.DateTimeFormat(getAppLocale(), {
        day: "numeric",
        month: "long",
      }).format(currentDate);
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

function readStoredObject(storageKey) {
  try {
    const rawItems = window.localStorage.getItem(storageKey);
    if (!rawItems) {
      return {};
    }

    const parsedItems = JSON.parse(rawItems);
    return parsedItems && typeof parsedItems === "object" && !Array.isArray(parsedItems)
      ? parsedItems
      : {};
  } catch (error) {
    return {};
  }
}

function saveStoredArray(storageKey, items) {
  window.localStorage.setItem(storageKey, JSON.stringify(items));
}

function bootstrapLocalReferenceData() {
  if (readStoredArray(collaboratorsStorageKey).length === 0) {
    saveStoredCollaborators(defaultCollaboratorRecords);
  }

  if (readStoredArray(vehiclesStorageKey).length === 0) {
    saveStoredVehicles(defaultVehicleRecords);
  }
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

  return new Intl.DateTimeFormat(getAppLocale(), {
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

async function excludeVehicle() {
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

  try {
    await syncAppDataToServer();
  } catch (error) {
    showVehicleFormMessage(
      "Vehicule retire localement, mais la suppression n'a pas pu etre synchronisee en base.",
      "error"
    );
  }

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

  const missionRelations = buildMissionRelationsSnapshot();
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
      const relatedMissions = missionRelations.vehicleMissionMap.get(vehicle.id) || [];
      const missionConnectionMarkup = buildMissionConnectionMarkup(relatedMissions, {
        emptyLabel: "Ce vehicule n'est affecte a aucune mission du planning.",
      });

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
              ${
                relatedMissions[0]
                  ? `
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Chauffeur mission</span>
                <span class="vehicle-meta-value">${escapeHtml(relatedMissions[0].leadCollaboratorName)}</span>
              </div>
              `
                  : ""
              }
            </div>

            ${missionConnectionMarkup}

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

async function handleVehicleSubmit(event) {
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
        : createEntityId("vehicle"),
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

  try {
    await syncAppDataToServer();
  } catch (error) {
    showVehicleFormMessage(
      "Vehicule enregistre localement, mais la synchronisation PostgreSQL a echoue.",
      "error"
    );
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

  const missionRelations = buildMissionRelationsSnapshot();
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
      const relatedMissions = missionRelations.collaboratorMissionMap.get(collaborator.id) || [];
      const primaryLinkedVehicle = linkedVehicles[0]?.vehicle || null;
      const availabilityClass = getCollaboratorAvailabilityClass(
        collaborator.availabilityStatus
      );
      const missionConnectionMarkup = buildMissionConnectionMarkup(relatedMissions, {
        emptyLabel: "Ce collaborateur n'est pas encore affecte a une mission du planning.",
      });
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
              ${
                relatedMissions[0]
                  ? `
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Mission en cours</span>
                <span class="vehicle-meta-value">${escapeHtml(relatedMissions[0].missionCode)} · ${escapeHtml(relatedMissions[0].roleLabel)}</span>
              </div>
              `
                  : ""
              }
              ${linkedVehicleDetailsMarkup}
              <div class="vehicle-meta-row">
                <span class="vehicle-meta-label">Langues</span>
                <div class="collaborator-language-tags">
                  ${languagesMarkup}
                </div>
              </div>
            </div>

            ${missionConnectionMarkup}

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

async function handleCollaboratorSubmit(event) {
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
      : createEntityId("collaborator");
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

  try {
    await syncAppDataToServer();
  } catch (error) {
    showCollaboratorFormMessage(
      "Collaborateur enregistre localement, mais la synchronisation PostgreSQL a echoue.",
      "error"
    );
  }

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

function saveInvoiceAttachmentFile(file, existingAttachmentId = "") {
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

function getStoredInvoiceAttachment(attachmentId) {
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

function deleteStoredInvoiceAttachment(attachmentId) {
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
  return new Intl.NumberFormat(getAppLocale(), {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(normalizeInvoiceAmount(value));
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

  return new Intl.DateTimeFormat(getAppLocale(), {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(displayDate);
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
    missionId: cleanInputValue(safeInvoice.missionId),
    missionCode: cleanInputValue(safeInvoice.missionCode),
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

function getInvoiceMissionActivityStops(mission) {
  return Array.isArray(mission?.stops)
    ? mission.stops.filter((stop) => cleanInputValue(stop?.kind) === "activity")
    : [];
}

function getInvoiceMissionActivityBudgetTotal(mission) {
  return getInvoiceMissionActivityStops(mission).reduce(
    (sum, stop) => sum + (Number(stop?.activityBudget) || 0),
    0
  );
}

function findRecentClientInvoice(clientName, excludedInvoiceId = "") {
  const normalizedClientName = normalizeTextValue(clientName);
  if (!normalizedClientName) {
    return null;
  }

  return getStoredInvoices()
    .map((storedInvoice) => normalizeInvoice(storedInvoice))
    .filter(
      (invoice) =>
        invoice.id !== excludedInvoiceId &&
        normalizeInvoiceType(invoice.invoiceType) === "client" &&
        normalizeTextValue(invoice.client?.name) === normalizedClientName
    )
    .sort((leftInvoice, rightInvoice) => (rightInvoice.issuedAt || "").localeCompare(leftInvoice.issuedAt || ""))[0] || null;
}

function findRecentSellerInvoice(excludedInvoiceId = "") {
  return getStoredInvoices()
    .map((storedInvoice) => normalizeInvoice(storedInvoice))
    .filter(
      (invoice) =>
        invoice.id !== excludedInvoiceId &&
        normalizeInvoiceType(invoice.invoiceType) === "client" &&
        cleanInputValue(invoice.seller?.name)
    )
    .sort((leftInvoice, rightInvoice) => (rightInvoice.issuedAt || "").localeCompare(leftInvoice.issuedAt || ""))[0] || defaultInvoiceRecord;
}

function getInvoiceMissionOptionLabel(mission) {
  const missionDate = mission?.serviceDate ? formatInvoiceDate(mission.serviceDate) : "Date a definir";
  return [mission?.code, missionDate, mission?.clientName, mission?.routeLabel]
    .filter(Boolean)
    .join(" · ");
}

function refreshInvoiceMissionOptions(selectedMissionId = "") {
  if (!invoiceMissionInput) {
    return;
  }

  const missions = getInvoiceMissionCatalog();
  const currentSelection = selectedMissionId || cleanInputValue(invoiceMissionInput.value);
  const hasSelectedMission = missions.some((mission) => mission.id === currentSelection);

  invoiceMissionInput.innerHTML = [
    '<option value="">Choisir une mission du planning</option>',
    ...missions.map(
      (mission) =>
        `<option value="${escapeHtml(mission.id)}"${
          mission.id === currentSelection ? " selected" : ""
        }>${escapeHtml(getInvoiceMissionOptionLabel(mission))}</option>`
    ),
  ].join("");

  invoiceMissionInput.value = hasSelectedMission ? currentSelection : "";
}

function updateInvoiceMissionHelpText() {
  if (!invoiceMissionHelp) {
    return;
  }

  const missions = getInvoiceMissionCatalog();
  const selectedMission = getInvoiceMissionById(cleanInputValue(invoiceMissionInput?.value));
  if (missions.length === 0) {
    invoiceMissionHelp.textContent =
      "Aucune mission n'est encore disponible. Creez ou modifiez un trajet puis revenez ici.";
    return;
  }

  if (!selectedMission) {
    invoiceMissionHelp.textContent =
      "Selectionnez une mission pour reprendre automatiquement le client, le trajet et le montant facture.";
    return;
  }

  const missionAmount = Math.max(
    Number(selectedMission.quotedPrice || 0),
    Number(selectedMission.recommendedPrice || 0)
  );
  const activityStops = getInvoiceMissionActivityStops(selectedMission);
  const activityBudgetTotal = getInvoiceMissionActivityBudgetTotal(selectedMission);
  const activityLabel = activityStops.length
    ? ` · ${activityStops.length} etape(s) activite (${formatInvoiceAmount(activityBudgetTotal)})`
    : "";

  invoiceMissionHelp.textContent =
    `${selectedMission.code} · ${selectedMission.clientName} · ${selectedMission.routeLabel} · ${formatInvoiceAmount(missionAmount)} HT${activityLabel}`;
}

function syncInvoiceMissionButtonState() {
  if (!invoiceGenerateFromMissionButton || !invoiceTypeInput) {
    return;
  }

  const isExternalInvoice = normalizeInvoiceType(invoiceTypeInput.value) === "external";
  invoiceGenerateFromMissionButton.disabled =
    isExternalInvoice || !getInvoiceMissionById(cleanInputValue(invoiceMissionInput?.value));
}

function fillInvoiceFormFromMission(missionId, options = {}) {
  const { showFeedback = true } = options;
  const mission = getInvoiceMissionById(missionId);

  if (!mission) {
    if (showFeedback) {
      showInvoiceFormMessage("Selectionnez une mission valide pour generer la facture.", "error");
    }
    return false;
  }

  const existingInvoice = editingInvoiceId ? getInvoiceById(editingInvoiceId) : null;
  const clientReference =
    existingInvoice &&
    normalizeTextValue(existingInvoice.client?.name) === normalizeTextValue(mission.clientName)
      ? existingInvoice
      : findRecentClientInvoice(mission.clientName, editingInvoiceId);
  const sellerReference = existingInvoice || findRecentSellerInvoice(editingInvoiceId);
  const missionAmount = Math.max(
    Number(mission.quotedPrice || 0),
    Number(mission.recommendedPrice || 0)
  );
  const activityStops = getInvoiceMissionActivityStops(mission);
  const serviceDescriptionParts = [mission.serviceType || "Mission chauffeur", mission.code, mission.routeLabel];
  if (activityStops.length > 0) {
    serviceDescriptionParts.push(`${activityStops.length} etape(s) activite`);
  }

  if (invoiceMissionInput) {
    invoiceMissionInput.value = mission.id;
  }
  if (invoiceSellerNameInput) {
    invoiceSellerNameInput.value = cleanInputValue(sellerReference?.seller?.name) || defaultInvoiceRecord.seller.name;
  }
  if (invoiceSellerAddressInput) {
    invoiceSellerAddressInput.value =
      cleanInputValue(sellerReference?.seller?.address) || defaultInvoiceRecord.seller.address;
  }
  if (invoiceSellerLocationInput) {
    invoiceSellerLocationInput.value =
      cleanInputValue(sellerReference?.seller?.location) || defaultInvoiceRecord.seller.location;
  }
  if (invoiceSellerPhoneInput) {
    invoiceSellerPhoneInput.value =
      cleanInputValue(sellerReference?.seller?.phone) || defaultInvoiceRecord.seller.phone;
  }
  if (invoiceSellerEvtcInput) {
    invoiceSellerEvtcInput.value =
      cleanInputValue(sellerReference?.seller?.evtc) || defaultInvoiceRecord.seller.evtc;
  }
  if (invoiceSellerSiretInput) {
    invoiceSellerSiretInput.value =
      cleanInputValue(sellerReference?.seller?.siret) || defaultInvoiceRecord.seller.siret;
  }
  if (invoiceClientNameInput) {
    invoiceClientNameInput.value = mission.clientName || "";
  }
  if (invoiceClientAddressInput) {
    invoiceClientAddressInput.value = cleanInputValue(clientReference?.client?.address);
  }
  if (invoiceClientLocationInput) {
    invoiceClientLocationInput.value = cleanInputValue(clientReference?.client?.location);
  }
  if (invoiceClientSiretInput) {
    invoiceClientSiretInput.value = cleanInputValue(clientReference?.client?.siret);
  }
  if (invoiceClientVatInput) {
    invoiceClientVatInput.value = cleanInputValue(clientReference?.client?.vat);
  }
  if (invoiceClientContactInput) {
    invoiceClientContactInput.value = cleanInputValue(clientReference?.client?.contact);
  }
  if (invoiceClientEmailInput) {
    invoiceClientEmailInput.value = cleanInputValue(clientReference?.client?.email);
  }
  if (invoiceClientPhoneInput) {
    invoiceClientPhoneInput.value = cleanInputValue(clientReference?.client?.phone);
  }
  if (invoiceServiceDescriptionInput) {
    invoiceServiceDescriptionInput.value = serviceDescriptionParts.filter(Boolean).join(" · ");
  }
  if (invoiceServiceDateInput) {
    invoiceServiceDateInput.value = mission.serviceDate || getDateInputValue();
  }
  if (invoiceServicePickupInput) {
    invoiceServicePickupInput.value = mission.pickupAddress || "";
  }
  if (invoiceServiceDestinationInput) {
    invoiceServiceDestinationInput.value = mission.destinationAddress || "";
  }
  if (invoiceServicePassengersInput) {
    invoiceServicePassengersInput.value = mission.passengers > 0 ? String(mission.passengers) : "";
  }
  if (invoiceServiceDistanceInput) {
    invoiceServiceDistanceInput.value = mission.distanceKm > 0 ? String(mission.distanceKm) : "";
  }
  if (invoiceTotalHtInput) {
    invoiceTotalHtInput.value = missionAmount > 0 ? String(missionAmount) : "";
  }
  if (invoiceVat10Input && cleanInputValue(invoiceVat10Input.value) === "") {
    invoiceVat10Input.value = "0";
  }
  if (invoiceVat20Input && cleanInputValue(invoiceVat20Input.value) === "") {
    invoiceVat20Input.value = "0";
  }
  if (invoiceInsuranceInput && !cleanInputValue(invoiceInsuranceInput.value)) {
    invoiceInsuranceInput.value =
      cleanInputValue(existingInvoice?.insurance) ||
      cleanInputValue(clientReference?.insurance) ||
      defaultInvoiceRecord.insurance;
  }
  if (invoiceTaxNoteInput && !cleanInputValue(invoiceTaxNoteInput.value)) {
    invoiceTaxNoteInput.value =
      cleanInputValue(existingInvoice?.taxNote) ||
      cleanInputValue(clientReference?.taxNote) ||
      defaultInvoiceRecord.taxNote;
  }

  updateInvoiceMissionHelpText();
  syncInvoiceMissionButtonState();

  if (showFeedback) {
    showInvoiceFormMessage(`Facture pre-remplie depuis la mission ${mission.code}.`, "success");
  }

  return true;
}

function syncInvoiceMissionSelection(preferredMissionId = "") {
  if (!invoiceMissionInput) {
    return;
  }

  refreshInvoiceMissionOptions(preferredMissionId);
  updateInvoiceMissionHelpText();
  syncInvoiceMissionButtonState();
}

function prefillInvoiceFromSelectedMission() {
  const selectedMissionId = getSelectedTripId();
  syncInvoiceMissionSelection(selectedMissionId);

  if (selectedMissionId) {
    fillInvoiceFormFromMission(selectedMissionId, { showFeedback: false });
  }
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
    !invoiceMissionField ||
    !invoiceMissionActions ||
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

  invoiceMissionField.hidden = isExternalInvoice;
  invoiceMissionActions.hidden = isExternalInvoice;
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
    updateInvoiceMissionHelpText();
    syncInvoiceMissionButtonState();
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
  updateInvoiceMissionHelpText();
  syncInvoiceMissionButtonState();
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
  if (invoiceMissionInput) {
    invoiceMissionInput.value = "";
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

  syncInvoiceMissionSelection(getSelectedTripId());
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
  if (invoiceMissionInput) {
    invoiceMissionInput.value = invoice.missionId || "";
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

  syncInvoiceMissionSelection(invoice.missionId || "");
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

async function toggleInvoicePaymentStatus(invoiceId) {
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

  const nextInvoices = invoices.map((invoice) =>
    invoice.id === invoiceId
      ? {
          ...invoice,
          paymentStatus: nextPaymentStatus,
          settledAt: nextSettledAt,
        }
      : invoice
  );
  const updatedInvoice = nextInvoices.find((invoice) => invoice.id === invoiceId) || null;

  saveStoredInvoices(nextInvoices);

  if (updatedInvoice) {
    syncMissionFromInvoiceRecord(updatedInvoice);
  }

  try {
    await syncAppDataToServer();
  } catch (error) {
    window.alert("Statut mis a jour localement, mais la synchronisation PostgreSQL a echoue.");
  }

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
    const canUseRemotePersistence = await ensureRemotePersistenceReady();

    if (canUseRemotePersistence) {
      const remoteBlob = await fetchRemoteInvoiceAttachment(invoiceId);
      const remoteUrl = window.URL.createObjectURL(remoteBlob);
      window.open(remoteUrl, "_blank", "noopener");
      window.setTimeout(() => {
        window.URL.revokeObjectURL(remoteUrl);
      }, 60000);
      return;
    }

    const storedAttachment = await getStoredInvoiceAttachment(attachment.id);
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
    const canUseRemotePersistence = await ensureRemotePersistenceReady();

    if (canUseRemotePersistence) {
      const remoteBlob = await fetchRemoteInvoiceAttachment(invoiceId);
      const remoteUrl = window.URL.createObjectURL(remoteBlob);
      const remoteDownloadLink = document.createElement("a");
      remoteDownloadLink.href = remoteUrl;
      remoteDownloadLink.download = attachment.name || getInvoicePdfDocumentTitle(invoice);
      document.body.append(remoteDownloadLink);
      remoteDownloadLink.click();
      remoteDownloadLink.remove();
      window.setTimeout(() => {
        window.URL.revokeObjectURL(remoteUrl);
      }, 5000);
      return;
    }

    const storedAttachment = await getStoredInvoiceAttachment(attachment.id);
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
        ${
          invoice.missionCode
            ? `
              <div class="invoice-service-row">
                <span>Mission source</span>
                <strong>${escapeHtml(invoice.missionCode)}</strong>
              </div>
            `
            : ""
        }
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
                  ${
                    !isExternalInvoice && invoice.missionId
                      ? `
                        <button
                          class="invoice-edit-button"
                          type="button"
                          data-open-mission-id="${escapeHtml(invoice.missionId)}"
                          data-open-mission-target="trajets.html"
                        >
                          Voir la mission
                        </button>
                      `
                      : ""
                  }
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

  if (!selectedInvoiceId) {
    const selectedMissionId = getSelectedTripId();
    const linkedMissionInvoice = invoices.find(
      (invoice) =>
        normalizeInvoiceType(invoice.invoiceType) === "client" && invoice.missionId === selectedMissionId
    );

    if (linkedMissionInvoice) {
      selectedInvoiceId = linkedMissionInvoice.id;
    }
  }

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
  const linkedMission = !isExternalInvoice
    ? getInvoiceMissionById(cleanInputValue(invoiceMissionInput?.value))
    : null;
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
  const canUseRemotePersistence = await ensureRemotePersistenceReady();
  let nextAttachment = existingInvoice?.attachment || null;
  const selectedAttachmentFile = invoiceAttachmentInput?.files?.[0] || null;

  try {
    if (isExternalInvoice && selectedAttachmentFile) {
      nextAttachment = canUseRemotePersistence
        ? await buildInvoiceAttachmentPayload(
            selectedAttachmentFile,
            existingInvoice?.attachment?.id || ""
          )
        : await saveInvoiceAttachmentFile(selectedAttachmentFile, existingInvoice?.attachment?.id || "");
    } else if (!isExternalInvoice && existingInvoice?.attachment?.id) {
      if (!canUseRemotePersistence) {
        await deleteStoredInvoiceAttachment(existingInvoice.attachment.id);
      }
      nextAttachment = null;
    }
  } catch (error) {
    showInvoiceFormMessage("Impossible d'enregistrer le fichier joint pour cette facture.", "error");
    return;
  }

  const nextInvoice = normalizeInvoice({
    id: existingInvoice?.id || createEntityId("invoice"),
    number,
    issuedAt,
    invoiceType,
    missionId: isExternalInvoice ? "" : cleanInputValue(linkedMission?.id),
    missionCode: isExternalInvoice ? "" : cleanInputValue(linkedMission?.code),
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

  if (nextAttachment?.payloadBase64 && nextInvoice.attachment) {
    nextInvoice.attachment = {
      ...nextInvoice.attachment,
      payloadBase64: nextAttachment.payloadBase64,
    };
  }

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

  syncMissionFromInvoiceRecord(nextInvoice);

  try {
    await syncAppDataToServer();
  } catch (error) {
    showInvoiceFormMessage(
      "Facture enregistree localement, mais la synchronisation PostgreSQL a echoue.",
      "error"
    );
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

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const missionLink = event.target.closest("[data-open-mission-id]");
  if (!missionLink) {
    return;
  }

  const missionId = cleanInputValue(missionLink.getAttribute("data-open-mission-id"));
  const targetPage =
    cleanInputValue(missionLink.getAttribute("data-open-mission-target")) ||
    cleanInputValue(missionLink.getAttribute("href")) ||
    "trajets.html";

  if (!missionId) {
    return;
  }

  event.preventDefault();
  saveSelectedTripId(missionId);
  window.location.href = targetPage;
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

    if (event.target.closest(".vehicle-edit-button, [data-open-mission-id]")) {
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

    if (event.target.closest(".vehicle-edit-button, [data-open-mission-id]")) {
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

    if (event.target.closest(".collaborator-edit-button, [data-open-mission-id]")) {
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

    if (event.target.closest(".collaborator-edit-button, [data-open-mission-id]")) {
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
    prefillInvoiceFromSelectedMission();
    setInvoiceFormOpen(true);
  });
}

if (invoiceTypeInput) {
  invoiceTypeInput.addEventListener("change", () => {
    syncInvoiceTypeFields();
  });
}

if (invoiceMissionInput) {
  invoiceMissionInput.addEventListener("change", () => {
    updateInvoiceMissionHelpText();
    syncInvoiceMissionButtonState();

    const missionId = cleanInputValue(invoiceMissionInput.value);
    if (missionId && normalizeInvoiceType(invoiceTypeInput?.value) === "client") {
      fillInvoiceFormFromMission(missionId, { showFeedback: false });
    }
  });
}

if (invoiceGenerateFromMissionButton) {
  invoiceGenerateFromMissionButton.addEventListener("click", () => {
    fillInvoiceFormFromMission(cleanInputValue(invoiceMissionInput?.value));
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

async function initializeApp() {
  mountLanguageSwitcher();
  startAppLanguageObserver();
  syncCurrentLabel();
  buildCurrentWeekCalendar();
  await bootstrapBundledAppSnapshot();
  bootstrapLocalReferenceData();
  await bootstrapAppPersistence();
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
  applyAppLanguage(currentAppLanguage);
  window.dispatchEvent(new CustomEvent("route-pilote-app-data-ready"));
}

window.syncAppDataToServer = syncAppDataToServer;
window.getLocalAppSnapshot = getLocalAppSnapshot;
window.applyRemoteAppData = applyRemoteAppData;
window.routePiloteLanguage = {
  get: () => currentAppLanguage,
  locale: getAppLocale,
  set: setAppLanguage,
  translate: () => applyAppLanguage(currentAppLanguage),
  translateText: (value) =>
    getTranslatedText(getTranslationSourceText(normalizeTranslationText(value)), currentAppLanguage),
};

// API minimale pour que les pages independantes partagent les memes donnees.
window.routePiloteSharedData = {
  storageKeys: {
    collaborators: collaboratorsStorageKey,
    vehicles: vehiclesStorageKey,
    invoices: invoicesStorageKey,
    financeEntries: financeEntriesStorageKey,
    customMissions: customMissionsStorageKey,
    missionOverrides: missionOverridesStorageKey,
    missionAssignments: missionAssignmentsStorageKey,
    selectedTrip: selectedTripStorageKey,
  },
  applySnapshot: applyRemoteAppData,
  getSnapshot: getLocalAppSnapshot,
  sync: syncAppDataToServer,
};

window.routePiloteAppReadyPromise = initializeApp();
void window.routePiloteAppReadyPromise;

