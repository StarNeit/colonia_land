const getDebugMode = (): boolean => (!!import.meta.env?.DEV) || window.location.href.includes('develop=true');

export const isDebugMode = getDebugMode();
