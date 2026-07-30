/**
 * RolanNutriPro - Core Main Orchestrator & Event Listener Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

let nutrientDB = window.NUTRIENT_DB || null;
let currentViewMode = "technical"; // "technical" or "practical"
let activeSelectedMineral = "Ca"; // Default mineral selection

// Global DOM Element References
let speciesSelect, categorySelect, bwInput, milkInput, fatInput, proteinInput, dimInput, adgInput;
let groupMilk, groupFat, groupProtein, groupDim, groupAdg;
let btnCalculate, btnTechView, btnPracticalView, bannerModeBadge, resultsContainer;
let mineralTypeSelect, btnCalcMineral, mineralDetailsContainer, macroMineralTableBody, microMineralTableBody, mineralAnimalBadge;
let cornellModuleContainer, presetTableHead, presetTableBody;
let mascotWrapper, speechBubble, cowIcon, avatar;
let qaInput, qaBtn, qaAnswerContainer, chipBtns;

function updateFormFieldsAndDefaults() {
    speciesSelect = speciesSelect || document.getElementById("species-select");
    categorySelect = categorySelect || document.getElementById("category-select");
    bwInput = bwInput || document.getElementById("bw-input");
    milkInput = milkInput || document.getElementById("milk-input");
    fatInput = fatInput || document.getElementById("fat-input");
    proteinInput = proteinInput || document.getElementById("protein-input");
    dimInput = dimInput || document.getElementById("dim-input");
    adgInput = adgInput || document.getElementById("adg-input");

    groupMilk = groupMilk || document.getElementById("group-milk");
    groupFat = groupFat || document.getElementById("group-fat");
    groupProtein = groupProtein || document.getElementById("group-protein");
    groupDim = groupDim || document.getElementById("group-dim");
    groupAdg = groupAdg || document.getElementById("group-adg");

    if (!nutrientDB || !speciesSelect || !categorySelect) return;
    const speciesKey = speciesSelect.value;
    const catIndex = parseInt(categorySelect.value) || 0;
    const profiles = nutrientDB.species_profiles || nutrientDB.species || {};
    const speciesData = profiles[speciesKey];
    if (!speciesData || !speciesData.categories) return;

    const cat = speciesData.categories[catIndex];
    if (!cat) return;

    if (cat.bw_kg && bwInput) bwInput.value = cat.bw_kg;
    if (cat.milk_kg !== undefined && milkInput) milkInput.value = cat.milk_kg;
    if (cat.fat_pct !== undefined && fatInput) fatInput.value = cat.fat_pct;
    if (cat.protein_pct !== undefined && proteinInput) proteinInput.value = cat.protein_pct;
    if (cat.dim !== undefined && dimInput) dimInput.value = cat.dim;
    if (cat.adg_kg !== undefined && adgInput) adgInput.value = cat.adg_kg;

    if (speciesKey === "dairy_nasem") {
        if (cat.name.includes("Seca") || cat.name.includes("Pre-parto")) {
            if (groupMilk) groupMilk.style.display = "none";
            if (groupFat) groupFat.style.display = "none";
            if (groupProtein) groupProtein.style.display = "none";
            if (groupDim) groupDim.style.display = "none";
            if (groupAdg) groupAdg.style.display = "none";
        } else if (cat.name.includes("Recría") || cat.name.includes("Vaquillona")) {
            if (groupMilk) groupMilk.style.display = "none";
            if (groupFat) groupFat.style.display = "none";
            if (groupProtein) groupProtein.style.display = "none";
            if (groupDim) groupDim.style.display = "none";
            if (groupAdg) groupAdg.style.display = "block";
        } else {
            if (groupMilk) groupMilk.style.display = "block";
            if (groupFat) groupFat.style.display = "block";
            if (groupProtein) groupProtein.style.display = "block";
            if (groupDim) groupDim.style.display = "block";
            if (groupAdg) groupAdg.style.display = "none";
        }
    } else {
        if (cat.name.includes("Lactancia") || cat.name.includes("Cría")) {
            if (groupMilk) groupMilk.style.display = "block";
            if (groupFat) groupFat.style.display = "none";
            if (groupProtein) groupProtein.style.display = "none";
            if (groupDim) groupDim.style.display = "none";
            if (groupAdg) groupAdg.style.display = "none";
        } else {
            if (groupMilk) groupMilk.style.display = "none";
            if (groupFat) groupFat.style.display = "none";
            if (groupProtein) groupProtein.style.display = "none";
            if (groupDim) groupDim.style.display = "none";
            if (groupAdg) groupAdg.style.display = "block";
        }
    }
}

function populateCategories() {
    speciesSelect = speciesSelect || document.getElementById("species-select");
    categorySelect = categorySelect || document.getElementById("category-select");
    if (!nutrientDB || !speciesSelect || !categorySelect) return;
    const profiles = nutrientDB.species_profiles || nutrientDB.species || {};
    const speciesKey = speciesSelect.value;
    const speciesData = profiles[speciesKey];

    categorySelect.innerHTML = "";
    if (speciesData && speciesData.categories) {
        speciesData.categories.forEach((cat, index) => {
            const opt = document.createElement("option");
            opt.value = index;
            opt.textContent = cat.name;
            categorySelect.appendChild(opt);
        });
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    nutrientDB = window.NUTRIENT_DB || nutrientDB || null;

    if (!nutrientDB && window.location.protocol.startsWith("http")) {
        try {
            const response = await fetch("ruminant_nutrient_database.json");
            nutrientDB = await response.json();
        } catch (err) {
            console.warn("Using fallback window.NUTRIENT_DB:", err);
        }
    }
    if (!nutrientDB) {
        nutrientDB = window.NUTRIENT_DB || null;
    }

    // DOM Element References
    speciesSelect = document.getElementById("species-select");
    categorySelect = document.getElementById("category-select");
    bwInput = document.getElementById("bw-input");
    milkInput = document.getElementById("milk-input");
    fatInput = document.getElementById("fat-input");
    proteinInput = document.getElementById("protein-input");
    dimInput = document.getElementById("dim-input");
    adgInput = document.getElementById("adg-input");

    groupMilk = document.getElementById("group-milk");
    groupFat = document.getElementById("group-fat");
    groupProtein = document.getElementById("group-protein");
    groupDim = document.getElementById("group-dim");
    groupAdg = document.getElementById("group-adg");

    btnCalculate = document.getElementById("btn-calculate");
    btnTechView = document.getElementById("btn-tech-view");
    btnPracticalView = document.getElementById("btn-practical-view");
    bannerModeBadge = document.getElementById("banner-mode-badge");
    resultsContainer = document.getElementById("results-container");

    mineralTypeSelect = document.getElementById("mineral-type-select");
    btnCalcMineral = document.getElementById("btn-calc-mineral");
    mineralDetailsContainer = document.getElementById("mineral-details-container");
    macroMineralTableBody = document.querySelector("#macro-mineral-table tbody");
    microMineralTableBody = document.querySelector("#micro-mineral-table tbody");
    mineralAnimalBadge = document.getElementById("mineral-animal-badge");

    cornellModuleContainer = document.getElementById("cornell-module-container");
    presetTableHead = document.querySelector("#preset-table thead");
    presetTableBody = document.querySelector("#preset-table tbody");

    // Mascot & Audio References
    avatar = document.getElementById("holstein-cow-avatar");
    mascotWrapper = document.getElementById("holstein-mascot-wrapper");
    speechBubble = document.getElementById("mascot-speech-bubble");
    cowIcon = document.getElementById("cow-brand-icon");

    // Q&A Assistant References
    qaInput = document.getElementById("qa-input-text");
    qaBtn = document.getElementById("btn-submit-qa");
    qaAnswerContainer = document.getElementById("qa-answer-container");
    chipBtns = document.querySelectorAll(".chip-btn");

    if (speciesSelect) speciesSelect.addEventListener("change", () => { populateCategories(); updateFormFieldsAndDefaults(); calculateRequirements(); });
    if (categorySelect) categorySelect.addEventListener("change", () => { updateFormFieldsAndDefaults(); calculateRequirements(); });
    if (btnCalculate) btnCalculate.addEventListener("click", () => { calculateRequirements(); triggerMooAudio(); });
    if (btnCalcMineral) btnCalcMineral.addEventListener("click", () => { if (mineralTypeSelect) activeSelectedMineral = mineralTypeSelect.value; updateMineralTablesAndHighlight(); triggerMooAudio(); });
    if (mineralTypeSelect) mineralTypeSelect.addEventListener("change", () => { activeSelectedMineral = mineralTypeSelect.value; updateMineralTablesAndHighlight(); });

    if (btnTechView) btnTechView.addEventListener("click", () => {
        currentViewMode = "technical";
        btnTechView.classList.add("active");
        if (btnPracticalView) btnPracticalView.classList.remove("active");
        if (bannerModeBadge) bannerModeBadge.innerText = "VISTA TÉCNICA ACTIVA";
        calculateRequirements();
    });
    if (btnPracticalView) btnPracticalView.addEventListener("click", () => {
        currentViewMode = "practical";
        btnPracticalView.classList.add("active");
        if (btnTechView) btnTechView.classList.remove("active");
        if (bannerModeBadge) bannerModeBadge.innerText = "VISTA PRÁCTICA ACTIVA";
        calculateRequirements();
    });

    if (mascotWrapper) mascotWrapper.addEventListener("click", triggerMooAudio);
    if (cowIcon) cowIcon.addEventListener("click", triggerMooAudio);

    if (qaBtn) qaBtn.addEventListener("click", () => { const val = qaInput ? qaInput.value : ""; searchNutritionQA(val); triggerMooAudio(); });
    if (qaInput) qaInput.addEventListener("keypress", (e) => { if (e.key === "Enter") { searchNutritionQA(qaInput.value); triggerMooAudio(); } });

    chipBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const q = btn.getAttribute("data-query");
            if (qaInput) qaInput.value = btn.innerText;
            searchNutritionQA(q);
            triggerMooAudio();
        });
    });

    populateCategories();
    updateFormFieldsAndDefaults();
    calculateRequirements();
    updateMineralTablesAndHighlight();
    renderCornellModule();
    renderPresetsTable();
});
