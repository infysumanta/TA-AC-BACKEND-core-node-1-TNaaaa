var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);

// console parsedUrl.pathname
console.log(parsedUrl.pathname);
// console parsedUrl.query
console.log(parsedUrl.query);
// console.log parsed Url host and protocol
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

// 2. Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.

// Request URL: https://www.google.com/
// Request Method: GET
// Status Code: 200
// Remote Address: 142.250.196.4:443
// Referrer Policy: origin
// accept-ch: Sec-CH-Viewport-Width
// accept-ch: Sec-CH-Viewport-Height
// accept-ch: Sec-CH-DPR
// alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
// bfcache-opt-in: unload
// cache-control: private, max-age=0
// content-encoding: br
// content-length: 44593
// content-type: text/html; charset=UTF-8
// date: Thu, 28 Jul 2022 18:01:39 GMT
// expires: -1
// server: gws
// set-cookie: 1P_JAR=2022-07-28-18; expires=Sat, 27-Aug-2022 18:01:39 GMT; path=/; domain=.google.com; Secure; SameSite=none
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=www.google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=.www.google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=google.com
// set-cookie: OTZ=; expires=Mon, 01-Jan-1990 00:00:00 GMT; path=/; domain=.google.com
// set-cookie: AEC=AakniGNLxMtDvWIYSSbXi91ctlCnTtt5AjJV2LB8HEHlNywvHi6VTGbZ548; expires=Tue, 24-Jan-2023 18:01:39 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax
// set-cookie: SIDCC=AJi4QfHOadCr13DqsISthmiF_bvUckntbXt5964SHChIKB9LOd2y-lxBzSAWca0K3vs3aYGVv_A; expires=Fri, 28-Jul-2023 18:01:39 GMT; path=/; domain=.google.com; priority=high
// set-cookie: __Secure-1PSIDCC=AJi4QfEoVCgy5vwMryBME1NBDQZ19q4dbDQdMrKArrS8h8rngKQ3wuWqQ0ARNfsojH-6Ue9hVCgw; expires=Fri, 28-Jul-2023 18:01:39 GMT; path=/; domain=.google.com; Secure; HttpOnly; priority=high
// set-cookie: __Secure-3PSIDCC=AJi4QfHCAtq42Aj9TTcUkftaIXeGg80hrMfy8PlCEYVgr7JKZziOi_5YFoPWnsNIoGaasLjUU1EH; expires=Fri, 28-Jul-2023 18:01:39 GMT; path=/; domain=.google.com; Secure; HttpOnly; priority=high; SameSite=none
// strict-transport-security: max-age=31536000
// x-frame-options: SAMEORIGIN
// x-xss-protection: 0
// :authority: www.google.com
// :method: GET
// :path: /
// :scheme: https
// accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9
// cache-control: max-age=0
// cookie: SID=MgjNiDdbqnTgr4gL_5AQkcnLzbiBZIVY-dB6-zURuZiMT7IeFab4zrtj2gq_X0Ow0PFY2Q.; __Secure-1PSID=MgjNiDdbqnTgr4gL_5AQkcnLzbiBZIVY-dB6-zURuZiMT7IeBuY28RSVobk6_nhKcPPV-Q.; __Secure-3PSID=MgjNiDdbqnTgr4gL_5AQkcnLzbiBZIVY-dB6-zURuZiMT7IeAPoBGOgPNH_AcTo-ZVEcpg.; HSID=AQjDIFANJ5HjX35iW; SSID=ALKNgmPZf_4OA6Hye; APISID=1jqwkb4rXOINk3RO/ALFTwXuihU_C8IH_9; SAPISID=3aP2U7UvGXtQxB2w/AvxunMGQJCvry6lRy; __Secure-1PAPISID=3aP2U7UvGXtQxB2w/AvxunMGQJCvry6lRy; __Secure-3PAPISID=3aP2U7UvGXtQxB2w/AvxunMGQJCvry6lRy; S=billing-ui-v3=Y2jrMNw1YVBKXmJk3xR5-HURbFXHdBa5:billing-ui-v3-efe=Y2jrMNw1YVBKXmJk3xR5-HURbFXHdBa5:antipasti_server_prod=-80hNd7fxuI4wtbXtKrI6EZB_Hf8gnAmyHjfIV2Hw4g; OTZ=6607806_34_34__34_; SEARCH_SAMESITE=CgQIgZYB; NID=511=nN8ixnuVffvFkQOdh1VRcMTGElv6XMuLi8BsLg0wNOotonymRf3ouSl_Sd3_pL8ghjY9brmQtaZxubija9abbcDbi47NGJpISPVtUJi3FkGN3SOOxAI9BtI0_1DacHTexMfITBbOtw6KnnuYtEE3nd6yDxOTVojhaDIgFvSjUjQU2xCYI1DycclP8STRa0-Boos-eQQ7ylx6G28cPEzZV-FE870FQUTHXBWBKWHPRB9s5ePwsnMpezcQIysyhBEsiHT_k3DpOkwbxh0koXiAxutUhI0bCmKuHcP5ZS4FGhuXlpQIeEMud9ixlKw7IFK3wGws0yiT3Fqe1ibuKfuJ5emWVSbdr0i3I0Hu2DdDxtdR8YY-A72lfm7nNHJ_UBvfH2Q; 1P_JAR=2022-07-28-18; OGPC=19022622-1:19030375-1:19030455-1:; UULE=a+cm9sZTogMQpwcm9kdWNlcjogMTIKdGltZXN0YW1wOiAxNjU5MDMxMjcyNDMwMDAwCmxhdGxuZyB7CiAgbGF0aXR1ZGVfZTc6IDEyOTc4ODIwMgogIGxvbmdpdHVkZV9lNzogNzc3MTM0MDkyCn0KcmFkaXVzOiAxMDY4My44NApwcm92ZW5hbmNlOiA2Cg==; SIDCC=AJi4QfHlB8dXcuSukG-ifq-6JWYZ-r_1h9BkWpWSHMhswVh2DqOKX1u9PUecouxAVPwWzqNs9Uk; __Secure-1PSIDCC=AJi4QfGv8RyJKWIOwiKQa0Zgi9RX1VOcOtYXBeV_hLnHxPLnaNPVT-yIrEgdlwxi1XGa9CGz0d5v; __Secure-3PSIDCC=AJi4QfGNTDwqwTE4zKs_zPmTXbSYWzq6nZhH_Gditx2XqcPP9CK_jiBM7rJX2Trta906E8EFwvL4
// sec-ch-dpr: 0.9
// sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
// sec-ch-viewport-width: 2133
// sec-fetch-dest: document
// sec-fetch-mode: navigate
// sec-fetch-site: same-origin
// sec-fetch-user: ?1
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
// x-client-data: CLC1yQEIlLbJAQimtskBCMG2yQEIqZ3KAQjli8sBCJWhywEI2+/LAQiYt8wBCLi5zAEIirvMAQidvMwBCP28zAEI3cDMAQiIwcwBCJrBzAEIs8HMAQjEwcwBCNfBzAEI7cHMARirqcoB
// Decoded:
// message ClientVariations {
//   // Active client experiment variation IDs.
//   repeated int32 variation_id = [3300016, 3300116, 3300134, 3300161, 3313321, 3327461, 3330197, 3340251, 3349400, 3349688, 3349898, 3350045, 3350141, 3350621, 3350664, 3350682, 3350707, 3350724, 3350743, 3350765];
//   // Active client experiment variation IDs that trigger server-side behavior.
//   repeated int32 trigger_variation_id = [3314859];
// }
