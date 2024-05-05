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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 1420.0, "series": [{"data": [[0.0, 177.0], [0.1, 186.0], [0.2, 186.0], [0.3, 186.0], [0.4, 188.0], [0.5, 193.0], [0.6, 195.0], [0.7, 196.0], [0.8, 199.0], [0.9, 200.0], [1.0, 202.0], [1.1, 206.0], [1.2, 207.0], [1.3, 209.0], [1.4, 209.0], [1.5, 210.0], [1.6, 211.0], [1.7, 211.0], [1.8, 217.0], [1.9, 219.0], [2.0, 221.0], [2.1, 221.0], [2.2, 222.0], [2.3, 222.0], [2.4, 222.0], [2.5, 223.0], [2.6, 225.0], [2.7, 226.0], [2.8, 227.0], [2.9, 228.0], [3.0, 231.0], [3.1, 233.0], [3.2, 233.0], [3.3, 234.0], [3.4, 234.0], [3.5, 235.0], [3.6, 235.0], [3.7, 236.0], [3.8, 239.0], [3.9, 240.0], [4.0, 240.0], [4.1, 240.0], [4.2, 240.0], [4.3, 243.0], [4.4, 243.0], [4.5, 244.0], [4.6, 245.0], [4.7, 247.0], [4.8, 247.0], [4.9, 248.0], [5.0, 248.0], [5.1, 249.0], [5.2, 250.0], [5.3, 253.0], [5.4, 255.0], [5.5, 255.0], [5.6, 255.0], [5.7, 258.0], [5.8, 258.0], [5.9, 258.0], [6.0, 259.0], [6.1, 259.0], [6.2, 259.0], [6.3, 259.0], [6.4, 259.0], [6.5, 259.0], [6.6, 260.0], [6.7, 261.0], [6.8, 261.0], [6.9, 261.0], [7.0, 266.0], [7.1, 266.0], [7.2, 266.0], [7.3, 267.0], [7.4, 267.0], [7.5, 269.0], [7.6, 271.0], [7.7, 271.0], [7.8, 272.0], [7.9, 272.0], [8.0, 273.0], [8.1, 274.0], [8.2, 274.0], [8.3, 274.0], [8.4, 275.0], [8.5, 275.0], [8.6, 275.0], [8.7, 275.0], [8.8, 276.0], [8.9, 276.0], [9.0, 278.0], [9.1, 280.0], [9.2, 281.0], [9.3, 281.0], [9.4, 283.0], [9.5, 284.0], [9.6, 284.0], [9.7, 285.0], [9.8, 285.0], [9.9, 286.0], [10.0, 286.0], [10.1, 286.0], [10.2, 286.0], [10.3, 286.0], [10.4, 286.0], [10.5, 287.0], [10.6, 288.0], [10.7, 288.0], [10.8, 289.0], [10.9, 289.0], [11.0, 289.0], [11.1, 290.0], [11.2, 290.0], [11.3, 290.0], [11.4, 291.0], [11.5, 292.0], [11.6, 292.0], [11.7, 292.0], [11.8, 292.0], [11.9, 292.0], [12.0, 292.0], [12.1, 292.0], [12.2, 293.0], [12.3, 294.0], [12.4, 295.0], [12.5, 295.0], [12.6, 295.0], [12.7, 295.0], [12.8, 296.0], [12.9, 296.0], [13.0, 297.0], [13.1, 297.0], [13.2, 298.0], [13.3, 300.0], [13.4, 300.0], [13.5, 301.0], [13.6, 301.0], [13.7, 302.0], [13.8, 302.0], [13.9, 303.0], [14.0, 304.0], [14.1, 304.0], [14.2, 305.0], [14.3, 305.0], [14.4, 305.0], [14.5, 305.0], [14.6, 306.0], [14.7, 306.0], [14.8, 306.0], [14.9, 307.0], [15.0, 307.0], [15.1, 308.0], [15.2, 308.0], [15.3, 309.0], [15.4, 309.0], [15.5, 310.0], [15.6, 310.0], [15.7, 310.0], [15.8, 310.0], [15.9, 311.0], [16.0, 311.0], [16.1, 311.0], [16.2, 311.0], [16.3, 312.0], [16.4, 312.0], [16.5, 312.0], [16.6, 312.0], [16.7, 312.0], [16.8, 313.0], [16.9, 313.0], [17.0, 314.0], [17.1, 314.0], [17.2, 314.0], [17.3, 315.0], [17.4, 316.0], [17.5, 316.0], [17.6, 316.0], [17.7, 316.0], [17.8, 317.0], [17.9, 317.0], [18.0, 317.0], [18.1, 318.0], [18.2, 319.0], [18.3, 320.0], [18.4, 322.0], [18.5, 323.0], [18.6, 324.0], [18.7, 324.0], [18.8, 324.0], [18.9, 324.0], [19.0, 325.0], [19.1, 325.0], [19.2, 326.0], [19.3, 326.0], [19.4, 326.0], [19.5, 327.0], [19.6, 327.0], [19.7, 327.0], [19.8, 328.0], [19.9, 328.0], [20.0, 328.0], [20.1, 328.0], [20.2, 329.0], [20.3, 329.0], [20.4, 329.0], [20.5, 330.0], [20.6, 330.0], [20.7, 331.0], [20.8, 331.0], [20.9, 332.0], [21.0, 332.0], [21.1, 332.0], [21.2, 332.0], [21.3, 332.0], [21.4, 333.0], [21.5, 333.0], [21.6, 334.0], [21.7, 334.0], [21.8, 334.0], [21.9, 335.0], [22.0, 335.0], [22.1, 337.0], [22.2, 337.0], [22.3, 337.0], [22.4, 339.0], [22.5, 339.0], [22.6, 340.0], [22.7, 340.0], [22.8, 341.0], [22.9, 341.0], [23.0, 342.0], [23.1, 342.0], [23.2, 345.0], [23.3, 345.0], [23.4, 346.0], [23.5, 346.0], [23.6, 346.0], [23.7, 347.0], [23.8, 347.0], [23.9, 348.0], [24.0, 348.0], [24.1, 348.0], [24.2, 350.0], [24.3, 350.0], [24.4, 350.0], [24.5, 351.0], [24.6, 351.0], [24.7, 351.0], [24.8, 351.0], [24.9, 352.0], [25.0, 353.0], [25.1, 353.0], [25.2, 353.0], [25.3, 353.0], [25.4, 355.0], [25.5, 355.0], [25.6, 357.0], [25.7, 358.0], [25.8, 359.0], [25.9, 359.0], [26.0, 359.0], [26.1, 360.0], [26.2, 361.0], [26.3, 361.0], [26.4, 361.0], [26.5, 361.0], [26.6, 362.0], [26.7, 363.0], [26.8, 364.0], [26.9, 364.0], [27.0, 365.0], [27.1, 365.0], [27.2, 366.0], [27.3, 366.0], [27.4, 367.0], [27.5, 367.0], [27.6, 368.0], [27.7, 368.0], [27.8, 368.0], [27.9, 368.0], [28.0, 370.0], [28.1, 370.0], [28.2, 370.0], [28.3, 372.0], [28.4, 372.0], [28.5, 372.0], [28.6, 373.0], [28.7, 373.0], [28.8, 373.0], [28.9, 374.0], [29.0, 374.0], [29.1, 375.0], [29.2, 375.0], [29.3, 376.0], [29.4, 376.0], [29.5, 377.0], [29.6, 377.0], [29.7, 377.0], [29.8, 377.0], [29.9, 377.0], [30.0, 377.0], [30.1, 377.0], [30.2, 378.0], [30.3, 378.0], [30.4, 380.0], [30.5, 382.0], [30.6, 382.0], [30.7, 382.0], [30.8, 382.0], [30.9, 386.0], [31.0, 387.0], [31.1, 387.0], [31.2, 387.0], [31.3, 387.0], [31.4, 387.0], [31.5, 387.0], [31.6, 388.0], [31.7, 388.0], [31.8, 390.0], [31.9, 390.0], [32.0, 390.0], [32.1, 390.0], [32.2, 391.0], [32.3, 391.0], [32.4, 391.0], [32.5, 391.0], [32.6, 392.0], [32.7, 394.0], [32.8, 394.0], [32.9, 395.0], [33.0, 395.0], [33.1, 396.0], [33.2, 399.0], [33.3, 399.0], [33.4, 400.0], [33.5, 400.0], [33.6, 401.0], [33.7, 401.0], [33.8, 401.0], [33.9, 402.0], [34.0, 402.0], [34.1, 403.0], [34.2, 403.0], [34.3, 403.0], [34.4, 404.0], [34.5, 404.0], [34.6, 406.0], [34.7, 406.0], [34.8, 406.0], [34.9, 407.0], [35.0, 407.0], [35.1, 408.0], [35.2, 408.0], [35.3, 408.0], [35.4, 409.0], [35.5, 409.0], [35.6, 409.0], [35.7, 409.0], [35.8, 409.0], [35.9, 409.0], [36.0, 409.0], [36.1, 410.0], [36.2, 410.0], [36.3, 411.0], [36.4, 411.0], [36.5, 412.0], [36.6, 413.0], [36.7, 413.0], [36.8, 414.0], [36.9, 414.0], [37.0, 414.0], [37.1, 415.0], [37.2, 416.0], [37.3, 419.0], [37.4, 419.0], [37.5, 421.0], [37.6, 421.0], [37.7, 421.0], [37.8, 421.0], [37.9, 422.0], [38.0, 422.0], [38.1, 423.0], [38.2, 423.0], [38.3, 424.0], [38.4, 424.0], [38.5, 424.0], [38.6, 425.0], [38.7, 425.0], [38.8, 425.0], [38.9, 425.0], [39.0, 425.0], [39.1, 426.0], [39.2, 426.0], [39.3, 426.0], [39.4, 427.0], [39.5, 428.0], [39.6, 429.0], [39.7, 429.0], [39.8, 429.0], [39.9, 430.0], [40.0, 431.0], [40.1, 431.0], [40.2, 432.0], [40.3, 433.0], [40.4, 433.0], [40.5, 433.0], [40.6, 433.0], [40.7, 434.0], [40.8, 434.0], [40.9, 434.0], [41.0, 434.0], [41.1, 435.0], [41.2, 435.0], [41.3, 435.0], [41.4, 437.0], [41.5, 438.0], [41.6, 438.0], [41.7, 439.0], [41.8, 440.0], [41.9, 440.0], [42.0, 441.0], [42.1, 441.0], [42.2, 441.0], [42.3, 442.0], [42.4, 443.0], [42.5, 443.0], [42.6, 443.0], [42.7, 443.0], [42.8, 444.0], [42.9, 444.0], [43.0, 444.0], [43.1, 445.0], [43.2, 445.0], [43.3, 445.0], [43.4, 447.0], [43.5, 447.0], [43.6, 447.0], [43.7, 448.0], [43.8, 448.0], [43.9, 448.0], [44.0, 448.0], [44.1, 448.0], [44.2, 450.0], [44.3, 450.0], [44.4, 450.0], [44.5, 451.0], [44.6, 451.0], [44.7, 451.0], [44.8, 452.0], [44.9, 453.0], [45.0, 453.0], [45.1, 455.0], [45.2, 455.0], [45.3, 455.0], [45.4, 455.0], [45.5, 455.0], [45.6, 457.0], [45.7, 458.0], [45.8, 458.0], [45.9, 458.0], [46.0, 459.0], [46.1, 460.0], [46.2, 460.0], [46.3, 461.0], [46.4, 462.0], [46.5, 462.0], [46.6, 462.0], [46.7, 463.0], [46.8, 463.0], [46.9, 464.0], [47.0, 465.0], [47.1, 466.0], [47.2, 466.0], [47.3, 467.0], [47.4, 468.0], [47.5, 469.0], [47.6, 469.0], [47.7, 470.0], [47.8, 471.0], [47.9, 471.0], [48.0, 472.0], [48.1, 473.0], [48.2, 475.0], [48.3, 475.0], [48.4, 476.0], [48.5, 478.0], [48.6, 478.0], [48.7, 478.0], [48.8, 478.0], [48.9, 480.0], [49.0, 481.0], [49.1, 481.0], [49.2, 482.0], [49.3, 482.0], [49.4, 483.0], [49.5, 483.0], [49.6, 483.0], [49.7, 484.0], [49.8, 484.0], [49.9, 484.0], [50.0, 485.0], [50.1, 485.0], [50.2, 485.0], [50.3, 486.0], [50.4, 486.0], [50.5, 487.0], [50.6, 487.0], [50.7, 487.0], [50.8, 487.0], [50.9, 488.0], [51.0, 488.0], [51.1, 488.0], [51.2, 489.0], [51.3, 489.0], [51.4, 490.0], [51.5, 491.0], [51.6, 492.0], [51.7, 493.0], [51.8, 494.0], [51.9, 494.0], [52.0, 495.0], [52.1, 495.0], [52.2, 496.0], [52.3, 496.0], [52.4, 497.0], [52.5, 497.0], [52.6, 497.0], [52.7, 497.0], [52.8, 497.0], [52.9, 498.0], [53.0, 499.0], [53.1, 499.0], [53.2, 500.0], [53.3, 500.0], [53.4, 501.0], [53.5, 502.0], [53.6, 503.0], [53.7, 504.0], [53.8, 504.0], [53.9, 505.0], [54.0, 505.0], [54.1, 506.0], [54.2, 507.0], [54.3, 507.0], [54.4, 508.0], [54.5, 508.0], [54.6, 510.0], [54.7, 511.0], [54.8, 512.0], [54.9, 513.0], [55.0, 513.0], [55.1, 513.0], [55.2, 513.0], [55.3, 514.0], [55.4, 515.0], [55.5, 515.0], [55.6, 516.0], [55.7, 516.0], [55.8, 516.0], [55.9, 516.0], [56.0, 516.0], [56.1, 516.0], [56.2, 517.0], [56.3, 517.0], [56.4, 518.0], [56.5, 519.0], [56.6, 519.0], [56.7, 520.0], [56.8, 520.0], [56.9, 523.0], [57.0, 523.0], [57.1, 524.0], [57.2, 525.0], [57.3, 525.0], [57.4, 526.0], [57.5, 526.0], [57.6, 527.0], [57.7, 527.0], [57.8, 527.0], [57.9, 529.0], [58.0, 529.0], [58.1, 530.0], [58.2, 530.0], [58.3, 532.0], [58.4, 532.0], [58.5, 532.0], [58.6, 533.0], [58.7, 535.0], [58.8, 536.0], [58.9, 536.0], [59.0, 537.0], [59.1, 539.0], [59.2, 539.0], [59.3, 540.0], [59.4, 540.0], [59.5, 541.0], [59.6, 541.0], [59.7, 541.0], [59.8, 542.0], [59.9, 542.0], [60.0, 543.0], [60.1, 543.0], [60.2, 544.0], [60.3, 544.0], [60.4, 545.0], [60.5, 545.0], [60.6, 547.0], [60.7, 547.0], [60.8, 547.0], [60.9, 547.0], [61.0, 547.0], [61.1, 547.0], [61.2, 547.0], [61.3, 547.0], [61.4, 547.0], [61.5, 548.0], [61.6, 548.0], [61.7, 548.0], [61.8, 550.0], [61.9, 550.0], [62.0, 551.0], [62.1, 552.0], [62.2, 552.0], [62.3, 552.0], [62.4, 554.0], [62.5, 556.0], [62.6, 557.0], [62.7, 557.0], [62.8, 557.0], [62.9, 558.0], [63.0, 559.0], [63.1, 559.0], [63.2, 560.0], [63.3, 560.0], [63.4, 560.0], [63.5, 560.0], [63.6, 560.0], [63.7, 560.0], [63.8, 560.0], [63.9, 561.0], [64.0, 561.0], [64.1, 562.0], [64.2, 562.0], [64.3, 562.0], [64.4, 563.0], [64.5, 564.0], [64.6, 564.0], [64.7, 565.0], [64.8, 565.0], [64.9, 566.0], [65.0, 567.0], [65.1, 567.0], [65.2, 568.0], [65.3, 568.0], [65.4, 569.0], [65.5, 569.0], [65.6, 570.0], [65.7, 570.0], [65.8, 570.0], [65.9, 571.0], [66.0, 572.0], [66.1, 572.0], [66.2, 573.0], [66.3, 574.0], [66.4, 575.0], [66.5, 576.0], [66.6, 578.0], [66.7, 578.0], [66.8, 579.0], [66.9, 579.0], [67.0, 580.0], [67.1, 582.0], [67.2, 583.0], [67.3, 584.0], [67.4, 584.0], [67.5, 585.0], [67.6, 585.0], [67.7, 585.0], [67.8, 585.0], [67.9, 587.0], [68.0, 587.0], [68.1, 587.0], [68.2, 588.0], [68.3, 588.0], [68.4, 589.0], [68.5, 589.0], [68.6, 590.0], [68.7, 590.0], [68.8, 591.0], [68.9, 592.0], [69.0, 592.0], [69.1, 594.0], [69.2, 595.0], [69.3, 596.0], [69.4, 596.0], [69.5, 597.0], [69.6, 598.0], [69.7, 600.0], [69.8, 601.0], [69.9, 601.0], [70.0, 601.0], [70.1, 601.0], [70.2, 603.0], [70.3, 604.0], [70.4, 604.0], [70.5, 605.0], [70.6, 605.0], [70.7, 605.0], [70.8, 606.0], [70.9, 606.0], [71.0, 607.0], [71.1, 608.0], [71.2, 608.0], [71.3, 609.0], [71.4, 609.0], [71.5, 610.0], [71.6, 613.0], [71.7, 613.0], [71.8, 614.0], [71.9, 615.0], [72.0, 617.0], [72.1, 618.0], [72.2, 618.0], [72.3, 619.0], [72.4, 619.0], [72.5, 621.0], [72.6, 621.0], [72.7, 621.0], [72.8, 623.0], [72.9, 624.0], [73.0, 624.0], [73.1, 624.0], [73.2, 625.0], [73.3, 626.0], [73.4, 626.0], [73.5, 626.0], [73.6, 628.0], [73.7, 630.0], [73.8, 631.0], [73.9, 631.0], [74.0, 631.0], [74.1, 631.0], [74.2, 632.0], [74.3, 632.0], [74.4, 633.0], [74.5, 633.0], [74.6, 634.0], [74.7, 634.0], [74.8, 635.0], [74.9, 635.0], [75.0, 635.0], [75.1, 636.0], [75.2, 637.0], [75.3, 638.0], [75.4, 641.0], [75.5, 643.0], [75.6, 644.0], [75.7, 645.0], [75.8, 645.0], [75.9, 646.0], [76.0, 646.0], [76.1, 646.0], [76.2, 648.0], [76.3, 648.0], [76.4, 649.0], [76.5, 649.0], [76.6, 649.0], [76.7, 649.0], [76.8, 650.0], [76.9, 650.0], [77.0, 651.0], [77.1, 652.0], [77.2, 652.0], [77.3, 652.0], [77.4, 652.0], [77.5, 653.0], [77.6, 654.0], [77.7, 654.0], [77.8, 655.0], [77.9, 657.0], [78.0, 657.0], [78.1, 658.0], [78.2, 659.0], [78.3, 659.0], [78.4, 661.0], [78.5, 661.0], [78.6, 662.0], [78.7, 664.0], [78.8, 665.0], [78.9, 666.0], [79.0, 667.0], [79.1, 667.0], [79.2, 668.0], [79.3, 669.0], [79.4, 669.0], [79.5, 669.0], [79.6, 670.0], [79.7, 670.0], [79.8, 671.0], [79.9, 672.0], [80.0, 672.0], [80.1, 673.0], [80.2, 674.0], [80.3, 675.0], [80.4, 675.0], [80.5, 679.0], [80.6, 685.0], [80.7, 685.0], [80.8, 686.0], [80.9, 686.0], [81.0, 686.0], [81.1, 687.0], [81.2, 688.0], [81.3, 690.0], [81.4, 691.0], [81.5, 692.0], [81.6, 694.0], [81.7, 694.0], [81.8, 696.0], [81.9, 697.0], [82.0, 701.0], [82.1, 701.0], [82.2, 702.0], [82.3, 706.0], [82.4, 708.0], [82.5, 709.0], [82.6, 711.0], [82.7, 711.0], [82.8, 712.0], [82.9, 713.0], [83.0, 713.0], [83.1, 715.0], [83.2, 716.0], [83.3, 717.0], [83.4, 717.0], [83.5, 720.0], [83.6, 721.0], [83.7, 721.0], [83.8, 722.0], [83.9, 723.0], [84.0, 725.0], [84.1, 726.0], [84.2, 726.0], [84.3, 727.0], [84.4, 728.0], [84.5, 729.0], [84.6, 733.0], [84.7, 733.0], [84.8, 734.0], [84.9, 736.0], [85.0, 736.0], [85.1, 739.0], [85.2, 740.0], [85.3, 740.0], [85.4, 741.0], [85.5, 741.0], [85.6, 743.0], [85.7, 744.0], [85.8, 745.0], [85.9, 746.0], [86.0, 747.0], [86.1, 748.0], [86.2, 748.0], [86.3, 749.0], [86.4, 749.0], [86.5, 751.0], [86.6, 755.0], [86.7, 756.0], [86.8, 757.0], [86.9, 759.0], [87.0, 760.0], [87.1, 762.0], [87.2, 762.0], [87.3, 762.0], [87.4, 766.0], [87.5, 768.0], [87.6, 769.0], [87.7, 769.0], [87.8, 770.0], [87.9, 775.0], [88.0, 779.0], [88.1, 782.0], [88.2, 783.0], [88.3, 784.0], [88.4, 787.0], [88.5, 788.0], [88.6, 789.0], [88.7, 790.0], [88.8, 792.0], [88.9, 792.0], [89.0, 793.0], [89.1, 795.0], [89.2, 796.0], [89.3, 796.0], [89.4, 798.0], [89.5, 804.0], [89.6, 804.0], [89.7, 811.0], [89.8, 811.0], [89.9, 812.0], [90.0, 815.0], [90.1, 818.0], [90.2, 819.0], [90.3, 820.0], [90.4, 822.0], [90.5, 824.0], [90.6, 825.0], [90.7, 825.0], [90.8, 828.0], [90.9, 829.0], [91.0, 829.0], [91.1, 834.0], [91.2, 836.0], [91.3, 837.0], [91.4, 839.0], [91.5, 847.0], [91.6, 848.0], [91.7, 850.0], [91.8, 851.0], [91.9, 853.0], [92.0, 856.0], [92.1, 857.0], [92.2, 858.0], [92.3, 860.0], [92.4, 862.0], [92.5, 862.0], [92.6, 863.0], [92.7, 863.0], [92.8, 869.0], [92.9, 871.0], [93.0, 874.0], [93.1, 876.0], [93.2, 879.0], [93.3, 885.0], [93.4, 886.0], [93.5, 891.0], [93.6, 892.0], [93.7, 892.0], [93.8, 892.0], [93.9, 894.0], [94.0, 898.0], [94.1, 902.0], [94.2, 905.0], [94.3, 905.0], [94.4, 909.0], [94.5, 910.0], [94.6, 912.0], [94.7, 916.0], [94.8, 918.0], [94.9, 920.0], [95.0, 924.0], [95.1, 927.0], [95.2, 930.0], [95.3, 939.0], [95.4, 939.0], [95.5, 941.0], [95.6, 943.0], [95.7, 946.0], [95.8, 948.0], [95.9, 948.0], [96.0, 955.0], [96.1, 979.0], [96.2, 980.0], [96.3, 983.0], [96.4, 991.0], [96.5, 991.0], [96.6, 1000.0], [96.7, 1008.0], [96.8, 1014.0], [96.9, 1024.0], [97.0, 1026.0], [97.1, 1030.0], [97.2, 1031.0], [97.3, 1036.0], [97.4, 1036.0], [97.5, 1039.0], [97.6, 1040.0], [97.7, 1041.0], [97.8, 1041.0], [97.9, 1048.0], [98.0, 1088.0], [98.1, 1106.0], [98.2, 1106.0], [98.3, 1113.0], [98.4, 1119.0], [98.5, 1119.0], [98.6, 1126.0], [98.7, 1129.0], [98.8, 1131.0], [98.9, 1185.0], [99.0, 1186.0], [99.1, 1195.0], [99.2, 1209.0], [99.3, 1215.0], [99.4, 1217.0], [99.5, 1261.0], [99.6, 1265.0], [99.7, 1282.0], [99.8, 1336.0], [99.9, 1420.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 200.0, "series": [{"data": [[600.0, 124.0], [700.0, 75.0], [200.0, 124.0], [800.0, 46.0], [900.0, 25.0], [1000.0, 15.0], [1100.0, 11.0], [300.0, 200.0], [1200.0, 6.0], [1300.0, 1.0], [1400.0, 1.0], [100.0, 9.0], [400.0, 198.0], [500.0, 165.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 467.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 533.0, "series": [{"data": [[0.0, 533.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 467.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71492444E12, "maxY": 1.0, "series": [{"data": [[1.71492462E12, 1.0], [1.71492444E12, 1.0], [1.71492492E12, 1.0], [1.71492474E12, 1.0], [1.71492456E12, 1.0], [1.71492486E12, 1.0], [1.71492468E12, 1.0], [1.7149245E12, 1.0], [1.71492498E12, 1.0], [1.7149248E12, 1.0]], "isOverall": false, "label": "1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71492498E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 518.877, "minX": 1.0, "maxY": 518.877, "series": [{"data": [[1.0, 518.877]], "isOverall": false, "label": "cogtiff", "isController": false}, {"data": [[1.0, 518.877]], "isOverall": false, "label": "cogtiff-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.71492444E12, "maxY": 2293107.1166666667, "series": [{"data": [[1.71492462E12, 2270338.3333333335], [1.71492444E12, 922308.65], [1.71492492E12, 2024780.65], [1.71492474E12, 2227283.05], [1.71492456E12, 2293107.1166666667], [1.71492486E12, 2092154.5666666667], [1.71492468E12, 2130240.0], [1.7149245E12, 2255062.033333333], [1.71492498E12, 434539.5833333333], [1.7149248E12, 2116174.0166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71492462E12, 0.0], [1.71492444E12, 0.0], [1.71492492E12, 0.0], [1.71492474E12, 0.0], [1.71492456E12, 0.0], [1.71492486E12, 0.0], [1.71492468E12, 0.0], [1.7149245E12, 0.0], [1.71492498E12, 0.0], [1.7149248E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71492498E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 466.3515625, "minX": 1.71492444E12, "maxY": 610.1666666666665, "series": [{"data": [[1.71492462E12, 466.3515625], [1.71492444E12, 550.0], [1.71492492E12, 570.5673076923074], [1.71492474E12, 513.0256410256407], [1.71492456E12, 472.1259842519686], [1.71492486E12, 534.1238938053096], [1.71492468E12, 530.663716814159], [1.7149245E12, 520.362068965517], [1.71492498E12, 610.1666666666665], [1.7149248E12, 528.8749999999999]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71492498E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 205.7265625, "minX": 1.71492444E12, "maxY": 294.83333333333337, "series": [{"data": [[1.71492462E12, 205.7265625], [1.71492444E12, 227.34782608695656], [1.71492492E12, 253.99999999999994], [1.71492474E12, 242.6239316239316], [1.71492456E12, 208.1338582677165], [1.71492486E12, 249.93805309734518], [1.71492468E12, 238.575221238938], [1.7149245E12, 223.6120689655173], [1.71492498E12, 294.83333333333337], [1.7149248E12, 259.1160714285715]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71492498E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71492444E12, "maxY": 4.9E-324, "series": [{"data": [[1.71492462E12, 0.0], [1.71492444E12, 0.0], [1.71492492E12, 0.0], [1.71492474E12, 0.0], [1.71492456E12, 0.0], [1.71492486E12, 0.0], [1.71492468E12, 0.0], [1.7149245E12, 0.0], [1.71492498E12, 0.0], [1.7149248E12, 0.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71492498E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.71492444E12, "maxY": 1420.0, "series": [{"data": [[1.71492462E12, 1282.0], [1.71492444E12, 1265.0], [1.71492492E12, 1186.0], [1.71492474E12, 1261.0], [1.71492456E12, 1215.0], [1.71492486E12, 1217.0], [1.71492468E12, 1420.0], [1.7149245E12, 1209.0], [1.71492498E12, 1336.0], [1.7149248E12, 1119.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71492462E12, 187.0], [1.71492444E12, 177.0], [1.71492492E12, 222.0], [1.71492474E12, 200.0], [1.71492456E12, 186.0], [1.71492486E12, 186.0], [1.71492468E12, 195.0], [1.7149245E12, 202.0], [1.71492498E12, 286.0], [1.7149248E12, 209.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71492462E12, 708.9000000000001], [1.71492444E12, 932.7], [1.71492492E12, 886.5], [1.71492474E12, 825.0], [1.71492456E12, 714.0], [1.71492486E12, 835.8000000000002], [1.71492468E12, 816.4000000000001], [1.7149245E12, 851.6], [1.71492498E12, 998.5], [1.7149248E12, 791.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71492462E12, 1236.759999999999], [1.71492444E12, 1265.0], [1.71492492E12, 1178.7500000000005], [1.71492474E12, 1247.3199999999995], [1.71492456E12, 1168.2399999999998], [1.71492486E12, 1203.28], [1.71492468E12, 1388.5], [1.7149245E12, 1195.7399999999998], [1.71492498E12, 1336.0], [1.7149248E12, 1118.22]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71492462E12, 445.0], [1.71492444E12, 449.5], [1.71492492E12, 536.0], [1.71492474E12, 487.0], [1.71492456E12, 443.0], [1.71492486E12, 523.0], [1.71492468E12, 513.0], [1.7149245E12, 450.0], [1.71492498E12, 606.5], [1.7149248E12, 489.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71492462E12, 789.6499999999999], [1.71492444E12, 1120.95], [1.71492492E12, 1019.5], [1.71492474E12, 946.5999999999998], [1.71492456E12, 866.1999999999999], [1.71492486E12, 914.4], [1.71492468E12, 911.8], [1.7149245E12, 981.6499999999999], [1.71492498E12, 1255.5], [1.7149248E12, 891.3999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71492498E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 674.0, "series": [{"data": [[2.0, 503.5], [1.0, 674.0], [4.0, 306.0], [3.0, 378.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 175.5, "minX": 1.0, "maxY": 250.0, "series": [{"data": [[2.0, 218.0], [1.0, 250.0], [4.0, 175.5], [3.0, 185.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.71492444E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71492462E12, 2.1333333333333333], [1.71492444E12, 0.7833333333333333], [1.71492492E12, 1.7333333333333334], [1.71492474E12, 1.95], [1.71492456E12, 2.1166666666666667], [1.71492486E12, 1.8833333333333333], [1.71492468E12, 1.8833333333333333], [1.7149245E12, 1.9333333333333333], [1.71492498E12, 0.38333333333333336], [1.7149248E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71492498E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71492444E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71492462E12, 2.1333333333333333], [1.71492444E12, 0.7666666666666667], [1.71492492E12, 1.7333333333333334], [1.71492474E12, 1.95], [1.71492456E12, 2.1166666666666667], [1.71492486E12, 1.8833333333333333], [1.71492468E12, 1.8833333333333333], [1.7149245E12, 1.9333333333333333], [1.71492498E12, 0.4], [1.7149248E12, 1.8666666666666667]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71492498E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71492444E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71492462E12, 2.1333333333333333], [1.71492444E12, 0.7666666666666667], [1.71492492E12, 1.7333333333333334], [1.71492474E12, 1.95], [1.71492456E12, 2.1166666666666667], [1.71492486E12, 1.8833333333333333], [1.71492468E12, 1.8833333333333333], [1.7149245E12, 1.9333333333333333], [1.71492498E12, 0.4], [1.7149248E12, 1.8666666666666667]], "isOverall": false, "label": "cogtiff-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71492498E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.71492444E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71492462E12, 2.1333333333333333], [1.71492444E12, 0.7666666666666667], [1.71492492E12, 1.7333333333333334], [1.71492474E12, 1.95], [1.71492456E12, 2.1166666666666667], [1.71492486E12, 1.8833333333333333], [1.71492468E12, 1.8833333333333333], [1.7149245E12, 1.9333333333333333], [1.71492498E12, 0.4], [1.7149248E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71492498E12, "title": "Total Transactions Per Second"}},
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

