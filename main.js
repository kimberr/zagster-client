const BASE_URL = "https://zagster-service.herokuapp.com"

var myData = []

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_year" , printData)
    $.when($.getJSON(BASE_URL + "/rides/count/per_year" , prepareMyData) 
    ).then(
   displayChart
    );
}

function updateRideCount(data) {
    $("h2#count").html(data.count);
    $("h2#count").css('visibility', 'visible').hide().fadeIn("slow");
}

function printData(data) {
    console.log(data)
}

function displayChart() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2016", "2017", "2018"],
            datasets: [{
                label: 'Total Rides',
                data: myData,
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)',
                    'rgba(89, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    
                    

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}

function prepareMyData(data) {
    myData.push(data[2016])
    myData.push(data[2017])
    myData.push(data[2018])
    console.log(myData)

}
