interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "category";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-sage-light/30 text-forest",
    category: "bg-brown/10 text-brown",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
