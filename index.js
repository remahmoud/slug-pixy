// Description: function to create a slug from a string.
/**
 *
 * @param {String} text
 * @returns String
 */
function sluger(text) {
    return text
        .toString() // Convert to string
        .toLowerCase() // Convert to lowercase
        .trim() // Trim whitespace from both sides of a string
        .normalize("NFD") // Change diacritics
        .replace(/\s+/g, "-") // Replace spaces with dashes
        .replace(/[^\w-]+/g, "") // Remove non-word characters (except dashes)
        .replace(/--+/g, "-") // Replace consecutive dashes with a single dash
        .replace(/^-+|-+$/g, ""); // Remove dashes from the beginning or end
}

module.exports = sluger;
