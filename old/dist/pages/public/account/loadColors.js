const elements = [
  {
    class: ".information",
    property: "background-color",
    special: "0.2",
    styleSheet: 7,
  },
  {
    class: ".information",
    property: "border-color",
    special: "",
    styleSheet: 7,
  },
  {
    class: ".more-info-content svg",
    property: "fill",
    special: "",
    styleSheet: 7,
  },
  {
    class: ".more-info-content svg",
    property: "color",
    special: "",
    styleSheet: 7,
  },
  {
    class: ".more-info-content p",
    property: "color",
    special: "",
    styleSheet: 7,
  },
  {
    class: ".more-info-content a",
    property: "color",
    special: "",
    styleSheet: 7,
  },
  {
    class: ".page-selected",
    property: "border-bottom-color",
    special: "",
    styleSheet: 6,
  },
  {
    class: ".page-selected",
    property: "color",
    special: "",
    styleSheet: 6,
  },
];
function loadColors(color) {
  elements.forEach((element) => {
    document.styleSheets[element.styleSheet].insertRule(
      `${element.class} { ${element.property}: rgb(${color} ${
        element.special != "" ? `,${element.special}` : ``
      }) !important;}`
    );
  });
}
