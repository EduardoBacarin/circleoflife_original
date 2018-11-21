function nextCoL(step)

{



	if(step == 2)

	{

		var highest = new Array();

		var high = new Array();



		var svg = d3.select("#plotStep2").html("").append("svg")

		    .attr("width", width)

		    .attr("height", height)

		    .append("g")

		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



		for(i = 0; i<Object.keys(allData).length;i++)

		{

			if(highest.indexOf(allData[i].score) == -1)

				highest.push(allData[i].score);

		}

		function numberDes(a,b) {

		   return b-a;

		 }

		 highest.sort(numberDes);



		for(i = 0; i<Object.keys(allData).length;i++)

		{

			high.push(JSON.parse(JSON.stringify(allData[i])));



			if(high[i].score != highest[0] && high[i].score != highest[1] && high[i].score != highest[2])

			{

				high[i].score = 0;

			}

		}



		

		  var path = svg.selectAll(".solidArc")

		      .data(pie(high))

		    .enter().append("path")

		      .attr("fill", function(d) { return d.data.color; })

		      .attr("class", "solidArc")

		      .attr("stroke", "gray")

		      .attr("d", arc)

		      .on('mouseover', tip.show)

		      .on('mouseout', tip.hide);



		  var outerPath = svg.selectAll(".outlineArc")

		      .data(pie(high))

		    .enter().append("path")

		      .attr("fill", "none")

		      .attr("stroke", "gray")

		      .attr("class", "outlineArc")

		      .attr("d", outlineArc);  





		  // calculate the weighted mean score

		  var score = 

		    high.reduce(function(a, b) {

		      //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);

		      return a + (b.score * b.weight); 

		    }, 0) / 

		    high.reduce(function(a, b) { 

		      return a + b.weight; 

		    }, 0);



		  svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "-12")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Circle");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "21")

		    .attr("style", "font-size: 45px")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("of");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "70")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Life");





			$('#collapseOne').collapse('hide');    	

			$('#collapseTwo').collapse('show');    	

		}



	else if(step == 3)

	{

		var highest = new Array();

		var high = new Array();



		var svg = d3.select("#plotStep3").html("").append("svg")

		    .attr("width", width)

		    .attr("height", height)

		    .append("g")

		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



		for(i = 0; i<Object.keys(allData).length;i++)

		{

			if(highest.indexOf(allData[i].score) == -1)

				highest.push(allData[i].score);

		}

		function numberAsc(a,b) {

		   return a-b;

		 }

		 highest.sort(numberAsc);





		for(i = 0; i<Object.keys(allData).length;i++)

		{

			high.push(JSON.parse(JSON.stringify(allData[i])));



			if(high[i].score != highest[0] && high[i].score != highest[1] && high[i].score != highest[2])

			{

				high[i].score = 0;

			}

		}



		

		  var path = svg.selectAll(".solidArc")

		      .data(pie(high))

		    .enter().append("path")

		      .attr("fill", function(d) { return d.data.color; })

		      .attr("class", "solidArc")

		      .attr("stroke", "gray")

		      .attr("d", arc)

		      .on('mouseover', tip.show)

		      .on('mouseout', tip.hide);



		  var outerPath = svg.selectAll(".outlineArc")

		      .data(pie(high))

		    .enter().append("path")

		      .attr("fill", "none")

		      .attr("stroke", "gray")

		      .attr("class", "outlineArc")

		      .attr("d", outlineArc);  





		  // calculate the weighted mean score

		  var score = 

		    high.reduce(function(a, b) {

		      //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);

		      return a + (b.score * b.weight); 

		    }, 0) / 

		    high.reduce(function(a, b) { 

		      return a + b.weight; 

		    }, 0);



		  svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "-12")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Circle");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "21")

		    .attr("style", "font-size: 45px")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("of");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "70")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Life");





			$('#collapseTwo').collapse('hide');    	

			$('#collapseThree').collapse('show');    	

		}



	else if(step == 4)

	{

		



		var svg = d3.select("#plotStep4").html("").append("svg")

		    .attr("width", width)

		    .attr("height", height)

		    .append("g")

		    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");



		  var path = svg.selectAll(".solidArc")

		      .data(pie(allData))

		    .enter().append("path")

		      .attr("fill", function(d) { return d.data.color; })

		      .attr("class", "solidArc")

		      .attr("stroke", "gray")

		      .attr("d", arc)

		      .on('mouseover', tip.show)

		      .on('mouseout', tip.hide)

		      .on('click', function(data){

		          var area = $(this);



		          $('#focus').val(data.data.label);

		          next(5);



		      });



		  var outerPath = svg.selectAll(".outlineArc")

		      .data(pie(allData))

		    .enter().append("path")

		      .attr("fill", "none")

		      .attr("stroke", "gray")

		      .attr("class", "outlineArc")

		      .attr("d", outlineArc);  





		  // calculate the weighted mean score

		  var score = 

		    allData.reduce(function(a, b) {

		      //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);

		      return a + (b.score * b.weight); 

		    }, 0) / 

		    allData.reduce(function(a, b) { 

		      return a + b.weight; 

		    }, 0);



		  svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "-12")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Circle");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "21")

		    .attr("style", "font-size: 45px")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("of");



		    svg.append("svg:text")

		    .attr("class", "aster-score")

		    .attr("dy", "70")

		    .attr("text-anchor", "middle") // text-align: right

		    .text("Life");





			$('#collapseThree').collapse('hide');    	

			$('#collapseFour').collapse('show');    	

	}





	else if(step == 5)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep5",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divFormFocus').html(data.form);

	                

	            	$('#collapseFour').collapse('hide');    	

					$('#collapseFive').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 5.1)

	{

		var total = 0;



		$('.calc:checked').each(function(){

			total += parseInt($(this).val());

		});



		if(total >= 0 && total <= 33)

		{

			console.log(total);

			var color = "#ff0000";

		}

		else if(total > 33 && total <= 66)

		{

			var color = "#9a942a";

			

		}

		else if(total > 66 && total <= 100)

		{

			var color = "#008000";

		}





		$("#totalScore").html(total);

		$("#totalScore").attr('style','font-size: 25px; color:'+color+";");



		$('#collapseFive').collapse('hide');    	

		$('#collapseFiveOne').collapse('show');   

	}



	else if(step == 6)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep6",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divGoalIntention').html(data.form);

	                

	            	$('#collapseFiveOne').collapse('hide');    	

					$('#collapseSix').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 7)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep7",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divChallenges').html(data.form);

	                

	            	$('#collapseSix').collapse('hide');    	

					$('#collapseSeven').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 8)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep8",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divAffirmations').html(data.form);

	                

	            	$('#collapseSeven').collapse('hide');    	

					$('#collapseEight').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 9)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep9",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divActionSteps').html(data.form);

	                

	            	$('#collapseEight').collapse('hide');    	

					$('#collapseNine').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 10)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep10",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divAccountability').html(data.form);

	                

	            	$('#collapseNine').collapse('hide');    	

					$('#collapseTen').collapse('show');

	            }





	        }



	    });

	}



	else if(step == 11)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep11",

	        type: 'POST',

	        data: {label : $('#focus').val()},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divFindaCoach').html(data.form);

	                

	            	$('#collapseTen').collapse('hide');    	

					$('#collapseEleven').collapse('show');

	            }





	        }



	    });

	}



	





}



function prev(step)

{

	if(step == 1)

	{

		$('#collapseTwo').collapse('hide');    	

		$('#collapseOne').collapse('show');

	}

	else if(step == 2)

	{

		$('#collapseThree').collapse('hide');    	

		$('#collapseTwo').collapse('show');

	}

	else if(step == 3)

	{

		$('#collapseFour').collapse('hide');    	

		$('#collapseThree').collapse('show');

	}

	else if(step == 4)

	{

		$('#collapseFive').collapse('hide');    	

		$('#collapseFour').collapse('show');

	}

	else if(step == 5)

	{

		$('#collapseFiveOne').collapse('hide');    	

		$('#collapseFive').collapse('show');

	}

	else if(step == 5.1)

	{

		$('#collapseSix').collapse('hide');    	

		$('#collapseFiveOne').collapse('show');

	}

	else if(step == 6)

	{

		$('#collapseSeven').collapse('hide');    	

		$('#collapseSix').collapse('show');

	}

	else if(step == 7)

	{

		$('#collapseEight').collapse('hide');    	

		$('#collapseSeven').collapse('show');

	}

	else if(step == 8)

	{

		$('#collapseNine').collapse('hide');    	

		$('#collapseEight').collapse('show');

	}

	else if(step == 9)

	{

		$('#collapseTen').collapse('hide');    	

		$('#collapseNine').collapse('show');

	}

	else if(step == 10)

	{

		$('#collapseEleven').collapse('hide');    	

		$('#collapseTen').collapse('show');

	}

}



function nextFocus(step,label)

{

	if(step == 5)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep5",

	        type: 'POST',

	        data: {label : label},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divFormFocus').html(data.form);

	                

	            	$('#collapseFour').collapse('hide');    	

					$('#collapseFive').collapse('show');

	            }





	        }



	    });

	}

	else if(step == 6)

	{

		$.ajax({

	        url: $('#base_url').val()+"home/formStep6",

	        type: 'POST',

	        data: {label : label},

	        dataType: 'json',

	        success: function (data) {





	            if (data.res == true) {

	            	$('#divGoalIntention').html(data.form);

	                

	            	$('#collapseFiveOne').collapse('hide');    	

					$('#collapseSix').collapse('show');

	            }





	        }



	    });

	}

	

}