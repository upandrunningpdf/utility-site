// ==========================================================
// CONVERT CHECK NOW
// MAIN JAVASCRIPT FILE
// ==========================================================


// ==========================================================
// SECTION 1 — CONVERSION DATA
// ==========================================================

const units = {

  // --------------------------------------------------------
  // LENGTH
  // --------------------------------------------------------

  length: {
    name: "Length",
    base: "meter",

    units: {
      millimeter: { name: "Millimeter", factor: 0.001 },
      centimeter: { name: "Centimeter", factor: 0.01 },
      meter: { name: "Meter", factor: 1 },
      kilometer: { name: "Kilometer", factor: 1000 },
      inch: { name: "Inch", factor: 0.0254 },
      foot: { name: "Foot", factor: 0.3048 },
      yard: { name: "Yard", factor: 0.9144 },
      mile: { name: "Mile", factor: 1609.344 },
      nauticalMile: { name: "Nautical Mile", factor: 1852 }
    }
  },


  // --------------------------------------------------------
  // AREA
  // --------------------------------------------------------

  area: {
    name: "Area",
    base: "squareMeter",

    units: {
      squareMillimeter: { name: "Square Millimeter", factor: 0.000001 },
      squareCentimeter: { name: "Square Centimeter", factor: 0.0001 },
      squareMeter: { name: "Square Meter", factor: 1 },
      squareKilometer: { name: "Square Kilometer", factor: 1000000 },
      squareInch: { name: "Square Inch", factor: 0.00064516 },
      squareFoot: { name: "Square Foot", factor: 0.09290304 },
      squareYard: { name: "Square Yard", factor: 0.83612736 },
      acre: { name: "Acre", factor: 4046.8564224 },
      hectare: { name: "Hectare", factor: 10000 },
      squareMile: { name: "Square Mile", factor: 2589988.110336 }
    }
  },


  // --------------------------------------------------------
  // WEIGHT & MASS
  // --------------------------------------------------------

  mass: {
    name: "Weight & Mass",
    base: "gram",

    units: {
      milligram: { name: "Milligram", factor: 0.001 },
      gram: { name: "Gram", factor: 1 },
      kilogram: { name: "Kilogram", factor: 1000 },
      metricTon: { name: "Metric Ton", factor: 1000000 },
      ounce: { name: "Ounce", factor: 28.349523125 },
      pound: { name: "Pound", factor: 453.59237 },
      stone: { name: "Stone", factor: 6350.29318 },
      usTon: { name: "US Ton", factor: 907184.74 },
      imperialTon: { name: "Imperial Ton", factor: 1016046.9088 }
    }
  },


  // --------------------------------------------------------
  // TEMPERATURE
  // --------------------------------------------------------

  temperature: {
    name: "Temperature",
    special: true,

    units: {
      celsius: { name: "Celsius" },
      fahrenheit: { name: "Fahrenheit" },
      kelvin: { name: "Kelvin" }
    }
  },


  // --------------------------------------------------------
  // VOLUME
  // --------------------------------------------------------

  volume: {
    name: "Volume",
    base: "liter",

    units: {
      milliliter: { name: "Milliliter", factor: 0.001 },
      liter: { name: "Liter", factor: 1 },
      cubicCentimeter: { name: "Cubic Centimeter", factor: 0.001 },
      cubicMeter: { name: "Cubic Meter", factor: 1000 },
      cubicInch: { name: "Cubic Inch", factor: 0.016387064 },
      cubicFoot: { name: "Cubic Foot", factor: 28.316846592 },
      cubicYard: { name: "Cubic Yard", factor: 764.554857984 },
      usGallon: { name: "US Gallon", factor: 3.785411784 },
      usQuart: { name: "US Quart", factor: 0.946352946 },
      usPint: { name: "US Pint", factor: 0.473176473 },
      usCup: { name: "US Cup", factor: 0.2365882365 },
      usFluidOunce: { name: "US Fluid Ounce", factor: 0.0295735295625 },
      usTablespoon: { name: "US Tablespoon", factor: 0.01478676478125 },
      usTeaspoon: { name: "US Teaspoon", factor: 0.00492892159375 }
    }
  },


  // --------------------------------------------------------
  // TIME
  // --------------------------------------------------------

  time: {
    name: "Time",
    base: "second",

    units: {
      millisecond: { name: "Millisecond", factor: 0.001 },
      second: { name: "Second", factor: 1 },
      minute: { name: "Minute", factor: 60 },
      hour: { name: "Hour", factor: 3600 },
      day: { name: "Day", factor: 86400 },
      week: { name: "Week", factor: 604800 }
    }
  },


  // --------------------------------------------------------
  // SPEED
  // --------------------------------------------------------

  speed: {
    name: "Speed",
    base: "meterPerSecond",

    units: {
      meterPerSecond: { name: "Meters per Second", factor: 1 },
      kilometerPerHour: {
        name: "Kilometers per Hour",
        factor: 0.2777777777777778
      },
      milePerHour: {
        name: "Miles per Hour",
        factor: 0.44704
      },
      footPerSecond: {
        name: "Feet per Second",
        factor: 0.3048
      },
      knot: {
        name: "Knots",
        factor: 0.5144444444444445
      }
    }
  },


  // --------------------------------------------------------
  // PRESSURE
  // --------------------------------------------------------

  pressure: {
    name: "Pressure",
    base: "pascal",

    units: {
      pascal: { name: "Pascal", factor: 1 },
      kilopascal: { name: "Kilopascal", factor: 1000 },
      megapascal: { name: "Megapascal", factor: 1000000 },
      bar: { name: "Bar", factor: 100000 },
      millibar: { name: "Millibar", factor: 100 },
      psi: { name: "PSI", factor: 6894.757293168 },
      atmosphere: { name: "Atmosphere", factor: 101325 },
      torr: { name: "Torr", factor: 133.3223684211 }
    }
  },


  // --------------------------------------------------------
  // ENERGY
  // --------------------------------------------------------

  energy: {
    name: "Energy",
    base: "joule",

    units: {
      joule: { name: "Joule", factor: 1 },
      kilojoule: { name: "Kilojoule", factor: 1000 },
      calorie: { name: "Calorie", factor: 4.184 },
      kilocalorie: { name: "Kilocalorie", factor: 4184 },
      wattHour: { name: "Watt-hour", factor: 3600 },
      kilowattHour: {
        name: "Kilowatt-hour",
        factor: 3600000
      },
      btu: {
        name: "BTU",
        factor: 1055.05585262
      },
      electronvolt: {
        name: "Electronvolt",
        factor: 1.602176634e-19
      }
    }
  },


  // --------------------------------------------------------
  // POWER
  // --------------------------------------------------------

  power: {
    name: "Power",
    base: "watt",

    units: {
      watt: { name: "Watt", factor: 1 },
      kilowatt: { name: "Kilowatt", factor: 1000 },
      megawatt: { name: "Megawatt", factor: 1000000 },
      horsepower: {
        name: "Horsepower",
        factor: 745.6998715822702
      },
      btuPerHour: {
        name: "BTU per Hour",
        factor: 0.2930710701722222
      }
    }
  },


  // --------------------------------------------------------
  // DIGITAL STORAGE
  // --------------------------------------------------------

  digital: {
    name: "Digital Storage",
    base: "byte",

    units: {
      bit: { name: "Bit", factor: 0.125 },
      byte: { name: "Byte", factor: 1 },
      kilobyte: { name: "Kilobyte (KB)", factor: 1000 },
      megabyte: { name: "Megabyte (MB)", factor: 1000000 },
      gigabyte: { name: "Gigabyte (GB)", factor: 1000000000 },
      terabyte: { name: "Terabyte (TB)", factor: 1000000000000 },
      petabyte: { name: "Petabyte (PB)", factor: 1000000000000000 },

      kibibyte: { name: "Kibibyte (KiB)", factor: 1024 },
      mebibyte: { name: "Mebibyte (MiB)", factor: 1048576 },
      gibibyte: { name: "Gibibyte (GiB)", factor: 1073741824 },
      tebibyte: { name: "Tebibyte (TiB)", factor: 1099511627776 }
    }
  },


  // --------------------------------------------------------
  // ANGLE
  // --------------------------------------------------------

  angle: {
    name: "Angle",
    base: "degree",

    units: {
      degree: { name: "Degree", factor: 1 },
      radian: { name: "Radian", factor: 57.29577951308232 },
      gradian: { name: "Gradian", factor: 0.9 },
      arcminute: { name: "Arcminute", factor: 1 / 60 },
      arcsecond: { name: "Arcsecond", factor: 1 / 3600 }
    }
  },


  // --------------------------------------------------------
  // COOKING
  // --------------------------------------------------------

  cooking: {
    name: "Cooking",
    base: "milliliter",

    units: {
      teaspoon: {
        name: "Teaspoon",
        factor: 4.92892159375
      },

      tablespoon: {
        name: "Tablespoon",
        factor: 14.78676478125
      },

      fluidOunce: {
        name: "US Fluid Ounce",
        factor: 29.5735295625
      },

      cup: {
        name: "US Cup",
        factor: 236.5882365
      },

      pint: {
        name: "US Pint",
        factor: 473.176473
      },

      quart: {
        name: "US Quart",
        factor: 946.352946
      },

      gallon: {
        name: "US Gallon",
        factor: 3785.411784
      },

      milliliter: {
        name: "Milliliter",
        factor: 1
      },

      liter: {
        name: "Liter",
        factor: 1000
      }
    }
  }

};


// ==========================================================
// END SECTION 1 — CONVERSION DATA
// ==========================================================



// ==========================================================
// SECTION 2 — TEMPERATURE CONVERSION
// ==========================================================

function convertTemperature(value, from, to) {

  let celsius;

  if (from === "celsius") {
    celsius = value;
  }

  else if (from === "fahrenheit") {
    celsius = (value - 32) * 5 / 9;
  }

  else if (from === "kelvin") {
    celsius = value - 273.15;
  }


  if (to === "celsius") {
    return celsius;
  }

  if (to === "fahrenheit") {
    return (celsius * 9 / 5) + 32;
  }

  if (to === "kelvin") {
    return celsius + 273.15;
  }

}


// ==========================================================
// END SECTION 2 — TEMPERATURE CONVERSION
// ==========================================================



// ==========================================================
// SECTION 3 — PAGE ELEMENTS
// ==========================================================

const categorySelect = document.getElementById("category");

const fromUnitSelect = document.getElementById("fromUnit");

const toUnitSelect = document.getElementById("toUnit");

const inputValue = document.getElementById("inputValue");

const resultBox = document.getElementById("result");

const swapButton = document.getElementById("swapButton");

const copyButton = document.getElementById("copyButton");

const clearButton = document.getElementById("clearButton");

const copyMessage = document.getElementById("copyMessage");


// ==========================================================
// END SECTION 3 — PAGE ELEMENTS
// ==========================================================



// ==========================================================
// SECTION 4 — LOAD CATEGORIES
// ==========================================================

function loadCategories() {

  categorySelect.innerHTML = "";

  Object.entries(units).forEach(([key, category]) => {

    const option = document.createElement("option");

    option.value = key;

    option.textContent = category.name;

    categorySelect.appendChild(option);

  });

}


// ==========================================================
// END SECTION 4 — LOAD CATEGORIES
// ==========================================================



// ==========================================================
// SECTION 5 — LOAD UNITS
// ==========================================================

function loadUnits() {

  const category = units[categorySelect.value];

  fromUnitSelect.innerHTML = "";

  toUnitSelect.innerHTML = "";


  Object.entries(category.units).forEach(([key, unit]) => {

    const fromOption = document.createElement("option");

    fromOption.value = key;

    fromOption.textContent = unit.name;


    const toOption = document.createElement("option");

    toOption.value = key;

    toOption.textContent = unit.name;


    fromUnitSelect.appendChild(fromOption);

    toUnitSelect.appendChild(toOption);

  });


  if (toUnitSelect.options.length > 1) {

    toUnitSelect.selectedIndex = 1;

  }


  calculate();

}


// ==========================================================
// END SECTION 5 — LOAD UNITS
// ==========================================================



// ==========================================================
// SECTION 6 — CALCULATION ENGINE
// ==========================================================

function calculate() {

  const value = parseFloat(inputValue.value);


  if (Number.isNaN(value)) {

    resultBox.textContent = "0";

    return;

  }


  const category = units[categorySelect.value];

  const from = fromUnitSelect.value;

  const to = toUnitSelect.value;


  let result;


  if (category.special) {

    result = convertTemperature(value, from, to);

  }

  else {

    const baseValue =
      value * category.units[from].factor;

    result =
      baseValue / category.units[to].factor;

  }


  if (!Number.isFinite(result)) {

    resultBox.textContent = "Invalid result";

    return;

  }


  resultBox.textContent = formatNumber(result);

}


// ==========================================================
// END SECTION 6 — CALCULATION ENGINE
// ==========================================================



// ==========================================================
// SECTION 7 — NUMBER FORMATTING
// ==========================================================

function formatNumber(number) {

  if (number === 0) {

    return "0";

  }


  const absolute = Math.abs(number);


  if (absolute >= 1e12 || absolute < 1e-9) {

    return number.toExponential(8);

  }


  return Number(number.toPrecision(12))
    .toLocaleString(
      undefined,
      {
        maximumFractionDigits: 10
      }
    );

}


// ==========================================================
// END SECTION 7 — NUMBER FORMATTING
// ==========================================================



// ==========================================================
// SECTION 8 — SWAP BUTTON
// ==========================================================

swapButton.addEventListener("click", () => {

  const oldFrom = fromUnitSelect.value;

  const oldTo = toUnitSelect.value;


  fromUnitSelect.value = oldTo;

  toUnitSelect.value = oldFrom;


  calculate();

});


// ==========================================================
// END SECTION 8 — SWAP BUTTON
// ==========================================================



// ==========================================================
// SECTION 9 — CATEGORY & UNIT EVENTS
// ==========================================================

categorySelect.addEventListener(
  "change",
  loadUnits
);


fromUnitSelect.addEventListener(
  "change",
  calculate
);


toUnitSelect.addEventListener(
  "change",
  calculate
);


inputValue.addEventListener(
  "input",
  calculate
);


// ==========================================================
// END SECTION 9 — CATEGORY & UNIT EVENTS
// ==========================================================



// ==========================================================
// SECTION 10 — CLEAR BUTTON
// ==========================================================

clearButton.addEventListener("click", () => {

  inputValue.value = "";

  resultBox.textContent = "0";

  copyMessage.textContent = "";

  inputValue.focus();

});


// ==========================================================
// END SECTION 10 — CLEAR BUTTON
// ==========================================================



// ==========================================================
// SECTION 11 — COPY RESULT
// ==========================================================

copyButton.addEventListener("click", async () => {

  const value = parseFloat(inputValue.value);


  if (Number.isNaN(value)) {

    copyMessage.textContent =
      "Enter a value first.";

    return;

  }


  const result = resultBox.textContent;


  const fromName =
    units[
      categorySelect.value
    ].units[
      fromUnitSelect.value
    ].name;


  const toName =
    units[
      categorySelect.value
    ].units[
      toUnitSelect.value
    ].name;


  const text =
    `${formatNumber(value)} ${fromName} = ${result} ${toName}`;


  try {

    await navigator.clipboard.writeText(text);

    copyMessage.textContent = "Copied!";

  }

  catch {

    copyMessage.textContent =
      "Unable to copy automatically.";

  }


  setTimeout(() => {

    copyMessage.textContent = "";

  }, 2500);

});


// ==========================================================
// END SECTION 11 — COPY RESULT
// ==========================================================



// ==========================================================
// SECTION 12 — CATEGORY CARDS
// ==========================================================

document
  .querySelectorAll(".category-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const category =
        card.dataset.category;


      if (units[category]) {

        categorySelect.value =
          category;

        loadUnits();


        document
          .getElementById("converter")
          .scrollIntoView({
            behavior: "smooth"
          });

      }

    });

  });


// ==========================================================
// END SECTION 12 — CATEGORY CARDS
// ==========================================================



// ==========================================================
// SECTION 13 — POPULAR CONVERSIONS
// ==========================================================

const popularConversions = {

  "miles-kilometers":
    ["length", "mile", "kilometer"],

  "kilometers-miles":
    ["length", "kilometer", "mile"],

  "pounds-kilograms":
    ["mass", "pound", "kilogram"],

  "kilograms-pounds":
    ["mass", "kilogram", "pound"],

  "feet-meters":
    ["length", "foot", "meter"],

  "meters-feet":
    ["length", "meter", "foot"],

  "fahrenheit-celsius":
    ["temperature", "fahrenheit", "celsius"],

  "celsius-fahrenheit":
    ["temperature", "celsius", "fahrenheit"],

  "cups-milliliters":
    ["cooking", "cup", "milliliter"],

  "liters-gallons":
    ["volume", "liter", "gallon"]

};


// ==========================================================
// END SECTION 13 — POPULAR CONVERSIONS
// ==========================================================



// ==========================================================
// SECTION 14 — POPULAR CONVERSION BUTTONS
// ==========================================================

document
  .querySelectorAll("[data-conversion]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const conversion =
        popularConversions[
          button.dataset.conversion
        ];


      if (!conversion) return;


      categorySelect.value =
        conversion[0];


      loadUnits();


      fromUnitSelect.value =
        conversion[1];


      toUnitSelect.value =
        conversion[2];


      calculate();


      document
        .getElementById("converter")
        .scrollIntoView({
          behavior: "smooth"
        });


      inputValue.focus();

    });

  });


// ==========================================================
// END SECTION 14 — POPULAR CONVERSION BUTTONS
// ==========================================================



// ==========================================================
// SECTION 15 — INITIALIZE WEBSITE
// ==========================================================

loadCategories();

loadUnits();


// ==========================================================
// END SECTION 15 — INITIALIZE WEBSITE
// ==========================================================
