var start,end,count,vok;

function numsort(a,b){
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;
}
//數字比較的函式

function getvalue(){
    var inputElement = document.getElementById("input_start");
    start = inputElement.valueAsNumber;
    inputElement = document.getElementById("input_end");
    end = inputElement.valueAsNumber;
    inputElement = document.getElementById("input_count");
    count = inputElement.valueAsNumber;
}
//讀取輸入數值

document.querySelectorAll(".input_num").forEach(function(element) {
    element.addEventListener("input", function(){
        getvalue();
        if(start % 1 != 0 || end % 1 != 0 || count % 1 != 0) {
            document.getElementById("start_button").setAttribute("disabled", "disabled");
            document.getElementById("start_button").setAttribute("title", "檢查輸入數值是否完整為整數");
            document.getElementById("start_button").style.cursor = "not-allowed";
            vok = false;
            document.getElementById("status").textContent = "檢查輸入數值是否完整為整數";
        }else if(start > Number.MAX_SAFE_INTEGER || end > Number.MAX_SAFE_INTEGER || count > Number.MAX_SAFE_INTEGER) {
            document.getElementById("start_button").setAttribute("disabled", "disabled");
            document.getElementById("start_button").setAttribute("title", "輸入數值過大或欲產生的數字過多！");
            document.getElementById("start_button").style.cursor = "not-allowed";
            vok = false;
            document.getElementById("status").textContent = "輸入數值過大或欲產生的數字過多！";
        }else if(count <= 0){
            document.getElementById("start_button").setAttribute("disabled", "disabled");
            document.getElementById("start_button").setAttribute("title", "欲產生的數字不可小於1個！");
            document.getElementById("start_button").style.cursor = "not-allowed";
            vok = false;
            document.getElementById("status").textContent = "欲產生的數字不可小於1個！";
        }else{
            document.getElementById("start_button").removeAttribute("disabled","");
            document.getElementById("start_button").setAttribute("title", "產生隨機數字");
            document.getElementById("start_button").style.cursor = "pointer";
            vok = true;
            document.getElementById("status").textContent = "";
        }
    })
})
//檢查輸入數值

window.addEventListener("keyup",function(event){
    if (event.key == "Enter") {
        if(vok == true){
            document.getElementById("start_button").click();
        }
    }
    event.preventDefault();
})
//增加一個EventListener，偵測Enter鍵是否被按下，若被按下則代為執行點擊按鈕

var el = document.querySelector("#start_button");
el.onclick = function proc(){
    getvalue();

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
        num = numarr[Math.floor(getran() * numarr.length)];//向下取整
        if(acrepeat.checked){
            result.push(num);
        }else{
            if(count > Math.abs(start-end+1)){
                window.alert("不產生重複數字之數量僅可不超過待選擇數字數量！");
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
