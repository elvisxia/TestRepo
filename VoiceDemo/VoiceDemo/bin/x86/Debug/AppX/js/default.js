// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize your application here.
            } else {
                // TODO: This application was suspended and then terminated.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
            }

            if (typeof Windows !== 'undefined' &&
    typeof Windows.UI !== 'undefined' &&
    typeof Windows.ApplicationModel !== 'undefined') {
                // Subscribe to the Windows Activation Event
                Windows.UI.WebUI.WebUIApplication.addEventListener("activated", function (args) {
                    var activation = Windows.ApplicationModel.Activation;
                    // Check to see if the app was activated by a voice command
                    if (args.kind === activation.ActivationKind.voiceCommand) {
                        var speechRecognitionResult = args.result;
                        var textSpoken = speechRecognitionResult.text;

                        // Determine the command type {search} defined in vcd
                        if (speechRecognitionResult.rulePath[0] === "Search") {
                            console.log("speechRecognitionResult: " + speechRecognitionResult);
                            console.log("textSpoken: " + textSpoken);

                            // Build rest of search string here
                            // Then invoke search
                        }
                        else {
                            console.log("No valid command specified");
                        }
                    }
                });
            } else {
                console.log("Windows namespace is unavaiable");
            }
            //var uri = new Windows.Foundation.Uri("ms-appx:///vcd.xml");
            //Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri).then(function (e) {
            //    Windows.ApplicationModel.VoiceCommands.VoiceCommandDefinitionManager.installCommandDefinitionsFromStorageFileAsync(e);
            //});

            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };

    app.start();
})();