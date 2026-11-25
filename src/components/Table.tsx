type Row = [label: string, value: string];

interface TableProps {
  heading?: Row;
  rows: Row[];
  total?: Row;
  note?: string;
}

function HighlightRow({ row: [label, value] }: { row: Row }) {
  return (
    <div className="row bg-neutral-900 px-2 font-bold">
      <p>{label}</p>
      <p className="shrink-0">{value}</p>
    </div>
  );
}

export function Table({ heading, rows, total, note }: TableProps) {
  return (
    <div className="my-2 border-t border-neutral-800 text-base">
      {heading && <HighlightRow row={heading} />}
      {rows.map(([label, value]) => (
        <div key={label} className="row px-2">
          <p>{label}</p>
          <p className="shrink-0 text-neutral-400">{value}</p>
        </div>
      ))}
      {total && <HighlightRow row={total} />}
      {note && <small className="mt-2 block italic">{note}</small>}
    </div>
  );
}
