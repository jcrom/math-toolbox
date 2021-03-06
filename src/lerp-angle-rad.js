import { degToRad, radToDeg, lerpAngleDeg } from './math-toolbox'

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 2 radians.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 */
function lerpAngleRad (a, b, t) {
  return degToRad(lerpAngleDeg(radToDeg(a), radToDeg(b), t))
}

export { lerpAngleRad }
