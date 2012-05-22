//Draggable
$(function() {
	$(".fenster").draggable({ 
		cancel: '.inhalt',
		containment: 'body',
		scroll: false,
		stack: { group: '.fenster', min: 1 }
	});
});
//Resizeable
$(function() {
	$(".fenster").resizable({
		handles: 'n, e, s, w, ne, se, sw, nw',
		containment: 'body',
		minHeight: 80,
		minWidth: 138,
		maxHeight: $(window).height(),
		maxWidth: $(window).width()
	});
});