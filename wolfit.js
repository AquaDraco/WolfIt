$(document).ready(function() {
});

function wolfit() {
  var suffix = $("#suffix").val();
  
  if((suffix != null) && (suffix != "")) {
    $.ajax({
      method: "GET",
      url: "https://www.googleapis.com/customsearch/v1",
      data: JSON.stringify(
        {
          key: "AIzaSyAPNdD37QRurD7oLMRYJbMxsKuersRpwUA",
          cx: "012397244432696523068:-veiaxy5zx8",
          q: suffix,
          searchType: "image"
        }
      );
    });
  }
}
