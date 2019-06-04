sap.ui.define([
	'jquery.sap.global',
		"sap/m/MessageToast",
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'
], function (jQuery,MessageToast, Controller, JSONModel) {
	"use strict";

	var AnalyticalCardController = Controller.extend("my.resume.Resume.controller.BlockT1", {
		onInit: function () {
			var cardManifests = new JSONModel();

			cardManifests.loadData(sap.ui.require.toUrl("my/resume/Resume/model/cardManifests.json"));
			this.getView().setModel(cardManifests, "manifests");
		
		//another model
				var oModel = new JSONModel({
				"cities": [
					{
						"text": "Berlin",
						"key": "BR"
					},
					{
						"text": "London",
						"key": "LN"
					},
					{
						"text": "Madrid",
						"key": "MD"
					},
					{
						"text": "Prague",
						"key": "PR"
					},
					{
						"text": "Paris",
						"key": "PS"
					},
					{
						"text": "Sofia",
						"key": "SF"
					},
					{
						"text": "Vienna",
						"key": "VN"
					}
				],
				"productItems": [
					{
						"title": "Notebook HT",
						"subtitle": "ID23452256-D44",
						"revenue": "27.25K EUR",
						"status": "success",
						"statusSchema": 8
					},
					{
						"title": "Notebook XT",
						"subtitle": "ID27852256-D47",
						"revenue": "7.35K EUR",
						"status": "exceeded",
						"statusSchema": 3
					},
					{
						"title": "Notebook ST",
						"subtitle": "ID123555587-I05",
						"revenue": "22.89K EUR",
						"status": "warning",
						"statusSchema": 1
					}
				]
			});
			this.getView().setModel(oModel);
			
			
		},
		onBookPress: function() {
			MessageToast.show(
				"By pressing the 'Book' button a new application can be opened where the actual booking happens. This can be in the same window, in a new tab or in a dialog.",
				{
					my: "center",
					at: "center",
					width: "50rem"
				}
			);
		}
	});

	return AnalyticalCardController;

});
