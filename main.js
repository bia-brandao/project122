function preload() {}

function setup() {
  canvas = createCanvas(400, 400)
  canvas.center()
  video = createCapture(VIDEO)
  video.size(200, 200)
  video.hide()
}

function draw() {
  stroke()
  rect(255, 0, 0)
  image(video, 0, 0, 300, 300)
}

function takeSnapshot() {
  save('PS.5site.png')
}
