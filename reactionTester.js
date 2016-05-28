		function getRandomcolor() {
			
			var letters='0123456789ABCDEF'.split('');
			var color='#';
			for (i=0; i<6; i++) {
				color += letters[Math.round(Math.random() * 15)];
			}
			return color;
		}
		
		function makebox() {
		
			var clickTime; var makeTime; var reaction;
	
			var x=Math.random();
			
			x *= 2000;
			
			var xpos=Math.floor(Math.random()*1000);
			
			var ypos=Math.floor(Math.random()*475);
	
			setTimeout(function() {
			
				if (Math.random()>0.5) {
					
					document.getElementById('box').style.borderRadius='100px';
					
				} else {
					
					document.getElementById('box').style.borderRadius='0px';
				
				}
				
				document.getElementById('box').style.top=ypos+"px";
				
				document.getElementById('box').style.left=xpos+"px";
				
				document.getElementById('box').style.backgroundColor=getRandomcolor();
				
				document.getElementById('box').style.display='block';
				
				makeTime=Date.now();
			}, x);
					
		
			document.getElementById('box').onclick=function() {
	
				this.style.display='none';
				
				clickTime=Date.now();
				
				reaction=clickTime-makeTime + 'ms \n';
				
				document.getElementById('react').innerHTML=reaction;
				
				makebox();
			}
							
		}
		
		makebox();