import { h } from "preact";
import register from "preact-custom-element";

const shadowDomWebComp2 = ({ place = "Outside" }) => {
  return (
    <>
      <link rel="stylesheet" href="/assets/wc2.css" />
      <div class="comp">
        <h1>WC2 Inline CSS</h1>
        <p>{place} Shadow Root</p>
        <div class="card">
          <div class="circle" />
          <div class="circle" />
          <div class="card-inner" />
        </div>
      </div>
    </>
  );
};

register(shadowDomWebComp2, "x-shadow-b", ["place"], { shadow: true });

export default shadowDomWebComp2;
