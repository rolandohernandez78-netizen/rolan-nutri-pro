/**
 * RolanNutriPro - AI Nutrition Q&A Knowledge Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 * Standards: NASEM 2021 (8th Ed.), Cornell CNCPS 2023, Univ. Illinois 2025, Penn State 2025, Tecnigrasas 2018
 */

const STOP_WORDS = new Set([
    "de", "del", "la", "el", "en", "con", "sin", "por", "para", "que", "un", "una", 
    "los", "las", "como", "cual", "cuanto", "cuanta", "es", "son", "sobre", "mas", 
    "menos", "dame", "busca", "dime", "y", "o", "a", "al", "mi", "mis", "tu", "tus", 
    "su", "sus", "ver", "vaca", "vacas", "ganado", "animal", "dame", "dar", "hacer", "tiene", "necesita"
]);

const mineralMap = {
    "calcio": "Ca", "ca": "Ca",
    "fosforo": "P", "p": "P",
    "magnesio": "Mg", "mg": "Mg",
    "potasio": "K", "k": "K",
    "sodio": "Na", "na": "Na",
    "cloro": "Cl", "cl": "Cl",
    "azufre": "S", "s": "S",
    "hierro": "Fe", "fe": "Fe",
    "cinc": "Zn", "zinc": "Zn", "zn": "Zn",
    "cobre": "Cu", "cu": "Cu",
    "manganeso": "Mn", "mn": "Mn",
    "yodo": "I", "i": "I",
    "selenio": "Se", "se": "Se",
    "cobalto": "Co", "co": "Co"
};

const qaKnowledgeBase = [
    {
        id: "vitamins",
        keywords: ["vitamina", "vitaminas", "vitamina a", "vitamina d", "vitamina d3", "vitamina e", "niacina", "colina", "biotina", "retinol", "tocoferol"],
        title: "💊 Vitaminas Liposolubles (A, D3, E) e Hidrosolubles (NASEM 2021 Cap. 8)",
        badge: "NASEM 2021 (Cap. 8)",
        formula: "Vit A: 110 UI/kg BW | Vit D3: 30 UI/kg BW | Vit E: 1.6-2.5 UI/kg BW | Niacina: 6-12 g/d | Colina: 12.9 g/d MP",
        body: `<b>Requerimientos de Vitaminas NASEM 2021 en Ganado Lechero (Capítulo 8):</b>
<br>• <b>Vitamina A (Retinol):</b> 70,000 - 100,000 UI/día. Esencial para salud de mucosas epiteliales, reproducción y función inmune.
<br>• <b>Vitamina D3 (Colecalciferol):</b> 20,000 - 30,000 UI/día. Regula la homeostasis, absorción intestinal y resorción de Calcio y Fósforo.
<br>• <b>Vitamina E (Alfa-Tocoferol):</b> 1,000 - 2,000 UI/día en preparto. Potente antioxidante que reduce la frecuencia de retención de placenta y mastitis.
<br>• <b>Niacina (B3) y Colina Rumen-Bypass:</b> 12.9 g/d de Colina Metabolizable reduce la acumulación de triglicéridos hepáticos previniendo hígado graso y cetosis metabólica.
<br>• <b>Biotina (B7):</b> 20 mg/día estimula la síntesis de queratina en la pezuña (firmeza podal) e incrementa el rendimiento lácteo (+1.2 kg/día).`,
        sources: "NASEM 2021 8ª Edición • Capítulo 8: Vitamin Requirements • Weiss et al."
    },
    {
        id: "carbohydrates",
        keywords: ["carbohidratos", "nfc", "nsc", "almidon", "azucares", "pectinas", "tdn", "digestibilidad almidon", "kps"],
        title: "🌽 Carbohidratos No Fibrosos (NFC), Almidón y Azúcares (NASEM 2021 Cap. 5)",
        badge: "NASEM 2021 (Cap. 5)",
        formula: "NFC (%) = 100 - [NDF% + CP% + EE% + Cenizas%] | Meta Dietaria NFC: 38.0% - 42.0% MS",
        body: `<b>Dinámica de Carbohidratos Fermentables y Almidón Ruminal (NASEM 2021 Capítulo 5):</b>
<br>• <b>Almidón Ruminal:</b> Nivel óptimo de <b>24.0% a 28.0% de la MS</b> en lactancia alta. Niveles > 30.0% incrementan el riesgo de Acidosis Ruminal Subaguda (SARA).
<br>• <b>Azúcares Solubles (Sacarosa / Melaza):</b> 4.0% - 6.0% de la MS para estimular bacterias celulolíticas y la ingesta inicial.
<br>• <b>Pectinas (Pulpa de Cítricos / Remolacha):</b> Carbohidratos no fibrosos de rápida fermentación sin producción de ácido láctico (rumen seguro).
<br>• <b>Digestibilidad Ruminal 7h del Almidón:</b> Meta >= 75% del almidón total (silaje de maíz procesado con kPS > 70%).`,
        sources: "NASEM 2021 8ª Edición • Capítulo 5: Carbohydrates • Ferraretto & Shaver"
    },
    {
        id: "fiber",
        keywords: ["fibra", "ndf", "adf", "pendf", "undf", "undf240", "pdndf", "lignina", "paja", "forraje", "salud ruminal", "penn state"],
        title: "🌿 Fibra Detergente Neutro (NDF), ADF y Fibra Efectiva peNDF (NASEM 2021 & Penn State)",
        badge: "NASEM 2021 & Penn State",
        formula: "NDF Total Min: 28.0% - 32.0% MS | NDF Forraje Min: 19.0% - 21.0% MS | peNDF Min: >= 21.0% MS",
        body: `<b>Requerimientos de Fibra y Estratificación del Rumen (NASEM 2021 & Penn State University):</b>
<br>• <b>NDF Total:</b> 28.0% - 32.0% de la MS para mantener la motilidad ruminal y tiempo de rumiado (> 450 minutos/día).
<br>• <b>NDF Forrajera (fNDF):</b> Mínimo 19.0% - 21.0% de la MS proveniente de forrajes efectivos.
<br>• <b>ADF (Fibra Detergente Ácido):</b> 19.0% - 21.0% de la MS, inversamente correlacionado con la digestibilidad de la energía.
<br>• <b>peNDF (Separador de Partículas Penn State):</b> Retención >= 21.0% de la MS en las cribas superior y media (8 mm y 19 mm) para estimular la salivación rica en bicarbonato de sodio.`,
        sources: "NASEM 2021 8ª Edición • Capítulo 5 • Penn State Particle Separator Manual"
    },
    {
        id: "lipids",
        keywords: ["lipidos", "grasa", "acidos grasos", "palmitico", "oleico", "linoleico", "linolenico", "c16", "c18", "extracto etereo", "ee", "jabones de calcio", "tecnigrasas", "bypass fat"],
        title: "🥑 Lípidos, Grasas Inertes y Ácidos Grasos Esenciales (NASEM Cap. 4 & Tecnigrasas SAS)",
        badge: "NASEM Cap. 4 & Tecnigrasas",
        formula: "Grasa Total Dietaria Max: 5.5% - 6.5% MS | Extracto Etéreo (EE): 3.5% - 6.0% MS",
        body: `<b>Perfil de Ácidos Grasos para Rendimiento Lácteo y Fertilidad (MV MSc Rolando Hernández Mora):</b>
<br>• <b>Lípidos Totales:</b> No sobrepasar el 6.5% de la MS para evitar el recubrimiento forrajero por ácidos grasos libres (NEFA) que inhiben las bacterias celulolíticas.
<br>• <b>Ácido Palmítico (C16:0 >= 80%):</b> Incrementa directamente la síntesis de novo de grasa en leche y la masa grasa en tanque.
<br>• <b>Ácido Oleico (C18:1) & Sales de Calcio:</b> Elevada digestibilidad intestinal (> 85%) y estimulación de la progesterona folicular para aumentar la tasa de concepción en los primeros 90 días postparto.`,
        sources: "NASEM 2021 Capítulo 4: Fat Requirements • Tecnigrasas SAS Technical Bulletin 2018"
    },
    {
        id: "protein",
        keywords: ["proteina", "cp", "rup", "rdp", "mp", "proteina metabolizable", "proteina cruda", "nitrogeno", "urea", "mun"],
        title: "🧬 Proteína Metabolizable (MP), RUP y RDP en Rumiantes (NASEM 2021 Cap. 6)",
        badge: "NASEM 2021 (Cap. 6)",
        formula: "MP Total (g/d) = Proteína Microbiana Absorbida (MiP) + RUP Digestible Intestinal",
        body: `<b>Requerimientos de Proteína Metabolizable NASEM 2021:</b>
<br>• <b>Proteína Cruda (CP):</b> Rango dietario objetivo de <b>15.0% - 16.5% de la MS</b>.
<br>• <b>RDP (Proteína Degradable en Rumen):</b> 9.5% - 10.5% de la MS para maximizar síntesis de proteína microbiana.
<br>• <b>RUP (Proteína Insoluble en Rumen):</b> 5.5% - 6.5% de la MS digestible en intestino delgado.
<br>• <b>Nitrógeno Ureico en Leche (MUN):</b> Meta dietaria de <b>8.0 a 12.0 mg/dL</b>. Valores > 14 mg/dL indican exceso de RDP o déficit de carbohidratos fermentables.`,
        sources: "NASEM 2021 8ª Edición • Capítulo 6: Protein and Amino Acids"
    },
    {
        id: "calcium_p",
        keywords: ["calcio", "ca", "fosforo", "p", "macrominerales", "hueso", "leche calcio", "relacion ca p"],
        title: "🧪 Calcio (Ca) y Fósforo (P) en Rumiantes (NASEM 2021 Cap. 7)",
        badge: "NASEM 2021 (Cap. 7)",
        formula: "Requerimiento Ca: 6.5 g/kg MS | Requerimiento P: 3.8 g/kg MS | Relación Ca:P = 1.5 - 2.0 : 1.0",
        body: `<b>Modelo Nutricional de Macrominerales NASEM 2021 (Capítulo 7):</b>
<br>• <b>Calcio (Ca):</b> Requerido para contracción muscular, transmisión nerviosa y secreción láctea (1.22 g Ca/kg leche). Requerimiento dietario: <b>6.5 g/kg MS</b> (~150-180 g/día en lactancia alta).
<br>• <b>Fósforo (P):</b> Indispensable para síntesis de ATP, amortiguación ruminal y metabolismo óseo. Requerimiento dietario: <b>3.8 g/kg MS</b> (~85-100 g/día).
<br>• <b>Relación Ca:P:</b> Debe mantenerse entre <b>1.5:1 y 2.0:1</b> para prevenir osteodistrofia y deficiencias secundarias.`,
        sources: "NASEM 2021 8ª Edición • Capítulo 7: Mineral Requirements"
    },
    {
        id: "energy",
        keywords: ["energia", "nel", "nem", "neg", "tdn", "mcal", "energia neta"],
        title: "⚡ Energía Neta de Lactancia (NEL) y Carbohidratos (NASEM 2021 Cap. 3)",
        badge: "NASEM 2021 (Cap. 3)",
        formula: "NEL Total (Mcal/d) = NEm (0.080 * BW^0.75) + NE Milk (Leche * [0.0929*Fat% + 0.0547*Prot% + 0.192])",
        body: `<b>Sistema de Energía Neta NASEM 2021:</b>
<br>• <b>Densidad Energética Dietaria:</b> 1.65 - 1.75 Mcal NEL/kg MS en lactancia alta.
<br>• <b>Almidón Ruminal:</b> Meta de <b>24.0% - 28.0% de la MS</b>. Nivel máximo de 30.0% para prevenir Acidosis Ruminal Subaguda (SARA).
<br>• <b>Nutrientes Digestibles Totales (TDN):</b> 68% - 74% de la MS en vacas en ordeño.`,
        sources: "NASEM 2021 8ª Edición • Capítulo 3: Energy Requirements"
    },
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
        keywords: ["aminoacidos", "lisina", "metionina", "lys", "met", "relacion", "cornell", "cncps", "bypass"],
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
        keywords: ["goldilocks", "dieta seca", "vaca seca", "paja", "volumen", "drant"],
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
    const rawQueryWords = cleanQuery.split(/[^a-z0-9]+/).filter(w => w.length > 0);
    
    // Filter out Spanish stop words
    const queryWords = rawQueryWords.filter(w => !STOP_WORDS.has(w) && w.length >= 1);

    // 1. DYNAMIC MINERAL ENGINE LOOKUP (NASEM 2021 Cap. 7)
    let matchedMineralKey = null;
    for (const w of queryWords) {
        if (mineralMap[w]) {
            matchedMineralKey = mineralMap[w];
            break;
        }
    }

    if (matchedMineralKey && nutrientDB && nutrientDB.mineral_catalog && nutrientDB.mineral_catalog[matchedMineralKey]) {
        const item = nutrientDB.mineral_catalog[matchedMineralKey];
        const isMacro = item.unit.startsWith("g/");
        const reqVal = isMacro ? `${item.req_per_kg_dm} g/kg MS` : `${item.req_per_kg_dm} mg/kg MS (ppm)`;

        // Calculate DMI for current category or 24.5 kg default
        const bw = parseFloat(bwInput ? bwInput.value : 650) || 650;
        const estDmi = bw * 0.037;
        const totalVal = isMacro ? `${(estDmi * item.req_per_kg_dm).toFixed(1)} g/día` : `${(estDmi * item.req_per_kg_dm).toFixed(0)} mg/día`;

        qaAnswerContainer.style.display = "block";
        qaAnswerContainer.innerHTML = `
            <div class="qa-answer-card" style="background:#ffffff; border-left:5px solid var(--primary-emerald); border:1px solid #cbd5e1; padding:18px; border-radius:12px;">
                <div class="qa-answer-title" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-size:1.15rem; font-weight:700; color:#0f172a;">🧪 Ficha Nutricional NASEM 2021: ${item.name} (${item.symbol})</span>
                    <span class="badge-source" style="background:#ecfdf5; color:#047857; border-color:#a7f3d0;">${item.category}</span>
                </div>
                <div class="qa-formula-box" style="background:#f8fafc; border:1px dashed #059669; border-radius:8px; padding:10px 14px; margin:10px 0; color:#065f46; font-weight:700;">
                    📐 Requerimiento NASEM 2021: ${reqVal} | Consumo Total Est: ${totalVal}
                </div>
                <div class="qa-answer-body" style="font-size:0.95rem; line-height:1.6; color:#1e293b;">
                    <strong style="color:#047857;">Función Fisiológica Principal:</strong> ${item.function}
                    <br><br>
                    <strong style="color:#0f172a;">Síntomas Clínicos de Deficiencia:</strong> ${item.deficiency}
                    <br><br>
                    <strong style="color:#b45309;">Límite Máximo Tolerable NASEM:</strong> ${isMacro ? item.max_tolerable + "% MS" : item.max_tolerable + " ppm"}
                </div>
                <div class="qa-sources-footer" style="margin-top:12px; padding-top:10px; border-top:1px solid #e2e8f0; font-size:0.84rem; color:#475569;">📖 <strong style="color:#0f172a;">Fuente Autorizada:</strong> NASEM 2021 8ª Edición • Capítulo 7: Mineral Requirements</div>
            </div>
        `;
        return;
    }

    // 2. GENERAL KNOWLEDGE BASE LOOKUP
    let matchedItem = null;
    let maxHits = 0;

    qaKnowledgeBase.forEach(item => {
        let hits = 0;

        // Keyword Matching
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

        // Title Match
        const normTitle = removeAccents(item.title);
        queryWords.forEach(qWord => {
            if (qWord.length >= 3 && normTitle.includes(qWord)) {
                hits += 10;
            }
        });

        // Body Match
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

    const CONFIDENCE_THRESHOLD = 15;

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
                            <li>Vitaminas Liposolubles (A, D3, E) e Hidrosolubles (Niacina, Colina, Biotina)</li>
                            <li>Carbohidratos No Fibrosos (NFC), NSC, Almidón Ruminal y Azúcares</li>
                            <li>Fibra Detergente Neutro (NDF), ADF, peNDF (Penn State) y uNDF240h</li>
                            <li>Lípidos, Grasas Inertes, Ácido Palmítico (C16:0) y Oleico (C18:1)</li>
                            <li>Proteína Metabolizable (MP), CP, RUP, RDP y Aminoácidos (Lys:Met)</li>
                            <li>Energía Neta (NEL, NEm, NEg), TDN y Requerimientos Minerales (NASEM Cap. 7)</li>
                            <li>Consumo de Materia Seca (DMI) y Ecuación NASEM 2021 Eq. 2-1</li>
                            <li>Balance Catiónico-Aniónico (DCAD / BAC) en Preparto</li>
                            <li>Consumo de Agua de Bebida (Ecuación Illinois Wetherly & Cardoso)</li>
                            <li>Eficiencia Alimenticia FE (Metas Penn State Dr. Mike Hutjens)</li>
                        </ul>
                    </div>
                </div>
            `;
        }
    }
}
