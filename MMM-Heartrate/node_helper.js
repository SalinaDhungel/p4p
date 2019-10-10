var NodeHelper = require("node_helper");
const exec = require('child_process').exec;

module.exports = NodeHelper.create({
  start: function() {
    			 console.log('Started heartrate thing...');

    },

  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "REQUEST":
        console.log("Jazz Start Here \n\n") ;
        exec('sudo ./modules/MMM-Heartrate/a.out', (error, stdout) => {
			   if (error) {
				    console.error(`exec error: ${error}`);
            console.log("this is an error!\n");
				    return;
				  }
        console.log("No error!\n");
        //var arr = stdout.split(",");
        //console.log("ArrayJazz: " + arr[0]);
        this.sendSocketNotification('DATA',(stdout));
         
			 });
       
       
        break
        

        
    }
  },
  
})
