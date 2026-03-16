// Button.jsx — Reusable button component.
// Props: label (text), variant ("secondary" | "primary")

function Button({ label, variant = "secondary" }) {
    // Shared styles for all buttons
    const base = "mt-auto w-full rounded-full px-4 py-2 text-base font-medium cursor-pointer border-none transition-colors duration-200";

    // Variant-specific colours — each class maps to a component token in index.css
    const variants = {
        secondary: "bg-btn-secondary text-text-primary hover:bg-btn-secondary-hover",
        primary:   "bg-btn-primary text-btn-primary-foreground hover:bg-btn-primary-hover",
        tertiary: "bg-btn-tertiary text-btn-tertiary-foreground hover:bg-btn-tertiary-hover",
    };

    return (
        <button className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
}

export default Button;
