import { h } from "preact";
import register from "preact-custom-element";
import { card, cardInner, circle, comp, h1 } from "./style";

const shadowDomWebComp1 = ({ place = "Outside" }) => {
  return (
    <>
      <div style={comp}>
        <h1 style={h1}>WC1 Style Object</h1>
        <p>{place} Shadow Root</p>
        <div style={card}>
          <div style={circle} />
          <div style={circle} />
          <div style={cardInner} />
        </div>
      </div>
    </>
  );
};

register(shadowDomWebComp1, "x-shadow-a", ["place"], { shadow: true });

export default shadowDomWebComp1;
