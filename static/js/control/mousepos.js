MousePosControl.prototype = new BaseControl("MousePosControl");

/**
 * This control widget shows the current position of the mouse in Minecraft.
 */
function MousePosControl() {
}

MousePosControl.prototype.create = function(wrapper) {
	var text = document.createElement("span");
	text.setAttribute("id", "mouse-move-div");

	var updatePos = function(ui) {
		return function(event) {
			var xzy = ui.latLngToMC(event.latlng, 64);
			var regionX = Math.round(xzy[0] >> 4 >> 5);
			var regionZ = Math.round(xzy[1] >> 4 >> 5);
			document.getElementById("mouse-move-div").innerHTML = '<div class="btn-group" role="group">'
			+ '<button type="button" class="btn btn-default">' + "X: " + Math.round(xzy[0]) + '</button>'
			+ '<button type="button" class="btn btn-default">' + "Z: " + Math.round(xzy[1]) + '</button>'
			+ '<button type="button" class="btn btn-default">' + "Y: " + Math.round(xzy[2]) + '</button>'
			+ '<button type="button" class="btn btn-default">r.' + regionX + "." + regionZ + '.mca</button>'
			+ "</div>";
		};
	}(this.ui);

	this.ui.lmap.on("mousemove", updatePos);
	this.ui.lmap.on("mousedown", updatePos);

	wrapper.appendChild(text);
};

MousePosControl.prototype.getName = function() {
	return 'mouse-pos';
};
