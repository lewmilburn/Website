type Row = [label: string, value: string];

interface TableProps {
  rows: Row[];
  total?: Row;
  note?: string;
}

export function Table({ rows, total, note }: TableProps) {
  return (
    <div className="mt-2 mb-6 border-t border-neutral-800 text-base">
      {rows.map(([label, value]) => (
        <div key={label} className="row">
          <p>{label}</p>
          <p className="shrink-0 text-neutral-400">{value}</p>
        </div>
      ))}
      {total && (
        <div className="row -mx-2 bg-neutral-900 px-2 font-bold">
          <p>{total[0]}</p>
          <p className="shrink-0">{total[1]}</p>
        </div>
      )}
      {note && <small className="mt-2 block italic">{note}</small>}
    </div>
  );
}
