// ==================================================
// CONVERSION DATA
// ==================================================

// ==================================================
// LENGTH
// ==================================================

const units = {

  length: {
    name: "Length",
    base: "meter",

    units: {
      millimeter: {
        name: "Millimeter",
        factor: 0.001
      },

      centimeter: {
        name: "Centimeter",
        factor: 0.01
      },

      meter: {
        name: "Meter",
        factor: 1
      },

      kilometer: {
        name: "Kilometer",
        factor: 1000
      },

      inch: {
        name: "Inch",
        factor: 0.0254
      },

      foot: {
        name: "Foot",
        factor: 0.3048
      },

      yard: {
        name: "Yard",
        factor: 0.9144
      },

      mile: {
        name: "Mile",
        factor: 1609.344
      },

      nauticalMile: {
        name: "Nautical Mile",
        factor: 1852
      }
    }
  },


// ==================================================
// AREA
// ==================================================

  area: {
    name: "Area",
    base: "squareMeter",

    units: {
      squareMillimeter: {
        name: "Square Millimeter",
        factor: 0.000001
      },

      squareCentimeter: {
        name: "Square Centimeter",
        factor: 0.0001
      },

      squareMeter: {
        name: "Square Meter",
        factor: 1
      },

      squareKilometer: {
        name: "Square Kilometer",
        factor: 1000000
      },

      squareInch: {
        name: "Square Inch",
        factor: 0.00064516
      },

      squareFoot: {
        name: "Square Foot",
        factor: 0.09290304
      },

      squareYard: {
        name: "Square Yard",
        factor: 0.83612736
      },

      acre: {
        name: "Acre",
        factor: 4046.8564224
      },

      hectare: {
        name: "Hectare",
        factor: 10000
      },

      squareMile: {
        name: "Square Mile",
        factor: 2589988.110336
      }
    }
  },


// ==================================================
// WEIGHT & MASS
// ==================================================

  mass: {
    name: "Weight & Mass",
    base: "gram",

    units: {
      milligram: {
        name: "Milligram",
        factor: 0.001
      },

      gram: {
        name: "Gram",
        factor: 1
      },

      kilogram: {
        name: "Kilogram",
        factor: 1000
      },

      metricTon: {
        name: "Metric Ton",
        factor: 1000000
      },

      ounce: {
        name: "Ounce",
        factor: 28.349523125
      },

      pound: {
        name: "Pound",
        factor: 453.59237
      },

      stone: {
        name: "Stone",
        factor: 6350.29318
      },

      usTon: {
        name: "US Ton",
        factor: 907184.74
      },

      imperialTon: {
        name: "Imperial Ton",
        factor: 1016046.9088
      }
    }
  },


// ==================================================
// TEMPERATURE
// ==================================================

  temperature: {
    name: "Temperature",
    special: true,

    units: {
      celsius: {
        name: "Celsius"
      },

      fahrenheit: {
        name: "Fahrenheit"
      },

      kelvin: {
        name: "Kelvin"
      }
    }
  },


// ==================================================
// VOLUME
// ==================================================

  volume: {
    name: "Volume",
    base: "liter",

    units: {
      milliliter: {
        name: "Milliliter",
        factor: 0.001
      },

      liter: {
        name: "Liter",
        factor: 1
      },

      cubicCentimeter: {
        name: "Cubic Centimeter",
        factor: 0.001
      },

      cubicMeter: {
        name: "Cubic Meter",
        factor: 1000
      },

      cubicInch: {
        name: "Cubic Inch",
        factor: 0.016387064
      },

      cubicFoot: {
        name: "Cubic Foot",
        factor: 28.316846592
      },

      cubicYard: {
        name: "Cubic Yard",
        factor: 764.554857984
      },

      usGallon: {
        name: "US Gallon",
        factor: 3.785411784
      },

      usQuart: {
        name: "US Quart",
        factor: 0.946352946
      },

      usPint: {
        name: "US Pint",
        factor: 0.473176473
      },

      usCup: {
        name: "US Cup",
        factor: 0.2365882365
      },

      usFluidOunce: {
        name: "US Fluid Ounce",
        factor: 0.0295735295625
      },

      usTablespoon: {
        name: "US Tablespoon",
        factor: 0.01478676478125
      },

      usTeaspoon: {
        name: "US Teaspoon",
        factor: 0.00492892159375
      }
    }
  }

};
