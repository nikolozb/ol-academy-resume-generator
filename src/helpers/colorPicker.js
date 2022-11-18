export const colorPicker = (color) => {
  const colors = {
    ClassicBlack: "#000000",
    NightSky: "#436975",
    BlueprintBlue: "#305FEC",
    SeaSide: "#0E9FC1",
    MintTeal: "#7EBCA3",
    MartiniGreen: "#ACB75A",
    ElectricPurple: "#9097BE",
    BoomingViolet: "#AC7BAE",
  };

  if (!color) {
    return colors.ClassicBlack;
  } else if (color) {
    return colors[color];
  } else {
    return false;
  }
};
