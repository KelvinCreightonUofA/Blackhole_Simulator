class Satellite {
    constructor(x, y, mass, vx=0, vy=0) {
        this.x    = x;
        this.y    = y;
        this.mass = mass;
        this.size = 10;
        this.vx   = vx;
        this.vy   = vy;
    }

    attract() {
        let dist = Math.sqrt( Math.pow(this.x-blackhole.x, 2) + Math.pow(this.y-blackhole.y, 2) );
        let grav = blackhole.calculateGravitationalForce(this.mass, dist);
        this.vx += grav * ( (blackhole.x-this.x) / (dist*dist) );
        this.vy += grav * ( (blackhole.y-this.y) / (dist*dist) );

        // Return true when the satellite collides with the blackhole
        if (dist <= this.size+blackhole.size)   return true;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    display() {
        ellipse(this.x, this.y, this.size*2, this.size*2);
        strokeWeight(3);
        stroke("#ffffff");
    }

    printInfo() {
        console.log("Satellite:\n    x = "+this.x+"\n    y = "+this.y+"\n    Mass = "+this.mass+"\n    vx = "+this.vx+"\n    vy = "+this.vy);
    }
}
