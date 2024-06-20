$(function() {
    const map = L.map("map").setView([35.7352, 139.80954], 17);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // 高専マーカー //
    const kousenMarker = L.marker([35.7352, 139.80954]).addTo(map);
    kousenMarker.bindPopup("<b>東京都立産業技術高等専門学校</b><br>前まで通っていた高専です");

    // 我孫子駅マーカー //
    const abikoMarker = L.marker([35.87273, 140.01063]).addTo(map);
    abikoMarker.bindPopup("<b>我孫子駅</b><br>だいたいこの辺に住んでました");

    // 弘前大学マーカー //
    const hirodaiMarker = L.marker([40.58780, 140.47392]).addTo(map);
    hirodaiMarker.bindPopup("<b>弘前大学</b><br>hogehoge");
});