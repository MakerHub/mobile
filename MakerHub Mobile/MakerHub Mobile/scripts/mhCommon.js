

var transmitTask;
var wsConnection;

function startConnection(button)
{
	toggleButtonState(button);
	wsConnection = new WebSocket("ws://192.168.1.107:12345");
	wsConnection.onopen = function (event)
	{
	    transmitTask = setInterval(main, 2);
	};
}

function stopConnection(button)
{
    clearInterval(transmitTask);
    wsConnection.close();
}

function toggleButtonState(button)
{
	if( hasClass(button, 'active') )
	{
		button.classList.remove('active');
	}
	else
	{
		button.classList.add('active');	
	}
}
		
// Check If Element Has Specified Class
function hasClass(el, cls) 
{
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}


function main()
{
    wsConnection.send("Hello World!");
}

function setButtonState(button, active)
{
    if (active)
    {
        button.classList.add('active');
    }
    else
    {
        button.classList.remove('active');
    }
}