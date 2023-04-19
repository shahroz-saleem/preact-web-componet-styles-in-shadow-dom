export const comp = {
  padding: "50px",
  border: "2px solid black",
  background: "#222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
};

export const h1 = {
  color: "red",
  marginTop: "0px",
};

export const card = {
  margin: "20px 0",
  width: "190px",
  height: "254px",
  transition: "all 0.2s",
  position: "relative",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.04) rotate(1deg)",
  },
};

export const cardInner = {
  width: "inherit",
  height: "inherit",
  background: "rgba(255, 255, 255, 0.05)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(10px)",
  borderRadius: "8px",
};

export const circle = {
  width: "100px",
  height: "100px",
  background: "radial-gradient(#b0e633, #53ef7d)",
  borderRadius: "50%",
  position: "absolute",
  animation: "move-up6 2s ease-in infinite alternate-reverse",

  "&:nth-child(1)": {
    top: "-25px",
    left: "-25px",
  },

  "&:nth-child(2)": {
    bottom: "-25px",
    right: "-25px",
    animationName: "move-down1",
  },
};
