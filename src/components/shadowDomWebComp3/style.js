import { h } from "preact";

const StyleComp = () => {
  return (
    <style>
      {`
        .comp {
          padding: 50px;
          border: 2px solid black;
          background: #222;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
        }

        h1 {
          color: red;
          margin-top: 0px;
        }

        .card {
          margin: 20px 0;
          width: 190px;
          height: 254px;
          transition: all 0.2s;
          position: relative;
          cursor: pointer;
        }

        .card-inner {
          width: inherit;
          height: inherit;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          border-radius: 8px;
        }

        .card:hover {
          transform: scale(1.04) rotate(1deg);
        }

        .circle {
          width: 100px;
          height: 100px;
          background: radial-gradient(#b0e633, #53ef7d);
          border-radius: 50%;
          position: absolute;
          animation: move-up6 2s ease-in infinite alternate-reverse;
        }

        .circle:nth-child(1) {
          top: -25px;
          left: -25px;
        }

        .circle:nth-child(2) {
          bottom: -25px;
          right: -25px;
          animation-name: move-down1;
        }

        @keyframes move-up6 {
          to {
            transform: translateY(-10px);
          }
        }

        @keyframes move-down1 {
          to {
            transform: translateY(10px);
          }
        }

      `}
    </style>
  );
};

export default StyleComp;
