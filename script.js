$(document).ready(function() {
  var defaultFuel = 3,
  defaultRatio = $("#ratioSelector").val(),
  fuelDisplay = $("#fuelDisplay");
  fuelDisplay.html(defaultFuel);


  updateOil(defaultFuel, defaultRatio);

  $("#fuelDown").click(function() {
    if (defaultFuel > 0) {
      updateFuel(-1, false);
    }
  });
  $("#fuelUp").click(function() {
    updateFuel(1, false);
  });

  $("#ratioSelector").on('change', function() {
    defaultRatio = $(this).val();
    updateOil(defaultFuel, defaultRatio);
  });


  function updateFuel(amount, absolute) {
    if(absolute) {
      defaultFuel = amount;
    } else {
      defaultFuel = defaultFuel + amount;
    }
    fuelDisplay.html(defaultFuel);
    updateOil(defaultFuel, defaultRatio);
  }

  function updateOil(fuel, ratio) {
    fuel = fuel * 128;
    var oil = Math.round( (fuel / ratio) * 10) / 10;
    $("#resultDisplay").html(oil);
  }

});
