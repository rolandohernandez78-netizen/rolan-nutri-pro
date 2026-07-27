window.NUTRIENT_DB = {
  "metadata": {
    "title": "Base de Datos Nutricional RolanNutriPro",
    "author": "Rolando Hernández Mora, MV MSc Nutrición Animal",
    "units": "Sistema Métrico (kg, Mcal/kg MS, g/día, mg/kg MS ppm)",
    "standards": [
      "NASEM 2021 8ª Ed.",
      "Cornell CNCPS 2023",
      "Univ. Illinois 2025",
      "Penn State 2025",
      "Tecnigrasas 2018"
    ]
  },
  "species_profiles": {
    "dairy_nasem": {
      "name": "Ganado Lechero (NASEM 2021)",
      "categories": [
        {
          "id": "lactating_primiparous",
          "name": "Vaca Primípara en Lactancia (1er Parto)",
          "bw_kg": 600,
          "milk_kg": 30,
          "fat_pct": 3.8,
          "protein_pct": 3.2,
          "dim": 60
        },
        {
          "id": "lactating_multiparous",
          "name": "Vaca Multípara en Lactancia (2+ Partos)",
          "bw_kg": 650,
          "milk_kg": 38,
          "fat_pct": 3.7,
          "protein_pct": 3.2,
          "dim": 75
        },
        {
          "id": "dry_far_off",
          "name": "Vaca Seca Periodo Lejano (Far-Off Dry Cow)",
          "bw_kg": 680,
          "milk_kg": 0,
          "fat_pct": 0,
          "protein_pct": 0,
          "dim": 0
        },
        {
          "id": "dry_close_up",
          "name": "Vaca Seca Periodo Pre-parto (Close-Up Dry Cow)",
          "bw_kg": 680,
          "milk_kg": 0,
          "fat_pct": 0,
          "protein_pct": 0,
          "dim": 0
        },
        {
          "id": "growing_heifer",
          "name": "Vaquillona de Recría (Growth Heifer)",
          "bw_kg": 350,
          "adg_kg": 0.85,
          "milk_kg": 0
        }
      ]
    },
    "beef_oklahoma": {
      "name": "Ganado de Carne (Oklahoma / NASEM Beef)",
      "categories": [
        {
          "id": "steer_finishing",
          "name": "Novillo en Ceba / Finalización",
          "bw_kg": 450,
          "adg_kg": 1.2
        },
        {
          "id": "cow_lactating_beef",
          "name": "Vaca de Cría en Lactancia (Carne)",
          "bw_kg": 500,
          "milk_kg": 10
        },
        {
          "id": "bull_breeding",
          "name": "Toro Reproductor",
          "bw_kg": 800,
          "adg_kg": 0.2
        }
      ]
    }
  },
  "mineral_catalog": {
    "Ca": {
      "symbol": "Ca",
      "name": "Calcio",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 6.5,
      "max_tolerable": 1.5,
      "function": "Estructura ósea, contracción muscular, secreción de leche y función neuromuscular.",
      "deficiency": "Hipocalcemia (fiebre de leche), tetania, debilidad de extremidades y retención de placenta."
    },
    "P": {
      "symbol": "P",
      "name": "Fósforo",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 3.8,
      "max_tolerable": 0.7,
      "function": "Metabolismo energético (ATP), matriz ósea, membranas celulares (fosfolípidos) y crecimiento ruminal.",
      "deficiency": "Pica (depravación del apetito), baja fertilidad, fragilidad ósea y caída de producción de leche."
    },
    "Mg": {
      "symbol": "Mg",
      "name": "Magnesio",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 2.2,
      "max_tolerable": 0.6,
      "function": "Cofactor enzimático, equilibrio neuromuscular y prevención de tetania de los pastos.",
      "deficiency": "Tetania hipomagnesémica (tetania de hierba), hiperexcitabilidad y temblores musculares."
    },
    "K": {
      "symbol": "K",
      "name": "Potasio",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 12.0,
      "max_tolerable": 2.0,
      "function": "Principal catión intracelular, presión osmótica, equilibrio ácido-base y amortiguación del estrés por calor.",
      "deficiency": "Reducción del consumo de alimento, debilidad muscular y depresión de grasa en leche."
    },
    "Na": {
      "symbol": "Na",
      "name": "Sodio",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 2.2,
      "max_tolerable": 1.0,
      "function": "Balance osmótico extracelular, transporte de aminoácidos y glucosa.",
      "deficiency": "Ávidamente busca sal, deshidratación y severa caída en el consumo DMI."
    },
    "Cl": {
      "symbol": "Cl",
      "name": "Cloro",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 2.8,
      "max_tolerable": 1.0,
      "function": "Secreción de ácido clorhídrico abomasal (HCl) y balance aniónico-catiónico.",
      "deficiency": "Alcalosis metabólica e hipocloremia."
    },
    "S": {
      "symbol": "S",
      "name": "Azufre",
      "category": "Macromineral",
      "unit": "g/kg MS",
      "req_per_kg_dm": 2.0,
      "max_tolerable": 0.4,
      "function": "Síntesis ruminal de aminoácidos azufrados (Metionina y Cisteína) y vitaminas (Tiamina, Biotina).",
      "deficiency": "Caída en síntesis de proteína microbiana ruminal y pérdida de digestibilidad de la fibra."
    },
    "Fe": {
      "symbol": "Fe",
      "name": "Hierro",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 25,
      "max_tolerable": 500,
      "function": "Transporte de oxígeno (hemoglobina y mioglobina) y citocromos respiratorios.",
      "deficiency": "Anemia microcítica hipocrómica, palidez de mucosas y letargia."
    },
    "Zn": {
      "symbol": "Zn",
      "name": "Cinc",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 55,
      "max_tolerable": 500,
      "function": "Integridad epitelial de pezuñas, queratinización del esfínter del pezón, inmunidad y división celular.",
      "deficiency": "Paraqueratosis, lesiones podales (cojeras), alto recuento de células somáticas (RCS) y mala cicatrización."
    },
    "Cu": {
      "symbol": "Cu",
      "name": "Cobre",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 15,
      "max_tolerable": 40,
      "function": "Síntesis de hemoglobina, queratina, elastina, pigmentación del pelo y respuesta inmune.",
      "deficiency": "Despigmentación del pelo alrededor de ojos (gafas), anemia, diarreas y fracturas de huesos largos."
    },
    "Mn": {
      "symbol": "Mn",
      "name": "Manganeso",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 40,
      "max_tolerable": 1000,
      "function": "Desarrollo de la matriz ósea y cartilaginosa, síntesis de condroitín sulfato y función ovárica.",
      "deficiency": "Deformaciones esqueléticas en becerras (patas corvas), celos silenciosos y quistes ováricos."
    },
    "I": {
      "symbol": "I",
      "name": "Yodo",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 0.6,
      "max_tolerable": 5,
      "function": "Síntesis de hormonas tiroideas (T3 y T4) y regulación del metabolismo basal.",
      "deficiency": "Bocio (hipertrofia tiroidea), terneros débiles o sin pelo al nacimiento y reabsorciones embrionarias."
    },
    "Se": {
      "symbol": "Se",
      "name": "Selenio",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 0.3,
      "max_tolerable": 5,
      "function": "Antioxidante celular (Glutatión Peroxidasa GSH-Px) en sinergia con Vitamina E, retención placentaria.",
      "deficiency": "Enfermedad del músculo blanco (distrofia muscular nutricional), alta incidencia de retención de placenta y mastitis."
    },
    "Co": {
      "symbol": "Co",
      "name": "Cobalto",
      "category": "Micromineral",
      "unit": "mg/kg MS (ppm)",
      "req_per_kg_dm": 0.2,
      "max_tolerable": 25,
      "function": "Precursor exclusivo para la síntesis ruminal de Vitamina B12 (Cobalamina) y gluconeogénesis a partir de propionato.",
      "deficiency": "Inapetencia severa, anemia perniciosa, emaciación y falla en el metabolismo de glucosa."
    }
  },
  "cornell_cncps_2023": {
    "amino_acid_targets": {
      "lysine_mp": "6.9 - 7.2% del MP Total",
      "methionine_mp": "2.6 - 2.8% del MP Total",
      "ideal_lys_met_ratio": "2.7 : 1.0"
    },
    "rumen_health_guidelines": {
      "peNDF_min": ">= 21.0% de la MS (Caja Penn State)",
      "starch_max": "24.0 - 28.0% de la MS"
    }
  },
  "comparative_presets": [
    {
      "name": "Vaca Alta Producción (38 kg Leche)",
      "bw_kg": 650,
      "dmi_kg": 26.5,
      "energy_mcal": 44.5,
      "mp_g": 2850
    },
    {
      "name": "Vaca Media Producción (25 kg Leche)",
      "bw_kg": 600,
      "dmi_kg": 21.0,
      "energy_mcal": 33.0,
      "mp_g": 2100
    },
    {
      "name": "Vaca Seca Pre-parto (Close-Up)",
      "bw_kg": 680,
      "dmi_kg": 11.6,
      "energy_mcal": 15.5,
      "mp_g": 1200
    },
    {
      "name": "Novillo en Ceba (1.2 kg/d ADG)",
      "bw_kg": 450,
      "dmi_kg": 10.6,
      "energy_mcal": 18.2,
      "mp_g": 950
    }
  ]
};

/* === MODULE: helpers.js === */
/**
 * RolanNutriPro - Helpers & Utility Functions
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

function removeAccents(str) {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}


/* === MODULE: nasem_calculator.js === */
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


/* === MODULE: minerals_engine.js === */
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


/* === MODULE: cornell_cncps.js === */
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


/* === MODULE: presets_benchmarks.js === */
/**
 * RolanNutriPro - Comparative Presets & Benchmarks Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

function renderPresetsTable() {
    presetTableHead = presetTableHead || document.querySelector("#preset-table thead");
    presetTableBody = presetTableBody || document.querySelector("#preset-table tbody");
    if (!presetTableHead || !presetTableBody || !nutrientDB || !nutrientDB.comparative_presets) return;

    presetTableHead.innerHTML = `
        <tr>
            <th>Perfil del Animal</th>
            <th>Peso Vivo (kg)</th>
            <th>DMI Est. (kg MS/d)</th>
            <th>Energía (Mcal/d)</th>
            <th>MP Req. (g/d)</th>
        </tr>
    `;

    presetTableBody.innerHTML = "";
    nutrientDB.comparative_presets.forEach(preset => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${preset.name}</strong></td>
            <td>${preset.bw_kg} kg</td>
            <td><strong>${preset.dmi_kg} kg</strong></td>
            <td>${preset.energy_mcal} Mcal</td>
            <td><strong>${preset.mp_g} g</strong></td>
        `;
        presetTableBody.appendChild(row);
    });
}


/* === MODULE: qa_assistant.js === */
/**
 * RolanNutriPro - AI Nutrition Q&A Knowledge Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

const STOP_WORDS = new Set([
    "de", "del", "la", "el", "en", "con", "sin", "por", "para", "que", "un", "una", 
    "los", "las", "como", "cual", "cuanto", "cuanta", "es", "son", "sobre", "mas", 
    "menos", "dame", "busca", "dime", "y", "o", "a", "al", "mi", "mis", "tu", "tus", 
    "su", "sus", "ver", "vaca", "vacas", "ganado", "animal", "dame", "dar", "hacer"
]);

const qaKnowledgeBase = [
    {
        id: "dmi",
        keywords: ["dmi", "materia seca", "consumo", "alimento", "cuanto come", "ingesta", "kg ms", "2-1", "souza"],
        title: "🌾 Consumo de Materia Seca (DMI) en Ganado Lechero (NASEM 2021 Ecuación 2-1)",
        badge: "NASEM 2021 (Cap. 2)",
        formula: "DMI (kg/d) = [3.75 + (0.022 * BW) + (0.305 * FCM 4.0%)] * Factor Lag DIM",
        body: `<b>Fórmula NASEM 2021 (Capítulo 2, Ecuación 2-1 de Souza et al., 2019):</b>
<br>• <b>4.0% FCM:</b> Leche Corregida por Grasa al 4.0% = <code>Leche * (0.4 + 0.15 * Grasa%)</code>.
<br>• <b>Factor Lag Lactancia:</b> <code>1 - exp(-0.192 * (WOL + 3.67))</code>.
<br>• <b>DMI Multíparas (2+ partos):</b> Base completa de 3.75 kg/d + 0.022*BW + 0.305*FCM4.0 (~4.20% Peso Vivo en pico).
<br>• <b>DMI Primíparas (1er parto):</b> Factor de ajuste del 88% (~3.43% Peso Vivo en pico) por menor capacidad de rumen.
<br>• <b>Vacas Secas Lejanas:</b> 1.97% del Peso Vivo (~12.8 - 13.4 kg MS/d).
<br>• <b>Vacas Preparto (Close-Up):</b> 1.70% del Peso Vivo (~11.0 - 11.5 kg MS/d).`,
        sources: "NASEM 2021 8ª Edición • Capítulo 2 (Pág. 24) • de Souza et al. (2019)"
    },
    {
        id: "water",
        keywords: ["agua", "bebida", "beber", "consumo de agua", "litros", "hidratacion", "illinois", "cardoso", "wetherly"],
        title: "💧 Consumo de Agua de Bebida (Ecuación Universidad de Illinois 2025)",
        badge: "Univ. Illinois (Cardoso et al.)",
        formula: "Consumo Agua (L/día) = (DMI * 1.58) + (Leche kg * 0.90) + (Sodio g * 0.05) + (Temp °C * 1.20) + 15.6",
        body: `<b>Ecuación Científica de Predicción de Agua (Cardoso & Wetherly, Univ. Illinois 2025):</b>
<br>• Una vaca lechera de alta producción (35 kg leche, 24 kg DMI) consume entre <b>115 y 145 Litros de agua limpia al día</b>.
<br>• El consumo de agua aumenta en un <b>1.2 Litros por cada °C adicional</b> por encima de los 20°C de temperatura ambiente.
<br>• Debe garantizarse al menos <b>10 cm de espacio lineal de bebedero por vaca</b> con flujo de agua >= 20 L/minuto.`,
        sources: "University of Illinois Dairy Extension 2025 • Dr. Felipe Cardoso Research Lab"
    },
    {
        id: "dcad",
        keywords: ["dcad", "bac", "preparto", "hipocalcemia", "fiebre de leche", "aniones", "cationes", "cloruro", "sulfato", "amonio"],
        title: "⚡ Balance Catiónico-Aniónico Dietario (DCAD / BAC) en Preparto",
        badge: "NASEM 2021 (Cap. 12)",
        formula: "DCAD (mEq/100g MS) = (Na + K) - (Cl + S) | Meta Preparto: -10 a -15 mEq/100g MS",
        body: `<b>Estrategia de Acidificación Preparto para Prevención de Hipocalcemia Subclínica:</b>
<br>• Al reducir el DCAD a <b>-10 a -15 mEq/100g MS</b> durante los últimos 21 días de gestación, se induce una acidosis metabólica compensada.
<br>• Esto sensibiliza los receptores tisulares a la PTH (Paratohormona), estimulando la resorción ósea de Calcio y la síntesis renal de 1,25-(OH)2 Vitamina D3.
<br>• <b>Monitoreo Práctico:</b> El pH urinario de las vacas preparto debe ubicarse entre <b>6.0 y 6.5</b> (Holsteins) o <b>5.8 y 6.2</b> (Jerseys).`,
        sources: "NASEM 2021 8ª Edición • Capítulo 12: Transition Cows • Dr. Jesse Goff DCAD Protocol"
    },
    {
        id: "aminoacids",
        keywords: ["aminoacidos", "proteina", "lisina", "metionina", "lys", "met", "relacion", "cornell", "cncps", "bypass"],
        title: "🧬 Aminoácidos Limitantes: Lisina y Metionina Metabolizable (Cornell CNCPS v6.5/v7.0)",
        badge: "Cornell CNCPS v7.0",
        formula: "Relación Óptima MP Lys : MP Met = 2.70 : 1.00 (6.9% Lys MP : 2.6% Met MP)",
        body: `<b>Modelo de Proteína Metabolizable y Aminoácidos de Precisión (Cornell University):</b>
<br>• La <b>Metionina (Met)</b> y la <b>Lisina (Lys)</b> son los dos primeros aminoácidos co-limitantes para la síntesis de proteína láctea en la glándula mamaria.
<br>• <b>Meta CNCPS:</b> 6.9 - 7.2% de MP como Lisina y 2.6 - 2.8% de MP como Metionina.
<br>• Balancear estos aminoácidos permite reducir la Proteína Cruda (CP) total de la ración al <b>15.0 - 15.5%</b>, reduciendo la excreción de nitrógeno ureico (MUN) y ahorrando costo energético de excreción hepática de urea.`,
        sources: "Cornell University CNCPS v6.5 / v7.0 Manual • Dr. Mike Van Amburgh Protein Research"
    },
    {
        id: "goldilocks",
        keywords: ["goldilocks", "dieta seca", "vaca seca", "paja", "fibra", "volumen", "drant"],
        title: "🌾 Dieta de Alta Fibra / Control de Energía en Vacas Secas (Dieta Goldilocks / Dr. Gordie Jones)",
        badge: "Univ. de Illinois & Miner Institute",
        formula: "Energía Secas: 1.30 - 1.35 Mcal NEL/kg MS | NDF Forraje: >= 40-50% de la MS",
        body: `<b>Protocolo de Nutrición de Vacas Secas de Ración Única (Goldilocks Dry Cow Diet):</b>
<br>• Incorpora entre <b>30% y 40% de paja de trigo o gramínea picada a 3-5 cm</b> diluida con silaje de maíz y fuente proteica.
<br>• Mantiene el rumen lleno con volumen físico alto sin sobrepasar los requerimientos de energía (previniendo sobrecondición BCS > 3.5 al parto).
<br>• Reduce drásticamente la incidencia de desplazamiento de abomaso (DA), cetosis metabólica y retención de placenta postparto.`,
        sources: "Miner Institute Dairy Research • Dr. Gordie Jones & Dr. Mike Hutjens Goldilocks Concept"
    },
    {
        id: "undf",
        keywords: ["undf", "undf240", "fibra no digerible", "digestibilidad", "grant", "miner"],
        title: "🌿 Fibra Detergente Neutro Indigestible a las 240 Horas (uNDF240h)",
        badge: "Miner Institute (Dr. Rick Grant)",
        formula: "uNDF240h Objetivo Dietario: 8.5% - 10.0% del Consumo Total de MS",
        body: `<b>Fracción de Fibra Indigestible y Dinámica de Llena del Rumen (Dr. Rick Grant, Miner Institute):</b>
<br>• La fracción <b>uNDF240h</b> mide el residuo indigestible de la fibra forrajera tras 240 horas de fermentación in vitro.
<br>• Determina el tiempo de permanencia de la masa forrajera en el rumen y la tasa máxima de pasaje.
<br>• Si el consumo de uNDF240h supera el <b>0.40% - 0.45% del Peso Vivo</b>, se produce una limitación física de consumo DMI por sobrellenado ruminal.`,
        sources: "Miner Institute Forage Research • Dr. Rick Grant & Cumberland Valley Analytical Services"
    },
    {
        id: "fat",
        keywords: ["grasa", "acidos grasos", "oleico", "palmitico", "estearico", "tecnigrasas", "c16", "c18", "bypass fat"],
        title: "🥑 Nutrición con Ácidos Grasos Esenciales y Grasas Inertes (Tecnigrasas SAS)",
        badge: "Tecnigrasas SAS (MV MSc Rolando Hernández)",
        formula: "Grasa Total Dietaria Max: 5.5% - 6.5% MS | Ácido Palmítico C16:0 & Oleico C18:1",
        body: `<b>Perfil de Ácidos Grasos para Rendimiento Lácteo y Fertilidad (MV MSc Rolando Hernández Mora):</b>
<br>• <b>Ácido Palmítico (C16:0 >= 80%):</b> Incrementa directamente la síntesis de grasa en leche y la masa de grasa en tanque. Ideal en lactancia media y tardía.
<br>• <b>Ácido Oleico (C18:1) y Calcio Sales:</b> Mejora la digestibilidad total de la grasa, la absorción intestinal y estimula el desarrollo folicular ovariano (progesterona) mejorando la tasa de concepción en primeros 90 días.`,
        sources: "Tecnigrasas SAS Technical Bulletin 2018 • Rolando Hernández Mora MSc Animal Nutrition"
    },
    {
        id: "efficiency",
        keywords: ["eficiencia", "fe", "conversion", "leche por ms", "hutjens", "penn state", "feed efficiency"],
        title: "🥛 Eficiencia Alimenticia (FE = FCM / DMI) & Metas del Hato (Penn State University)",
        badge: "Penn State University (Dr. Mike Hutjens)",
        formula: "FE (kg Leche / kg MS) = Leche Corregida por Grasa al 3.5% (FCM) / Consumo DMI (kg/d)",
        body: `<b>Penn State University Dairy Extension (Dr. Mike Hutjens):</b>
<br>Mide la conversión biológica del alimento consumido en leche corregida por grasa (FCM 3.5%).
<br>• <b>Meta Promedio del Hato:</b> >= 1.50 kg Leche / kg DMI.
<br>• <b>Pico de Lactancia (30 - 90 DEL):</b> 1.60 - 1.85.
<br>• <b>Rentabilidad:</b> Un incremento de +0.10 unidades en FE equivale a +1.5 a +2.0 kg de leche adicional por vaca/día sin gasto extra en forraje o concentrado.`,
        sources: "Penn State University Extension • Dr. Mike Hutjens Dairy Course"
    }
];

function searchNutritionQA(query) {
    qaAnswerContainer = qaAnswerContainer || document.getElementById("qa-answer-container");
    if (!query || !query.trim()) return;

    const rawQuery = query.trim();
    const cleanQuery = removeAccents(rawQuery);
    const rawQueryWords = cleanQuery.split(/[^a-z0-9]+/).filter(w => w.length > 1);
    
    // Filter out Spanish stop words
    const queryWords = rawQueryWords.filter(w => !STOP_WORDS.has(w) && w.length >= 2);

    let matchedItem = null;
    let maxHits = 0;

    qaKnowledgeBase.forEach(item => {
        let hits = 0;

        // 1. Keyword Exact and Partial Matching
        item.keywords.forEach(kw => {
            const normKw = removeAccents(kw);

            if (cleanQuery === normKw) {
                hits += 100;
            } else if (cleanQuery.includes(normKw) && normKw.length >= 3) {
                hits += 50;
            } else if (normKw.includes(cleanQuery) && cleanQuery.length >= 3) {
                hits += 40;
            }

            queryWords.forEach(qWord => {
                if (qWord === normKw) {
                    hits += 35;
                } else if (normKw.split(/\s+/).includes(qWord)) {
                    hits += 25;
                } else if (normKw.length >= 4 && qWord.length >= 4 && (normKw.startsWith(qWord) || qWord.startsWith(normKw))) {
                    hits += 15;
                }
            });
        });

        // 2. Title Match
        const normTitle = removeAccents(item.title);
        queryWords.forEach(qWord => {
            if (qWord.length >= 3 && normTitle.includes(qWord)) {
                hits += 10;
            }
        });

        // 3. Body Match
        const normBody = removeAccents(item.body);
        queryWords.forEach(qWord => {
            if (qWord.length >= 4 && normBody.includes(qWord)) {
                hits += 2;
            }
        });

        if (hits > maxHits) {
            maxHits = hits;
            matchedItem = item;
        }
    });

    const CONFIDENCE_THRESHOLD = 25;

    if (qaAnswerContainer) {
        qaAnswerContainer.style.display = "block";
        if (matchedItem && maxHits >= CONFIDENCE_THRESHOLD) {
            qaAnswerContainer.innerHTML = `
                <div class="qa-answer-card" style="background:#ffffff; border-left:5px solid var(--primary-emerald); border:1px solid #cbd5e1; padding:18px; border-radius:12px;">
                    <div class="qa-answer-title" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <span style="font-size:1.15rem; font-weight:700; color:#0f172a;">${matchedItem.title}</span>
                        <span class="badge-source" style="background:#ecfdf5; color:#047857; border-color:#a7f3d0;">${matchedItem.badge}</span>
                    </div>
                    <div class="qa-formula-box" style="background:#f8fafc; border:1px dashed #059669; border-radius:8px; padding:10px 14px; margin:10px 0; color:#065f46; font-weight:700;">📐 ${matchedItem.formula}</div>
                    <div class="qa-answer-body" style="font-size:0.95rem; line-height:1.6; color:#1e293b;">${matchedItem.body}</div>
                    <div class="qa-sources-footer" style="margin-top:12px; padding-top:10px; border-top:1px solid #e2e8f0; font-size:0.84rem; color:#475569;">📖 <strong style="color:#0f172a;">Fuente Autorizada:</strong> ${matchedItem.sources}</div>
                </div>
            `;
        } else {
            qaAnswerContainer.innerHTML = `
                <div class="qa-answer-card out-of-scope" style="background:#ffffff; border-left:5px solid #f59e0b; border:1px solid #cbd5e1; padding:18px; border-radius:12px;">
                    <div class="qa-answer-title" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <span style="font-size:1.15rem; font-weight:700; color:#0f172a;">ℹ️ Consulta fuera del alcance de la Base de Datos Nutricional</span>
                        <span class="badge-source" style="background:#fef3c7; color:#b45309; border-color:#fde68a;">Fuera de Ámbito</span>
                    </div>
                    <div class="qa-answer-body" style="font-size:0.95rem; line-height:1.6; color:#1e293b;">
                        La pregunta realizada (<em>"${rawQuery}"</em>) no coincide con los temas nutricionales de rumiantes registrados en nuestra base de datos.
                        <br><br>
                        <strong style="color:#0f172a;">Te sugerimos realizar consultas sobre:</strong>
                        <ul style="margin-top:8px; padding-left:20px; color:#1e293b;">
                            <li>Proteína Metabolizable (MP), CP, RUP, RDP y Aminoácidos (Lys:Met)</li>
                            <li>Energía Neta (NEL, NEm, NEg), TDN y Almidón Ruminal</li>
                            <li>Calcio (Ca), Fósforo (P), Magnesio y Requerimientos Minerales (NASEM Cap. 7)</li>
                            <li>Consumo de Materia Seca (DMI) y Ecuación NASEM 2021 Eq. 2-1</li>
                            <li>Balance Catiónico-Aniónico (DCAD / BAC) en Preparto</li>
                            <li>Consumo de Agua de Bebida (Ecuación Illinois Wetherly & Cardoso)</li>
                            <li>Eficiencia Alimenticia FE (Metas Penn State Dr. Mike Hutjens)</li>
                            <li>Ácidos Grasos Esenciales Omega-6 y Omega-3 (Tecnigrasas MV MSc Rolando Hernández)</li>
                        </ul>
                    </div>
                </div>
            `;
        }
    }
}


/* === MODULE: mascot_audio.js === */
/**
 * RolanNutriPro - Mascot Animation & Audio Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

let epidemicCowAudio = null;

function playRealisticCowMoo() {
    try {
        if (!epidemicCowAudio) {
            epidemicCowAudio = new Audio("audio/epidemic_cow_moo.mp3");
        }
        if (epidemicCowAudio) {
            epidemicCowAudio.currentTime = 0;
            epidemicCowAudio.play().catch(() => {
                playSynthesizedCowMoo();
            });
        } else {
            playSynthesizedCowMoo();
        }
    } catch (e) {
        playSynthesizedCowMoo();
    }
}

function playSynthesizedCowMoo() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const startTime = ctx.currentTime;
        const duration = 1.4;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.01, startTime);
        masterGain.gain.linearRampToValueAtTime(0.45, startTime + 0.15);
        masterGain.gain.setValueAtTime(0.45, startTime + 0.9);
        masterGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        const osc1 = ctx.createOscillator();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(125, startTime);
        osc1.frequency.exponentialRampToValueAtTime(95, startTime + duration);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, startTime);
        filter.frequency.linearRampToValueAtTime(320, startTime + duration);

        osc1.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(ctx.destination);

        osc1.start(startTime);
        osc1.stop(startTime + duration);
    } catch (err) {
        console.warn("Audio Context initialization skipped:", err);
    }
}

function triggerMooAudio() {
    avatar = avatar || document.getElementById("holstein-cow-avatar");
    speechBubble = speechBubble || document.getElementById("mascot-speech-bubble");

    if (avatar) {
        avatar.style.transform = "scale(1.18) rotate(-4deg)";
        setTimeout(() => { avatar.style.transform = "scale(1)"; }, 450);
    }

    if (speechBubble) {
        const moos = ["¡Muuuu! 🐮", "¡Muuu Rumiando! 🌾", "¡Muuuu NASEM 2021! 📊", "¡Muuuu Balanceado! 🧪"];
        const randomMoo = moos[Math.floor(Math.random() * moos.length)];
        speechBubble.innerText = randomMoo;
        speechBubble.style.opacity = "1";
        speechBubble.style.transform = "translateY(0)";
        setTimeout(() => {
            speechBubble.style.opacity = "0";
            speechBubble.style.transform = "translateY(6px)";
        }, 2200);
    }

    playRealisticCowMoo();
}


/* === MODULE: main.js === */
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
let btnCalculate, btnTechView, btnPracticalView, resultsContainer;
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

    if (btnTechView) btnTechView.addEventListener("click", () => { currentViewMode = "technical"; if (btnTechView) btnTechView.classList.add("active"); if (btnPracticalView) btnPracticalView.classList.remove("active"); calculateRequirements(); });
    if (btnPracticalView) btnPracticalView.addEventListener("click", () => { currentViewMode = "practical"; if (btnPracticalView) btnPracticalView.classList.add("active"); if (btnTechView) btnTechView.classList.remove("active"); calculateRequirements(); });

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


