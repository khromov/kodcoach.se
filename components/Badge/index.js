export default function Badge({ className = 'bg-gray-600 text-white', text }) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono tracking-tight ${className}`}
    >
      {text}
    </span>
  );
}
