function Button({ children, href, variant = "primary" }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors";

  const variants = {
    primary:
      "bg-slate-950 text-white hover:bg-slate-800",

    secondary:
      "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;