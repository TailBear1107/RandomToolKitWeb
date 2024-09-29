function getran(){
    var v1 = window.crypto.getRandomValues(new Uint32Array(1));
    return v1[0] / (0xFFFFFFFF + 1);
}
//比Math.random()更隨機且有加密的產生法