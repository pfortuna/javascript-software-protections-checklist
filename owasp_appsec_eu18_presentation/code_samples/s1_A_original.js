/*
MIT License

Copyright (c) 2018 Pedro Fortuna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// obfuscate with uglifyjs2 and deobfuscate with prepack.io
;(function(){
  /* 
    Create a multi-dimension array with circular references.
    An infinite number of subscripts exist for a finite number
    of array objects meaning there are N subscripts for each
    array object.
  
  Example: 
    var mda = createMDA(250, 137);
    
    mda[11]
    > (250) [Array(250), Array(250), ..., Array(250)]
    
    mda[125][219][57][173][9][14]
    > (250) [Array(250), Array(250), ..., Array(250)]
  
    mda[159][72][5][19] === mda[17][154]
    > true
  */
  var createMDA = function (len, shift) {
    var mda = [];
    for (var k = 0; k < len; k++) {
      mda[(k + shift) % len] = [];
    }
    for (var i = 0; i < len; i++) {
      for (var j = len - 1; j >= 0; j--) {
        mda[i][(j + shift * i) % len] = mda[j];
      }
    }
    return mda;
  };
  
  //////////////////////////////////////////////////////////
  
  /* Create 24 x 24 mda (shift 7) */
  var mda = createMDA(24, 7);
  
  /* Point to one position in the mda */
  var ref = mda[15][13][22][4];
  
  /* Not pointing to the same array object
    so it won't run the console.log */
  if (ref === mda[12][2]) {
    console.log("Do not try and bend the spoon.");
  } 
  
  /* Matches the same array object */
  else if (ref === mda[17][21]) {
    console.log("There is no spoon.");
  }
}());
