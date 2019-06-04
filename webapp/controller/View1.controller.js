sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
			'sap/m/MessageToast',
		'sap/ui/model/json/JSONModel'
], function (jQuery, Fragment, Controller,MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("my.resume.Resume.controller.View1", {
			onInit: function() {
		//	var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock") + "/products.json");
		//	this.getView().setModel(oModel);
		var cardManifests = new JSONModel();

			cardManifests.loadData(sap.ui.require.toUrl("=/model/cardManifests.json"));
			this.getView().setModel(cardManifests, "manifests");
		},

		handleLinkedinPress : function(){
			sap.m.URLHelper.redirect("https://www.linkedin.com/in/shruthipinnamwar/", true);
		},
		handleGitHubPress : function(){
			sap.m.URLHelper.redirect("https://github.com/shruthipinnamwar/", true);
		},
		onExit : function () {
			if (this._oPopover) {
				this._oPopover.destroy();
			}
		},
		handleCallPress : function(evt){
			// sap.m.URLHelper.triggerTel("evt.oSource.mProperties.text");	
			sap.m.URLHelper.triggerTel("9137421104");	
		},
		
		handleEmailPress :  function(evt){
			sap.m.URLHelper.triggerEmail("shruthipinnamwar@gmail.com");	
		},
		_getPopover : function () {
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("sap.m.sample.ObjectHeaderResponsiveIII.Popover", this);
				this.getView().addDependent(this._oPopover);
			}
			return this._oPopover;
		},

		handleTitlePress : function (oEvent) {
			var domRef = oEvent.getParameter("domRef");
			this._getPopover().openBy(domRef);
		}
	});
});