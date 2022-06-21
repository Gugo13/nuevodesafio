import React from "react";
import { Button } from "@mui/material";

const Hero = () => (
  <div className="hero">
    <h2 className="hero-text">Welcome</h2>
    <p className="hero-text">Keep scrolling ↓ </p>
    <Button variant="outlined">Learn more</Button>

    <style jsx>{`
        .hero {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1363.88 45.73a30.16 30.16 0 1 0-3.48-60.22z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M310.1 428.61L361.02 428.61L361.02 479.53L310.1 479.53z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1054.21 524.87L1077.07 524.87L1077.07 554.76L1054.21 554.76z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M981.02 298.74a51.28 51.28 0 1 0 75.84 69.04z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M286.42 539.76L307.58 539.76L307.58 547.65L286.42 547.65z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M515.91 81.9L539.23 81.9L539.23 105.22L515.91 105.22z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M98.76 460.72L103.81 460.72L103.81 465.77L98.76 465.77z' fill='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M46.79 347.77 a22.33 22.33 0 1 0 44.66 0 a22.33 22.33 0 1 0 -44.66 0z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M1049.38 286.41a2.66 2.66 0 1 0 1.71-5.04z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M661.46 115.62a4.25 4.25 0 1 0-6.11-5.91z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M342.51 253.83L349.11 253.83L349.11 260.43L342.51 260.43z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M794.58 160.49L803.56 160.49L803.56 169.2L794.58 169.2z' fill='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M821.37 196.45 a24.97 24.97 0 1 0 49.94 0 a24.97 24.97 0 1 0 -49.94 0z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M1160.37 472.49L1212.73 472.49L1212.73 475.36L1160.37 475.36z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M879.9 399.59 a43.89 43.89 0 1 0 87.78 0 a43.89 43.89 0 1 0 -87.78 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1246.76 195.08L1272.35 195.08L1272.35 220.41L1246.76 220.41z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1205.25 181.07L1260.3 181.07L1260.3 200.86L1205.25 200.86z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M663.5 402.32L687.31 402.32L687.31 435.43L663.5 435.43z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1239.25 236.47L1289.91 236.47L1289.91 290.92L1239.25 290.92z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1055.16 112.48L1101.91 112.48L1101.91 117.97L1055.16 117.97z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M573.53 305.76L626.73 305.76L626.73 358.96L573.53 358.96z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M117.28 172.79L170.74 172.79L170.74 226.25L117.28 226.25z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M561.31 462.31L588.12 462.31L588.12 490.68L561.31 490.68z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M875.32 98.62 a31.96 31.96 0 1 0 63.92 0 a31.96 31.96 0 1 0 -63.92 0z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M276.7 483.57L293.36 483.57L293.36 500.23L276.7 500.23z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M300.47 159.53L312.42 159.53L312.42 171.48L300.47 171.48z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M963.91 449.63L1017.66 449.63L1017.66 486.56L963.91 486.56z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1317.97 544.23 a33.19 33.19 0 1 0 66.38 0 a33.19 33.19 0 1 0 -66.38 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1237.42 468.49L1258.96 468.49L1258.96 471.28L1237.42 471.28z' stroke='rgba(90%2c 66%2c 69%2c 1)'%3e%3c/path%3e%3cpath d='M393.92 478.33a54.55 54.55 0 1 0-108.78-8.38z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M346.56 517.9 a16.46 16.46 0 1 0 32.92 0 a16.46 16.46 0 1 0 -32.92 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M100.56 257.53L119.22 257.53L119.22 288.74L100.56 288.74z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1016.88 553.13a1.82 1.82 0 1 0 3.6 0.58z' fill='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
            width: 100%;
            height: 25rem;
            text-align: center;   
            padding-top: 5rem;         
            color: #fff;
        }
    ´}
    `}</style>
  </div>
);

export default Hero;
