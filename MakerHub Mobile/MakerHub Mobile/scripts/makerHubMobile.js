(function () {
    var app = angular.module('makerHubMobile', ['ngCordova']);

    app.controller('ButtonController', function () {
        this.value = 0;
        this.increment = function () {
            this.value++;
        };
    });

    //Websocket code
    app.controller('StartTransmitting', function ()
    {
        var transmitTask;
        var wsConnection;
        var state = false;
        var startButton;

        this.onClick = function ($event)
        {
            startButton = event.target;
            if (state)
            {
                stopConnection();                
            }
            else
            {
                startConnection();                
            }            
        };

        function startConnection()
        {
            wsConnection = new WebSocket("ws://192.168.1.107:12345");

            wsConnection.onopen = function (event)
            {
                transmitTask = setInterval(main, 100);
            };

            wsConnection.onclose = function ()
            {
                stopConnection();
            };

            state = true;
            setButtonState(startButton, state);
        };

        function stopConnection()
        {
            clearInterval(transmitTask);
            wsConnection.close();
            state = false;
            setButtonState(startButton, state);
        };

        function main()
        {
            wsConnection.send("Hello World!");
        };
    });
})();