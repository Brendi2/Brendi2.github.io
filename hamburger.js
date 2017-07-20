$(document).ready(function () {
	var open_menu = function () {
		jQuery(".main-menu").css("visibility", "visible");
		jQuery(".x").css("display", "block");
	};
	jQuery('.burger-menu').click(function () {
		console.log("here am i");
		jQuery(this).toggleClass('menu_open');
		if (jQuery(this).hasClass("menu_open")) {
			setTimeout(open_menu, 300);
		}
		else {
			jQuery(".main-menu").css("visibility", "hidden");
		}
	});
	jQuery(".x").click(function (){ jQuery(".main-menu").css("visibility", "hidden"); jQuery(".burger-menu").toggleClass("menu_open"); jQuery(this).css("display", "none");
	});
});

