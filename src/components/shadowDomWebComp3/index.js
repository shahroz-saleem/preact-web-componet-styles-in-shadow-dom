import { h } from "preact";
import StyleComp from "./style";
import register from "preact-custom-element";

const shadowDomWebComp3 = ({ place = "Outside" }) => {
  return (
    <>
      <StyleComp />
      <div class="comp">
        <h1>WC3 Style-Component</h1>
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

register(shadowDomWebComp3, "x-shadow-c", ["place"], { shadow: true });

export default shadowDomWebComp3;