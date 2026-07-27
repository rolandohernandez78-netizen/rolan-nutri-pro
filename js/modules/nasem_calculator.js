/**
 * RolanNutriPro - NASEM 2021 Requirements & DMI Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 * Standards: NASEM 2021 (8th Ed.), de Souza et al. (2019) Eq. 2-1
 */

function calculateRequirements() {
    speciesSelect = speciesSelect || document.getElementById("species-select");
    categorySelect = categorySelect || document.getElementById("category-select");
    bwInput = bwInput || document.getElementById("bw-input");
    milkInput = milkInput || document.getElementById("milk-input");
    fatInput = fatInput || document.getElementById("fat-input");
    proteinInput = proteinInput || document.getElementById("protein-input");
    dimInput = dimInput || document.getElementById("dim-input");
    adgInput = adgInput || document.getElementById("adg-input");
    resultsContainer = resultsContainer || document.getElementById("results-container");

    if (!speciesSelect || !categorySelect || !nutrientDB) return;
    const profiles = nutrientDB.species_profiles || nutrientDB.species;
    if (!profiles) return;

    const speciesKey = speciesSelect.value;
    const catIndex = parseInt(categorySelect.value) || 0;
    const speciesData = profiles[speciesKey];
    if (!speciesData || !speciesData.categories || !speciesData.categories[catIndex]) return;

    const cat = speciesData.categories[catIndex];
    const catId = cat.id;

    const bw = parseFloat(bwInput.value) || cat.bw_kg || 650;
    const milk = parseFloat(milkInput.value) || cat.milk_kg || 35.0;
    const fat = parseFloat(fatInput.value) || cat.fat_pct || 3.80;
    const protein = parseFloat(proteinInput.value) || cat.protein_pct || 3.20;
    const dim = parseFloat(dimInput.value) || cat.dim || 60;
    const adg = parseFloat(adgInput.value) || cat.adg_kg || 1.20;

    let dmi = 0, nel = 0, mp = 0, ca = 0, p = 0;
    let dmiNote = "";

    if (catId === "lactating_primiparous") {
        const fcm4 = milk * (0.4 + 0.15 * fat);
        const dmiBase = (3.75 + (0.022 * bw) + (0.305 * fcm4)) * 0.88;
        const wol = dim / 7.0;
        const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
        dmi = Math.max(12.0, dmiBase * lag);
        dmiNote = "Estimado por Ecuación NASEM 2021 Eq. 2-1 (Vaca Primípara 1er Parto).";

        const nem = 0.080 * Math.pow(bw, 0.75);
        const neMilk = milk * (0.0929 * fat + 0.0547 * protein + 0.192);
        nel = nem + neMilk;

        const mpMaint = 3.8 * Math.pow(bw, 0.75);
        const mpMilk = milk * (protein / 100.0) * 1000.0 * 1.4;
        mp = (mpMaint + mpMilk) / 1000.0;

        const caMaint = 0.031 * bw;
        const caMilk = 1.22 * milk;
        ca = (caMaint + caMilk) / 0.60;

        const pMaint = 0.018 * bw;
        const pMilk = 0.90 * milk;
        p = (pMaint + pMilk) / 0.70;
    } else if (catId === "lactating_multiparous") {
        const fcm4 = milk * (0.4 + 0.15 * fat);
        const dmiBase = 3.75 + (0.022 * bw) + (0.305 * fcm4);
        const wol = dim / 7.0;
        const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
        dmi = Math.max(14.0, dmiBase * lag);
        dmiNote = "Estimado por Ecuación NASEM 2021 Eq. 2-1 (Vaca Multípara 2+ Partos).";

        const nem = 0.080 * Math.pow(bw, 0.75);
        const neMilk = milk * (0.0929 * fat + 0.0547 * protein + 0.192);
        nel = nem + neMilk;

        const mpMaint = 3.8 * Math.pow(bw, 0.75);
        const mpMilk = milk * (protein / 100.0) * 1000.0 * 1.4;
        mp = (mpMaint + mpMilk) / 1000.0;

        const caMaint = 0.031 * bw;
        const caMilk = 1.22 * milk;
        ca = (caMaint + caMilk) / 0.60;

        const pMaint = 0.018 * bw;
        const pMilk = 0.90 * milk;
        p = (pMaint + pMilk) / 0.70;
    } else if (catId === "dry_far_off") {
        dmi = bw * 0.0197;
        dmiNote = "Vaca Seca Lejana (NASEM 2021: 1.97% del Peso Vivo).";
        nel = 0.080 * Math.pow(bw, 0.75) * 1.25;
        mp = (3.8 * Math.pow(bw, 0.75) * 1.2) / 1000.0;
        ca = (0.031 * bw + 12.0) / 0.60;
        p = (0.018 * bw + 8.0) / 0.70;
    } else if (catId === "dry_close_up") {
        dmi = bw * 0.0170;
        dmiNote = "Vaca Preparto Close-Up (NASEM 2021 Cap. 12: 1.70% Peso Vivo).";
        nel = 0.080 * Math.pow(bw, 0.75) * 1.40;
        mp = (3.8 * Math.pow(bw, 0.75) * 1.4) / 1000.0;
        ca = (0.031 * bw + 18.0) / 0.60;
        p = (0.018 * bw + 10.0) / 0.70;
    } else if (catId === "growing_heifer") {
        dmi = bw * 0.0245;
        dmiNote = "Novilla en Crecimiento (NASEM 2021 Cap. 14: 2.45% Peso Vivo).";
        nel = 0.080 * Math.pow(bw, 0.75) + adg * 3.5;
        mp = (3.8 * Math.pow(bw, 0.75) + adg * 220) / 1000.0;
        ca = (0.031 * bw + adg * 15) / 0.60;
        p = (0.018 * bw + adg * 8) / 0.70;
    } else if (catId === "steer_finishing") {
        dmi = bw * 0.0265;
        dmiNote = "Novillo de Engorde / Ceba (Oklahoma / NASEM Beef: 2.65% Peso Vivo).";
        nel = 0.077 * Math.pow(bw, 0.75) + adg * 3.8;
        mp = (3.4 * Math.pow(bw, 0.75) + adg * 200) / 1000.0;
        ca = (0.025 * bw + adg * 14) / 0.50;
        p = (0.016 * bw + adg * 7) / 0.60;
    } else if (catId === "cow_lactating_beef") {
        dmi = bw * 0.023 + milk * 0.10;
        dmiNote = "Vaca de Cría en Lactancia (Oklahoma / NASEM Beef).";
        nel = 0.077 * Math.pow(bw, 0.75) + milk * 0.70;
        mp = (3.4 * Math.pow(bw, 0.75) + milk * 30) / 1000.0;
        ca = (0.025 * bw + milk * 1.2) / 0.50;
        p = (0.016 * bw + milk * 0.9) / 0.60;
    } else if (catId === "bull_breeding") {
        dmi = bw * 0.0210;
        dmiNote = "Toro Reproductor (Oklahoma / NASEM Beef: 2.10% Peso Vivo).";
        nel = 0.077 * Math.pow(bw, 0.75) * 1.2;
        mp = (3.4 * Math.pow(bw, 0.75) * 1.2) / 1000.0;
        ca = (0.025 * bw + 10.0) / 0.50;
        p = (0.016 * bw + 6.0) / 0.60;
    } else {
        dmi = bw * 0.023;
        dmiNote = "Requerimiento Estándar Rumiante.";
        nel = 0.080 * Math.pow(bw, 0.75);
        mp = (3.8 * Math.pow(bw, 0.75)) / 1000.0;
        ca = (0.031 * bw) / 0.60;
        p = (0.018 * bw) / 0.70;
    }

    if (resultsContainer) {
        if (currentViewMode === "technical") {
            resultsContainer.innerHTML = `
                <div class="results-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                    <!-- CARD 1: CONSUMO DE MATERIA SECA (DMI) -->
                    <div class="result-box" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); border-left: 6px solid #10b981; padding: 18px; border-radius: 16px; box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25); color: #ffffff;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: #ecfdf5; letter-spacing: 0.5px; text-transform: uppercase;">CONSUMO DE MATERIA SECA (DMI)</div>
                        <div style="font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-top: 6px; line-height: 1.2;">
                            ${dmi.toFixed(2)} kg MS/día <span style="font-size: 1.15rem; font-weight: 700;">(${((dmi / bw) * 100).toFixed(2)}% BW)</span>
                        </div>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.25); margin: 12px 0 10px 0;">
                        <div style="font-size: 0.82rem; color: #d1fae5; line-height: 1.4;">${dmiNote}</div>
                    </div>

                    <!-- CARD 2: ENERGÍA NETA DE LACTANCIA (NEL) -->
                    <div class="result-box" style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); border-left: 6px solid #3b82f6; padding: 18px; border-radius: 16px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25); color: #ffffff;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: #eff6ff; letter-spacing: 0.5px; text-transform: uppercase;">ENERGÍA NETA DE LACTANCIA (NEL)</div>
                        <div style="font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-top: 6px; line-height: 1.2;">
                            ${nel.toFixed(2)} Mcal/día <span style="font-size: 1.15rem; font-weight: 700;">(${(nel / dmi).toFixed(2)} Mcal/kg MS)</span>
                        </div>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.25); margin: 12px 0 10px 0;">
                        <div style="font-size: 0.82rem; color: #dbeafe; line-height: 1.4;">Energía Neta NASEM 2021 para mantenimiento y producción.</div>
                    </div>

                    <!-- CARD 3: PROTEÍNA METABOLIZABLE (MP) -->
                    <div class="result-box" style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); border-left: 6px solid #8b5cf6; padding: 18px; border-radius: 16px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25); color: #ffffff;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: #f5f3ff; letter-spacing: 0.5px; text-transform: uppercase;">PROTEÍNA METABOLIZABLE (MP)</div>
                        <div style="font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-top: 6px; line-height: 1.2;">
                            ${(mp * 1000).toFixed(0)} g MP/día <span style="font-size: 1.15rem; font-weight: 700;">(${((mp / dmi) * 100).toFixed(2)}% MP en MS)</span>
                        </div>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.25); margin: 12px 0 10px 0;">
                        <div style="font-size: 0.82rem; color: #ede9fe; line-height: 1.4;">Requerimiento de aminoácidos absorbidos en intestino delgado.</div>
                    </div>

                    <!-- CARD 4: CALCIO (CA) -->
                    <div class="result-box" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); border-left: 6px solid #f59e0b; padding: 18px; border-radius: 16px; box-shadow: 0 4px 14px rgba(217, 119, 6, 0.25); color: #ffffff;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: #fffbeb; letter-spacing: 0.5px; text-transform: uppercase;">CALCIO (CA)</div>
                        <div style="font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-top: 6px; line-height: 1.2;">
                            ${ca.toFixed(1)} g Ca/día <span style="font-size: 1.15rem; font-weight: 700;">(${(ca / dmi).toFixed(1)} g/kg MS)</span>
                        </div>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.25); margin: 12px 0 10px 0;">
                        <div style="font-size: 0.82rem; color: #fef3c7; line-height: 1.4;">NASEM 2021 Cap. 7. Coeficiente de absorción ruminal/intestinal.</div>
                    </div>

                    <!-- CARD 5: FÓSFORO (P) -->
                    <div class="result-box" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border-left: 6px solid #0ea5e9; padding: 18px; border-radius: 16px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25); color: #ffffff;">
                        <div style="font-size: 0.82rem; font-weight: 700; color: #f0f9ff; letter-spacing: 0.5px; text-transform: uppercase;">FÓSFORO (P)</div>
                        <div style="font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-top: 6px; line-height: 1.2;">
                            ${p.toFixed(1)} g P/día <span style="font-size: 1.15rem; font-weight: 700;">(${(p / dmi).toFixed(1)} g/kg MS)</span>
                        </div>
                        <hr style="border: 0; border-top: 1px solid rgba(255, 255, 255, 0.25); margin: 12px 0 10px 0;">
                        <div style="font-size: 0.82rem; color: #e0f2fe; line-height: 1.4;">Requerimiento esencial para metabolismo energético y mineral.</div>
                    </div>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = `
                <div class="practical-card" style="border-left-color: var(--primary-emerald); background: #f0fdf4; border: 1.5px solid #a7f3d0; border-radius: 16px; padding: 20px;">
                    <div class="practical-title" style="font-size: 1.15rem; font-weight: 700; color: #065f46;">🌾 Resumen Práctico de Alimentación Recomendado</div>
                    <div class="practical-stats" style="margin-top: 12px; display: grid; gap: 10px;">
                        <div class="practical-stat-item" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 8px;">Consumo de Alimento Seco (MS): <strong style="color: #047857;">${dmi.toFixed(1)} kg MS/día</strong></div>
                        <div class="practical-stat-item" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 8px;">Densidad de Energía: <strong style="color: #1d4ed8;">${(nel / dmi).toFixed(2)} Mcal/kg MS</strong></div>
                        <div class="practical-stat-item" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 8px;">Proteína Metabolizable Total: <strong style="color: #6d28d9;">${(mp * 1000).toFixed(0)} g MP/día</strong></div>
                        <div class="practical-stat-item" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 8px;">Minerales Principales: <strong style="color: #b45309;">${ca.toFixed(1)}g Ca | ${p.toFixed(1)}g P por día</strong></div>
                    </div>
                    <p style="margin-top: 12px; font-size: 0.9rem; color: #475569; line-height: 1.4;">Valores ajustados según modelo científico NASEM 2021 (8ª Edición). Formular ración TMR para cubrir ${dmi.toFixed(1)} kg MS.</p>
                </div>
            `;
        }
    }

    renderCornellModule(dmi, bw, milk, fat, protein);
    updateMineralTablesAndHighlight();
}
