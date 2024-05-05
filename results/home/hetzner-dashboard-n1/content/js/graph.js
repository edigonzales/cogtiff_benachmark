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
        data: {"result": {"minY": 157.0, "minX": 0.0, "maxY": 689.0, "series": [{"data": [[0.0, 157.0], [0.1, 159.0], [0.2, 159.0], [0.3, 159.0], [0.4, 161.0], [0.5, 162.0], [0.6, 166.0], [0.7, 167.0], [0.8, 169.0], [0.9, 172.0], [1.0, 172.0], [1.1, 172.0], [1.2, 173.0], [1.3, 174.0], [1.4, 174.0], [1.5, 175.0], [1.6, 175.0], [1.7, 175.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 176.0], [2.2, 177.0], [2.3, 177.0], [2.4, 177.0], [2.5, 178.0], [2.6, 178.0], [2.7, 179.0], [2.8, 179.0], [2.9, 179.0], [3.0, 180.0], [3.1, 180.0], [3.2, 180.0], [3.3, 180.0], [3.4, 180.0], [3.5, 180.0], [3.6, 181.0], [3.7, 181.0], [3.8, 181.0], [3.9, 181.0], [4.0, 182.0], [4.1, 182.0], [4.2, 182.0], [4.3, 182.0], [4.4, 183.0], [4.5, 183.0], [4.6, 183.0], [4.7, 183.0], [4.8, 183.0], [4.9, 184.0], [5.0, 184.0], [5.1, 184.0], [5.2, 184.0], [5.3, 184.0], [5.4, 185.0], [5.5, 185.0], [5.6, 186.0], [5.7, 186.0], [5.8, 186.0], [5.9, 186.0], [6.0, 186.0], [6.1, 186.0], [6.2, 187.0], [6.3, 187.0], [6.4, 188.0], [6.5, 189.0], [6.6, 189.0], [6.7, 189.0], [6.8, 189.0], [6.9, 190.0], [7.0, 190.0], [7.1, 190.0], [7.2, 190.0], [7.3, 190.0], [7.4, 191.0], [7.5, 191.0], [7.6, 191.0], [7.7, 191.0], [7.8, 191.0], [7.9, 191.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 192.0], [8.5, 192.0], [8.6, 192.0], [8.7, 192.0], [8.8, 192.0], [8.9, 192.0], [9.0, 193.0], [9.1, 193.0], [9.2, 193.0], [9.3, 194.0], [9.4, 194.0], [9.5, 194.0], [9.6, 194.0], [9.7, 194.0], [9.8, 195.0], [9.9, 195.0], [10.0, 195.0], [10.1, 195.0], [10.2, 195.0], [10.3, 195.0], [10.4, 195.0], [10.5, 196.0], [10.6, 196.0], [10.7, 196.0], [10.8, 196.0], [10.9, 197.0], [11.0, 198.0], [11.1, 199.0], [11.2, 199.0], [11.3, 199.0], [11.4, 199.0], [11.5, 200.0], [11.6, 200.0], [11.7, 200.0], [11.8, 200.0], [11.9, 200.0], [12.0, 200.0], [12.1, 200.0], [12.2, 200.0], [12.3, 201.0], [12.4, 201.0], [12.5, 201.0], [12.6, 201.0], [12.7, 201.0], [12.8, 201.0], [12.9, 201.0], [13.0, 202.0], [13.1, 202.0], [13.2, 202.0], [13.3, 202.0], [13.4, 202.0], [13.5, 203.0], [13.6, 203.0], [13.7, 203.0], [13.8, 203.0], [13.9, 203.0], [14.0, 203.0], [14.1, 204.0], [14.2, 204.0], [14.3, 204.0], [14.4, 204.0], [14.5, 204.0], [14.6, 205.0], [14.7, 205.0], [14.8, 205.0], [14.9, 205.0], [15.0, 205.0], [15.1, 206.0], [15.2, 206.0], [15.3, 207.0], [15.4, 207.0], [15.5, 207.0], [15.6, 207.0], [15.7, 208.0], [15.8, 208.0], [15.9, 208.0], [16.0, 208.0], [16.1, 208.0], [16.2, 208.0], [16.3, 208.0], [16.4, 208.0], [16.5, 208.0], [16.6, 209.0], [16.7, 209.0], [16.8, 209.0], [16.9, 209.0], [17.0, 209.0], [17.1, 209.0], [17.2, 210.0], [17.3, 210.0], [17.4, 210.0], [17.5, 210.0], [17.6, 210.0], [17.7, 210.0], [17.8, 211.0], [17.9, 211.0], [18.0, 211.0], [18.1, 212.0], [18.2, 212.0], [18.3, 212.0], [18.4, 212.0], [18.5, 212.0], [18.6, 212.0], [18.7, 212.0], [18.8, 213.0], [18.9, 213.0], [19.0, 213.0], [19.1, 213.0], [19.2, 213.0], [19.3, 213.0], [19.4, 213.0], [19.5, 213.0], [19.6, 213.0], [19.7, 214.0], [19.8, 214.0], [19.9, 214.0], [20.0, 215.0], [20.1, 215.0], [20.2, 215.0], [20.3, 215.0], [20.4, 215.0], [20.5, 216.0], [20.6, 216.0], [20.7, 216.0], [20.8, 217.0], [20.9, 217.0], [21.0, 217.0], [21.1, 217.0], [21.2, 217.0], [21.3, 217.0], [21.4, 217.0], [21.5, 217.0], [21.6, 217.0], [21.7, 217.0], [21.8, 217.0], [21.9, 217.0], [22.0, 218.0], [22.1, 218.0], [22.2, 218.0], [22.3, 218.0], [22.4, 218.0], [22.5, 219.0], [22.6, 219.0], [22.7, 219.0], [22.8, 220.0], [22.9, 220.0], [23.0, 220.0], [23.1, 220.0], [23.2, 220.0], [23.3, 221.0], [23.4, 221.0], [23.5, 221.0], [23.6, 221.0], [23.7, 221.0], [23.8, 222.0], [23.9, 222.0], [24.0, 222.0], [24.1, 222.0], [24.2, 222.0], [24.3, 223.0], [24.4, 223.0], [24.5, 223.0], [24.6, 223.0], [24.7, 223.0], [24.8, 224.0], [24.9, 224.0], [25.0, 224.0], [25.1, 224.0], [25.2, 224.0], [25.3, 224.0], [25.4, 225.0], [25.5, 225.0], [25.6, 225.0], [25.7, 225.0], [25.8, 225.0], [25.9, 225.0], [26.0, 225.0], [26.1, 226.0], [26.2, 226.0], [26.3, 227.0], [26.4, 227.0], [26.5, 227.0], [26.6, 228.0], [26.7, 228.0], [26.8, 228.0], [26.9, 228.0], [27.0, 228.0], [27.1, 228.0], [27.2, 229.0], [27.3, 229.0], [27.4, 229.0], [27.5, 229.0], [27.6, 229.0], [27.7, 229.0], [27.8, 229.0], [27.9, 229.0], [28.0, 230.0], [28.1, 230.0], [28.2, 230.0], [28.3, 230.0], [28.4, 230.0], [28.5, 230.0], [28.6, 230.0], [28.7, 230.0], [28.8, 230.0], [28.9, 230.0], [29.0, 231.0], [29.1, 231.0], [29.2, 231.0], [29.3, 231.0], [29.4, 231.0], [29.5, 232.0], [29.6, 232.0], [29.7, 232.0], [29.8, 232.0], [29.9, 232.0], [30.0, 232.0], [30.1, 232.0], [30.2, 232.0], [30.3, 232.0], [30.4, 233.0], [30.5, 233.0], [30.6, 233.0], [30.7, 233.0], [30.8, 233.0], [30.9, 233.0], [31.0, 233.0], [31.1, 235.0], [31.2, 235.0], [31.3, 235.0], [31.4, 236.0], [31.5, 236.0], [31.6, 236.0], [31.7, 236.0], [31.8, 236.0], [31.9, 236.0], [32.0, 236.0], [32.1, 237.0], [32.2, 237.0], [32.3, 237.0], [32.4, 237.0], [32.5, 237.0], [32.6, 237.0], [32.7, 237.0], [32.8, 237.0], [32.9, 237.0], [33.0, 237.0], [33.1, 238.0], [33.2, 238.0], [33.3, 238.0], [33.4, 238.0], [33.5, 239.0], [33.6, 239.0], [33.7, 239.0], [33.8, 239.0], [33.9, 240.0], [34.0, 240.0], [34.1, 240.0], [34.2, 240.0], [34.3, 240.0], [34.4, 240.0], [34.5, 240.0], [34.6, 240.0], [34.7, 241.0], [34.8, 241.0], [34.9, 241.0], [35.0, 241.0], [35.1, 241.0], [35.2, 241.0], [35.3, 241.0], [35.4, 241.0], [35.5, 242.0], [35.6, 242.0], [35.7, 242.0], [35.8, 242.0], [35.9, 242.0], [36.0, 243.0], [36.1, 243.0], [36.2, 243.0], [36.3, 244.0], [36.4, 244.0], [36.5, 244.0], [36.6, 244.0], [36.7, 245.0], [36.8, 245.0], [36.9, 245.0], [37.0, 245.0], [37.1, 245.0], [37.2, 245.0], [37.3, 245.0], [37.4, 246.0], [37.5, 246.0], [37.6, 246.0], [37.7, 246.0], [37.8, 246.0], [37.9, 246.0], [38.0, 247.0], [38.1, 247.0], [38.2, 247.0], [38.3, 247.0], [38.4, 247.0], [38.5, 248.0], [38.6, 248.0], [38.7, 248.0], [38.8, 249.0], [38.9, 249.0], [39.0, 249.0], [39.1, 249.0], [39.2, 250.0], [39.3, 250.0], [39.4, 250.0], [39.5, 250.0], [39.6, 251.0], [39.7, 251.0], [39.8, 251.0], [39.9, 251.0], [40.0, 252.0], [40.1, 252.0], [40.2, 252.0], [40.3, 252.0], [40.4, 252.0], [40.5, 252.0], [40.6, 253.0], [40.7, 253.0], [40.8, 253.0], [40.9, 253.0], [41.0, 253.0], [41.1, 253.0], [41.2, 253.0], [41.3, 253.0], [41.4, 253.0], [41.5, 254.0], [41.6, 254.0], [41.7, 254.0], [41.8, 254.0], [41.9, 255.0], [42.0, 255.0], [42.1, 255.0], [42.2, 255.0], [42.3, 256.0], [42.4, 256.0], [42.5, 256.0], [42.6, 256.0], [42.7, 256.0], [42.8, 256.0], [42.9, 256.0], [43.0, 256.0], [43.1, 257.0], [43.2, 257.0], [43.3, 257.0], [43.4, 258.0], [43.5, 258.0], [43.6, 258.0], [43.7, 258.0], [43.8, 258.0], [43.9, 258.0], [44.0, 258.0], [44.1, 258.0], [44.2, 259.0], [44.3, 259.0], [44.4, 259.0], [44.5, 259.0], [44.6, 260.0], [44.7, 260.0], [44.8, 260.0], [44.9, 260.0], [45.0, 260.0], [45.1, 260.0], [45.2, 260.0], [45.3, 260.0], [45.4, 261.0], [45.5, 261.0], [45.6, 261.0], [45.7, 261.0], [45.8, 261.0], [45.9, 262.0], [46.0, 262.0], [46.1, 263.0], [46.2, 263.0], [46.3, 263.0], [46.4, 263.0], [46.5, 263.0], [46.6, 263.0], [46.7, 263.0], [46.8, 264.0], [46.9, 264.0], [47.0, 264.0], [47.1, 264.0], [47.2, 264.0], [47.3, 264.0], [47.4, 264.0], [47.5, 265.0], [47.6, 265.0], [47.7, 265.0], [47.8, 265.0], [47.9, 265.0], [48.0, 265.0], [48.1, 266.0], [48.2, 266.0], [48.3, 266.0], [48.4, 266.0], [48.5, 266.0], [48.6, 266.0], [48.7, 267.0], [48.8, 267.0], [48.9, 267.0], [49.0, 267.0], [49.1, 267.0], [49.2, 267.0], [49.3, 268.0], [49.4, 268.0], [49.5, 268.0], [49.6, 268.0], [49.7, 269.0], [49.8, 269.0], [49.9, 269.0], [50.0, 269.0], [50.1, 269.0], [50.2, 269.0], [50.3, 269.0], [50.4, 269.0], [50.5, 270.0], [50.6, 270.0], [50.7, 270.0], [50.8, 270.0], [50.9, 270.0], [51.0, 270.0], [51.1, 270.0], [51.2, 271.0], [51.3, 271.0], [51.4, 271.0], [51.5, 271.0], [51.6, 271.0], [51.7, 271.0], [51.8, 272.0], [51.9, 272.0], [52.0, 273.0], [52.1, 273.0], [52.2, 273.0], [52.3, 273.0], [52.4, 273.0], [52.5, 273.0], [52.6, 273.0], [52.7, 273.0], [52.8, 273.0], [52.9, 273.0], [53.0, 274.0], [53.1, 274.0], [53.2, 274.0], [53.3, 274.0], [53.4, 275.0], [53.5, 275.0], [53.6, 275.0], [53.7, 275.0], [53.8, 275.0], [53.9, 275.0], [54.0, 276.0], [54.1, 276.0], [54.2, 276.0], [54.3, 276.0], [54.4, 277.0], [54.5, 277.0], [54.6, 277.0], [54.7, 277.0], [54.8, 277.0], [54.9, 277.0], [55.0, 277.0], [55.1, 277.0], [55.2, 278.0], [55.3, 278.0], [55.4, 278.0], [55.5, 278.0], [55.6, 278.0], [55.7, 278.0], [55.8, 278.0], [55.9, 278.0], [56.0, 279.0], [56.1, 279.0], [56.2, 279.0], [56.3, 279.0], [56.4, 279.0], [56.5, 279.0], [56.6, 280.0], [56.7, 280.0], [56.8, 280.0], [56.9, 281.0], [57.0, 281.0], [57.1, 281.0], [57.2, 281.0], [57.3, 281.0], [57.4, 281.0], [57.5, 281.0], [57.6, 282.0], [57.7, 282.0], [57.8, 282.0], [57.9, 282.0], [58.0, 282.0], [58.1, 282.0], [58.2, 282.0], [58.3, 283.0], [58.4, 283.0], [58.5, 283.0], [58.6, 283.0], [58.7, 283.0], [58.8, 284.0], [58.9, 284.0], [59.0, 284.0], [59.1, 284.0], [59.2, 284.0], [59.3, 284.0], [59.4, 284.0], [59.5, 284.0], [59.6, 285.0], [59.7, 285.0], [59.8, 285.0], [59.9, 285.0], [60.0, 285.0], [60.1, 286.0], [60.2, 286.0], [60.3, 287.0], [60.4, 287.0], [60.5, 288.0], [60.6, 288.0], [60.7, 288.0], [60.8, 288.0], [60.9, 288.0], [61.0, 288.0], [61.1, 288.0], [61.2, 288.0], [61.3, 289.0], [61.4, 289.0], [61.5, 290.0], [61.6, 290.0], [61.7, 290.0], [61.8, 290.0], [61.9, 290.0], [62.0, 290.0], [62.1, 291.0], [62.2, 291.0], [62.3, 291.0], [62.4, 291.0], [62.5, 292.0], [62.6, 292.0], [62.7, 292.0], [62.8, 292.0], [62.9, 292.0], [63.0, 292.0], [63.1, 292.0], [63.2, 292.0], [63.3, 293.0], [63.4, 293.0], [63.5, 293.0], [63.6, 293.0], [63.7, 293.0], [63.8, 294.0], [63.9, 294.0], [64.0, 294.0], [64.1, 294.0], [64.2, 294.0], [64.3, 295.0], [64.4, 295.0], [64.5, 295.0], [64.6, 295.0], [64.7, 296.0], [64.8, 296.0], [64.9, 296.0], [65.0, 296.0], [65.1, 296.0], [65.2, 296.0], [65.3, 296.0], [65.4, 297.0], [65.5, 298.0], [65.6, 298.0], [65.7, 298.0], [65.8, 298.0], [65.9, 298.0], [66.0, 298.0], [66.1, 298.0], [66.2, 298.0], [66.3, 298.0], [66.4, 298.0], [66.5, 299.0], [66.6, 299.0], [66.7, 299.0], [66.8, 300.0], [66.9, 300.0], [67.0, 300.0], [67.1, 300.0], [67.2, 300.0], [67.3, 300.0], [67.4, 301.0], [67.5, 301.0], [67.6, 301.0], [67.7, 301.0], [67.8, 302.0], [67.9, 302.0], [68.0, 302.0], [68.1, 302.0], [68.2, 303.0], [68.3, 304.0], [68.4, 304.0], [68.5, 305.0], [68.6, 305.0], [68.7, 305.0], [68.8, 305.0], [68.9, 305.0], [69.0, 306.0], [69.1, 306.0], [69.2, 306.0], [69.3, 307.0], [69.4, 307.0], [69.5, 308.0], [69.6, 308.0], [69.7, 309.0], [69.8, 309.0], [69.9, 309.0], [70.0, 310.0], [70.1, 311.0], [70.2, 311.0], [70.3, 311.0], [70.4, 312.0], [70.5, 312.0], [70.6, 313.0], [70.7, 313.0], [70.8, 314.0], [70.9, 315.0], [71.0, 315.0], [71.1, 315.0], [71.2, 316.0], [71.3, 316.0], [71.4, 316.0], [71.5, 316.0], [71.6, 317.0], [71.7, 317.0], [71.8, 317.0], [71.9, 318.0], [72.0, 318.0], [72.1, 318.0], [72.2, 319.0], [72.3, 319.0], [72.4, 319.0], [72.5, 319.0], [72.6, 319.0], [72.7, 319.0], [72.8, 320.0], [72.9, 320.0], [73.0, 320.0], [73.1, 321.0], [73.2, 321.0], [73.3, 321.0], [73.4, 322.0], [73.5, 322.0], [73.6, 322.0], [73.7, 322.0], [73.8, 323.0], [73.9, 323.0], [74.0, 323.0], [74.1, 325.0], [74.2, 325.0], [74.3, 327.0], [74.4, 327.0], [74.5, 327.0], [74.6, 327.0], [74.7, 328.0], [74.8, 329.0], [74.9, 329.0], [75.0, 329.0], [75.1, 329.0], [75.2, 329.0], [75.3, 330.0], [75.4, 330.0], [75.5, 330.0], [75.6, 330.0], [75.7, 330.0], [75.8, 331.0], [75.9, 331.0], [76.0, 332.0], [76.1, 332.0], [76.2, 332.0], [76.3, 332.0], [76.4, 332.0], [76.5, 333.0], [76.6, 334.0], [76.7, 334.0], [76.8, 335.0], [76.9, 336.0], [77.0, 337.0], [77.1, 337.0], [77.2, 337.0], [77.3, 338.0], [77.4, 338.0], [77.5, 338.0], [77.6, 338.0], [77.7, 338.0], [77.8, 339.0], [77.9, 339.0], [78.0, 340.0], [78.1, 340.0], [78.2, 340.0], [78.3, 340.0], [78.4, 341.0], [78.5, 341.0], [78.6, 341.0], [78.7, 341.0], [78.8, 341.0], [78.9, 341.0], [79.0, 342.0], [79.1, 342.0], [79.2, 342.0], [79.3, 342.0], [79.4, 342.0], [79.5, 342.0], [79.6, 342.0], [79.7, 343.0], [79.8, 344.0], [79.9, 344.0], [80.0, 344.0], [80.1, 344.0], [80.2, 345.0], [80.3, 345.0], [80.4, 345.0], [80.5, 345.0], [80.6, 345.0], [80.7, 346.0], [80.8, 346.0], [80.9, 346.0], [81.0, 346.0], [81.1, 346.0], [81.2, 346.0], [81.3, 347.0], [81.4, 347.0], [81.5, 348.0], [81.6, 348.0], [81.7, 348.0], [81.8, 348.0], [81.9, 349.0], [82.0, 349.0], [82.1, 349.0], [82.2, 349.0], [82.3, 349.0], [82.4, 350.0], [82.5, 350.0], [82.6, 350.0], [82.7, 350.0], [82.8, 351.0], [82.9, 351.0], [83.0, 351.0], [83.1, 351.0], [83.2, 352.0], [83.3, 352.0], [83.4, 352.0], [83.5, 353.0], [83.6, 353.0], [83.7, 353.0], [83.8, 353.0], [83.9, 354.0], [84.0, 354.0], [84.1, 354.0], [84.2, 355.0], [84.3, 355.0], [84.4, 355.0], [84.5, 355.0], [84.6, 355.0], [84.7, 356.0], [84.8, 356.0], [84.9, 356.0], [85.0, 356.0], [85.1, 357.0], [85.2, 357.0], [85.3, 357.0], [85.4, 358.0], [85.5, 358.0], [85.6, 358.0], [85.7, 358.0], [85.8, 358.0], [85.9, 358.0], [86.0, 358.0], [86.1, 358.0], [86.2, 359.0], [86.3, 359.0], [86.4, 359.0], [86.5, 360.0], [86.6, 360.0], [86.7, 360.0], [86.8, 360.0], [86.9, 360.0], [87.0, 360.0], [87.1, 360.0], [87.2, 361.0], [87.3, 361.0], [87.4, 361.0], [87.5, 361.0], [87.6, 362.0], [87.7, 362.0], [87.8, 362.0], [87.9, 362.0], [88.0, 362.0], [88.1, 363.0], [88.2, 363.0], [88.3, 363.0], [88.4, 363.0], [88.5, 363.0], [88.6, 364.0], [88.7, 364.0], [88.8, 364.0], [88.9, 364.0], [89.0, 364.0], [89.1, 365.0], [89.2, 365.0], [89.3, 365.0], [89.4, 365.0], [89.5, 365.0], [89.6, 365.0], [89.7, 365.0], [89.8, 365.0], [89.9, 366.0], [90.0, 366.0], [90.1, 366.0], [90.2, 366.0], [90.3, 367.0], [90.4, 367.0], [90.5, 367.0], [90.6, 367.0], [90.7, 368.0], [90.8, 368.0], [90.9, 368.0], [91.0, 368.0], [91.1, 368.0], [91.2, 369.0], [91.3, 369.0], [91.4, 369.0], [91.5, 369.0], [91.6, 369.0], [91.7, 369.0], [91.8, 370.0], [91.9, 370.0], [92.0, 371.0], [92.1, 371.0], [92.2, 372.0], [92.3, 372.0], [92.4, 372.0], [92.5, 372.0], [92.6, 372.0], [92.7, 372.0], [92.8, 372.0], [92.9, 373.0], [93.0, 373.0], [93.1, 373.0], [93.2, 373.0], [93.3, 373.0], [93.4, 373.0], [93.5, 374.0], [93.6, 374.0], [93.7, 375.0], [93.8, 375.0], [93.9, 375.0], [94.0, 375.0], [94.1, 376.0], [94.2, 376.0], [94.3, 377.0], [94.4, 377.0], [94.5, 378.0], [94.6, 378.0], [94.7, 379.0], [94.8, 379.0], [94.9, 379.0], [95.0, 379.0], [95.1, 379.0], [95.2, 380.0], [95.3, 381.0], [95.4, 381.0], [95.5, 381.0], [95.6, 383.0], [95.7, 384.0], [95.8, 384.0], [95.9, 385.0], [96.0, 385.0], [96.1, 386.0], [96.2, 387.0], [96.3, 387.0], [96.4, 387.0], [96.5, 387.0], [96.6, 389.0], [96.7, 390.0], [96.8, 390.0], [96.9, 391.0], [97.0, 391.0], [97.1, 393.0], [97.2, 394.0], [97.3, 396.0], [97.4, 396.0], [97.5, 397.0], [97.6, 398.0], [97.7, 402.0], [97.8, 402.0], [97.9, 405.0], [98.0, 405.0], [98.1, 405.0], [98.2, 408.0], [98.3, 414.0], [98.4, 417.0], [98.5, 418.0], [98.6, 424.0], [98.7, 453.0], [98.8, 482.0], [98.9, 502.0], [99.0, 510.0], [99.1, 528.0], [99.2, 565.0], [99.3, 581.0], [99.4, 596.0], [99.5, 596.0], [99.6, 598.0], [99.7, 664.0], [99.8, 664.0], [99.9, 689.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 100.0, "maxY": 553.0, "series": [{"data": [[300.0, 309.0], [600.0, 3.0], [400.0, 12.0], [200.0, 553.0], [100.0, 115.0], [500.0, 8.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 989.0, "series": [{"data": [[0.0, 989.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71492396E12, "maxY": 1.0, "series": [{"data": [[1.71492414E12, 1.0], [1.71492396E12, 1.0], [1.71492408E12, 1.0], [1.7149242E12, 1.0], [1.71492402E12, 1.0]], "isOverall": false, "label": "1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 277.6329999999995, "minX": 1.0, "maxY": 277.6329999999995, "series": [{"data": [[1.0, 277.6329999999995]], "isOverall": false, "label": "cogtiff", "isController": false}, {"data": [[1.0, 277.6329999999995]], "isOverall": false, "label": "cogtiff-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.71492396E12, "maxY": 4107228.0833333335, "series": [{"data": [[1.71492414E12, 4088745.9833333334], [1.71492396E12, 2652355.45], [1.71492408E12, 3981848.783333333], [1.7149242E12, 4107228.0833333335], [1.71492402E12, 3933143.033333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71492414E12, 0.0], [1.71492396E12, 0.0], [1.71492408E12, 0.0], [1.7149242E12, 0.0], [1.71492402E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 272.53181818181827, "minX": 1.71492396E12, "maxY": 284.5703703703704, "series": [{"data": [[1.71492414E12, 272.53181818181827], [1.71492396E12, 284.5703703703704], [1.71492408E12, 277.9906976744187], [1.7149242E12, 274.8663594470046], [1.71492402E12, 280.9624413145538]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 80.43778801843324, "minX": 1.71492396E12, "maxY": 83.56296296296296, "series": [{"data": [[1.71492414E12, 81.40909090909102], [1.71492396E12, 83.56296296296296], [1.71492408E12, 82.97209302325585], [1.7149242E12, 80.43778801843324], [1.71492402E12, 81.52582159624413]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71492396E12, "maxY": 4.9E-324, "series": [{"data": [[1.71492414E12, 0.0], [1.71492396E12, 0.0], [1.71492408E12, 0.0], [1.7149242E12, 0.0], [1.71492402E12, 0.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 157.0, "minX": 1.71492396E12, "maxY": 689.0, "series": [{"data": [[1.71492414E12, 405.0], [1.71492396E12, 689.0], [1.71492408E12, 664.0], [1.7149242E12, 598.0], [1.71492402E12, 664.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71492414E12, 157.0], [1.71492396E12, 161.0], [1.71492408E12, 166.0], [1.7149242E12, 159.0], [1.71492402E12, 159.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71492414E12, 364.9], [1.71492396E12, 368.4], [1.71492408E12, 363.0], [1.7149242E12, 367.20000000000005], [1.71492402E12, 368.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71492414E12, 402.0599999999999], [1.71492396E12, 586.7599999999961], [1.71492408E12, 572.5200000000002], [1.7149242E12, 493.17999999999967], [1.71492402E12, 596.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71492414E12, 269.0], [1.71492396E12, 273.0], [1.71492408E12, 266.0], [1.7149242E12, 261.0], [1.71492402E12, 270.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71492414E12, 373.0], [1.71492396E12, 383.59999999999997], [1.71492408E12, 378.59999999999997], [1.7149242E12, 379.2], [1.71492402E12, 387.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 223.5, "minX": 2.0, "maxY": 368.5, "series": [{"data": [[2.0, 368.5], [4.0, 256.0], [5.0, 223.5], [3.0, 301.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 81.0, "minX": 2.0, "maxY": 81.0, "series": [{"data": [[2.0, 81.0], [4.0, 81.0], [5.0, 81.0], [3.0, 81.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.71492396E12, "maxY": 3.6666666666666665, "series": [{"data": [[1.71492414E12, 3.6666666666666665], [1.71492396E12, 2.2666666666666666], [1.71492408E12, 3.5833333333333335], [1.7149242E12, 3.6], [1.71492402E12, 3.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.71492396E12, "maxY": 3.6666666666666665, "series": [{"data": [[1.71492414E12, 3.6666666666666665], [1.71492396E12, 2.25], [1.71492408E12, 3.5833333333333335], [1.7149242E12, 3.6166666666666667], [1.71492402E12, 3.55]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.71492396E12, "maxY": 3.6666666666666665, "series": [{"data": [[1.71492414E12, 3.6666666666666665], [1.71492396E12, 2.25], [1.71492408E12, 3.5833333333333335], [1.7149242E12, 3.6166666666666667], [1.71492402E12, 3.55]], "isOverall": false, "label": "cogtiff-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.71492396E12, "maxY": 3.6666666666666665, "series": [{"data": [[1.71492414E12, 3.6666666666666665], [1.71492396E12, 2.25], [1.71492408E12, 3.5833333333333335], [1.7149242E12, 3.6166666666666667], [1.71492402E12, 3.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149242E12, "title": "Total Transactions Per Second"}},
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

