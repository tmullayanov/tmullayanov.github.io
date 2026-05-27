function applyTheme(theme) {
    if (theme === "light") {
        document.documentElement.classList.add("light");
    } else {
        document.documentElement.classList.remove("light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const stored = localStorage.getItem("theme");
    if (stored) applyTheme(stored);

    const btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", () => {
        const isLight = document.documentElement.classList.contains("light");
        const newTheme = isLight ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});
