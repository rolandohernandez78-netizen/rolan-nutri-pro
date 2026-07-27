/**
 * RolanNutriPro - Mineral Catalog & Requirements Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 * Standards: NASEM 2021 (8th Ed., Chapter 7)
 */

function updateMineralTablesAndHighlight() {
    speciesSelect = speciesSelect || document.getElementById("species-select");
    categorySelect = categorySelect || document.getElementById("category-select");
    mineralTypeSelect = mineralTypeSelect || document.getElementById("mineral-type-select");
    mineralDetailsContainer = mineralDetailsContainer || document.getElementById("mineral-details-container");
    macroMineralTableBody = macroMineralTableBody || document.querySelector("#macro-mineral-table tbody");
    microMineralTableBody = microMineralTableBody || document.querySelector("#micro-mineral-table tbody");
    mineralAnimalBadge = mineralAnimalBadge || document.getElementById("mineral-animal-badge");

    if (!nutrientDB || !nutrientDB.mineral_catalog) return;
    const catalog = nutrientDB.mineral_catalog;

    const speciesKey = speciesSelect ? speciesSelect.value : "dairy_nasem";
    const catIndex = categorySelect ? (parseInt(categorySelect.value) || 0) : 0;
    const profiles = nutrientDB.species_profiles || nutrientDB.species || {};
    const speciesData = profiles[speciesKey];
    const cat = (speciesData && speciesData.categories) ? speciesData.categories[catIndex] : null;
    const catId = cat ? cat.id : "lactating_primiparous";

    const bw = parseFloat(bwInput ? bwInput.value : 650) || (cat ? cat.bw_kg : 650);
    const milk = parseFloat(milkInput ? milkInput.value : 35.0) || (cat ? cat.milk_kg : 35.0);
    const fat = parseFloat(fatInput ? fatInput.value : 3.80) || (cat ? cat.fat_pct : 3.80);
    const dim = parseFloat(dimInput ? dimInput.value : 60) || (cat ? cat.dim : 60);

    let dmi = 0;
    if (catId === "lactating_primiparous") {
        const fcm4 = milk * (0.4 + 0.15 * fat);
        const dmiBase = (3.75 + (0.022 * bw) + (0.305 * fcm4)) * 0.88;
        const wol = dim / 7.0;
        const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
        dmi = Math.max(12.0, dmiBase * lag);
    } else if (catId === "lactating_multiparous") {
        const fcm4 = milk * (0.4 + 0.15 * fat);
        const dmiBase = 3.75 + (0.022 * bw) + (0.305 * fcm4);
        const wol = dim / 7.0;
        const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
        dmi = Math.max(14.0, dmiBase * lag);
    } else if (catId === "dry_far_off") {
        dmi = bw * 0.0197;
    } else if (catId === "dry_close_up") {
        dmi = bw * 0.0170;
    } else if (catId === "growing_heifer") {
        dmi = bw * 0.0245;
    } else if (catId === "steer_finishing") {
        dmi = bw * 0.0265;
    } else if (catId === "cow_lactating_beef") {
        dmi = bw * 0.023 + milk * 0.10;
    } else if (catId === "bull_breeding") {
        dmi = bw * 0.0210;
    } else {
        dmi = bw * 0.023;
    }

    if (mineralAnimalBadge) mineralAnimalBadge.innerText = `Vaca ${bw} kg | DMI Est: ${dmi.toFixed(1)} kg MS/d`;

    // Highlighted Mineral Card
    const item = catalog[activeSelectedMineral];
    if (item && mineralDetailsContainer) {
        const isMacro = item.unit.includes("g");
        const reqVal = isMacro ? `${item.req_per_kg_dm} g/kg MS` : `${item.req_per_kg_dm} mg/kg MS (ppm)`;
        const totalVal = isMacro ? `${(dmi * item.req_per_kg_dm).toFixed(1)} g/día` : `${(dmi * item.req_per_kg_dm).toFixed(0)} mg/día`;

        mineralDetailsContainer.innerHTML = `
            <div class="practical-card" style="border-left-color: var(--primary-emerald); background: #f0fdf4; border: 1.5px solid #a7f3d0; border-radius: 16px; padding: 20px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="margin:0; font-size:1.25rem; font-weight:700; color:#0f172a;">🧪 Ficha Técnica: ${item.name} (${item.symbol})</h4>
                    <span class="badge-source" style="background:#dcfce7; color:#047857; border-color:#86efac; padding: 4px 10px; border-radius: 20px; font-weight: 700;">${item.category}</span>
                </div>
                <div class="practical-stats" style="margin-top:12px; display: grid; gap: 8px;">
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Requerimiento por kg MS: <strong style="color:#047857;">${reqVal}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Consumo Total Estimado: <strong style="color:#047857;">${totalVal}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Límite Máximo Tolerable: <strong style="color:#b45309;">${item.unit.includes("g") ? item.max_tolerable + "% MS" : item.max_tolerable + " ppm"}</strong></div>
                </div>
                <p style="margin-top:12px; font-size:0.92rem; color:#1e293b; line-height:1.5;"><strong style="color:#047857;">Función Fisiológica:</strong> ${item.function}</p>
                <p style="margin-top:6px; font-size:0.90rem; color:#334155; line-height:1.5;"><strong style="color:#0f172a;">Síntomas de Deficiencia:</strong> ${item.deficiency}</p>
            </div>
        `;
    }

    // Populate Macromineral Table
    if (macroMineralTableBody) {
        macroMineralTableBody.innerHTML = "";
        ["Ca", "P", "Mg", "K", "Na", "Cl", "S"].forEach(sym => {
            const min = catalog[sym];
            if (min) {
                const row = document.createElement("tr");
                if (sym === activeSelectedMineral) row.classList.add("selected-row");
                row.style.cursor = "pointer";
                row.innerHTML = `<td><strong>${min.name} (${min.symbol})</strong></td><td>${min.req_per_kg_dm} g/kg MS</td><td><strong>${(dmi * min.req_per_kg_dm).toFixed(1)} g/día</strong></td>`;
                row.addEventListener("click", () => {
                    activeSelectedMineral = sym;
                    if (mineralTypeSelect) mineralTypeSelect.value = sym;
                    updateMineralTablesAndHighlight();
                    triggerMooAudio();
                });
                macroMineralTableBody.appendChild(row);
            }
        });
    }

    // Populate Micromineral Table
    if (microMineralTableBody) {
        microMineralTableBody.innerHTML = "";
        ["Fe", "Zn", "Cu", "Mn", "I", "Se", "Co"].forEach(sym => {
            const min = catalog[sym];
            if (min) {
                const row = document.createElement("tr");
                if (sym === activeSelectedMineral) row.classList.add("selected-row");
                row.style.cursor = "pointer";
                row.innerHTML = `<td><strong>${min.name} (${min.symbol})</strong></td><td>${min.req_per_kg_dm} mg/kg MS (ppm)</td><td><strong>${(dmi * min.req_per_kg_dm).toFixed(0)} mg/día</strong></td>`;
                row.addEventListener("click", () => {
                    activeSelectedMineral = sym;
                    if (mineralTypeSelect) mineralTypeSelect.value = sym;
                    updateMineralTablesAndHighlight();
                    triggerMooAudio();
                });
                microMineralTableBody.appendChild(row);
            }
        });
    }
}
