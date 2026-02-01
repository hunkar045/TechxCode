function submitComplaint() {
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    let office = "Municipal Office";
    let priority = "LOW";

    const type = document.getElementById("type").value;

    if (type === "Garbage") priority = "MEDIUM";
    if (type === "Water") priority = "HIGH";

    document.getElementById("status").innerText =
      "Complaint submitted ✔️\n" +
      "Location detected\n" +
      "Office: " + office + "\n" +
      "Priority: " + priority;
  });
}
