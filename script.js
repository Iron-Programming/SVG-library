    // global color of SVG elements
var svgColor = "rgb(0, 0, 0)";
function color (r, g, b) {
    if (arguments.length === 1) {
        return svgColor = r;
    }
    svgColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

// global stroke of SVG elements
var svgStroke = "rgb(0, 0, 0)";
function stroke (r, g, b) {
    if (arguments.length === 1) {
        return svgStroke = r;
    }
    svgStroke = "rgb(" + r + ", " + g + ", " + b + ")";
}

// global stroke thickness/width/weight of SVG elements
var svgStrokeWidth = "1";
function strokeWidth (width) {
    svgStrokeWidth = width;
}

// our xmlns value...
var xmlns = "http://www.w3.org/2000/svg";

///// Create <svg> canvas /////
function newSVG (width, view) {
    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", view);
    svgElem.setAttributeNS(null, "width", width);
    
    return svgElem;
}

//// Create <animation> for a SVG /////
function newAnimation (attr, dur, values, repeatCount) {
    var anim = document.createElementNS(xmlns, "animate");
    anim.setAttribute("attributeName", attr);
    anim.setAttribute("dur", dur);
    anim.setAttribute("values", values);
    anim.setAttribute("repeatCount", repeatCount);
    
    return anim;
}

///// Create <path> graphic /////
function newPath (d) {
    var path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'stroke', svgStroke);
    path.setAttributeNS(null, 'stroke-width', svgStrokeWidth);
    path.setAttributeNS(null, 'fill', svgColor);
    path.setAttributeNS(null, 'd', d);
    
    return path;
}

///// Create <ellipse> graphic /////
function newEllipse (x, y, width, height) {
    var ellipse = document.createElementNS(xmlns, "ellipse");
    ellipse.setAttributeNS(null, "fill", svgColor);
    ellipse.setAttributeNS(null, "stroke", svgStroke);
    ellipse.setAttributeNS(null, "stroke-width", svgStrokeWidth);
    ellipse.setAttributeNS(null, "cx", x);
    ellipse.setAttributeNS(null, "cy", y);
    ellipse.setAttributeNS(null, "rx", width);
    ellipse.setAttributeNS(null, "ry", height);
    
    return ellipse;
}

///// Create <rect> graphic /////
function newRect (x, y, width, height) {
    var rect = document.createElementNS(xmlns, "rect");
    rect.setAttributeNS(null, "fill", svgColor);
    rect.setAttributeNS(null, "stroke", svgStroke);
    rect.setAttributeNS(null, "stroke-width", svgStrokeWidth);
    rect.setAttributeNS(null, "x", x);
    rect.setAttributeNS(null, "y", y);
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    
    return rect;
}

///// Create <line> graphic /////
function newLine (x1, y1, x2, y2) {
    var line = document.createElementNS(xmlns, "line");
    line.setAttributeNS(null, "stroke", svgStroke);
    line.setAttributeNS(null, "stroke-width", svgStrokeWidth);
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y2", y2);
    
    return line;
}
