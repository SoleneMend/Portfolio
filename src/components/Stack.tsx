import type { CSSProperties } from "react";
import type { StackGroup, Ui } from "../data/type";

export default function Stack({ ui, stack }: { ui: Ui; stack: StackGroup[] }) {
  return (
    <section className="stack">
      <h2>{ui.stack}</h2>
      <dl>
        {stack.map(({ id, group, items }, i) => (
          <div
            key={id}
            className="reveal"
            style={{ "--i": i } as CSSProperties}
          >
            <dt>{group}</dt>
            <dd>
              <ul className="chips">
                {items.split(", ").map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
