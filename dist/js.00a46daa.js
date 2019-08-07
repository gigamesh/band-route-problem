// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/coordinates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.points500 = exports.points200 = exports.points40 = void 0;
var points40 = [{
  "x": 116,
  "y": 404
}, {
  "x": 161,
  "y": 617
}, {
  "x": 16,
  "y": 97
}, {
  "x": 430,
  "y": 536
}, {
  "x": 601,
  "y": 504
}, {
  "x": 425,
  "y": 461
}, {
  "x": 114,
  "y": 544
}, {
  "x": 127,
  "y": 118
}, {
  "x": 163,
  "y": 357
}, {
  "x": 704,
  "y": 104
}, {
  "x": 864,
  "y": 125
}, {
  "x": 847,
  "y": 523
}, {
  "x": 742,
  "y": 170
}, {
  "x": 204,
  "y": 601
}, {
  "x": 421,
  "y": 377
}, {
  "x": 808,
  "y": 49
}, {
  "x": 860,
  "y": 466
}, {
  "x": 844,
  "y": 294
}, {
  "x": 147,
  "y": 213
}, {
  "x": 550,
  "y": 124
}, {
  "x": 238,
  "y": 313
}, {
  "x": 57,
  "y": 572
}, {
  "x": 664,
  "y": 190
}, {
  "x": 612,
  "y": 644
}, {
  "x": 456,
  "y": 154
}, {
  "x": 120,
  "y": 477
}, {
  "x": 542,
  "y": 313
}, {
  "x": 620,
  "y": 29
}, {
  "x": 245,
  "y": 246
}, {
  "x": 611,
  "y": 578
}, {
  "x": 627,
  "y": 373
}, {
  "x": 534,
  "y": 286
}, {
  "x": 577,
  "y": 545
}, {
  "x": 539,
  "y": 340
}, {
  "x": 794,
  "y": 328
}, {
  "x": 855,
  "y": 139
}, {
  "x": 700,
  "y": 47
}, {
  "x": 275,
  "y": 593
}, {
  "x": 130,
  "y": 196
}, {
  "x": 863,
  "y": 35
}];
exports.points40 = points40;
var points200 = [{
  "x": 150,
  "y": 172
}, {
  "x": 822,
  "y": 244
}, {
  "x": 619,
  "y": 220
}, {
  "x": 243,
  "y": 433
}, {
  "x": 9,
  "y": 48
}, {
  "x": 541,
  "y": 402
}, {
  "x": 540,
  "y": 212
}, {
  "x": 479,
  "y": 646
}, {
  "x": 545,
  "y": 90
}, {
  "x": 811,
  "y": 355
}, {
  "x": 314,
  "y": 325
}, {
  "x": 337,
  "y": 487
}, {
  "x": 675,
  "y": 76
}, {
  "x": 629,
  "y": 375
}, {
  "x": 809,
  "y": 105
}, {
  "x": 269,
  "y": 135
}, {
  "x": 423,
  "y": 592
}, {
  "x": 558,
  "y": 288
}, {
  "x": 622,
  "y": 70
}, {
  "x": 740,
  "y": 495
}, {
  "x": 508,
  "y": 79
}, {
  "x": 40,
  "y": 236
}, {
  "x": 818,
  "y": 252
}, {
  "x": 811,
  "y": 480
}, {
  "x": 458,
  "y": 220
}, {
  "x": 293,
  "y": 220
}, {
  "x": 582,
  "y": 275
}, {
  "x": 188,
  "y": 542
}, {
  "x": 300,
  "y": 235
}, {
  "x": 690,
  "y": 649
}, {
  "x": 166,
  "y": 565
}, {
  "x": 400,
  "y": 80
}, {
  "x": 121,
  "y": 498
}, {
  "x": 603,
  "y": 587
}, {
  "x": 729,
  "y": 89
}, {
  "x": 723,
  "y": 23
}, {
  "x": 171,
  "y": 609
}, {
  "x": 523,
  "y": 449
}, {
  "x": 668,
  "y": 102
}, {
  "x": 328,
  "y": 531
}, {
  "x": 468,
  "y": 588
}, {
  "x": 600,
  "y": 239
}, {
  "x": 312,
  "y": 636
}, {
  "x": 344,
  "y": 112
}, {
  "x": 267,
  "y": 184
}, {
  "x": 292,
  "y": 615
}, {
  "x": 21,
  "y": 401
}, {
  "x": 650,
  "y": 266
}, {
  "x": 535,
  "y": 393
}, {
  "x": 796,
  "y": 598
}, {
  "x": 29,
  "y": 412
}, {
  "x": 528,
  "y": 363
}, {
  "x": 344,
  "y": 152
}, {
  "x": 314,
  "y": 35
}, {
  "x": 138,
  "y": 191
}, {
  "x": 643,
  "y": 341
}, {
  "x": 350,
  "y": 423
}, {
  "x": 319,
  "y": 542
}, {
  "x": 797,
  "y": 659
}, {
  "x": 66,
  "y": 296
}, {
  "x": 761,
  "y": 574
}, {
  "x": 26,
  "y": 270
}, {
  "x": 129,
  "y": 509
}, {
  "x": 24,
  "y": 312
}, {
  "x": 89,
  "y": 635
}, {
  "x": 454,
  "y": 34
}, {
  "x": 717,
  "y": 189
}, {
  "x": 476,
  "y": 457
}, {
  "x": 471,
  "y": 212
}, {
  "x": 74,
  "y": 457
}, {
  "x": 406,
  "y": 221
}, {
  "x": 701,
  "y": 313
}, {
  "x": 719,
  "y": 642
}, {
  "x": 573,
  "y": 424
}, {
  "x": 250,
  "y": 231
}, {
  "x": 748,
  "y": 334
}, {
  "x": 318,
  "y": 453
}, {
  "x": 815,
  "y": 92
}, {
  "x": 198,
  "y": 47
}, {
  "x": 79,
  "y": 451
}, {
  "x": 502,
  "y": 582
}, {
  "x": 471,
  "y": 355
}, {
  "x": 509,
  "y": 257
}, {
  "x": 727,
  "y": 290
}, {
  "x": 476,
  "y": 281
}, {
  "x": 609,
  "y": 576
}, {
  "x": 772,
  "y": 72
}, {
  "x": 263,
  "y": 156
}, {
  "x": 411,
  "y": 203
}, {
  "x": 100,
  "y": 254
}, {
  "x": 29,
  "y": 208
}, {
  "x": 625,
  "y": 349
}, {
  "x": 789,
  "y": 163
}, {
  "x": 300,
  "y": 224
}, {
  "x": 637,
  "y": 57
}, {
  "x": 789,
  "y": 153
}, {
  "x": 429,
  "y": 427
}, {
  "x": 571,
  "y": 355
}, {
  "x": 426,
  "y": 348
}, {
  "x": 620,
  "y": 545
}, {
  "x": 601,
  "y": 322
}, {
  "x": 600,
  "y": 441
}, {
  "x": 519,
  "y": 357
}, {
  "x": 59,
  "y": 262
}, {
  "x": 878,
  "y": 621
}, {
  "x": 712,
  "y": 592
}, {
  "x": 202,
  "y": 341
}, {
  "x": 300,
  "y": 41
}, {
  "x": 87,
  "y": 647
}, {
  "x": 735,
  "y": 60
}, {
  "x": 289,
  "y": 110
}, {
  "x": 126,
  "y": 133
}, {
  "x": 375,
  "y": 584
}, {
  "x": 421,
  "y": 469
}, {
  "x": 775,
  "y": 341
}, {
  "x": 656,
  "y": 534
}, {
  "x": 225,
  "y": 634
}, {
  "x": 520,
  "y": 339
}, {
  "x": 865,
  "y": 515
}, {
  "x": 457,
  "y": 378
}, {
  "x": 293,
  "y": 141
}, {
  "x": 202,
  "y": 293
}, {
  "x": 347,
  "y": 423
}, {
  "x": 186,
  "y": 284
}, {
  "x": 572,
  "y": 600
}, {
  "x": 319,
  "y": 412
}, {
  "x": 685,
  "y": 73
}, {
  "x": 845,
  "y": 248
}, {
  "x": 834,
  "y": 339
}, {
  "x": 391,
  "y": 571
}, {
  "x": 139,
  "y": 346
}, {
  "x": 635,
  "y": 352
}, {
  "x": 401,
  "y": 117
}, {
  "x": 381,
  "y": 281
}, {
  "x": 471,
  "y": 552
}, {
  "x": 793,
  "y": 585
}, {
  "x": 279,
  "y": 520
}, {
  "x": 783,
  "y": 520
}, {
  "x": 374,
  "y": 38
}, {
  "x": 458,
  "y": 479
}, {
  "x": 869,
  "y": 15
}, {
  "x": 626,
  "y": 216
}, {
  "x": 148,
  "y": 604
}, {
  "x": 560,
  "y": 109
}, {
  "x": 342,
  "y": 141
}, {
  "x": 426,
  "y": 536
}, {
  "x": 697,
  "y": 414
}, {
  "x": 283,
  "y": 18
}, {
  "x": 172,
  "y": 181
}, {
  "x": 206,
  "y": 227
}, {
  "x": 763,
  "y": 291
}, {
  "x": 439,
  "y": 124
}, {
  "x": 523,
  "y": 388
}, {
  "x": 338,
  "y": 211
}, {
  "x": 30,
  "y": 593
}, {
  "x": 187,
  "y": 498
}, {
  "x": 126,
  "y": 86
}, {
  "x": 4,
  "y": 58
}, {
  "x": 566,
  "y": 329
}, {
  "x": 524,
  "y": 486
}, {
  "x": 788,
  "y": 334
}, {
  "x": 346,
  "y": 194
}, {
  "x": 506,
  "y": 231
}, {
  "x": 135,
  "y": 190
}, {
  "x": 288,
  "y": 406
}, {
  "x": 200,
  "y": 515
}, {
  "x": 739,
  "y": 91
}, {
  "x": 300,
  "y": 439
}, {
  "x": 725,
  "y": 420
}, {
  "x": 83,
  "y": 612
}, {
  "x": 665,
  "y": 336
}, {
  "x": 848,
  "y": 246
}, {
  "x": 865,
  "y": 521
}, {
  "x": 3,
  "y": 406
}, {
  "x": 187,
  "y": 431
}, {
  "x": 462,
  "y": 564
}, {
  "x": 530,
  "y": 648
}, {
  "x": 708,
  "y": 173
}, {
  "x": 325,
  "y": 96
}, {
  "x": 4,
  "y": 480
}, {
  "x": 530,
  "y": 512
}, {
  "x": 780,
  "y": 126
}, {
  "x": 614,
  "y": 610
}, {
  "x": 359,
  "y": 431
}, {
  "x": 343,
  "y": 640
}, {
  "x": 453,
  "y": 182
}, {
  "x": 648,
  "y": 477
}, {
  "x": 447,
  "y": 258
}, {
  "x": 23,
  "y": 465
}, {
  "x": 455,
  "y": 215
}, {
  "x": 534,
  "y": 396
}, {
  "x": 869,
  "y": 337
}, {
  "x": 511,
  "y": 290
}, {
  "x": 683,
  "y": 291
}, {
  "x": 328,
  "y": 370
}, {
  "x": 160,
  "y": 497
}, {
  "x": 144,
  "y": 203
}, {
  "x": 717,
  "y": 222
}, {
  "x": 31,
  "y": 376
}, {
  "x": 452,
  "y": 600
}];
exports.points200 = points200;
var points500 = [{
  "x": 780,
  "y": 560
}, {
  "x": 631,
  "y": 173
}, {
  "x": 452,
  "y": 237
}, {
  "x": 789,
  "y": 506
}, {
  "x": 308,
  "y": 175
}, {
  "x": 797,
  "y": 157
}, {
  "x": 524,
  "y": 583
}, {
  "x": 241,
  "y": 7
}, {
  "x": 340,
  "y": 105
}, {
  "x": 787,
  "y": 19
}, {
  "x": 168,
  "y": 342
}, {
  "x": 685,
  "y": 386
}, {
  "x": 739,
  "y": 195
}, {
  "x": 408,
  "y": 550
}, {
  "x": 581,
  "y": 577
}, {
  "x": 762,
  "y": 406
}, {
  "x": 14,
  "y": 370
}, {
  "x": 275,
  "y": 610
}, {
  "x": 38,
  "y": 484
}, {
  "x": 699,
  "y": 148
}, {
  "x": 780,
  "y": 272
}, {
  "x": 686,
  "y": 611
}, {
  "x": 42,
  "y": 650
}, {
  "x": 257,
  "y": 329
}, {
  "x": 1,
  "y": 260
}, {
  "x": 432,
  "y": 448
}, {
  "x": 805,
  "y": 546
}, {
  "x": 268,
  "y": 472
}, {
  "x": 174,
  "y": 154
}, {
  "x": 189,
  "y": 432
}, {
  "x": 869,
  "y": 653
}, {
  "x": 371,
  "y": 337
}, {
  "x": 192,
  "y": 279
}, {
  "x": 322,
  "y": 118
}, {
  "x": 842,
  "y": 584
}, {
  "x": 809,
  "y": 381
}, {
  "x": 717,
  "y": 250
}, {
  "x": 77,
  "y": 575
}, {
  "x": 654,
  "y": 21
}, {
  "x": 859,
  "y": 146
}, {
  "x": 534,
  "y": 561
}, {
  "x": 732,
  "y": 227
}, {
  "x": 154,
  "y": 371
}, {
  "x": 263,
  "y": 148
}, {
  "x": 64,
  "y": 524
}, {
  "x": 689,
  "y": 553
}, {
  "x": 316,
  "y": 358
}, {
  "x": 587,
  "y": 374
}, {
  "x": 679,
  "y": 125
}, {
  "x": 234,
  "y": 501
}, {
  "x": 282,
  "y": 403
}, {
  "x": 671,
  "y": 107
}, {
  "x": 703,
  "y": 347
}, {
  "x": 116,
  "y": 408
}, {
  "x": 655,
  "y": 593
}, {
  "x": 120,
  "y": 196
}, {
  "x": 111,
  "y": 240
}, {
  "x": 686,
  "y": 271
}, {
  "x": 237,
  "y": 213
}, {
  "x": 463,
  "y": 562
}, {
  "x": 543,
  "y": 240
}, {
  "x": 832,
  "y": 406
}, {
  "x": 705,
  "y": 280
}, {
  "x": 359,
  "y": 252
}, {
  "x": 494,
  "y": 575
}, {
  "x": 339,
  "y": 85
}, {
  "x": 719,
  "y": 115
}, {
  "x": 709,
  "y": 564
}, {
  "x": 752,
  "y": 178
}, {
  "x": 412,
  "y": 599
}, {
  "x": 207,
  "y": 524
}, {
  "x": 812,
  "y": 359
}, {
  "x": 13,
  "y": 500
}, {
  "x": 635,
  "y": 477
}, {
  "x": 243,
  "y": 236
}, {
  "x": 400,
  "y": 381
}, {
  "x": 639,
  "y": 551
}, {
  "x": 407,
  "y": 65
}, {
  "x": 39,
  "y": 619
}, {
  "x": 508,
  "y": 170
}, {
  "x": 150,
  "y": 115
}, {
  "x": 789,
  "y": 353
}, {
  "x": 64,
  "y": 178
}, {
  "x": 831,
  "y": 434
}, {
  "x": 539,
  "y": 83
}, {
  "x": 671,
  "y": 317
}, {
  "x": 806,
  "y": 479
}, {
  "x": 383,
  "y": 335
}, {
  "x": 405,
  "y": 103
}, {
  "x": 437,
  "y": 549
}, {
  "x": 62,
  "y": 590
}, {
  "x": 589,
  "y": 296
}, {
  "x": 536,
  "y": 539
}, {
  "x": 375,
  "y": 541
}, {
  "x": 659,
  "y": 326
}, {
  "x": 582,
  "y": 600
}, {
  "x": 482,
  "y": 73
}, {
  "x": 229,
  "y": 8
}, {
  "x": 545,
  "y": 292
}, {
  "x": 537,
  "y": 174
}, {
  "x": 704,
  "y": 273
}, {
  "x": 106,
  "y": 487
}, {
  "x": 759,
  "y": 575
}, {
  "x": 460,
  "y": 358
}, {
  "x": 85,
  "y": 6
}, {
  "x": 556,
  "y": 112
}, {
  "x": 347,
  "y": 196
}, {
  "x": 856,
  "y": 88
}, {
  "x": 612,
  "y": 395
}, {
  "x": 459,
  "y": 195
}, {
  "x": 198,
  "y": 431
}, {
  "x": 102,
  "y": 14
}, {
  "x": 750,
  "y": 403
}, {
  "x": 87,
  "y": 37
}, {
  "x": 719,
  "y": 146
}, {
  "x": 353,
  "y": 405
}, {
  "x": 633,
  "y": 476
}, {
  "x": 806,
  "y": 313
}, {
  "x": 529,
  "y": 509
}, {
  "x": 772,
  "y": 55
}, {
  "x": 298,
  "y": 527
}, {
  "x": 546,
  "y": 522
}, {
  "x": 7,
  "y": 72
}, {
  "x": 118,
  "y": 337
}, {
  "x": 377,
  "y": 216
}, {
  "x": 816,
  "y": 327
}, {
  "x": 227,
  "y": 167
}, {
  "x": 715,
  "y": 422
}, {
  "x": 324,
  "y": 516
}, {
  "x": 847,
  "y": 170
}, {
  "x": 752,
  "y": 422
}, {
  "x": 657,
  "y": 570
}, {
  "x": 539,
  "y": 450
}, {
  "x": 285,
  "y": 556
}, {
  "x": 381,
  "y": 168
}, {
  "x": 317,
  "y": 251
}, {
  "x": 303,
  "y": 197
}, {
  "x": 797,
  "y": 50
}, {
  "x": 820,
  "y": 193
}, {
  "x": 739,
  "y": 85
}, {
  "x": 623,
  "y": 118
}, {
  "x": 422,
  "y": 73
}, {
  "x": 696,
  "y": 205
}, {
  "x": 534,
  "y": 450
}, {
  "x": 511,
  "y": 263
}, {
  "x": 648,
  "y": 110
}, {
  "x": 601,
  "y": 518
}, {
  "x": 111,
  "y": 627
}, {
  "x": 771,
  "y": 572
}, {
  "x": 797,
  "y": 303
}, {
  "x": 335,
  "y": 332
}, {
  "x": 344,
  "y": 492
}, {
  "x": 345,
  "y": 610
}, {
  "x": 631,
  "y": 340
}, {
  "x": 863,
  "y": 305
}, {
  "x": 363,
  "y": 406
}, {
  "x": 414,
  "y": 14
}, {
  "x": 591,
  "y": 26
}, {
  "x": 602,
  "y": 592
}, {
  "x": 386,
  "y": 273
}, {
  "x": 687,
  "y": 183
}, {
  "x": 570,
  "y": 27
}, {
  "x": 613,
  "y": 645
}, {
  "x": 58,
  "y": 268
}, {
  "x": 668,
  "y": 375
}, {
  "x": 157,
  "y": 349
}, {
  "x": 634,
  "y": 627
}, {
  "x": 575,
  "y": 465
}, {
  "x": 175,
  "y": 460
}, {
  "x": 843,
  "y": 625
}, {
  "x": 425,
  "y": 20
}, {
  "x": 54,
  "y": 411
}, {
  "x": 459,
  "y": 659
}, {
  "x": 482,
  "y": 176
}, {
  "x": 593,
  "y": 296
}, {
  "x": 854,
  "y": 512
}, {
  "x": 132,
  "y": 551
}, {
  "x": 875,
  "y": 577
}, {
  "x": 774,
  "y": 470
}, {
  "x": 95,
  "y": 584
}, {
  "x": 575,
  "y": 614
}, {
  "x": 767,
  "y": 635
}, {
  "x": 426,
  "y": 212
}, {
  "x": 796,
  "y": 38
}, {
  "x": 33,
  "y": 147
}, {
  "x": 773,
  "y": 95
}, {
  "x": 141,
  "y": 640
}, {
  "x": 831,
  "y": 257
}, {
  "x": 684,
  "y": 175
}, {
  "x": 16,
  "y": 534
}, {
  "x": 399,
  "y": 579
}, {
  "x": 729,
  "y": 185
}, {
  "x": 759,
  "y": 217
}, {
  "x": 88,
  "y": 327
}, {
  "x": 43,
  "y": 167
}, {
  "x": 38,
  "y": 161
}, {
  "x": 331,
  "y": 405
}, {
  "x": 292,
  "y": 130
}, {
  "x": 527,
  "y": 658
}, {
  "x": 57,
  "y": 288
}, {
  "x": 546,
  "y": 479
}, {
  "x": 77,
  "y": 118
}, {
  "x": 810,
  "y": 74
}, {
  "x": 668,
  "y": 101
}, {
  "x": 125,
  "y": 570
}, {
  "x": 734,
  "y": 267
}, {
  "x": 790,
  "y": 417
}, {
  "x": 784,
  "y": 204
}, {
  "x": 242,
  "y": 335
}, {
  "x": 548,
  "y": 458
}, {
  "x": 373,
  "y": 189
}, {
  "x": 88,
  "y": 216
}, {
  "x": 738,
  "y": 1
}, {
  "x": 588,
  "y": 384
}, {
  "x": 600,
  "y": 221
}, {
  "x": 161,
  "y": 340
}, {
  "x": 862,
  "y": 400
}, {
  "x": 717,
  "y": 82
}, {
  "x": 434,
  "y": 19
}, {
  "x": 367,
  "y": 476
}, {
  "x": 373,
  "y": 288
}, {
  "x": 198,
  "y": 508
}, {
  "x": 781,
  "y": 516
}, {
  "x": 410,
  "y": 401
}, {
  "x": 96,
  "y": 377
}, {
  "x": 779,
  "y": 653
}, {
  "x": 319,
  "y": 404
}, {
  "x": 680,
  "y": 66
}, {
  "x": 209,
  "y": 381
}, {
  "x": 664,
  "y": 41
}, {
  "x": 230,
  "y": 340
}, {
  "x": 650,
  "y": 499
}, {
  "x": 524,
  "y": 604
}, {
  "x": 344,
  "y": 287
}, {
  "x": 517,
  "y": 351
}, {
  "x": 4,
  "y": 10
}, {
  "x": 146,
  "y": 233
}, {
  "x": 766,
  "y": 185
}, {
  "x": 154,
  "y": 476
}, {
  "x": 153,
  "y": 534
}, {
  "x": 797,
  "y": 278
}, {
  "x": 686,
  "y": 434
}, {
  "x": 241,
  "y": 469
}, {
  "x": 8,
  "y": 550
}, {
  "x": 292,
  "y": 118
}, {
  "x": 737,
  "y": 118
}, {
  "x": 600,
  "y": 610
}, {
  "x": 134,
  "y": 405
}, {
  "x": 541,
  "y": 96
}, {
  "x": 178,
  "y": 53
}, {
  "x": 283,
  "y": 618
}, {
  "x": 227,
  "y": 559
}, {
  "x": 724,
  "y": 264
}, {
  "x": 93,
  "y": 192
}, {
  "x": 218,
  "y": 531
}, {
  "x": 279,
  "y": 395
}, {
  "x": 635,
  "y": 430
}, {
  "x": 783,
  "y": 424
}, {
  "x": 15,
  "y": 34
}, {
  "x": 106,
  "y": 406
}, {
  "x": 371,
  "y": 277
}, {
  "x": 659,
  "y": 222
}, {
  "x": 29,
  "y": 401
}, {
  "x": 27,
  "y": 194
}, {
  "x": 417,
  "y": 657
}, {
  "x": 548,
  "y": 12
}, {
  "x": 394,
  "y": 160
}, {
  "x": 727,
  "y": 410
}, {
  "x": 217,
  "y": 459
}, {
  "x": 286,
  "y": 629
}, {
  "x": 748,
  "y": 105
}, {
  "x": 679,
  "y": 514
}, {
  "x": 65,
  "y": 487
}, {
  "x": 221,
  "y": 160
}, {
  "x": 42,
  "y": 239
}, {
  "x": 822,
  "y": 390
}, {
  "x": 452,
  "y": 291
}, {
  "x": 561,
  "y": 107
}, {
  "x": 389,
  "y": 451
}, {
  "x": 317,
  "y": 94
}, {
  "x": 34,
  "y": 50
}, {
  "x": 324,
  "y": 284
}, {
  "x": 768,
  "y": 531
}, {
  "x": 678,
  "y": 432
}, {
  "x": 663,
  "y": 411
}, {
  "x": 153,
  "y": 27
}, {
  "x": 287,
  "y": 348
}, {
  "x": 444,
  "y": 184
}, {
  "x": 686,
  "y": 482
}, {
  "x": 129,
  "y": 122
}, {
  "x": 667,
  "y": 368
}, {
  "x": 263,
  "y": 78
}, {
  "x": 109,
  "y": 190
}, {
  "x": 271,
  "y": 208
}, {
  "x": 72,
  "y": 346
}, {
  "x": 582,
  "y": 5
}, {
  "x": 546,
  "y": 343
}, {
  "x": 432,
  "y": 305
}, {
  "x": 805,
  "y": 5
}, {
  "x": 329,
  "y": 100
}, {
  "x": 747,
  "y": 304
}, {
  "x": 255,
  "y": 283
}, {
  "x": 319,
  "y": 623
}, {
  "x": 602,
  "y": 145
}, {
  "x": 818,
  "y": 582
}, {
  "x": 478,
  "y": 491
}, {
  "x": 151,
  "y": 451
}, {
  "x": 628,
  "y": 605
}, {
  "x": 803,
  "y": 260
}, {
  "x": 706,
  "y": 636
}, {
  "x": 192,
  "y": 535
}, {
  "x": 342,
  "y": 177
}, {
  "x": 259,
  "y": 599
}, {
  "x": 365,
  "y": 229
}, {
  "x": 583,
  "y": 426
}, {
  "x": 340,
  "y": 562
}, {
  "x": 405,
  "y": 629
}, {
  "x": 116,
  "y": 260
}, {
  "x": 533,
  "y": 479
}, {
  "x": 411,
  "y": 615
}, {
  "x": 382,
  "y": 125
}, {
  "x": 36,
  "y": 272
}, {
  "x": 863,
  "y": 466
}, {
  "x": 600,
  "y": 288
}, {
  "x": 30,
  "y": 648
}, {
  "x": 335,
  "y": 269
}, {
  "x": 302,
  "y": 92
}, {
  "x": 607,
  "y": 98
}, {
  "x": 522,
  "y": 101
}, {
  "x": 801,
  "y": 339
}, {
  "x": 412,
  "y": 189
}, {
  "x": 776,
  "y": 446
}, {
  "x": 77,
  "y": 528
}, {
  "x": 425,
  "y": 547
}, {
  "x": 535,
  "y": 317
}, {
  "x": 802,
  "y": 229
}, {
  "x": 698,
  "y": 534
}, {
  "x": 109,
  "y": 109
}, {
  "x": 321,
  "y": 37
}, {
  "x": 232,
  "y": 115
}, {
  "x": 168,
  "y": 621
}, {
  "x": 637,
  "y": 502
}, {
  "x": 177,
  "y": 156
}, {
  "x": 66,
  "y": 376
}, {
  "x": 646,
  "y": 329
}, {
  "x": 345,
  "y": 290
}, {
  "x": 861,
  "y": 28
}, {
  "x": 791,
  "y": 184
}, {
  "x": 745,
  "y": 244
}, {
  "x": 90,
  "y": 370
}, {
  "x": 610,
  "y": 617
}, {
  "x": 592,
  "y": 452
}, {
  "x": 410,
  "y": 500
}, {
  "x": 410,
  "y": 288
}, {
  "x": 645,
  "y": 239
}, {
  "x": 278,
  "y": 163
}, {
  "x": 761,
  "y": 27
}, {
  "x": 275,
  "y": 33
}, {
  "x": 185,
  "y": 203
}, {
  "x": 794,
  "y": 129
}, {
  "x": 121,
  "y": 421
}, {
  "x": 505,
  "y": 126
}, {
  "x": 750,
  "y": 309
}, {
  "x": 222,
  "y": 518
}, {
  "x": 276,
  "y": 272
}, {
  "x": 626,
  "y": 61
}, {
  "x": 665,
  "y": 320
}, {
  "x": 379,
  "y": 38
}, {
  "x": 459,
  "y": 357
}, {
  "x": 337,
  "y": 450
}, {
  "x": 307,
  "y": 418
}, {
  "x": 867,
  "y": 631
}, {
  "x": 191,
  "y": 272
}, {
  "x": 55,
  "y": 465
}, {
  "x": 861,
  "y": 291
}, {
  "x": 465,
  "y": 101
}, {
  "x": 792,
  "y": 81
}, {
  "x": 750,
  "y": 278
}, {
  "x": 630,
  "y": 488
}, {
  "x": 382,
  "y": 539
}, {
  "x": 282,
  "y": 527
}, {
  "x": 345,
  "y": 575
}, {
  "x": 24,
  "y": 421
}, {
  "x": 810,
  "y": 491
}, {
  "x": 270,
  "y": 356
}, {
  "x": 22,
  "y": 646
}, {
  "x": 663,
  "y": 617
}, {
  "x": 861,
  "y": 452
}, {
  "x": 879,
  "y": 409
}, {
  "x": 90,
  "y": 515
}, {
  "x": 672,
  "y": 416
}, {
  "x": 331,
  "y": 68
}, {
  "x": 165,
  "y": 570
}, {
  "x": 706,
  "y": 384
}, {
  "x": 760,
  "y": 85
}, {
  "x": 235,
  "y": 477
}, {
  "x": 42,
  "y": 451
}, {
  "x": 442,
  "y": 598
}, {
  "x": 551,
  "y": 539
}, {
  "x": 334,
  "y": 419
}, {
  "x": 417,
  "y": 656
}, {
  "x": 137,
  "y": 610
}, {
  "x": 717,
  "y": 505
}, {
  "x": 56,
  "y": 619
}, {
  "x": 695,
  "y": 527
}, {
  "x": 501,
  "y": 514
}, {
  "x": 796,
  "y": 315
}, {
  "x": 322,
  "y": 218
}, {
  "x": 818,
  "y": 215
}, {
  "x": 2,
  "y": 239
}, {
  "x": 143,
  "y": 232
}, {
  "x": 240,
  "y": 38
}, {
  "x": 165,
  "y": 277
}, {
  "x": 281,
  "y": 91
}, {
  "x": 77,
  "y": 297
}, {
  "x": 477,
  "y": 18
}, {
  "x": 617,
  "y": 407
}, {
  "x": 419,
  "y": 170
}, {
  "x": 876,
  "y": 275
}, {
  "x": 159,
  "y": 277
}, {
  "x": 777,
  "y": 104
}, {
  "x": 857,
  "y": 25
}, {
  "x": 506,
  "y": 418
}, {
  "x": 800,
  "y": 170
}, {
  "x": 121,
  "y": 625
}, {
  "x": 500,
  "y": 579
}, {
  "x": 762,
  "y": 294
}, {
  "x": 428,
  "y": 614
}, {
  "x": 818,
  "y": 584
}, {
  "x": 826,
  "y": 101
}, {
  "x": 513,
  "y": 566
}, {
  "x": 719,
  "y": 638
}, {
  "x": 366,
  "y": 121
}, {
  "x": 2,
  "y": 142
}, {
  "x": 176,
  "y": 382
}, {
  "x": 220,
  "y": 280
}, {
  "x": 141,
  "y": 210
}, {
  "x": 437,
  "y": 419
}, {
  "x": 139,
  "y": 84
}, {
  "x": 581,
  "y": 449
}, {
  "x": 238,
  "y": 485
}, {
  "x": 12,
  "y": 139
}, {
  "x": 140,
  "y": 324
}, {
  "x": 127,
  "y": 542
}, {
  "x": 328,
  "y": 314
}, {
  "x": 207,
  "y": 123
}, {
  "x": 805,
  "y": 285
}, {
  "x": 4,
  "y": 566
}, {
  "x": 603,
  "y": 592
}, {
  "x": 641,
  "y": 77
}, {
  "x": 863,
  "y": 498
}, {
  "x": 201,
  "y": 387
}, {
  "x": 373,
  "y": 357
}, {
  "x": 112,
  "y": 322
}, {
  "x": 867,
  "y": 472
}, {
  "x": 381,
  "y": 633
}, {
  "x": 467,
  "y": 234
}, {
  "x": 134,
  "y": 63
}, {
  "x": 533,
  "y": 468
}, {
  "x": 6,
  "y": 185
}, {
  "x": 574,
  "y": 362
}, {
  "x": 311,
  "y": 451
}, {
  "x": 100,
  "y": 572
}, {
  "x": 318,
  "y": 47
}, {
  "x": 114,
  "y": 650
}, {
  "x": 704,
  "y": 641
}, {
  "x": 375,
  "y": 355
}, {
  "x": 693,
  "y": 391
}, {
  "x": 549,
  "y": 154
}, {
  "x": 355,
  "y": 167
}, {
  "x": 340,
  "y": 493
}, {
  "x": 17,
  "y": 98
}, {
  "x": 331,
  "y": 179
}, {
  "x": 667,
  "y": 431
}, {
  "x": 231,
  "y": 460
}, {
  "x": 335,
  "y": 270
}, {
  "x": 351,
  "y": 0
}, {
  "x": 843,
  "y": 449
}, {
  "x": 785,
  "y": 1
}, {
  "x": 306,
  "y": 86
}, {
  "x": 302,
  "y": 496
}, {
  "x": 790,
  "y": 236
}, {
  "x": 69,
  "y": 49
}, {
  "x": 732,
  "y": 160
}, {
  "x": 515,
  "y": 73
}, {
  "x": 342,
  "y": 253
}, {
  "x": 150,
  "y": 579
}, {
  "x": 126,
  "y": 317
}, {
  "x": 272,
  "y": 432
}, {
  "x": 482,
  "y": 301
}, {
  "x": 607,
  "y": 622
}, {
  "x": 158,
  "y": 53
}, {
  "x": 711,
  "y": 480
}, {
  "x": 652,
  "y": 193
}, {
  "x": 681,
  "y": 151
}, {
  "x": 828,
  "y": 359
}, {
  "x": 563,
  "y": 71
}, {
  "x": 70,
  "y": 138
}, {
  "x": 755,
  "y": 192
}, {
  "x": 636,
  "y": 133
}];
exports.points500 = points500;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _coordinates = require("./coordinates");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_coordinates.points200.sort(function (cityA, cityB) {
  var cityACombined = cityA.x + cityA.y;
  var cityBCombined = cityB.x + cityB.y;
  return cityACombined - cityBCombined;
});

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var maxCoordWidth, maxCoordHeight, xScale, yScale, cities, timeout, radius;
window.addEventListener("resize", function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    setCanvasDimensions();
    cities.forEach(function (city, i) {
      var next = cities[i + 1] ? cities[i + 1] : cities[0];
      city.draw(next);
    });
  }, 100);
});

function initializeMap() {
  var _coordinates$reduce = _coordinates.points200.reduce(function (maxVals, city) {
    if (city.x > maxVals[0]) {
      maxVals[0] = city.x;
    }

    if (city.y > maxVals[1]) {
      maxVals[1] = city.y;
    }

    return maxVals;
  }, [0, 0]);

  var _coordinates$reduce2 = _slicedToArray(_coordinates$reduce, 2);

  maxCoordWidth = _coordinates$reduce2[0];
  maxCoordHeight = _coordinates$reduce2[1];
  setCanvasDimensions();
  cities = _coordinates.points200.map(function (city, i) {
    var circle = new Circle(city.x, city.y);
    var next = _coordinates.points200[i + 1] ? _coordinates.points200[i + 1] : _coordinates.points200[0];
    circle.draw(next);
    return circle;
  });
}

function setCanvasDimensions() {
  canvas.width = c.canvas.clientWidth;
  canvas.height = canvas.width * 0.6;
  xScale = canvas.width / maxCoordWidth;
  yScale = canvas.height / maxCoordHeight;
  radius = canvas.width * 0.003;
}

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.color = "#0000ff";

  this.draw = function (next) {
    var currentX = this.x * xScale;
    var currentY = this.y * yScale;
    var nextX = next.x * xScale;
    var nextY = next.y * yScale; // current city

    c.beginPath();
    c.arc(currentX, currentY, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1; // line to next city

    c.beginPath();
    c.moveTo(currentX, currentY);
    c.lineTo(nextX, nextY);
    c.stroke();
  };
}

initializeMap();
},{"./coordinates":"js/coordinates.js"}],"../../../Users/matthewmasurka/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49498" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/matthewmasurka/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map