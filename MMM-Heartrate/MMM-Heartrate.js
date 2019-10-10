Module.register("MMM-Heartrate", {
  defaults: {},

  start: function () {
    this.bpm = 0
  },

  getDom: function() {
	  var element = document.createElement("div")
	  element.className = "myContent"
	  element.innerHTML = "Hello, World! "
	  
	  var subElement = document.createElement("p")
	  subElement.innerHTML = "Place your finger on the sensor" 
	  subElement.id = "COUNT"
	  element.appendChild(subElement)
	  return element
  },

  notificationReceived: function(notification, payload, sender) {
	  switch(notification) {
	    case "DOM_OBJECTS_CREATED":
	    this.sendSocketNotification("REQUEST", this.bpm)
	      break
	  }
  },

  socketNotificationReceived: function(notification, payload) {
	  switch(notification) {
	    case "DATA":
	    this.sendSocketNotification("REQUEST", this.bpm)
	      var elem = document.getElementById("COUNT")
	      elem.innerHTML = "Live Heartbeat:  " + payload + "bpm"
	      break
	  }
  },

})
