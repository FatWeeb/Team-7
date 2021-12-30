

var canvas = new fabric.Canvas('myCanvas');

var block_image_object= "team_7";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '78')
	{
		block_image_width = 200;
		block_image_height = 350;
		block_x = 5;
		block_y = 380;
		new_image('nr.png');
        console.log("n");
	}
	if(keyPressed == '83')
	{
		block_image_width = 200;
		block_image_height = 350;
		block_x = 200;
		block_y = 380;
		new_image('sk.png');
        console.log("s");
	}
	
	if(keyPressed == '75')
	{
		block_x =440;
		block_y = 150;
		block_image_width = 300;
		block_image_height = 600;
		new_image('kk.png');
        console.log("k");
	}
	if(keyPressed == '67')
	{
		block_image_width = 300;
		block_image_height = 450;
		block_x = 660;
		block_y = 305;
		new_image('sr.png');
        console.log("c");
	}	
}

