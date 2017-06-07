function draw(){

	size = document.getElementById("2x").value
	console.log(size)
	if(size=="2x6"){
		extend=1

		cut0toolPathA = cut0toolPathA_2x6
		cut0toolPathB = cut0toolPathB_2x6

		cut1toolPath = cut1toolPath_2x6
		cut2toolPath = cut2toolPath_2x6
	}
	else{
		extend=0

		cut0toolPathA = cut0toolPathA_2x4
		cut0toolPathB = cut0toolPathB_2x4

		cut1toolPath = cut1toolPath_2x4
		cut2toolPath = cut2toolPath_2x4
	}

	c = document.getElementById("myCanvas")
	ctx = c.getContext("2d")

	ctx.canvas.height = window.innerHeight-6
	ctx.canvas.width = window.innerWidth-6

	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
	ctx.lineJoin="round"
	ctx.lineCap="round"
	ctx.lineWidth=1

	ctx.fillStyle="rgba(210,185,160,0.8)"
	ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2)

	sf=12

	ctx.fillRect(-48*sf,(-1.75-extend)*sf,96*sf,(3.5+(extend*2))*sf)

	space = parseInt($("#space").val())

	//ctx.fill()
	ctx.beginPath()

	//ctx.lineTo(0,0)
	//ctx.lineTo(50,0)
	ctx.lineTo(-47*sf,(-1.75-extend)*sf)
	ctx.lineTo((-47+length)*sf,(-1.75-extend)*sf)

	ctx.moveTo(-47*sf,(1.75+extend)*sf)
	ctx.lineTo((-47+length)*sf,(1.75+extend)*sf)

	ctx.stroke()

	if($("#member").val()=="stud"){

		ctx.clearRect((-47+13.5)*sf,-0.25*sf,2.5*sf,0.25*sf)

		ctx.beginPath()
		ctx.lineTo((cut1[0].X-47)*sf,(cut1[0].Y-(1.75+extend))*sf)
		for(i=0;i<cut1.length;i++){
			ctx.lineTo((cut1[i].X-47)*sf,(cut1[i].Y-1.75)*sf)
		}
		ctx.lineTo((cut1[cut1.length-1].X-47)*sf,(cut1[cut1.length-1].Y-(1.75-extend))*sf)
		ctx.stroke()

		ctx.beginPath()
		ctx.lineTo( ((cut2[0].X-47) + length ) *sf,(cut2[0].Y-(1.75+extend))*sf)
		for(i=0;i<cut2.length;i++){
			ctx.lineTo( ((cut2[i].X-47) + length ) *sf,(cut2[i].Y-1.75)*sf)
		}
		ctx.lineTo( ((cut2[cut2.length-1].X-47) + length ) *sf,(cut2[cut2.length-1].Y-(1.75-extend))*sf)
		ctx.stroke()

		ctx.strokeStyle="rgba(255,0,255,0.3)"
		ctx.lineWidth=(0.375*sf)

		ctx.beginPath()
		for(i=0;i<cut1toolPath.length;i++){
			ctx.lineTo((cut1toolPath[i].X-47)*sf,(cut1toolPath[i].Y-1.75)*sf)
		}
		ctx.stroke()

		ctx.beginPath()
		for(i=0;i<cut2toolPath.length;i++){
			ctx.lineTo( ((cut2toolPath[i].X-47)+length)*sf,(cut2toolPath[i].Y-1.75)*sf)
		}
		ctx.stroke()

		ctx.lineWidth=1

		ctx.strokeStyle="#000"

		ctx.beginPath()

			ctx.rect((-47+13.5)*sf,-0.25*sf,2.5*sf,0.25*sf)

		ctx.stroke()

	}
	else if(($("#member").val()=="bottom")||($("#member").val()=="top")){


		ctx.beginPath()
		ctx.lineTo((cut0[0].X-47)*sf,(cut0[0].Y-(1.75+extend))*sf)
		for(i=0;i<cut0.length;i++){
			ctx.lineTo((cut0[i].X-47)*sf,(cut0[i].Y-1.75)*sf)
		}
		ctx.lineTo((cut0[cut0.length-1].X-47)*sf,(cut0[cut0.length-1].Y-(1.75-extend))*sf)
		ctx.stroke()


		ctx.beginPath()
		ctx.lineTo( ((cut0[0].X-47) + length ) *sf,(cut0[0].Y-(1.75+extend))*sf)
		for(i=0;i<cut0.length;i++){
			ctx.lineTo( ((cut0[i].X-47) + length ) *sf,(cut0[i].Y-1.75)*sf)
		}
		ctx.lineTo( ((cut0[cut0.length-1].X-47) + length ) *sf,(cut0[cut0.length-1].Y-(1.75-extend))*sf)
		ctx.stroke()

		ctx.strokeStyle="rgba(255,0,255,0.3)"

		ctx.lineWidth=(0.375*sf)

		ctx.beginPath()
		for(i=0;i<cut0toolPathA.length;i++){
			ctx.lineTo((cut0toolPathA[i].X-47-tool)*sf,(cut0toolPathA[i].Y-1.75)*sf)
		}
		ctx.stroke()

		ctx.beginPath()
		for(i=0;i<cut0toolPathB.length;i++){
			ctx.lineTo((cut0toolPathB[i].X-47+tool+length)*sf,(cut0toolPathB[i].Y-1.75)*sf)
		}
		ctx.stroke()

		ctx.lineWidth=1

		//pockets

		ctx.strokeStyle="#0000ff"
		ctx.beginPath()
		for(i=0;i<pocket.length;i++){
			ctx.lineTo( (pocket[i].X-47+0.75)*sf,(pocket[i].Y)*sf)
		}
		ctx.lineTo( (pocket[0].X-47+0.75)*sf,(pocket[0].Y)*sf)
		ctx.stroke()

		ctx.beginPath()
		for(i=0;i<pocket.length;i++){
			ctx.lineTo( (pocket[i].X-47-0.75+length)*sf,(pocket[i].Y)*sf)
		}
		ctx.lineTo( (pocket[0].X-47-0.75+length)*sf,(pocket[0].Y)*sf)
		ctx.stroke()

		/*

		n=Math.ceil(length/24)

		for(j=1;j<n;j++){
			ctx.beginPath()
			for(i=0;i<pocket.length;i++){
				ctx.lineTo( (pocket[i].X-47+(length/n*j))*sf,(pocket[i].Y)*sf)
			}
			ctx.lineTo( (pocket[0].X-47+(length/n*j))*sf,(pocket[0].Y)*sf)
			ctx.stroke()

		}

		*/


		for(j=1;j<Math.ceil((length-2.1875)/space);j++){
			ctx.beginPath()
			for(i=0;i<pocket.length;i++){
				ctx.lineTo( (pocket[i].X-47+(space*j))*sf,(pocket[i].Y)*sf)
			}
			ctx.lineTo( (pocket[0].X-47+(space*j))*sf,(pocket[0].Y)*sf)
			ctx.stroke()

		}

		//pocket toolpath

		ctx.lineWidth=(0.375*sf)

		//first
		ctx.strokeStyle="rgba(255,0,255,0.3)"
		ctx.beginPath()
		for(i=0;i<pocketToolPathA.length;i++){
			ctx.lineTo( (pocketToolPathA[i].X-47+0.75)*sf,(pocketToolPathA[i].Y)*sf)
		}
		ctx.lineTo( (pocketToolPathA[0].X-47+0.75)*sf,(pocketToolPathA[0].Y)*sf)
		ctx.stroke()

		//end

		ctx.beginPath()
		for(i=0;i<pocketToolPathB.length;i++){
			ctx.lineTo( (pocketToolPathB[i].X-47-0.75+length)*sf,(pocketToolPathB[i].Y)*sf)
		}
		ctx.lineTo( (pocketToolPathB[0].X-47-0.75+length)*sf,(pocketToolPathB[0].Y)*sf)
		ctx.stroke()

		//center pockets 

		/*

		n=Math.ceil(length/24)

		for(j=1;j<n;j++){
			ctx.beginPath()
			for(i=0;i<pocketToolPath.length;i++){
				ctx.lineTo( (pocketToolPath[i].X-47+(length/n*j))*sf,(pocketToolPath[i].Y)*sf)
			}
			ctx.lineTo( (pocketToolPath[0].X-47+(length/n*j))*sf,(pocketToolPath[0].Y)*sf)
			ctx.stroke()

		}

		*/


		for(j=1;j<Math.ceil((length-2.1875)/space);j++){
			ctx.beginPath()
			for(i=0;i<pocketToolPath.length;i++){
				ctx.lineTo( (pocketToolPath[i].X-47+(space*j))*sf,(pocketToolPath[i].Y)*sf)
			}
			ctx.lineTo( (pocketToolPath[0].X-47+(space*j))*sf,(pocketToolPath[0].Y)*sf)
			ctx.stroke()

		}

		ctx.lineWidth=(1)

		//drill
		
		ctx.fillStyle="#ffff00"

		ctx.beginPath()
		ctx.arc( (drill[0].X-47+0.75)*sf,(drill[0].Y+extend)*sf,tool*sf,0,Math.PI*2)
		ctx.arc( (drill[1].X-47+0.75)*sf,(drill[1].Y-extend)*sf,tool*sf,0,Math.PI*2)
		ctx.fill()

		ctx.beginPath()
		ctx.arc( (drill[0].X-47-0.75+length)*sf,(drill[0].Y+extend)*sf,tool*sf,0,Math.PI*2)
		ctx.arc( (drill[1].X-47-0.75+length)*sf,(drill[1].Y-extend)*sf,tool*sf,0,Math.PI*2)
		ctx.fill()

		/*
		for(j=1;j<n;j++){

			ctx.beginPath()

			ctx.arc( (drill[0].X-47+(length/n*j))*sf,(drill[0].Y)*sf,tool*sf,0,Math.PI*2)
			ctx.arc( (drill[1].X-47+(length/n*j))*sf,(drill[1].Y)*sf,tool*sf,0,Math.PI*2)

			ctx.fill()

		}

		*/

		for(j=1;j<Math.ceil((length-2.1875)/space);j++){

			ctx.beginPath()

			ctx.arc( (drill[0].X-47+(space*j))*sf,(drill[0].Y+extend)*sf,tool*sf,0,Math.PI*2)
			ctx.arc( (drill[1].X-47+(space*j))*sf,(drill[1].Y-extend)*sf,tool*sf,0,Math.PI*2)

			ctx.fill()

		}
		

	}

	//origin
	
	ctx.strokeStyle="#000"
	ctx.beginPath()
	ctx.moveTo(-48.25*sf,(1.75+extend)*sf)
	ctx.lineTo(-47.75*sf,(1.75+extend)*sf)
	ctx.moveTo(-48*sf,(1.5+extend)*sf)
	ctx.lineTo(-48*sf,(2+extend)*sf)
	ctx.stroke()
	

	//dims(

	ctx.fillStyle="#ff6666"
	ctx.font = "18px Arial"
	ctx.fillText(dim,(-ctx.measureText(dim).width/2)-(47*sf)+((length/2)*sf),50+(extend*sf));


	//console.log(ctx.measureText(dim))


	ctx.lineWidth=0.6;	
	ctx.strokeStyle="#ff0000"
	ctx.beginPath()
	ctx.lineTo(-47*sf,38+(extend*sf))
	ctx.lineTo(-47*sf,50+(extend*sf))
	ctx.moveTo(-47*sf,44+(extend*sf))
	ctx.lineTo((-(47*sf)+((length/2)*sf))-(ctx.measureText(dim).width+20)/2,44+(extend*sf))
	ctx.moveTo((-(47*sf)+((length/2)*sf))+(ctx.measureText(dim).width+20)/2,44+(extend*sf))
	ctx.lineTo((-47+length)*sf,44+(extend*sf))
	ctx.moveTo((-47+length)*sf,38+(extend*sf))
	ctx.lineTo((-47+length)*sf,50+(extend*sf))
	ctx.stroke()

}





















