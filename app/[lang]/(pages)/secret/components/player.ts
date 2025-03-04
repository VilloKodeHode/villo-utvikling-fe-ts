import * as THREE from "three";
import { tileSize } from "./constants";
import { minTileIndex, maxTileIndex } from "./constants";
import { metaData } from "./metaData";

export const Player = () => {
  const player = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshLambertMaterial({ color: "white" })
  );
  body.position.z = 10;
  player.add(body);

  return player;
};

const moveClock = new THREE.Clock(false);

export const animatePlayer = () => {
  if (!movesQueue.length) return;

  if (!moveClock.running) moveClock.start();

  const stepTime = 0.2;
  const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);

  setPosition(progress);
};

export const position = {
  currentRow: 0,
  currentTile: 0,
};

export const movesQueue = [];

export const queueMove = (direction) => {
  const isValidMove = endsUpInValidPosition({
    rowIndex: position.currentRow,
    tileIndex: position.currentTile,
  },[movesQueue, direction])
  if (!isValidMove) return
  movesQueue.push(direction);
};

export const stepCompleted = () => {
  const direction = movesQueue.shift();
  if (direction === "forward") position.currentRow += 1;
  if (direction === "backward") position.currentRow -= 1;
  if (direction === "left") position.currentTile -= 1;
  if (direction === "right") position.currentTile += 1;
};

function setPosition(progress) {
  const startX = position.currentTile * tileSize;
  const startY = position.currentRow * tileSize;
  let endX = startX;
  let endY = startY;

  if (movesQueue[0] === "left") endX -= tileSize;
  if (movesQueue[0] === "right") endX += tileSize;
  if (movesQueue[0] === "forward") endY += tileSize;
  if (movesQueue[0] === "backward") endY -= tileSize;

  Player().position.x = THREE.MathUtils.lerp(startX, endX, progress);
  Player().position.y = THREE.MathUtils.lerp(startY, endY, progress);
  Player().children[0].position.z = Math.sin(progress * Math.PI) * 8 + 10;
}

function calculateFinalPosition(currentPosition, moves) {
  return moves.reduce((position, direction) => {
    if (direction === "forward")
      return {
        rowIndex: position.rowIndex + 1,
        tileIndex: position.tileIndex,
      };
    if (direction === "backward")
      return {
        rowIndex: position.rowIndex - 1,
        tileIndex: position.tileIndex,
      };
    if (direction === "left")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex - 1,
      };
    if (direction === "right")
      return {
        rowIndex: position.rowIndex,
        tileIndex: position.tileIndex + 1,
      };
    return position;
  }, currentPosition);
}

export function endsUpInValidPosition(currentPosition, moves) {
  // Calculate where the player would end up after the move
  const finalPosition = calculateFinalPosition(
    currentPosition,
    moves
  );

  // Detect if we hit the edge of the board
  if (
    finalPosition.rowIndex === -1 ||
    finalPosition.tileIndex === minTileIndex - 1 ||
    finalPosition.tileIndex === maxTileIndex + 1
  ) {
    // Invalid move, ignore move command
    return false;
  }

  // Detect if we hit a tree
  const finalRow = metaData[finalPosition.rowIndex - 1];
  if (
    finalRow &&
    finalRow.type === "forest" &&
    finalRow.trees?.some(
      (tree) => tree.tileIndex === finalPosition.tileIndex
    )
  ) {
    // Invalid move, ignore move command
    return false;
  }

  return true;
}