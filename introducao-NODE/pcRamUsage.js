//gerenciamento de memoria RAM
const os = require('os');
//console.log(os)                                                    // lista de informacoes sobre OS

setInterval(() => {                                                  // cada 1 seg(1000) ela faz algo
    const { arch, platform, totalmem, freemem } = os
    const tRam = totalmem() / 1024 / 1024;                            //numeros fracionarios para inteiros
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const status = {
        Os: platform(),
        Arch: arch(),
        TotalRam: `${parseInt(tRam)} MB`,                              //numeros fracionarios para inteiros
        Freemem: `${parseInt(fRam)} MB`,
        Usage: `${parseInt(usage)} %`
    };
    console.clear();                                                   //limpar
    console.table(status);
}, 1000);
