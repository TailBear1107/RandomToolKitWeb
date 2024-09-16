function numsort(a,b){
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;
}
//數字比較的韓式

window.addEventListener("keyup",function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
    document.getElementById("start_button").click();
    }
})
//增加一個EventListener，偵測Enter鍵是否被按下，若被按下則代為執行點擊按鈕

var el = document.querySelector("#start_button");
el.onclick = function proc(){
    var start,end,count;
    var inputElement = document.getElementById("input_start");
    start = inputElement.valueAsNumber;
    inputElement = document.getElementById("input_end");
    end = inputElement.valueAsNumber;
    inputElement = document.getElementById("input_count");
    count = inputElement.valueAsNumber;
    if(count <= 0 || count % 1 != 0){
        window.alert("欲產生的數字數量有誤，請修正");
        document.getElementById("input_count").value = "";
    }
    //讀值進來

    var numarr = [];
    var result = [];
    if(end > start){
        for(var i=0;i<end-start+1;i++){
            numarr.push(start+i);
        }
    }else{
        for(var i=0;i<start-end+1;i++){
            numarr.push(start-i);
        }
    }
    
    //console.log(numarr);// Debug 用
    var i=0;
    var num;
    while(result.length < count){
        var acrepeat = document.getElementById("acceptrepeat");
        num = numarr[Math.floor(Math.random() * numarr.length)];//向下取整
        if(acrepeat.checked){
            result.push(num);
        }else{
            if(count > Math.abs(start-end+1)){
                window.alert("不產生重複數字之數量僅可不超過戴選擇數字數量！");
                document.getElementById("input_count").value = "";
                break;
            }else{
                if(result.indexOf(num) == -1){
                result.push(num);
                }
            }
        }
    }

    var sortresult = document.getElementById("sortout");
    if(sortresult.checked){
        result.sort(numsort);
    }
    //有勾選排序就排序
    
    //console.log(result); // Debug 用

    var process = result.toString();
    result = process.replace(/,/g, " ");
    document.getElementById("result").textContent = result;
}
