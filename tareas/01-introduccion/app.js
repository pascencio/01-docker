async function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    while(true) {
        console.log("Hola mundo!");
        console.log("Esperando 10 segundos...");
        await sleep(10000);
    }
}

(async () => {
    await main();
})();