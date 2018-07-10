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

//result of trying to deobfuscate with JStillery

var O3ffff = 2;
while (O3ffff !== 1) {
    switch (O3ffff) {
    case 2:
        (function () {
            var O = 2;
            while (O !== 7) {
                switch (O) {
                case 4:
                    O = ref === mda[12][2] ? 3 : 9;
                    break;
                case 2:
                    var createMDA = function (len, shift) {
                        var o = 2;
                        while (o !== 10) {
                            switch (o) {
                            case 13:
                                j--;
                                o = 6;
                                break;
                            case 14:
                                mda[i][(j + shift * i) % len] = mda[j];
                                o = 13;
                                break;
                            case 6:
                                o = j >= 0 ? 14 : 12;
                                break;
                            case 9:
                                var i = 0;
                                o = 8;
                                break;
                            case 8:
                                o = i < len ? 7 : 11;
                                break;
                            case 11:
                                return mda;
                                break;
                            case 1:
                                var k = 0;
                                o = 5;
                                break;
                            case 5:
                                o = k < len ? 4 : 9;
                                break;
                            case 7:
                                var j = len - 1;
                                o = 6;
                                break;
                            case 4:
                                mda[(k + shift) % len] = [];
                                o = 3;
                                break;
                            case 12:
                                i++;
                                o = 8;
                                break;
                            case 2:
                                var mda = [];
                                o = 1;
                                break;
                            case 3:
                                k++;
                                o = 5;
                                break;
                            }
                        }
                    };
                    var mda = createMDA(24, 7);
                    var ref = mda[15][13][22][4];
                    O = 4;
                    break;
                case 9:
                    O = ref === mda[17][21] ? 8 : 7;
                    break;
                case 3:
                    console.log('Do not try and bend the spoon.');
                    O = 7;
                    break;
                case 8:
                    console.log('There is no spoon.');
                    O = 7;
                    break;
                }
            }
        }());
        O3ffff = 1;
        break;
    }
}