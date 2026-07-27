/**
 * RolanNutriPro - Cornell CNCPS v6.5 / v7.0 Transition & Rumen Health Module
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

function renderCornellModule() {
    cornellModuleContainer = cornellModuleContainer || document.getElementById("cornell-module-container");
    if (!cornellModuleContainer || !nutrientDB || !nutrientDB.cornell_cncps_2023) return;
    const cornell = nutrientDB.cornell_cncps_2023;
    cornellModuleContainer.innerHTML = `
        <div class="practical-card" style="border-left-color: var(--primary-emerald); background: #f8fafc; border: 1px solid #e2e8f0; width: 100%; border-radius: 16px; padding: 20px;">
            <h4 style="color:#0f172a; font-weight:700; font-size:1.15rem; margin-top:0;">Guías CNCPS v6.5 / v7.0 de Nutrición de Transición y Salud Ruminal</h4>
            <div class="practical-stats" style="margin-top:12px; display: grid; gap: 8px;">
                <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Metionina Metabolizable (MP Met): <strong style="color:#047857;">${cornell.amino_acid_targets.methionine_mp}</strong></div>
                <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Lisina Metabolizable (MP Lys): <strong style="color:#047857;">${cornell.amino_acid_targets.lysine_mp}</strong></div>
                <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Relación Ideal Lys : Met: <strong style="color:#047857;">${cornell.amino_acid_targets.ideal_lys_met_ratio}</strong></div>
                <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Fibra Efectiva Mínima (peNDF Penn State): <strong style="color:#b45309;">${cornell.rumen_health_guidelines.peNDF_min}</strong></div>
                <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1; padding: 8px 12px; border-radius: 8px;">Límite Máximo de Almidón Ruminal: <strong style="color:#b45309;">${cornell.rumen_health_guidelines.starch_max}</strong></div>
            </div>
        </div>
    `;
}
