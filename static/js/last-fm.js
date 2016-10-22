function lfmMostRecentTrack(JSONdata) {
  try {
    var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
    if (typeof oTrack.date != "undefined") {
      var lfm = document.getElementById("lfm");
      lfm.className += " hide";
    }
    document.getElementById("lfm-artist").innerHTML = oTrack.artist["#text"];
    document.getElementById("lfm-track").innerHTML = oTrack.name;
  } catch(e) {}
}