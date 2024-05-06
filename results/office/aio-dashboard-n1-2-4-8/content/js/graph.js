/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 4243.0, "series": [{"data": [[0.0, 26.0], [0.1, 50.0], [0.2, 56.0], [0.3, 64.0], [0.4, 76.0], [0.5, 84.0], [0.6, 90.0], [0.7, 94.0], [0.8, 98.0], [0.9, 104.0], [1.0, 108.0], [1.1, 114.0], [1.2, 118.0], [1.3, 122.0], [1.4, 123.0], [1.5, 131.0], [1.6, 136.0], [1.7, 140.0], [1.8, 143.0], [1.9, 146.0], [2.0, 148.0], [2.1, 151.0], [2.2, 154.0], [2.3, 160.0], [2.4, 162.0], [2.5, 164.0], [2.6, 165.0], [2.7, 169.0], [2.8, 170.0], [2.9, 173.0], [3.0, 176.0], [3.1, 178.0], [3.2, 180.0], [3.3, 181.0], [3.4, 183.0], [3.5, 184.0], [3.6, 186.0], [3.7, 190.0], [3.8, 191.0], [3.9, 194.0], [4.0, 195.0], [4.1, 197.0], [4.2, 201.0], [4.3, 204.0], [4.4, 207.0], [4.5, 210.0], [4.6, 211.0], [4.7, 213.0], [4.8, 217.0], [4.9, 218.0], [5.0, 221.0], [5.1, 222.0], [5.2, 224.0], [5.3, 225.0], [5.4, 229.0], [5.5, 231.0], [5.6, 234.0], [5.7, 239.0], [5.8, 240.0], [5.9, 243.0], [6.0, 245.0], [6.1, 246.0], [6.2, 248.0], [6.3, 250.0], [6.4, 252.0], [6.5, 253.0], [6.6, 254.0], [6.7, 257.0], [6.8, 258.0], [6.9, 259.0], [7.0, 262.0], [7.1, 264.0], [7.2, 264.0], [7.3, 267.0], [7.4, 270.0], [7.5, 272.0], [7.6, 274.0], [7.7, 276.0], [7.8, 277.0], [7.9, 279.0], [8.0, 281.0], [8.1, 281.0], [8.2, 284.0], [8.3, 285.0], [8.4, 287.0], [8.5, 287.0], [8.6, 290.0], [8.7, 292.0], [8.8, 293.0], [8.9, 297.0], [9.0, 300.0], [9.1, 300.0], [9.2, 302.0], [9.3, 303.0], [9.4, 304.0], [9.5, 305.0], [9.6, 308.0], [9.7, 309.0], [9.8, 312.0], [9.9, 314.0], [10.0, 316.0], [10.1, 317.0], [10.2, 319.0], [10.3, 320.0], [10.4, 321.0], [10.5, 322.0], [10.6, 324.0], [10.7, 325.0], [10.8, 328.0], [10.9, 329.0], [11.0, 330.0], [11.1, 330.0], [11.2, 332.0], [11.3, 334.0], [11.4, 337.0], [11.5, 340.0], [11.6, 343.0], [11.7, 343.0], [11.8, 345.0], [11.9, 345.0], [12.0, 346.0], [12.1, 347.0], [12.2, 349.0], [12.3, 353.0], [12.4, 354.0], [12.5, 355.0], [12.6, 357.0], [12.7, 358.0], [12.8, 359.0], [12.9, 360.0], [13.0, 361.0], [13.1, 362.0], [13.2, 363.0], [13.3, 364.0], [13.4, 365.0], [13.5, 367.0], [13.6, 368.0], [13.7, 369.0], [13.8, 371.0], [13.9, 373.0], [14.0, 374.0], [14.1, 376.0], [14.2, 378.0], [14.3, 379.0], [14.4, 381.0], [14.5, 381.0], [14.6, 383.0], [14.7, 385.0], [14.8, 386.0], [14.9, 388.0], [15.0, 389.0], [15.1, 391.0], [15.2, 392.0], [15.3, 394.0], [15.4, 397.0], [15.5, 398.0], [15.6, 399.0], [15.7, 401.0], [15.8, 402.0], [15.9, 404.0], [16.0, 404.0], [16.1, 405.0], [16.2, 407.0], [16.3, 408.0], [16.4, 409.0], [16.5, 410.0], [16.6, 411.0], [16.7, 412.0], [16.8, 413.0], [16.9, 414.0], [17.0, 416.0], [17.1, 418.0], [17.2, 419.0], [17.3, 421.0], [17.4, 422.0], [17.5, 424.0], [17.6, 425.0], [17.7, 426.0], [17.8, 429.0], [17.9, 430.0], [18.0, 431.0], [18.1, 432.0], [18.2, 433.0], [18.3, 437.0], [18.4, 438.0], [18.5, 439.0], [18.6, 440.0], [18.7, 442.0], [18.8, 443.0], [18.9, 445.0], [19.0, 448.0], [19.1, 449.0], [19.2, 451.0], [19.3, 452.0], [19.4, 454.0], [19.5, 455.0], [19.6, 456.0], [19.7, 458.0], [19.8, 459.0], [19.9, 459.0], [20.0, 460.0], [20.1, 462.0], [20.2, 463.0], [20.3, 465.0], [20.4, 466.0], [20.5, 467.0], [20.6, 467.0], [20.7, 468.0], [20.8, 469.0], [20.9, 470.0], [21.0, 473.0], [21.1, 473.0], [21.2, 474.0], [21.3, 475.0], [21.4, 476.0], [21.5, 477.0], [21.6, 478.0], [21.7, 480.0], [21.8, 481.0], [21.9, 483.0], [22.0, 485.0], [22.1, 486.0], [22.2, 487.0], [22.3, 488.0], [22.4, 489.0], [22.5, 490.0], [22.6, 491.0], [22.7, 492.0], [22.8, 493.0], [22.9, 495.0], [23.0, 495.0], [23.1, 498.0], [23.2, 500.0], [23.3, 501.0], [23.4, 502.0], [23.5, 503.0], [23.6, 504.0], [23.7, 504.0], [23.8, 505.0], [23.9, 506.0], [24.0, 508.0], [24.1, 509.0], [24.2, 510.0], [24.3, 511.0], [24.4, 512.0], [24.5, 514.0], [24.6, 515.0], [24.7, 516.0], [24.8, 518.0], [24.9, 519.0], [25.0, 521.0], [25.1, 523.0], [25.2, 525.0], [25.3, 527.0], [25.4, 528.0], [25.5, 530.0], [25.6, 531.0], [25.7, 533.0], [25.8, 534.0], [25.9, 535.0], [26.0, 537.0], [26.1, 538.0], [26.2, 539.0], [26.3, 541.0], [26.4, 543.0], [26.5, 543.0], [26.6, 545.0], [26.7, 546.0], [26.8, 547.0], [26.9, 549.0], [27.0, 550.0], [27.1, 551.0], [27.2, 552.0], [27.3, 555.0], [27.4, 556.0], [27.5, 557.0], [27.6, 557.0], [27.7, 558.0], [27.8, 560.0], [27.9, 561.0], [28.0, 562.0], [28.1, 563.0], [28.2, 564.0], [28.3, 566.0], [28.4, 568.0], [28.5, 569.0], [28.6, 569.0], [28.7, 570.0], [28.8, 572.0], [28.9, 572.0], [29.0, 574.0], [29.1, 575.0], [29.2, 577.0], [29.3, 578.0], [29.4, 579.0], [29.5, 580.0], [29.6, 582.0], [29.7, 584.0], [29.8, 587.0], [29.9, 589.0], [30.0, 590.0], [30.1, 591.0], [30.2, 593.0], [30.3, 596.0], [30.4, 598.0], [30.5, 599.0], [30.6, 600.0], [30.7, 601.0], [30.8, 602.0], [30.9, 603.0], [31.0, 604.0], [31.1, 606.0], [31.2, 608.0], [31.3, 611.0], [31.4, 612.0], [31.5, 614.0], [31.6, 615.0], [31.7, 617.0], [31.8, 618.0], [31.9, 619.0], [32.0, 620.0], [32.1, 621.0], [32.2, 622.0], [32.3, 623.0], [32.4, 624.0], [32.5, 626.0], [32.6, 627.0], [32.7, 628.0], [32.8, 631.0], [32.9, 632.0], [33.0, 633.0], [33.1, 633.0], [33.2, 634.0], [33.3, 636.0], [33.4, 637.0], [33.5, 641.0], [33.6, 642.0], [33.7, 643.0], [33.8, 645.0], [33.9, 648.0], [34.0, 648.0], [34.1, 649.0], [34.2, 650.0], [34.3, 652.0], [34.4, 653.0], [34.5, 655.0], [34.6, 656.0], [34.7, 657.0], [34.8, 659.0], [34.9, 660.0], [35.0, 662.0], [35.1, 663.0], [35.2, 664.0], [35.3, 666.0], [35.4, 668.0], [35.5, 669.0], [35.6, 670.0], [35.7, 671.0], [35.8, 673.0], [35.9, 675.0], [36.0, 675.0], [36.1, 678.0], [36.2, 678.0], [36.3, 680.0], [36.4, 681.0], [36.5, 683.0], [36.6, 684.0], [36.7, 685.0], [36.8, 689.0], [36.9, 689.0], [37.0, 690.0], [37.1, 691.0], [37.2, 693.0], [37.3, 695.0], [37.4, 696.0], [37.5, 699.0], [37.6, 701.0], [37.7, 703.0], [37.8, 704.0], [37.9, 706.0], [38.0, 708.0], [38.1, 709.0], [38.2, 710.0], [38.3, 711.0], [38.4, 714.0], [38.5, 715.0], [38.6, 715.0], [38.7, 718.0], [38.8, 720.0], [38.9, 722.0], [39.0, 723.0], [39.1, 725.0], [39.2, 726.0], [39.3, 728.0], [39.4, 732.0], [39.5, 733.0], [39.6, 734.0], [39.7, 735.0], [39.8, 737.0], [39.9, 738.0], [40.0, 740.0], [40.1, 741.0], [40.2, 742.0], [40.3, 745.0], [40.4, 746.0], [40.5, 747.0], [40.6, 749.0], [40.7, 750.0], [40.8, 754.0], [40.9, 755.0], [41.0, 756.0], [41.1, 759.0], [41.2, 761.0], [41.3, 763.0], [41.4, 764.0], [41.5, 766.0], [41.6, 767.0], [41.7, 767.0], [41.8, 768.0], [41.9, 769.0], [42.0, 771.0], [42.1, 772.0], [42.2, 774.0], [42.3, 776.0], [42.4, 776.0], [42.5, 778.0], [42.6, 779.0], [42.7, 781.0], [42.8, 785.0], [42.9, 787.0], [43.0, 789.0], [43.1, 789.0], [43.2, 790.0], [43.3, 792.0], [43.4, 792.0], [43.5, 793.0], [43.6, 794.0], [43.7, 796.0], [43.8, 798.0], [43.9, 800.0], [44.0, 800.0], [44.1, 801.0], [44.2, 802.0], [44.3, 804.0], [44.4, 806.0], [44.5, 806.0], [44.6, 807.0], [44.7, 810.0], [44.8, 811.0], [44.9, 811.0], [45.0, 813.0], [45.1, 815.0], [45.2, 816.0], [45.3, 819.0], [45.4, 822.0], [45.5, 824.0], [45.6, 827.0], [45.7, 828.0], [45.8, 830.0], [45.9, 832.0], [46.0, 833.0], [46.1, 835.0], [46.2, 836.0], [46.3, 838.0], [46.4, 839.0], [46.5, 841.0], [46.6, 842.0], [46.7, 843.0], [46.8, 844.0], [46.9, 846.0], [47.0, 847.0], [47.1, 849.0], [47.2, 850.0], [47.3, 852.0], [47.4, 853.0], [47.5, 853.0], [47.6, 854.0], [47.7, 856.0], [47.8, 858.0], [47.9, 859.0], [48.0, 859.0], [48.1, 861.0], [48.2, 862.0], [48.3, 864.0], [48.4, 867.0], [48.5, 867.0], [48.6, 869.0], [48.7, 870.0], [48.8, 872.0], [48.9, 873.0], [49.0, 874.0], [49.1, 876.0], [49.2, 879.0], [49.3, 882.0], [49.4, 883.0], [49.5, 884.0], [49.6, 884.0], [49.7, 885.0], [49.8, 887.0], [49.9, 889.0], [50.0, 890.0], [50.1, 892.0], [50.2, 893.0], [50.3, 895.0], [50.4, 896.0], [50.5, 897.0], [50.6, 898.0], [50.7, 899.0], [50.8, 900.0], [50.9, 901.0], [51.0, 903.0], [51.1, 904.0], [51.2, 907.0], [51.3, 908.0], [51.4, 909.0], [51.5, 911.0], [51.6, 913.0], [51.7, 914.0], [51.8, 915.0], [51.9, 918.0], [52.0, 920.0], [52.1, 921.0], [52.2, 923.0], [52.3, 924.0], [52.4, 925.0], [52.5, 927.0], [52.6, 929.0], [52.7, 930.0], [52.8, 931.0], [52.9, 932.0], [53.0, 933.0], [53.1, 934.0], [53.2, 935.0], [53.3, 937.0], [53.4, 940.0], [53.5, 940.0], [53.6, 942.0], [53.7, 942.0], [53.8, 943.0], [53.9, 945.0], [54.0, 946.0], [54.1, 948.0], [54.2, 950.0], [54.3, 951.0], [54.4, 952.0], [54.5, 953.0], [54.6, 955.0], [54.7, 957.0], [54.8, 959.0], [54.9, 962.0], [55.0, 963.0], [55.1, 964.0], [55.2, 967.0], [55.3, 969.0], [55.4, 970.0], [55.5, 973.0], [55.6, 975.0], [55.7, 976.0], [55.8, 978.0], [55.9, 981.0], [56.0, 981.0], [56.1, 985.0], [56.2, 986.0], [56.3, 988.0], [56.4, 988.0], [56.5, 990.0], [56.6, 991.0], [56.7, 992.0], [56.8, 995.0], [56.9, 998.0], [57.0, 1000.0], [57.1, 1003.0], [57.2, 1004.0], [57.3, 1005.0], [57.4, 1007.0], [57.5, 1010.0], [57.6, 1012.0], [57.7, 1014.0], [57.8, 1016.0], [57.9, 1017.0], [58.0, 1018.0], [58.1, 1018.0], [58.2, 1019.0], [58.3, 1024.0], [58.4, 1025.0], [58.5, 1026.0], [58.6, 1029.0], [58.7, 1033.0], [58.8, 1034.0], [58.9, 1039.0], [59.0, 1040.0], [59.1, 1040.0], [59.2, 1042.0], [59.3, 1044.0], [59.4, 1047.0], [59.5, 1050.0], [59.6, 1052.0], [59.7, 1054.0], [59.8, 1056.0], [59.9, 1059.0], [60.0, 1061.0], [60.1, 1062.0], [60.2, 1065.0], [60.3, 1068.0], [60.4, 1070.0], [60.5, 1071.0], [60.6, 1072.0], [60.7, 1073.0], [60.8, 1074.0], [60.9, 1075.0], [61.0, 1079.0], [61.1, 1080.0], [61.2, 1082.0], [61.3, 1084.0], [61.4, 1085.0], [61.5, 1087.0], [61.6, 1089.0], [61.7, 1093.0], [61.8, 1094.0], [61.9, 1097.0], [62.0, 1099.0], [62.1, 1100.0], [62.2, 1101.0], [62.3, 1103.0], [62.4, 1105.0], [62.5, 1107.0], [62.6, 1109.0], [62.7, 1112.0], [62.8, 1112.0], [62.9, 1114.0], [63.0, 1115.0], [63.1, 1116.0], [63.2, 1117.0], [63.3, 1120.0], [63.4, 1122.0], [63.5, 1122.0], [63.6, 1124.0], [63.7, 1125.0], [63.8, 1126.0], [63.9, 1128.0], [64.0, 1129.0], [64.1, 1132.0], [64.2, 1134.0], [64.3, 1135.0], [64.4, 1136.0], [64.5, 1137.0], [64.6, 1142.0], [64.7, 1144.0], [64.8, 1146.0], [64.9, 1147.0], [65.0, 1149.0], [65.1, 1150.0], [65.2, 1152.0], [65.3, 1156.0], [65.4, 1159.0], [65.5, 1161.0], [65.6, 1164.0], [65.7, 1167.0], [65.8, 1171.0], [65.9, 1174.0], [66.0, 1174.0], [66.1, 1176.0], [66.2, 1181.0], [66.3, 1185.0], [66.4, 1185.0], [66.5, 1188.0], [66.6, 1189.0], [66.7, 1193.0], [66.8, 1195.0], [66.9, 1197.0], [67.0, 1199.0], [67.1, 1201.0], [67.2, 1203.0], [67.3, 1205.0], [67.4, 1208.0], [67.5, 1209.0], [67.6, 1213.0], [67.7, 1214.0], [67.8, 1217.0], [67.9, 1217.0], [68.0, 1218.0], [68.1, 1220.0], [68.2, 1223.0], [68.3, 1225.0], [68.4, 1226.0], [68.5, 1230.0], [68.6, 1231.0], [68.7, 1233.0], [68.8, 1236.0], [68.9, 1240.0], [69.0, 1244.0], [69.1, 1245.0], [69.2, 1249.0], [69.3, 1252.0], [69.4, 1256.0], [69.5, 1257.0], [69.6, 1260.0], [69.7, 1263.0], [69.8, 1268.0], [69.9, 1271.0], [70.0, 1276.0], [70.1, 1278.0], [70.2, 1282.0], [70.3, 1286.0], [70.4, 1290.0], [70.5, 1291.0], [70.6, 1292.0], [70.7, 1296.0], [70.8, 1298.0], [70.9, 1300.0], [71.0, 1305.0], [71.1, 1308.0], [71.2, 1310.0], [71.3, 1314.0], [71.4, 1315.0], [71.5, 1316.0], [71.6, 1318.0], [71.7, 1321.0], [71.8, 1325.0], [71.9, 1327.0], [72.0, 1329.0], [72.1, 1333.0], [72.2, 1336.0], [72.3, 1338.0], [72.4, 1346.0], [72.5, 1348.0], [72.6, 1351.0], [72.7, 1355.0], [72.8, 1358.0], [72.9, 1361.0], [73.0, 1364.0], [73.1, 1366.0], [73.2, 1369.0], [73.3, 1375.0], [73.4, 1378.0], [73.5, 1383.0], [73.6, 1387.0], [73.7, 1391.0], [73.8, 1395.0], [73.9, 1399.0], [74.0, 1403.0], [74.1, 1406.0], [74.2, 1408.0], [74.3, 1410.0], [74.4, 1415.0], [74.5, 1419.0], [74.6, 1421.0], [74.7, 1425.0], [74.8, 1426.0], [74.9, 1431.0], [75.0, 1433.0], [75.1, 1435.0], [75.2, 1438.0], [75.3, 1444.0], [75.4, 1447.0], [75.5, 1452.0], [75.6, 1454.0], [75.7, 1456.0], [75.8, 1458.0], [75.9, 1461.0], [76.0, 1464.0], [76.1, 1465.0], [76.2, 1466.0], [76.3, 1469.0], [76.4, 1471.0], [76.5, 1475.0], [76.6, 1477.0], [76.7, 1483.0], [76.8, 1487.0], [76.9, 1489.0], [77.0, 1491.0], [77.1, 1495.0], [77.2, 1498.0], [77.3, 1500.0], [77.4, 1507.0], [77.5, 1510.0], [77.6, 1515.0], [77.7, 1517.0], [77.8, 1520.0], [77.9, 1523.0], [78.0, 1527.0], [78.1, 1531.0], [78.2, 1532.0], [78.3, 1536.0], [78.4, 1539.0], [78.5, 1541.0], [78.6, 1544.0], [78.7, 1548.0], [78.8, 1555.0], [78.9, 1562.0], [79.0, 1565.0], [79.1, 1571.0], [79.2, 1575.0], [79.3, 1582.0], [79.4, 1588.0], [79.5, 1591.0], [79.6, 1594.0], [79.7, 1597.0], [79.8, 1601.0], [79.9, 1604.0], [80.0, 1605.0], [80.1, 1607.0], [80.2, 1611.0], [80.3, 1619.0], [80.4, 1626.0], [80.5, 1629.0], [80.6, 1631.0], [80.7, 1636.0], [80.8, 1641.0], [80.9, 1642.0], [81.0, 1645.0], [81.1, 1649.0], [81.2, 1657.0], [81.3, 1662.0], [81.4, 1668.0], [81.5, 1673.0], [81.6, 1676.0], [81.7, 1680.0], [81.8, 1685.0], [81.9, 1689.0], [82.0, 1697.0], [82.1, 1704.0], [82.2, 1707.0], [82.3, 1710.0], [82.4, 1712.0], [82.5, 1717.0], [82.6, 1720.0], [82.7, 1728.0], [82.8, 1733.0], [82.9, 1737.0], [83.0, 1740.0], [83.1, 1746.0], [83.2, 1750.0], [83.3, 1755.0], [83.4, 1759.0], [83.5, 1764.0], [83.6, 1771.0], [83.7, 1773.0], [83.8, 1778.0], [83.9, 1785.0], [84.0, 1791.0], [84.1, 1793.0], [84.2, 1796.0], [84.3, 1802.0], [84.4, 1806.0], [84.5, 1810.0], [84.6, 1814.0], [84.7, 1818.0], [84.8, 1821.0], [84.9, 1829.0], [85.0, 1835.0], [85.1, 1837.0], [85.2, 1843.0], [85.3, 1849.0], [85.4, 1852.0], [85.5, 1862.0], [85.6, 1869.0], [85.7, 1879.0], [85.8, 1885.0], [85.9, 1896.0], [86.0, 1897.0], [86.1, 1900.0], [86.2, 1904.0], [86.3, 1912.0], [86.4, 1932.0], [86.5, 1938.0], [86.6, 1949.0], [86.7, 1959.0], [86.8, 1964.0], [86.9, 1977.0], [87.0, 1984.0], [87.1, 1988.0], [87.2, 1992.0], [87.3, 1996.0], [87.4, 2002.0], [87.5, 2005.0], [87.6, 2009.0], [87.7, 2011.0], [87.8, 2018.0], [87.9, 2022.0], [88.0, 2026.0], [88.1, 2032.0], [88.2, 2036.0], [88.3, 2041.0], [88.4, 2055.0], [88.5, 2063.0], [88.6, 2066.0], [88.7, 2070.0], [88.8, 2077.0], [88.9, 2080.0], [89.0, 2082.0], [89.1, 2086.0], [89.2, 2093.0], [89.3, 2097.0], [89.4, 2102.0], [89.5, 2106.0], [89.6, 2108.0], [89.7, 2121.0], [89.8, 2123.0], [89.9, 2130.0], [90.0, 2138.0], [90.1, 2140.0], [90.2, 2146.0], [90.3, 2151.0], [90.4, 2156.0], [90.5, 2164.0], [90.6, 2171.0], [90.7, 2179.0], [90.8, 2187.0], [90.9, 2198.0], [91.0, 2207.0], [91.1, 2213.0], [91.2, 2219.0], [91.3, 2221.0], [91.4, 2226.0], [91.5, 2232.0], [91.6, 2235.0], [91.7, 2241.0], [91.8, 2246.0], [91.9, 2255.0], [92.0, 2273.0], [92.1, 2282.0], [92.2, 2291.0], [92.3, 2293.0], [92.4, 2301.0], [92.5, 2315.0], [92.6, 2320.0], [92.7, 2326.0], [92.8, 2329.0], [92.9, 2336.0], [93.0, 2348.0], [93.1, 2354.0], [93.2, 2357.0], [93.3, 2359.0], [93.4, 2375.0], [93.5, 2386.0], [93.6, 2402.0], [93.7, 2409.0], [93.8, 2421.0], [93.9, 2425.0], [94.0, 2439.0], [94.1, 2449.0], [94.2, 2458.0], [94.3, 2473.0], [94.4, 2483.0], [94.5, 2490.0], [94.6, 2499.0], [94.7, 2506.0], [94.8, 2511.0], [94.9, 2529.0], [95.0, 2537.0], [95.1, 2542.0], [95.2, 2553.0], [95.3, 2571.0], [95.4, 2580.0], [95.5, 2589.0], [95.6, 2593.0], [95.7, 2605.0], [95.8, 2614.0], [95.9, 2618.0], [96.0, 2623.0], [96.1, 2626.0], [96.2, 2635.0], [96.3, 2651.0], [96.4, 2680.0], [96.5, 2691.0], [96.6, 2696.0], [96.7, 2702.0], [96.8, 2720.0], [96.9, 2737.0], [97.0, 2741.0], [97.1, 2756.0], [97.2, 2777.0], [97.3, 2797.0], [97.4, 2824.0], [97.5, 2841.0], [97.6, 2851.0], [97.7, 2860.0], [97.8, 2879.0], [97.9, 2890.0], [98.0, 2912.0], [98.1, 2919.0], [98.2, 2953.0], [98.3, 2981.0], [98.4, 3006.0], [98.5, 3035.0], [98.6, 3077.0], [98.7, 3111.0], [98.8, 3134.0], [98.9, 3156.0], [99.0, 3178.0], [99.1, 3213.0], [99.2, 3272.0], [99.3, 3329.0], [99.4, 3442.0], [99.5, 3485.0], [99.6, 3501.0], [99.7, 3611.0], [99.8, 3807.0], [99.9, 4081.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 362.0, "series": [{"data": [[0.0, 41.0], [600.0, 335.0], [700.0, 305.0], [800.0, 327.0], [900.0, 300.0], [1000.0, 244.0], [1100.0, 241.0], [1200.0, 183.0], [1300.0, 146.0], [1400.0, 161.0], [1500.0, 118.0], [100.0, 158.0], [1600.0, 111.0], [1700.0, 107.0], [1800.0, 86.0], [1900.0, 62.0], [2000.0, 96.0], [2100.0, 75.0], [2200.0, 70.0], [2300.0, 58.0], [2400.0, 49.0], [2500.0, 49.0], [2600.0, 49.0], [2800.0, 30.0], [2700.0, 33.0], [2900.0, 19.0], [3000.0, 15.0], [3100.0, 18.0], [200.0, 232.0], [3200.0, 9.0], [3300.0, 8.0], [3400.0, 9.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 1.0], [3800.0, 4.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 1.0], [4100.0, 3.0], [300.0, 320.0], [400.0, 362.0], [500.0, 354.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1089.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2594.0, "series": [{"data": [[0.0, 1117.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2594.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1089.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71497838E12, "maxY": 8.0, "series": [{"data": [[1.71497874E12, 1.0], [1.71497856E12, 1.0], [1.71497862E12, 1.0], [1.71497844E12, 1.0], [1.71497892E12, 1.0], [1.7149785E12, 1.0], [1.7149788E12, 1.0], [1.71497838E12, 1.0], [1.71497886E12, 1.0], [1.71497868E12, 1.0]], "isOverall": false, "label": "1", "isController": false}, {"data": [[1.71497922E12, 1.0], [1.71497904E12, 1.0], [1.7149791E12, 1.0], [1.71497892E12, 1.0], [1.71497898E12, 1.0], [1.71497916E12, 1.0]], "isOverall": false, "label": "2", "isController": false}, {"data": [[1.71497922E12, 4.0], [1.71497952E12, 4.0], [1.71497958E12, 3.6453201970443336], [1.7149794E12, 4.0], [1.71497946E12, 4.0], [1.71497928E12, 4.0], [1.71497934E12, 4.0]], "isOverall": false, "label": "4", "isController": false}, {"data": [[1.71497988E12, 8.0], [1.71497958E12, 8.0], [1.7149797E12, 8.0], [1.71497964E12, 8.0], [1.71497982E12, 8.0], [1.71497976E12, 8.0], [1.71497994E12, 7.148936170212768]], "isOverall": false, "label": "8", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71497994E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 501.0143123833234, "minX": 1.0, "maxY": 1751.5990932642467, "series": [{"data": [[1.0, 501.0143123833234], [4.0, 966.2114395886892], [2.0, 620.5555555555557], [8.0, 1751.5990932642467], [5.0, 1208.5], [3.0, 688.6304347826085], [6.0, 1619.1428571428569], [7.0, 1559.3333333333333]], "isOverall": false, "label": "cogtiff", "isController": false}, {"data": [[4.2850000000000055, 1064.1645833333341]], "isOverall": false, "label": "cogtiff-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.71497838E12, "maxY": 5223986.816666666, "series": [{"data": [[1.71497874E12, 2150439.9833333334], [1.71497904E12, 2308386.0833333335], [1.71497844E12, 2118097.433333333], [1.71497946E12, 4512598.366666666], [1.71497976E12, 4717792.75], [1.71497886E12, 2508866.5166666666], [1.71497916E12, 2283354.3666666667], [1.71497922E12, 3872798.533333333], [1.71497952E12, 4488015.216666667], [1.71497862E12, 2119824.2], [1.71497892E12, 2271429.783333333], [1.71497964E12, 5127596.85], [1.71497934E12, 4390716.616666666], [1.71497994E12, 3443927.35], [1.7149791E12, 2265592.283333333], [1.7149797E12, 4770134.666666667], [1.7149794E12, 4605389.716666667], [1.7149785E12, 2266331.4166666665], [1.71497982E12, 4953538.516666667], [1.7149788E12, 2257413.3], [1.71497988E12, 5223986.816666666], [1.71497856E12, 1979221.4833333334], [1.71497958E12, 4498161.25], [1.71497898E12, 2333672.55], [1.71497928E12, 4617067.15], [1.71497838E12, 36058.566666666666], [1.71497868E12, 2204019.216666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71497874E12, 0.0], [1.71497904E12, 0.0], [1.71497844E12, 0.0], [1.71497946E12, 0.0], [1.71497976E12, 0.0], [1.71497886E12, 0.0], [1.71497916E12, 0.0], [1.71497922E12, 0.0], [1.71497952E12, 0.0], [1.71497862E12, 0.0], [1.71497892E12, 0.0], [1.71497964E12, 0.0], [1.71497934E12, 0.0], [1.71497994E12, 0.0], [1.7149791E12, 0.0], [1.7149797E12, 0.0], [1.7149794E12, 0.0], [1.7149785E12, 0.0], [1.71497982E12, 0.0], [1.7149788E12, 0.0], [1.71497988E12, 0.0], [1.71497856E12, 0.0], [1.71497958E12, 0.0], [1.71497898E12, 0.0], [1.71497928E12, 0.0], [1.71497838E12, 0.0], [1.71497868E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71497994E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 462.7054263565892, "minX": 1.71497838E12, "maxY": 1836.693486590038, "series": [{"data": [[1.71497874E12, 480.77600000000007], [1.71497904E12, 462.7054263565892], [1.71497844E12, 568.5523809523811], [1.71497946E12, 972.4658634538152], [1.71497976E12, 1793.7472118959108], [1.71497886E12, 468.328125], [1.71497916E12, 481.44354838709677], [1.71497922E12, 850.1862745098038], [1.71497952E12, 992.9586776859504], [1.71497862E12, 500.710743801653], [1.71497892E12, 483.58536585365846], [1.71497964E12, 1735.7025089605727], [1.71497934E12, 1010.8644067796614], [1.71497994E12, 1583.9680851063836], [1.7149791E12, 490.5528455284553], [1.7149797E12, 1836.693486590038], [1.7149794E12, 933.7665369649801], [1.7149785E12, 467.48062015503865], [1.71497982E12, 1756.2472324723244], [1.7149788E12, 517.1810344827584], [1.71497988E12, 1685.1748251748256], [1.71497856E12, 590.3799999999997], [1.71497958E12, 1013.1164658634547], [1.71497898E12, 499.776859504132], [1.71497928E12, 960.1646586345381], [1.71497838E12, 547.0], [1.71497868E12, 525.7982456140352]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71497994E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 153.31250000000003, "minX": 1.71497838E12, "maxY": 614.2713754646841, "series": [{"data": [[1.71497874E12, 172.39199999999994], [1.71497904E12, 159.62015503875958], [1.71497844E12, 192.45714285714286], [1.71497946E12, 419.0321285140561], [1.71497976E12, 614.2713754646841], [1.71497886E12, 153.31250000000003], [1.71497916E12, 165.44354838709674], [1.71497922E12, 296.5588235294117], [1.71497952E12, 408.2975206611571], [1.71497862E12, 174.1487603305785], [1.71497892E12, 162.23577235772348], [1.71497964E12, 567.0322580645167], [1.71497934E12, 423.1610169491525], [1.71497994E12, 537.063829787234], [1.7149791E12, 173.18699186991861], [1.7149797E12, 578.6704980842915], [1.7149794E12, 383.90272373540864], [1.7149785E12, 156.92248062015508], [1.71497982E12, 533.9741697416974], [1.7149788E12, 172.50862068965515], [1.71497988E12, 542.2762237762237], [1.71497856E12, 183.0], [1.71497958E12, 395.12851405622484], [1.71497898E12, 165.36363636363643], [1.71497928E12, 412.46586345381525], [1.71497838E12, 337.0], [1.71497868E12, 164.4473684210526]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71497994E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71497838E12, "maxY": 4.9E-324, "series": [{"data": [[1.71497874E12, 0.0], [1.71497904E12, 0.0], [1.71497844E12, 0.0], [1.71497946E12, 0.0], [1.71497976E12, 0.0], [1.71497886E12, 0.0], [1.71497916E12, 0.0], [1.71497922E12, 0.0], [1.71497952E12, 0.0], [1.71497862E12, 0.0], [1.71497892E12, 0.0], [1.71497964E12, 0.0], [1.71497934E12, 0.0], [1.71497994E12, 0.0], [1.7149791E12, 0.0], [1.7149797E12, 0.0], [1.7149794E12, 0.0], [1.7149785E12, 0.0], [1.71497982E12, 0.0], [1.7149788E12, 0.0], [1.71497988E12, 0.0], [1.71497856E12, 0.0], [1.71497958E12, 0.0], [1.71497898E12, 0.0], [1.71497928E12, 0.0], [1.71497838E12, 0.0], [1.71497868E12, 0.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71497994E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 26.0, "minX": 1.71497838E12, "maxY": 4243.0, "series": [{"data": [[1.71497874E12, 1144.0], [1.71497904E12, 1111.0], [1.71497844E12, 1387.0], [1.71497946E12, 2346.0], [1.71497976E12, 4115.0], [1.71497886E12, 1362.0], [1.71497916E12, 1288.0], [1.71497922E12, 1845.0], [1.71497952E12, 2182.0], [1.71497862E12, 1412.0], [1.71497892E12, 1039.0], [1.71497964E12, 3947.0], [1.71497934E12, 2421.0], [1.71497994E12, 4081.0], [1.7149791E12, 1218.0], [1.7149797E12, 4243.0], [1.7149794E12, 2009.0], [1.7149785E12, 1444.0], [1.71497982E12, 4183.0], [1.7149788E12, 1144.0], [1.71497988E12, 3824.0], [1.71497856E12, 1475.0], [1.71497958E12, 3238.0], [1.71497898E12, 1346.0], [1.71497928E12, 2275.0], [1.71497838E12, 791.0], [1.71497868E12, 1483.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71497874E12, 26.0], [1.71497904E12, 42.0], [1.71497844E12, 54.0], [1.71497946E12, 191.0], [1.71497976E12, 217.0], [1.71497886E12, 70.0], [1.71497916E12, 64.0], [1.71497922E12, 60.0], [1.71497952E12, 251.0], [1.71497862E12, 56.0], [1.71497892E12, 56.0], [1.71497964E12, 254.0], [1.71497934E12, 146.0], [1.71497994E12, 329.0], [1.7149791E12, 38.0], [1.7149797E12, 276.0], [1.7149794E12, 94.0], [1.7149785E12, 77.0], [1.71497982E12, 324.0], [1.7149788E12, 92.0], [1.71497988E12, 238.0], [1.71497856E12, 87.0], [1.71497958E12, 185.0], [1.71497898E12, 58.0], [1.71497928E12, 184.0], [1.71497838E12, 303.0], [1.71497868E12, 98.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71497874E12, 918.4000000000001], [1.71497904E12, 794.0], [1.71497844E12, 932.4000000000001], [1.71497946E12, 1489.0], [1.71497976E12, 2867.0], [1.71497886E12, 807.9000000000002], [1.71497916E12, 830.0], [1.71497922E12, 1391.5], [1.71497952E12, 1558.9000000000003], [1.71497862E12, 977.4], [1.71497892E12, 833.6000000000004], [1.71497964E12, 2696.0], [1.71497934E12, 1585.1000000000008], [1.71497994E12, 2513.8999999999996], [1.7149791E12, 884.6], [1.7149797E12, 2762.8], [1.7149794E12, 1459.0000000000005], [1.7149785E12, 838.0], [1.71497982E12, 2629.4], [1.7149788E12, 943.8], [1.71497988E12, 2626.4000000000005], [1.71497856E12, 973.1000000000001], [1.71497958E12, 1720.0], [1.71497898E12, 874.1999999999999], [1.71497928E12, 1496.0], [1.71497838E12, 791.0], [1.71497868E12, 996.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71497874E12, 1136.7199999999998], [1.71497904E12, 1074.9999999999986], [1.71497844E12, 1374.0999999999995], [1.71497946E12, 2093.5], [1.71497976E12, 3865.5000000000014], [1.71497886E12, 1284.2799999999984], [1.71497916E12, 1268.25], [1.71497922E12, 1817.2999999999993], [1.71497952E12, 2126.3199999999997], [1.71497862E12, 1395.0600000000002], [1.71497892E12, 1029.4], [1.71497964E12, 3529.799999999996], [1.71497934E12, 2318.3899999999994], [1.71497994E12, 3561.2399999999916], [1.7149791E12, 1193.5200000000004], [1.7149797E12, 3685.479999999999], [1.7149794E12, 1754.7999999999995], [1.7149785E12, 1345.5999999999963], [1.71497982E12, 3773.319999999985], [1.7149788E12, 1143.83], [1.71497988E12, 3491.6299999999997], [1.71497856E12, 1474.7299999999998], [1.71497958E12, 2931.5], [1.71497898E12, 1334.1200000000001], [1.71497928E12, 2163.5], [1.71497838E12, 791.0], [1.71497868E12, 1463.9499999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71497874E12, 427.0], [1.71497904E12, 416.0], [1.71497844E12, 490.0], [1.71497946E12, 900.0], [1.71497976E12, 1727.0], [1.71497886E12, 425.5], [1.71497916E12, 460.5], [1.71497922E12, 857.0], [1.71497952E12, 951.0], [1.71497862E12, 454.0], [1.71497892E12, 456.0], [1.71497964E12, 1711.0], [1.71497934E12, 952.0], [1.71497994E12, 1543.5], [1.7149791E12, 476.0], [1.7149797E12, 1808.0], [1.7149794E12, 920.0], [1.7149785E12, 420.0], [1.71497982E12, 1750.0], [1.7149788E12, 489.5], [1.71497988E12, 1619.5], [1.71497856E12, 566.5], [1.71497958E12, 884.0], [1.71497898E12, 459.0], [1.71497928E12, 918.0], [1.71497838E12, 547.0], [1.71497868E12, 460.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71497874E12, 1000.5999999999998], [1.71497904E12, 887.0], [1.71497844E12, 1022.1999999999992], [1.71497946E12, 1707.0], [1.71497976E12, 3132.0], [1.71497886E12, 911.1499999999999], [1.71497916E12, 951.0], [1.71497922E12, 1562.25], [1.71497952E12, 1744.1499999999999], [1.71497862E12, 1091.2999999999997], [1.71497892E12, 905.4], [1.71497964E12, 3016.0], [1.71497934E12, 1740.15], [1.71497994E12, 3032.2999999999997], [1.7149791E12, 965.5999999999999], [1.7149797E12, 2964.999999999999], [1.7149794E12, 1639.4], [1.7149785E12, 939.0], [1.71497982E12, 2981.7999999999993], [1.7149788E12, 1035.85], [1.71497988E12, 2957.5499999999984], [1.71497856E12, 1130.5499999999995], [1.71497958E12, 2274.0], [1.71497898E12, 961.8999999999999], [1.71497928E12, 1690.5], [1.71497838E12, 791.0], [1.71497868E12, 1114.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71497994E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 552.0, "minX": 1.0, "maxY": 1468.0, "series": [{"data": [[2.0, 552.0], [1.0, 781.5], [4.0, 1017.5], [8.0, 1300.5], [9.0, 1468.0], [5.0, 1197.0], [3.0, 638.0], [6.0, 1113.0], [7.0, 1236.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 174.0, "minX": 1.0, "maxY": 468.0, "series": [{"data": [[2.0, 174.0], [1.0, 193.0], [4.0, 400.0], [8.0, 443.0], [9.0, 468.0], [5.0, 446.5], [3.0, 235.0], [6.0, 430.0], [7.0, 432.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71497838E12, "maxY": 4.766666666666667, "series": [{"data": [[1.71497874E12, 2.0833333333333335], [1.71497904E12, 2.15], [1.71497844E12, 1.75], [1.71497946E12, 4.15], [1.71497976E12, 4.483333333333333], [1.71497886E12, 2.1333333333333333], [1.71497916E12, 2.066666666666667], [1.71497922E12, 3.45], [1.71497952E12, 4.033333333333333], [1.71497862E12, 2.0166666666666666], [1.71497892E12, 2.05], [1.71497964E12, 4.65], [1.71497934E12, 3.933333333333333], [1.71497994E12, 3.0], [1.7149791E12, 2.05], [1.7149797E12, 4.35], [1.7149794E12, 4.283333333333333], [1.7149785E12, 2.15], [1.71497982E12, 4.516666666666667], [1.7149788E12, 1.9333333333333333], [1.71497988E12, 4.766666666666667], [1.71497856E12, 1.6666666666666667], [1.71497958E12, 4.216666666666667], [1.71497898E12, 2.0166666666666666], [1.71497928E12, 4.15], [1.71497838E12, 0.05], [1.71497868E12, 1.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71497994E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71497838E12, "maxY": 4.766666666666667, "series": [{"data": [[1.71497874E12, 2.0833333333333335], [1.71497904E12, 2.15], [1.71497844E12, 1.75], [1.71497946E12, 4.15], [1.71497976E12, 4.483333333333333], [1.71497886E12, 2.1333333333333333], [1.71497916E12, 2.066666666666667], [1.71497922E12, 3.4], [1.71497952E12, 4.033333333333333], [1.71497862E12, 2.0166666666666666], [1.71497892E12, 2.05], [1.71497964E12, 4.65], [1.71497934E12, 3.933333333333333], [1.71497994E12, 3.1333333333333333], [1.7149791E12, 2.05], [1.7149797E12, 4.35], [1.7149794E12, 4.283333333333333], [1.7149785E12, 2.15], [1.71497982E12, 4.516666666666667], [1.7149788E12, 1.9333333333333333], [1.71497988E12, 4.766666666666667], [1.71497856E12, 1.6666666666666667], [1.71497958E12, 4.15], [1.71497898E12, 2.0166666666666666], [1.71497928E12, 4.15], [1.71497838E12, 0.03333333333333333], [1.71497868E12, 1.9]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71497994E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71497838E12, "maxY": 4.766666666666667, "series": [{"data": [[1.71497874E12, 2.0833333333333335], [1.71497904E12, 2.15], [1.71497844E12, 1.75], [1.71497946E12, 4.15], [1.71497976E12, 4.483333333333333], [1.71497886E12, 2.1333333333333333], [1.71497916E12, 2.066666666666667], [1.71497922E12, 3.4], [1.71497952E12, 4.033333333333333], [1.71497862E12, 2.0166666666666666], [1.71497892E12, 2.05], [1.71497964E12, 4.65], [1.71497934E12, 3.933333333333333], [1.71497994E12, 3.1333333333333333], [1.7149791E12, 2.05], [1.7149797E12, 4.35], [1.7149794E12, 4.283333333333333], [1.7149785E12, 2.15], [1.71497982E12, 4.516666666666667], [1.7149788E12, 1.9333333333333333], [1.71497988E12, 4.766666666666667], [1.71497856E12, 1.6666666666666667], [1.71497958E12, 4.15], [1.71497898E12, 2.0166666666666666], [1.71497928E12, 4.15], [1.71497838E12, 0.03333333333333333], [1.71497868E12, 1.9]], "isOverall": false, "label": "cogtiff-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71497994E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71497838E12, "maxY": 4.766666666666667, "series": [{"data": [[1.71497874E12, 2.0833333333333335], [1.71497904E12, 2.15], [1.71497844E12, 1.75], [1.71497946E12, 4.15], [1.71497976E12, 4.483333333333333], [1.71497886E12, 2.1333333333333333], [1.71497916E12, 2.066666666666667], [1.71497922E12, 3.4], [1.71497952E12, 4.033333333333333], [1.71497862E12, 2.0166666666666666], [1.71497892E12, 2.05], [1.71497964E12, 4.65], [1.71497934E12, 3.933333333333333], [1.71497994E12, 3.1333333333333333], [1.7149791E12, 2.05], [1.7149797E12, 4.35], [1.7149794E12, 4.283333333333333], [1.7149785E12, 2.15], [1.71497982E12, 4.516666666666667], [1.7149788E12, 1.9333333333333333], [1.71497988E12, 4.766666666666667], [1.71497856E12, 1.6666666666666667], [1.71497958E12, 4.15], [1.71497898E12, 2.0166666666666666], [1.71497928E12, 4.15], [1.71497838E12, 0.03333333333333333], [1.71497868E12, 1.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71497994E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

