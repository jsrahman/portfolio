import { currentFocus } from "../../data/portfolioData";

function NowSection() {
  return (
    <section className="card now-card">
      <h3>Right Now</h3>
      <ul className="now-list">
        {currentFocus.map((item) => (
          <li key={item.text} className="now-item">
            <span className={item.dotClass}></span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NowSection;
