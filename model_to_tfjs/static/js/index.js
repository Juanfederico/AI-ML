// 1. Load the model -> 2. Perform inference -> 3. Prepare output and replace the html content

var model = null;

function convertToFarenheit() {
  var celsius = document.getElementById("celsius").value;
  document.getElementById("lbl-celsius").innerHTML=celsius;
  if (model != null) {
    var tensor = tf.tensor1d([parseInt(celsius)]);
    var prediction = model.predict(tensor).dataSync();  // Waiting for prediction before continue
    prediction = Math.round(prediction, 1);
    document.getElementById("result").innerHTML = celsius + " celsius are equal to " + prediction + " fahrenheit!";
  } else {
    document.getElementById("result").innerHTML = "Try again after a moment...";
  }
}