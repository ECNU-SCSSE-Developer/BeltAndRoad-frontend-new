export const humpToHyphen = hump =>
    hump.replace(hump[0], hump[0].toLowerCase()).replace(/([A-Z])/g, "-$1").toLowerCase();
