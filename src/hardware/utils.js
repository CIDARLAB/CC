export function deg2rad(degrees){
    var pi = Math.PI;
    return (degrees * (pi/180));
}

export function PWM2rad(PWM) {
    var deg = ( (PWM - PWM_min) * (theta_max-theta_min) / (PWM_max-PWM_min) ) + theta_min
    return (deg * (Math.PI/180));
}

export function displacement(thetaX, r, b, d, a) {
    return ( r*Math.cos( deg2rad(thetaX) ) ) + Math.sqrt( Math.pow(b, 2) - ( Math.pow((r*Math.sin(deg2rad(thetaX))+d), 2) ) );
}


