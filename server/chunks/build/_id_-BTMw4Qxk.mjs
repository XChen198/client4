import { _ as _imports_0, E as ElAvatar } from './avatar-C5zrmqtt.mjs';
import { E as ElText } from './el-text-sKQKCsgX.mjs';
import { E as ElDivider } from './el-overlay-NUyLuOGi.mjs';
import { E as ElRow, a as ElCol } from './el-col-nHHSVIx3.mjs';
import { E as ElInput } from './el-input-BJwADpFQ.mjs';
import { E as ElButton } from './el-button-B_uZxiJN.mjs';
import { E as ElPagination } from './el-pagination-DbL4LA0G.mjs';
import { p as fetchDefaults, h as __nuxt_component_8, o as useNuxtApp } from './server.mjs';
import { E as ElMessage } from './el-message-BN3M17qx.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed, toValue, reactive } from 'vue';
import { u as useAsyncData } from './asyncData-gqwOdZ68.mjs';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useUserStore } from './user-C06b1g6F.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './use-form-item-Csc9I1IS.mjs';
import './index-BNZmkjas.mjs';
import './index-CUqN8X7N.mjs';
import './index-yaG29TSu.mjs';
import './el-select-CiHHeXbQ.mjs';
import './el-popper-BgZ3UHtF.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:net';
import 'node:path';

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}
class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { params } = useRoute();
    const userStore = useUserStore();
    const router = useRouter();
    const currentPage = ref(1);
    const currentChildPage = ref(1);
    ref(0);
    const content = ref("");
    const replycontent = ref("");
    ref("");
    const temp = ref("");
    ref("");
    const child = ref({
      total: 0,
      comments: [],
      parent: {
        _id: "",
        content: "",
        avatar: "",
        createdAt: "",
        updatedAt: "",
        username: ""
      }
    });
    const drawer = ref(false);
    const size = ref("50%");
    const send = ref(false);
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://nyknow.com/api/post/${params.id}`, {
      method: "GET",
      credentials: "include"
    }, "$ha8dIhfv4Y")), __temp = await __temp, __restore(), __temp);
    const { data: comments } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "comments",
      () => $fetch(`https://nyknow.com/api/comment/get?postId=${params.id}&currentPage=${currentPage.value}`, {
        method: "GET",
        credentials: "include"
      }),
      {
        watch: [currentPage, send]
      }
    )), __temp = await __temp, __restore(), __temp);
    const showReplyArea = (commentId) => {
      replycontent.value = "";
      temp.value = commentId;
    };
    const showChildComments = async (commentId, isShow) => {
      if ((void 0).innerWidth < 768) {
        size.value = "100%";
      } else {
        size.value = "50%";
      }
      try {
        const res = await $fetch(`https://nyknow.com/api/comment/child?parentId=${commentId}&currentPage=${currentChildPage.value}`, {
          method: "GET",
          credentials: "include"
        });
        if (res.code === 0) {
          child.value = res.data;
          drawer.value = isShow;
        } else {
          ElMessage.error(res.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    const replyComment = async (commentId) => {
      try {
        const res = await $fetch("https://nyknow.com/api/user", {
          method: "GET",
          credentials: "include"
        });
        if (res.code === 0) {
          userStore.setUserInfo(res.data);
        } else {
          ElMessage.error("\u8BC4\u8BBA\u524D\u8BF7\u5148\u767B\u5F55");
          router.push("/login");
        }
        const res2 = await $fetch("https://nyknow.com/api/comment/reply", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            parentId: commentId,
            postId: params.id,
            content: replycontent.value
          })
        });
        if (res2.code === 0) {
          ElMessage.success(res2.message);
          replycontent.value = "";
          send.value = !send.value;
          drawer.value = false;
        } else {
          ElMessage.error(res2.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    const handlePageChange = (val) => {
      currentPage.value = val;
    };
    const sendComment = async () => {
      try {
        const res = await $fetch("https://nyknow.com/api/comment/create", {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            postId: params.id,
            content: content.value
          })
        });
        if (res.code === 0) {
          content.value = "";
          ElMessage.success(res.message);
          send.value = !send.value;
        } else {
          ElMessage.error(res.message);
        }
      } catch (error) {
        ElMessage.error("\u7F51\u7EDC\u9519\u8BEF");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_avatar = ElAvatar;
      const _component_el_text = ElText;
      const _component_el_divider = ElDivider;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_el_pagination = ElPagination;
      const _component_client_only = __nuxt_component_8;
      _push(`<!--[--><div class="back" data-v-a10d5c05><div class="backbtn" data-v-a10d5c05><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" style="${ssrRenderStyle({ "width": "24px", "vertical-align": "text-top" })}" data-v-a10d5c05><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" data-v-a10d5c05></path><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" data-v-a10d5c05></path></svg><span style="${ssrRenderStyle({ "margin-left": "5px" })}" data-v-a10d5c05>\u8FD4\u56DE</span></div></div><div class="post" data-v-a10d5c05>`);
      _push(ssrRenderComponent(_component_el_avatar, {
        size: 50,
        src: unref(post).data.avatar,
        style: { "vertical-align": "middle" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-a10d5c05${_scopeId}>`);
          } else {
            return [
              createVNode("img", { src: _imports_0 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="username" data-v-a10d5c05>${ssrInterpolate(unref(post).data.username)}</span><div class="main" data-v-a10d5c05><h3 data-v-a10d5c05>${ssrInterpolate(unref(post).data.title)}</h3><div data-v-a10d5c05>${(_a = unref(post).data.content) != null ? _a : ""}</div></div><div class="footer" data-v-a10d5c05><span data-v-a10d5c05>${ssrInterpolate(unref(post).data.createdAt.split("T")[0])}</span></div></div><div class="comments" data-v-a10d5c05>`);
      _push(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6D4F\u89C8\u91CF: ${ssrInterpolate(unref(post).data.visitors)}`);
          } else {
            return [
              createTextVNode("\u6D4F\u89C8\u91CF: " + toDisplayString(unref(post).data.visitors), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        class: "mx-1",
        style: { "margin-left": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8BC4\u8BBA\u6570: ${ssrInterpolate(unref(post).data.comments)}`);
          } else {
            return [
              createTextVNode("\u8BC4\u8BBA\u6570: " + toDisplayString(unref(post).data.comments), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(comments).data.comments, (comment) => {
        _push(`<div class="comment" data-v-a10d5c05>`);
        _push(ssrRenderComponent(_component_el_avatar, {
          size: 45,
          src: comment.avatar,
          style: { "vertical-align": "middle" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} data-v-a10d5c05${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: _imports_0 })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span style="${ssrRenderStyle({ "margin-left": "8px" })}" data-v-a10d5c05>${ssrInterpolate(comment.username)}</span><div class="content" data-v-a10d5c05>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "large"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.content)}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        if (comment.total !== 0) {
          _push(ssrRenderComponent(_component_el_row, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(comment.childComments, (childComment) => {
                  _push2(ssrRenderComponent(_component_el_col, {
                    style: { "margin-bottom": "8px" },
                    key: childComment._id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, { class: "mx-1" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(childComment.username)}: ${ssrInterpolate(childComment.content)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, { class: "mx-1" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (comment.total > 2) {
                  _push2(ssrRenderComponent(_component_el_col, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_el_text, {
                          class: "mx-1 checkTotal",
                          onClick: ($event) => showChildComments(comment._id, true)
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`\u67E5\u770B\u5168\u90E8${ssrInterpolate(comment.total)}\u6761\u8BC4\u8BBA`);
                            } else {
                              return [
                                createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_el_text, {
                            class: "mx-1 checkTotal",
                            onClick: ($event) => showChildComments(comment._id, true)
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(comment.childComments, (childComment) => {
                    return openBlock(), createBlock(_component_el_col, {
                      style: { "margin-bottom": "8px" },
                      key: childComment._id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_text, { class: "mx-1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(childComment.username) + ": " + toDisplayString(childComment.content), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  comment.total > 2 ? (openBlock(), createBlock(_component_el_col, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_text, {
                        class: "mx-1 checkTotal",
                        onClick: ($event) => showChildComments(comment._id, true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u67E5\u770B\u5168\u90E8" + toDisplayString(comment.total) + "\u6761\u8BC4\u8BBA", 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div style="${ssrRenderStyle({ "margin": "0 auto" })}" class="timeAndReply" data-v-a10d5c05>`);
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.createdAt.split("T")[0])}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.createdAt.split("T")[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_el_text, {
          class: "mx-1 reply",
          style: { "margin-left": "10px" },
          onClick: ($event) => showReplyArea(comment._id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u56DE\u590D`);
            } else {
              return [
                createTextVNode("\u56DE\u590D")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (temp.value === comment._id) {
          _push(`<div data-v-a10d5c05>`);
          _push(ssrRenderComponent(_component_el_input, {
            modelValue: replycontent.value,
            "onUpdate:modelValue": ($event) => replycontent.value = $event,
            modelModifiers: { trim: true },
            placeholder: "\u8BF7\u8F93\u5165\u8981\u56DE\u590D\u7684\u5185\u5BB9",
            type: "textarea",
            style: { "width": "100%" },
            rows: 2
          }, null, _parent));
          _push(ssrRenderComponent(_component_el_button, {
            type: "primary",
            style: { "width": "100%", "margin-top": "10px" },
            onClick: ($event) => replyComment(comment._id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u56DE\u590D`);
              } else {
                return [
                  createTextVNode("\u56DE\u590D")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(comments).data.total !== 0) {
        _push(ssrRenderComponent(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: unref(comments).data.total,
          "page-size": 10,
          "pager-count": 5,
          style: { "justify-content": "center" },
          onCurrentChange: handlePageChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sendComment" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-a10d5c05>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: content.value,
        "onUpdate:modelValue": ($event) => content.value = $event,
        modelModifiers: { trim: true },
        placeholder: "\u8BF7\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9",
        type: "textarea",
        style: { "width": "100%" },
        rows: 6
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        type: "primary",
        size: "large",
        onClick: sendComment,
        style: { "width": "100%", "margin-top": "10px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u53D1\u9001`);
          } else {
            return [
              createTextVNode("\u53D1\u9001")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a10d5c05"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BTMw4Qxk.mjs.map
