

/**
 * Handles graph
 */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var colors = d3.scaleOrdinal(d3.schemeSet1);

var svg = d3.select("#title-graph"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    node,
    link,
    edgepaths,
    edgelabels;

var svg2 = d3.select("#electric-graph"),
    width2 = +svg.attr("width"),
    height2 = +svg.attr("height"),
    node2,
    link2,
    edgepaths2,
    edgelabels2;

var svg3 = d3.select("#electric-graph2"),
    width3 = +svg.attr("width"),
    height3 = +svg.attr("height"),
    node3,
    link3,
    edgepaths3,
    edgelabels3;


var svg4 = d3.select("#electric-graph3"),
    width4 = +svg.attr("width"),
    height4 = +svg.attr("height"),
    node4,
    link4,
    edgepaths4,
    edgelabels4;


var svg5 = d3.select("#electric-graph4"),
    width5 = +svg.attr("width"),
    height5 = +svg.attr("height"),
    node5,
    link5,
    edgepaths5,
    edgelabels5;


svg.append('defs').append('marker')
    .attrs({'id':'arrowhead',
        'viewBox':'-0 -5 10 10',
        'refX':13,
        'refY':0,
        'orient':'auto',
        'markerWidth':5,
        'markerHeight':5,
        'xoverflow':'visible'})
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', 'black')
    .style('stroke','none');

svg2.append('defs').append('marker')
    .attrs({'id':'arrowhead',
        'viewBox':'-0 -5 10 10',
        'refX':13,
        'refY':0,
        'orient':'auto',
        'markerWidth':5,
        'markerHeight':5,
        'xoverflow':'visible'})
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', 'black')
    .style('stroke','none');

svg5.append('defs').append('marker')
    .attrs({'id':'arrowhead',
        'viewBox':'-0 -5 10 10',
        'refX':13,
        'refY':0,
        'orient':'auto',
        'markerWidth':5,
        'markerHeight':5,
        'xoverflow':'visible'})
    .append('svg:path')
    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
    .attr('fill', 'black')
    .style('stroke','none');


var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(300).strength(1))
    .force("charge", d3.forceManyBody())
    .alpha(1)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(100));

var simulation2 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(100).strength(1))
    .force("charge", d3.forceManyBody())
    .alpha(1)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(100));

var simulation3 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(200).strength(1))
    .force("charge", d3.forceManyBody())
    .alpha(1)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(120));

var simulation4 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(200).strength(1))
    .force("charge", d3.forceManyBody())
    .alpha(1)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(120));


var simulation5 = d3.forceSimulation()
    .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(200).strength(1))
    .force("charge", d3.forceManyBody())
    .alpha(1)
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(120));


var graph = {
    "nodes": [
    {
        "name": "A",
        "label": "1",
        "id": 101
    },
    {
        "name": "B",
        "label": "2",
        "id": 102
    },
    {
        "name": "C",
        "label": "3",
        "id": 103
    },
    {
        "name": "D",
        "label": "4",
        "id": 104
    }
    ],
    "links": [
        {
            "source": 101,
            "target": 102,
            "type": "0/300",
        },
        {
            "source": 101,
            "target": 103,
            "type": "0/10"
        },
        {
            "source": 102,
            "target": 103,
            "type": "0/5"
        },
        {
            "source": 103,
            "target": 104,
            "type": "0/200"
        },
    ]
};

var graph2 = {
    "nodes": [
    {
        "name": "Solar Panel",
        "label": "1",
        "id": 1
    },
    {
        "name": "Transformer",
        "label": "2",
        "id": 2
    },
    {
        "name": "Transformer",
        "label": "3",
        "id": 3
    },
    {
        "name": "Transformer",
        "label": "4",
        "id": 4
    },
    {
        "name": "Transformer",
        "label": "5",
        "id": 5
    },

    {
        "name": "UCR",
        "label": "6",
        "id": 6
    }

    ],

    "links": [
        {
            "source": 1,
            "target": 2,
            "type": "0/10",
        },
        {
            "source": 1,
            "target": 3,
            "type": "0/10"
        },
        {
            "source": 2,
            "target": 3,
            "type": "0/2"
        },
        {
            "source": 2,
            "target": 4,
            "type": "0/8"
        },
        {
            "source": 2,
            "target": 5,
            "type": "0/4"
        },
        {
            "source": 3,
            "target": 4,
            "type": "0/9"
        },
        {
            "source": 5,
            "target": 6,
            "type": "0/10"
        },
        {
            "source": 5,
            "target": 4,
            "type": "0/6"
        },
        {
            "source": 4,
            "target": 6,
            "type": "0/10"
        },

    ]
};

var graph3 = {
    "nodes": [
    {
        "name": "Solar Panel",
        "label": "1",
        "id": 1
    },
    {
        "name": "Transformer",
        "label": "2",
        "id": 2
    },
    {
        "name": "Transformer",
        "label": "3",
        "id": 3
    },
    {
        "name": "Transformer",
        "label": "4",
        "id": 4
    },
    {
        "name": "Transformer",
        "label": "5",
        "id": 5
    },

    {
        "name": "UCR",
        "label": "6",
        "id": 6
    }

    ],

    "links": [
        {
            "source": 1,
            "target": 2,
            "type": "10/10",
        },
        {
            "source": 1,
            "target": 3,
            "type": "9/10"
        },
        {
            "source": 2,
            "target": 3,
            "type": "0/2"
        },
        {
            "source": 2,
            "target": 4,
            "type": "6/8"
        },
        {
            "source": 2,
            "target": 5,
            "type": "4/4"
        },
        {
            "source": 3,
            "target": 4,
            "type": "9/9"
        },
        {
            "source": 5,
            "target": 6,
            "type": "9/10"
        },
        {
            "source": 4,
            "target": 5,
            "type": "5/6"
        },
        {
            "source": 4,
            "target": 6,
            "type": "10/10"
        },

    ]
};

var graph4 = {
    "nodes": [
    {
        "name": "Solar Panel",
        "label": "1",
        "id": 1
    },
    {
        "name": "Transformer",
        "label": "2",
        "id": 2
    },
    {
        "name": "Transformer",
        "label": "3",
        "id": 3
    },
    {
        "name": "Transformer",
        "label": "4",
        "id": 4
    },
    {
        "name": "Transformer",
        "label": "5",
        "id": 5
    },

    {
        "name": "UCR",
        "label": "6",
        "id": 6
    }

    ],

    "links": [
        {
            "source": 1,
            "target": 2,
            "type": "0/10",
        },
        {
            "source": 1,
            "target": 3,
            "type": "0/10"
        },
        {
            "source": 2,
            "target": 3,
            "type": "0/2"
        },
        {
            "source": 2,
            "target": 4,
            "type": "0/8"
        },
        {
            "source": 2,
            "target": 5,
            "type": "0/4"
        },
        {
            "source": 3,
            "target": 4,
            "type": "0/9"
        },
        {
            "source": 5,
            "target": 6,
            "type": "0/10"
        },
        {
            "source": 5,
            "target": 4,
            "type": "0/6"
        },
        {
            "source": 4,
            "target": 6,
            "type": "0/10"
        },

    ]
};

var graph5 = {
    "nodes": [
    {
        "name": "Solar Panel",
        "label": "1",
        "id": 1
    },
    {
        "name": "Transformer",
        "label": "2",
        "id": 2
    },
    {
        "name": "Transformer",
        "label": "3",
        "id": 3
    },
    {
        "name": "Transformer",
        "label": "4",
        "id": 4
    },
    {
        "name": "Transformer",
        "label": "5",
        "id": 5
    },

    {
        "name": "UCR",
        "label": "6",
        "id": 6
    }

    ],

    "links": [
        {
            "source": 1,
            "target": 2,
            "type": "10/10",
        },
        {
            "source": 1,
            "target": 3,
            "type": "4/10"
        },
        {
            "source": 2,
            "target": 3,
            "type": "0/2"
        },
        {
            "source": 2,
            "target": 4,
            "type": "6/8"
        },
        {
            "source": 2,
            "target": 5,
            "type": "4/4"
        },
        {
            "source": 3,
            "target": 4,
            "type": "4/9"
        },
        {
            "source": 5,
            "target": 6,
            "type": "4/10"
        },
        {
            "source": 5,
            "target": 4,
            "type": "0/6"
        },
        {
            "source": 4,
            "target": 6,
            "type": "10/10"
        },

    ]
};




update(graph.links, graph.nodes, svg, simulation, node, link, edgepaths, edgelabels, 'title');
update(graph2.links, graph2.nodes, svg2, simulation2, node2, link2, edgepaths2, edgelabels2, 'electric');
update(graph3.links, graph3.nodes, svg3, simulation3, node3, link3, edgepaths3, edgelabels3, 'electric2');

update(graph4.links, graph4.nodes, svg4, simulation4, node4, link4, edgepaths4, edgelabels4, 'electric3');

update(graph5.links, graph5.nodes, svg5, simulation5, node5, link5, edgepaths5, edgelabels5, 'electric4');

function update(links,
        nodes, cur_svg, cur_simulation,
        cur_node, cur_link, cur_edgepaths, cur_edgelabels,
        prefix
    ) {

    cur_link = cur_svg.selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr('marker-end','url(#arrowhead)')

    cur_link.append("title")
        .text(function (d) {return d.type;});

    cur_edgepaths = cur_svg.selectAll(".edgepath")
        .data(links)
        .enter()
        .append('path')
        .attrs({
            'class': 'edgepath',
            'fill-opacity': 0.8,
            'stroke-opacity': 0.8,
            'id': function (d, i) {return prefix+'edgepath' + i}
        })
        .style("pointer-events", "none");

    cur_edgelabels = cur_svg.selectAll(".edgelabel")
        .data(links)
        .enter()
        .append('text')
        .style("pointer-events", "none")
        .attrs({
            'class': 'edgelabel',
            'id': function (d, i) {return prefix+'edgelabel' + i},
            'font-size': 24,
            'fill': 'black',
            'fill-opacity': 1.0,
            'stroke-opacity': 1.0
        });

    cur_edgelabels.append('textPath')
        .attr('xlink:href', function (d, i) {return '#' + prefix+'edgepath' + i})
        .style("text-anchor", "middle")
        .style("pointer-events", "none")
        .attr("startOffset", "50%")
        .text(function (d) {return d.type});

    cur_node = cur_svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", (d)=>dragstarted(d,cur_simulation))
            .on("drag", dragged)
            //.on("end", dragended)
        );

    cur_node.append("circle")
        .attr("r", 5)
        .style("fill", function (d, i) {return colors(i);})

    cur_node.append("title")
        .text(function (d) {return d.id;});

    cur_node.append("text")
        .attr("dy", -3)
        .text(function (d) {return d.name+":"+d.label;});

    cur_simulation
        .nodes(nodes)
        .on("tick", ()=>ticked(cur_link, cur_node, cur_edgepaths, cur_edgelabels));

    cur_simulation.force("link")
        .links(links);

}

function ticked(cur_link, cur_node, cur_edgepaths, cur_edgelabels) {

    cur_link
        .attr("x1", function (d) {return d.source.x;})
        .attr("y1", function (d) {return d.source.y;})
        .attr("x2", function (d) {return d.target.x;})
        .attr("y2", function (d) {return d.target.y;});

    cur_node
        .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});


    // TODO: Change edgepath and edgelabels to passed in ones.
    cur_edgepaths
        .attr('d', function (d) {
        return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
    });

    cur_edgelabels.attr('transform', function (d) {
        if (d.target.x < d.source.x) {
            var bbox = this.getBBox();
            rx = bbox.x + bbox.width / 2;
            ry = bbox.y + bbox.height / 2;
            return 'rotate(180 ' + rx + ' ' + ry + ')';
        }
        else {
            return 'rotate(0)';
        }
    });

}


/**
 * Finds the correct edge
 */
function findEdge(svg, prefix, pathnum) {
    var search_str = '#' + prefix + 'edgepath' + pathnum;
    var true_ex = '#electric2edgepath1';
    var cur_edges = svg.selectAll('#' + prefix + 'edgepath' + pathnum);
    return cur_edges;
};

/**
 * Find Label
 */
function findLabel(svg, prefix, pathnum) {

    var search_str = '#' + prefix + 'edgelabel' + pathnum;
    var true_ex = '#electric2edgepath1';
    var cur_edges = svg.selectAll('#' + prefix + 'edgelabel' + pathnum);

    return cur_edges;
};


const findNode = (svg, find_id) => {
    var match = svg.selectAll(".node").filter(x => {
        return x.id == find_id;
    });

    return match;
};


/**
 * Given edge id set the color
 */
function setEdgeColor(edgepath, color, width) {
    edgepath.style('stroke', color).style("stroke-width", width);
}

function setLabelColor(label, color) {
    label.attr("fill", color);

}

function blinkEdgeRed(edgepath) {
    var cur_color = edgepath.style("stroke");

    if (cur_color == 'red') {
        // edgepath.style('stroke', 'black');
        setEdgeColor(edgepath, 'black', '1');
    } else {
        setEdgeColor(edgepath, 'red', '3');
        // edgepath.style('stroke', 'red');
    }
}

function dragstarted(d, cur_simulation) {
    if (!d3.event.active) cur_simulation.alphaTarget(0.3).restart()
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

//    function dragended(d) {
//        if (!d3.event.active) simulation.alphaTarget(0);
//        d.fx = undefined;
//        d.fy = undefined;
//    }

var paths_blink  = [0, 1, 3, 4, 5, 6, 7, 8];

// Blinking electric graph paths to be red
var blinkElectricGraph1 = window.setInterval(function(){

        /*
        paths_blink.map(x => {
            var cur_label = findLabel(svg3, 'electric', x);
            setLabelColor(cur_label, 'red');
        });
        */

        paths_blink.map(x => {
            var cur_path = findEdge(svg3, 'electric2', x);
            blinkEdgeRed(cur_path);
        })
    }, 1000

);

// Setting electric graph labels to be red
paths_blink.map(x => {
    var checkLabel = findLabel(svg3, 'electric2', x);
    setLabelColor(checkLabel, 'red');
});


var levels_data = [[0,1], [2, 3,4, 5], [6,7,8]];

// TODO: Node ids at each level
var levels_node_data = [[0], [2,3], [4,5], [6]];

var original_name = [
    "Transformer:2", "Solar Panel:1", 
     "Transformer:2","Transformer:3",
     "Transformer:4", "Transformer:5",
];

var dfs_data = [0, 4, 6, 7, 3, 2, 1, 5, 8];

var total_dfs_data = [0,1,2,3,4,5,6,7,8];

var state = 0;

var state_dfs = 0;

async function flowBlink(edges) {

    edges.map(cur_edge => {
        // console.log("cur_edge: ", cur_edge);
        var edgeData = findEdge(svg4, 'electric3', cur_edge);
        blinkEdgeRed(edgeData);
    });

}


/**
 * BFS algorithm
 */
window.setInterval(()=> {

    var cur_level = state % 3;

    if (cur_level == 0) {

      for (var i=0; i < original_name.length; i++) {
        const curNode = findNode(svg4, i);
        curNode.select("text").text(original_name[i]);
      }

        // TODO: Set beginning node to 0
        /*
        svg4.selectAll('.node text').each((d, ix)=> {
            // console.log(`ix ${ix}`);
            d3.select(this).text(original_name[ix]);
        });
        */

    } else {

        var to_change = levels_node_data[cur_level];

        to_change.map(x => {
            const curNode = findNode(svg4, x);
            curNode.select("text").text(`level: ${cur_level}`);
        });
    }

    levels_data.map(edges => {
        edges.map(curEdge => {
            var path = findEdge(svg4, 'electric3', curEdge);
           setEdgeColor(path, 'black', 1);
        });
    });

    levels_data[cur_level].map(x => {
        var cur_edge = findEdge(svg4, 'electric3', x);
        setEdgeColor(cur_edge, 'red', 3);
    });


    state = state + 1;
}, 2000);


/**
 * DFS algorithm
 */
window.setInterval(()=> {

    var local_ix = state_dfs % dfs_data.length;

    if (local_ix == 0) {

        // TODO: Set beginning node to 0
        /*svg4.selectAll('.node text').each((d, ix)=> {
            console.log(`ix ${ix}`);
            d3.select(this).text(original_name[ix]);
        });
        */

      total_dfs_data.map(
        x => {
          var path = findEdge(svg5, 'electric4',x);
          setEdgeColor(path, 'black', 1);
        }
      );


    }

      var path_ix = dfs_data[local_ix];
      var cur_path = findEdge(svg5, 'electric4', path_ix);

      console.log("cur_path:", cur_path);

      setEdgeColor(cur_path, 'red', 3);

      /*
        var to_change = levels_node_data[cur_level];
        to_change.map(x => {
            const curNode = findNode(svg4, x);
            curNode.select("text").text(`level: ${cur_level}`);
        });
        */


    state_dfs = state_dfs + 1;

}, 2000);


// const check = findNode(svg4, 1);
// const cpyGraph4 = graph4;
// cpyGraph4.nodes[0].name = "oops";
// check.select("text").text("oops");




function doSomething() {
    console.log("test");
}

