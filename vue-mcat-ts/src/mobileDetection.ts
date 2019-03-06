export function mobileDetection(): boolean {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

export function isApple(): boolean {
    return (/iPad|iPhone|iPod/.test(navigator.userAgent) && !(<any>window).MSStream) ||
        (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
};