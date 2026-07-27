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
