// chart
const options = {
  animationEnabled: true,
  exportEnabled: false,
  dataPointMaxWidth: 0,
  toolTip: {
    borderColor: "green",
    fontSize: 15,
    fontFamily: "CircularStd",
    fontWeight: "normal",
    borderThickness: 0,
    cornerRadius: 4,
    backgroundColor: '#fff'
  },
  labelFormatter: function (e) {
    let num = e.value.toString().replace(/0*$/,"");

    return CanvasJS.formatNumber(num);
  },
  axisY: {
    includeZero: true,
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
  },
  axisX: {
    indexLabelPlacement: "inside",
    labelFontFamily: "CircularStd",
    fontWeight: "bold",
    labelFontSize: 12,
    margin: 0
  },
  data: [
    {
      markerType: "circle",
      markerSize: 0,
      markerColor: "#fff",
      markerBorderColor: "black", //change color here
      markerBorderThickness: 3,
      lineColor: "#03075A",
      type: "line",
      name: 'main',
      color: 'transparent',
      toolTipContent: "<div class='toolTop__summ'><span>SAR {y}K</span></div>",
      dataPoints: [
        { label: "JAN",y: 40,},
        { label: "FEB",y: 60,},
        { label: "MAR",y: 65,},
        { label: "APR",y: 80,},
        { label: "MAY",y: 90,},
        { label: "JUN",y: 100,},
        { label: "JUL",y: 150,},
        { label: "AUG",y: 130,},
        { label: "SEP",y: 155,},
        { label: "OCT",y: 180,},
        { label: "NOV",y: 200,},
        { label: "DEC",y: 240,},
      ]
    },
  ],
}
$("#chart").CanvasJSChart(options);
