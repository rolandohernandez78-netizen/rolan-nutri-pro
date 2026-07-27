/**
 * RolanNutriPro - Helpers & Utility Functions
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

function removeAccents(str) {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
