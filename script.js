weightObj = [{date: "8/4/2023", weight: 80.0}, {date: "10/5/2023", weight: 84.10},{date:"11/1/2023", weight:85.1},{date:"11/13/2023", weight:86.14}, {date:"12/7/2023", weight:85.4}]
weightDates = [];
weights = []
for(i=0; i<weightObj.length; i++){
  weightDates.push( weightObj[i].date)
}
for(i=0; i<weightObj.length; i++){
  weights.push( weightObj[i].weight)
}

latestWeightVal = weights.reverse()[0]

latestWeightLbs = Math.floor(latestWeightVal)
latestWeightOzsDec = (latestWeightVal - (Math.floor(latestWeightVal))).toString().indexOf(".")
latestWeightOzs = latestWeightVal.toString().substring(latestWeightOzsDec+2)

latestWeightString = latestWeightLbs + "lbs " + latestWeightOzs + "oz"
document.getElementById("latestWeight").innerHTML = latestWeightString

let ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
      labels: weightDates,
      datasets: [{
        label: "Mossy's weight",
        data: weights,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    });