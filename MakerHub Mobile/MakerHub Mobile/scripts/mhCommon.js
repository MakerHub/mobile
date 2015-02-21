function startConnection(button)
{
	toggleButtonState(button);
	alert(localStorage.getItem("connectionName"));
}

function stop(elem)
{
	
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