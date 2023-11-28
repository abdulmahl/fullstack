export const guid = () => {
    let uniqueId = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    uniqueId = uniqueId.toString(36).slice(0, 6).padStart(6, "0").toLocaleUpperCase();
    return (uniqueId);
}