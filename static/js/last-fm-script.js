function calculateDateAgo(secAgo) {
       var agoString, agoRange, agoScaled;
       if(secAgo >= (agoRange = 60*60*24)) 
         agoString = (agoScaled = Math.floor(secAgo/agoRange))+" "+(agoScaled>1?"days":"day") + " ago"
       else if(secAgo >= (agoRange = 60*60))
         agoString = (agoScaled = Math.floor(secAgo/agoRange))+" "+(agoScaled>1?"hours":"hour") + " ago"
       else if(secAgo >= (agoRange = 60))
         agoString = (agoScaled = Math.floor(secAgo/agoRange))+" "+(agoScaled>1?"minutes":"minute") + " ago"
       else if(secAgo >= -60)
         agoString = "listening just now";
       else
         agoString = "soon ;)";
       return agoString
      }
       
      function lfmMostRecentTrack(JSONdata) {
       try {
       var oTrack = (new Array().concat(JSONdata.recenttracks.track))[0];
       document.getElementById("lfmMostRecentTrackArtist").innerHTML = oTrack.artist["#text"];
       document.getElementById("lfmMostRecentTrackTitle").href = oTrack.url;
       document.getElementById("lfmMostRecentTrackTitle").innerHTML = oTrack.name;
       document.getElementById("lfmMostRecentTrackDate").innerHTML = (typeof oTrack.date=="undefined"?"now playing":calculateDateAgo(new Date().getTime()/1000 - oTrack.date.uts));
       document.getElementById("lfmMostRecentTrack").style.visibility = "visible";
       } catch(e) {}
      }