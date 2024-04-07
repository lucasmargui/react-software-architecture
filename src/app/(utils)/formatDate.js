// Exporting the function in a module environment
export function formatDate(date) {
    // Extract year, month, and day from the Date object
    const year = date.getFullYear();
    // JavaScript months are zero-indexed, so we add 1 to get the correct month
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    
    // Concatenate the parts into the desired format
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate;
}
