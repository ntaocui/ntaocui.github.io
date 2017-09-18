// edits desc text
alert("hi");

    jQuery(function(){
      jQuery('#test').click();
    });    


function changeDesc(ele){
	var tab = ele.id;
	if (tab == "experience-tab") {
		$("#page-desc").typeIt({
		    strings: "[Eng Sub: Cool places that I've worked at]",
		    speed: 50,
		    autoStart: true
		});
	}
	else if(tab == "skills-tab"){
		$("#page-desc").typeIt({
		    strings: "[Eng Sub: Here are some skills that I've acquired over the years]",
		    speed: 50,
		    autoStart: true
		}); 
	}
	else if(tab == "projects-tab"){
		$("#page-desc").typeIt({
		    strings: "[Eng Sub: Some of the projects I've been working on]",
		    speed: 50,
		    autoStart: true
		});		
	}
	else{
		$("#page-desc").typeIt({
		    strings: "[Eng Sub: Hi, I'm Alex and welcome to my website]" ,
		    speed: 50,
		    autoStart: true
		});
	}
}




   

