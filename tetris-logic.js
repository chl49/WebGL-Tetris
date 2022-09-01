function keyEventListener(){
	document.addEventListener('keydown', (event) => {
	    const keyname = event.key;
	    switch(keyname) {
          case 'ArrowUp':   rotateRectangles();  break;
          case 'ArrowDown':  dropRectangle(); break;
          case 'ArrowRight':     rightRectangle();  break;
          case 'ArrowLeft':   leftRectangle();  break;
          case 'q': close_window(); break;
          case 'r': location.reload(); break;
        }
	});
}