
$(document).ready(function(){    
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
         var mm;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === "code") {
          mm=sParameterName[1];
        }
    }

		iframe = document.getElementById('ymIframeId');
		
	  iframe.contentWindow.postMessage(JSON.stringify({event_code: 'ym-client-event', data: JSON.stringify({
			event: {
				code: "login_outlook",
				data:{
					code:mm
					},
					
			}
		})}), 'https://chat.botplatform.io');
    })
  
