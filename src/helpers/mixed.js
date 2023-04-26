export const yearsArray = (n) => {
  var max = new Date().getFullYear();
  var min = max - n;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

export const monthArray = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre"
];
