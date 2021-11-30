(function () {
	function preTaskFormRenderer(renderCtx) {
		modifyColumns(renderCtx);
	}

	function modifyColumns(renderCtx) {
		var arrayLength = renderCtx.ListSchema.Field.length;
		for (var i = 0; i < arrayLength; i++) {
			if (
				renderCtx.ListSchema.Field[i].DisplayName == "Column Name to Override"
			) {
				var newTitle = "New Column Name";
				var linkTitleField = renderCtx.ListSchema.Field[i];
				linkTitleField.DisplayName = newTitle;
			}
		}
	}

	function registerRenderer() {
		var ctxForm = {};
		ctxForm.Templates = {};
		ctxForm.OnPreRender = preTaskFormRenderer;
		alert("Hello");
		SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxForm);
	}

	ExecuteOrDelayUntilScriptLoaded(registerRenderer, "clienttemplates.js");
})();
