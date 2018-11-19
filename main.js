const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month" , printData )
}

function updateRideCount(data) {
    $("h2#count").html(data.count);
    $("h2#count").css('visibility', 'visible').hide().fadeIn("slow");
}

function printData(data) {
    console.log(data)
}

