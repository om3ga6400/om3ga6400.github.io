let outlinesEnabled = false;
Object.defineProperty(window, "debugContainer", {
  get() {
    outlinesEnabled = !outlinesEnabled;
    document.querySelectorAll("*").forEach((e) => (e.style.outline = outlinesEnabled ? "1px solid red" : ""));
    return outlinesEnabled;
  },
});
