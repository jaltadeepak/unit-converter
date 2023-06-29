function changeconv() {
    var fromUnit = document.getElementById("orig_unit").value;
    var toUnitSelect = document.getElementById("conv_unit");
    var inputValue = document.getElementById("input");
    var result = document.getElementById("result");

    inputValue.placeholder = "Value not entered";
    result.placeholder = "Value not entered";

    if(fromUnit == "kilometers"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "miles") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "miles"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "kilometers") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "pounds"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "kilograms") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "kilograms"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "pounds") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    }
}

function changeorig() {
    var fromUnit = document.getElementById("conv_unit").value;
    var toUnitSelect = document.getElementById("orig_unit");
    var inputValue = document.getElementById("input");
    var result = document.getElementById("result");

    inputValue.placeholder = "Value not entered";
    result.placeholder = "Value not entered";

    if(fromUnit == "kilometers"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "miles") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "miles"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "kilometers") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "pounds"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "kilograms") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    } else if(fromUnit == "kilograms"){
        for (var i = 0; i < toUnitSelect.options.length; i++) {
            if (toUnitSelect.options[i].value == "pounds") {
                toUnitSelect.selectedIndex = i;
                break;
            }
        }
    }
}

function convert() {
    var fromUnit = document.getElementById("orig_unit").value;
    var toUnit = document.getElementById("conv_unit").value;
    var inputValue = document.getElementById("input").value;
    var result = document.getElementById("result");
  
    var conversionFactors = {
      kilometers: {
        miles: 0.621371,
      },
      miles: {
        kilometers: 1.60934,
      },
      pounds: {
        kilograms: 0.453592,
      },
      kilograms: {
        pounds: 2.20462,
      },
    };
  
    var conversionFactor = conversionFactors[fromUnit][toUnit];
    var convertedValue = inputValue * conversionFactor;

    result.value = convertedValue.toFixed(2);
  }