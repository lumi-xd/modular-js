var modaljs_loaded = false;
load_modaljs = callfun => {
    document.body.innerHTML = `<div id="modalbgcover"><div id="modal"><div id="title"></div><hr id="modalhr"><div id="content1"></div><hr id="modalhr3"><span id="spanmodal"><button id="yes" onclick="yes()">Yes</button><button id="no" onclick="no()">No</button><button id="close" onclick="close3()">&times;</button></span></div></div>` + document.body.innerHTML;
    s1(`#modal{margin-top: 10px;padding: 15px;border-radius: 9px;border: 3px solid blue;background-color: aliceblue;display: flex;flex-direction: column;}#title{font-weight: 600;font-size: 25px;text-align: center;color: green;margin: 9px 0px 10px;}#content1{text-align: center;font-size: 18px;margin: 25px 0px 30px;}#modalhr{height: 1px;background-color: red;width: 100%;}#modalhr3{height: 1px;background-color: red;width: 100%;}#spanmodal{display: flex;justify-content: space-evenly;margin-top: 15px;}#spanmodal button{font-size: 20px;}#yes{border: 2px solid darkgreen;padding:5px;color: green;background-color: lawngreen;margin-left: auto;margin-right: auto;}#no{border: 2px solid darkred;padding:5px;color: rgb(179, 0, 0);background-color: orangered;margin-left: auto;margin-right: auto;}#close{border: 2px solid darkred;color: rgb(179, 0, 0);background-color: orangered;padding: 0px 7px 0px 7px;font-size: 27px !important;margin-left: auto;}#modalbgcover{position: fixed;top: 0;width: 100vw;height: 100vh;display: none;justify-content: center;align-items: start;background-color: rgba(0, 0, 0, 0.295);}`); // g(`modal1`, ele(`#modal`));
    g(`modal1`, ele(`#modal`));
    g(`title`, ele(`#title`));
    g(`message`, ele(`#content1`));
    g(`modalhr`, ele(`#modalhr`));
    g(`modalhr3`, ele(`#modalhr3`));
    g(`spanmodal`, ele(`#spanmodal`));
    g(`spanmton`, ele(`#spanmodal button`));
    g(`yes3`, ele(`#yes`));
    g(`no3`, ele(`#no`));
    g(`close9`, ele(`#close`));
    g(`modalcover`, ele(`#modalbgcover`));
    (() => {
        response(modal1, `{
            width: [
                '500px', {
                    cond: [w <= 620],
                    value: [
                        [w * 90 / 100 - 50 + 'px']
                    ]
                }, {
                    cond: [w <= 370],
                    value: [
                        [w * 85 / 100 - 50 + 'px']
                    ]
                }
            ],
            padding: [
                '15px', {
                    cond: [w <= 370],
                    value: [
                        ['10px']
                    ]
                }
            ]
        }`);
        respons(respons);
    })();
    g(`modal`, (l, m, n, o) => {
        modalcover.style.display = `flex`;
        title.innerHTML = l;
        message.innerHTML = m;
        if (n == `1`) {
            yes3.style.display = `block`;
            no3.style.display = `block`;
            close9.style.display = `none`;
        } else if (n == `2`) {
            yes3.style.display = `none`;
            no3.style.display = `none`;
            close9.style.display = `block`;
        } else if (n == `3`) {
            yes3.style.display = `block`;
            no3.style.display = `none`;
            close9.style.display = `block`;
        } else if (n == `4`) {
            yes3.style.display = `none`;
            no3.style.display = `block`;
            close9.style.display = `block`;
        };
        if (o) message.innerHTML += o;
    });
    g(`close3`, () => {
        title.innerHTML = ``;
        message.innerHTML = ``;
        modalcover.style.display = `none`;
    });
    modaljs_loaded = true;
    console.log(`modal_js-->loaded`);
    if (callfun) callfun();
};