type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
};

export default function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      {index && (
        <span className="font-serif text-sm text-champagne tabular-nums">
          {index}
        </span>
      )}
      <span className="eyebrow">{children}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-champagne/60 to-transparent" />
    </div>
  );
}
