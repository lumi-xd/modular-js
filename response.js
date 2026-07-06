 var responsejs_loaded = false,
     load_responsejs = callfun => {
         g(`response_data`, ``);
         g(`response_fun`, []);
         g(`response`, (pa1, pa2) => response_fun.push([typeof pa1!=='string'?`#${pa1.id}`:pa1,pa2]));
         g(`response_run`, pa3 => {
             pa1 = pa3[0];
             eval(`pa2=${pa3[1]}`);
             va1 = typeof pa1 === `string` ? pa1 + `{` : pa1.id + `{`;
             va2 = Object.keys(pa2);
             va6 = false;
             for (va3 = 0; va3 < va2.length; va3++) {
                 va4 = va2[va3];
                 va12 = pa2[va4];
                 for (va11 = 0; va11 < va12.length; va11++) {
                     va5 = va12[va11];
                     if (typeof va5 === `object`) {
                         if (va5.cond) {
                             if (va5.cond[0]) {
                                 va8 = ``;
                                 for (va7 = 0; va7 < va5.value.length; va7++) {
                                     va10 = va5.value[va7][1];
                                     if (!va10) {
                                         va8 += va5.value[va7][0]
                                         va6 = true;
                                     } else {
                                         if (va10.cond) {
                                             if (va10.cond[0]) {
                                                 va9 = va5.value[va7][0];
                                                 if (va10.max)
                                                     if (va5.value[va7][0] > va10.max) va9 = va10.max;

                                                 if (va10.min)
                                                     if (va5.value[va7][0] < va10.min) va9 = va10.min;
                                                 va8 += va9;
                                                 va6 = true;
                                             };
                                         } else {
                                             va9 = va5.value[va7][0];
                                             if (va10.max)
                                                 if (va5.value[va7][0] > va10.max) va9 = va10.max;
                                             if (va10.min)
                                                 if (va5.value[va7][0] < va10.min) va9 = va10.min;
                                             va8 += va9;
                                             va6 = true;
                                         };
                                     };
                                 };
                                 va1 += `${va4}:${va8};`;
                             };
                         } else {
                             va8 = ``;
                             console.log(va5)
                             for (va7 = 0; va7 < va5.value.length; va7++) {
                                 va10 = va5.value[va7][1];
                                 if (!va10) {
                                     va8 += va5.value[va7][0];
                                     va6 = true;
                                 } else {
                                     if (va10.cond) {
                                         if (va10.cond[0]) {
                                             va9 = va5.value[va7][0];
                                             if (va10.max)
                                                 if (va5.value[va7][0] > va10.max) va9 = va10.max;
                                             if (va10.min)
                                                 if (va5.value[va7][0] < va10.min) va9 = va10.min;
                                             va8 += va9;
                                             va6 = true;
                                         };
                                     } else {
                                         va9 = va5.value[va7][0];
                                         if (va10.max)
                                             if (va5.value[va7][0] > va10.max) va9 = va10.max;
                                         if (va10.min)
                                             if (va5.value[va7][0] < va10.min) va9 = va10.min;
                                         va8 += va9;
                                         va6 = true;
                                     };
                                 };
                             };
                             va1 += `${va4}:${va8};`;
                         }
                     } else {
                         va1 += `${va4}:${va5};`;
                         va6 = true;
                     };
                 };
             };
             va6 ? va1 += `}` : va1 = ``;
             response_data += va1;  
         });
         g(`respons`, call1 => {
             g(`w`, g(`innerWidth`));
             g(`h`, g(`innerHeight`));
             response_data = ``;
             for (v1 = 0; v1 < response_fun.length; v1++) response_run(response_fun[v1]);
             sty1.innerHTML = response_data;
             if (call1) call1();
         });
         window.addEventListener(`resize`,()=>respons(respons));
         responsejs_loaded = true;
         console.log(`response_js-->loaded`);
         if (callfun) callfun();
     };
     