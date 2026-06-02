
export function drawSegment(ctx, [mx, my], [tx, ty], color) {
    ctx.beginPath()
    ctx.moveTo(mx, my)
    ctx.lineTo(tx, ty)
    ctx.lineWidth = 5
    ctx.strokeStyle = color
    ctx.stroke()
}

/**
 * Calculates the angle (in degrees) between three points.
 *
 * @param {Object} pointA - The first point {x, y}
 * @param {Object} pointB - The vertex point {x, y}
 * @param {Object} pointC - The third point {x, y}
 * @returns {number} The angle in degrees (0 to 180)
 */
export function calculateAngle(pointA, pointB, pointC) {
    // Calculate the angle between the three points using Math.atan2
    // atan2 returns the angle in radians between the positive x-axis of a plane and the point given by the coordinates (x, y) on it.
    let radians = Math.atan2(pointC.y - pointB.y, pointC.x - pointB.x) -
                  Math.atan2(pointA.y - pointB.y, pointA.x - pointB.x);

    // Convert to degrees
    let angle = Math.abs(radians * 180.0 / Math.PI);

    // Ensure the angle is between 0 and 180 degrees
    if (angle > 180.0) {
        angle = 360.0 - angle;
    }

    return angle;
}

export function drawPoint(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}