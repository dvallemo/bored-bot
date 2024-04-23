

document.getElementById("activity-btn").addEventListener("click", function() {
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("activity").textContent = data.activity
  })

})
