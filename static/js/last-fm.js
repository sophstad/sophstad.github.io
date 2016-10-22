function lfmMostRecentTrack(JSONdata) {
  try {
    var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
    if (typeof oTrack.date != "undefined") {
      var icon = document.getElementById("lfm");
      icon.className = "hide";
    }
    document.getElementById("lfm-artist").innerHTML = oTrack.artist["#text"];
    document.getElementById("lfm-track").innerHTML = oTrack.name;
  } catch(e) {}
}