var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
    fabric.image.fromURL('BirthdayImage.jpg', function(img) {
        blockImageObject = img;


        blockImageObject.scaleToWidth(700);
        blockImageObject.scaleToHeight(510);
        blockImageObject.set({
        top:0,
        left:0
        });
        canvas.add(blockImageObject);
    });
    	
}

function playSound(){
    x.play();
}
