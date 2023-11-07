
const G = 5;    // Gravitational Constant

let blackhole = new Blackhole(Width/2, Height/2, 2000);
let satellites = [];

function Main() {
    satellites.push(new Satellite(100, 100, 100, 1, 2));
    setInterval(Update, 20);    // 50fps
}

function Update() {
    background("#000000");
    
    blackhole.display();
    //blackhole.printInfo();

    for (let i = 0; i < satellites.length; i++) {
        let collision = satellites[i].attract();
        if (collision) {
            satellites.splice(i, 1);
            continue;
        }
        satellites[i].update();
        satellites[i].display();
        
        //if (i == 0) satellites[i].printInfo();
    }
}

Main();



// Safegaurd because I keep typing 'print' like it's python and get stuck in this dumb webpage printing attempt
function print(m) {console.log(m);}