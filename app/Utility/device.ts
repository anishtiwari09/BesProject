export const isMobile = (() => {
  console.log(navigator);
  if (
    typeof navigator === "undefined" ||
    typeof navigator.userAgent !== "string"
  ) {
    return false;
  }
  return /Mobile/.test(navigator.userAgent);
})();
