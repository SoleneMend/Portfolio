import type { NowContent, Ui } from "../data/type";

export default function Now({ ui, now }: { ui: Ui; now: NowContent }) {
  return (
    <section id="en-ce-moment" className="reveal">
      <div className="now-head">
        <h2>{ui.now}</h2>
        <time dateTime={now.updated}>
          {ui.updated} {now.updatedLabel}
        </time>
      </div>
      <ul className="now-list">
        {now.items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
