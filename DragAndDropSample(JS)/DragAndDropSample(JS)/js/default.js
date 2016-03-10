// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
			    // Drag and Drop using html5 API here:
			    var myFile = document.getElementById("myFile");
			    myFile.addEventListener("dragover", function (evt) {
			        evt.stopPropagation();
			        evt.preventDefault();
			        evt.dataTransfer.dropEffect = "copy";
			    });
			    myFile.addEventListener("drop", function (evt) {
			        evt.stopPropagation();
			        evt.preventDefault();
			        var files = evt.dataTransfer.files;

			        var output = [];
			        for (var i = 0, f; f = files[i]; i++) {
			            output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                                    f.size, ' bytes, last modified: ',
                                    f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                                    '</li>');
			        }
			        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
			    })
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
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
