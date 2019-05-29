/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my/resume/Resume/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});