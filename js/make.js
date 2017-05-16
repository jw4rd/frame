function make(){

		
		sbp="MS,0.5,0.5\n"
		sbp+="JZ,2\n"
		sbp+="C6\n"
		sbp+="PAUSE 3\n"

		if($("#member").val()=="stud"){
			
			part="stud"

			//make cut1 at 1"

			sbp+="J2," + (cut1toolPath[0].X+1) + "," + cut1toolPath[0].Y + "\n"

			sbp+="JZ,-0.8\n"

			for(i=0;i<cut1toolPath.length;i++){
				sbp+="M2," + (cut1toolPath[i].X+1) + "," + cut1toolPath[i].Y + "\n"
			}

			sbp+="JZ,-1.6\n"

			for(i=cut1toolPath.length-1;i>=0;i--){
				sbp+="M2," + (cut1toolPath[i].X+1) + "," + cut1toolPath[i].Y + "\n"
			}

			sbp+="JZ,2\n"



			if(length>20){

				//hole 2.5 x 0.5 @ 15
				sbp+="J2," + 14.75 + "," + 1.6825 + "\n"
				sbp+="JZ,0\n"

				for(i=1;i<4;i++){
					sbp+="MZ,-" + (0.515*i) + "\n"
					sbp+="M2," + 17.25 + "," + 1.6825 + "\n"
					sbp+="M2," + 17.25 + "," + 1.8125 + "\n"
					sbp+="M2," + 14.75 + "," + 1.8125 + "\n"
					sbp+="M2," + 14.75 + "," + 1.6825 + "\n"
				}

				//
				sbp+="JZ,2\n"
			}

			//make cut2 at length+1	
	
			sbp+="J2," + (cut2toolPath[0].X+1+length) + "," + cut2toolPath[0].Y + "\n"

			sbp+="JZ,-0.8\n"

			for(i=0;i<cut2toolPath.length;i++){
				sbp+="M2," + (cut2toolPath[i].X+1+length) + "," + cut2toolPath[i].Y + "\n"
			}

			sbp+="JZ,-1.6\n"

			for(i=cut2toolPath.length-1;i>=0;i--){
				sbp+="M2," + (cut2toolPath[i].X+1+length) + "," + cut2toolPath[i].Y + "\n"
			}

		}

		else if(($("#member").val()=="top")||($("#member").val()=="bottom")){
			
			part="plateA"

			//cut 1"
			
			sbp+="J2," + (cut0toolPathA[0].X+1-tool).toFixed(4) + "," + cut0toolPathA[0].Y + "\n"

			sbp+="JZ,-0.8\n"

			for(i=0;i<cut0toolPathA.length;i++){
				sbp+="M2," + (cut0toolPathA[i].X+1-tool).toFixed(4) + "," + cut0toolPathA[i].Y + "\n"
			}

			sbp+="JZ,-1.6\n"

			for(i=cut0toolPathA.length-1;i>=0;i--){
				sbp+="M2," + (cut0toolPathA[i].X+1-tool).toFixed(4) + "," + cut0toolPathA[i].Y + "\n"
			}

			sbp+="JZ,0.25\n"
	
			//1st pocket

			sbp+="J2," + (pocketToolPathA[0].X+1+0.75) + "," + (pocketToolPathA[0].Y+1.75) + "\n"
			sbp+="JZ,0.0\n"
			sbp+="MZ,-0.38\n"
			for(i=0;i<pocketToolPathA.length;i++){
				sbp+="M2," + (pocketToolPathA[i].X+1+0.75) + "," + (pocketToolPathA[i].Y+1.75) + "\n"
			}
			sbp+="M2," + (pocketToolPathA[0].X+1+0.75) + "," + (pocketToolPathA[0].Y+1.75) + "\n"
			sbp+="JZ,2\n"

			//stud pockets

			n=Math.ceil(length/24)

			for(j=1;j<n;j++){

				sbp+="J2," + (pocketToolPath[0].X+1+(length/n*j)) + "," + (pocketToolPath[0].Y+1.75) + "\n"
				sbp+="JZ,0.0\n"
				sbp+="MZ,-0.38\n"
				for(i=0;i<pocketToolPath.length;i++){
					sbp+="M2," + (pocketToolPath[i].X+1+(length/n*j)) + "," + (pocketToolPath[i].Y+1.75) + "\n"
				}
				sbp+="M2," + (pocketToolPath[0].X+1+(length/n*j)) + "," + (pocketToolPath[0].Y+1.75) + "\n"
				sbp+="JZ,2\n"

			}

			//end pocket

			sbp+="J2," + (pocketToolPathB[0].X+1-0.75+length) + "," + (pocketToolPathB[0].Y+1.75) + "\n"
			sbp+="JZ,0.0\n"
			sbp+="MZ,-0.38\n"
			for(i=0;i<pocketToolPathB.length;i++){
				sbp+="M2," + (pocketToolPathB[i].X+1-0.75+length) + "," + (pocketToolPathB[i].Y+1.75) + "\n"
			}
			sbp+="M2," + (pocketToolPathB[0].X+1-0.75+length) + "," + (pocketToolPathB[0].Y+1.75) + "\n"
			sbp+="JZ,0.25\n"

			//cut end

			sbp+="J2," + (cut0toolPathB[0].X+1+length+tool).toFixed(4) + "," + cut0toolPathB[0].Y + "\n"

			sbp+="JZ,-0.8\n"

			for(i=0;i<cut0toolPathB.length;i++){
				sbp+="M2," + (cut0toolPathB[i].X+1+length+tool).toFixed(4) + "," + cut0toolPathB[i].Y + "\n"
			}		

			sbp+="JZ,-1.6\n"

			for(i=cut0toolPathA.length-1;i>=0;i--){
				sbp+="M2," + (cut0toolPathB[i].X+1+length+tool).toFixed(4) + "," + cut0toolPathB[i].Y + "\n"
			}

			sbp+="JZ,2\n"

		}


		sbp+="JZ,2\n"

		sbp+="C7\n"

		sbp+="J2,60,20\n"

		var link = document.getElementById("downloadLink")

		link.setAttribute("href", "data:text/plain;base64," + btoa(sbp))
		link.setAttribute("download", part + ".sbp")
		link.click()


		if(($("#member").val()=="top")||($("#member").val()=="bottom")){
			
			part="plateB"

			sbp="MS,0.5,0.5\n"
			sbp+="JZ,2\n"
			sbp+="C6\n"
			sbp+="PAUSE 3\n"

			//drill only

			//1st drill

			sbp+="J2," + (drill[0].X+1+0.75) + "," + (drill[0].Y+1.75) + "\n"
			sbp+="JZ,-0.06\n"
			sbp+="JZ,0.25\n"
			sbp+="J2," + (drill[1].X+1+0.75) + "," + (drill[1].Y+1.75) + "\n"
			sbp+="JZ,-0.06\n"
			sbp+="JZ,2\n"

			//stud drill

			n=Math.ceil(length/24)

			for(j=1;j<n;j++){

				sbp+="J2," + (drill[0].X+1+(length/n*j)) + "," + (drill[0].Y+1.75) + "\n"
				sbp+="JZ,-0.06\n"
				sbp+="JZ,0.25\n"
				sbp+="J2," + (drill[1].X+1+(length/n*j)) + "," + (drill[1].Y+1.75) + "\n"
				sbp+="JZ,-0.06\n"
				sbp+="JZ,2\n"

			}

			//end drill

			sbp+="J2," + (drill[0].X+1-0.75+length) + "," + (drill[0].Y+1.75) + "\n"
			sbp+="JZ,-0.06\n"
			sbp+="JZ,0.25\n"
			sbp+="J2," + (drill[1].X+1-0.75+length) + "," + (drill[1].Y+1.75) + "\n"
			sbp+="JZ,-0.06\n"

			

			sbp+="JZ,2\n"
			sbp+="C7\n"
			sbp+="J2,60,20\n"

			var link = document.getElementById("downloadLink")

			link.setAttribute("href", "data:text/plain;base64," + btoa(sbp))
			link.setAttribute("download", part + ".sbp")
			link.click()

		}


}
