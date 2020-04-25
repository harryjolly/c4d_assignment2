

function callapi(){

var covid;
var covidOS;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


setInterval(function() {

  //fetch API - API details go here
  fetch("https://api.covid19api.com/summary", requestOptions)

    //put JSON response into variable
    //final variable is to pinpoint the data in the array response - this one is United Kingdom
    .then(response => response.json()).then(x => covid = x.Global)
    .catch(err => {
      console.log(err);
    });

  console.log(covid.NewDeaths);



  // referencing the canvas in the index.html
  let myChart1 = document.getElementById('myChart1').getContext('2d');
  let myChart2 = document.getElementById('myChart2').getContext('2d');
  let myChart3 = document.getElementById('myChart3').getContext('2d');
  let myChart4 = document.getElementById('myChart4').getContext('2d');




}, 3000); //update API every 3 seconds




setTimeout(function() {

// Global Options
Chart.defaults.global.defaultFontFamily = 'Arial'; // font type throughout the charts
Chart.defaults.global.defaultFontSize = 12; // font size throughout the charts
Chart.defaults.global.defaultFontColor = '#777'; // font colour throughout the charts


// start of first chart

let massPopChart2 = new Chart(myChart2, {
  type: 'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

  data: {
    labels: ['Total Confirmed', 'TotalDeaths', 'TotalRecovered'],
    datasets: [{
      label: 'Population', // label to be displayed on the graph
      data: [
        covid.TotalConfirmed, //pulling live data drom the API
        covid.TotalDeaths, //pulling live data drom the API
        covid.TotalRecovered //pulling live data drom the API
      ],

      //backgroundColor:'green',


      backgroundColor: [
        'rgba(255, 99, 132, 0.6)', // colour of data represented for total confirmed
        'rgba(54, 162, 235, 0.6)', // colour of data represented for total deaths
        'rgba(255, 206, 86, 0.6)' // colour of data represented for total recovered
      ],
      borderWidth: 1, // border width 1 pixel
      borderColor: '#777', // border colour black
      hoverBorderWidth: 3, // when you hover the border will thicken to 3 pixels
      hoverBorderColor: '#000' // hover colour
    }]
  },
  options: {
    title: {
      display: false, // whether the title is displayed false means it will not be shown
      text: 'Coronavirus Statistics', // title to be displayed
      fontSize: 25 // size of title
    },
    legend: {
      display: false, // legend not shown in this case
      position: 'bottom', // position of legend
      labels: {
        fontColor: '#000' // colour of labels
      }
    },
    layout: { // this shows how much room from the edge of the canvas from the graph
      padding: {
        left: 5,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }

  }
});

// 2nd chart below

let massPopChart3 = new Chart(myChart3, {
  type: 'polarArea', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

  data: {
    labels: ['Total Confirmed', 'TotalDeaths', 'TotalRecovered'],
    datasets: [{
      label: 'Population', // label to be displayed on the graph
      data: [
        covid.TotalConfirmed, //pulling live data drom the API
        covid.TotalDeaths, //pulling live data drom the API
        covid.TotalRecovered //pulling live data drom the API
      ],

      //backgroundColor:'green',


      backgroundColor: [
        'rgba(255, 99, 132, 0.6)', // colour of data represented for total confirmed
        'rgba(54, 162, 235, 0.6)', // colour of data represented for total deaths
        'rgba(255, 206, 86, 0.6)', // colour of data represented for total recovered

      ],
      borderWidth: 1, // border width 1 pixel
      borderColor: '#777', // border colour black
      hoverBorderWidth: 3, // when you hover the border will thicken to 3 pixels
      hoverBorderColor: '#000' // hover colour
    }]
  },
  options: {
    title: {
      display: false, // whether the title is displayed false means it will not be shown
      text: 'Coronavirus Statistics', // title to be displayed
      fontSize: 25 // size of title
    },
    legend: {
      display: true, // legend shown for this graph as its abit more complicated
      position: 'top', // position of legend placed to top
      labels: {
        fontColor: '#000' // colour of labels
      }
    },
    layout: { // this shows how much room from the edge of the canvas from the graph
      padding: {
        left: 5,
        right: 0,
        bottom: 5, // added padding to fit graph
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }

  }
});


let massPopChart4 = new Chart(myChart4, {
  type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

  data: {
    labels: ['Total Confirmed', 'TotalDeaths', 'TotalRecovered'],
    datasets: [{
      label: 'Population', // label to be displayed on the graph
      data: [
        covid.TotalConfirmed, //pulling live data drom the API
        covid.TotalDeaths, //pulling live data drom the API
        covid.TotalRecovered //pulling live data drom the API
      ],

      //backgroundColor:'green',


      backgroundColor: [
        'rgba(255, 99, 132, 0.6)', // colour of data represented for Population



      ],
      borderWidth: 1, // border width 1 pixel
      borderColor: '#777', // border colour black
      hoverBorderWidth: 3, // when you hover the border will thicken to 3 pixels
      hoverBorderColor: '#000' // hover colour
    }]
  },
  options: {
    title: {
      display: false, // whether the title is displayed false means it will not be shown
      text: 'Coronavirus Statistics', // title to be displayed
      fontSize: 25 // size of title
    },
    legend: {
      display: true, // legend shown for this graph as its abit more complicated
      position: 'top', // position of legend placed to top
      labels: {
        fontColor: '#000' // colour of labels
      }
    },
    layout: { // this shows how much room from the edge of the canvas from the graph
      padding: {
        left: 5,
        right: 0,
        bottom: 5, // added padding to fit graph
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }

  }
});

}, 10000); //update charts every 10 seconds


}//close function

//-----------------------------------------------------------------------------------------------------------------------
