const socket = io("http://localhost:3000");

function sendMovement() {
  socket.emit("move", { x: camera.position.x, y: camera.position.y, z: camera.position.z });
}

socket.on("playerMoved", (data) => {
  // update other players
});
