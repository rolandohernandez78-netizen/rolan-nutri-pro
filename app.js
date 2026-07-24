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
    // 1. Fetch nutrient database JSON
    try {
        const response = await fetch("ruminant_nutrient_database.json");
        nutrientDB = await response.json();
    } catch (err) {
        console.error("Error loading nutrient database:", err);
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
        if (!nutrientDB || !speciesSelect || !categorySelect) return;

        const speciesKey = speciesSelect.value;
        const catIndex = parseInt(categorySelect.value) || 0;
        const bw = parseFloat(bwInput.value) || 650;

        let results = [];

        if (speciesKey === "dairy_nasem") {
            const cat = nutrientDB.species_profiles.dairy_nasem.categories[catIndex];
            const categoryName = cat ? cat.name : "Vaca en Lactancia";

            const milk = parseFloat(milkInput.value) || 0;
            const fat = parseFloat(fatInput.value) || 3.8;
            const protein = parseFloat(proteinInput.value) || 3.2;
            const dim = parseFloat(dimInput.value) || 60;
            const adg = parseFloat(adgInput.value) || 0.85;

            let dmi = 0;
            let nelReq = 0;
            let mpReq = 0;

            if (categoryName.includes("Lactancia")) {
                const milkE = milk * (0.0929 * fat + 0.0547 * protein + 0.0395 * 4.8);
                const parity = catIndex === 0 ? 0 : 1;
                const bcs = 3.0;
                const dmiBase = (3.7 + parity * 5.7) + (0.305 * milkE) + (0.022 * bw) + ((-0.689 - 1.87 * parity) * bcs);
                const dimFactor = 1 - Math.exp(-0.212 * (dim / 7 + 2.56));
                dmi = dmiBase * dimFactor;

                nelReq = (0.08 * Math.pow(bw, 0.75)) + (milk * (0.0929 * fat + 0.0547 * protein + 0.192));
                mpReq = (3.8 * Math.pow(bw, 0.75)) + (milk * (protein * 10 * 1.4));
            } else if (categoryName.includes("Lejano")) {
                dmi = bw * 0.0197;
                nelReq = 0.08 * Math.pow(bw, 0.75) * 1.2;
                mpReq = 3.8 * Math.pow(bw, 0.75) * 1.2;
            } else if (categoryName.includes("Pre-parto")) {
                dmi = bw * 0.0170;
                nelReq = 0.08 * Math.pow(bw, 0.75) * 1.35;
                mpReq = 3.8 * Math.pow(bw, 0.75) * 1.4;
            } else {
                dmi = bw * 0.0225;
                nelReq = (0.08 * Math.pow(bw, 0.75)) + (adg * 3.5);
                mpReq = (3.8 * Math.pow(bw, 0.75)) + (adg * 250);
            }

            results = [
                {
                    nutrient: "Consumo de Materia Seca (DMI)",
                    valTech: `${dmi.toFixed(2)} kg MS/día (${(dmi / bw * 100).toFixed(2)}% BW)`,
                    valPrac: `${dmi.toFixed(1)} kg de alimento seco al día`,
                    desc: "Estimado por Ecuación NASEM 2021 Eq. 2-1 (de Souza et al., 2019)."
                },
                {
                    nutrient: "Energía Neta de Lactancia (NEL)",
                    valTech: `${nelReq.toFixed(2)} Mcal/día (${(nelReq / dmi).toFixed(2)} Mcal/kg MS)`,
                    valPrac: `${nelReq.toFixed(1)} Mcal/día para leche y mantenimiento`,
                    desc: "Energía Neta NASEM 2021 para mantenimiento y producción."
                },
                {
                    nutrient: "Proteína Metabolizable (MP)",
                    valTech: `${mpReq.toFixed(0)} g MP/día (${(mpReq / dmi / 10).toFixed(2)}% MP en MS)`,
                    valPrac: `${(mpReq / 1000).toFixed(2)} kg de proteína verdaderamente absorbida al día`,
                    desc: "Requerimiento de aminoácidos absorbidos en intestino delgado."
                },
                {
                    nutrient: "Calcio (Ca)",
                    valTech: `${(dmi * 6.5).toFixed(1)} g Ca/día (6.5 g/kg MS)`,
                    valPrac: `${(dmi * 6.5).toFixed(0)} gramos de Calcio por día`,
                    desc: "NASEM 2021 Cap. 7. Coeficiente de absorción ruminal/intestinal."
                },
                {
                    nutrient: "Fósforo (P)",
                    valTech: `${(dmi * 3.8).toFixed(1)} g P/día (3.8 g/kg MS)`,
                    valPrac: `${(dmi * 3.8).toFixed(0)} gramos de Fósforo por día`,
                    desc: "Requerimiento esencial para metabolismo energético y mineral."
                }
            ];
        } else {
            const cat = nutrientDB.species_profiles.beef_oklahoma.categories[catIndex];
            const categoryName = cat ? cat.name : "Novillo en Ceba";
            const adg = parseFloat(adgInput.value) || 1.2;

            const dmi = bw * 0.0235;
            const nemReq = 0.077 * Math.pow(bw, 0.75);
            const negReq = 0.0557 * Math.pow(bw, 0.75) * adg;

            results = [
                {
                    nutrient: "Consumo de Materia Seca (DMI)",
                    valTech: `${dmi.toFixed(2)} kg MS/día (${(dmi / bw * 100).toFixed(2)}% BW)`,
                    valPrac: `${dmi.toFixed(1)} kg de alimento seco al día`,
                    desc: "Estándar Oklahoma E-974 en kg."
                },
                {
                    nutrient: "Energía Neta de Mantenimiento (NEm)",
                    valTech: `${nemReq.toFixed(2)} Mcal/día`,
                    valPrac: `${nemReq.toFixed(1)} Mcal/día para mantenerse`,
                    desc: "Energía de sostenimiento biológico."
                },
                {
                    nutrient: "Energía Neta de Ganancia (NEg)",
                    valTech: `${negReq.toFixed(2)} Mcal/día para ${adg} kg/día ADG`,
                    valPrac: `${negReq.toFixed(1)} Mcal/día para engorde`,
                    desc: "Energía retenida en tejido muscular y adiposo."
                }
            ];
        }

        renderResults(results);
        updateMineralTablesAndHighlight();
    }

    // Render Main Calculation Results Cards in Colored Grid Boxes
    function renderResults(results) {
        if (!resultsContainer) return;
        resultsContainer.innerHTML = "";

        const boxStyles = [
            { bg: "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)", border: "#10b981", class: "box-dmi" },
            { bg: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)", border: "#60a5fa", class: "box-energy" },
            { bg: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%)", border: "#a78bfa", class: "box-protein" },
            { bg: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)", border: "#fbbf24", class: "box-ca" },
            { bg: "linear-gradient(135deg, #164e63 0%, #0e7490 50%, #0284c7 100%)", border: "#38bdf8", class: "box-p" }
        ];

        resultsContainer.style.display = "grid";
        resultsContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(240px, 1fr))";
        resultsContainer.style.gap = "16px";
        resultsContainer.style.marginTop = "14px";

        results.forEach((res, index) => {
            const card = document.createElement("div");
            const style = boxStyles[index % boxStyles.length];

            card.className = `result-item-card ${style.class}`;
            card.style.background = style.bg;
            card.style.borderLeft = `6px solid ${style.border}`;
            card.style.borderRadius = "14px";
            card.style.padding = "16px 20px";
            card.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
            card.style.border = "1px solid rgba(255,255,255,0.15)";

            const valStr = currentViewMode === "technical" ? res.valTech : res.valPrac;

            card.innerHTML = `
                <div class="result-header" style="display:flex; flex-direction:column; gap:6px; margin-bottom:8px;">
                    <span class="result-name" style="font-size:0.85rem; font-weight:700; color:#e2e8f0; text-transform:uppercase; letter-spacing:0.8px;">${res.nutrient}</span>
                    <span class="result-value" style="font-size:1.45rem; font-weight:700; color:#ffffff; line-height:1.25; text-shadow:0 2px 6px rgba(0,0,0,0.6);">${valStr}</span>
                </div>
                <div class="result-desc" style="font-size:0.83rem; color:#f1f5f9; line-height:1.35; margin-top:8px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.2);">${res.desc}</div>
            `;
            resultsContainer.appendChild(card);
        });
    }

    // Render Mineral Highlight Ficha Técnica Card
    function updateMineralTablesAndHighlight() {
        if (!nutrientDB || !nutrientDB.mineral_catalog) return;
        const catalog = nutrientDB.mineral_catalog;
        const bw = parseFloat(bwInput.value) || 650;
        const milk = parseFloat(milkInput.value) || 35;
        const milkE = milk * (0.0929 * 3.8 + 0.0547 * 3.2 + 0.0395 * 4.8);
        const dmiBase = 9.4 + 0.305 * milkE + 0.022 * bw - 0.689 * 3.0;
        const dmi = Math.max(12, dmiBase);

        if (mineralAnimalBadge) mineralAnimalBadge.innerText = `Vaca ${bw} kg | DMI Est: ${dmi.toFixed(1)} kg MS/d`;

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

        if (macroMineralTableBody) {
            macroMineralTableBody.innerHTML = "";
            ["Ca", "P", "Mg", "K", "Na", "Cl", "S"].forEach(sym => {
                const min = catalog[sym];
                if (min) {
                    const row = document.createElement("tr");
                    if (sym === activeSelectedMineral) row.classList.add("selected-row");
                    row.style.cursor = "pointer";
                    row.innerHTML = `<td><strong>${min.name} (${min.symbol})</strong></td><td>${min.req_per_kg_dm} g/kg MS</td><td><strong>${(dmi * min.req_per_kg_dm).toFixed(1)} g/día</strong></td>`;
                    row.addEventListener("click", () => { activeSelectedMineral = sym; if (mineralTypeSelect) mineralTypeSelect.value = sym; updateMineralTablesAndHighlight(); triggerMooAudio(); });
                    macroMineralTableBody.appendChild(row);
                }
            });
        }

        if (microMineralTableBody) {
            microMineralTableBody.innerHTML = "";
            ["Fe", "Zn", "Cu", "Mn", "I", "Se", "Co"].forEach(sym => {
                const min = catalog[sym];
                if (min) {
                    const row = document.createElement("tr");
                    if (sym === activeSelectedMineral) row.classList.add("selected-row");
                    row.style.cursor = "pointer";
                    row.innerHTML = `<td><strong>${min.name} (${min.symbol})</strong></td><td>${min.req_per_kg_dm} mg/kg MS (ppm)</td><td><strong>${(dmi * min.req_per_kg_dm).toFixed(0)} mg/día</strong></td>`;
                    row.addEventListener("click", () => { activeSelectedMineral = sym; if (mineralTypeSelect) mineralTypeSelect.value = sym; updateMineralTablesAndHighlight(); triggerMooAudio(); });
                    microMineralTableBody.appendChild(row);
                }
            });
        }
    }

    // Render Cornell CNCPS Module Card
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
            id: "proteina",
            keywords: ["proteina", "proteína", "proteinas", "proteínas", "protein", "proteico", "mp", "cp", "rup", "rdp", "aminoacido", "aminoacidos", "lisina", "metionina", "nrc", "nasem"],
            title: "🥩 Proteína Cruda (CP), Proteína Metabolizable (MP) y Aminoácidos (NASEM 2021 Cap. 6 & CNCPS)",
            badge: "NASEM 2021 Cap. 6 & Cornell CNCPS",
            formula: "MP Requerida (g/d) = (3.8 * BW^0.75) + (Milk_kg * %Protein * 10 * 1.4) | MP Lys:Met = 2.7 : 1.0",
            body: "<b>Capítulo 6 NASEM 2021 (NRC Ganado de Leche):</b> La proteína ya no se formula basándose únicamente en Proteína Cruda (CP%), sino en <b>Proteína Metabolizable (MP)</b>, que representa los aminoácidos absorbidos en el intestino delgado procedentes de:<br>1. <b>Proteína Microbiana (MCP):</b> Síntesis ruminal alimentada por NDF digerible y almidón.<br>2. <b>Proteína Ingradable en Rumen (RUP):</b> Proteína del alimento que escapa al rumen sin degradarse.<br><br><b>Recomendaciones de Formulación NASEM 2021 & CNCPS:</b><br>• <b>Proteína Metabolizable (MP):</b> 11.0 - 12.5% de la MS en lactancia alta (1750 - 2400 g MP/día).<br>• <b>Proteína Degradable en Rumen (RDP):</b> 9.5 - 10.5% de la MS para mantener la microbiota ruminal eficiente.<br>• <b>Aminoácidos Limitantes:</b> La Lisina debe representar el <b>6.9 - 7.2% de la MP</b> y la Metionina el <b>2.6 - 2.8% de la MP</b> (Relación ideal Lys:Met = 2.7 : 1.0).",
            sources: "NASEM 2021 (8ª Edición, Cap. 6) • Cornell CNCPS v6.5/v7.0 (Dr. Mike Van Amburgh)"
        },
        {
            id: "energia",
            keywords: ["energia", "energía", "energias", "energy", "nel", "nem", "neg", "tdn", "mcal", "caloria", "calorias", "carbohidrato", "carbohidratos", "almidon", "almidones", "nrc", "nasem"],
            title: "⚡ Requerimientos Energéticos (NEL, NEm, NEg y TDN) en NASEM 2021",
            badge: "NASEM 2021 Cap. 3 & Cap. 4",
            formula: "NEL Requerida (Mcal/d) = (0.080 * BW^0.75) + Milk_kg * (0.0929 * %Fat + 0.0547 * %Prot + 0.192)",
            body: "<b>Capítulos 3 y 4 NASEM 2021:</b> La energía es expresada en <b>Energía Neta (NE)</b> dividida en mantenimiento (NEm), lactancia (NEL) y ganancia (NEg).<br><br><b>Puntos Clave del Manual NASEM 2021:</b><br>• <b>Mantenimiento:</b> 0.080 Mcal NEL / kg BW^0.75 (ej. 10.3 Mcal/día para una vaca de 650 kg).<br>• <b>Producción de Leche:</b> Cada kg de leche al 3.8% de Grasa y 3.2% de Proteína requiere <b>0.70 Mcal de NEL</b>.<br>• <b>Densidad Energética Recomendada:</b> 1.62 a 1.72 Mcal NEL / kg MS en dietas de alta producción.<br>• <b>Carbohidratos No Estructurales (NFC):</b> 36 - 40% de la MS (Almidón ruminal máximo 24 - 28% para prevenir acidosis ruminal subaguda SARA).",
            sources: "NASEM 2021 (8ª Edición, Cap. 3 & 4) • NASEM Beef / Oklahoma Standards"
        },
        {
            id: "calcio",
            keywords: ["calcio", "calcios", "ca", "calcium", "hipocalcemia", "fiebre de leche", "nrc", "nasem", "mineral", "minerales"],
            title: "🧪 Calcio (Ca): Requerimientos, Absorción y Prevención de Hipocalcemia",
            badge: "NASEM 2021 Cap. 7",
            formula: "Req. Ca = (dmi * 6.5) g/día (6.5 g/kg MS en lactancia | 100 - 140 g Ca/día total)",
            body: "<b>Capítulo 7 NASEM 2021:</b> El Calcio es el macromineral con mayor demanda durante la lactancia (la leche contiene 1.22 g Ca/kg).<br><br><b>Estándares NASEM 2021:</b><br>• <b>Requerimiento en Dieta:</b> 0.65 - 0.85% de la MS en lactancia alta.<br>• <b>Coeficiente de Absorción (Ab):</b> 0.60 para carbonato de calcio inorgánico y 0.85 para quelatos orgánicos.<br>• <b>Preparto & DCAD:</b> Durante el periodo preparto, el Ca en dieta se restringe a 0.35-0.45% si la dieta no es aniónica, o se eleva a 1.20-1.40% Ca cuando se aplica un DCAD aniónico (-100 mEq/kg) para forzar el flujo cálcico metabólico al parto.",
            sources: "NASEM 2021 (8ª Edición, Cap. 7 & Cap. 12)"
        },
        {
            id: "fosforo",
            keywords: ["fosforo", "fósforo", "fosforos", "fósforos", "p", "phosphorus", "mineral", "minerales", "salud reproductora", "nrc", "nasem"],
            title: "🧪 Fósforo (P): Requerimientos Amortiguados y Nutrición Ambiental",
            badge: "NASEM 2021 Cap. 7",
            formula: "Req. P = (dmi * 3.8) g/día (3.8 - 4.2 g/kg MS | 70 - 95 g P/día total)",
            body: "<b>Capítulo 7 NASEM 2021:</b> NASEM 2021 redujo los márgenes de seguridad de Fósforo respecto a NRC 2001 para minimizar la contaminación ambiental por excretas sin perjudicar la fertilidad.<br><br><b>Estándares NASEM 2021:</b><br>• <b>Requerimiento en Dieta:</b> 0.35 - 0.42% de la MS en lactancia.<br>• <b>Absorción Intestinal:</b> 0.70 de biodisponibilidad promedio.<br>• <b>Mito de Fertilidad:</b> Niveles > 0.45% P no mejoran la reproducción y aumentan significativamente los costos de la ración y el impacto ambiental.",
            sources: "NASEM 2021 (8ª Edición, Cap. 7) • Dr. Bill Weiss (Cornell University)"
        },
        {
            id: "dmi",
            keywords: ["dmi", "consumo", "materia seca", "ingesta", "desouza", "ecuacion 2-1", "nrc", "nasem"],
            title: "📊 Consumo de Materia Seca (DMI) Ecuaciones Oficiales NASEM 2021",
            badge: "NASEM 2021 Eq. 2-1 (de Souza et al.)",
            formula: "DMI (kg/d) = [(3.7 + Parity*5.7) + 0.305*MilkE + 0.022*BW - 0.689*BCS] * [1 - exp(-0.212*(DIM/7 + 2.56))]",
            body: "<b>Capítulo 2 NASEM 2021:</b> La Ecuación 2-1 de Souza et al. (2019) reemplazó al modelo NRC 2001.<br><br><b>Factores Determinantes del DMI:</b><br>1. <b>Peso Vivo (BW):</b> Coeficiente lineal directo (+0.022 kg DMI por cada kg de BW).<br>2. <b>Energía de la Leche (MilkE):</b> Coeficiente (+0.305 kg DMI por Mcal de MilkE).<br>3. <b>Paridad:</b> Las vacas multiparas consumen +5.7 kg MS adicionales sobre las primíparas en pico.<br>4. <b>Condición Corporal (BCS):</b> Vacas sobreacondicionadas (BCS > 3.5) reducen su DMI en un 10-15%.<br>5. <b>Rango Normal de DMI:</b> 3.2% a 4.2% del Peso Vivo en lactancia pico (22.0 - 28.5 kg MS/día).",
            sources: "Libro Oficial NASEM 2021 (Página 32, Ecuación 2-1)"
        },
        {
            id: "fibra",
            keywords: ["fibra", "fiber", "fdn", "ndf", "fda", "pendf", "undf", "undf240h", "rumen", "acidosis", "sara", "grant"],
            title: "🌿 Carbohidratos Fibrosos (NDF, ADF, peNDF y uNDF240h) & Salud Ruminal",
            badge: "NASEM 2021 Cap. 5 & Miner Institute",
            formula: "peNDF mínimo >= 21 - 23% MS | uNDF240h máximo <= 0.35 - 0.40% BW",
            body: "<b>Capítulo 5 NASEM 2021 & Dr. Rick Grant (Miner Institute):</b> La fibra es esencial para la masticación, salivación (bicarbonato natural) y estratificación de la capa ruminal.<br><br><b>Límites y Fracciones Críticas:</b><br>• <b>FDN Total (aNDFom):</b> Mínimo 28 - 32% de la MS total (con 75% procedente de forrajes).<br>• <b>Fibra Efectiva Físicamente (peNDF):</b> Mínimo 21% de la MS (retendida en criba de 4 y 8 mm del Separador de Penn State).<br>• <b>Fibra Indigestible (uNDF240h):</b> Determina la capacidad física máxima del rumen. No debe superar el <b>0.38% del Peso Vivo</b> (2.47 kg de uNDF240h para una vaca de 650 kg).",
            sources: "NASEM 2021 Cap. 5 • Miner Institute / Cornell Shortcourse (Dr. Rick Grant)"
        },
        {
            id: "dcad",
            keywords: ["dcad", "bac", "preparto", "anionico", "hipocalcemia", "cloro", "azufre", "potasio", "sodio", "ph urinario"],
            title: "⚡ Balance Catiónico-Aniónico de la Dieta (DCAD / BAC) en Preparto",
            badge: "NASEM 2021 Cap. 12",
            formula: "DCAD (mEq/kg MS) = [(%Na/0.023 + %K/0.039) - (%Cl/0.0355 + 2*%S/0.016)] * 10",
            body: "<b>Capítulo 12 NASEM 2021 (Manejo de Transición):</b> El DCAD preparto controla la sensibilidad tisular a la Paratohormona (PTH).<br><br><b>Estrategia de Acidificación Metabólica:</b><br>• <b>Objetivo DCAD Preparto (21 días antes del parto):</b> <b>-50 a -150 mEq/kg MS</b>.<br>• <b>Monitoreo de pH Urinario:</b> El pH de la orina en vacas Holstein debe situarse entre <b>6.0 y 6.5</b> (pH normal no acidificado es 8.0-8.5).<br>• <b>Resultado Clínico:</b> Previene en un 90% la hipocalcemia clínica (fiebre de leche) y subclínica, reduciendo la metritis, retención de placenta y desplazamiento de abomaso.",
            sources: "NASEM 2021 Cap. 12 • Curso Formulación de Raciones 2026 (Dr. José Maiztegui)"
        },
        {
            id: "agua",
            keywords: ["agua", "water", "bebida", "hidratacion", "litros", "temperatura", "wetherly", "cardoso", "illinois"],
            title: "💧 Consumo de Agua de Bebida: Ecuaciones de la Universidad de Illinois",
            badge: "Univ. of Illinois 2025 (Wetherly & Cardoso)",
            formula: "Agua (L/día) = 15.99 + (1.58 * DMI_kg) + (0.90 * Milk_kg) + (0.05 * Na_g) + (1.20 * Temp_C)",
            body: "<b>Universidad de Illinois 2025 (Dres. Phil Cardoso & James Drackley):</b> El agua es el nutriente cuantitativamente más importante en rumiantes (la leche es 87% agua).<br><br><b>Pautas Prácticas de Consumo:</b><br>• <b>Vaca de Alta Producción (35 kg leche, 25°C):</b> <b>115 a 135 Litros/día</b>.<br>• <b>Estrés Hídrico:</b> Una restricción de agua del 10% reduce el DMI de forma inmediata en un 15-20%, provocando una caída drástica en el pico de producción.<br>• <b>Calidad de Agua:</b> Sólidos Totales Disueltos (TDS) < 1,000 ppm, Sulfatos < 500 ppm, Nitratos < 100 ppm.",
            sources: "University of Illinois Dairy Focus 2025 • Wetherly & Cardoso (2015)"
        },
        {
            id: "grasa",
            keywords: ["grasa", "grasas", "fat", "lipido", "omega", "linoleico", "linolenico", "epa", "dha", "tecnigrasas", "rolando", "hernandez", "fiv", "ovocito"],
            title: "🥑 Nutrición Lipídica y Ácidos Grasos Esenciales (Omega-6 y Omega-3)",
            badge: "Tecnigrasas SAS & UCV (MV MSc Rolando Hernández)",
            formula: "Relación Ideal AGPI Omega-6 : Omega-3 = 4.0 : 1.0 a 5.0 : 1.0 | Grasa Total: 5.0 - 7.0% MS",
            body: "<b>Investigaciones del MV MSc Rolando Hernández Mora (Tecnigrasas SAS & UCV):</b><br>La suplementación con ácidos grasos poliinsaturados (AGPI) sobrepasa la biohidrogenación ruminal mediante sales de calcio de ácidos grasos (soja y pescado).<br><br><b>Impacto en Reproducción y Fertilización In Vitro (FIV):</b><br>• <b>Relación Omega-6 : Omega-3:</b> Ajustar a <b>4.0:1 a 5.0:1</b> estimula la síntesis de progesterona en cuerpo lúteo, mejora el diámetro folicular y la viabilidad del ovocito en programas de aspiración folicular (OPU/FIV).<br>• <b>Dosis Recomendada:</b> 1.5 a 3.0% de la MS en forma de grasa inerte (300 a 500 g/cabeza/día).",
            sources: "Tecnigrasas SAS & Universidad Central de Venezuela • MV MSc Rolando Hernández Mora"
        },
        {
            id: "eficiencia",
            keywords: ["eficiencia", "fe", "hutjens", "penn state", "fcm", "leche corregida", "pico"],
            title: "🥛 Eficiencia Alimenticia (FE = FCM / DMI) & Metas del Hato",
            badge: "Penn State University (Dr. Mike Hutjens)",
            formula: "FE (kg Leche / kg MS) = Leche Corregida por Grasa al 3.5% (FCM) / Consumo DMI (kg/d)",
            body: "<b>Penn State University Dairy Extension (Dr. Mike Hutjens):</b> La Eficiencia Alimenticia mide cuántos kg de leche al 3.5% FCM produce la vaca por cada kg de Materia Seca consumido.<br><br><b>Metas de Eficiencia por Etapa:</b><br>• <b>Promedio del Hato:</b> <b>>= 1.50 kg Leche / kg DMI</b>.<br>• <b>Pico de Lactancia (30 - 90 DEL):</b> <b>1.60 - 1.85</b> (alta conversión de nutrientes).<br>• <b>Lactancia Tardía (> 200 DEL):</b> 1.30 - 1.40.<br>• <b>Retorno Económico:</b> Cada +0.10 unidades de mejora en FE representa +1.5 a +2.0 kg de leche extra sin aumentar el consumo de alimento.",
            sources: "Penn State University Extension • Dr. Mike Hutjens Dairy Course"
        },
        {
            id: "minerales",
            keywords: ["minerales", "minerals", "macrominerales", "microminerales", "oligoelementos", "quelatos", "organicos", "weiss", "nrc", "nasem"],
            title: "🧪 Catálogo y Biodisponibilidad de Minerales en NASEM 2021",
            badge: "NASEM 2021 Cap. 7 & Dr. Bill Weiss",
            formula: "Biodisponibilidad Orgánica (Quelatos/Metioninatos) >= 120 - 160% vs Óxidos Inorgánicos",
            body: "<b>Capítulo 7 NASEM 2021:</b> Revisa a fondo los requerimientos de 14 minerales esenciales.<br><br><b>Requerimientos Clave en MS:</b><br>• <b>Macrominerales (g/kg MS):</b> Ca (6.5), P (3.8), Mg (3.0), K (12.0), Na (2.2), Cl (3.0), S (2.0).<br>• <b>Microminerales (mg/kg MS ppm):</b> Fe (120), Zn (60), Cu (15), Mn (40), I (0.8), Se (0.3), Co (0.2).<br>• <b>Ventaja de Minerales Quelatados:</b> La sustitución del 30-50% de los microminerales inorgánicos por proteolitos/quelatos orgánicos reduce las pérdidas por antagonismo (ej. Cobre vs Molibdeno/Azufre) y potencia la inmunidad mamaria (reducida Somatic Cell Count SCC).",
            sources: "NASEM 2021 Cap. 7 • Ohio State University (Dr. Bill Weiss)"
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
    renderCornellModule();
    renderPresetsTable();
});
