import { cn } from "@/lib/utils";

type Props = {
  text: string;
  containerClassName?: HTMLDivElement["className"];
  gridClassName?: HTMLDivElement["className"];
  rowsClassName?: HTMLDivElement["className"];
  colsClassName?: HTMLDivElement["className"];
  renderedItems?: number;
};
export function PatternBackground(props: Props) {
  // Definiert die Anzahl der Reihen und Spalten im Raster
  // 10x10 reicht meistens locker aus, um den sichtbaren Bereich bei 200vw/200vh zu füllen
  const rows = Array.from({ length: props.renderedItems || 20 });
  const cols = Array.from({ length: props.renderedItems || 20 });

  return (
    // Äußerer Wrapper: Nimmt den ganzen Bildschirm ein, versteckt Überstand, setzt Hintergrund
    <div
      className={cn(
        "flex h-full w-full items-center justify-center overflow-hidden font-sans select-none",
        props.containerClassName,
      )}
    >
      <div
        className={cn(
          "flex -rotate-30 flex-col justify-center",
          props.gridClassName,
        )}
      >
        {rows.map((_, rowIndex) => (
          <div
            key={rowIndex}
            // Jede zweite Reihe wird durch -translate-x-32 (entspricht -8rem) versetzt
            className={cn(
              `flex justify-center whitespace-nowrap ${
                rowIndex % 2 === 1 ? "-translate-x-32" : ""
              }`,
              props.rowsClassName,
            )}
          >
            {cols.map((_, colIndex) => (
              // Einzelnes Element (Logo + Text)
              <div
                key={colIndex}
                className={cn(
                  "flex items-center text-6xl font-extrabold tracking-tight",
                  props.colsClassName,
                )}
              >
                {/* Der dynamische Haupttext */}
                {props.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatternBackground;
