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

/**
 * RolanNutriPro - Core Application Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 * Standards: NASEM 2021 (8th Ed.), Cornell CNCPS 2023, Univ. Illinois 2025, Penn State 2025, Tecnigrasas 2018
 */

let nutrientDB = window.NUTRIENT_DB || null;
let currentViewMode = "technical"; // "technical" or "practical"
let activeSelectedMineral = "Ca"; // Default mineral selection

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Synchronous database initialization (Guarantees zero file:// CORS errors)
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
    const speciesSelect = document.getElementById("species-select");
    const categorySelect = document.getElementById("category-select");
    const bwInput = document.getElementById("bw-input");
    const milkInput = document.getElementById("milk-input");
    const fatInput = document.getElementById("fat-input");
    const proteinInput = document.getElementById("protein-input");
    const dimInput = document.getElementById("dim-input");
    const adgInput = document.getElementById("adg-input");

    const groupMilk = document.getElementById("group-milk");
    const groupFat = document.getElementById("group-fat");
    const groupProtein = document.getElementById("group-protein");
    const groupDim = document.getElementById("group-dim");
    const groupAdg = document.getElementById("group-adg");

    const btnCalculate = document.getElementById("btn-calculate");
    const btnTechView = document.getElementById("btn-tech-view");
    const btnPracticalView = document.getElementById("btn-practical-view");
    const resultsContainer = document.getElementById("results-container");

    const mineralTypeSelect = document.getElementById("mineral-type-select");
    const btnCalcMineral = document.getElementById("btn-calc-mineral");
    const mineralDetailsContainer = document.getElementById("mineral-details-container");
    const macroMineralTableBody = document.querySelector("#macro-mineral-table tbody");
    const microMineralTableBody = document.querySelector("#micro-mineral-table tbody");
    const mineralAnimalBadge = document.getElementById("mineral-animal-badge");

    const cornellModuleContainer = document.getElementById("cornell-module-container");
    const presetTableHead = document.querySelector("#preset-table thead");
    const presetTableBody = document.querySelector("#preset-table tbody");

    // Mascot & Audio References
    const avatar = document.getElementById("holstein-cow-avatar");
    const mascotWrapper = document.getElementById("holstein-mascot-wrapper");
    const speechBubble = document.getElementById("mascot-speech-bubble");
    const cowIcon = document.getElementById("cow-brand-icon");

    // Q&A Assistant References
    const qaInput = document.getElementById("qa-input-text");
    const qaBtn = document.getElementById("btn-submit-qa");
    const qaAnswerContainer = document.getElementById("qa-answer-container");
    const chipBtns = document.querySelectorAll(".chip-btn");

    // Authentic Epidemic Sound Audio Player ("Bull, Scottish Highland, Moo" ca21b786-aa5b-450d-acc8-88d68ba5d135)
    const epidemicCowAudio = new Audio("audio/epidemic_cow_moo.mp3");

    function playRealisticCowMoo() {
        try {
            if (epidemicCowAudio) {
                epidemicCowAudio.currentTime = 0;
                epidemicCowAudio.play().catch(err => {
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
        } catch (e) {}
    }

    function triggerMooAudio() {
        playRealisticCowMoo();
        if (avatar) {
            avatar.classList.add("mooing");
            setTimeout(() => avatar.classList.remove("mooing"), 700);
        }
        if (speechBubble) {
            const prevText = speechBubble.innerHTML;
            speechBubble.innerHTML = "¡MUUUUUUU! 🐮👍 RolanNutriPro al 100%";
            setTimeout(() => { speechBubble.innerHTML = prevText; }, 2200);
        }
    }

    // Populate Categories Dropdown dynamically
    function populateCategories() {
        if (!nutrientDB || !speciesSelect || !categorySelect) return;
        const speciesKey = speciesSelect.value;
        const speciesData = nutrientDB.species_profiles[speciesKey];

        categorySelect.innerHTML = "";
        if (speciesData && speciesData.categories) {
            speciesData.categories.forEach((cat, index) => {
                const opt = document.createElement("option");
                opt.value = index;
                opt.textContent = cat.name;
                categorySelect.appendChild(opt);
            });
        }

        updateFormFieldsAndDefaults();
    }

    // Set Default Field Values and Field Visibility based on Selected Category
    function updateFormFieldsAndDefaults() {
        if (!nutrientDB || !speciesSelect || !categorySelect) return;
        const speciesKey = speciesSelect.value;
        const catIndex = parseInt(categorySelect.value) || 0;
        const speciesData = nutrientDB.species_profiles[speciesKey];
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
            if (cat.name.includes("Seca") || cat.name.includes("Vaquillona")) {
                if (groupMilk) groupMilk.classList.add("hidden");
                if (groupFat) groupFat.classList.add("hidden");
                if (groupProtein) groupProtein.classList.add("hidden");
                if (groupDim) groupDim.classList.add("hidden");
                if (cat.name.includes("Vaquillona") && groupAdg) {
                    groupAdg.classList.remove("hidden");
                } else if (groupAdg) {
                    groupAdg.classList.add("hidden");
                }
            } else {
                if (groupMilk) groupMilk.classList.remove("hidden");
                if (groupFat) groupFat.classList.remove("hidden");
                if (groupProtein) groupProtein.classList.remove("hidden");
                if (groupDim) groupDim.classList.remove("hidden");
                if (groupAdg) groupAdg.classList.add("hidden");
            }
        } else {
            if (groupMilk) groupMilk.classList.add("hidden");
            if (groupFat) groupFat.classList.add("hidden");
            if (groupProtein) groupProtein.classList.add("hidden");
            if (groupDim) groupDim.classList.add("hidden");
            if (groupAdg) groupAdg.classList.remove("hidden");
        }
    }

    // Main Nutrition Calculation Function
    function calculateRequirements() {
    if (!speciesSelect || !categorySelect) return;

    const speciesKey = speciesSelect.value;
    const catIndex = parseInt(categorySelect.value) || 0;
    const bw = parseFloat(bwInput.value) || 650;
    const milk = parseFloat(milkInput.value) || 35.0;
    const fat = parseFloat(fatInput.value) || 3.80;
    const protein = parseFloat(proteinInput.value) || 3.20;
    const dim = parseFloat(dimInput.value) || 60;
    const adg = parseFloat(adgInput.value) || 1.20;

    let dmi = 0, nel = 0, mp = 0, ca = 0, p = 0;
    let dmiNote = "";

    if (speciesKey === "dairy_nasem") {
        if (catIndex === 0) {
            // Lactating Dairy Cow - NASEM 2021 Official Eq. 2-1 (de Souza et al., 2019)
            const fcm4 = milk * (0.4 + 0.15 * fat);
            const dmiBase = 3.75 + (0.022 * bw) + (0.305 * fcm4);
            const wol = dim / 7.0;
            const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
            dmi = Math.max(14.0, dmiBase * lag);
            dmiNote = "Estimado por Ecuación NASEM 2021 Eq. 2-1 (de Souza et al., 2019).";

            // Energy: NEm + NE_milk (NASEM 2021 Cap. 3 & 4)
            const nem = 0.080 * Math.pow(bw, 0.75);
            const neMilk = milk * (0.0929 * fat + 0.0547 * protein + 0.192);
            nel = nem + neMilk;

            // Metabolizable Protein MP (NASEM 2021 Cap. 6)
            const mpMaint = 3.8 * Math.pow(bw, 0.75);
            const mpMilk = milk * (protein / 100.0) * 1000.0 * 1.4;
            mp = (mpMaint + mpMilk) / 1000.0;

            // Calcium Ca & Phosphorus P (NASEM 2021 Cap. 7)
            const caMaint = 0.031 * bw;
            const caMilk = 1.22 * milk;
            ca = (caMaint + caMilk) / 0.60;

            const pMaint = 0.018 * bw;
            const pMilk = 0.90 * milk;
            p = (pMaint + pMilk) / 0.70;
        } else if (catIndex === 1) {
            // Far-off Dry Cow (NASEM 2021)
            dmi = bw * 0.0197;
            dmiNote = "Vaca Seca Lejana (NASEM 2021: 1.97% del Peso Vivo).";
            nel = 0.080 * Math.pow(bw, 0.75) * 1.25;
            mp = (3.8 * Math.pow(bw, 0.75) * 1.2) / 1000.0;
            ca = (0.031 * bw + 12.0) / 0.60;
            p = (0.018 * bw + 8.0) / 0.70;
        } else if (catIndex === 2) {
            // Close-up Dry Cow (NASEM 2021 Preparto)
            dmi = bw * 0.0170;
            dmiNote = "Vaca Preparto Close-Up (NASEM 2021 Cap. 12: 1.70% Peso Vivo).";
            nel = 0.080 * Math.pow(bw, 0.75) * 1.40;
            mp = (3.8 * Math.pow(bw, 0.75) * 1.4) / 1000.0;
            ca = (0.031 * bw + 18.0) / 0.60;
            p = (0.018 * bw + 10.0) / 0.70;
        } else {
            // Growing Heifer
            dmi = bw * 0.0245;
            dmiNote = "Novilla en Crecimiento (NASEM 2021 Cap. 14: 2.45% Peso Vivo).";
            nel = 0.080 * Math.pow(bw, 0.75) + adg * 3.5;
            mp = (3.8 * Math.pow(bw, 0.75) + adg * 220) / 1000.0;
            ca = (0.031 * bw + adg * 15) / 0.60;
            p = (0.018 * bw + adg * 8) / 0.70;
        }
    } else {
        // Beef Cattle (Oklahoma / NASEM Beef)
        dmi = bw * 0.023 + (catIndex === 0 ? milk * 0.10 : adg * 0.5);
        dmiNote = catIndex === 0 ? "Vaca de Carne en Lactancia (Oklahoma / NASEM Beef)." : "Novillo de Engorde (Oklahoma / NASEM Beef: 2.65% Peso Vivo).";
        nel = 0.077 * Math.pow(bw, 0.75) + (catIndex === 0 ? milk * 0.70 : adg * 3.8);
        mp = (3.4 * Math.pow(bw, 0.75) + (catIndex === 0 ? milk * 30 : adg * 200)) / 1000.0;
        ca = (0.025 * bw + (catIndex === 0 ? milk * 1.2 : adg * 14)) / 0.50;
        p = (0.016 * bw + (catIndex === 0 ? milk * 0.9 : adg * 7)) / 0.60;
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
function updateMineralTablesAndHighlight() {
    if (!nutrientDB || !nutrientDB.mineral_catalog) return;
    const catalog = nutrientDB.mineral_catalog;
    const bw = parseFloat(bwInput.value) || 650;
    const milk = parseFloat(milkInput.value) || 35.0;
    const fat = parseFloat(fatInput.value) || 3.80;
    const dim = parseFloat(dimInput.value) || 60;

    // NASEM 2021 Eq. 2-1 DMI for mineral intake calculation
    const fcm4 = milk * (0.4 + 0.15 * fat);
    const dmiBase = (0.022 * bw) + (0.305 * fcm4);
    const wol = dim / 7.0;
    const lag = 1.0 - Math.exp(-0.192 * (wol + 3.67));
    const dmi = Math.max(12.0, dmiBase * lag);

    if (mineralAnimalBadge) mineralAnimalBadge.innerText = `Vaca ${bw} kg | DMI Est: ${dmi.toFixed(1)} kg MS/d`;

    // Highlighted Mineral Card
    const item = catalog[activeSelectedMineral];
    if (item && mineralDetailsContainer) {
        const isMacro = item.unit.includes("g");
        const reqVal = isMacro ? `${item.req_per_kg_dm} g/kg MS` : `${item.req_per_kg_dm} mg/kg MS (ppm)`;
        const totalVal = isMacro ? `${(dmi * item.req_per_kg_dm).toFixed(1)} g/día` : `${(dmi * item.req_per_kg_dm).toFixed(0)} mg/día`;

        mineralDetailsContainer.innerHTML = `
            <div class="practical-card" style="border-left-color: var(--primary-emerald); background: #f0fdf4; border: 1.5px solid #a7f3d0;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="margin:0; font-size:1.25rem; font-weight:700; color:#0f172a;">🧪 Ficha Técnica: ${item.name} (${item.symbol})</h4>
                    <span class="badge-source" style="background:#dcfce7; color:#047857; border-color:#86efac;">${item.category}</span>
                </div>
                <div class="practical-stats" style="margin-top:12px;">
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Requerimiento por kg MS: <strong style="color:#047857;">${reqVal}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Consumo Total Estimado: <strong style="color:#047857;">${totalVal}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Límite Máximo Tolerable: <strong style="color:#b45309;">${item.unit.includes("g") ? item.max_tolerable + "% MS" : item.max_tolerable + " ppm"}</strong></div>
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

function renderCornellModule() {
        if (!cornellModuleContainer || !nutrientDB || !nutrientDB.cornell_cncps_2023) return;
        const cornell = nutrientDB.cornell_cncps_2023;
        cornellModuleContainer.innerHTML = `
            <div class="practical-card" style="border-left-color: var(--primary-emerald); background: #f8fafc; border: 1px solid #e2e8f0; width: 100%;">
                <h4 style="color:#0f172a; font-weight:700; font-size:1.15rem;">Guías CNCPS v6.5 / v7.0 de Nutrición de Transición y Salud Ruminal</h4>
                <div class="practical-stats" style="margin-top:12px;">
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Metionina Metabolizable (MP Met): <strong style="color:#047857;">${cornell.amino_acid_targets.methionine_mp}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Lisina Metabolizable (MP Lys): <strong style="color:#047857;">${cornell.amino_acid_targets.lysine_mp}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Relación Ideal Lys : Met: <strong style="color:#047857;">${cornell.amino_acid_targets.ideal_lys_met_ratio}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Fibra peNDF en Comedero: <strong style="color:#047857;">${cornell.rumen_health_guidelines.peNDF_min}</strong></div>
                    <div class="practical-stat-item" style="color:#0f172a; background:#ffffff; border:1px solid #cbd5e1;">Límite Almidón Ruminal: <strong style="color:#b45309;">${cornell.rumen_health_guidelines.starch_max}</strong></div>
                </div>
            </div>
        `;
    }

    // Render Comparative Presets Table
    function renderPresetsTable() {
        if (!presetTableHead || !presetTableBody || !nutrientDB || !nutrientDB.comparative_presets) return;
        const presets = nutrientDB.comparative_presets;
        presetTableHead.innerHTML = `<tr><th>Categoría Animal</th><th>Peso Vivo (kg)</th><th>DMI (kg/día)</th><th>NEL / NEm (Mcal/d)</th><th>Proteína MP (g/d)</th></tr>`;
        presetTableBody.innerHTML = "";
        presets.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td><strong>${p.name}</strong></td><td>${p.bw_kg} kg</td><td>${p.dmi_kg} kg MS</td><td>${p.energy_mcal} Mcal</td><td>${p.mp_g} g MP</td>`;
            presetTableBody.appendChild(tr);
        });
    }

    // AI Nutrition Q&A Knowledge Database
    const qaKnowledgeBase = [
    {
        id: "proteina_mp",
        keywords: ["proteina", "proteína", "mp", "cp", "rup", "rdp", "nnp", "urea", "úrea", "mcp", "nitrogeno", "nitrógeno", "nue", "nrc", "nasem"],
        title: "🥩 Proteína Metabolizable (MP), RUP, RDP y Proteína Microbiana (NASEM Cap. 6)",
        badge: "NASEM 2021 Cap. 6 (Páginas 85-112)",
        formula: "MP Requerida (g/d) = (3.8 * BW^0.75) + (Milk_kg * %Protein * 10 * 1.4) | MP Lys:Met = 2.7 : 1.0",
        body: `<b>Capítulo 6 NASEM 2021 (NRC Ganado de Leche):</b> NASEM 2021 abandona definitivamente el uso de Proteína Cruda (CP%) como métrica principal de formulación y se enfoca en la <b>Proteína Metabolizable (MP)</b> absorbida en el intestino delgado procedente de:
<br>1. <b>Proteína Microbiana (MCP):</b> Generada en el rumen por bacterias alimentadas con RDP y carbohidratos fermentables (aporte: 50-70% de la MP total).
<br>2. <b>Proteína Indegradable en Rumen (RUP):</b> Proteína del alimento que escapa a la fermentación ruminal (digestibilidad intestinal RUP: 70-95%).
<br><br>
<b>Límites de Formulación Recomendados NASEM 2021:</b>
<br>• <b>Proteína Metabolizable (MP):</b> 11.0 - 12.5% de la MS en vacas de alta producción (1,800 - 2,500 g MP/día).
<br>• <b>Proteína Degradable en Rumen (RDP):</b> 9.5 - 10.5% de la MS para maximizar la síntesis microbiana sin desperdicio de nitrógeno ureico en sangre (BUN < 14 mg/dL).
<br>• <b>Eficiencia del Uso del Nitrógeno (NUE):</b> NASEM 2021 busca una NUE > 30-33% en leche (Leche N / Consumo N).`,
        sources: "NASEM 2021 (8ª Edición Revisada, Capítulo 6)"
    },
    {
        id: "aminoacidos_esenciales",
        keywords: ["aminoacido", "aminoacidos", "aminoácido", "aminoácidos", "lisina", "lys", "metionina", "met", "histidina", "his", "leucina", "isoleucina", "valina", "treonina", "triptofano", "fenilalanina", "arginina", "cncps"],
        title: "🧬 Aminoácidos Esenciales Limitantes: Lisina, Metionina e Histidina (NASEM Cap. 6 & CNCPS)",
        badge: "NASEM 2021 & Cornell CNCPS v7.0",
        formula: "MP Lisina = 6.9 - 7.2% de MP | MP Metionina = 2.6 - 2.8% de MP | Relación Lys:Met = 2.7 : 1.0",
        body: `<b>Capítulo 6 NASEM 2021 & Cornell CNCPS v7.0 (Dr. Mike Van Amburgh):</b>
<br>Los 10 aminoácidos esenciales requeridos son: <b>Lisina (Lys), Metionina (Met), Histidina (His), Leucina (Leu), Isoleucina (Ile), Valina (Val), Treonina (Thr), Triptófano (Trp), Fenilalanina (Phe) y Arginina (Arg)</b>.
<br><br>
<b>Jerarquía de Aminoácidos Limitantes:</b>
<br>1. <b>Lisina (1er o 2º limitante):</b> Crítico para el volumen total de leche y síntesis de proteína láctea. Meta: <b>6.9 - 7.2% de la MP</b>.
<br>2. <b>Metionina (1er o 2º limitante):</b> Regulador epigenético y precursor de grasa en leche. Meta: <b>2.6 - 2.8% de la MP</b>.
<br>3. <b>Histidina (3er limitante):</b> Identificado en NASEM 2021 como limitante secundario en dietas basadas en ensilaje de hierba/alfalfa. Meta: > 2.2% de la MP.
<br>• <b>Suplementación Protegida:</b> El uso de Metionina y Lisina protegidas de la degradación ruminal (RPM/RPL) incrementa la producción de proteína de leche en un +0.15 a +0.25% sin elevar el nitrógeno excretado.`,
        sources: "NASEM 2021 Cap. 6 • Cornell University CNCPS v7.0 (Dr. Mike Van Amburgh)"
    },
    {
        id: "energia_nel",
        keywords: ["energia", "energía", "nel", "nem", "neg", "tdn", "mcal", "caloria", "calorias", "nrc", "nasem"],
        title: "⚡ Energía Neta de Lactancia (NEL), Mantenimiento (NEm) y Ganancia (NEg) (NASEM Cap. 3 & 4)",
        badge: "NASEM 2021 Cap. 3 & 4",
        formula: "NEL (Mcal/d) = (0.080 * BW^0.75) + Leche_kg * (0.0929 * %Grasa + 0.0547 * %Proteína + 0.192)",
        body: `<b>Capítulos 3 y 4 NASEM 2021:</b> La energía útil de la ración se mide en <b>Energía Neta (NE)</b>.
<br><br>
<b>Fracciones y Coeficientes NASEM 2021:</b>
<br>• <b>NEm (Mantenimiento):</b> 0.080 Mcal NEL / kg BW^0.75 (ej. 10.3 Mcal/día para una vaca de 650 kg).
<br>• <b>NEL (Lactancia):</b> Cada kg de leche al 3.8% Grasa y 3.2% Proteína requiere <b>0.70 Mcal de NEL</b>.
<br>• <b>NEg (Ganancia de Peso):</b> Requiere 3.5 a 5.2 Mcal NEg por kg de ganancia diaria de peso corporal.
<br>• <b>Densidad Recomendada:</b> 1.65 a 1.74 Mcal NEL / kg MS en raciones TMR de alta producción.`,
        sources: "NASEM 2021 (8ª Edición, Capítulos 3 y 4)"
    },
    {
        id: "carbohidratos_fibra",
        keywords: ["fibra", "fdn", "ndf", "fda", "adf", "pendf", "undf", "undf240h", "lignina", "rumen", "acidosis", "sara", "grant"],
        title: "🌿 Carbohidratos Fibrosos (aNDFom, ADF, peNDF y uNDF240h) (NASEM Cap. 5 & Miner Institute)",
        badge: "NASEM 2021 Cap. 5 & Miner Institute",
        formula: "aNDFom Total >= 28 - 32% MS | peNDF >= 21 - 23% MS | uNDF240h <= 0.38% BW",
        body: `<b>Capítulo 5 NASEM 2021 & Dr. Rick Grant:</b> La fibra forrajera sostiene la masticación, salivación (bicarbonato sódico endógeno) y la capa ruminal estructurada.
<br><br>
<b>Métricas Clave de la Fibra:</b>
<br>• <b>aNDFom (FDN libre de cenizas):</b> 28 - 32% de la MS (mínimo 75% proveniente de forrajes de fibra larga).
<br>• <b>peNDF (Fibra Físicamente Efectiva):</b> Mínimo 21 - 23% de la MS para mantener el pH ruminal > 6.0 y prevenir Acidosis Ruminal Subaguda (SARA).
<br>• <b>uNDF240h (FDN Indigestible a 240 horas):</b> Regula el llenado físico ruminal. Límite máximo: <b><= 0.38% del Peso Vivo</b> (2.47 kg uNDF240h en vaca de 650 kg).`,
        sources: "NASEM 2021 Cap. 5 • Miner Institute / Cornell Shortcourse (Dr. Rick Grant)"
    },
    {
        id: "carbohidratos_no_estructurales",
        keywords: ["nfc", "almidon", "almidón", "azucar", "azucares", "azúcares", "pectina", "pectinas", "carbohidratos", "nrc", "nasem"],
        title: "🌽 Carbohidratos No Estructurales (NFC): Almidón Ruminal, Azúcares y Pectinas (NASEM Cap. 5)",
        badge: "NASEM 2021 Cap. 5 (Páginas 65-84)",
        formula: "NFC (% MS) = 100 - (aNDFom% + CP% + EE% + Cenizas%) | Almidón Ruminal = 22 - 28% MS",
        body: `<b>Capítulo 5 NASEM 2021:</b> Los NFC proveen la energía de fermentación rápida requerida para la síntesis de Proteína Microbiana (MCP).
<br><br>
<b>Componentes y Recomendaciones:</b>
<br>• <b>NFC Total:</b> 36 - 42% de la MS.
<br>• <b>Almidón Ruminal:</b> 22 - 28% de la MS en dietas de maíz/sorgo. Niveles > 30% almidón degradable aumentan bruscamente el riesgo de SARA y depresión de grasa láctea (MFD).
<br>• <b>Azúcares Solubles (Sacarosa/Melaza):</b> 4 - 7% de la MS (estimulan el consumo y la población de bacterias utilizadoras de lactato).
<br>• <b>Pectinas (Pulpa de remolacha / Cascarilla de soya):</b> 6 - 10% de la MS (altamente fermentables sin generar ácido láctico).`,
        sources: "NASEM 2021 (8ª Edición, Cap. 5)"
    },
    {
        id: "macrominerales_ca_p",
        keywords: ["calcio", "ca", "fosforo", "fósforo", "p", "macrominerales", "macromineral", "hipocalcemia", "fiebre de leche", "nrc", "nasem"],
        title: "🧪 Macrominerales Principales: Calcio (Ca) y Fósforo (P) (NASEM Cap. 7)",
        badge: "NASEM 2021 Cap. 7 (Páginas 113-145)",
        formula: "Req. Ca = (DMI * 6.5) g/día (0.65 - 0.85% MS) | Req. P = (DMI * 3.8) g/día (0.35 - 0.42% MS)",
        body: `<b>Capítulo 7 NASEM 2021:</b>
<br>• <b>Calcio (Ca):</b> Requerido para la estructura ósea, contracción muscular y secreción de leche (1.22 g Ca/kg de leche). Coeficiente de absorción (Ab): 0.60 en inorgánicos vs 0.85 en orgánicos quelatados.
<br>• <b>Fósforo (P):</b> Imprescindible para el metabolismo energético (ATP) y amortiguador ruminal (saliva). NASEM 2021 fijó el objetivo en <b>0.38 - 0.42% de la MS</b> para eliminar la contaminación ambiental por fosfatos sin alterar la fertilidad.`,
        sources: "NASEM 2021 Cap. 7 • Dr. Bill Weiss (Ohio State University)"
    },
    {
        id: "macrominerales_mg_k_na_cl_s",
        keywords: ["magnesio", "mg", "potasio", "k", "sodio", "na", "cloro", "cl", "azufre", "s", "tetania", "sal", "bicarbonato", "nrc", "nasem"],
        title: "🧪 Macrominerales Electrolíticos: Magnesio (Mg), Potasio (K), Sodio (Na), Cloro (Cl) y Azufre (S) (NASEM Cap. 7)",
        badge: "NASEM 2021 Cap. 7 Electrolitos",
        formula: "Mg = 0.30-0.40% MS | K = 1.2-1.5% MS | Na = 0.22-0.30% MS | Cl = 0.30% MS | S = 0.20% MS",
        body: `<b>Capítulo 7 NASEM 2021:</b>
<br>• <b>Magnesio (Mg):</b> Requerido 0.30 - 0.40% MS. El Mg previene la tetania de los pastos. El potasio elevado (K > 2.5%) antagoniza la absorción ruminal de Mg.
<br>• <b>Potasio (K):</b> Requerido 1.2 - 1.5% MS en lactancia (aumenta a 1.6-1.8% en estrés por calor). En vacas secas se debe mantener K < 1.3% para prevenir alcalosis y hipocalcemia.
<br>• <b>Sodio (Na) y Cloro (Cl):</b> Sal común (NaCl) a 0.5% de la MS + Bicarbonato de Sodio (0.75-1.0% MS).
<br>• <b>Azufre (S):</b> Requerido 0.20% MS para aminoácidos azufrados (Metionina/Cisteína). Límite máximo: 0.40% MS (evita toxicidad por sulfuro de hidrógeno H2S).`,
        sources: "NASEM 2021 Cap. 7 (Páginas 113-145)"
    },
    {
        id: "microminerales_fe_zn_cu_mn_i_se_co_cr",
        keywords: ["hierro", "fe", "zinc", "cinc", "zn", "cobre", "cu", "manganeso", "mn", "yodo", "i", "selenio", "se", "cobalto", "co", "cromo", "cr", "microminerales", "oligoelementos", "quelatos", "nrc", "nasem"],
        title: "🔬 Microminerales y Oligoelementos: Fe, Zn, Cu, Mn, I, Se, Co y Cromo (Cr) (NASEM Cap. 7)",
        badge: "NASEM 2021 Cap. 7 Microminerales",
        formula: "Fe: 120 ppm | Zn: 60 ppm | Cu: 15 ppm | Mn: 40 ppm | I: 0.8 ppm | Se: 0.3 ppm | Co: 0.2 ppm | Cr: 0.5 ppm",
        body: `<b>Capítulo 7 NASEM 2021:</b>
<br>• <b>Cinc / Zinc (Zn - 60 ppm):</b> Integridad de la pezuña, queratina del canal del pezón e inmunidad.
<br>• <b>Cobre (Cu - 15 ppm):</b> Antagonizado por Molibdeno (Mo), Azufre (S) e Hierro (Fe). NASEM 2021 recomienda controlar la acumulación hepática de Cu.
<br>• <b>Manganeso (Mn - 40 ppm):</b> Desarrollo embrionario y lubricación articular.
<br>• <b>Yodo (I - 0.8 ppm):</b> Hormonas tiroideas T3/T4 y metabolismo basal.
<br>• <b>Selenio (Se - 0.3 ppm):</b> Antioxidante (Glutatión Peroxidasa) en combinación con Vitamina E.
<br>• <b>Cobalto (Co - 0.2 ppm):</b> Precursor exclusivo para la síntesis microbiana de Vitamina B12 en rumen.
<br>• <b>Cromo (Cr - 0.5 ppm):</b> Novedad en NASEM 2021. Sensibilizador de insulina que aumenta el DMI en transición y estrés térmico.`,
        sources: "NASEM 2021 (8ª Edición, Cap. 7)"
    },
    {
        id: "vitaminas_liposolubles",
        keywords: ["vitamina a", "vitamina d", "vitamina e", "vitamina k", "beta caroteno", "tocoferol", "colecalciferol", "retinol", "vitaminas", "nrc", "nasem"],
        title: "💊 Vitaminas Liposolubles: Vitamina A, Vitamina D3 y Vitamina E (NASEM Cap. 8)",
        badge: "NASEM 2021 Cap. 8 (Páginas 147-160)",
        formula: "Vit A: 110 UI/kg BW | Vit D3: 30 UI/kg BW | Vit E: 1.6 - 4.0 UI/kg BW (1000 - 2000 UI/día preparto)",
        body: `<b>Capítulo 8 NASEM 2021:</b>
<br>• <b>Vitamina A (110 UI/kg BW | ~70,000 UI/día):</b> Esencial para la salud epitelial, mucosas uterinas y visión.
<br>• <b>Vitamina D3 (30 UI/kg BW | ~20,000 UI/día):</b> Homeostasis del calcio y resorción ósea.
<br>• <b>Vitamina E (1,000 - 2,000 UI/día en secas/preparto):</b> Antioxidante celular de membrana. Reduce drásticamente la incidencia de mastitis subclínica y retención de placenta al parto.`,
        sources: "NASEM 2021 (8ª Edición, Cap. 8)"
    },
    {
        id: "vitaminas_hidrosolubles_colina",
        keywords: ["vitaminas b", "complejo b", "biotina", "niacina", "colina", "colina protegida", "rpc", "tiamina", "b12", "b6", "pantotenico", "folico", "nrc", "nasem"],
        title: "💊 Vitaminas Hidrosolubles (Complejo B, Biotina, Niacina) y Colina Protegida (RPC) (NASEM Cap. 8)",
        badge: "NASEM 2021 Cap. 8 Vitaminas B & RPC",
        formula: "Colina Protegida RPC = 12.9 g/día de Colina pura (60 g RPC/día) | Biotina = 20 mg/día",
        body: `<b>Capítulo 8 NASEM 2021:</b>
<br>• <b>Colina Protegida en Rumen (RPC):</b> NASEM 2021 respaldó formalmente la suplementación de RPC (12.9 g/día de colina ion pura) en el periodo de transición (21 días preparto a 21 días posparto). Promueve la exportación de VLDL desde el hígado, reduciendo el hígado graso y la cetosis en un 70%.
<br>• <b>Biotina (20 mg/día):</b> Fortalece la estructura del casco (línea blanca) y aumenta la producción de leche en +1.3 kg/día al actuar como coenzima en la gluconeogénesis (piruvato carboxilasa).
<br>• <b>Niacina (B3 - 6 a 12 g/día):</b> Reduce la lipólisis excesiva y ayuda en estrés térmico.`,
        sources: "NASEM 2021 Cap. 8 • Dr. Ric Grummer (Univ. of Wisconsin)"
    },
    {
        id: "lipidos_acidos_grasos",
        keywords: ["grasa", "grasas", "fat", "lipido", "lipidos", "extracto etereo", "palmitico", "estearico", "oleico", "linoleico", "linolenico", "omega", "epa", "dha", "tecnigrasas", "rolando", "hernandez", "fiv", "ovocito"],
        title: "🥑 Nutrición Lipídica y Perfil de Ácidos Grasos (C16:0, C18:0, C18:1, Omega-6 y Omega-3) (NASEM Cap. 4 & Tecnigrasas)",
        badge: "NASEM 2021 Cap. 4 & Tecnigrasas SAS",
        formula: "Grasa Total Dieta <= 6.0 - 7.0% MS | Relación AGPI Omega-6 : Omega-3 = 4.0:1 a 5.0:1",
        body: `<b>Capítulo 4 NASEM 2021 & Investigaciones del MV MSc Rolando Hernández Mora (Tecnigrasas SAS):</b>
<br>• <b>Límite de Grasa en Dieta:</b> La grasa total no debe superar el 6.5-7.0% de la MS (grasa libre en rumen < 4.0% para no inhibir bacterias celulolíticas).
<br>• <b>Ácido Palmítico (C16:0):</b> Incrementa el porcentaje y rendimiento de grasa en leche.
<br>• <b>Ácido Oleico (C18:1):</b> Mejora la digestibilidad de la grasa total y el estado energético.
<br>• <b>Ácidos Grasos Poliinsaturados AGPI (Omega-6 y Omega-3):</b> La suplementación con sales de calcio en relación 4:1 a 5:1 eleva la progesterona celular, estimula la calidad ovocitaria y aumenta las tasas de concepción en Fertilización In Vitro (FIV).`,
        sources: "NASEM 2021 Cap. 4 • Tecnigrasas SAS & UCV (MV MSc Rolando Hernández Mora)"
    },
    {
        id: "agua_hidratacion",
        keywords: ["agua", "water", "bebida", "hidratacion", "litros", "temperatura", "wetherly", "cardoso", "illinois", "nrc", "nasem"],
        title: "💧 Consumo de Agua de Bebida y Estrés Hídrico (NASEM Cap. 9 & Univ. Illinois 2025)",
        badge: "NASEM 2021 Cap. 9 & Univ. of Illinois",
        formula: "Agua (L/día) = 15.99 + (1.58 * DMI_kg) + (0.90 * Leche_kg) + (0.05 * Na_g) + (1.20 * Temp_C)",
        body: `<b>Capítulo 9 NASEM 2021 & Universidad de Illinois (Wetherly & Cardoso, 2015):</b>
<br>El agua representa el 87% del volumen de la leche producida.
<br>• <b>Consumo Promedio:</b> 115 a 140 Litros/cabeza/día en vacas de alta producción a 25°C.
<br>• <b>Sensibilidad al Calor:</b> Por cada 1°C de aumento sobre los 20°C, el consumo de agua se incrementa en +1.2 Litros/día.
<br>• <b>Impacto en Producción:</b> Restringir el agua en un 10% reduce el DMI inmediatamente en un 15-20%.`,
        sources: "NASEM 2021 Cap. 9 • University of Illinois 2025"
    },
    {
        id: "transicion_dcad_hipocalcemia",
        keywords: ["dcad", "bac", "preparto", "transicion", "hipocalcemia", "fiebre de leche", "cloro", "azufre", "potasio", "ph urinario", "goldilocks", "drackley", "nasem"],
        title: "⚡ Manejo Nutricional de Transición, DCAD y Dieta Goldilocks (NASEM Cap. 12 & Illinois)",
        badge: "NASEM 2021 Cap. 12 & Illinois Goldilocks",
        formula: "DCAD Preparto = -50 a -150 mEq/kg MS | pH Urinario Holstein = 6.0 - 6.5 | Paja de Trigo = 3.0 - 4.5 kg/d",
        body: `<b>Capítulo 12 NASEM 2021 & Dr. James Drackley (Univ. of Illinois):</b>
<br>• <b>DCAD Aniónico Preparto:</b> Formular con DCAD de -50 a -150 mEq/kg MS durante los 21 días previos al parto genera una acidificación metabólica leve transitoria que activa los receptores de PTH, previniendo la hipocalcemia clínica y subclínica.
<br>• <b>Dieta de Energía Controlada "Goldilocks":</b> Utilizar 3.0 a 4.5 kg/día de paja de trigo picada (< 5 cm) limita la densidad energética a 1.30-1.35 Mcal NEL/kg MS, previniendo la sobrecondición, el hígado graso y el desplazamiento de abomaso (LDA).`,
        sources: "NASEM 2021 Cap. 12 • University of Illinois 2025 (Dr. James Drackley)"
    },
    {
        id: "eficiencia_alimenticia_fe",
        keywords: ["eficiencia", "fe", "hutjens", "penn state", "fcm", "leche corregida", "pico", "retorno"],
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

    function removeAccents(str) {
        if (!str) return "";
        return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
    }

    function searchNutritionQA(query) {
        if (!query || !query.trim()) return;

        const rawQuery = query.trim();
        const cleanQuery = removeAccents(rawQuery);
        const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 1);

        let matchedItem = null;
        let maxHits = 0;

        qaKnowledgeBase.forEach(item => {
            let hits = 0;

            item.keywords.forEach(kw => {
                const normKw = removeAccents(kw);
                queryWords.forEach(qWord => {
                    if (normKw.includes(qWord) || qWord.includes(normKw)) {
                        hits += 5;
                    }
                });
                if (cleanQuery.includes(normKw) || normKw.includes(cleanQuery)) {
                    hits += 10;
                }
            });

            const normTitle = removeAccents(item.title);
            queryWords.forEach(qWord => {
                if (normTitle.includes(qWord)) {
                    hits += 3;
                }
            });

            const normBody = removeAccents(item.body);
            queryWords.forEach(qWord => {
                if (normBody.includes(qWord)) {
                    hits += 1;
                }
            });

            if (hits > maxHits) {
                maxHits = hits;
                matchedItem = item;
            }
        });

        if (qaAnswerContainer) {
            qaAnswerContainer.style.display = "block";
            if (matchedItem && maxHits > 0) {
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
                            La pregunta realizada (<em>"${query}"</em>) no coincide con los temas nutricionales de rumiantes registrados en nuestra base de datos.
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

    if (speciesSelect) speciesSelect.addEventListener("change", () => { populateCategories(); calculateRequirements(); });
    if (categorySelect) categorySelect.addEventListener("change", () => { updateFormFieldsAndDefaults(); calculateRequirements(); });
    if (btnCalculate) btnCalculate.addEventListener("click", () => { calculateRequirements(); triggerMooAudio(); });
    if (btnCalcMineral) btnCalcMineral.addEventListener("click", () => { if (mineralTypeSelect) activeSelectedMineral = mineralTypeSelect.value; updateMineralTablesAndHighlight(); triggerMooAudio(); });
    if (mineralTypeSelect) mineralTypeSelect.addEventListener("change", () => { activeSelectedMineral = mineralTypeSelect.value; updateMineralTablesAndHighlight(); });

    if (btnTechView) btnTechView.addEventListener("click", () => { currentViewMode = "technical"; btnTechView.classList.add("active"); if (btnPracticalView) btnPracticalView.classList.remove("active"); calculateRequirements(); });
    if (btnPracticalView) btnPracticalView.addEventListener("click", () => { currentViewMode = "practical"; btnPracticalView.classList.add("active"); if (btnTechView) btnTechView.classList.remove("active"); calculateRequirements(); });

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
    calculateRequirements();
    updateMineralTablesAndHighlight();
    renderCornellModule();
    renderPresetsTable();
});
