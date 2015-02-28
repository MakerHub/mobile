
function loadSettings()
{
    try
    {
        configSettings.connectionName.value = localStorage.getItem("connectionName");
        configSettings.hostName.value = localStorage.getItem("hostName");
        configSettings.port.value = localStorage.getItem("port");
    }
    catch (err) {
        alert(err);
    }
	
}

function saveSettings()
{
	localStorage.setItem("connectionName", configSettings.connectionName.value);
	localStorage.setItem("hostName", configSettings.hostName.value);
	localStorage.setItem("port", configSettings.port.value);
	window.location.replace("index.html")	
}
