function rectangleArea(b, h)
{
    var a = b * h;

    return a;
}

function rectanglePerimeter(b, h)
{
    var p = 2 * b + 2 * h;

    return p;
}

function triangleArea(b, h)
{
    var a = b * h / 2;

    return a;
}

function trianglePerimeter(b, h)
{
    var p = 2 * b + 2 * h;

    return p;
}

function trapezoidArea(a, b, h )
{
    var a = a + b / 2 * h;

    return a;
}

function rectangularprismVolume(a, h, l)
{
  var v = a*h*l

  return v;
}

function lineSlope(x1, x2, y1, y2)
{
  var s = (y1 - y2) / (x1 - x2)

  return s;
}
