var img = new Image();
var canvas = document.querySelector('canvas');
canvas.style.backgroundColor = 'transparent';
canvas.style.position = 'static';
img.src = "index/image-20200504195616810.png";
img.onload=function(){
	var ctx;
	var w = img.width,
		h = img.height;
	
	function layer(ctx) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(70,0, w-70, h);
	};

	function eventMove(e) {
		with(ctx) {
			beginPath();
			arc(e.offsetX, e.offsetY, 3, 0, Math.PI * 2);
			fill();
		}
		
	}
	canvas.width = w;
	canvas.height = h;
	canvas.style.backgroundImage = 'url(' + img.src + ')';
	ctx = canvas.getContext('2d');
	ctx.fillStyle = 'transparent';
	ctx.fillRect(0, 0, w, h);
	layer(ctx);
	ctx.globalCompositeOperation = "destination-out";
	canvas.addEventListener('mousemove', eventMove);
}