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
        data: {"result": {"minY": 130.0, "minX": 0.0, "maxY": 653.0, "series": [{"data": [[0.0, 130.0], [0.1, 141.0], [0.2, 143.0], [0.3, 143.0], [0.4, 149.0], [0.5, 149.0], [0.6, 149.0], [0.7, 150.0], [0.8, 152.0], [0.9, 152.0], [1.0, 153.0], [1.1, 154.0], [1.2, 154.0], [1.3, 155.0], [1.4, 155.0], [1.5, 156.0], [1.6, 157.0], [1.7, 158.0], [1.8, 159.0], [1.9, 159.0], [2.0, 160.0], [2.1, 160.0], [2.2, 161.0], [2.3, 161.0], [2.4, 162.0], [2.5, 163.0], [2.6, 163.0], [2.7, 164.0], [2.8, 164.0], [2.9, 164.0], [3.0, 164.0], [3.1, 164.0], [3.2, 165.0], [3.3, 165.0], [3.4, 165.0], [3.5, 166.0], [3.6, 167.0], [3.7, 168.0], [3.8, 168.0], [3.9, 169.0], [4.0, 170.0], [4.1, 170.0], [4.2, 170.0], [4.3, 171.0], [4.4, 171.0], [4.5, 171.0], [4.6, 172.0], [4.7, 172.0], [4.8, 172.0], [4.9, 173.0], [5.0, 173.0], [5.1, 173.0], [5.2, 173.0], [5.3, 174.0], [5.4, 175.0], [5.5, 175.0], [5.6, 175.0], [5.7, 175.0], [5.8, 176.0], [5.9, 176.0], [6.0, 176.0], [6.1, 176.0], [6.2, 176.0], [6.3, 176.0], [6.4, 177.0], [6.5, 177.0], [6.6, 177.0], [6.7, 177.0], [6.8, 177.0], [6.9, 178.0], [7.0, 178.0], [7.1, 179.0], [7.2, 179.0], [7.3, 179.0], [7.4, 179.0], [7.5, 180.0], [7.6, 180.0], [7.7, 180.0], [7.8, 181.0], [7.9, 181.0], [8.0, 181.0], [8.1, 182.0], [8.2, 182.0], [8.3, 182.0], [8.4, 182.0], [8.5, 182.0], [8.6, 182.0], [8.7, 182.0], [8.8, 182.0], [8.9, 182.0], [9.0, 183.0], [9.1, 183.0], [9.2, 183.0], [9.3, 184.0], [9.4, 184.0], [9.5, 184.0], [9.6, 184.0], [9.7, 185.0], [9.8, 185.0], [9.9, 185.0], [10.0, 185.0], [10.1, 185.0], [10.2, 185.0], [10.3, 186.0], [10.4, 186.0], [10.5, 186.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 188.0], [11.1, 188.0], [11.2, 188.0], [11.3, 189.0], [11.4, 189.0], [11.5, 190.0], [11.6, 190.0], [11.7, 190.0], [11.8, 190.0], [11.9, 190.0], [12.0, 190.0], [12.1, 190.0], [12.2, 190.0], [12.3, 190.0], [12.4, 190.0], [12.5, 191.0], [12.6, 191.0], [12.7, 191.0], [12.8, 191.0], [12.9, 192.0], [13.0, 192.0], [13.1, 192.0], [13.2, 192.0], [13.3, 192.0], [13.4, 192.0], [13.5, 192.0], [13.6, 193.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 194.0], [14.1, 194.0], [14.2, 194.0], [14.3, 195.0], [14.4, 195.0], [14.5, 195.0], [14.6, 195.0], [14.7, 195.0], [14.8, 195.0], [14.9, 195.0], [15.0, 195.0], [15.1, 196.0], [15.2, 196.0], [15.3, 196.0], [15.4, 196.0], [15.5, 196.0], [15.6, 197.0], [15.7, 197.0], [15.8, 197.0], [15.9, 197.0], [16.0, 197.0], [16.1, 197.0], [16.2, 197.0], [16.3, 197.0], [16.4, 198.0], [16.5, 198.0], [16.6, 198.0], [16.7, 198.0], [16.8, 199.0], [16.9, 199.0], [17.0, 199.0], [17.1, 199.0], [17.2, 199.0], [17.3, 199.0], [17.4, 199.0], [17.5, 199.0], [17.6, 200.0], [17.7, 200.0], [17.8, 200.0], [17.9, 200.0], [18.0, 200.0], [18.1, 200.0], [18.2, 200.0], [18.3, 201.0], [18.4, 201.0], [18.5, 201.0], [18.6, 202.0], [18.7, 202.0], [18.8, 202.0], [18.9, 202.0], [19.0, 202.0], [19.1, 203.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 204.0], [19.6, 205.0], [19.7, 205.0], [19.8, 205.0], [19.9, 205.0], [20.0, 205.0], [20.1, 205.0], [20.2, 205.0], [20.3, 206.0], [20.4, 206.0], [20.5, 206.0], [20.6, 206.0], [20.7, 206.0], [20.8, 207.0], [20.9, 207.0], [21.0, 207.0], [21.1, 207.0], [21.2, 207.0], [21.3, 207.0], [21.4, 207.0], [21.5, 208.0], [21.6, 208.0], [21.7, 208.0], [21.8, 209.0], [21.9, 209.0], [22.0, 209.0], [22.1, 209.0], [22.2, 209.0], [22.3, 209.0], [22.4, 210.0], [22.5, 210.0], [22.6, 210.0], [22.7, 210.0], [22.8, 210.0], [22.9, 210.0], [23.0, 210.0], [23.1, 210.0], [23.2, 210.0], [23.3, 211.0], [23.4, 211.0], [23.5, 211.0], [23.6, 211.0], [23.7, 211.0], [23.8, 212.0], [23.9, 212.0], [24.0, 212.0], [24.1, 212.0], [24.2, 212.0], [24.3, 212.0], [24.4, 213.0], [24.5, 213.0], [24.6, 213.0], [24.7, 213.0], [24.8, 214.0], [24.9, 214.0], [25.0, 214.0], [25.1, 214.0], [25.2, 214.0], [25.3, 214.0], [25.4, 214.0], [25.5, 214.0], [25.6, 215.0], [25.7, 215.0], [25.8, 215.0], [25.9, 215.0], [26.0, 216.0], [26.1, 216.0], [26.2, 216.0], [26.3, 217.0], [26.4, 217.0], [26.5, 217.0], [26.6, 218.0], [26.7, 218.0], [26.8, 218.0], [26.9, 218.0], [27.0, 218.0], [27.1, 219.0], [27.2, 219.0], [27.3, 219.0], [27.4, 219.0], [27.5, 219.0], [27.6, 219.0], [27.7, 219.0], [27.8, 219.0], [27.9, 219.0], [28.0, 219.0], [28.1, 220.0], [28.2, 220.0], [28.3, 220.0], [28.4, 220.0], [28.5, 220.0], [28.6, 221.0], [28.7, 221.0], [28.8, 221.0], [28.9, 221.0], [29.0, 221.0], [29.1, 221.0], [29.2, 221.0], [29.3, 222.0], [29.4, 222.0], [29.5, 222.0], [29.6, 222.0], [29.7, 222.0], [29.8, 223.0], [29.9, 223.0], [30.0, 223.0], [30.1, 223.0], [30.2, 223.0], [30.3, 223.0], [30.4, 223.0], [30.5, 223.0], [30.6, 224.0], [30.7, 224.0], [30.8, 224.0], [30.9, 224.0], [31.0, 225.0], [31.1, 225.0], [31.2, 225.0], [31.3, 225.0], [31.4, 225.0], [31.5, 225.0], [31.6, 225.0], [31.7, 225.0], [31.8, 225.0], [31.9, 225.0], [32.0, 226.0], [32.1, 226.0], [32.2, 226.0], [32.3, 227.0], [32.4, 227.0], [32.5, 227.0], [32.6, 227.0], [32.7, 227.0], [32.8, 227.0], [32.9, 228.0], [33.0, 228.0], [33.1, 228.0], [33.2, 228.0], [33.3, 228.0], [33.4, 228.0], [33.5, 228.0], [33.6, 229.0], [33.7, 229.0], [33.8, 229.0], [33.9, 229.0], [34.0, 229.0], [34.1, 229.0], [34.2, 229.0], [34.3, 229.0], [34.4, 230.0], [34.5, 230.0], [34.6, 230.0], [34.7, 230.0], [34.8, 230.0], [34.9, 230.0], [35.0, 230.0], [35.1, 230.0], [35.2, 230.0], [35.3, 230.0], [35.4, 230.0], [35.5, 231.0], [35.6, 231.0], [35.7, 231.0], [35.8, 231.0], [35.9, 231.0], [36.0, 231.0], [36.1, 232.0], [36.2, 232.0], [36.3, 232.0], [36.4, 232.0], [36.5, 232.0], [36.6, 232.0], [36.7, 232.0], [36.8, 232.0], [36.9, 232.0], [37.0, 233.0], [37.1, 233.0], [37.2, 233.0], [37.3, 233.0], [37.4, 234.0], [37.5, 234.0], [37.6, 234.0], [37.7, 235.0], [37.8, 235.0], [37.9, 235.0], [38.0, 235.0], [38.1, 235.0], [38.2, 235.0], [38.3, 235.0], [38.4, 235.0], [38.5, 236.0], [38.6, 236.0], [38.7, 236.0], [38.8, 236.0], [38.9, 236.0], [39.0, 237.0], [39.1, 237.0], [39.2, 237.0], [39.3, 237.0], [39.4, 237.0], [39.5, 237.0], [39.6, 237.0], [39.7, 237.0], [39.8, 238.0], [39.9, 238.0], [40.0, 239.0], [40.1, 239.0], [40.2, 239.0], [40.3, 239.0], [40.4, 240.0], [40.5, 240.0], [40.6, 240.0], [40.7, 240.0], [40.8, 240.0], [40.9, 240.0], [41.0, 240.0], [41.1, 240.0], [41.2, 240.0], [41.3, 241.0], [41.4, 241.0], [41.5, 241.0], [41.6, 241.0], [41.7, 242.0], [41.8, 242.0], [41.9, 242.0], [42.0, 242.0], [42.1, 242.0], [42.2, 242.0], [42.3, 243.0], [42.4, 243.0], [42.5, 243.0], [42.6, 243.0], [42.7, 244.0], [42.8, 244.0], [42.9, 244.0], [43.0, 244.0], [43.1, 244.0], [43.2, 244.0], [43.3, 244.0], [43.4, 245.0], [43.5, 245.0], [43.6, 245.0], [43.7, 245.0], [43.8, 245.0], [43.9, 246.0], [44.0, 246.0], [44.1, 246.0], [44.2, 246.0], [44.3, 246.0], [44.4, 246.0], [44.5, 246.0], [44.6, 246.0], [44.7, 246.0], [44.8, 247.0], [44.9, 247.0], [45.0, 247.0], [45.1, 248.0], [45.2, 248.0], [45.3, 248.0], [45.4, 248.0], [45.5, 248.0], [45.6, 248.0], [45.7, 248.0], [45.8, 249.0], [45.9, 249.0], [46.0, 250.0], [46.1, 250.0], [46.2, 250.0], [46.3, 250.0], [46.4, 250.0], [46.5, 250.0], [46.6, 252.0], [46.7, 252.0], [46.8, 252.0], [46.9, 253.0], [47.0, 253.0], [47.1, 253.0], [47.2, 253.0], [47.3, 253.0], [47.4, 253.0], [47.5, 253.0], [47.6, 254.0], [47.7, 254.0], [47.8, 254.0], [47.9, 254.0], [48.0, 254.0], [48.1, 255.0], [48.2, 255.0], [48.3, 255.0], [48.4, 255.0], [48.5, 255.0], [48.6, 255.0], [48.7, 255.0], [48.8, 255.0], [48.9, 255.0], [49.0, 255.0], [49.1, 256.0], [49.2, 256.0], [49.3, 256.0], [49.4, 256.0], [49.5, 257.0], [49.6, 257.0], [49.7, 258.0], [49.8, 258.0], [49.9, 258.0], [50.0, 259.0], [50.1, 259.0], [50.2, 260.0], [50.3, 260.0], [50.4, 260.0], [50.5, 261.0], [50.6, 261.0], [50.7, 262.0], [50.8, 262.0], [50.9, 262.0], [51.0, 263.0], [51.1, 263.0], [51.2, 263.0], [51.3, 263.0], [51.4, 263.0], [51.5, 263.0], [51.6, 264.0], [51.7, 264.0], [51.8, 264.0], [51.9, 264.0], [52.0, 264.0], [52.1, 264.0], [52.2, 264.0], [52.3, 264.0], [52.4, 265.0], [52.5, 265.0], [52.6, 265.0], [52.7, 265.0], [52.8, 265.0], [52.9, 266.0], [53.0, 266.0], [53.1, 266.0], [53.2, 266.0], [53.3, 266.0], [53.4, 266.0], [53.5, 266.0], [53.6, 266.0], [53.7, 266.0], [53.8, 266.0], [53.9, 266.0], [54.0, 266.0], [54.1, 267.0], [54.2, 267.0], [54.3, 267.0], [54.4, 268.0], [54.5, 268.0], [54.6, 268.0], [54.7, 268.0], [54.8, 268.0], [54.9, 268.0], [55.0, 268.0], [55.1, 268.0], [55.2, 269.0], [55.3, 269.0], [55.4, 269.0], [55.5, 269.0], [55.6, 269.0], [55.7, 269.0], [55.8, 269.0], [55.9, 269.0], [56.0, 270.0], [56.1, 270.0], [56.2, 270.0], [56.3, 270.0], [56.4, 270.0], [56.5, 271.0], [56.6, 271.0], [56.7, 272.0], [56.8, 272.0], [56.9, 272.0], [57.0, 273.0], [57.1, 273.0], [57.2, 273.0], [57.3, 273.0], [57.4, 273.0], [57.5, 273.0], [57.6, 273.0], [57.7, 274.0], [57.8, 274.0], [57.9, 274.0], [58.0, 275.0], [58.1, 275.0], [58.2, 275.0], [58.3, 275.0], [58.4, 275.0], [58.5, 275.0], [58.6, 275.0], [58.7, 276.0], [58.8, 276.0], [58.9, 276.0], [59.0, 276.0], [59.1, 276.0], [59.2, 277.0], [59.3, 277.0], [59.4, 278.0], [59.5, 278.0], [59.6, 278.0], [59.7, 278.0], [59.8, 278.0], [59.9, 279.0], [60.0, 279.0], [60.1, 279.0], [60.2, 279.0], [60.3, 279.0], [60.4, 279.0], [60.5, 279.0], [60.6, 280.0], [60.7, 280.0], [60.8, 280.0], [60.9, 281.0], [61.0, 281.0], [61.1, 281.0], [61.2, 282.0], [61.3, 282.0], [61.4, 282.0], [61.5, 283.0], [61.6, 283.0], [61.7, 284.0], [61.8, 284.0], [61.9, 285.0], [62.0, 285.0], [62.1, 286.0], [62.2, 286.0], [62.3, 286.0], [62.4, 287.0], [62.5, 287.0], [62.6, 289.0], [62.7, 289.0], [62.8, 289.0], [62.9, 289.0], [63.0, 289.0], [63.1, 290.0], [63.2, 290.0], [63.3, 290.0], [63.4, 290.0], [63.5, 290.0], [63.6, 290.0], [63.7, 290.0], [63.8, 290.0], [63.9, 290.0], [64.0, 290.0], [64.1, 290.0], [64.2, 291.0], [64.3, 291.0], [64.4, 291.0], [64.5, 291.0], [64.6, 291.0], [64.7, 292.0], [64.8, 292.0], [64.9, 292.0], [65.0, 292.0], [65.1, 293.0], [65.2, 293.0], [65.3, 293.0], [65.4, 293.0], [65.5, 293.0], [65.6, 293.0], [65.7, 294.0], [65.8, 294.0], [65.9, 296.0], [66.0, 296.0], [66.1, 296.0], [66.2, 296.0], [66.3, 296.0], [66.4, 297.0], [66.5, 297.0], [66.6, 297.0], [66.7, 297.0], [66.8, 297.0], [66.9, 298.0], [67.0, 298.0], [67.1, 298.0], [67.2, 298.0], [67.3, 298.0], [67.4, 299.0], [67.5, 299.0], [67.6, 299.0], [67.7, 299.0], [67.8, 300.0], [67.9, 300.0], [68.0, 300.0], [68.1, 300.0], [68.2, 301.0], [68.3, 301.0], [68.4, 301.0], [68.5, 301.0], [68.6, 301.0], [68.7, 302.0], [68.8, 302.0], [68.9, 302.0], [69.0, 302.0], [69.1, 302.0], [69.2, 302.0], [69.3, 302.0], [69.4, 303.0], [69.5, 303.0], [69.6, 303.0], [69.7, 303.0], [69.8, 303.0], [69.9, 304.0], [70.0, 304.0], [70.1, 305.0], [70.2, 305.0], [70.3, 305.0], [70.4, 305.0], [70.5, 305.0], [70.6, 305.0], [70.7, 306.0], [70.8, 306.0], [70.9, 306.0], [71.0, 306.0], [71.1, 307.0], [71.2, 307.0], [71.3, 307.0], [71.4, 307.0], [71.5, 307.0], [71.6, 308.0], [71.7, 308.0], [71.8, 308.0], [71.9, 308.0], [72.0, 308.0], [72.1, 309.0], [72.2, 309.0], [72.3, 310.0], [72.4, 310.0], [72.5, 311.0], [72.6, 311.0], [72.7, 311.0], [72.8, 312.0], [72.9, 312.0], [73.0, 312.0], [73.1, 312.0], [73.2, 312.0], [73.3, 312.0], [73.4, 312.0], [73.5, 312.0], [73.6, 312.0], [73.7, 312.0], [73.8, 313.0], [73.9, 313.0], [74.0, 313.0], [74.1, 314.0], [74.2, 314.0], [74.3, 314.0], [74.4, 314.0], [74.5, 315.0], [74.6, 315.0], [74.7, 315.0], [74.8, 315.0], [74.9, 315.0], [75.0, 315.0], [75.1, 315.0], [75.2, 316.0], [75.3, 316.0], [75.4, 316.0], [75.5, 316.0], [75.6, 316.0], [75.7, 316.0], [75.8, 317.0], [75.9, 317.0], [76.0, 317.0], [76.1, 317.0], [76.2, 318.0], [76.3, 318.0], [76.4, 318.0], [76.5, 318.0], [76.6, 319.0], [76.7, 320.0], [76.8, 320.0], [76.9, 320.0], [77.0, 320.0], [77.1, 320.0], [77.2, 320.0], [77.3, 320.0], [77.4, 321.0], [77.5, 321.0], [77.6, 321.0], [77.7, 321.0], [77.8, 322.0], [77.9, 322.0], [78.0, 322.0], [78.1, 322.0], [78.2, 323.0], [78.3, 323.0], [78.4, 323.0], [78.5, 323.0], [78.6, 323.0], [78.7, 324.0], [78.8, 325.0], [78.9, 325.0], [79.0, 325.0], [79.1, 325.0], [79.2, 325.0], [79.3, 325.0], [79.4, 325.0], [79.5, 325.0], [79.6, 325.0], [79.7, 325.0], [79.8, 326.0], [79.9, 326.0], [80.0, 326.0], [80.1, 326.0], [80.2, 326.0], [80.3, 326.0], [80.4, 326.0], [80.5, 327.0], [80.6, 327.0], [80.7, 327.0], [80.8, 327.0], [80.9, 327.0], [81.0, 327.0], [81.1, 328.0], [81.2, 328.0], [81.3, 328.0], [81.4, 328.0], [81.5, 328.0], [81.6, 329.0], [81.7, 329.0], [81.8, 329.0], [81.9, 329.0], [82.0, 329.0], [82.1, 329.0], [82.2, 329.0], [82.3, 329.0], [82.4, 329.0], [82.5, 329.0], [82.6, 330.0], [82.7, 330.0], [82.8, 330.0], [82.9, 330.0], [83.0, 331.0], [83.1, 331.0], [83.2, 331.0], [83.3, 331.0], [83.4, 331.0], [83.5, 331.0], [83.6, 332.0], [83.7, 332.0], [83.8, 332.0], [83.9, 332.0], [84.0, 332.0], [84.1, 332.0], [84.2, 333.0], [84.3, 333.0], [84.4, 333.0], [84.5, 333.0], [84.6, 334.0], [84.7, 335.0], [84.8, 335.0], [84.9, 335.0], [85.0, 335.0], [85.1, 335.0], [85.2, 335.0], [85.3, 335.0], [85.4, 336.0], [85.5, 336.0], [85.6, 336.0], [85.7, 337.0], [85.8, 337.0], [85.9, 337.0], [86.0, 337.0], [86.1, 337.0], [86.2, 337.0], [86.3, 338.0], [86.4, 338.0], [86.5, 338.0], [86.6, 338.0], [86.7, 339.0], [86.8, 339.0], [86.9, 339.0], [87.0, 339.0], [87.1, 339.0], [87.2, 339.0], [87.3, 339.0], [87.4, 339.0], [87.5, 340.0], [87.6, 340.0], [87.7, 340.0], [87.8, 340.0], [87.9, 340.0], [88.0, 340.0], [88.1, 340.0], [88.2, 340.0], [88.3, 341.0], [88.4, 341.0], [88.5, 342.0], [88.6, 342.0], [88.7, 342.0], [88.8, 342.0], [88.9, 342.0], [89.0, 343.0], [89.1, 343.0], [89.2, 343.0], [89.3, 343.0], [89.4, 343.0], [89.5, 343.0], [89.6, 343.0], [89.7, 343.0], [89.8, 344.0], [89.9, 344.0], [90.0, 344.0], [90.1, 344.0], [90.2, 344.0], [90.3, 344.0], [90.4, 344.0], [90.5, 345.0], [90.6, 345.0], [90.7, 345.0], [90.8, 346.0], [90.9, 347.0], [91.0, 347.0], [91.1, 347.0], [91.2, 347.0], [91.3, 347.0], [91.4, 347.0], [91.5, 347.0], [91.6, 347.0], [91.7, 347.0], [91.8, 348.0], [91.9, 348.0], [92.0, 349.0], [92.1, 349.0], [92.2, 349.0], [92.3, 349.0], [92.4, 349.0], [92.5, 350.0], [92.6, 350.0], [92.7, 350.0], [92.8, 351.0], [92.9, 351.0], [93.0, 351.0], [93.1, 351.0], [93.2, 352.0], [93.3, 353.0], [93.4, 353.0], [93.5, 354.0], [93.6, 354.0], [93.7, 354.0], [93.8, 355.0], [93.9, 355.0], [94.0, 357.0], [94.1, 357.0], [94.2, 357.0], [94.3, 357.0], [94.4, 358.0], [94.5, 358.0], [94.6, 359.0], [94.7, 359.0], [94.8, 359.0], [94.9, 360.0], [95.0, 360.0], [95.1, 360.0], [95.2, 360.0], [95.3, 361.0], [95.4, 362.0], [95.5, 362.0], [95.6, 363.0], [95.7, 363.0], [95.8, 364.0], [95.9, 364.0], [96.0, 365.0], [96.1, 365.0], [96.2, 367.0], [96.3, 367.0], [96.4, 371.0], [96.5, 373.0], [96.6, 374.0], [96.7, 374.0], [96.8, 379.0], [96.9, 379.0], [97.0, 379.0], [97.1, 380.0], [97.2, 383.0], [97.3, 385.0], [97.4, 385.0], [97.5, 387.0], [97.6, 395.0], [97.7, 398.0], [97.8, 403.0], [97.9, 407.0], [98.0, 413.0], [98.1, 414.0], [98.2, 419.0], [98.3, 425.0], [98.4, 433.0], [98.5, 437.0], [98.6, 448.0], [98.7, 451.0], [98.8, 451.0], [98.9, 465.0], [99.0, 467.0], [99.1, 468.0], [99.2, 476.0], [99.3, 487.0], [99.4, 494.0], [99.5, 495.0], [99.6, 509.0], [99.7, 515.0], [99.8, 593.0], [99.9, 653.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 502.0, "series": [{"data": [[300.0, 300.0], [600.0, 1.0], [400.0, 19.0], [200.0, 502.0], [100.0, 175.0], [500.0, 3.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 996.0, "series": [{"data": [[0.0, 996.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.71492516E12, "maxY": 1.0, "series": [{"data": [[1.71492528E12, 1.0], [1.71492516E12, 1.0], [1.71492534E12, 1.0], [1.71492522E12, 1.0], [1.7149254E12, 1.0]], "isOverall": false, "label": "1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149254E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 265.28599999999994, "minX": 1.0, "maxY": 265.28599999999994, "series": [{"data": [[1.0, 265.28599999999994]], "isOverall": false, "label": "cogtiff", "isController": false}, {"data": [[1.0, 265.28599999999994]], "isOverall": false, "label": "cogtiff-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.71492516E12, "maxY": 4315485.833333333, "series": [{"data": [[1.71492528E12, 4315485.833333333], [1.71492516E12, 3299434.3833333333], [1.71492534E12, 4232346.0], [1.71492522E12, 4052428.45], [1.7149254E12, 2865910.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71492528E12, 0.0], [1.71492516E12, 0.0], [1.71492534E12, 0.0], [1.71492522E12, 0.0], [1.7149254E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149254E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 258.6077586206896, "minX": 1.71492516E12, "maxY": 271.27485380116946, "series": [{"data": [[1.71492528E12, 268.39461883408075], [1.71492516E12, 271.27485380116946], [1.71492534E12, 258.6077586206896], [1.71492522E12, 264.1592920353981], [1.7149254E12, 265.8716216216218]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149254E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 114.53448275862073, "minX": 1.71492516E12, "maxY": 119.1052631578947, "series": [{"data": [[1.71492528E12, 116.52914798206275], [1.71492516E12, 119.1052631578947], [1.71492534E12, 114.53448275862073], [1.71492522E12, 118.1858407079646], [1.7149254E12, 114.56756756756755]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149254E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71492516E12, "maxY": 4.9E-324, "series": [{"data": [[1.71492528E12, 0.0], [1.71492516E12, 0.0], [1.71492534E12, 0.0], [1.71492522E12, 0.0], [1.7149254E12, 0.0]], "isOverall": false, "label": "cogtiff", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149254E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 130.0, "minX": 1.71492516E12, "maxY": 653.0, "series": [{"data": [[1.71492528E12, 515.0], [1.71492516E12, 494.0], [1.71492534E12, 593.0], [1.71492522E12, 653.0], [1.7149254E12, 467.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71492528E12, 130.0], [1.71492516E12, 149.0], [1.71492534E12, 148.0], [1.71492522E12, 149.0], [1.7149254E12, 161.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71492528E12, 347.0], [1.71492516E12, 349.8], [1.71492534E12, 339.0], [1.71492522E12, 347.3], [1.7149254E12, 340.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71492528E12, 420.67999999999984], [1.71492516E12, 488.96000000000004], [1.71492534E12, 462.38999999999976], [1.71492522E12, 505.21999999999986], [1.7149254E12, 466.02]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71492528E12, 265.0], [1.71492516E12, 266.0], [1.71492534E12, 249.5], [1.71492522E12, 261.0], [1.7149254E12, 255.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71492528E12, 362.79999999999995], [1.71492516E12, 385.0], [1.71492534E12, 352.7], [1.71492522E12, 365.94999999999993], [1.7149254E12, 348.65]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149254E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 218.0, "minX": 1.0, "maxY": 413.0, "series": [{"data": [[1.0, 413.0], [4.0, 252.0], [2.0, 391.5], [5.0, 218.0], [3.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 112.0, "minX": 1.0, "maxY": 283.0, "series": [{"data": [[1.0, 283.0], [4.0, 115.0], [2.0, 190.5], [5.0, 112.0], [3.0, 114.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.71492516E12, "maxY": 3.8666666666666667, "series": [{"data": [[1.71492528E12, 3.716666666666667], [1.71492516E12, 2.8666666666666667], [1.71492534E12, 3.8666666666666667], [1.71492522E12, 3.7666666666666666], [1.7149254E12, 2.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149254E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.71492516E12, "maxY": 3.8666666666666667, "series": [{"data": [[1.71492528E12, 3.716666666666667], [1.71492516E12, 2.85], [1.71492534E12, 3.8666666666666667], [1.71492522E12, 3.7666666666666666], [1.7149254E12, 2.466666666666667]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7149254E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.71492516E12, "maxY": 3.8666666666666667, "series": [{"data": [[1.71492528E12, 3.716666666666667], [1.71492516E12, 2.85], [1.71492534E12, 3.8666666666666667], [1.71492522E12, 3.7666666666666666], [1.7149254E12, 2.466666666666667]], "isOverall": false, "label": "cogtiff-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149254E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.466666666666667, "minX": 1.71492516E12, "maxY": 3.8666666666666667, "series": [{"data": [[1.71492528E12, 3.716666666666667], [1.71492516E12, 2.85], [1.71492534E12, 3.8666666666666667], [1.71492522E12, 3.7666666666666666], [1.7149254E12, 2.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7149254E12, "title": "Total Transactions Per Second"}},
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

