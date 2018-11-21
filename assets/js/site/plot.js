var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2,
    innerRadius = 0.3 * radius;

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.width; });

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([0, 0])
  .html(function(d) {
    return "<div style=' font-size:20px;'>"+d.data.label + ": <span style='color:orangered;'>" + d.data.score + "</span></div>";
  });

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) { 
    return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius; 
  });

var outlineArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

var svg = d3.select("#plot").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);

var allData;

d3.csv('assets/aster_data.csv', function(error, data) {

  data.forEach(function(d) {
    d.id     =  d.id;
    d.order  = +d.order;
    d.color  =  d.color;
    d.weight = +d.weight;
    d.score  = +d.score;
    d.width  = +d.weight;
    d.label  =  d.label;
  });
   //for (var i = 0; i < data.score; i++) { console.log(data[i].id) }
  allData = data;
  var path = svg.selectAll(".solidArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", function(d) { return d.data.color; })
      .attr("class", "solidArc")
      .attr("stroke", "gray")
      .attr("d", arc)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .on('click', function(data){
          var area = $(this);

          $("#divScore").show();
          $("#labelScore").html(data.data.label);
          $("#score").val(data.data.score);
          $("#btnPlus").unbind("click").click(function(){
              result = parseInt($("#score").val())+5;

              if(result > 100)
              {
                result = 100;
              }

              $("#score").val(result);

              data.data.score = result;
              area.attr("d",arc(data));

          });
          $("#btnMinus").unbind("click").click(function(){
              result = parseInt($("#score").val())-5;

              if(result < 0)
              {
                result = 0;
              }

              $("#score").val(result);
              
              data.data.score = result;
              area.attr("d",arc(data));

          });

      });

  var outerPath = svg.selectAll(".outlineArc")
      .data(pie(data))
    .enter().append("path")
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("class", "outlineArc")
      .attr("d", outlineArc);  


  // calculate the weighted mean score
  var score = 
    data.reduce(function(a, b) {
      //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
      return a + (b.score * b.weight); 
    }, 0) / 
    data.reduce(function(a, b) { 
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
    //.text(Math.round(score));

});