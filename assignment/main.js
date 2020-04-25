
var covid;
var covidOS;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


setInterval(function(){
	//fetch API - API details go here
fetch("https://api.covid19api.com/summary", requestOptions)

//put JSON response into variable
//final variable is to pinpoint the data in the array response - this one is United Kingdom
.then(response => response.json()).then(x => covid = x.Global)
.catch(err => {
	console.log(err);
});

console.log(covid.NewDeaths);
//console.log("The global total new confirmed is "+covid.);
//console.log("The global total confirmed is "+covid.TotalConfirmed);
//console.log("The global total new deaths is "+covid.TotalDeaths);
//console.log("The global total new recovered is "+covid.NewRecovered);
//console.log("The global total recovered is "+covid.TotalRecovered);
//console.log(covid);

//put array value into variable
//covidOS = covid.Global;


//console.log("critical "+covid.critical);
//console.log("deaths "+covid.deaths);



  let myChart1 = document.getElementById('myChart1').getContext('2d');
    let myChart2 = document.getElementById('myChart2').getContext('2d');
      let myChart3 = document.getElementById('myChart3').getContext('2d');
        let myChart4 = document.getElementById('myChart4').getContext('2d');


  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 12;
  Chart.defaults.global.defaultFontColor = '#777';




  let massPopChart = new Chart(myChart2, {
    type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data:{
      labels:['Total Confirmed', 'TotalDeaths', 'TotalRecovered'],
      datasets:[{
        label:'Population',
        data:[
          covid.TotalConfirmed,
          covid.TotalDeaths,
          covid.TotalRecovered
        ],

        //backgroundColor:'green',


        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:false,
        text:'Coronavirus Statistics',
        fontSize:25
      },
      legend:{
        display:true,
        position:'top',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:5,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }




    }
  });




}, 3000); //update API every 3 seconds
