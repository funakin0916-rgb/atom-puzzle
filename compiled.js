function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  useContext
} = React;

// ═══════════════════════════════════════════════════════════
// げんしパズルゲーム 🧪 v4 PREMIUM EDITION
// ═══════════════════════════════════════════════════════════

/* ── 言語コンテキスト ─── */
const LangCtx = createContext("hiragana");
const useLang = () => useContext(LangCtx);
const useT = () => {
  const lang = useLang();
  return k => {
    var _ref, _TX$lang$k, _TX$lang;
    return (_ref = (_TX$lang$k = (_TX$lang = TX[lang]) === null || _TX$lang === void 0 ? void 0 : _TX$lang[k]) !== null && _TX$lang$k !== void 0 ? _TX$lang$k : TX.hiragana[k]) !== null && _ref !== void 0 ? _ref : k;
  };
};

/* ── テキスト辞書 ─── */
const TX = {
  hiragana: {
    title1: "げんしパズル",
    title2: "ゲーム",
    solo: "ひとりであそぶ",
    soloSub: "コンピュータとたいせん",
    story: "ストーリーモード",
    storySub: "てきをたおしてすすめ！",
    storyStage: "ステージ",
    storyFight: "たたかう！",
    storyLocked: "🔒",
    storyClear: "クリアずみ",
    storyBack: "もどる",
    multi: "みんなであそぶ",
    multiSub: "スマホをまわしてたいせん",
    rules: "あそびかた",
    settings: "ルールせってい",
    hlLabel: "てふだのじょうげん",
    basic: "きほん",
    langLabel: "もじのせってい",
    langH: "ひらがな",
    langK: "かんじ",
    soundLabel: "おとのせってい",
    bgmLabel: "BGM",
    seLabel: "こうかおん",
    onLabel: "ON",
    offLabel: "OFF",
    r1: "カードを1まいひく",
    r2: "てふだのげんしをくみあわせて ものをつくる →「できた！」🎉",
    r3: "つくれない →「パス」でつぎへ",
    r4: "まいをこえたら1まいすてる",
    r5: "やまふだがなくなったらおわり！",
    r6: "とくてんがたかいひとのかち🏆",
    r7: "💎 Cを7まいあつめたら35てん！",
    name: "じぶんのなまえ",
    opp: "あいてのにんずう",
    str: "つよさ",
    easy: "😊やさしい",
    normal: "😐ふつう",
    hard: "😈つよい",
    start: "スタート！",
    gstart: "ゲームスタート！",
    back: "← もどる",
    howMany: "なんにん？",
    pn: "ばんめのひとのなまえ",
    unit: "たい",
    unitP: "にん",
    passD: "スマホをわたしてね！",
    next: "つぎは",
    trn: "のばん！",
    ready: "👋 じゅんびOK！",
    dkRem: "やまふだのこり",
    mai: "まい",
    lastR: "⚡ さいごのラウンド！",
    sc: "とくてん",
    dk: "やまふだ",
    tl: "のばん",
    drawn: "ひいたカード →",
    bondOk: "✅ できた！つづけてつくることもできるよ",
    discW: "まいをこえています！つくるか、1まいすてよう",
    hand: "てふだ",
    tapS: "– タップでえらぶ",
    tapD: "– すてるカードをタップ",
    canB: "つくれるよ！",
    sp: "スペシャル！",
    bBtn: "🔗 できた！",
    drB: "🃏 カードをひく",
    tEnd: "➡️ ターンおわり",
    exp: "🔬 パス",
    fin: "🏁 ゲームしゅうりょう！",
    crO: "▼ カードのこりすうをみる",
    crC: "▲ カードのこりすうをとじる",
    crN: "※「のこり」＝やまふだ＋ほかのひとのてふだ",
    cpO: "▼ とくてんひょうをみる",
    cpC: "▲ とくてんひょうをとじる",
    now: "🟢 いまつくれるもの",
    all: "ぜんぶのかごうぶつ",
    scL: "🏆 スコア",
    pt: "てん",
    gOver: "ゲームしゅうりょう！",
    res: "けっかはっぴょう🎉",
    win: "のかち！",
    tie: "ひきわけ！",
    lose: "ざんねん…",
    loseMsg: "まけてしまった…",
    retry: "つぎはがんばろう！",
    again: "🔄 もういちどあそぶ",
    pdif: "てんさ",
    more: "てんおおい！",
    noB: "つくれなかった",
    cpuT: "🔬 パス…",
    cpuB: "できた！",
    bgmOn: "🔊 BGM",
    bgmOff: "🔇 BGM",
    quit: "やめる",
    quitConfirm: "ほんとうにやめますか？\nトップにもどります",
    locked: "🔒",
    premTitle: "🧪 ぜんぶあそべるばん",
    premMsg: "のこり10しゅの かごうぶつが つくれるようになるよ！",
    premBtn: "🔓 かいほうする（¥250）",
    premDone: "✅ かいほうずみ！",
    H: "すいそ",
    O: "さんそ",
    C: "たんそ",
    N: "ちっそ",
    S: "いおう",
    Cl: "えんそ",
    Na: "ナトリウム",
    Cu: "どう",
    Ag: "ぎん",
    Fe: "てつ",
    cH2: "すいそぶんし",
    cO2: "さんそぶんし",
    cH2O: "みず",
    cHCl: "えんかすいそ",
    cCO2: "にさんかたんそ",
    cN2: "ちっそぶんし",
    cCl2: "えんそぶんし",
    cCuO: "さんかどう",
    cNaCl: "えんかナトリウム",
    cAgCl: "えんかぎん",
    cFeO: "さんかてつ",
    cNaOH: "すいさんかナトリウム",
    cCuS: "りゅうかどう",
    cFeS: "りゅうかてつ",
    cH2S: "りゅうかすいそ",
    cO3: "オゾン",
    cSO2: "にさんかいおう",
    cNa2O: "さんかナトリウム",
    cFe2O: "さんかてつ(II)",
    cCH4: "メタン",
    cAg2O: "さんかぎん",
    cNH3: "アンモニア",
    cAg2S: "りゅうかぎん",
    cCuCl2: "えんかどう",
    cFeCl2: "えんかてつ",
    cNa2S: "りゅうかナトリウム",
    cSO3: "さんさんかいおう",
    cNaHCO3: "じゅうそう",
    cCH3Cl: "クロロメタン",
    cFe2O3: "さんかてつ(III)",
    cC2H2: "アセチレン",
    cNa2CO3: "たんさんナトリウム",
    cCH4O: "メタノール",
    cH2SO4: "りゅうさん",
    cC7: "ダイヤモンド"
  },
  kanji: {
    title1: "原子パズル",
    title2: "ゲーム",
    solo: "一人で遊ぶ",
    soloSub: "コンピュータと対戦",
    story: "ストーリーモード",
    storySub: "敵を倒して進め！",
    storyStage: "ステージ",
    storyFight: "たたかう！",
    storyLocked: "🔒",
    storyClear: "クリア済み",
    storyBack: "戻る",
    multi: "みんなで遊ぶ",
    multiSub: "スマホを回して対戦",
    rules: "遊び方",
    settings: "ルール設定",
    hlLabel: "手札の上限",
    basic: "基本",
    langLabel: "文字の設定",
    langH: "ひらがな",
    langK: "漢字",
    soundLabel: "音の設定",
    bgmLabel: "BGM",
    seLabel: "効果音",
    onLabel: "ON",
    offLabel: "OFF",
    r1: "カードを1枚引く",
    r2: "手札の原子を組み合わせて物質を作る →「できた！」🎉",
    r3: "作れない →「パス」で次へ",
    r4: "枚を超えたら1枚捨てる",
    r5: "山札がなくなったら終わり！",
    r6: "得点が高い人の勝ち🏆",
    r7: "💎 Cを7枚集めたら35点！",
    name: "自分の名前",
    opp: "相手の人数",
    str: "強さ",
    easy: "😊やさしい",
    normal: "😐ふつう",
    hard: "😈強い",
    start: "スタート！",
    gstart: "ゲームスタート！",
    back: "← 戻る",
    howMany: "何人？",
    pn: "番目の人の名前",
    unit: "体",
    unitP: "人",
    passD: "スマホを渡してね！",
    next: "次は",
    trn: "の番！",
    ready: "👋 準備OK！",
    dkRem: "山札残り",
    mai: "枚",
    lastR: "⚡ 最後のラウンド！",
    sc: "得点",
    dk: "山札",
    tl: "の番",
    drawn: "引いたカード →",
    bondOk: "✅ できた！続けて作ることもできるよ",
    discW: "枚を超えています！作るか、1枚捨てよう",
    hand: "手札",
    tapS: "– タップで選ぶ",
    tapD: "– 捨てるカードをタップ",
    canB: "作れるよ！",
    sp: "スペシャル！",
    bBtn: "🔗 できた！",
    drB: "🃏 カードを引く",
    tEnd: "➡️ ターン終わり",
    exp: "🔬 パス",
    fin: "🏁 ゲーム終了！",
    crO: "▼ カード残り数を見る",
    crC: "▲ カード残り数を閉じる",
    crN: "※「残り」＝山札＋他の人の手札",
    cpO: "▼ 得点表を見る",
    cpC: "▲ 得点表を閉じる",
    now: "🟢 今作れるもの",
    all: "全ての化合物",
    scL: "🏆 スコア",
    pt: "点",
    gOver: "ゲーム終了！",
    res: "結果発表🎉",
    win: "の勝ち！",
    tie: "引き分け！",
    lose: "残念…",
    loseMsg: "負けてしまった…",
    retry: "次はがんばろう！",
    again: "🔄 もう一度遊ぶ",
    pdif: "点差",
    more: "点多い！",
    noB: "作れなかった",
    cpuT: "🔬 パス…",
    cpuB: "できた！",
    bgmOn: "🔊 BGM",
    bgmOff: "🔇 BGM",
    quit: "やめる",
    quitConfirm: "本当にやめますか？\nトップに戻ります",
    locked: "🔒",
    premTitle: "🧪 全部遊べる版",
    premMsg: "残り10種の化合物が作れるようになるよ！",
    premBtn: "🔓 解放する（¥250）",
    premDone: "✅ 解放済み！",
    H: "水素",
    O: "酸素",
    C: "炭素",
    N: "窒素",
    S: "硫黄",
    Cl: "塩素",
    Na: "ナトリウム",
    Cu: "銅",
    Ag: "銀",
    Fe: "鉄",
    cH2: "水素分子",
    cO2: "酸素分子",
    cH2O: "水",
    cHCl: "塩化水素",
    cCO2: "二酸化炭素",
    cN2: "窒素分子",
    cCl2: "塩素分子",
    cCuO: "酸化銅",
    cNaCl: "塩化ナトリウム",
    cAgCl: "塩化銀",
    cFeO: "酸化鉄",
    cNaOH: "水酸化ナトリウム",
    cCuS: "硫化銅",
    cFeS: "硫化鉄",
    cH2S: "硫化水素",
    cO3: "オゾン",
    cSO2: "二酸化硫黄",
    cNa2O: "酸化ナトリウム",
    cFe2O: "酸化鉄(II)",
    cCH4: "メタン",
    cAg2O: "酸化銀",
    cNH3: "アンモニア",
    cAg2S: "硫化銀",
    cCuCl2: "塩化銅(II)",
    cFeCl2: "塩化鉄(II)",
    cNa2S: "硫化ナトリウム",
    cSO3: "三酸化硫黄",
    cNaHCO3: "重曹",
    cCH3Cl: "クロロメタン",
    cFe2O3: "酸化鉄(III)",
    cC2H2: "アセチレン",
    cNa2CO3: "炭酸ナトリウム",
    cCH4O: "メタノール",
    cH2SO4: "硫酸",
    cC7: "ダイヤモンド"
  }
};

/* ── サウンドエンジン ─── */
let _seEnabled = true;
const SE = (() => {
  let ctx = null;
  const gc = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };
  const p = fn => {
    if (!_seEnabled) return;
    try {
      fn(gc());
    } catch (e) {}
  };
  const tone = (c, type, f1, f2, dur, vol = 0.12) => {
    const o = c.createOscillator(),
      g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f1, c.currentTime);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, c.currentTime + dur * 0.6);
    g.gain.setValueAtTime(vol, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    o.connect(g).connect(c.destination);
    o.start(c.currentTime);
    o.stop(c.currentTime + dur);
  };
  return {
    setEnabled: v => {
      _seEnabled = v;
    },
    isEnabled: () => _seEnabled,
    cardDraw: () => p(c => tone(c, "sine", 800, 1200, 0.15, 0.15)),
    cardSel: () => p(c => tone(c, "triangle", 600, 900, 0.1, 0.1)),
    cardDesel: () => p(c => tone(c, "triangle", 700, 400, 0.1, 0.08)),
    bond: pts => p(c => {
      const t = c.currentTime;
      const ns = pts >= 15 ? [523, 659, 784, 1047, 1319] : pts >= 9 ? [523, 659, 784, 1047] : pts >= 5 ? [523, 659, 784] : [523, 659];
      ns.forEach((f, i) => {
        const o = c.createOscillator(),
          g = c.createGain();
        o.type = pts >= 15 ? "square" : "sine";
        o.frequency.setValueAtTime(f, t + i * 0.12);
        g.gain.setValueAtTime(0.12, t + i * 0.12);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.4);
        o.connect(g).connect(c.destination);
        o.start(t + i * 0.12);
        o.stop(t + i * 0.12 + 0.4);
      });
    }),
    pass: () => p(c => tone(c, "sine", 400, 300, 0.25, 0.08)),
    discard: () => p(c => tone(c, "sawtooth", 300, 100, 0.2, 0.06)),
    gStart: () => p(c => {
      const t = c.currentTime;
      [523, 659, 784, 1047].forEach((f, i) => {
        const o = c.createOscillator(),
          g = c.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, t + i * 0.1);
        g.gain.setValueAtTime(0.12, t + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.3);
        o.connect(g).connect(c.destination);
        o.start(t + i * 0.1);
        o.stop(t + i * 0.1 + 0.3);
      });
    }),
    tap: () => p(c => tone(c, "sine", 1000, null, 0.05, 0.05)),
    victory: () => p(c => {
      const t = c.currentTime;
      [523, 523, 523, 698, 784, 698, 784, 1047].forEach((f, i) => {
        const o = c.createOscillator(),
          g = c.createGain();
        o.type = i >= 6 ? "square" : "sine";
        o.frequency.setValueAtTime(f, t + i * 0.18);
        g.gain.setValueAtTime(0.15, t + i * 0.18);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.18 + 0.5);
        o.connect(g).connect(c.destination);
        o.start(t + i * 0.18);
        o.stop(t + i * 0.18 + 0.5);
      });
    }),
    lose: () => p(c => {
      const t = c.currentTime;
      [392, 349, 330, 294, 262].forEach((f, i) => {
        const o = c.createOscillator(),
          g = c.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f, t + i * 0.3);
        g.gain.setValueAtTime(0.1, t + i * 0.3);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.3 + 0.6);
        o.connect(g).connect(c.destination);
        o.start(t + i * 0.3);
        o.stop(t + i * 0.3 + 0.6);
      });
    }),
    drum: () => p(c => {
      const t = c.currentTime;
      for (let i = 0; i < 20; i++) {
        const o = c.createOscillator(),
          g = c.createGain();
        o.type = "sawtooth";
        o.frequency.setValueAtTime(80 + i * 3, t + i * 0.06);
        g.gain.setValueAtTime(0.03 + i * 0.005, t + i * 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.08);
        o.connect(g).connect(c.destination);
        o.start(t + i * 0.06);
        o.stop(t + i * 0.06 + 0.08);
      }
    })
  };
})();

/* ── BGMエンジン ─── */
const BGM = (() => {
  let ctx = null,
    playing = false,
    nodes = [],
    timer = null,
    curTrack = "title";
  const stopAll = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    nodes.forEach(n => {
      try {
        n.stop();
      } catch (e) {}
    });
    nodes = [];
  };
  const TRACKS = {
    title: {
      mel: [[440, .4], [494, .4], [587, .4], [659, .4], [440, .4], [587, .2], [659, .2], [587, .4], [494, .8], [440, .4], [587, .4], [659, .4], [784, .8], [659, .4], [587, .4], [494, .8], [440, .4], [494, .2], [587, .2], [494, .4], [440, .8], [392, .4], [440, .8]],
      bas: [[220, .8], [220, .8], [294, .8], [294, .8], [220, .8], [220, .8], [196, .8], [196, .8], [220, .8], [220, .8], [294, .8], [294, .8], [196, .8], [196, .8], [220, 1.6]],
      mt: "triangle",
      bt: "sine",
      mv: 0.05,
      bv: 0.03
    },
    battle_easy: {
      mel: [[523, .2], [0, .1], [659, .2], [0, .1], [784, .2], [659, .2], [0, .1], [523, .2], [0, .1], [659, .2], [784, .4], [0, .2], [880, .2], [784, .2], [659, .2], [0, .1], [523, .2], [0, .1], [587, .2], [659, .2], [587, .4], [523, .4], [0, .2], [440, .2], [523, .2], [659, .2], [0, .1], [587, .2], [523, .2], [440, .4], [523, .2], [0, .1], [440, .4], [0, .4]],
      bas: [[262, .4], [262, .4], [330, .4], [330, .4], [349, .4], [349, .4], [262, .4], [262, .4], [220, .4], [220, .4], [262, .4], [262, .4], [196, .4], [196, .4], [220, .4], [262, .4]],
      mt: "square",
      bt: "triangle",
      mv: 0.04,
      bv: 0.035
    },
    battle_normal: {
      mel: [[587, .15], [0, .05], [587, .15], [0, .05], [698, .15], [0, .05], [659, .3], [587, .15], [0, .05], [523, .15], [0, .05], [466, .3], [0, .1], [523, .15], [587, .15], [659, .15], [0, .05], [698, .15], [0, .05], [659, .15], [587, .15], [523, .3], [466, .15], [0, .05], [440, .3], [0, .2], [698, .15], [0, .05], [659, .15], [0, .05], [587, .3], [523, .15], [0, .05], [466, .15], [523, .15], [587, .3], [0, .1], [523, .3], [0, .2]],
      bas: [[294, .3], [294, .3], [349, .3], [349, .3], [262, .3], [262, .3], [233, .3], [233, .3], [294, .3], [294, .3], [349, .3], [349, .3], [233, .3], [233, .3], [294, .6]],
      mt: "sawtooth",
      bt: "triangle",
      mv: 0.04,
      bv: 0.035
    },
    battle_hard: {
      mel: [[330, .1], [0, .05], [330, .1], [0, .05], [330, .1], [0, .1], [494, .15], [0, .05], [440, .2], [0, .1], [392, .1], [0, .05], [440, .1], [0, .05], [494, .2], [0, .1], [523, .15], [0, .05], [494, .2], [0, .1], [659, .15], [0, .05], [587, .15], [0, .05], [494, .2], [440, .1], [0, .05], [392, .2], [0, .1], [330, .1], [0, .05], [392, .1], [0, .05], [440, .15], [0, .05], [494, .2], [0, .1], [587, .2], [0, .1], [523, .15], [0, .05], [494, .2], [440, .15], [0, .05], [392, .2], [0, .1], [330, .2], [0, .1], [294, .3], [0, .2]],
      bas: [[165, .3], [165, .3], [196, .3], [196, .3], [220, .3], [220, .3], [247, .3], [247, .3], [165, .3], [165, .3], [131, .3], [131, .3], [147, .3], [147, .3], [165, .6], [165, .3], [165, .3], [196, .3], [196, .3], [131, .3], [131, .3], [165, .6]],
      mt: "sawtooth",
      bt: "square",
      mv: 0.045,
      bv: 0.03
    },
    battle_ex: {
      mel: [[311, .1], [0, .05], [311, .1], [0, .05], [370, .1], [0, .05], [415, .15], [0, .05], [370, .15], [0, .1], [466, .15], [0, .05], [415, .1], [0, .05], [370, .1], [0, .05], [311, .2], [0, .1], [415, .1], [0, .05], [466, .1], [0, .05], [523, .15], [0, .05], [466, .15], [0, .1], [370, .1], [0, .05], [311, .1], [0, .05], [294, .2], [0, .1], [311, .2], [0, .1], [523, .1], [0, .05], [466, .1], [0, .05], [415, .1], [0, .05], [370, .15], [0, .05], [311, .1], [0, .05], [294, .1], [0, .05], [277, .1], [0, .05], [262, .2], [0, .1], [311, .15], [0, .05], [370, .15], [0, .05], [311, .3], [0, .3]],
      bas: [[156, .3], [156, .3], [185, .3], [185, .3], [208, .3], [208, .3], [156, .3], [156, .3], [147, .3], [147, .3], [156, .3], [156, .3], [139, .3], [139, .3], [156, .6], [131, .3], [131, .3], [147, .3], [147, .3], [156, .3], [156, .3], [131, .6]],
      mt: "sawtooth",
      bt: "square",
      mv: 0.045,
      bv: 0.035
    }
  };
  const trackForStage = id => {
    if (!id) return "title";
    if (id >= 11) return "battle_ex";
    if (id >= 8) return "battle_hard";
    if (id >= 4) return "battle_normal";
    return "battle_easy";
  };
  const loop = () => {
    if (!playing) return;
    try {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      stopAll();
      const tr = TRACKS[curTrack] || TRACKS.title;
      const t = ctx.currentTime;
      let off = 0;
      tr.mel.forEach(([f, d]) => {
        if (f === 0) {
          off += d;
          return;
        }
        const o = ctx.createOscillator(),
          g = ctx.createGain();
        o.type = tr.mt;
        o.frequency.setValueAtTime(f, t + off);
        g.gain.setValueAtTime(tr.mv, t + off);
        g.gain.exponentialRampToValueAtTime(0.001, t + off + d * 0.9);
        o.connect(g).connect(ctx.destination);
        o.start(t + off);
        o.stop(t + off + d);
        nodes.push(o);
        off += d;
      });
      const ld = off;
      let bo = 0;
      tr.bas.forEach(([f, d]) => {
        if (bo >= ld) return;
        if (f === 0) {
          bo += d;
          return;
        }
        const o = ctx.createOscillator(),
          g = ctx.createGain();
        o.type = tr.bt;
        o.frequency.setValueAtTime(f, t + bo);
        g.gain.setValueAtTime(tr.bv, t + bo);
        g.gain.exponentialRampToValueAtTime(0.001, t + bo + d * 0.85);
        o.connect(g).connect(ctx.destination);
        o.start(t + bo);
        o.stop(t + bo + d);
        nodes.push(o);
        bo += d;
      });
      timer = setTimeout(loop, ld * 1000 - 100);
    } catch (e) {}
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAll();
      } else if (playing) {
        loop();
      }
    });
    window.addEventListener('pagehide', () => {
      playing = false;
      stopAll();
      if (ctx) {
        try {
          ctx.close();
        } catch (e) {}
      }
      ctx = null;
    });
  }
  return {
    start: trackId => {
      const t = trackId || "title";
      if (playing && curTrack === t) return;
      stopAll();
      curTrack = t;
      playing = true;
      loop();
    },
    startForStage: stageId => {
      const t = trackForStage(stageId);
      if (playing && curTrack === t) return;
      stopAll();
      curTrack = t;
      playing = true;
      loop();
    },
    stop: () => {
      playing = false;
      stopAll();
    },
    on: () => playing,
    track: () => curTrack
  };
})();

/* ── データ ─── */
const ATOMS = [{
  s: "H",
  k: "H",
  c: "#c8f7c5",
  tc: "#1b6e1b",
  e: "💧",
  n: 18,
  g: "#4cff4c"
}, {
  s: "O",
  k: "O",
  c: "#ffe0b2",
  tc: "#bf360c",
  e: "🌬️",
  n: 14,
  g: "#ff9100"
}, {
  s: "C",
  k: "C",
  c: "#bbdefb",
  tc: "#0d47a1",
  e: "✏️",
  n: 9,
  g: "#448aff"
}, {
  s: "N",
  k: "N",
  c: "#e1bee7",
  tc: "#6a1b9a",
  e: "🌸",
  n: 4,
  g: "#d500f9"
}, {
  s: "S",
  k: "S",
  c: "#fff9c4",
  tc: "#f57f17",
  e: "⚡",
  n: 4,
  g: "#ffd600"
}, {
  s: "Cl",
  k: "Cl",
  c: "#b2ebf2",
  tc: "#006064",
  e: "🫧",
  n: 6,
  g: "#00e5ff"
}, {
  s: "Na",
  k: "Na",
  c: "#f8bbd0",
  tc: "#b71c1c",
  e: "🧂",
  n: 6,
  g: "#ff1744"
}, {
  s: "Cu",
  k: "Cu",
  c: "#ffccbc",
  tc: "#bf360c",
  e: "🪙",
  n: 4,
  g: "#ff6e40"
}, {
  s: "Ag",
  k: "Ag",
  c: "#cfd8dc",
  tc: "#37474f",
  e: "🥈",
  n: 4,
  g: "#90a4ae"
}, {
  s: "Fe",
  k: "Fe",
  c: "#d7ccc8",
  tc: "#3e2723",
  e: "🔩",
  n: 4,
  g: "#8d6e63"
}];
const RARITY = {
  H: 1,
  O: 1,
  C: 2,
  Cl: 2,
  Na: 2,
  N: 3,
  S: 3,
  Cu: 3,
  Ag: 3,
  Fe: 3
};
const MULT = {
  2: 1,
  3: 1.5,
  4: 2,
  5: 2.5,
  6: 3,
  7: 3.5
};
const calcPts = a => {
  const rare = Object.entries(a).reduce((s, [el, n]) => s + (RARITY[el] || 1) * n, 0);
  const cards = Object.values(a).reduce((s, n) => s + n, 0);
  return Math.round(rare * (MULT[cards] || 1));
};
const COMPS = [{
  k: "cH2",
  f: "H₂",
  a: {
    H: 2
  },
  e: "💧",
  free: true
}, {
  k: "cO2",
  f: "O₂",
  a: {
    O: 2
  },
  e: "🌬️",
  free: true
}, {
  k: "cHCl",
  f: "HCl",
  a: {
    H: 1,
    Cl: 1
  },
  e: "🫧",
  free: true
}, {
  k: "cCl2",
  f: "Cl₂",
  a: {
    Cl: 2
  },
  e: "🫧",
  free: true
}, {
  k: "cNaCl",
  f: "NaCl",
  a: {
    Na: 1,
    Cl: 1
  },
  e: "🧂",
  free: true
}, {
  k: "cCuO",
  f: "CuO",
  a: {
    Cu: 1,
    O: 1
  },
  e: "🪙",
  free: true
}, {
  k: "cFeO",
  f: "FeO",
  a: {
    Fe: 1,
    O: 1
  },
  e: "🔩",
  free: true
}, {
  k: "cAgCl",
  f: "AgCl",
  a: {
    Ag: 1,
    Cl: 1
  },
  e: "🥈",
  free: true
}, {
  k: "cN2",
  f: "N₂",
  a: {
    N: 2
  },
  e: "🌸",
  free: true
}, {
  k: "cCuS",
  f: "CuS",
  a: {
    Cu: 1,
    S: 1
  },
  e: "🪙",
  free: true
}, {
  k: "cFeS",
  f: "FeS",
  a: {
    Fe: 1,
    S: 1
  },
  e: "🔩",
  free: true
}, {
  k: "cH2O",
  f: "H₂O",
  a: {
    H: 2,
    O: 1
  },
  e: "💧",
  free: true
}, {
  k: "cO3",
  f: "O₃",
  a: {
    O: 3
  },
  e: "🌀",
  free: true
}, {
  k: "cCO2",
  f: "CO₂",
  a: {
    C: 1,
    O: 2
  },
  e: "💨",
  free: true
}, {
  k: "cNaOH",
  f: "NaOH",
  a: {
    Na: 1,
    O: 1,
    H: 1
  },
  e: "🧪",
  free: true
}, {
  k: "cH2S",
  f: "H₂S",
  a: {
    H: 2,
    S: 1
  },
  e: "🥚",
  free: true
}, {
  k: "cSO2",
  f: "SO₂",
  a: {
    S: 1,
    O: 2
  },
  e: "🌋",
  free: true
}, {
  k: "cNa2O",
  f: "Na₂O",
  a: {
    Na: 2,
    O: 1
  },
  e: "🧂"
}, {
  k: "cFe2O",
  f: "Fe₂O",
  a: {
    Fe: 2,
    O: 1
  },
  e: "🔩"
}, {
  k: "cAg2O",
  f: "Ag₂O",
  a: {
    Ag: 2,
    O: 1
  },
  e: "🥈"
}, {
  k: "cCuCl2",
  f: "CuCl₂",
  a: {
    Cu: 1,
    Cl: 2
  },
  e: "🪙"
}, {
  k: "cFeCl2",
  f: "FeCl₂",
  a: {
    Fe: 1,
    Cl: 2
  },
  e: "🔩"
}, {
  k: "cNa2S",
  f: "Na₂S",
  a: {
    Na: 2,
    S: 1
  },
  e: "🧂"
}, {
  k: "cAg2S",
  f: "Ag₂S",
  a: {
    Ag: 2,
    S: 1
  },
  e: "🥈"
}, {
  k: "cNH3",
  f: "NH₃",
  a: {
    N: 1,
    H: 3
  },
  e: "💜"
}, {
  k: "cSO3",
  f: "SO₃",
  a: {
    S: 1,
    O: 3
  },
  e: "🌋"
}, {
  k: "cC2H2",
  f: "C₂H₂",
  a: {
    C: 2,
    H: 2
  },
  e: "🔥"
}, {
  k: "cCH4",
  f: "CH₄",
  a: {
    C: 1,
    H: 4
  },
  e: "🔥"
}, {
  k: "cCH3Cl",
  f: "CH₃Cl",
  a: {
    C: 1,
    H: 3,
    Cl: 1
  },
  e: "🧪"
}, {
  k: "cFe2O3",
  f: "Fe₂O₃",
  a: {
    Fe: 2,
    O: 3
  },
  e: "🔩"
}, {
  k: "cNaHCO3",
  f: "NaHCO₃",
  a: {
    Na: 1,
    H: 1,
    C: 1,
    O: 3
  },
  e: "🧁"
}, {
  k: "cCH4O",
  f: "CH₃OH",
  a: {
    C: 1,
    H: 4,
    O: 1
  },
  e: "🍶"
}, {
  k: "cNa2CO3",
  f: "Na₂CO₃",
  a: {
    Na: 2,
    C: 1,
    O: 3
  },
  e: "🧪"
}, {
  k: "cH2SO4",
  f: "H₂SO₄",
  a: {
    H: 2,
    S: 1,
    O: 4
  },
  e: "⚗️"
}, {
  k: "cC7",
  f: "C◆◆◆◆◆◆",
  a: {
    C: 7
  },
  e: "💎",
  sp: true
}].map(c => ({
  ...c,
  p: c.sp ? 50 : calcPts(c.a)
}));

/* ── ユーティリティ ─── */
const shuffle = a => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = 0 | Math.random() * (i + 1);
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
const buildDeck = () => {
  const d = [];
  let id = 0;
  for (const a of ATOMS) for (let i = 0; i < a.n; i++) d.push({
    id: id++,
    s: a.s,
    k: a.k,
    c: a.c,
    tc: a.tc,
    e: a.e,
    g: a.g
  });
  return shuffle(d);
};
const cntA = cards => {
  const c = {};
  for (const x of cards) c[x.s] = (c[x.s] || 0) + 1;
  return c;
};
const findP = (hc, prem) => COMPS.filter(c => (prem || c.free) && Object.entries(c.a).every(([s, n]) => (hc[s] || 0) >= n));
const getAI = s => ATOMS.find(a => a.s === s) || {
  c: "#eee",
  tc: "#333",
  e: "⚪",
  g: "#999",
  k: "?"
};
const CPUN = ["コンピュータ🤖", "ロボくん🤖", "AIちゃん🤖"];

/* ── ストーリーモード ─── */
const STORY = [{
  id: 1,
  name: "バブリン",
  emoji: "🫧",
  diff: "easy",
  color: "#81D4FA",
  hl: 10,
  intro: "🧑‍🔬博士「おや、実験室からモンスターが逃げ出したぞ！まずはシャボン玉のバブリンを倒すんじゃ！」",
  win: "博士「やるじゃないか！バブリンを倒したぞ！」",
  lose: "博士「うーむ、バブリンに負けてしまったか…もう一回じゃ！」"
}, {
  id: 2,
  name: "アクアン",
  emoji: "💧",
  diff: "easy",
  color: "#4FC3F7",
  hl: 10,
  intro: "🧑‍🔬博士「水たまりの中からアクアンが現れた！水の力で攻めてくるぞ！」",
  win: "博士「すばらしい！アクアンを退治したぞ！」",
  lose: "博士「アクアンの水攻めにやられたか…次こそ！」"
}, {
  id: 3,
  name: "ソルティ",
  emoji: "🧂",
  diff: "easy",
  color: "#FFE082",
  hl: 10,
  intro: "🧑‍🔬博士「塩の結晶モンスター・ソルティじゃ！体がしょっぱいぞ！」",
  win: "博士「ソルティを溶かしてやったぞ！いい調子じゃ！」",
  lose: "博士「ソルティのしょっぱい攻撃にやられた…」"
}, {
  id: 4,
  name: "エアロン",
  emoji: "💨",
  diff: "normal",
  color: "#A5D6A7",
  hl: 9,
  intro: "🧑‍🔬博士「空気のモンスター・エアロンじゃ！目に見えないから手強いぞ！」",
  win: "博士「エアロンを吹き飛ばした！キミの実力はホンモノじゃ！」",
  lose: "博士「エアロンの風に飛ばされたか…化学式を覚えるんじゃ！」"
}, {
  id: 5,
  name: "コッパー",
  emoji: "🪙",
  diff: "normal",
  color: "#FF8A65",
  hl: 9,
  intro: "🧑‍🔬博士「銅のヨロイをまとったコッパーじゃ！防御力が高いぞ！」",
  win: "博士「コッパーのヨロイを貫いたぞ！キミは強い！」",
  lose: "博士「コッパーの防御は固いな…作戦を練り直すんじゃ！」"
}, {
  id: 6,
  name: "シルバーグ",
  emoji: "🥈",
  diff: "normal",
  color: "#B0BEC5",
  hl: 9,
  intro: "🧑‍🔬博士「銀の騎士シルバーグじゃ！優雅だが容赦ないぞ！」",
  win: "博士「シルバーグに勝った！銀の騎士も倒せるんじゃ！」",
  lose: "博士「シルバーグの剣さばきにやられたか…」"
}, {
  id: 7,
  name: "アイアンX",
  emoji: "🔩",
  diff: "normal",
  color: "#8D6E63",
  hl: 9,
  intro: "🧑‍🔬博士「鉄の巨人アイアンXじゃ！パワーがすごいぞ！」",
  win: "博士「アイアンXを倒した！キミの化学パワーはすごい！」",
  lose: "博士「アイアンXのパワーに圧倒されたか…」"
}, {
  id: 8,
  name: "サルファー",
  emoji: "⚡",
  diff: "hard",
  color: "#FDD835",
  hl: 8,
  intro: "🧑‍🔬博士「硫黄の毒モンスター・サルファーじゃ！温泉のにおいがするぞ！ここから先はキツいぞ！」",
  win: "博士「サルファーを浄化した！あと少しじゃ！」",
  lose: "博士「サルファーの毒にやられた…でもあきらめるな！」"
}, {
  id: 9,
  name: "ドクターカオス",
  emoji: "⚗️",
  diff: "hard",
  color: "#CE93D8",
  hl: 8,
  intro: "🧑‍🔬博士「暴走した科学者ドクターカオスじゃ！ワシの元同僚なんじゃが…止めてくれ！」",
  win: "博士「カオスを止めてくれた！…残るはあと1体じゃ！」",
  lose: "博士「カオスの実験は危険すぎる…もっと強くなるんじゃ！」"
}, {
  id: 10,
  name: "ダイヤキング",
  emoji: "💎",
  diff: "hard",
  color: "#E040FB",
  hl: 8,
  intro: "🧑‍🔬博士「最強の結晶モンスター・ダイヤキング！すべてのモンスターの頂点に立つ存在じゃ！」",
  win: "🏆博士「ダイヤキングを倒した！！キミは化学マスターじゃ！！！…ん？まだ何かいるようじゃな…」",
  lose: "博士「ダイヤキングは強い…でもキミならきっと倒せる！」"
}, {
  id: 11,
  name: "ネオバブリン",
  emoji: "🫧",
  diff: "hard",
  color: "#00BCD4",
  ex: true,
  hl: 7,
  intro: "🧑‍🔬博士「バブリンが…進化しておる！手札7枚の制限付きじゃ！」",
  win: "博士「進化したバブリンも倒した！さすがじゃ！」",
  lose: "博士「手札が少ないと厳しいな…工夫するんじゃ！」"
}, {
  id: 12,
  name: "ツインメタル",
  emoji: "⚔️",
  diff: "hard",
  color: "#FF6E40",
  ex: true,
  hl: 7,
  intro: "🧑‍🔬博士「銅と鉄が合体したツインメタルじゃ！2つの力を持つぞ！」",
  win: "博士「合体モンスターも敵じゃないか！」",
  lose: "博士「ツインメタルの二重攻撃は強いな…」"
}, {
  id: 13,
  name: "ポイズンクイーン",
  emoji: "☠️",
  diff: "hard",
  color: "#AB47BC",
  ex: true,
  hl: 7,
  deckSize: 40,
  intro: "🧑‍🔬博士「毒の女王ポイズンクイーン！山札が少ないから短期決戦じゃ！」",
  win: "博士「毒の女王を浄化した！あと2体！」",
  lose: "博士「山札が少ないと一手のミスが致命的じゃ…」"
}, {
  id: 14,
  name: "プロフェッサーX",
  emoji: "🧬",
  diff: "hard",
  color: "#5C6BC0",
  ex: true,
  hl: 7,
  intro: "🧑‍🔬博士「ワシの師匠…プロフェッサーXじゃ！化学の神と呼ばれた方じゃ…」",
  win: "博士「師匠を超えた！！キミは天才じゃ！」",
  lose: "博士「さすが師匠…簡単にはいかんか…」"
}, {
  id: 15,
  name: "???",
  emoji: "🌌",
  diff: "hard",
  color: "#FF1744",
  ex: true,
  hl: 7,
  deckSize: 40,
  intro: "🧑‍🔬博士「最後の敵は…な、なんじゃこれは！？正体不明のモンスターじゃ！手札7枚＋山札少なめの最凶ハンデ！」",
  win: "🌟博士「…あの姿は…若い頃のワシじゃったか！？キミは完全なる化学マスターじゃ！！！おめでとう！！！」",
  lose: "博士「この敵は…次元が違うようじゃ…でもキミなら…！」"
}];

/* ── 博士SVGイラスト（ポケモン風・デフォルメ） ─── */
const DrSVG = ({
  size = 120
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 120 120",
  fill: "none"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
  id: "drskin",
  cx: "50%",
  cy: "40%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#ffe4c4"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#f0c8a0"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "drcoat",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#f5f5ff"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#d8d8e8"
})), /*#__PURE__*/React.createElement("linearGradient", {
  id: "drtie",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#5c6bc0"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#3949ab"
}))), /*#__PURE__*/React.createElement("path", {
  d: "M30 58 Q28 62 26 100 Q26 108 60 110 Q94 108 94 100 Q92 62 90 58Z",
  fill: "url(#drcoat)",
  stroke: "#c0c0d0",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M42 58 L50 68 L60 60 L70 68 L78 58",
  fill: "none",
  stroke: "#c0c0d0",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M57 62 L54 85 L60 90 L66 85 L63 62Z",
  fill: "url(#drtie)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "60",
  cy: "62",
  rx: "4",
  ry: "2",
  fill: "#7986cb"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "60",
  cy: "40",
  rx: "26",
  ry: "24",
  fill: "url(#drskin)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "48",
  cy: "40",
  r: "10",
  fill: "rgba(200,220,255,.15)",
  stroke: "#455a64",
  strokeWidth: "2.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "72",
  cy: "40",
  r: "10",
  fill: "rgba(200,220,255,.15)",
  stroke: "#455a64",
  strokeWidth: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M58 40 Q60 38 62 40",
  stroke: "#455a64",
  strokeWidth: "2.5",
  fill: "none"
}), /*#__PURE__*/React.createElement("line", {
  x1: "38",
  y1: "40",
  x2: "30",
  y2: "37",
  stroke: "#455a64",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "82",
  y1: "40",
  x2: "90",
  y2: "37",
  stroke: "#455a64",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "48",
  cy: "40",
  r: "4",
  fill: "#263238"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "72",
  cy: "40",
  r: "4",
  fill: "#263238"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "50",
  cy: "38",
  r: "2",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "74",
  cy: "38",
  r: "2",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "47",
  cy: "42",
  r: "1",
  fill: "rgba(255,255,255,.5)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "71",
  cy: "42",
  r: "1",
  fill: "rgba(255,255,255,.5)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 30 Q48 25 56 30",
  stroke: "#546e7a",
  strokeWidth: "2.5",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M64 30 Q72 25 80 30",
  stroke: "#546e7a",
  strokeWidth: "2.5",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46 50 Q52 54 60 49 Q68 54 74 50",
  stroke: "#b0bec5",
  strokeWidth: "2.5",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M52 54 Q60 61 68 54",
  stroke: "#a1887f",
  strokeWidth: "2",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34 32 Q28 14 42 10 Q50 6 60 9 Q70 6 78 10 Q92 14 86 32",
  fill: "#eceff1",
  stroke: "#cfd8dc",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 30 Q24 20 30 14",
  stroke: "#e0e0e0",
  strokeWidth: "3",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M90 30 Q96 20 90 14",
  stroke: "#e0e0e0",
  strokeWidth: "3",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 22 Q32 12 38 8",
  stroke: "#e0e0e0",
  strokeWidth: "2",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M84 22 Q88 12 82 8",
  stroke: "#e0e0e0",
  strokeWidth: "2",
  fill: "none",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "36",
  cy: "48",
  rx: "5",
  ry: "3",
  fill: "#ffab91",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "84",
  cy: "48",
  rx: "5",
  ry: "3",
  fill: "#ffab91",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  x: "38",
  y: "65",
  width: "2",
  height: "12",
  rx: "1",
  fill: "#e53935"
}), /*#__PURE__*/React.createElement("rect", {
  x: "42",
  y: "67",
  width: "2",
  height: "10",
  rx: "1",
  fill: "#1e88e5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "85",
  y: "55",
  width: "10",
  height: "28",
  rx: "5",
  fill: "rgba(79,195,247,.2)",
  stroke: "#4fc3f7",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M86 70 Q90 65 94 70 L94 78 Q90 82 86 78Z",
  fill: "#4fc3f7",
  opacity: ".5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "89",
  cy: "66",
  r: "2",
  fill: "#4fc3f7",
  opacity: ".6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "91",
  cy: "72",
  r: "1.5",
  fill: "#81d4fa",
  opacity: ".7"
}));

/* ── モンスターSVGイラスト（ポケモン風） ─── */
const MonsterSVG = ({
  id,
  size = 100,
  color = "#81D4FA"
}) => {
  const c = color;
  // 色から暗い版と明るい版を生成
  const monsters = {
    // ══ 1: バブリン ══ ぷにぷにの泡スライム。丸い体、キュートな表情
    1: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m1b",
      cx: "40%",
      cy: "35%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#e3f2fd"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#0288d1",
      stopOpacity: ".6"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "m1h",
      cx: "30%",
      cy: "25%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#fff",
      stopOpacity: ".6"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#fff",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "56",
      rx: "28",
      ry: "26",
      fill: "url(#m1b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "56",
      rx: "28",
      ry: "26",
      fill: "url(#m1h)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "42",
      rx: "12",
      ry: "5",
      fill: "#fff",
      opacity: ".25",
      transform: "rotate(-15,40,42)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "52",
      rx: "7",
      ry: "8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "52",
      rx: "7",
      ry: "8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "53",
      rx: "4.5",
      ry: "5",
      fill: "#0d47a1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "62",
      cy: "53",
      rx: "4.5",
      ry: "5",
      fill: "#0d47a1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43.5",
      cy: "50.5",
      r: "2.2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.5",
      cy: "50.5",
      r: "2.2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.5",
      cy: "55",
      r: "1",
      fill: "rgba(255,255,255,.6)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.5",
      cy: "55",
      r: "1",
      fill: "rgba(255,255,255,.6)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 46 Q37 44 40 46",
      stroke: "#0d47a1",
      strokeWidth: "1",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60 46 Q63 44 66 46",
      stroke: "#0d47a1",
      strokeWidth: "1",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 63 Q50 69 56 63",
      stroke: "#1565c0",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "60",
      rx: "4",
      ry: "2.5",
      fill: "#f48fb1",
      opacity: ".35"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "68",
      cy: "60",
      rx: "4",
      ry: "2.5",
      fill: "#f48fb1",
      opacity: ".35"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40",
      cy: "32",
      r: "7",
      fill: c,
      opacity: ".5",
      stroke: "#fff",
      strokeWidth: ".8",
      strokeOpacity: ".4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40",
      cy: "32",
      r: "7",
      fill: "url(#m1h)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "56",
      cy: "28",
      r: "5",
      fill: c,
      opacity: ".45",
      stroke: "#fff",
      strokeWidth: ".6",
      strokeOpacity: ".3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "64",
      cy: "36",
      r: "4",
      fill: c,
      opacity: ".35"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "45",
      r: "3",
      fill: c,
      opacity: ".25",
      stroke: "#fff",
      strokeWidth: ".4",
      strokeOpacity: ".3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "80",
      cy: "50",
      r: "2.5",
      fill: c,
      opacity: ".2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "80",
      rx: "8",
      ry: "4",
      fill: "#0288d1",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "80",
      rx: "8",
      ry: "4",
      fill: "#0288d1",
      opacity: ".5"
    })),
    // ══ 2: アクアン ══ 水滴型のドラゴン風。尻尾と小さなヒレ
    2: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m2b",
      cx: "45%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#e1f5fe"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#01579b",
      stopOpacity: ".7"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M68 68 Q82 62 85 50 Q88 42 82 38",
      stroke: c,
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M82 38 L88 32 L80 36 L86 28",
      fill: "#0288d1",
      stroke: "#0288d1",
      strokeWidth: "1",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 22 Q28 35 26 55 Q24 72 40 80 Q50 84 60 80 Q76 72 74 55 Q72 35 50 22Z",
      fill: "url(#m2b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "62",
      rx: "14",
      ry: "12",
      fill: "#e1f5fe",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "38",
      rx: "8",
      ry: "4",
      fill: "#fff",
      opacity: ".3",
      transform: "rotate(-20,42,38)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 40 Q22 30 28 22 Q34 28 32 38",
      fill: "#039be5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 40 Q78 30 72 22 Q66 28 68 38",
      fill: "#039be5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "50",
      rx: "6",
      ry: "7",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58",
      cy: "50",
      rx: "6",
      ry: "7",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.5",
      cy: "51",
      rx: "3.5",
      ry: "4.5",
      fill: "#01579b"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "59.5",
      cy: "51",
      rx: "3.5",
      ry: "4.5",
      fill: "#01579b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "49",
      r: "1.8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "61",
      cy: "49",
      r: "1.8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 62 Q50 66 54 62",
      stroke: "#01579b",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34",
      cy: "56",
      rx: "3.5",
      ry: "2",
      fill: "#80d8ff",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "66",
      cy: "56",
      rx: "3.5",
      ry: "2",
      fill: "#80d8ff",
      opacity: ".4"
    })),
    // ══ 3: ソルティ ══ 結晶の精霊。角ばったボディに宝石の目
    3: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "m3b",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#fff8e1"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#f9a825"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M50 18 L72 38 L72 68 L50 82 L28 68 L28 38Z",
      fill: "url(#m3b)",
      stroke: "#f9a825",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 18 L72 38 L50 50 L28 38Z",
      fill: "#fff",
      opacity: ".15"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 18 L28 38 L50 50Z",
      fill: "#fff",
      opacity: ".1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "58",
      rx: "12",
      ry: "10",
      fill: "#fff8e1",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 44 L42 38 L46 44 L42 48Z",
      fill: "#fff",
      stroke: "#e65100",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54 44 L58 38 L62 44 L58 48Z",
      fill: "#fff",
      stroke: "#e65100",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42 42 L42 44",
      stroke: "#e65100",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M58 42 L58 44",
      stroke: "#e65100",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 56 L50 59 L54 56",
      stroke: "#bf360c",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 25 L34 12 L40 20",
      fill: "#ffd54f",
      stroke: "#f9a825",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62 25 L66 12 L60 20",
      fill: "#ffd54f",
      stroke: "#f9a825",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "50",
      width: "6",
      height: "6",
      rx: "1",
      fill: "#ffd54f",
      opacity: ".5",
      transform: "rotate(20,21,53)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "76",
      y: "45",
      width: "5",
      height: "5",
      rx: "1",
      fill: "#ffd54f",
      opacity: ".4",
      transform: "rotate(-15,78,47)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 30 L31 26 L32 30 L36 31 L32 32 L31 36 L30 32 L26 31Z",
      fill: "#fff",
      opacity: ".6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M72 60 L73 57 L74 60 L77 61 L74 62 L73 65 L72 62 L69 61Z",
      fill: "#fff",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "38",
      y: "78",
      width: "10",
      height: "6",
      rx: "3",
      fill: "#f9a825",
      opacity: ".6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "52",
      y: "78",
      width: "10",
      height: "6",
      rx: "3",
      fill: "#f9a825",
      opacity: ".6"
    })),
    // ══ 4: エアロン ══ 風の精霊。半透明の渦巻きボディ、三日月目
    4: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m4b",
      cx: "50%",
      cy: "45%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#e8f5e9",
      stopOpacity: ".8"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: c,
      stopOpacity: ".5"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#2e7d32",
      stopOpacity: ".2"
    }))), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "52",
      rx: "26",
      ry: "24",
      fill: "url(#m4b)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 45 Q40 30 55 32 Q68 34 65 48 Q62 56 52 52 Q44 50 48 44",
      stroke: "#fff",
      strokeWidth: "1.5",
      fill: "none",
      opacity: ".25"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24 44 Q14 35 18 24 Q22 32 28 38",
      fill: c,
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M76 44 Q86 35 82 24 Q78 32 72 38",
      fill: c,
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 56 Q10 52 12 42",
      stroke: c,
      strokeWidth: "2",
      fill: "none",
      opacity: ".3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M80 56 Q90 52 88 42",
      stroke: c,
      strokeWidth: "2",
      fill: "none",
      opacity: ".3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 48 Q42 42 46 48",
      stroke: "#1b5e20",
      strokeWidth: "2.5",
      fill: "#e8f5e9",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54 48 Q58 42 62 48",
      stroke: "#1b5e20",
      strokeWidth: "2.5",
      fill: "#e8f5e9",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42",
      cy: "47",
      r: "1.5",
      fill: "#1b5e20"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "47",
      r: "1.5",
      fill: "#1b5e20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 58 Q50 62 54 58",
      stroke: "#2e7d32",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45 30 Q48 20 55 22 Q60 24 56 30",
      stroke: c,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 55 Q20 50 30 55",
      stroke: c,
      strokeWidth: "1.5",
      fill: "none",
      opacity: ".3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 50 Q80 46 90 50",
      stroke: c,
      strokeWidth: "1.5",
      fill: "none",
      opacity: ".3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 65 Q22 62 30 65",
      stroke: c,
      strokeWidth: "1",
      fill: "none",
      opacity: ".2",
      strokeLinecap: "round"
    })),
    // ══ 5: コッパー ══ 銅の甲羅を持つ亀型。どっしりカッコいい
    5: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "m5b",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#ffccbc"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#bf360c"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "m5s",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#e65100"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#bf360c"
    }))), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "52",
      rx: "30",
      ry: "24",
      fill: "url(#m5b)",
      stroke: "#bf360c",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 42 L50 30 L70 42",
      fill: "none",
      stroke: "#e65100",
      strokeWidth: "1.5",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35 55 L50 42 L65 55",
      fill: "none",
      stroke: "#e65100",
      strokeWidth: "1",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 68 L50 58 L62 68",
      fill: "none",
      stroke: "#e65100",
      strokeWidth: "1",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "60",
      rx: "14",
      ry: "10",
      fill: "#fff3e0",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "28",
      r: "14",
      fill: "url(#m5s)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "30",
      rx: "10",
      ry: "8",
      fill: "#ffccbc",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "44",
      cy: "26",
      rx: "4.5",
      ry: "5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "56",
      cy: "26",
      rx: "4.5",
      ry: "5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "45",
      cy: "27",
      rx: "3",
      ry: "3.5",
      fill: "#bf360c"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "57",
      cy: "27",
      rx: "3",
      ry: "3.5",
      fill: "#bf360c"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46",
      cy: "25.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "25.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 20 L46 22",
      stroke: "#4e342e",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62 20 L54 22",
      stroke: "#4e342e",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 33 Q50 36 54 33",
      stroke: "#bf360c",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "28",
      cy: "70",
      rx: "7",
      ry: "5",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "72",
      cy: "70",
      rx: "7",
      ry: "5",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34",
      cy: "78",
      rx: "6",
      ry: "4",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "66",
      cy: "78",
      rx: "6",
      ry: "4",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "44",
      rx: "8",
      ry: "3",
      fill: "#fff",
      opacity: ".15",
      transform: "rotate(-10,42,44)"
    })),
    // ══ 6: シルバーグ ══ 銀のオオカミ型。マントをなびかせる騎士
    6: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "m6b",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#eceff1"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#546e7a"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M30 50 Q22 55 20 80 Q30 85 40 82",
      fill: "#546e7a",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 50 Q78 55 80 80 Q70 85 60 82",
      fill: "#546e7a",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "60",
      rx: "22",
      ry: "20",
      fill: "url(#m6b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "64",
      rx: "12",
      ry: "10",
      fill: "#eceff1",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "35",
      rx: "18",
      ry: "16",
      fill: c
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 30 L28 10 L38 24",
      fill: c,
      stroke: "#78909c",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66 30 L72 10 L62 24",
      fill: c,
      stroke: "#78909c",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 26 L30 14 L36 23",
      fill: "#eceff1",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M68 26 L70 14 L64 23",
      fill: "#eceff1",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 34 L44 30 L48 34 L44 36Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M52 34 L56 30 L60 34 L56 36Z",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "33.5",
      r: "2",
      fill: "#37474f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "56",
      cy: "33.5",
      r: "2",
      fill: "#37474f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "32.5",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57",
      cy: "32.5",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46 42 L50 44 L54 42",
      stroke: "#455a64",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "78",
      y1: "28",
      x2: "78",
      y2: "72",
      stroke: "#cfd8dc",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "73",
      y1: "40",
      x2: "83",
      y2: "40",
      stroke: "#90a4ae",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "78",
      cy: "40",
      r: "2",
      fill: "#ffd54f"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "78",
      rx: "6",
      ry: "4",
      fill: "#78909c"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "78",
      rx: "6",
      ry: "4",
      fill: "#78909c"
    })),
    // ══ 7: アイアンX ══ 鉄のゴーレム。ロボ風でXのエンブレム
    7: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "m7b",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#a1887f"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#4e342e"
    }))), /*#__PURE__*/React.createElement("rect", {
      x: "30",
      y: "40",
      width: "40",
      height: "38",
      rx: "8",
      fill: "url(#m7b)",
      stroke: "#5d4037",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "44",
      width: "14",
      height: "24",
      rx: "7",
      fill: c,
      stroke: "#5d4037",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "68",
      y: "44",
      width: "14",
      height: "24",
      rx: "7",
      fill: c,
      stroke: "#5d4037",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "68",
      r: "5",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "75",
      cy: "68",
      r: "5",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "58",
      r: "10",
      fill: "rgba(0,0,0,.2)",
      stroke: "#ff1744",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 52 L56 64 M56 52 L44 64",
      stroke: "#ff1744",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34",
      y: "18",
      width: "32",
      height: "26",
      rx: "8",
      fill: c,
      stroke: "#5d4037",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36",
      y: "12",
      width: "4",
      height: "10",
      rx: "2",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60",
      y: "12",
      width: "4",
      height: "10",
      rx: "2",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "26",
      width: "8",
      height: "5",
      rx: "2.5",
      fill: "#ff1744"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "52",
      y: "26",
      width: "8",
      height: "5",
      rx: "2.5",
      fill: "#ff1744"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "27",
      width: "3",
      height: "2",
      rx: "1",
      fill: "#fff",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "54",
      y: "27",
      width: "3",
      height: "2",
      rx: "1",
      fill: "#fff",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "36",
      width: "16",
      height: "4",
      rx: "2",
      fill: "#3e2723"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46",
      y1: "36",
      x2: "46",
      y2: "40",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      y1: "36",
      x2: "50",
      y2: "40",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "54",
      y1: "36",
      x2: "54",
      y2: "40",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "46",
      r: "3",
      fill: "#3e2723",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "64",
      cy: "46",
      r: "3",
      fill: "#3e2723",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34",
      y: "76",
      width: "12",
      height: "8",
      rx: "4",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "54",
      y: "76",
      width: "12",
      height: "8",
      rx: "4",
      fill: "#5d4037"
    })),
    // ══ 8: サルファー ══ 毒ガスの蛇型。黄色い体にドクロ模様
    8: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m8b",
      cx: "50%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#fff9c4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#f57f17",
      stopOpacity: ".8"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M65 75 Q80 70 78 55 Q76 40 65 42 Q55 44 55 55 Q55 65 45 65 Q35 65 35 55",
      stroke: c,
      strokeWidth: "8",
      fill: "none",
      strokeLinecap: "round",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "42",
      rx: "24",
      ry: "22",
      fill: "url(#m8b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "48",
      rx: "12",
      ry: "10",
      fill: "#fff9c4",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "32",
      r: "5",
      fill: "none",
      stroke: "#e65100",
      strokeWidth: "1.5",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48 30 L52 34 M52 30 L48 34",
      stroke: "#e65100",
      strokeWidth: "1.5",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "42",
      rx: "6",
      ry: "7",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "42",
      rx: "6",
      ry: "7",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "43",
      rx: "3.5",
      ry: "4.5",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "62",
      cy: "43",
      rx: "3.5",
      ry: "4.5",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42 43 L42 41",
      stroke: "#1a1a1a",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62 43 L62 41",
      stroke: "#1a1a1a",
      strokeWidth: "3",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43.5",
      cy: "41",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.5",
      cy: "41",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 35 L42 37",
      stroke: "#e65100",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66 35 L58 37",
      stroke: "#e65100",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42 54 Q46 58 50 54 Q54 58 58 54",
      stroke: "#e65100",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 52 L42 56",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M56 52 L58 56",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "35",
      r: "5",
      fill: c,
      opacity: ".2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "78",
      cy: "38",
      r: "4",
      fill: c,
      opacity: ".15"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "50",
      r: "3",
      fill: c,
      opacity: ".1"
    })),
    // ══ 9: ドクターカオス ══ 暴走科学者。稲妻髪・狂気の瞳
    9: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m9sk",
      cx: "50%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#ffe4c4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#dbb896"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M30 60 Q28 65 26 92 Q40 96 50 96 Q60 96 74 92 Q72 65 70 60Z",
      fill: "#e0e0e0",
      stroke: "#bdbdbd",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 60 L32 92",
      stroke: "#bdbdbd",
      strokeWidth: ".5",
      strokeDasharray: "3,3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66 60 L68 92",
      stroke: "#bdbdbd",
      strokeWidth: ".5",
      strokeDasharray: "3,3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "42",
      rx: "22",
      ry: "20",
      fill: "url(#m9sk)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 36 Q22 18 34 8 L32 24 Q36 14 42 6 L38 22 Q44 10 50 5 L46 20 Q52 8 58 5 L54 22 Q60 14 64 6 L62 24 Q68 18 72 36",
      fill: "#616161",
      stroke: "#424242",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42",
      cy: "40",
      r: "7",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "40",
      r: "5.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "40",
      r: "4.5",
      fill: "#e91e63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59",
      cy: "40",
      r: "3",
      fill: "#e91e63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.5",
      cy: "38.5",
      r: "2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "38.5",
      r: "1.2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "40",
      r: "1.5",
      fill: "#1a1a1a"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59",
      cy: "40",
      r: "1",
      fill: "#1a1a1a"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 30 L44 33",
      stroke: "#424242",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M66 32 L56 34",
      stroke: "#424242",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 52 Q44 60 50 52 Q56 60 62 52",
      stroke: "#c62828",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "48",
      rx: "4",
      ry: "2.5",
      fill: "#e91e63",
      opacity: ".2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "68",
      cy: "48",
      rx: "4",
      ry: "2.5",
      fill: "#e91e63",
      opacity: ".2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 32 L22 40 L19 40 L24 50",
      stroke: c,
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M82 30 L78 38 L81 38 L76 48",
      stroke: c,
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "round"
    })),
    // ══ 10: ダイヤキング ══ ダイヤモンドの王。王冠＋宝石ボディ
    10: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "m10b",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#f3e5f5"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "30%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: "#aa00ff"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#6a1b9a"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "m10c",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#ffd54f"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#ff8f00"
    }))), [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "50",
      y1: "50",
      x2: 50 + Math.cos(a * Math.PI / 180) * 48,
      y2: 50 + Math.sin(a * Math.PI / 180) * 48,
      stroke: c,
      strokeWidth: ".6",
      opacity: ".2"
    })), /*#__PURE__*/React.createElement("polygon", {
      points: "50,18 76,46 62,82 38,82 24,46",
      fill: "url(#m10b)",
      stroke: "#aa00ff",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "50,18 76,46 50,56 24,46",
      fill: "#fff",
      opacity: ".12"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "50,18 24,46 50,56",
      fill: "#fff",
      opacity: ".08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      y1: "18",
      x2: "50",
      y2: "56",
      stroke: "#ce93d8",
      strokeWidth: ".8",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24",
      y1: "46",
      x2: "76",
      y2: "46",
      stroke: "#ce93d8",
      strokeWidth: ".8",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 22 L36 8 L42 18 L50 4 L58 18 L64 8 L68 22Z",
      fill: "url(#m10c)",
      stroke: "#ff8f00",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "10",
      r: "3",
      fill: "#f44336"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40",
      cy: "14",
      r: "2",
      fill: "#2196f3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "14",
      r: "2",
      fill: "#4caf50"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "44",
      rx: "5.5",
      ry: "6",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58",
      cy: "44",
      rx: "5.5",
      ry: "6",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43",
      cy: "45",
      rx: "3.5",
      ry: "4",
      fill: "#6a1b9a"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "59",
      cy: "45",
      rx: "3.5",
      ry: "4",
      fill: "#6a1b9a"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.5",
      cy: "43",
      r: "1.8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.5",
      cy: "43",
      r: "1.8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36 38 L44 40",
      stroke: "#4a148c",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M64 38 L56 40",
      stroke: "#4a148c",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 56 Q50 60 56 56",
      stroke: "#6a1b9a",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 30 L21 26 L22 30 L26 31 L22 32 L21 36 L20 32 L16 31Z",
      fill: "#fff",
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M80 55 L81 51 L82 55 L86 56 L82 57 L81 61 L80 57 L76 56Z",
      fill: "#fff",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 70 L51 67 L52 70 L55 71 L52 72 L51 75 L50 72 L47 71Z",
      fill: "#ce93d8",
      opacity: ".5"
    })),
    // ══ EX1 (11): ネオバブリン ══ 進化形バブリン。角＋赤い模様
    11: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m11b",
      cx: "40%",
      cy: "35%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#e0f7fa"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#006064",
      stopOpacity: ".7"
    }))), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "56",
      rx: "28",
      ry: "26",
      fill: "url(#m11b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "40",
      rx: "10",
      ry: "4",
      fill: "#fff",
      opacity: ".2",
      transform: "rotate(-12,42,40)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38 32 L30 14 L40 28",
      fill: "#e91e63",
      stroke: "#c62828",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62 32 L70 14 L60 28",
      fill: "#e91e63",
      stroke: "#c62828",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 50 L34 46 L30 52",
      stroke: "#e91e63",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "52",
      rx: "7",
      ry: "8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "52",
      rx: "7",
      ry: "8",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "53",
      rx: "4.5",
      ry: "5",
      fill: "#e91e63"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "62",
      cy: "53",
      rx: "4.5",
      ry: "5",
      fill: "#e91e63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43.5",
      cy: "50.5",
      r: "2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.5",
      cy: "50.5",
      r: "2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M32 46 L40 48",
      stroke: "#006064",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M68 46 L60 48",
      stroke: "#006064",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 63 Q50 68 56 63",
      stroke: "#006064",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32",
      cy: "60",
      rx: "4",
      ry: "2.5",
      fill: "#e91e63",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "68",
      cy: "60",
      rx: "4",
      ry: "2.5",
      fill: "#e91e63",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "36",
      textAnchor: "middle",
      fill: "#e91e63",
      fontSize: "7",
      fontWeight: "900",
      fontFamily: "monospace"
    }, "NEO"), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "80",
      rx: "8",
      ry: "4",
      fill: "#00838f",
      opacity: ".6"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "80",
      rx: "8",
      ry: "4",
      fill: "#00838f",
      opacity: ".6"
    })),
    // ══ EX2 (12): ツインメタル ══ 銅と鉄の合体。左右非対称
    12: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M50 20 L50 85 Q30 85 25 60 Q20 35 50 20Z",
      fill: "#FF8A65",
      stroke: "#bf360c",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 20 L50 85 Q70 85 75 60 Q80 35 50 20Z",
      fill: "#8D6E63",
      stroke: "#5d4037",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      y1: "20",
      x2: "50",
      y2: "85",
      stroke: "#ffd54f",
      strokeWidth: "2",
      strokeDasharray: "4,3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "40",
      cy: "44",
      rx: "5",
      ry: "6",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "44",
      rx: "5",
      ry: "6",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "44",
      r: "3.5",
      fill: "#e65100"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "61",
      cy: "44",
      r: "3.5",
      fill: "#d32f2f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.5",
      cy: "42.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "62.5",
      cy: "42.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36 24 L28 8 L38 18",
      fill: "#FF8A65",
      stroke: "#bf360c",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60",
      y: "8",
      width: "6",
      height: "16",
      rx: "3",
      fill: "#5d4037",
      stroke: "#3e2723",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42 58 L50 62 L58 58",
      stroke: "#4e342e",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "38",
      cy: "82",
      rx: "8",
      ry: "4",
      fill: "#bf360c"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "62",
      cy: "82",
      rx: "8",
      ry: "4",
      fill: "#5d4037"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "35",
      r: "4",
      fill: "#ffd54f",
      opacity: ".4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "35",
      r: "2",
      fill: "#fff",
      opacity: ".6"
    })),
    // ══ EX3 (13): ポイズンクイーン ══ 毒の女王蛇。ティアラ付き
    13: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m13b",
      cx: "50%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#f3e5f5"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: c
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#4a148c",
      stopOpacity: ".7"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M60 80 Q78 75 75 60 Q72 48 60 50 Q50 52 50 62 Q50 72 40 70 Q32 68 35 58",
      stroke: c,
      strokeWidth: "7",
      fill: "none",
      strokeLinecap: "round",
      opacity: ".35"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "42",
      rx: "24",
      ry: "22",
      fill: "url(#m13b)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "48",
      rx: "12",
      ry: "10",
      fill: "#f3e5f5",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34 24 L38 14 L44 22 L50 12 L56 22 L62 14 L66 24",
      stroke: "#ffd54f",
      strokeWidth: "2",
      fill: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "16",
      r: "2.5",
      fill: "#e91e63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40",
      cy: "19",
      r: "1.5",
      fill: "#ce93d8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "19",
      r: "1.5",
      fill: "#ce93d8"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "40",
      rx: "6",
      ry: "5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58",
      cy: "40",
      rx: "6",
      ry: "5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43",
      cy: "41",
      rx: "3.5",
      ry: "3.5",
      fill: "#7b1fa2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "59",
      cy: "41",
      rx: "3.5",
      ry: "3.5",
      fill: "#7b1fa2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.5",
      cy: "39.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.5",
      cy: "39.5",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36 36 Q38 33 42 36",
      stroke: "#4a148c",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M58 36 Q62 33 64 36",
      stroke: "#4a148c",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 50 Q50 55 56 50",
      stroke: "#7b1fa2",
      strokeWidth: "1.5",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34",
      cy: "46",
      rx: "3.5",
      ry: "2",
      fill: "#e91e63",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "66",
      cy: "46",
      rx: "3.5",
      ry: "2",
      fill: "#e91e63",
      opacity: ".3"
    })),
    // ══ EX4 (14): プロフェッサーX ══ 博士の師匠。知的で威厳ある老人
    14: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m14sk",
      cx: "50%",
      cy: "40%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#ffe4c4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#dbb896"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M28 55 Q25 60 22 95 Q50 100 78 95 Q75 60 72 55Z",
      fill: "#3949ab",
      stroke: "#1a237e",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 55 L38 95",
      stroke: "#5c6bc0",
      strokeWidth: ".5",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M60 55 L62 95",
      stroke: "#5c6bc0",
      strokeWidth: ".5",
      opacity: ".3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45 68 Q50 62 55 68 Q50 74 45 68",
      stroke: "#7986cb",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45 74 Q50 68 55 74 Q50 80 45 74",
      stroke: "#7986cb",
      strokeWidth: "1.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "38",
      rx: "20",
      ry: "18",
      fill: "url(#m14sk)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 34 Q26 15 40 8 Q50 4 60 8 Q74 15 70 34",
      fill: "#e0e0e0",
      stroke: "#bdbdbd",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30 34 Q28 42 26 52",
      stroke: "#e0e0e0",
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M70 34 Q72 42 74 52",
      stroke: "#e0e0e0",
      strokeWidth: "4",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "37",
      y: "33",
      width: "12",
      height: "9",
      rx: "2",
      fill: "rgba(200,220,255,.15)",
      stroke: "#1a237e",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "53",
      y: "33",
      width: "12",
      height: "9",
      rx: "2",
      fill: "rgba(200,220,255,.15)",
      stroke: "#1a237e",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49",
      y1: "37",
      x2: "53",
      y2: "37",
      stroke: "#1a237e",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "37",
      r: "2.5",
      fill: "#1a237e"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59",
      cy: "37",
      r: "2.5",
      fill: "#1a237e"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "36",
      r: "1.2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "36",
      r: "1.2",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42 48 Q44 52 42 58 Q40 64 38 68",
      stroke: "#ccc",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 50 Q50 58 50 66 Q50 70 50 74",
      stroke: "#ccc",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M58 48 Q56 52 58 58 Q60 64 62 68",
      stroke: "#ccc",
      strokeWidth: "2",
      fill: "none",
      strokeLinecap: "round"
    })),
    // ══ EX5 (15): ??? ══ 正体不明。宇宙的オーラ、目だけ見える
    15: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: "m15b",
      cx: "50%",
      cy: "50%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: c,
      stopOpacity: ".8"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "40%",
      stopColor: c,
      stopOpacity: ".4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "70%",
      stopColor: c,
      stopOpacity: ".15"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: c,
      stopOpacity: "0"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "m15c",
      cx: "50%",
      cy: "50%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#fff",
      stopOpacity: ".2"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#fff",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "42",
      fill: "url(#m15b)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "30",
      fill: "url(#m15c)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "52",
      rx: "22",
      ry: "24",
      fill: c,
      opacity: ".5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "52",
      rx: "16",
      ry: "18",
      fill: c,
      opacity: ".7"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "42",
      cy: "48",
      rx: "5",
      ry: "6",
      fill: "#fff",
      opacity: ".95"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58",
      cy: "48",
      rx: "5",
      ry: "6",
      fill: "#fff",
      opacity: ".95"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43",
      cy: "49",
      rx: "3",
      ry: "4",
      fill: c
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "59",
      cy: "49",
      rx: "3",
      ry: "4",
      fill: c
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "47",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "47",
      r: "1.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "38",
      textAnchor: "middle",
      fill: "#fff",
      fontSize: "10",
      fontWeight: "900",
      opacity: ".4",
      fontFamily: "monospace"
    }, "???"), [20, 55, 85, 120, 160, 200, 240, 280, 320, 350].map((a, i) => {
      const r = 34 + Math.random() * 10;
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: 50 + Math.cos(a * Math.PI / 180) * r,
        cy: 50 + Math.sin(a * Math.PI / 180) * r,
        r: 1 + Math.random() * 1.5,
        fill: "#fff",
        opacity: .15 + Math.random() * .25
      });
    }), /*#__PURE__*/React.createElement("path", {
      d: "M44 58 Q50 62 56 58",
      stroke: "#fff",
      strokeWidth: "1",
      fill: "none",
      opacity: ".5",
      strokeLinecap: "round"
    }))
  };
  return monsters[id] || monsters[1];
};

/* ── プロローグ・ストーリー背景 ─── */
const PROLOGUE = ["ここは、原子科学研究所。", "世界的な化学者・ゲンシ博士が\n日夜研究を続ける場所だ。", "ある日、実験中の事故で\n原子エネルギーが暴走！", "原子の力を持つモンスターたちが\n研究所から逃げ出してしまった！", "博士「大変じゃ！キミの力で\nモンスターを止めてくれ！」", "原子を組み合わせて化合物を作り、\nモンスターたちを倒すのだ！"];

/* ── プロローグ画面コンポーネント ─── */
const Prologue = ({
  onDone
}) => {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(true);
  const goNext = () => {
    if (page >= PROLOGUE.length - 1) {
      onDone();
      return;
    }
    setFade(false);
    setTimeout(() => {
      setPage(p => p + 1);
      setFade(true);
    }, 300);
    SE.tap();
  };
  const isLast = page >= PROLOGUE.length - 1;
  const showDr = page >= 1;
  return /*#__PURE__*/React.createElement("div", {
    onClick: goNext,
    style: {
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "calc(24px + env(safe-area-inset-top)) 28px 24px",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 40%,rgba(167,139,250,.1),transparent 60%),linear-gradient(180deg,#060612,#0c0c24)"
    }
  }, /*#__PURE__*/React.createElement(Orbs, {
    n: 6
  }), /*#__PURE__*/React.createElement(NoiseOverlay, null), showDr && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20,
      animation: "fadeScale .5s ease both",
      filter: "drop-shadow(0 8px 30px rgba(167,139,250,.3))"
    }
  }, /*#__PURE__*/React.createElement(DrSVG, {
    size: page >= 4 ? 140 : 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 300,
      width: "100%",
      padding: 24,
      borderRadius: 20,
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.08)",
      backdropFilter: "blur(8px)",
      opacity: fade ? 1 : 0,
      transition: "opacity .3s",
      animation: fade ? "slideUp .4s ease both" : "none"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "rgba(255,255,255,.8)",
      lineHeight: 2,
      textAlign: "center",
      whiteSpace: "pre-line",
      fontWeight: 600
    }
  }, PROLOGUE[page])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 20,
      position: "relative",
      zIndex: 2
    }
  }, PROLOGUE.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: i === page ? 20 : 6,
      height: 6,
      borderRadius: 3,
      background: i === page ? "#a78bfa" : "rgba(255,255,255,.15)",
      transition: "all .3s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 13,
      color: "rgba(255,255,255,.25)",
      position: "relative",
      zIndex: 2
    }
  }, isLast ? "タップしてはじめる" : "タップでつぎへ ▶"));
};

/* ── CPU AI ─── */
const cpuBond = (hand, d, prem) => {
  const p = findP(cntA(hand), prem);
  if (!p.length) return null;
  if (d === "easy") {
    if (Math.random() < 0.5) return null;
    return [...p].sort((a, b) => a.p - b.p)[0];
  }
  if (d === "normal") {
    if (Math.random() < 0.2) return null;
    const s = [...p].sort((a, b) => b.p - a.p);
    return s[0 | s.length / 2] || s[0];
  }
  return [...p].sort((a, b) => b.p - a.p)[0];
};
const cpuDiscard = (hand, d) => {
  if (d === "hard") {
    const c = cntA(hand),
      ss = {};
    for (const card of hand) {
      if (!ss[card.s]) ss[card.s] = 0;
      for (const comp of COMPS) if (comp.a[card.s]) ss[card.s] += comp.p;
    }
    let w = hand[0],
      ws = Infinity;
    for (const card of hand) {
      const sc = ss[card.s] / (c[card.s] || 1);
      if (sc < ws) {
        ws = sc;
        w = card;
      }
    }
    return w.id;
  }
  return hand[0 | Math.random() * hand.length].id;
};
const cpuCards = (hand, comp) => {
  const n = {
      ...comp.a
    },
    ids = [];
  for (const c of hand) if (n[c.s] > 0) {
    ids.push(c.id);
    n[c.s]--;
  }
  return ids;
};

/* ═══════════════════════════════════════════════════════════
   🎨 PREMIUM CSS - 全面リニューアル
   ═══════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700;900&family=Outfit:wght@400;600;800;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;user-select:none}
body{font-family:'Zen Maru Gothic','Outfit',sans-serif;overflow-x:hidden;background:#060612}
input::placeholder{color:rgba(255,255,255,.25)}input{user-select:text;font-family:inherit}
button{font-family:inherit;transition:transform .12s,box-shadow .2s}button:active{transform:scale(.95)!important}

/* ═ アニメーション ═ */
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pg{0%,100%{box-shadow:0 0 12px var(--g),inset 0 0 6px var(--gi,transparent)}50%{box-shadow:0 0 28px var(--g),0 0 56px var(--g),inset 0 0 12px var(--gi,transparent)}}
@keyframes su{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes ca{0%{opacity:0;transform:scale(.6) rotateY(90deg)}60%{transform:scale(1.06) rotateY(-4deg)}100%{opacity:1;transform:scale(1) rotateY(0)}}
@keyframes bo{0%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.1)}66%{transform:translate(-20px,15px) scale(.95)}100%{transform:translate(0,0) scale(1)}}
@keyframes ke{0%{opacity:0;transform:translate(0,0) scale(.3)}30%{opacity:1;transform:translate(calc(var(--dx)*.4),calc(var(--dy)*.4)) scale(1.2)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}
@keyframes kb{0%{transform:scale(.3);opacity:0}50%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
@keyframes ku{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes kt{0%,100%{opacity:.2;transform:scale(.5)}50%{opacity:1;transform:scale(1.2)}}
@keyframes ks{0%,100%{transform:translate(0,0)}25%{transform:translate(-4px,2px)}50%{transform:translate(4px,-2px)}75%{transform:translate(-2px,4px)}}
@keyframes cb{0%{transform:scale(.5);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}
@keyframes cf{0%{transform:translateY(-10px) rotate(0);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
@keyframes crb{0%{transform:scale(0) rotate(-20deg)}40%{transform:scale(1.3) rotate(10deg)}70%{transform:scale(.9) rotate(-5deg)}100%{transform:scale(1) rotate(0)}}
@keyframes sp{0%{transform:scale(0);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
@keyframes gp{0%,100%{text-shadow:0 0 20px var(--gc),0 0 40px var(--gc)}50%{text-shadow:0 0 40px var(--gc),0 0 80px var(--gc),0 0 120px var(--gc)}}
@keyframes fw{0%{transform:scale(0);opacity:1}50%{opacity:1}100%{transform:scale(1);opacity:0}}
@keyframes rain{0%{transform:translateY(-20px);opacity:0}10%{opacity:.6}90%{opacity:.6}100%{transform:translateY(100vh);opacity:0}}
@keyframes sadBounce{0%{transform:scale(0) rotate(10deg)}50%{transform:scale(1.1) rotate(-5deg)}100%{transform:scale(1) rotate(0)}}
@keyframes charge{0%{transform:scale(.5);opacity:.3;filter:blur(8px)}60%{transform:scale(.8);opacity:.8;filter:blur(4px)}80%{transform:scale(.9);opacity:1;filter:blur(2px)}100%{transform:scale(1);opacity:1;filter:blur(0)}}
@keyframes chargeGlow{0%{box-shadow:0 0 20px var(--cg)}50%{box-shadow:0 0 60px var(--cg),0 0 120px var(--cg)}100%{box-shadow:0 0 20px var(--cg)}}
@keyframes flash{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(3)}}
@keyframes ringBurst{0%{transform:scale(0);opacity:1;border-width:8px}100%{transform:scale(3);opacity:0;border-width:1px}}
@keyframes megaBounce{0%{transform:scale(0) rotate(-10deg)}30%{transform:scale(1.4) rotate(5deg)}50%{transform:scale(.85) rotate(-3deg)}70%{transform:scale(1.15) rotate(2deg)}100%{transform:scale(1) rotate(0)}}
@keyframes textReveal{0%{transform:scale(3);opacity:0;filter:blur(12px)}100%{transform:scale(1);opacity:1;filter:blur(0)}}
@keyframes starSpin{0%{transform:rotate(0) scale(0);opacity:0}50%{opacity:1}100%{transform:rotate(360deg) scale(1);opacity:0}}
@keyframes bgFlash{0%{opacity:.8}100%{opacity:0}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes titleGlow{0%,100%{filter:drop-shadow(0 0 20px rgba(167,139,250,.4)) drop-shadow(0 0 60px rgba(167,139,250,.15))}50%{filter:drop-shadow(0 0 40px rgba(167,139,250,.6)) drop-shadow(0 0 100px rgba(167,139,250,.25))}}
@keyframes orbFloat{0%{transform:translate(0,0) rotate(0deg)}25%{transform:translate(10px,-15px) rotate(90deg)}50%{transform:translate(-5px,-25px) rotate(180deg)}75%{transform:translate(-15px,-10px) rotate(270deg)}100%{transform:translate(0,0) rotate(360deg)}}
@keyframes cardHolo{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes pulseRing{0%{transform:scale(.8);opacity:0}40%{opacity:1}100%{transform:scale(1.4);opacity:0}}
@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeScale{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:rgba(167,139,250,.2);border-radius:4px}
`;
const BG = "radial-gradient(ellipse at 30% 15%,rgba(167,139,250,.12) 0%,transparent 50%),radial-gradient(ellipse at 75% 85%,rgba(251,146,60,.08) 0%,transparent 45%),radial-gradient(ellipse at 50% 50%,rgba(56,189,248,.05) 0%,transparent 60%),linear-gradient(180deg,#060612 0%,#0c0c24 50%,#0a0a1e 100%)";

/* ═══════════════════════════════════════════════════════════
   🎨 PREMIUM UI コンポーネント
   ═══════════════════════════════════════════════════════════ */

/* ── 背景オーブ ─── */
const Orbs = ({
  n = 10,
  co = "rgba(167,139,250,.05)"
}) => {
  const o = useRef(Array.from({
    length: n
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    sz: 80 + Math.random() * 200,
    d: 15 + Math.random() * 25,
    dl: Math.random() * -20
  }))).current;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden"
    }
  }, o.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    style: {
      position: "absolute",
      left: `${v.x}%`,
      top: `${v.y}%`,
      width: v.sz,
      height: v.sz,
      borderRadius: "50%",
      background: co,
      filter: "blur(60px)",
      animation: `bo ${v.d}s ${v.dl}s ease-in-out infinite`
    }
  })));
};

/* ── ノイズテクスチャ ─── */
const NoiseOverlay = () => /*#__PURE__*/React.createElement("div", {
  style: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 1,
    opacity: 0.03,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    backgroundRepeat: "repeat",
    backgroundSize: "128px 128px"
  }
});

/* ── プレミアムボタン ─── */
const PremBtn = ({
  children,
  onClick,
  gradient = "linear-gradient(135deg,#a78bfa,#818cf8)",
  shadow = "rgba(167,139,250,.35)",
  disabled,
  style,
  ...rest
}) => /*#__PURE__*/React.createElement("button", _extends({
  onClick: () => {
    if (!disabled) {
      onClick === null || onClick === void 0 || onClick();
      SE.tap();
    }
  },
  style: {
    padding: "14px 28px",
    borderRadius: 16,
    border: "none",
    background: disabled ? "rgba(255,255,255,.06)" : gradient,
    color: disabled ? "rgba(255,255,255,.25)" : "#fff",
    fontSize: 16,
    fontWeight: 800,
    cursor: disabled ? "default" : "pointer",
    boxShadow: disabled ? "none" : `0 4px 24px ${shadow},inset 0 1px 0 rgba(255,255,255,.15)`,
    letterSpacing: ".02em",
    position: "relative",
    overflow: "hidden",
    ...style
  }
}, rest), children, !disabled && /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)",
    backgroundSize: "200% 100%",
    animation: "shimmer 3s linear infinite"
  }
}));

/* ── BGMボタン ─── */
const BgmBtn = () => {
  const t = useT();
  const [on, setOn] = useState(BGM.on());
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (on) {
        BGM.stop();
        setOn(false);
      } else {
        BGM.start();
        setOn(true);
      }
    },
    style: {
      padding: "5px 12px",
      borderRadius: 20,
      border: `1px solid ${on ? "rgba(167,139,250,.3)" : "rgba(255,255,255,.1)"}`,
      background: on ? "rgba(167,139,250,.12)" : "rgba(255,255,255,.04)",
      color: on ? "#a78bfa" : "rgba(255,255,255,.3)",
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      whiteSpace: "nowrap",
      backdropFilter: "blur(8px)",
      position: "fixed",
      top: "max(12px,env(safe-area-inset-top))",
      right: 12,
      zIndex: 100
    }
  }, on ? t("bgmOn") : t("bgmOff"));
};

/* ── 設定ボタン ─── */
const SBtn = ({
  l,
  a,
  co = "#a78bfa",
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: () => {
    onClick();
    SE.tap();
  },
  style: {
    padding: "8px 14px",
    borderRadius: 12,
    border: `2px solid ${a ? co + "99" : "rgba(255,255,255,.08)"}`,
    background: a ? co + "15" : "rgba(255,255,255,.03)",
    color: a ? co : "rgba(255,255,255,.35)",
    fontSize: 13,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: a ? `0 0 12px ${co}22` : "none",
    backdropFilter: "blur(4px)"
  }
}, l);

/* ═══════════════════════════════════════════════════════════
   🃏 PREMIUM カードデザイン
   ═══════════════════════════════════════════════════════════ */
const Card = ({
  card,
  sel,
  onTap,
  dl = 0
}) => {
  const t = useT();
  const i = getAI(card.s);
  const rarity = RARITY[card.s] || 1;
  const rarityBorder = rarity >= 3 ? "rgba(255,215,0,.5)" : rarity >= 2 ? "rgba(167,139,250,.4)" : "rgba(255,255,255,.1)";
  const rarityGlow = rarity >= 3 ? `0 0 20px ${i.g}44` : rarity >= 2 ? `0 0 12px ${i.g}33` : "none";
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onTap === null || onTap === void 0 ? void 0 : onTap(card),
    style: {
      width: 72,
      minWidth: 72,
      height: 96,
      borderRadius: 14,
      position: "relative",
      overflow: "hidden",
      background: sel ? `linear-gradient(145deg,${i.c},${i.c}88)` : `linear-gradient(160deg,rgba(20,20,40,.95),rgba(15,15,35,.98))`,
      border: sel ? `2.5px solid ${i.g}` : `1.5px solid ${rarityBorder}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: sel ? `0 0 20px ${i.g}88,0 8px 20px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.15)` : `0 4px 12px rgba(0,0,0,.4),${rarityGlow}`,
      cursor: onTap ? "pointer" : "default",
      transition: "all .25s cubic-bezier(.34,1.56,.64,1)",
      flexShrink: 0,
      transform: sel ? "translateY(-10px) scale(1.1)" : "none",
      gap: 2,
      "--g": i.g + "88",
      "--gi": i.g + "22",
      animation: sel ? "pg 1.5s ease-in-out infinite" : `ca .35s ${dl}s ease both`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 12,
      background: sel ? "linear-gradient(135deg,transparent 20%,rgba(255,255,255,.15) 40%,transparent 60%)" : "linear-gradient(135deg,transparent 30%,rgba(255,255,255,.04) 50%,transparent 70%)",
      backgroundSize: "200% 200%",
      animation: rarity >= 2 ? "cardHolo 4s ease infinite" : "none",
      pointerEvents: "none"
    }
  }), rarity >= 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      fontSize: 7,
      color: "#ffd700",
      textShadow: "0 0 6px rgba(255,215,0,.6)"
    }
  }, "\u2605\u2605\u2605"), rarity === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      fontSize: 7,
      color: "#a78bfa",
      textShadow: "0 0 4px rgba(167,139,250,.5)"
    }
  }, "\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      filter: sel ? "drop-shadow(0 2px 6px rgba(0,0,0,.3))" : "none",
      position: "relative",
      zIndex: 2
    }
  }, i.e), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: sel ? i.tc : "#fff",
      lineHeight: 1,
      position: "relative",
      zIndex: 2,
      textShadow: sel ? "none" : "0 1px 3px rgba(0,0,0,.5)"
    }
  }, card.s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: sel ? i.tc + "cc" : "rgba(255,255,255,.4)",
      fontWeight: 700,
      position: "relative",
      zIndex: 2
    }
  }, t(card.k)));
};

/* ── バッジ ─── */
const Badge = ({
  comp
}) => {
  const t = useT();
  const tier = comp.p >= 20 ? "#f97316" : comp.p >= 8 ? "#a78bfa" : comp.p >= 5 ? "#38bdf8" : "#4ade80";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "rgba(255,255,255,.04)",
      borderRadius: 10,
      padding: "4px 10px",
      border: comp.sp ? `1.5px solid #c084fc` : `1px solid rgba(255,255,255,.08)`,
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, comp.e), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "rgba(255,255,255,.75)"
    }
  }, t(comp.k)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: "#000",
      background: comp.sp ? "linear-gradient(135deg,#c084fc,#a855f7)" : tier,
      borderRadius: 6,
      padding: "1px 6px"
    }
  }, comp.p, t("pt")));
};

/* ── カード残数 ─── */
const Inv = ({
  state,
  myHand
}) => {
  const t = useT();
  const [open, setOpen] = useState(false);
  const hc = cntA(myHand),
    dc = cntA(state.dp || []);
  const bu = {};
  ATOMS.forEach(a => bu[a.s] = 0);
  state.pl.forEach(p => p.bonds.forEach(b => Object.entries(b.a).forEach(([s, n]) => bu[s] = (bu[s] || 0) + n)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(!open);
      SE.tap();
    },
    style: {
      width: "100%",
      padding: 12,
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,.06)",
      background: "rgba(255,255,255,.03)",
      color: "rgba(255,255,255,.4)",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      backdropFilter: "blur(4px)"
    }
  }, "\uD83E\uDDEA ", open ? t("crC") : t("crO")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: 12,
      borderRadius: 14,
      background: "rgba(255,255,255,.02)",
      border: "1px solid rgba(255,255,255,.06)",
      animation: "su .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: 8
    }
  }, ATOMS.map(at => {
    const rem = at.n - (hc[at.s] || 0) - (bu[at.s] || 0) - (dc[at.s] || 0);
    return /*#__PURE__*/React.createElement("div", {
      key: at.s,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 20,
        height: 36,
        borderRadius: 5,
        background: "rgba(255,255,255,.04)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: `${Math.max(0, rem / at.n * 100)}%`,
        background: `linear-gradient(180deg,${at.g}88,${at.g}33)`,
        borderRadius: 3,
        transition: "height .3s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        marginTop: 2
      }
    }, at.e), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 800,
        color: at.g
      }
    }, at.s), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        color: rem > at.n * .5 ? "#4ade80" : rem > 0 ? "#fbbf24" : "#ef4444"
      }
    }, rem));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,.2)",
      textAlign: "center"
    }
  }, t("crN"))));
};

/* ═══════════════════════════════════════════════════════════
   🎆 おいわい（派手版 - 既存ロジック保持）
   ═══════════════════════════════════════════════════════════ */
const Celeb = ({
  comp,
  onDone
}) => {
  const t = useT();
  const pts = comp.p;
  const [ph, setPh] = useState(0);
  const tier = pts >= 35 ? 3 : pts >= 8 ? 2 : pts >= 5 ? 1 : 0;
  const mc = ["#4ade80", "#fbbf24", "#f97316", "#c084fc"][tier];
  const bg = ["rgba(10,30,15,.96)", "rgba(30,25,5,.96)", "rgba(40,12,3,.96)", "rgba(20,5,35,.96)"][tier];
  useEffect(() => {
    if (tier >= 2) {
      SE.tap();
      requestAnimationFrame(() => setPh(1));
      const a = setTimeout(() => {
        SE.bond(pts);
        setPh(2);
      }, tier >= 3 ? 2000 : 1200);
      const b = setTimeout(() => setPh(3), tier >= 3 ? 2600 : 1700);
      const c = setTimeout(() => setPh(4), tier >= 3 ? 3200 : 2200);
      const d = setTimeout(onDone, tier >= 3 ? 5500 : 4000);
      return () => {
        [a, b, c, d].forEach(clearTimeout);
      };
    } else {
      SE.bond(pts);
      requestAnimationFrame(() => setPh(2));
      const a = setTimeout(() => setPh(3), 300);
      const b = setTimeout(() => setPh(4), 600);
      const c = setTimeout(onDone, tier >= 1 ? 2200 : 1600);
      return () => {
        [a, b, c].forEach(clearTimeout);
      };
    }
  }, []);
  const ce = [["✨", "⭐"], ["✨", "⭐", "🎵", "💫"], ["🎉", "✨", "⭐", "🔥", "💫", "🌟"], ["🎉", "🎆", "✨", "⭐", "🔥", "💎", "🌟", "🏆", "💫", "🎊", "⚡", "👑"]][tier];
  const ec = [8, 14, 28, 50][tier];
  const ep = useRef(Array.from({
    length: ec
  }, (_, i) => {
    const a = i / ec * 360 + Math.random() * 20,
      d = 50 + Math.random() * (60 + tier * 50),
      r = a * Math.PI / 180;
    return {
      id: i,
      x: Math.cos(r) * d,
      y: Math.sin(r) * d,
      em: ce[i % ce.length],
      dl: Math.random() * .5,
      sz: 16 + Math.random() * (10 + tier * 8)
    };
  })).current;
  const spinS = useRef(tier >= 2 ? Array.from({
    length: tier >= 3 ? 16 : 8
  }, (_, i) => ({
    id: i,
    ang: i / (tier >= 3 ? 16 : 8) * 360,
    dist: 80 + Math.random() * 60,
    sz: 12 + Math.random() * 16,
    dl: Math.random() * .6,
    co: ["#fbbf24", "#f97316", "#c084fc", "#38bdf8", "#4ade80", "#ef4444"][i % 6]
  })) : []).current;
  const rings = tier >= 2 ? [0, .3, .6] : [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: ph >= 1 ? bg : "rgba(0,0,0,0)",
      transition: `background ${tier >= 2 ? '.5s' : '.3s'}`,
      overflow: "hidden"
    }
  }, ph >= 2 && tier >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: mc,
      animation: "bgFlash .4s ease forwards",
      zIndex: 1
    }
  }), ph === 1 && tier >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: tier >= 3 ? 160 : 120,
      height: tier >= 3 ? 160 : 120,
      borderRadius: "50%",
      background: `radial-gradient(circle,${mc}44,${mc}11,transparent)`,
      "--cg": `${mc}66`,
      animation: `charge ${tier >= 3 ? '1.8s' : '1s'} ease both, chargeGlow .4s ease-in-out infinite`,
      zIndex: 2
    }
  }), ph === 1 && tier >= 3 && Array.from({
    length: 20
  }).map((_, i) => {
    const a = i / 20 * 360 * Math.PI / 180;
    return /*#__PURE__*/React.createElement("div", {
      key: `ch${i}`,
      style: {
        position: "absolute",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: mc,
        left: `calc(50% + ${Math.cos(a) * 150}px)`,
        top: `calc(50% + ${Math.sin(a) * 150}px)`,
        animation: `charge 1.5s ${i * .08}s ease both`,
        zIndex: 3
      }
    });
  }), ph >= 2 && rings.map((dl, i) => /*#__PURE__*/React.createElement("div", {
    key: `r${i}`,
    style: {
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: "50%",
      border: `4px solid ${mc}`,
      animation: `ringBurst .8s ${dl}s ease-out forwards`,
      opacity: 0,
      zIndex: 4
    }
  })), ph >= 2 && ep.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      position: "absolute",
      fontSize: p.sz,
      "--dx": `${p.x}px`,
      "--dy": `${p.y}px`,
      animation: `ke ${.6 + tier * .3}s ${p.dl}s cubic-bezier(.2,.6,.3,1) forwards`,
      opacity: 0,
      zIndex: 5
    }
  }, p.em)), ph >= 2 && spinS.map(s => /*#__PURE__*/React.createElement("div", {
    key: `ss${s.id}`,
    style: {
      position: "absolute",
      width: s.sz,
      height: s.sz,
      borderRadius: "50%",
      background: s.co,
      boxShadow: `0 0 ${s.sz}px ${s.co}`,
      animation: `starSpin 1s ${s.dl}s ease-out forwards`,
      opacity: 0,
      zIndex: 5,
      left: `calc(50% + ${Math.cos(s.ang * Math.PI / 180) * s.dist}px)`,
      top: `calc(50% + ${Math.sin(s.ang * Math.PI / 180) * s.dist}px)`
    }
  })), ph >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      animation: tier >= 2 ? "megaBounce .8s ease both" : "kb .5s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: tier >= 3 ? 80 : 56,
      filter: `drop-shadow(0 8px 30px ${mc}66)`
    }
  }, comp.e)), ph >= 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      animation: tier >= 3 ? "textReveal .6s ease both" : "su .4s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 900,
      color: "#fff",
      marginTop: 4
    }
  }, t(comp.k)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.5)",
      marginTop: 2
    }
  }, comp.f)), ph >= 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      animation: "sp .4s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 900,
      color: mc,
      textShadow: `0 0 30px ${mc}88`,
      marginTop: 4
    }
  }, "+", comp.p, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, t("pt"))), comp.sp && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "#c084fc",
      fontWeight: 800,
      marginTop: 2
    }
  }, "\uD83D\uDC8E ", t("sp"))));
};

/* ── CPUオーバーレイ ─── */
const CpuOv = ({
  name,
  action,
  comp
}) => {
  const t = useT();
  const [ph, setPh] = useState(0);
  useEffect(() => {
    requestAnimationFrame(() => setPh(1));
  }, []);
  const emoji = (name.match(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/u) || ["🤖"])[0];
  // ストーリーモードのモンスターか判定
  const stageMatch = STORY.find(s => name.includes(s.name));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9998,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: ph >= 1 ? "rgba(6,6,18,.96)" : "rgba(0,0,0,0)",
      transition: "background .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      animation: ph >= 1 ? "cb .4s ease both" : "none",
      opacity: 0
    }
  }, stageMatch ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8,
      filter: `drop-shadow(0 8px 30px ${stageMatch.color}55)`
    }
  }, /*#__PURE__*/React.createElement(MonsterSVG, {
    id: stageMatch.id,
    size: 100,
    color: stageMatch.color
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      marginBottom: 8,
      filter: "drop-shadow(0 4px 20px rgba(167,139,250,.3))"
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: stageMatch ? stageMatch.color : "#a78bfa",
      marginBottom: 4
    }
  }, name), action === "bond" && comp && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "#4ade80",
      fontWeight: 800
    }
  }, t("cpuB")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginTop: 4
    }
  }, comp.e), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: "#fff",
      marginTop: 2
    }
  }, t(comp.k)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#fbbf24",
      fontWeight: 800
    }
  }, "+", comp.p, t("pt"))), action === "pass" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,.35)"
    }
  }, t("cpuT"))));
};

/* ── パス画面 ─── */
const Pass = ({
  pn,
  onReady,
  info
}) => {
  const t = useT();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "calc(24px + env(safe-area-inset-top)) 24px 24px 24px",
      background: BG,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Orbs, null), /*#__PURE__*/React.createElement(NoiseOverlay, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 16,
      animation: "fl 2s ease-in-out infinite",
      filter: "drop-shadow(0 4px 20px rgba(167,139,250,.3))"
    }
  }, "\uD83D\uDCF1"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: "#fff",
      margin: "0 0 8px",
      textAlign: "center"
    }
  }, t("passD")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "rgba(255,255,255,.5)",
      margin: "0 0 4px"
    }
  }, t("next"), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#a78bfa",
      fontSize: 22
    }
  }, pn), " ", t("trn")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.25)",
      margin: "0 0 28px"
    }
  }, info), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: onReady,
    gradient: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    shadow: "rgba(124,58,237,.4)",
    style: {
      padding: "18px 48px",
      fontSize: 20,
      borderRadius: 20
    }
  }, t("ready"))));
};

/* ═══════════════════════════════════════════════════════════
   📱 タイトル画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Title({
  onStart,
  onStartCpu,
  onStartStory,
  onTest,
  lang,
  setLang,
  premium,
  setPremium,
  cleared
}) {
  const t = useT();
  const [mode, setMode] = useState(null);
  const [pc, setPc] = useState(2);
  const [names, setNames] = useState(["", "", "", ""]);
  const [cn, setCn] = useState("");
  const [cc, setCc] = useState(1);
  const [cd, setCd] = useState("normal");
  const [hl, setHL] = useState(7);
  const [storySt, setStorySt] = useState(null);
  const [prologueSeen, setPrologueSeen] = useState(false);
  const [bgmOn, setBgmOn] = useState(BGM.on());
  const [seOn, setSeOn] = useState(SE.isEnabled());
  const Stg = () => /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 18,
      borderRadius: 20,
      background: "rgba(255,255,255,.02)",
      border: "1px solid rgba(255,255,255,.06)",
      maxWidth: 300,
      width: "100%",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      color: "#fbbf24",
      marginBottom: 12
    }
  }, "\u2699\uFE0F ", t("settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\uD83D\uDD24 ", t("langLabel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SBtn, {
    l: t("langH"),
    a: lang === "hiragana",
    co: "#a78bfa",
    onClick: () => setLang("hiragana")
  }), /*#__PURE__*/React.createElement(SBtn, {
    l: t("langK"),
    a: lang === "kanji",
    co: "#a78bfa",
    onClick: () => setLang("kanji")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\uD83D\uDD0A ", t("soundLabel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.3)"
    }
  }, t("bgmLabel")), /*#__PURE__*/React.createElement(SBtn, {
    l: t("onLabel"),
    a: bgmOn,
    co: "#4ade80",
    onClick: () => {
      BGM.start();
      setBgmOn(true);
    }
  }), /*#__PURE__*/React.createElement(SBtn, {
    l: t("offLabel"),
    a: !bgmOn,
    co: "#ef4444",
    onClick: () => {
      BGM.stop();
      setBgmOn(false);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.3)"
    }
  }, t("seLabel")), /*#__PURE__*/React.createElement(SBtn, {
    l: t("onLabel"),
    a: seOn,
    co: "#4ade80",
    onClick: () => {
      SE.setEnabled(true);
      setSeOn(true);
    }
  }), /*#__PURE__*/React.createElement(SBtn, {
    l: t("offLabel"),
    a: !seOn,
    co: "#ef4444",
    onClick: () => {
      SE.setEnabled(false);
      setSeOn(false);
    }
  }))));
  const PremPanel = () => /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 18,
      borderRadius: 20,
      background: premium ? "rgba(74,222,128,.03)" : "linear-gradient(135deg,rgba(251,191,36,.04),rgba(249,115,22,.04))",
      border: premium ? "1px solid rgba(74,222,128,.15)" : "1.5px solid rgba(251,191,36,.15)",
      maxWidth: 300,
      width: "100%",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 900,
      color: premium ? "#4ade80" : "#fbbf24",
      marginBottom: 6
    }
  }, t("premTitle")), premium ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#4ade80",
      fontWeight: 700
    }
  }, t("premDone")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.4)",
      marginBottom: 10,
      lineHeight: 1.6
    }
  }, t("premMsg")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      marginBottom: 10
    }
  }, COMPS.filter(c => !c.free).map(c => /*#__PURE__*/React.createElement("span", {
    key: c.k,
    style: {
      fontSize: 11,
      padding: "2px 8px",
      borderRadius: 8,
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(251,191,36,.15)",
      color: "rgba(255,255,255,.4)"
    }
  }, t("locked"), " ", t(c.k)))), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: () => {
      SE.gStart();
      setPremium(true);
    },
    gradient: "linear-gradient(135deg,#f59e0b,#fbbf24)",
    shadow: "rgba(245,158,11,.3)",
    style: {
      width: "100%",
      fontSize: 15
    }
  }, t("premBtn")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,.2)",
      marginTop: 6,
      textAlign: "center"
    }
  }, "\u203B App Store\u516C\u958B\u6642\u306B\u5B9F\u969B\u306E\u8AB2\u91D1\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3059")));
  const wrap = ch => /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "calc(24px + env(safe-area-inset-top)) 24px calc(24px + env(safe-area-inset-bottom)) 24px",
      background: BG,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Orbs, null), /*#__PURE__*/React.createElement(NoiseOverlay, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: 340
    }
  }, ch));

  // ─ タイトルトップ ─
  if (mode === null) return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      animation: "fl 3s ease-in-out infinite",
      filter: "drop-shadow(0 6px 30px rgba(167,139,250,.5))",
      position: "relative",
      zIndex: 2
    }
  }, "\uD83E\uDDEA"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-20px",
      borderRadius: "50%",
      background: "radial-gradient(circle,rgba(167,139,250,.15),transparent 70%)",
      animation: "pulseRing 3s ease-in-out infinite",
      zIndex: 1
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      fontWeight: 900,
      color: "#fff",
      textAlign: "center",
      margin: "0 0 2px",
      letterSpacing: ".04em",
      animation: "titleGlow 4s ease-in-out infinite"
    }
  }, t("title1")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#a78bfa",
      margin: "0 0 40px",
      letterSpacing: ".08em"
    }
  }, t("title2")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode("story");
      SE.tap();
    },
    style: {
      width: "100%",
      padding: "18px 20px",
      borderRadius: 20,
      border: "none",
      background: "linear-gradient(135deg,#be185d,#ec4899)",
      color: "#fff",
      fontSize: 17,
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: "0 4px 30px rgba(190,24,93,.35),inset 0 1px 0 rgba(255,255,255,.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, "\u2694\uFE0F"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left"
    }
  }, t("story"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      opacity: .85
    }
  }, t("storySub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",
      backgroundSize: "200% 100%",
      animation: "shimmer 3s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode("cpu");
      SE.tap();
    },
    style: {
      width: "100%",
      padding: "18px 20px",
      borderRadius: 20,
      border: "none",
      background: "linear-gradient(135deg,#ea580c,#f97316)",
      color: "#fff",
      fontSize: 17,
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: "0 4px 30px rgba(234,88,12,.35),inset 0 1px 0 rgba(255,255,255,.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, "\uD83E\uDD16"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left"
    }
  }, t("solo"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      opacity: .85
    }
  }, t("soloSub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",
      backgroundSize: "200% 100%",
      animation: "shimmer 3s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setMode("multi");
      SE.tap();
    },
    style: {
      width: "100%",
      padding: "18px 20px",
      borderRadius: 20,
      border: "none",
      background: "linear-gradient(135deg,#6d28d9,#8b5cf6)",
      color: "#fff",
      fontSize: 17,
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: "0 4px 30px rgba(109,40,217,.35),inset 0 1px 0 rgba(255,255,255,.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, "\uD83D\uDC6B"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "left"
    }
  }, t("multi"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      opacity: .85
    }
  }, t("multiSub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",
      backgroundSize: "200% 100%",
      animation: "shimmer 3s linear infinite"
    }
  })))));

  // ─ CPU対戦セットアップ ─
  if (mode === "cpu") return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      marginBottom: 8,
      filter: "drop-shadow(0 4px 20px rgba(249,115,22,.3))"
    }
  }, "\uD83E\uDD16"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: "#fff",
      margin: "0 0 24px"
    }
  }, t("solo")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: cn,
    onChange: e => setCn(e.target.value),
    placeholder: t("name"),
    style: {
      width: "100%",
      padding: "14px 18px",
      borderRadius: 14,
      border: "1.5px solid rgba(255,255,255,.08)",
      background: "rgba(255,255,255,.04)",
      color: "#fff",
      fontSize: 16,
      outline: "none",
      boxSizing: "border-box",
      fontWeight: 600,
      backdropFilter: "blur(4px)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 8
    }
  }, t("opp")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement(SBtn, {
    key: n,
    l: `${n}${t("unit")}`,
    a: cc === n,
    co: "#f97316",
    onClick: () => setCc(n)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 8
    }
  }, t("str")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, ["easy", "normal", "hard"].map(d => /*#__PURE__*/React.createElement(SBtn, {
    key: d,
    l: t(d),
    a: cd === d,
    co: "#f97316",
    onClick: () => setCd(d)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\uD83C\uDCCF ", t("hlLabel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 28,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, [7, 8, 9, 10].map(n => /*#__PURE__*/React.createElement(SBtn, {
    key: n,
    l: `${n}${t("mai")}${n === 7 ? `（${t("basic")}）` : ""}`,
    a: hl === n,
    onClick: () => setHL(n)
  }))), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: () => {
      SE.gStart();
      onStartCpu(cn.trim() || "あなた", Array.from({
        length: cc
      }, (_, i) => CPUN[i % 3]), cd, hl);
    },
    gradient: "linear-gradient(135deg,#ea580c,#f97316)",
    shadow: "rgba(234,88,12,.35)",
    style: {
      padding: "16px 48px",
      fontSize: 20,
      borderRadius: 20
    }
  }, "\uD83C\uDFAE ", t("start")), /*#__PURE__*/React.createElement(Stg, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 18,
      borderRadius: 20,
      background: "rgba(255,255,255,.02)",
      border: "1px solid rgba(255,255,255,.06)",
      maxWidth: 300,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      color: "#a78bfa",
      marginBottom: 8
    }
  }, "\uD83C\uDFB4 ", t("rules")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.45)",
      lineHeight: 2
    }
  }, "\u2460 ", t("r1"), /*#__PURE__*/React.createElement("br", null), "\u2461 ", t("r2"), /*#__PURE__*/React.createElement("br", null), "\u2462 ", t("r3"), /*#__PURE__*/React.createElement("br", null), "\u2463 ", t("hand"), hl, t("r4"), /*#__PURE__*/React.createElement("br", null), "\u2464 ", t("r5"), /*#__PURE__*/React.createElement("br", null), t("r6"), /*#__PURE__*/React.createElement("br", null), t("r7"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode(null),
    style: {
      marginTop: 14,
      padding: "10px 24px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,.08)",
      background: "transparent",
      color: "rgba(255,255,255,.35)",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, t("back"))));

  // ─ ストーリーモード ─
  if (mode === "story") {
    // プロローグ（初回のみ）
    if (!prologueSeen) {
      return /*#__PURE__*/React.createElement(Prologue, {
        onDone: () => setPrologueSeen(true)
      });
    }
    if (storySt === null) {
      const mainStages = STORY.filter(s => !s.ex);
      const exStages = STORY.filter(s => s.ex);
      const allMainCleared = cleared.has(10);
      return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
          animation: "fadeScale .4s ease both"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          filter: "drop-shadow(0 4px 12px rgba(167,139,250,.3))"
        }
      }, /*#__PURE__*/React.createElement(DrSVG, {
        size: 64
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: 20,
          fontWeight: 900,
          color: "#fff",
          margin: 0
        }
      }, t("story")), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: 12,
          color: "rgba(255,255,255,.4)",
          margin: "2px 0 0",
          fontWeight: 600
        }
      }, "\u30E2\u30F3\u30B9\u30BF\u30FC\u3092\u5012\u3057\u3066\u9032\u3081\uFF01"))), /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8
        }
      }, mainStages.map((s, i) => {
        const unlocked = i === 0 || cleared.has(STORY[i - 1].id);
        const isCleared = cleared.has(s.id);
        const diffLabel = {
          easy: "★☆☆",
          normal: "★★☆",
          hard: "★★★"
        }[s.diff];
        const diffColor = {
          easy: "#4ade80",
          normal: "#fbbf24",
          hard: "#ef4444"
        }[s.diff];
        return /*#__PURE__*/React.createElement("button", {
          key: s.id,
          onClick: () => {
            if (unlocked) {
              SE.tap();
              setStorySt(s);
            }
          },
          style: {
            padding: "12px 14px",
            borderRadius: 16,
            border: `1.5px solid ${unlocked ? s.color + '44' : 'rgba(255,255,255,.05)'}`,
            background: unlocked ? `linear-gradient(135deg,${s.color}08,${s.color}04)` : 'rgba(255,255,255,.01)',
            color: "#fff",
            cursor: unlocked ? "pointer" : "default",
            opacity: unlocked ? 1 : .35,
            textAlign: "left",
            position: "relative",
            overflow: "hidden"
          }
        }, isCleared && /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            padding: "3px 10px",
            borderRadius: "0 14px 0 10px",
            background: "rgba(74,222,128,.15)",
            border: "1px solid rgba(74,222,128,.2)"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            color: "#4ade80",
            fontWeight: 800
          }
        }, "\u2713 ", t("storyClear"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: 14,
            background: `${s.color}12`,
            border: `1px solid ${s.color}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0
          }
        }, unlocked ? /*#__PURE__*/React.createElement(MonsterSVG, {
          id: s.id,
          size: 48,
          color: s.color
        }) : /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 24,
            opacity: .5
          }
        }, "\uD83D\uDD12")), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 15,
            fontWeight: 900
          }
        }, unlocked ? `${t("storyStage")} ${s.id}  ${s.name}` : t("storyLocked")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: diffColor,
            fontWeight: 700,
            marginTop: 2
          }
        }, diffLabel))), unlocked && /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg,transparent,rgba(255,255,255,.02),transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 4s linear infinite"
          }
        }));
      }), allMainCleared && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: "center",
          margin: "12px 0 4px",
          fontSize: 13,
          fontWeight: 800,
          color: "#c084fc",
          letterSpacing: ".06em"
        }
      }, "\u2014 EX STAGES \u2014"), exStages.map((s, i) => {
        const prev = i === 0 ? 10 : exStages[i - 1].id;
        const unlocked = cleared.has(prev);
        const isCleared = cleared.has(s.id);
        return /*#__PURE__*/React.createElement("button", {
          key: s.id,
          onClick: () => {
            if (unlocked) {
              SE.tap();
              setStorySt(s);
            }
          },
          style: {
            padding: "12px 14px",
            borderRadius: 16,
            border: `1.5px solid ${unlocked ? s.color + '44' : 'rgba(255,255,255,.05)'}`,
            background: unlocked ? `linear-gradient(135deg,${s.color}0a,${s.color}04)` : 'rgba(255,255,255,.01)',
            color: "#fff",
            cursor: unlocked ? "pointer" : "default",
            opacity: unlocked ? 1 : .35,
            textAlign: "left",
            position: "relative",
            overflow: "hidden"
          }
        }, isCleared && /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            top: 0,
            right: 0,
            padding: "3px 10px",
            borderRadius: "0 14px 0 10px",
            background: "rgba(74,222,128,.15)",
            border: "1px solid rgba(74,222,128,.2)"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            color: "#4ade80",
            fontWeight: 800
          }
        }, "\u2713 ", t("storyClear"))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 52,
            height: 52,
            borderRadius: 14,
            background: `${s.color}12`,
            border: `1px solid ${s.color}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0
          }
        }, unlocked ? /*#__PURE__*/React.createElement(MonsterSVG, {
          id: s.id,
          size: 48,
          color: s.color
        }) : /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 24,
            opacity: .5
          }
        }, "\uD83D\uDD12")), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 15,
            fontWeight: 900
          }
        }, unlocked ? `EX${s.id - 10}  ${s.name}` : t("storyLocked")), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 12,
            color: "#ef4444",
            fontWeight: 700,
            marginTop: 2
          }
        }, "\u2605\u2605\u2605"))));
      }))), /*#__PURE__*/React.createElement("button", {
        onClick: () => setMode(null),
        style: {
          marginTop: 18,
          padding: "10px 24px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,.08)",
          background: "transparent",
          color: "rgba(255,255,255,.35)",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer"
        }
      }, t("back"))));
    }
    // ステージ詳細（モンスターイラスト大表示 + 博士の会話）
    return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12,
        animation: "fadeScale .5s ease both"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        filter: `drop-shadow(0 8px 40px ${storySt.color}66)`,
        animation: "fl 3s ease-in-out infinite"
      }
    }, /*#__PURE__*/React.createElement(MonsterSVG, {
      id: storySt.id,
      size: 140,
      color: storySt.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: "-30px",
        borderRadius: "50%",
        background: `radial-gradient(circle,${storySt.color}22,transparent 70%)`,
        zIndex: -1,
        animation: "pulseRing 3s ease-in-out infinite"
      }
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 28,
        fontWeight: 900,
        color: "#fff",
        margin: "0 0 2px",
        textShadow: `0 0 20px ${storySt.color}44`
      }
    }, storySt.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: storySt.color,
        fontWeight: 700,
        marginBottom: 16
      }
    }, storySt.ex ? `EX ${t("storyStage")} ${storySt.id - 10}` : `${t("storyStage")} ${storySt.id}`), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        maxWidth: 320,
        width: "100%",
        marginBottom: 20,
        animation: "slideUp .5s .2s ease both",
        opacity: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        filter: "drop-shadow(0 4px 10px rgba(167,139,250,.2))"
      }
    }, /*#__PURE__*/React.createElement(DrSVG, {
      size: 56
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: 14,
        borderRadius: "4px 16px 16px 16px",
        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(4px)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: -6,
        top: 12,
        width: 0,
        height: 0,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderRight: "6px solid rgba(255,255,255,.08)"
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "rgba(255,255,255,.7)",
        lineHeight: 1.8,
        margin: 0
      }
    }, storySt.intro))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginBottom: 20,
        animation: "slideUp .5s .35s ease both",
        opacity: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 14px",
        borderRadius: 12,
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.06)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "rgba(255,255,255,.3)",
        fontWeight: 700
      }
    }, "\u96E3\u6613\u5EA6"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 900,
        color: {
          easy: "#4ade80",
          normal: "#fbbf24",
          hard: "#ef4444"
        }[storySt.diff]
      }
    }, {
      easy: "★☆☆",
      normal: "★★☆",
      hard: "★★★"
    }[storySt.diff])), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 14px",
        borderRadius: 12,
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.06)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "rgba(255,255,255,.3)",
        fontWeight: 700
      }
    }, "\u624B\u672D\u4E0A\u9650"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 900,
        color: "#a78bfa"
      }
    }, storySt.hl, "\u679A")), storySt.deckSize && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 14px",
        borderRadius: 12,
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.06)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "rgba(255,255,255,.3)",
        fontWeight: 700
      }
    }, "\u5C71\u672D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 900,
        color: "#ef4444"
      }
    }, storySt.deckSize, "\u679A"))), /*#__PURE__*/React.createElement(PremBtn, {
      onClick: () => {
        SE.gStart();
        onStartStory(storySt);
      },
      gradient: `linear-gradient(135deg,${storySt.color}cc,${storySt.color})`,
      shadow: `${storySt.color}44`,
      style: {
        padding: "16px 48px",
        fontSize: 20,
        borderRadius: 20,
        animation: "slideUp .5s .5s ease both",
        opacity: 0
      }
    }, "\u2694\uFE0F ", t("storyFight")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setStorySt(null),
      style: {
        marginTop: 14,
        padding: "10px 24px",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,.08)",
        background: "transparent",
        color: "rgba(255,255,255,.35)",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, t("storyBack"))));
  }

  // ─ マルチプレイヤーセットアップ ─
  if (mode === "multi") return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      marginBottom: 8
    }
  }, "\uD83D\uDC6B"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: "#fff",
      margin: "0 0 24px"
    }
  }, t("multi")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 8
    }
  }, t("howMany")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, [2, 3, 4].map(n => /*#__PURE__*/React.createElement(SBtn, {
    key: n,
    l: `${n}${t("unitP")}`,
    a: pc === n,
    co: "#8b5cf6",
    onClick: () => setPc(n)
  }))), Array.from({
    length: pc
  }).map((_, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    value: names[i],
    onChange: e => {
      const nn = [...names];
      nn[i] = e.target.value;
      setNames(nn);
    },
    placeholder: `${i + 1}${t("pn")}`,
    style: {
      width: "100%",
      maxWidth: 280,
      padding: "12px 16px",
      borderRadius: 14,
      border: "1.5px solid rgba(255,255,255,.08)",
      background: "rgba(255,255,255,.04)",
      color: "#fff",
      fontSize: 15,
      outline: "none",
      fontWeight: 600,
      marginBottom: 8,
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)",
      fontWeight: 700,
      marginBottom: 8,
      marginTop: 4
    }
  }, "\uD83C\uDCCF ", t("hlLabel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 24,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, [7, 8, 9, 10].map(n => /*#__PURE__*/React.createElement(SBtn, {
    key: n,
    l: `${n}${t("mai")}${n === 7 ? `（${t("basic")}）` : ""}`,
    a: hl === n,
    onClick: () => setHL(n)
  }))), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: () => {
      SE.gStart();
      const pn = Array.from({
        length: pc
      }, (_, i) => names[i].trim() || `P${i + 1}`);
      onStart(pn, hl);
    },
    gradient: "linear-gradient(135deg,#6d28d9,#8b5cf6)",
    shadow: "rgba(109,40,217,.35)",
    style: {
      padding: "16px 48px",
      fontSize: 20,
      borderRadius: 20
    }
  }, "\uD83C\uDFAE ", t("gstart")), /*#__PURE__*/React.createElement(Stg, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 18,
      borderRadius: 20,
      background: "rgba(255,255,255,.02)",
      border: "1px solid rgba(255,255,255,.06)",
      maxWidth: 300,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      color: "#a78bfa",
      marginBottom: 8
    }
  }, "\uD83C\uDFB4 ", t("rules")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.45)",
      lineHeight: 2
    }
  }, "\u2460 ", t("r1"), /*#__PURE__*/React.createElement("br", null), "\u2461 ", t("r2"), /*#__PURE__*/React.createElement("br", null), "\u2462 ", t("r3"), /*#__PURE__*/React.createElement("br", null), "\u2463 ", t("hand"), hl, t("r4"), /*#__PURE__*/React.createElement("br", null), "\u2464 ", t("r5"), /*#__PURE__*/React.createElement("br", null), t("r6"), /*#__PURE__*/React.createElement("br", null), t("r7"))), /*#__PURE__*/React.createElement(PremPanel, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode(null),
    style: {
      marginTop: 14,
      padding: "10px 24px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,.08)",
      background: "transparent",
      color: "rgba(255,255,255,.35)",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, t("back"))));
}

/* ═══════════════════════════════════════════════════════════
   🎮 ゲーム画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Game({
  state,
  pi,
  onDraw,
  onBond,
  onPass,
  onDiscard,
  hl,
  onFinish,
  premium,
  onQuit
}) {
  const t = useT();
  const pl = state.pl[pi],
    hand = pl.hand;
  const PLCOLORS = [{
    bg: "linear-gradient(180deg,#060612,#0c0c24)",
    accent: "#a78bfa",
    headerBg: "rgba(167,139,250,.05)",
    border: "rgba(167,139,250,.1)"
  }, {
    bg: "linear-gradient(180deg,#060e12,#0a1c10)",
    accent: "#4ade80",
    headerBg: "rgba(74,222,128,.05)",
    border: "rgba(74,222,128,.1)"
  }, {
    bg: "linear-gradient(180deg,#120606,#241010)",
    accent: "#fb923c",
    headerBg: "rgba(251,146,60,.05)",
    border: "rgba(251,146,60,.1)"
  }, {
    bg: "linear-gradient(180deg,#121206,#242010)",
    accent: "#fbbf24",
    headerBg: "rgba(251,191,36,.05)",
    border: "rgba(251,191,36,.1)"
  }];
  const pco = PLCOLORS[pi % PLCOLORS.length];
  const [sel, setSel] = useState(new Set());
  const [showC, setSC] = useState(false);
  const [drew, setDrew] = useState(false);
  const [drawnC, setDrC] = useState(null);
  const [bonded, setBon] = useState(false);
  const [cel, setCel] = useState(null);
  const selC = hand.filter(c => sel.has(c.id));
  const selCnt = cntA(selC);
  const match = COMPS.find(c => (premium || c.free) && Object.entries(c.a).every(([s, n]) => (selCnt[s] || 0) === n) && Object.entries(selCnt).every(([s, n]) => (c.a[s] || 0) === n));
  const hc = cntA(hand);
  const poss = findP(hc, premium);
  const psc = pl.bonds.reduce((s, b) => s + b.p, 0);
  const overLimit = hand.length > hl;
  const toggle = card => {
    if (cel) return;
    setSel(p => {
      const n = new Set(p);
      if (n.has(card.id)) {
        n.delete(card.id);
        SE.cardDesel();
      } else {
        n.add(card.id);
        SE.cardSel();
      }
      return n;
    });
  };
  const doDiscard = cardId => {
    if (cel) return;
    SE.discard();
    onDiscard(cardId);
  };
  const doDraw = () => {
    if (cel) return;
    const d = onDraw();
    if (d) {
      SE.cardDraw();
      setDrew(true);
      setDrC(d);
    }
  };
  const doBond = () => {
    if (match && !cel) {
      setCel(match);
      onBond([...sel], match);
      setSel(new Set());
      setBon(true);
    }
  };
  const doPass = () => {
    if (cel) return;
    SE.pass();
    onPass();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      background: pco.bg,
      paddingTop: "env(safe-area-inset-top)"
    }
  }, cel && /*#__PURE__*/React.createElement(Celeb, {
    comp: cel,
    onDone: () => setCel(null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "max(14px, env(safe-area-inset-top)) 16px 12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: pco.headerBg,
      borderBottom: `1px solid ${pco.border}`,
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (window.confirm(t("quitConfirm"))) {
        BGM.stop();
        onQuit();
      }
    },
    style: {
      padding: "5px 10px",
      borderRadius: 10,
      border: "1px solid rgba(255,255,255,.1)",
      background: "rgba(255,255,255,.04)",
      color: "rgba(255,255,255,.35)",
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, t("quit")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 900,
      color: pco.accent
    }
  }, pl.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.25)"
    }
  }, t("tl"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,.25)",
      fontWeight: 700,
      letterSpacing: ".05em"
    }
  }, t("sc")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: "#fbbf24",
      textShadow: "0 0 12px rgba(251,191,36,.3)"
    }
  }, psc)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,.25)",
      fontWeight: 700,
      letterSpacing: ".05em"
    }
  }, t("dk")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: state.deck.length > 20 ? pco.accent : "#ef4444",
      textShadow: state.deck.length <= 10 ? "0 0 12px rgba(239,68,68,.3)" : "none"
    }
  }, state.deck.length)))), pl.bonds.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      background: "rgba(255,255,255,.01)",
      borderBottom: "1px solid rgba(255,255,255,.04)"
    }
  }, pl.bonds.map((b, i) => /*#__PURE__*/React.createElement(Badge, {
    key: i,
    comp: b
  }))), drawnC && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: `${pco.accent}08`,
      borderBottom: `1px solid ${pco.accent}11`,
      animation: "su .3s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: pco.accent,
      fontWeight: 700
    }
  }, t("drawn")), /*#__PURE__*/React.createElement(Card, {
    card: drawnC
  })), bonded && !cel && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      textAlign: "center",
      background: "rgba(74,222,128,.06)",
      borderBottom: "1px solid rgba(74,222,128,.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "#4ade80",
      fontWeight: 800
    }
  }, t("bondOk"))), overLimit && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      textAlign: "center",
      background: "rgba(239,68,68,.06)",
      borderBottom: "1px solid rgba(239,68,68,.1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "#ef4444",
      fontWeight: 800
    }
  }, "\u26A0\uFE0F ", t("hand"), hl, t("discW"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "14px 12px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.3)",
      marginBottom: 8,
      paddingLeft: 4,
      fontWeight: 700
    }
  }, "\uD83C\uDCCF ", t("hand"), " (", hand.length, t("mai"), ") ", t("tapS")), (() => {
    const order = "H O C N S Cl Na Cu Ag Fe".split(" ");
    const sorted = [...hand].sort((a, b) => order.indexOf(a.s) - order.indexOf(b.s));
    let lastS = "";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 7,
        justifyContent: "center"
      }
    }, sorted.map((c, i) => {
      const gap = c.s !== lastS && i > 0;
      lastS = c.s;
      return /*#__PURE__*/React.createElement("div", {
        key: c.id,
        style: {
          position: "relative",
          marginLeft: gap ? 10 : 0
        }
      }, /*#__PURE__*/React.createElement(Card, {
        card: c,
        sel: sel.has(c.id),
        onTap: toggle,
        dl: i * .03
      }), overLimit && /*#__PURE__*/React.createElement("button", {
        onClick: () => doDiscard(c.id),
        style: {
          position: "absolute",
          top: -6,
          right: -6,
          width: 24,
          height: 24,
          borderRadius: 12,
          border: "none",
          background: "linear-gradient(135deg,#ef4444,#dc2626)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 900,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(239,68,68,.5)",
          lineHeight: 1,
          zIndex: 2
        }
      }, "\xD7"));
    }));
  })(), match && !cel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 18,
      borderRadius: 18,
      background: "rgba(74,222,128,.04)",
      border: "1.5px solid rgba(74,222,128,.15)",
      textAlign: "center",
      animation: "fadeScale .3s ease",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#4ade80",
      fontWeight: 700,
      marginBottom: 4
    }
  }, t("canB")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36
    }
  }, match.e), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: "#fff"
    }
  }, t(match.k)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.4)"
    }
  }, match.f, "\uFF08+", match.p, t("pt"), "\uFF09"), match.sp && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#c084fc",
      fontWeight: 800,
      marginTop: 2
    }
  }, "\uD83D\uDC8E ", t("sp")), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: doBond,
    gradient: "linear-gradient(135deg,#059669,#34d399)",
    shadow: "rgba(5,150,105,.35)",
    style: {
      marginTop: 12,
      padding: "12px 36px",
      fontSize: 18
    }
  }, t("bBtn"))), /*#__PURE__*/React.createElement(Inv, {
    state: state,
    myHand: hand
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSC(!showC);
      SE.tap();
    },
    style: {
      width: "100%",
      padding: 12,
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,.06)",
      background: "rgba(255,255,255,.03)",
      color: "rgba(255,255,255,.4)",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uD83D\uDCCB ", showC ? t("cpC") : t("cpO")), showC && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: 12,
      borderRadius: 14,
      background: "rgba(255,255,255,.02)",
      border: "1px solid rgba(255,255,255,.04)",
      maxHeight: 350,
      overflowY: "auto",
      animation: "su .3s ease"
    }
  }, poss.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#4ade80",
      fontWeight: 900,
      marginBottom: 6
    }
  }, t("now")), poss.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "8px 6px",
      marginBottom: 6,
      borderRadius: 10,
      background: "rgba(74,222,128,.03)",
      border: c.sp ? "1.5px solid #c084fc" : "1px solid rgba(74,222,128,.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "#4ade80",
      fontWeight: 800
    }
  }, c.e, " ", t(c.k)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 900,
      color: "#000",
      background: c.sp ? "#c084fc" : "#4ade80",
      borderRadius: 8,
      padding: "2px 8px"
    }
  }, c.p, t("pt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, Object.entries(c.a).map(([s, n]) => {
    const inf = getAI(s);
    return Array.from({
      length: n
    }).map((_, j) => /*#__PURE__*/React.createElement("div", {
      key: `${s}${j}`,
      style: {
        width: 32,
        height: 38,
        borderRadius: 7,
        background: "rgba(255,255,255,.04)",
        border: `1.5px solid ${inf.g}33`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10
      }
    }, inf.e), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 900,
        color: inf.g
      }
    }, s)));
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(74,222,128,.3)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#4ade80",
      fontWeight: 600
    }
  }, c.f))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.25)",
      fontWeight: 900,
      marginBottom: 6
    }
  }, t("all")), [...COMPS].sort((a, b) => a.p - b.p).map((c, i) => {
    const isLocked = !premium && !c.free;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "8px 6px",
        marginBottom: 6,
        borderRadius: 10,
        background: isLocked ? "rgba(255,255,255,.005)" : "rgba(255,255,255,.015)",
        border: c.sp ? "1.5px solid #c084fc" : isLocked ? "1px solid rgba(255,255,255,.02)" : "1px solid rgba(255,255,255,.04)",
        opacity: isLocked ? .45 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: isLocked ? "rgba(255,255,255,.25)" : "rgba(255,255,255,.55)",
        fontWeight: 700
      }
    }, isLocked ? "🔒 " : "", c.e, " ", t(c.k), c.sp && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4,
        fontSize: 10,
        color: "#c084fc"
      }
    }, t("sp"))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 900,
        color: isLocked ? "rgba(255,255,255,.25)" : "#000",
        background: isLocked ? "rgba(255,255,255,.06)" : c.sp ? "#c084fc" : c.p >= 8 ? "#f97316" : c.p >= 5 ? "#fbbf24" : c.p >= 4 ? "#fb923c" : "#4ade80",
        borderRadius: 8,
        padding: "2px 8px",
        minWidth: 40,
        textAlign: "center"
      }
    }, c.p, t("pt"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, Object.entries(c.a).map(([s, n]) => {
      const inf = getAI(s);
      return Array.from({
        length: n
      }).map((_, j) => /*#__PURE__*/React.createElement("div", {
        key: `${s}${j}`,
        style: {
          width: 32,
          height: 38,
          borderRadius: 7,
          background: isLocked ? "rgba(255,255,255,.015)" : "rgba(255,255,255,.03)",
          border: `1.5px solid ${isLocked ? 'rgba(255,255,255,.04)' : inf.g + '22'}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          opacity: isLocked ? .3 : 1
        }
      }, inf.e), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          fontWeight: 900,
          color: isLocked ? "rgba(255,255,255,.15)" : inf.g
        }
      }, s)));
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,.1)"
      }
    }, "\u2192"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: isLocked ? "rgba(255,255,255,.15)" : "rgba(255,255,255,.35)",
        fontWeight: 600
      }
    }, c.f)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.3)",
      marginBottom: 4,
      paddingLeft: 4,
      fontWeight: 700
    }
  }, t("scL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, state.pl.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "8px 14px",
      borderRadius: 12,
      background: i === pi ? `${pco.accent}0a` : "rgba(255,255,255,.02)",
      border: i === pi ? `1.5px solid ${pco.accent}33` : "1px solid rgba(255,255,255,.04)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: i === pi ? pco.accent : "rgba(255,255,255,.35)",
      fontWeight: 700
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "#fbbf24",
      fontWeight: 900,
      marginLeft: 6
    }
  }, p.bonds.reduce((s, b) => s + b.p, 0), t("pt"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px max(28px, env(safe-area-inset-bottom))",
      borderTop: "1px solid rgba(255,255,255,.05)",
      display: "flex",
      gap: 10,
      background: "rgba(6,6,18,.97)",
      backdropFilter: "blur(12px)"
    }
  }, !drew && !bonded ? state.deck.length > 0 ? /*#__PURE__*/React.createElement(PremBtn, {
    onClick: doDraw,
    disabled: !!cel,
    gradient: `linear-gradient(135deg,#6d28d9,${pco.accent})`,
    shadow: "rgba(109,40,217,.35)",
    style: {
      flex: 1,
      padding: 16,
      fontSize: 18,
      borderRadius: 18
    }
  }, t("drB")) : /*#__PURE__*/React.createElement(PremBtn, {
    onClick: onFinish,
    gradient: "linear-gradient(135deg,#ea580c,#f97316)",
    shadow: "rgba(234,88,12,.35)",
    style: {
      flex: 1,
      padding: 16,
      fontSize: 18,
      borderRadius: 18,
      "--g": "rgba(249,115,22,.4)",
      animation: "pg 1.5s ease-in-out infinite"
    }
  }, t("fin")) : !overLimit && !cel && /*#__PURE__*/React.createElement("button", {
    onClick: doPass,
    style: {
      flex: 1,
      padding: 16,
      borderRadius: 18,
      border: "none",
      background: "linear-gradient(135deg,#334155,#475569)",
      color: "#fff",
      fontSize: 18,
      fontWeight: 900,
      cursor: "pointer",
      boxShadow: "0 4px 16px rgba(0,0,0,.3)"
    }
  }, bonded ? t("tEnd") : poss.length > 0 ? t("exp") : t("tEnd"))));
}

/* ═══════════════════════════════════════════════════════════
   🏆 結果画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Result({
  state,
  onRestart,
  isCpu,
  storyStage,
  onStoryWin
}) {
  const t = useT();
  const [ph, setPh] = useState(0);
  const ranks = state.pl.map((p, i) => ({
    ...p,
    idx: i,
    sc: p.bonds.reduce((s, b) => s + b.p, 0)
  })).sort((a, b) => b.sc - a.sc);
  const win = ranks[0];
  const isDraw = ranks.length > 1 && ranks[0].sc === ranks[1].sc;
  const diff = ranks.length > 1 ? ranks[0].sc - ranks[1].sc : 0;
  const playerLost = isCpu && !isDraw && ranks[0].idx !== 0;
  const playerWon = !isDraw && (!isCpu || ranks[0].idx === 0);
  useEffect(() => {
    BGM.stop();
    SE.drum();
    const t1 = setTimeout(() => {
      setPh(1);
      playerLost ? SE.lose() : SE.victory();
    }, 1500);
    const t2 = setTimeout(() => setPh(2), 2800);
    const t3 = setTimeout(() => setPh(3), 3600);
    const t4 = setTimeout(() => setPh(4), 4200);
    if (storyStage && playerWon && onStoryWin) setTimeout(() => onStoryWin(), 100);
    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, []);
  const conf = useRef(Array.from({
    length: 40
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    dl: Math.random() * 3,
    dur: 2 + Math.random() * 3,
    co: ["#ef4444", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f97316", "#22d3ee", "#c084fc"][i % 8],
    sz: 6 + Math.random() * 8
  }))).current;
  const fws = useRef(Array.from({
    length: 12
  }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 10 + Math.random() * 40,
    dl: .5 + Math.random() * 2.5,
    sz: 40 + Math.random() * 60,
    co: ["#ef4444", "#fbbf24", "#4ade80", "#a78bfa", "#22d3ee", "#f97316"][i % 6]
  }))).current;
  const raindrops = useRef(Array.from({
    length: 30
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    dl: Math.random() * 4,
    dur: 1.5 + Math.random() * 2,
    sz: 2 + Math.random() * 3
  }))).current;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 20px",
      paddingTop: 20,
      background: playerLost ? "radial-gradient(ellipse at 50% 30%,rgba(100,100,180,.06) 0%,transparent 50%),linear-gradient(180deg,#060612,#0a0e20)" : isDraw ? "radial-gradient(ellipse at 50% 30%,rgba(180,180,180,.05) 0%,transparent 50%),linear-gradient(180deg,#060612,#0c0c24)" : "radial-gradient(ellipse at 50% 30%,rgba(251,191,36,.08) 0%,transparent 50%),linear-gradient(180deg,#060612,#0c0c24)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Orbs, {
    n: 10,
    co: playerLost ? "rgba(100,130,200,.03)" : "rgba(251,191,36,.03)"
  }), /*#__PURE__*/React.createElement(NoiseOverlay, null), ph >= 1 && playerWon && conf.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      position: "fixed",
      left: `${c.x}%`,
      top: -20,
      width: c.sz,
      height: c.sz * 1.4,
      background: c.co,
      borderRadius: 2,
      opacity: 0,
      animation: `cf ${c.dur}s ${c.dl}s linear infinite`,
      zIndex: 5
    }
  })), ph >= 1 && playerWon && fws.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    style: {
      position: "fixed",
      left: `${f.x}%`,
      top: `${f.y}%`,
      width: f.sz,
      height: f.sz,
      borderRadius: "50%",
      border: `2px solid ${f.co}`,
      opacity: 0,
      animation: `fw 1.2s ${f.dl}s ease-out infinite`,
      boxShadow: `0 0 20px ${f.co}`,
      zIndex: 4
    }
  })), ph >= 1 && playerLost && raindrops.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      position: "fixed",
      left: `${r.x}%`,
      top: 0,
      width: r.sz,
      height: r.sz * 8,
      background: "linear-gradient(180deg,transparent,rgba(150,180,220,.3))",
      borderRadius: "0 0 2px 2px",
      opacity: 0,
      animation: `rain ${r.dur}s ${r.dl}s linear infinite`,
      zIndex: 5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: 380
    }
  }, ph === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "30vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      animation: "fl .5s ease-in-out infinite"
    }
  }, "\uD83E\uDD41"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 900,
      color: "rgba(255,255,255,.5)",
      marginTop: 12,
      animation: "kt .5s ease-in-out infinite"
    }
  }, t("res"))), ph >= 1 && playerWon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 88,
      animation: "crb .8s cubic-bezier(.34,1.56,.64,1) both",
      filter: "drop-shadow(0 8px 40px rgba(251,191,36,.5))",
      marginBottom: 8
    }
  }, "\uD83D\uDC51"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: "#fff",
      "--gc": "rgba(251,191,36,.5)",
      animation: "gp 2s ease-in-out infinite",
      textAlign: "center"
    }
  }, win.name, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fbbf24"
    }
  }, t("win")))), ph >= 1 && playerLost && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 88,
      animation: "sadBounce .8s ease both",
      filter: "drop-shadow(0 4px 15px rgba(100,130,200,.3))",
      marginBottom: 8
    }
  }, "\uD83D\uDE22"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 900,
      color: "rgba(150,180,220,.85)",
      textAlign: "center",
      animation: "su .5s ease both"
    }
  }, t("loseMsg")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "rgba(150,180,220,.45)",
      marginTop: 6,
      animation: "su .5s .2s ease both",
      opacity: 0
    }
  }, win.name, t("win"))), ph >= 1 && isDraw && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 88,
      animation: "crb .8s cubic-bezier(.34,1.56,.64,1) both",
      marginBottom: 8
    }
  }, "\uD83E\uDD1D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: "rgba(200,200,200,.85)",
      textAlign: "center"
    }
  }, t("tie"))), ph >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      animation: "sp .5s cubic-bezier(.34,1.56,.64,1) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontWeight: 900,
      color: playerLost ? "rgba(150,180,220,.65)" : "#fbbf24",
      textShadow: playerLost ? "none" : "0 0 40px rgba(251,191,36,.4),0 0 80px rgba(251,191,36,.2)",
      textAlign: "center"
    }
  }, win.sc, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28
    }
  }, t("pt"))), !isDraw && diff > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 4,
      fontSize: 16,
      color: playerLost ? "rgba(150,180,220,.4)" : "#f97316",
      fontWeight: 800,
      animation: "su .4s .3s ease both",
      opacity: 0
    }
  }, playerLost ? `📉 ${diff}${t("pdif")}` : `🔥 ${diff}${t("more")}`)), ph >= 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 20
    }
  }, ranks.map((p, r) => /*#__PURE__*/React.createElement("div", {
    key: p.idx,
    style: {
      padding: 16,
      borderRadius: 18,
      background: r === 0 ? playerLost ? "rgba(100,130,200,.04)" : "rgba(251,191,36,.05)" : "rgba(255,255,255,.02)",
      border: r === 0 ? playerLost ? "1.5px solid rgba(100,130,200,.15)" : "1.5px solid rgba(251,191,36,.2)" : "1px solid rgba(255,255,255,.04)",
      boxShadow: r === 0 ? playerLost ? "0 4px 20px rgba(100,130,200,.08)" : "0 4px 30px rgba(251,191,36,.15)" : "none",
      animation: `slideUp .4s ${r * .15}s ease both`,
      opacity: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: p.bonds.length > 0 ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "🥇🥈🥉4️⃣"[r] ? ["🥇", "🥈", "🥉", "4️⃣"][r] : "4️⃣"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 900,
      color: "#fff"
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: r === 0 ? playerLost ? "rgba(150,180,220,.7)" : "#fbbf24" : "rgba(255,255,255,.5)"
    }
  }, p.sc, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, t("pt")))), p.bonds.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4
    }
  }, p.bonds.map((b, bi) => /*#__PURE__*/React.createElement(Badge, {
    key: bi,
    comp: b
  }))), p.bonds.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.2)"
    }
  }, t("noB"))))), ph >= 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      animation: "su .4s ease both",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center"
    }
  }, storyStage && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      borderRadius: 16,
      background: "rgba(255,255,255,.03)",
      border: "1px solid rgba(255,255,255,.06)",
      width: "100%",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      filter: "drop-shadow(0 4px 10px rgba(167,139,250,.2))"
    }
  }, /*#__PURE__*/React.createElement(DrSVG, {
    size: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 12,
      borderRadius: "4px 14px 14px 14px",
      background: "rgba(255,255,255,.04)",
      border: "1px solid rgba(255,255,255,.06)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 10,
      width: 0,
      height: 0,
      borderTop: "6px solid transparent",
      borderBottom: "6px solid transparent",
      borderRight: "6px solid rgba(255,255,255,.06)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,.65)",
      lineHeight: 1.8,
      margin: 0
    }
  }, playerWon ? storyStage.win : storyStage.lose))), playerLost && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.35)",
      marginTop: 8,
      textAlign: "center"
    }
  }, t("retry"))), /*#__PURE__*/React.createElement(PremBtn, {
    onClick: onRestart,
    gradient: "linear-gradient(135deg,#ea580c,#f97316)",
    shadow: "rgba(234,88,12,.35)",
    style: {
      padding: "16px 48px",
      fontSize: 20,
      borderRadius: 20,
      width: "100%",
      maxWidth: 280
    }
  }, t("again")))));
}

/* ═══════════════════════════════════════════════════════════
   🎮 App
   ═══════════════════════════════════════════════════════════ */
window.__App = function App() {
  const [scr, setScr] = useState("title");
  const [gs, setGS] = useState(null);
  const [cp, setCP] = useState(0);
  const [sp, setSP] = useState(false);
  const [tc, setTC] = useState(0);
  const [lrs, setLRS] = useState(false);
  const [lrsp, setLRSP] = useState(-1);
  const [isCpu, setIC] = useState(false);
  const [cpuP, setCpuP] = useState(new Set());
  const [cpuD, setCpuD] = useState("normal");
  const [cpuOv, setCpuOv] = useState(null);
  const [hl, setHL] = useState(7);
  const [lang, setLang] = useState("kanji");
  const [premium, setPremium] = useState(true);
  const [cleared, setCleared] = useState(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
  const [storyStage, setStoryStage] = useState(null);
  useEffect(() => {
    const handler = e => {
      if (scr === "game") {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [scr]);
  const init = (pn, cs, d, lim, testCards) => {
    let deck = buildDeck();
    if (testCards) deck = deck.slice(0, testCards);
    const pl = pn.map(name => ({
      name,
      hand: [],
      bonds: []
    }));
    const h = lim || 7;
    setHL(h);
    setGS({
      deck,
      pl,
      dp: [],
      hl: h
    });
    setCP(0);
    setSP(!cs || !cs.has(0));
    setScr("game");
    setTC(0);
    setLRS(false);
    setLRSP(-1);
    setCpuP(cs || new Set());
    setIC(!!cs);
    setCpuD(d || "normal");
    setCpuOv(null);
  };
  const draw = useCallback(() => {
    if (!gs || gs.deck.length === 0) return null;
    const nd = [...gs.deck],
      dr = nd.pop();
    const np = gs.pl.map((p, i) => i === cp ? {
      ...p,
      hand: [...p.hand, dr]
    } : p);
    setGS({
      ...gs,
      deck: nd,
      pl: np
    });
    if (nd.length === 0 && !lrs) {
      setLRS(true);
      setLRSP(cp);
    }
    return dr;
  }, [gs, cp, lrs]);
  const bond = useCallback((ids, comp) => {
    const s = new Set(ids);
    setGS(prev => ({
      ...prev,
      pl: prev.pl.map((p, i) => i === cp ? {
        ...p,
        hand: p.hand.filter(c => !s.has(c.id)),
        bonds: [...p.bonds, comp]
      } : p)
    }));
  }, [cp]);
  const disc = useCallback(cid => {
    setGS(prev => {
      let d = null;
      const np = prev.pl.map((p, i) => {
        if (i === cp) {
          d = p.hand.find(c => c.id === cid);
          return {
            ...p,
            hand: p.hand.filter(c => c.id !== cid)
          };
        }
        return p;
      });
      return {
        ...prev,
        pl: np,
        dp: [...(prev.dp || []), ...(d ? [d] : [])]
      };
    });
  }, [cp]);
  const goNext = useCallback((g, fi) => {
    const n = g.pl.length,
      nx = (fi + 1) % n;
    setTC(t => t + 1);
    if (lrs && nx === (lrsp + 1) % n) {
      setScr("result");
      return;
    }
    setCP(nx);
    if (cpuP.has(nx)) {
      setSP(false);
      setTimeout(() => runCpu(g, nx), 600);
    } else if (isCpu) {
      setSP(false);
    } else {
      setSP(true);
    }
  }, [lrs, lrsp, cpuP, isCpu]);
  const advance = useCallback(() => {
    setGS(g => {
      if (g) goNext(g, cp);
      return g;
    });
  }, [cp, goNext]);
  const runCpu = useCallback((ps, ci) => {
    setGS(cs => {
      const g = cs || ps;
      const cn = g.pl[ci].name;
      if (g.deck.length > 0) {
        const nd = [...g.deck],
          dr = nd.pop();
        const np = g.pl.map((p, i) => i === ci ? {
          ...p,
          hand: [...p.hand, dr]
        } : p);
        let ns = {
          ...g,
          deck: nd,
          pl: np
        };
        if (nd.length === 0 && !lrs) {
          setLRS(true);
          setLRSP(ci);
        }
        const uh = np[ci].hand;
        if (uh.length > (g.hl || 7)) {
          const di = cpuDiscard(uh, cpuD),
            dc = uh.find(c => c.id === di);
          ns = {
            ...ns,
            pl: ns.pl.map((p, i) => i === ci ? {
              ...p,
              hand: uh.filter(c => c.id !== di)
            } : p),
            dp: [...(ns.dp || []), ...(dc ? [dc] : [])]
          };
        }
        const fh = ns.pl[ci].hand,
          bc = cpuBond(fh, cpuD, premium);
        if (bc) {
          const ids = cpuCards(fh, bc),
            idS = new Set(ids);
          ns = {
            ...ns,
            pl: ns.pl.map((p, i) => i === ci ? {
              ...p,
              hand: p.hand.filter(c => !idS.has(c.id)),
              bonds: [...p.bonds, bc]
            } : p)
          };
          setCpuOv({
            name: cn,
            action: "bond",
            comp: bc
          });
          const fs = ns;
          setTimeout(() => {
            setCpuOv(null);
            setCP(ci);
            setTimeout(() => {
              setGS(fs);
              goNext(fs, ci);
            }, 100);
          }, 2200);
          return ns;
        } else {
          setCpuOv({
            name: cn,
            action: "pass"
          });
          const fs = ns;
          setTimeout(() => {
            setCpuOv(null);
            setCP(ci);
            setTimeout(() => {
              setGS(fs);
              goNext(fs, ci);
            }, 100);
          }, 1400);
          return ns;
        }
      } else {
        setCpuOv({
          name: cn,
          action: "pass"
        });
        setTimeout(() => {
          setCpuOv(null);
          setScr("result");
        }, 1200);
      }
      return g;
    });
  }, [cpuD, lrs, lrsp, goNext]);
  const restart = () => {
    setScr("title");
    setGS(null);
    setCP(0);
    setIC(false);
    setCpuP(new Set());
    setCpuOv(null);
    setStoryStage(null);
    if (BGM.on()) BGM.start("title");
  };
  const finishGame = () => {
    setScr("result");
  };
  const startStory = stage => {
    const stageHl = stage.hl || 7;
    let deck = buildDeck();
    if (stage.deckSize) deck = deck.slice(0, stage.deckSize);
    const pl = [{
      name: "あなた",
      hand: [],
      bonds: []
    }, {
      name: stage.emoji + " " + stage.name,
      hand: [],
      bonds: []
    }];
    setHL(stageHl);
    setGS({
      deck,
      pl,
      dp: [],
      hl: stageHl
    });
    setCP(0);
    setSP(false);
    setScr("game");
    setTC(0);
    setLRS(false);
    setLRSP(-1);
    setCpuP(new Set([1]));
    setIC(true);
    setCpuD(stage.diff);
    setCpuOv(null);
    setStoryStage(stage);
    BGM.startForStage(stage.id);
  };
  const storyWin = () => {
    if (storyStage) {
      setCleared(prev => new Set([...prev, storyStage.id]));
    }
  };
  const tx = TX[lang];
  return /*#__PURE__*/React.createElement(LangCtx.Provider, {
    value: lang
  }, /*#__PURE__*/React.createElement("style", null, CSS), scr === "title" && /*#__PURE__*/React.createElement(Title, {
    onStart: (n, l) => init(n, null, null, l),
    onStartCpu: (m, c, d, l) => init([m, ...c], new Set(c.map((_, i) => i + 1)), d, l),
    onStartStory: startStory,
    onTest: l => init(["あなた", "コンピュータ🤖"], new Set([1]), "normal", l, 6),
    lang: lang,
    setLang: setLang,
    premium: premium,
    setPremium: setPremium,
    cleared: cleared
  }), scr === "result" && gs && /*#__PURE__*/React.createElement(Result, {
    state: gs,
    onRestart: restart,
    isCpu: isCpu,
    storyStage: storyStage,
    onStoryWin: storyWin
  }), scr === "game" && cpuOv && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BgmBtn, null), /*#__PURE__*/React.createElement(CpuOv, {
    name: cpuOv.name,
    action: cpuOv.action,
    comp: cpuOv.comp
  })), scr === "game" && !cpuOv && sp && !isCpu && gs && /*#__PURE__*/React.createElement(Pass, {
    pn: gs.pl[cp].name,
    onReady: () => setSP(false),
    info: gs.deck.length > 0 ? `${tx.dkRem} ${gs.deck.length} ${tx.mai}` : tx.lastR
  }), scr === "game" && !cpuOv && !(sp && !isCpu) && gs && /*#__PURE__*/React.createElement(Game, {
    key: `${cp}-${tc}`,
    state: gs,
    pi: cp,
    onDraw: draw,
    onBond: bond,
    onPass: advance,
    onDiscard: disc,
    hl: hl,
    onFinish: finishGame,
    premium: premium,
    onQuit: () => {
      setScr("title");
      setGS(null);
    }
  }));
};
