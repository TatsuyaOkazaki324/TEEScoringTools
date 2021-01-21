function onScoringButton(){
    let municipality = getParam("municipality");
    let year = getParam("year");
    let C_A = [[]];
    let mistake_Answer = [];
    if(year || municipality){
        C_A = getCA(year,municipality)
    }else{
        console.log("エラー発生");
        return
    }
    let score = 0;
    let i = 0;
    for(i = 0 ; i < 30 ; i++ ){
        if(document.answer.elements[C_A[0][i]+ i*10].checked){
            score += C_A[1][i] * 1;
        }else{
            mistake_Answer.push((i+1)+"");
        }
    }
    for(i = 0 ; i < mistake_Answer.length ; i++){
        document.getElementById("q"+mistake_Answer[i]).style = "color: red; font-weight: 900;";
    }
    if(score < 60){
        document.getElementById("score").style = "font-size: 90px; color: #ff4d4d"
    }else{
        document.getElementById("score").style = "font-size: 90px; color: #00cc00"
    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("score_unit").innerHTML = "点";
}

function getCA(year,municipality){
    const CA = {
        aichi:{
            2019:[
                [
                    8,3,2,1,7,3,4,2,5,5,
                    9,5,2,5,6,4,3,4,2,4,
                    0,3,8,6,1,6,9,8,7,1
                ],
                [
                    4,4,4,4,4,4,4,4,4,4,
                    3,3,3,3,3,3,3,3,3,3,
                    3,3,3,3,3,3,3,3,3,3
                ]
            ],
            2018:[
                [
                    5,4,5,6,1,1,8,1,2,3,
                    4,7,2,3,8,4,7,9,7,6,
                    4,7,9,3,1,8,6,0,2,0
                ],
                [
                    4,4,4,4,4,4,4,4,4,4,
                    3,3,3,3,3,3,3,3,3,3,
                    3,3,3,3,3,3,3,3,3,3
                ]
                
            ],
            2017:[
                [
                    6,3,7,4,4,6,1,7,1,8,
                    0,5,1,5,5,3,5,7,6,1,
                    3,6,2,8,2,7,3,2,8,4
                ],
                [
                    4,4,4,4,4,4,4,4,4,4,
                    3,3,3,3,3,3,3,3,3,3,
                    3,3,3,3,3,3,3,3,3,3
                ]
            ]
        }
    }   
    return CA[municipality][year]
}


// クエリのパラメタを取得する関数
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// ロード時に実行するスクリプト
document.addEventListener("DOMContentLoaded", function() {
    const preaf = {"aichi":"愛知県","nagoya":"名古屋"};
    document.getElementById("municipality").innerHTML = preaf[getParam("municipality")];
    document.getElementById("year").innerHTML = getParam("year") + "年";
 });