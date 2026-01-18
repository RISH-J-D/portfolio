export const getAssetPath = (path) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const baseUrl = import.meta.env.BASE_URL;

    // If base url ends with slash, just append path
    // If base url doesn't end with slash, add one
    const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    return `${prefix}${cleanPath}`;
};
