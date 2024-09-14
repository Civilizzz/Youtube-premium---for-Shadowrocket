// Build: 2024/6/11 21:59:22
(() => {
    var ct = Object.defineProperty;
    var ft = (t, e, n) => e in t ? ct(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n;
    var _ = (t, e, n) => (ft(t, typeof e != "symbol" ? e + "" : e, n), n);

    (function (t) {
        function e() {}
        function n() {}
        var r = String.fromCharCode,
            s = {}.toString,
            o = s.call(t.SharedArrayBuffer),
            i = s(),
            a = t.Uint8Array,
            c = a || Array,
            u = a ? ArrayBuffer : c,
            l = u.isView || function (h) {
                return h && "length" in h
            },
            m = s.call(u.prototype);
        u = n.prototype;
        var p = t.TextEncoder,
            d = new(a ? Uint16Array : c)(32);
        e.prototype.decode = function (h) {
            if (!l(h)) {
                var B = s.call(h);
                if (B !== m && B !== o && B !== i) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                h = a ? new c(h) : h || []
            }
            for (var N = B = "", g = 0, b = h.length | 0, G = b - 32 | 0, k, w, E = 0, M = 0, O, S = 0, U = -1; g < b;) {
                for (k = g <= G ? 32 : b - g | 0; S < k; g = g + 1 | 0, S = S + 1 | 0) {
                    switch (w = h[g] & 255, w >> 4) {
                        case 15:
                            if (O = h[g = g + 1 | 0] & 255, O >> 6 !== 2 || 247 < w) {
                                g = g - 1 | 0;
                                break
                            }
                            E = (w & 7) << 6 | O & 63, M = 5, w = 256;
                        case 14:
                            O = h[g = g + 1 | 0] & 255, E <<= 6, E |= (w & 15) << 6 | O & 63, M = O >> 6 === 2 ? M + 4 | 0 : 24, w = w + 256 & 768;
                        case 13:
                        case 12:
                            O = h[g = g + 1 | 0] & 255, E <<= 6, E |= (w & 31) << 6 | O & 63, M = M + 7 | 0, g < b && O >> 6 === 2 && E >> M && 1114112 > E ? (w = E, E = E - 65536 | 0, 0 <= E && (U = (E >> 10) + 55296 | 0, w = (E & 1023) + 56320 | 0, 31 > S ? (d[S] = U, S = S + 1 | 0, U = -1) : (O = U, U = w, w = O))) : (w >>= 8, g = g - w - 1 | 0, w = 65533), E = M = 0, k = g <= G ? 32 : b - g | 0;
                        default:
                            d[S] = w;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    d[S] = 65533
                }
                if (N += r(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15], d[16], d[17], d[18], d[19], d[20], d[21], d[22], d[23], d[24], d[25], d[26], d[27], d[28], d[29], d[30], d[31]), 32 > S && (N = N.slice(0, S - 32 | 0)), g < b) {
                    if (d[0] = U, S = ~U >>> 31, U = -1, N.length < B.length) continue
                } else U !== -1 && (N += r(U));
                B += N, N = ""
            }
            return B
        }, u.encode = function (h) {
            h = h === void 0 ? "" : "" + h;
            var B = h.length | 0,
                N = new c((B << 1) + 8 | 0),
                g, b = 0,
                G = !a;
            for (g = 0; g < B; g = g + 1 | 0, b = b + 1 | 0) {
                var k = h.charCodeAt(g) | 0;
                if (127 >= k) N[b] = k;
                else {
                    if (2047 >= k) N[b] = 192 | k >> 6;
                    else {
                        e: {
                            if (55296 <= k)
                                if (56319 >= k) {
                                    var w = h.charCodeAt(g = g + 1 | 0) | 0;
                                    if (56320 <= w && 57343 >= w) {
                                        if (k = (k << 10) + w - 56613888 | 0, 65535 < k) {
                                            N[b] = 240 | k >> 18, N[b = b + 1 | 0] = 128 | k >> 12 & 63, N[b = b + 1 | 0] = 128 | k >> 6 & 63, N[b = b + 1 | 0] = 128 | k & 63;
                                            continue
                                        }
                                        break e
                                    }
                                    k = 65533
                                } else 57343 >= k && (k = 65533);
                            !G && g << 1 < b && g << 1 < (b - 7 | 0) && (G = !0, w = new c(3 * B), w.set(N), N = w)
                        }
                        N[b] = 224 | k >> 12, N[b = b + 1 | 0] = 128 | k >> 6 & 63
                    }
                    N[b = b + 1 | 0] = 128 | k & 63
                }
            }
            return a ? N.subarray(0, b) : N.slice(0, b)
        }, p || (t.TextDecoder = e, t.TextEncoder = n)
    })(globalThis);

    function T(t, e) {
        if (!t) throw new Error(e)
    }
    
    // Custom logic here...
    
    var x = v.getInstance("YouTube");

    class de {
        constructor(e, n) {
            this.name = n;
            this.msgType = e;
            this.argument = this.decodeArgument();
            x.isDebug = Boolean(this.argument.debug);
            x.debug(this.name);
            Object.assign(this, x.getJSON("YouTubeAdvertiseInfo", {
                whiteNo: [],
                blackNo: [],
                whiteEml: [],
                blackEml: []
            }))
        }

        decodeArgument() {
            let e = {
                blockUpload: "\u5C4F\u853D\u4E0A\u4F20\u6309\u94AE",
                blockImmersive: "\u5C4F\u853D\u9009\u6BB5\u6309\u94AE",
                debug: "\u542F\u52A8\u8C03\u8BD5\u6A21\u5F0F"
            };
            let n = {
                blockUpload: !0,
                blockImmersive: !0,
                debug: !1
            };
            return x.decodeParams(n, e);
        }

        fromBinary(e) {
            return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), x.debug(`raw: ${Math.floor(e.length / 1024)} kb`), this) : (x.log("YouTube can not get binaryBody"), x.exit(), this)
        }

        async modify() {
            let e = this.pure();
            return e instanceof Promise ? await e : e
        }

        toBinary() {
            return this.message.toBinary()
        }

        listUnknownFields(e) {
            return e instanceof F ? e.getType().runtime.bin.listUnknownFields(e) : []
        }

        save() {
            if (this.needSave) {
                x.debug("Update Config");
                let e = {
                    whiteNo: this.whiteNo,
                    blackNo: this.blackNo,
                    whiteEml: this.whiteEml,
                    blackEml: this.blackEml
                };
                x.setJSON(e, "YouTubeAdvertiseInfo")
            }
        }

        done() {
            if (this.save(), this.needProcess) {
                x.timeStart("toBinary");
                let e = this.toBinary();
                x.timeEnd("toBinary"), x.debug(`modify: ${Math.floor(e.length / 1024)} kb`), x.done({
                    bodyBytes: e
                })
            }
            x.debug("use $done({})"), x.exit()
        }

        iterate(e = {}, n, r) {
            let s = typeof e == "object" ? [e] : [];
            for (; s.length;) {
                let o = s.pop(),
                    i = Object.keys(o);
                if (typeof n == "symbol") {
                    for (let a of Object.getOwnPropertySymbols(o))
                        if (a.description === n.description) {
                            r(o, s);
                            break
                        }
                }
                for (let a of i) a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a])
            }
        }

        isAdvertise(e) {
            let n = this.listUnknownFields(e)[0];
            return n ? this.handleFieldNo(n) : this.handleFieldEml(e)
        }

        handleFieldNo(e) {
            let n = e.no;
            if (this.whiteNo.includes(n)) return !1;
            if (this.blackNo.includes(n)) return !0;
            let s = this.decoder.decode(e.data).includes("pagead");
            return s ? this.blackNo.push(n) : this.whiteNo.push(n), this.needSave = !0, s
        }

        handleFieldEml(e) {
            let n = !1,
                r = "";
            return this.iterate(e, "renderInfo", (s, o) => {
                if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1;
                else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
                else {
                    let i = s?.videoInfo?.videoContext?.videoContent;
                    if (i) {
                        let a = this.listUnknownFields(i)[0];
                        n = this.decoder.decode(a.data).includes("pagead"), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0
                    }
                }
                o.length = 0
            }), n
        }

        isShorts(e) {
            let n = !1;
            return this.iterate(e, "eml", (r, s) => {
                n = /shorts(?!_pivot_item)/.test(r.eml), s.length = 0
            }), n
        }
    }

    var z = class extends de {
        constructor(e = at, n = "Request") {
            super(e, n)
        }

        pure() {
            return this.message.context.adSignalsInfo.params.length = 0, this.needProcess = !0, this
        }
    };

    async function $t() {
        let t = new z;
        await t.fromBinary(x.request.bodyBytes).pure(), t.done()
    }
    $t().catch(t => {
        x.log(t.toString())
    }).finally(() => {
        x.exit()
    });
})();
