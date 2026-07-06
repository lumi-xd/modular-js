 var setupjs_loaded = false,
     load_setupjs = (call_fun) => {
         window.g = (a, b) => b !== undefined ? window[a] = b : window[a];
         g(`ele`, c => document.querySelector(c));
         g(`num`, d => {
             e = ``;
             for (f = 0; f < d.length - 2; f++) e += d[f];
             return Number(e);
         });
         document.body.innerHTML = `<div style="display:flex;width:100vw;height:100vh;justify-content:center;align-items:center;font-size:20px;font-weight:bold;font-style:italic;background-color:white;" id="load">Loading...Pls Wait...</div><div id='website' style='display:none;min-width:100vw;max-width:100vw;min-height:100vh;'>` + document.body.innerHTML + `</div><style id='sty1'></style><style id='sty2'></style>`;
         g(`s`, g => sty1.innerHTML += g);
         g(`s1`, h => sty2.innerHTML += h);
         g(`get`, (i, j, k) => {
             if (j === `height` || j === `width`) return typeof i === `string` ? ele(i).getBoundingClientRect()[j] : i.getBoundingClientRect()[j];
             else return typeof i === `string` ? k ? g(`getComputedStyle`)(ele(i))[j] : num(g(`getComputedStyle`)(ele(i))[j]) : k ? g(`getComputedStyle`)(i)[j] : num(g(`getComputedStyle`)(i)[j]);
         });
         g(`defaultcss`, () => s1(`body{margin:0;min-height:100vh;min-width:100vw;max-width:100vw;-ms-overflow-style:none;}html{scrollbar-width:none;scroll-behavior:smooth;}:-webkit-scrollbar{disply:none;}#website{flex-direction:column;align-items:center;justify-content:center;}`))
         g(`loadwebsite`, () => s1(`#load{display:none !important;}#website{display:flex !important;}`));
         setupjs_loaded = true;
         console.log(`setup_js-->loaded`);
         if (call_fun) call_fun();
     }