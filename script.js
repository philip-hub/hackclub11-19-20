
tool.fixedDistance =100
function onMouseMove(event){
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.floor(Math.random()*35)+5
  })
  path.fillColor = {
    hue: event.count,
    saturation: 1,
    brightness: 1
  }
}
