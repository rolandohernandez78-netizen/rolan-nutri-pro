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
