const {useState,useEffect,useCallback,useRef,createContext,useContext} = React;

// ═══════════════════════════════════════════════════════════
// げんしパズルゲーム 🧪 v4 PREMIUM EDITION
// ═══════════════════════════════════════════════════════════

/* ── 言語コンテキスト ─── */
const LangCtx = createContext("hiragana");
const useLang = () => useContext(LangCtx);
const useT = () => {
  const lang = useLang();
  return k => TX[lang]?.[k] ?? TX.hiragana[k] ?? k;
};

/* ── テキスト辞書 ─── */
const TX = {
  hiragana: {
    title1:"げんしパズル", title2:"ゲーム",
    solo:"ひとりであそぶ", soloSub:"コンピュータとたいせん",
    story:"ストーリーモード", storySub:"てきをたおしてすすめ！",
    storyStage:"ステージ", storyFight:"たたかう！", storyLocked:"🔒",
    storyClear:"クリアずみ", storyBack:"もどる",
    multi:"みんなであそぶ", multiSub:"スマホをまわしてたいせん",
    rules:"あそびかた", settings:"ルールせってい",
    hlLabel:"てふだのじょうげん", basic:"きほん",
    langLabel:"もじのせってい", langH:"ひらがな", langK:"かんじ",
    soundLabel:"おとのせってい", bgmLabel:"BGM", seLabel:"こうかおん",
    onLabel:"ON", offLabel:"OFF",
    r1:"カードを1まいひく",
    r2:"てふだのげんしをくみあわせて ものをつくる →「できた！」🎉",
    r3:"つくれない →「パス」でつぎへ",
    r4:"まいをこえたら1まいすてる",
    r5:"やまふだがなくなったらおわり！",
    r6:"とくてんがたかいひとのかち🏆",
    r7:"💎 Cを7まいあつめたら35てん！",
    name:"じぶんのなまえ", opp:"あいてのにんずう", str:"つよさ",
    easy:"😊やさしい", normal:"😐ふつう", hard:"😈つよい",
    start:"スタート！", gstart:"ゲームスタート！",
    back:"← もどる", howMany:"なんにん？",
    pn:"ばんめのひとのなまえ", unit:"たい", unitP:"にん",
    passD:"スマホをわたしてね！", next:"つぎは", trn:"のばん！",
    ready:"👋 じゅんびOK！",
    dkRem:"やまふだのこり", mai:"まい", lastR:"⚡ さいごのラウンド！",
    sc:"とくてん", dk:"やまふだ", tl:"のばん",
    drawn:"ひいたカード →",
    bondOk:"✅ できた！つづけてつくることもできるよ",
    discW:"まいをこえています！つくるか、1まいすてよう",
    hand:"てふだ", tapS:"– タップでえらぶ", tapD:"– すてるカードをタップ",
    canB:"つくれるよ！", sp:"スペシャル！",
    bBtn:"🔗 できた！", drB:"🃏 カードをひく",
    tEnd:"➡️ ターンおわり", exp:"🔬 パス",
    fin:"🏁 ゲームしゅうりょう！",
    crO:"▼ カードのこりすうをみる", crC:"▲ カードのこりすうをとじる",
    crN:"※「のこり」＝やまふだ＋ほかのひとのてふだ",
    cpO:"▼ とくてんひょうをみる", cpC:"▲ とくてんひょうをとじる",
    now:"🟢 いまつくれるもの", all:"ぜんぶのかごうぶつ",
    scL:"🏆 スコア", pt:"てん", gOver:"ゲームしゅうりょう！",
    res:"けっかはっぴょう🎉", win:"のかち！", tie:"ひきわけ！",
    lose:"ざんねん…", loseMsg:"まけてしまった…",
    retry:"つぎはがんばろう！", again:"🔄 もういちどあそぶ",
    pdif:"てんさ", more:"てんおおい！", noB:"つくれなかった",
    cpuT:"🔬 パス…", cpuB:"できた！",
    bgmOn:"🔊 BGM", bgmOff:"🔇 BGM",
    quit:"やめる", quitConfirm:"ほんとうにやめますか？\nトップにもどります",
    locked:"🔒",
    premTitle:"🧪 ぜんぶあそべるばん",
    premMsg:"のこり10しゅの かごうぶつが つくれるようになるよ！",
    premBtn:"🔓 かいほうする（¥250）", premDone:"✅ かいほうずみ！",
    H:"すいそ",O:"さんそ",C:"たんそ",N:"ちっそ",S:"いおう",
    Cl:"えんそ",Na:"ナトリウム",Cu:"どう",Ag:"ぎん",Fe:"てつ",
    cH2:"すいそぶんし",cO2:"さんそぶんし",cH2O:"みず",cHCl:"えんかすいそ",
    cCO2:"にさんかたんそ",cN2:"ちっそぶんし",cCl2:"えんそぶんし",
    cCuO:"さんかどう",cNaCl:"えんかナトリウム",cAgCl:"えんかぎん",
    cFeO:"さんかてつ",cNaOH:"すいさんかナトリウム",cCuS:"りゅうかどう",
    cFeS:"りゅうかてつ",cH2S:"りゅうかすいそ",cO3:"オゾン",
    cSO2:"にさんかいおう",cNa2O:"さんかナトリウム",cFe2O:"さんかてつ(II)",
    cCH4:"メタン",cAg2O:"さんかぎん",cNH3:"アンモニア",cAg2S:"りゅうかぎん",
    cCuCl2:"えんかどう",cFeCl2:"えんかてつ",cNa2S:"りゅうかナトリウム",
    cSO3:"さんさんかいおう",cNaHCO3:"じゅうそう",cCH3Cl:"クロロメタン",
    cFe2O3:"さんかてつ(III)",cC2H2:"アセチレン",cNa2CO3:"たんさんナトリウム",
    cCH4O:"メタノール",cH2SO4:"りゅうさん",cC7:"ダイヤモンド"
  },
  kanji: {
    title1:"原子パズル", title2:"ゲーム",
    solo:"一人で遊ぶ", soloSub:"コンピュータと対戦",
    story:"ストーリーモード", storySub:"敵を倒して進め！",
    storyStage:"ステージ", storyFight:"たたかう！", storyLocked:"🔒",
    storyClear:"クリア済み", storyBack:"戻る",
    multi:"みんなで遊ぶ", multiSub:"スマホを回して対戦",
    rules:"遊び方", settings:"ルール設定",
    hlLabel:"手札の上限", basic:"基本",
    langLabel:"文字の設定", langH:"ひらがな", langK:"漢字",
    soundLabel:"音の設定", bgmLabel:"BGM", seLabel:"効果音",
    onLabel:"ON", offLabel:"OFF",
    r1:"カードを1枚引く",
    r2:"手札の原子を組み合わせて物質を作る →「できた！」🎉",
    r3:"作れない →「パス」で次へ",
    r4:"枚を超えたら1枚捨てる",
    r5:"山札がなくなったら終わり！",
    r6:"得点が高い人の勝ち🏆",
    r7:"💎 Cを7枚集めたら35点！",
    name:"自分の名前", opp:"相手の人数", str:"強さ",
    easy:"😊やさしい", normal:"😐ふつう", hard:"😈強い",
    start:"スタート！", gstart:"ゲームスタート！",
    back:"← 戻る", howMany:"何人？",
    pn:"番目の人の名前", unit:"体", unitP:"人",
    passD:"スマホを渡してね！", next:"次は", trn:"の番！",
    ready:"👋 準備OK！",
    dkRem:"山札残り", mai:"枚", lastR:"⚡ 最後のラウンド！",
    sc:"得点", dk:"山札", tl:"の番",
    drawn:"引いたカード →",
    bondOk:"✅ できた！続けて作ることもできるよ",
    discW:"枚を超えています！作るか、1枚捨てよう",
    hand:"手札", tapS:"– タップで選ぶ", tapD:"– 捨てるカードをタップ",
    canB:"作れるよ！", sp:"スペシャル！",
    bBtn:"🔗 できた！", drB:"🃏 カードを引く",
    tEnd:"➡️ ターン終わり", exp:"🔬 パス",
    fin:"🏁 ゲーム終了！",
    crO:"▼ カード残り数を見る", crC:"▲ カード残り数を閉じる",
    crN:"※「残り」＝山札＋他の人の手札",
    cpO:"▼ 得点表を見る", cpC:"▲ 得点表を閉じる",
    now:"🟢 今作れるもの", all:"全ての化合物",
    scL:"🏆 スコア", pt:"点", gOver:"ゲーム終了！",
    res:"結果発表🎉", win:"の勝ち！", tie:"引き分け！",
    lose:"残念…", loseMsg:"負けてしまった…",
    retry:"次はがんばろう！", again:"🔄 もう一度遊ぶ",
    pdif:"点差", more:"点多い！", noB:"作れなかった",
    cpuT:"🔬 パス…", cpuB:"できた！",
    bgmOn:"🔊 BGM", bgmOff:"🔇 BGM",
    quit:"やめる", quitConfirm:"本当にやめますか？\nトップに戻ります",
    locked:"🔒",
    premTitle:"🧪 全部遊べる版",
    premMsg:"残り10種の化合物が作れるようになるよ！",
    premBtn:"🔓 解放する（¥250）", premDone:"✅ 解放済み！",
    H:"水素",O:"酸素",C:"炭素",N:"窒素",S:"硫黄",
    Cl:"塩素",Na:"ナトリウム",Cu:"銅",Ag:"銀",Fe:"鉄",
    cH2:"水素分子",cO2:"酸素分子",cH2O:"水",cHCl:"塩化水素",
    cCO2:"二酸化炭素",cN2:"窒素分子",cCl2:"塩素分子",
    cCuO:"酸化銅",cNaCl:"塩化ナトリウム",cAgCl:"塩化銀",
    cFeO:"酸化鉄",cNaOH:"水酸化ナトリウム",cCuS:"硫化銅",
    cFeS:"硫化鉄",cH2S:"硫化水素",cO3:"オゾン",
    cSO2:"二酸化硫黄",cNa2O:"酸化ナトリウム",cFe2O:"酸化鉄(II)",
    cCH4:"メタン",cAg2O:"酸化銀",cNH3:"アンモニア",cAg2S:"硫化銀",
    cCuCl2:"塩化銅(II)",cFeCl2:"塩化鉄(II)",cNa2S:"硫化ナトリウム",
    cSO3:"三酸化硫黄",cNaHCO3:"重曹",cCH3Cl:"クロロメタン",
    cFe2O3:"酸化鉄(III)",cC2H2:"アセチレン",cNa2CO3:"炭酸ナトリウム",
    cCH4O:"メタノール",cH2SO4:"硫酸",cC7:"ダイヤモンド"
  }
};

/* ── サウンドエンジン ─── */
let _seEnabled = true;
const SE = (() => {
  let ctx = null;
  const gc = () => { if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); if(ctx.state==="suspended") ctx.resume(); return ctx; };
  const p = fn => { if(!_seEnabled) return; try{ fn(gc()); }catch(e){} };
  const tone = (c,type,f1,f2,dur,vol=0.12) => {
    const o=c.createOscillator(),g=c.createGain();
    o.type=type; o.frequency.setValueAtTime(f1,c.currentTime);
    if(f2) o.frequency.exponentialRampToValueAtTime(f2,c.currentTime+dur*0.6);
    g.gain.setValueAtTime(vol,c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+dur);
    o.connect(g).connect(c.destination); o.start(c.currentTime); o.stop(c.currentTime+dur);
  };
  return {
    setEnabled: v => { _seEnabled = v; }, isEnabled: () => _seEnabled,
    cardDraw: () => p(c => tone(c,"sine",800,1200,0.15,0.15)),
    cardSel: () => p(c => tone(c,"triangle",600,900,0.1,0.1)),
    cardDesel: () => p(c => tone(c,"triangle",700,400,0.1,0.08)),
    bond: pts => p(c => { const t=c.currentTime; const ns = pts>=15?[523,659,784,1047,1319]:pts>=9?[523,659,784,1047]:pts>=5?[523,659,784]:[523,659]; ns.forEach((f,i)=>{ const o=c.createOscillator(),g=c.createGain(); o.type=pts>=15?"square":"sine"; o.frequency.setValueAtTime(f,t+i*0.12); g.gain.setValueAtTime(0.12,t+i*0.12); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.12+0.4); o.connect(g).connect(c.destination); o.start(t+i*0.12); o.stop(t+i*0.12+0.4); }); }),
    pass: () => p(c => tone(c,"sine",400,300,0.25,0.08)),
    discard: () => p(c => tone(c,"sawtooth",300,100,0.2,0.06)),
    gStart: () => p(c => { const t=c.currentTime; [523,659,784,1047].forEach((f,i)=>{ const o=c.createOscillator(),g=c.createGain(); o.type="sine"; o.frequency.setValueAtTime(f,t+i*0.1); g.gain.setValueAtTime(0.12,t+i*0.1); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.1+0.3); o.connect(g).connect(c.destination); o.start(t+i*0.1); o.stop(t+i*0.1+0.3); }); }),
    tap: () => p(c => tone(c,"sine",1000,null,0.05,0.05)),
    victory: () => p(c => { const t=c.currentTime; [523,523,523,698,784,698,784,1047].forEach((f,i)=>{ const o=c.createOscillator(),g=c.createGain(); o.type=i>=6?"square":"sine"; o.frequency.setValueAtTime(f,t+i*0.18); g.gain.setValueAtTime(0.15,t+i*0.18); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.18+0.5); o.connect(g).connect(c.destination); o.start(t+i*0.18); o.stop(t+i*0.18+0.5); }); }),
    lose: () => p(c => { const t=c.currentTime; [392,349,330,294,262].forEach((f,i)=>{ const o=c.createOscillator(),g=c.createGain(); o.type="sine"; o.frequency.setValueAtTime(f,t+i*0.3); g.gain.setValueAtTime(0.1,t+i*0.3); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.3+0.6); o.connect(g).connect(c.destination); o.start(t+i*0.3); o.stop(t+i*0.3+0.6); }); }),
    drum: () => p(c => { const t=c.currentTime; for(let i=0;i<20;i++){ const o=c.createOscillator(),g=c.createGain(); o.type="sawtooth"; o.frequency.setValueAtTime(80+i*3,t+i*0.06); g.gain.setValueAtTime(0.03+i*0.005,t+i*0.06); g.gain.exponentialRampToValueAtTime(0.001,t+i*0.06+0.08); o.connect(g).connect(c.destination); o.start(t+i*0.06); o.stop(t+i*0.06+0.08); } })
  };
})();

/* ── BGMエンジン ─── */
const BGM = (() => {
  let ctx=null,playing=false,nodes=[],timer=null,curTrack="title";
  const stopAll = () => { if(timer){clearTimeout(timer);timer=null;} nodes.forEach(n=>{try{n.stop();}catch(e){}}); nodes=[]; };
  const TRACKS = {
    title:{mel:[[440,.4],[494,.4],[587,.4],[659,.4],[440,.4],[587,.2],[659,.2],[587,.4],[494,.8],[440,.4],[587,.4],[659,.4],[784,.8],[659,.4],[587,.4],[494,.8],[440,.4],[494,.2],[587,.2],[494,.4],[440,.8],[392,.4],[440,.8]],bas:[[220,.8],[220,.8],[294,.8],[294,.8],[220,.8],[220,.8],[196,.8],[196,.8],[220,.8],[220,.8],[294,.8],[294,.8],[196,.8],[196,.8],[220,1.6]],mt:"triangle",bt:"sine",mv:0.05,bv:0.03},
    battle_easy:{mel:[[523,.2],[0,.1],[659,.2],[0,.1],[784,.2],[659,.2],[0,.1],[523,.2],[0,.1],[659,.2],[784,.4],[0,.2],[880,.2],[784,.2],[659,.2],[0,.1],[523,.2],[0,.1],[587,.2],[659,.2],[587,.4],[523,.4],[0,.2],[440,.2],[523,.2],[659,.2],[0,.1],[587,.2],[523,.2],[440,.4],[523,.2],[0,.1],[440,.4],[0,.4]],bas:[[262,.4],[262,.4],[330,.4],[330,.4],[349,.4],[349,.4],[262,.4],[262,.4],[220,.4],[220,.4],[262,.4],[262,.4],[196,.4],[196,.4],[220,.4],[262,.4]],mt:"square",bt:"triangle",mv:0.04,bv:0.035},
    battle_normal:{mel:[[587,.15],[0,.05],[587,.15],[0,.05],[698,.15],[0,.05],[659,.3],[587,.15],[0,.05],[523,.15],[0,.05],[466,.3],[0,.1],[523,.15],[587,.15],[659,.15],[0,.05],[698,.15],[0,.05],[659,.15],[587,.15],[523,.3],[466,.15],[0,.05],[440,.3],[0,.2],[698,.15],[0,.05],[659,.15],[0,.05],[587,.3],[523,.15],[0,.05],[466,.15],[523,.15],[587,.3],[0,.1],[523,.3],[0,.2]],bas:[[294,.3],[294,.3],[349,.3],[349,.3],[262,.3],[262,.3],[233,.3],[233,.3],[294,.3],[294,.3],[349,.3],[349,.3],[233,.3],[233,.3],[294,.6]],mt:"sawtooth",bt:"triangle",mv:0.04,bv:0.035},
    battle_hard:{mel:[[330,.1],[0,.05],[330,.1],[0,.05],[330,.1],[0,.1],[494,.15],[0,.05],[440,.2],[0,.1],[392,.1],[0,.05],[440,.1],[0,.05],[494,.2],[0,.1],[523,.15],[0,.05],[494,.2],[0,.1],[659,.15],[0,.05],[587,.15],[0,.05],[494,.2],[440,.1],[0,.05],[392,.2],[0,.1],[330,.1],[0,.05],[392,.1],[0,.05],[440,.15],[0,.05],[494,.2],[0,.1],[587,.2],[0,.1],[523,.15],[0,.05],[494,.2],[440,.15],[0,.05],[392,.2],[0,.1],[330,.2],[0,.1],[294,.3],[0,.2]],bas:[[165,.3],[165,.3],[196,.3],[196,.3],[220,.3],[220,.3],[247,.3],[247,.3],[165,.3],[165,.3],[131,.3],[131,.3],[147,.3],[147,.3],[165,.6],[165,.3],[165,.3],[196,.3],[196,.3],[131,.3],[131,.3],[165,.6]],mt:"sawtooth",bt:"square",mv:0.045,bv:0.03},
    battle_ex:{mel:[[311,.1],[0,.05],[311,.1],[0,.05],[370,.1],[0,.05],[415,.15],[0,.05],[370,.15],[0,.1],[466,.15],[0,.05],[415,.1],[0,.05],[370,.1],[0,.05],[311,.2],[0,.1],[415,.1],[0,.05],[466,.1],[0,.05],[523,.15],[0,.05],[466,.15],[0,.1],[370,.1],[0,.05],[311,.1],[0,.05],[294,.2],[0,.1],[311,.2],[0,.1],[523,.1],[0,.05],[466,.1],[0,.05],[415,.1],[0,.05],[370,.15],[0,.05],[311,.1],[0,.05],[294,.1],[0,.05],[277,.1],[0,.05],[262,.2],[0,.1],[311,.15],[0,.05],[370,.15],[0,.05],[311,.3],[0,.3]],bas:[[156,.3],[156,.3],[185,.3],[185,.3],[208,.3],[208,.3],[156,.3],[156,.3],[147,.3],[147,.3],[156,.3],[156,.3],[139,.3],[139,.3],[156,.6],[131,.3],[131,.3],[147,.3],[147,.3],[156,.3],[156,.3],[131,.6]],mt:"sawtooth",bt:"square",mv:0.045,bv:0.035}
  };
  const trackForStage = id => { if(!id) return "title"; if(id>=11) return "battle_ex"; if(id>=8) return "battle_hard"; if(id>=4) return "battle_normal"; return "battle_easy"; };
  const loop = () => {
    if(!playing) return;
    try {
      if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)();
      if(ctx.state==="suspended") ctx.resume();
      stopAll();
      const tr = TRACKS[curTrack]||TRACKS.title;
      const t = ctx.currentTime;
      let off=0;
      tr.mel.forEach(([f,d])=>{ if(f===0){off+=d;return;} const o=ctx.createOscillator(),g=ctx.createGain(); o.type=tr.mt; o.frequency.setValueAtTime(f,t+off); g.gain.setValueAtTime(tr.mv,t+off); g.gain.exponentialRampToValueAtTime(0.001,t+off+d*0.9); o.connect(g).connect(ctx.destination); o.start(t+off); o.stop(t+off+d); nodes.push(o); off+=d; });
      const ld=off; let bo=0;
      tr.bas.forEach(([f,d])=>{ if(bo>=ld) return; if(f===0){bo+=d;return;} const o=ctx.createOscillator(),g=ctx.createGain(); o.type=tr.bt; o.frequency.setValueAtTime(f,t+bo); g.gain.setValueAtTime(tr.bv,t+bo); g.gain.exponentialRampToValueAtTime(0.001,t+bo+d*0.85); o.connect(g).connect(ctx.destination); o.start(t+bo); o.stop(t+bo+d); nodes.push(o); bo+=d; });
      timer = setTimeout(loop, ld*1000-100);
    } catch(e){}
  };
  if(typeof document!=='undefined'){
    document.addEventListener('visibilitychange',()=>{ if(document.hidden){stopAll();}else if(playing){loop();} });
    window.addEventListener('pagehide',()=>{ playing=false; stopAll(); if(ctx){try{ctx.close();}catch(e){}} ctx=null; });
  }
  return {
    start: trackId => { const t=trackId||"title"; if(playing&&curTrack===t) return; stopAll(); curTrack=t; playing=true; loop(); },
    startForStage: stageId => { const t=trackForStage(stageId); if(playing&&curTrack===t) return; stopAll(); curTrack=t; playing=true; loop(); },
    stop: () => { playing=false; stopAll(); },
    on: () => playing, track: () => curTrack
  };
})();

/* ── データ ─── */
const ATOMS = [
  {s:"H",k:"H",c:"#c8f7c5",tc:"#1b6e1b",e:"💧",n:18,g:"#4cff4c"},
  {s:"O",k:"O",c:"#ffe0b2",tc:"#bf360c",e:"🌬️",n:14,g:"#ff9100"},
  {s:"C",k:"C",c:"#bbdefb",tc:"#0d47a1",e:"✏️",n:9,g:"#448aff"},
  {s:"N",k:"N",c:"#e1bee7",tc:"#6a1b9a",e:"🌸",n:4,g:"#d500f9"},
  {s:"S",k:"S",c:"#fff9c4",tc:"#f57f17",e:"⚡",n:4,g:"#ffd600"},
  {s:"Cl",k:"Cl",c:"#b2ebf2",tc:"#006064",e:"🫧",n:6,g:"#00e5ff"},
  {s:"Na",k:"Na",c:"#f8bbd0",tc:"#b71c1c",e:"🧂",n:6,g:"#ff1744"},
  {s:"Cu",k:"Cu",c:"#ffccbc",tc:"#bf360c",e:"🪙",n:4,g:"#ff6e40"},
  {s:"Ag",k:"Ag",c:"#cfd8dc",tc:"#37474f",e:"🥈",n:4,g:"#90a4ae"},
  {s:"Fe",k:"Fe",c:"#d7ccc8",tc:"#3e2723",e:"🔩",n:4,g:"#8d6e63"}
];
const RARITY = {H:1,O:1,C:2,Cl:2,Na:2,N:3,S:3,Cu:3,Ag:3,Fe:3};
const MULT = {2:1,3:1.5,4:2,5:2.5,6:3,7:3.5};
const calcPts = a => { const rare=Object.entries(a).reduce((s,[el,n])=>s+(RARITY[el]||1)*n,0); const cards=Object.values(a).reduce((s,n)=>s+n,0); return Math.round(rare*(MULT[cards]||1)); };
const COMPS = [
  {k:"cH2",f:"H₂",a:{H:2},e:"💧",free:true},{k:"cO2",f:"O₂",a:{O:2},e:"🌬️",free:true},
  {k:"cHCl",f:"HCl",a:{H:1,Cl:1},e:"🫧",free:true},{k:"cCl2",f:"Cl₂",a:{Cl:2},e:"🫧",free:true},
  {k:"cNaCl",f:"NaCl",a:{Na:1,Cl:1},e:"🧂",free:true},{k:"cCuO",f:"CuO",a:{Cu:1,O:1},e:"🪙",free:true},
  {k:"cFeO",f:"FeO",a:{Fe:1,O:1},e:"🔩",free:true},{k:"cAgCl",f:"AgCl",a:{Ag:1,Cl:1},e:"🥈",free:true},
  {k:"cN2",f:"N₂",a:{N:2},e:"🌸",free:true},{k:"cCuS",f:"CuS",a:{Cu:1,S:1},e:"🪙",free:true},
  {k:"cFeS",f:"FeS",a:{Fe:1,S:1},e:"🔩",free:true},
  {k:"cH2O",f:"H₂O",a:{H:2,O:1},e:"💧",free:true},{k:"cO3",f:"O₃",a:{O:3},e:"🌀",free:true},
  {k:"cCO2",f:"CO₂",a:{C:1,O:2},e:"💨",free:true},
  {k:"cNaOH",f:"NaOH",a:{Na:1,O:1,H:1},e:"🧪",free:true},
  {k:"cH2S",f:"H₂S",a:{H:2,S:1},e:"🥚",free:true},
  {k:"cSO2",f:"SO₂",a:{S:1,O:2},e:"🌋",free:true},
  {k:"cNa2O",f:"Na₂O",a:{Na:2,O:1},e:"🧂"},{k:"cFe2O",f:"Fe₂O",a:{Fe:2,O:1},e:"🔩"},
  {k:"cAg2O",f:"Ag₂O",a:{Ag:2,O:1},e:"🥈"},{k:"cCuCl2",f:"CuCl₂",a:{Cu:1,Cl:2},e:"🪙"},
  {k:"cFeCl2",f:"FeCl₂",a:{Fe:1,Cl:2},e:"🔩"},{k:"cNa2S",f:"Na₂S",a:{Na:2,S:1},e:"🧂"},
  {k:"cAg2S",f:"Ag₂S",a:{Ag:2,S:1},e:"🥈"},
  {k:"cNH3",f:"NH₃",a:{N:1,H:3},e:"💜"},{k:"cSO3",f:"SO₃",a:{S:1,O:3},e:"🌋"},
  {k:"cC2H2",f:"C₂H₂",a:{C:2,H:2},e:"🔥"},
  {k:"cCH4",f:"CH₄",a:{C:1,H:4},e:"🔥"},
  {k:"cCH3Cl",f:"CH₃Cl",a:{C:1,H:3,Cl:1},e:"🧪"},
  {k:"cFe2O3",f:"Fe₂O₃",a:{Fe:2,O:3},e:"🔩"},
  {k:"cNaHCO3",f:"NaHCO₃",a:{Na:1,H:1,C:1,O:3},e:"🧁"},
  {k:"cCH4O",f:"CH₃OH",a:{C:1,H:4,O:1},e:"🍶"},
  {k:"cNa2CO3",f:"Na₂CO₃",a:{Na:2,C:1,O:3},e:"🧪"},
  {k:"cH2SO4",f:"H₂SO₄",a:{H:2,S:1,O:4},e:"⚗️"},
  {k:"cC7",f:"C◆◆◆◆◆◆",a:{C:7},e:"💎",sp:true}
].map(c=>({...c,p:c.sp?50:calcPts(c.a)}));

/* ── ユーティリティ ─── */
const shuffle = a => { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]];} return b; };
const buildDeck = () => { const d=[]; let id=0; for(const a of ATOMS) for(let i=0;i<a.n;i++) d.push({id:id++,s:a.s,k:a.k,c:a.c,tc:a.tc,e:a.e,g:a.g}); return shuffle(d); };
const cntA = cards => { const c={}; for(const x of cards) c[x.s]=(c[x.s]||0)+1; return c; };
const findP = (hc,prem) => COMPS.filter(c=>(prem||c.free)&&Object.entries(c.a).every(([s,n])=>(hc[s]||0)>=n));
const getAI = s => ATOMS.find(a=>a.s===s)||{c:"#eee",tc:"#333",e:"⚪",g:"#999",k:"?"};
const CPUN = ["コンピュータ🤖","ロボくん🤖","AIちゃん🤖"];

/* ── ストーリーモード ─── */
const STORY = [
  {id:1,name:"バブリン",emoji:"🫧",diff:"easy",color:"#81D4FA",hl:10,intro:"🧑‍🔬博士「おや、実験室からモンスターが逃げ出したぞ！まずはシャボン玉のバブリンを倒すんじゃ！」",win:"博士「やるじゃないか！バブリンを倒したぞ！」",lose:"博士「うーむ、バブリンに負けてしまったか…もう一回じゃ！」"},
  {id:2,name:"アクアン",emoji:"💧",diff:"easy",color:"#4FC3F7",hl:10,intro:"🧑‍🔬博士「水たまりの中からアクアンが現れた！水の力で攻めてくるぞ！」",win:"博士「すばらしい！アクアンを退治したぞ！」",lose:"博士「アクアンの水攻めにやられたか…次こそ！」"},
  {id:3,name:"ソルティ",emoji:"🧂",diff:"easy",color:"#FFE082",hl:10,intro:"🧑‍🔬博士「塩の結晶モンスター・ソルティじゃ！体がしょっぱいぞ！」",win:"博士「ソルティを溶かしてやったぞ！いい調子じゃ！」",lose:"博士「ソルティのしょっぱい攻撃にやられた…」"},
  {id:4,name:"エアロン",emoji:"💨",diff:"normal",color:"#A5D6A7",hl:9,intro:"🧑‍🔬博士「空気のモンスター・エアロンじゃ！目に見えないから手強いぞ！」",win:"博士「エアロンを吹き飛ばした！キミの実力はホンモノじゃ！」",lose:"博士「エアロンの風に飛ばされたか…化学式を覚えるんじゃ！」"},
  {id:5,name:"コッパー",emoji:"🪙",diff:"normal",color:"#FF8A65",hl:9,intro:"🧑‍🔬博士「銅のヨロイをまとったコッパーじゃ！防御力が高いぞ！」",win:"博士「コッパーのヨロイを貫いたぞ！キミは強い！」",lose:"博士「コッパーの防御は固いな…作戦を練り直すんじゃ！」"},
  {id:6,name:"シルバーグ",emoji:"🥈",diff:"normal",color:"#B0BEC5",hl:9,intro:"🧑‍🔬博士「銀の騎士シルバーグじゃ！優雅だが容赦ないぞ！」",win:"博士「シルバーグに勝った！銀の騎士も倒せるんじゃ！」",lose:"博士「シルバーグの剣さばきにやられたか…」"},
  {id:7,name:"アイアンX",emoji:"🔩",diff:"normal",color:"#8D6E63",hl:9,intro:"🧑‍🔬博士「鉄の巨人アイアンXじゃ！パワーがすごいぞ！」",win:"博士「アイアンXを倒した！キミの化学パワーはすごい！」",lose:"博士「アイアンXのパワーに圧倒されたか…」"},
  {id:8,name:"サルファー",emoji:"⚡",diff:"hard",color:"#FDD835",hl:8,intro:"🧑‍🔬博士「硫黄の毒モンスター・サルファーじゃ！温泉のにおいがするぞ！ここから先はキツいぞ！」",win:"博士「サルファーを浄化した！あと少しじゃ！」",lose:"博士「サルファーの毒にやられた…でもあきらめるな！」"},
  {id:9,name:"ドクターカオス",emoji:"⚗️",diff:"hard",color:"#CE93D8",hl:8,intro:"🧑‍🔬博士「暴走した科学者ドクターカオスじゃ！ワシの元同僚なんじゃが…止めてくれ！」",win:"博士「カオスを止めてくれた！…残るはあと1体じゃ！」",lose:"博士「カオスの実験は危険すぎる…もっと強くなるんじゃ！」"},
  {id:10,name:"ダイヤキング",emoji:"💎",diff:"hard",color:"#E040FB",hl:8,intro:"🧑‍🔬博士「最強の結晶モンスター・ダイヤキング！すべてのモンスターの頂点に立つ存在じゃ！」",win:"🏆博士「ダイヤキングを倒した！！キミは化学マスターじゃ！！！…ん？まだ何かいるようじゃな…」",lose:"博士「ダイヤキングは強い…でもキミならきっと倒せる！」"},
  {id:11,name:"ネオバブリン",emoji:"🫧",diff:"hard",color:"#00BCD4",ex:true,hl:7,intro:"🧑‍🔬博士「バブリンが…進化しておる！手札7枚の制限付きじゃ！」",win:"博士「進化したバブリンも倒した！さすがじゃ！」",lose:"博士「手札が少ないと厳しいな…工夫するんじゃ！」"},
  {id:12,name:"ツインメタル",emoji:"⚔️",diff:"hard",color:"#FF6E40",ex:true,hl:7,intro:"🧑‍🔬博士「銅と鉄が合体したツインメタルじゃ！2つの力を持つぞ！」",win:"博士「合体モンスターも敵じゃないか！」",lose:"博士「ツインメタルの二重攻撃は強いな…」"},
  {id:13,name:"ポイズンクイーン",emoji:"☠️",diff:"hard",color:"#AB47BC",ex:true,hl:7,deckSize:40,intro:"🧑‍🔬博士「毒の女王ポイズンクイーン！山札が少ないから短期決戦じゃ！」",win:"博士「毒の女王を浄化した！あと2体！」",lose:"博士「山札が少ないと一手のミスが致命的じゃ…」"},
  {id:14,name:"プロフェッサーX",emoji:"🧬",diff:"hard",color:"#5C6BC0",ex:true,hl:7,intro:"🧑‍🔬博士「ワシの師匠…プロフェッサーXじゃ！化学の神と呼ばれた方じゃ…」",win:"博士「師匠を超えた！！キミは天才じゃ！」",lose:"博士「さすが師匠…簡単にはいかんか…」"},
  {id:15,name:"???",emoji:"🌌",diff:"hard",color:"#FF1744",ex:true,hl:7,deckSize:40,intro:"🧑‍🔬博士「最後の敵は…な、なんじゃこれは！？正体不明のモンスターじゃ！手札7枚＋山札少なめの最凶ハンデ！」",win:"🌟博士「…あの姿は…若い頃のワシじゃったか！？キミは完全なる化学マスターじゃ！！！おめでとう！！！」",lose:"博士「この敵は…次元が違うようじゃ…でもキミなら…！」"}
];

/* ── キャラクターSVGイラスト ─── */
const DrSVG = ({size=120}) => <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
  {/* 白衣 */}
  <rect x="30" y="55" width="60" height="50" rx="8" fill="#e8e8f0" stroke="#bbb" strokeWidth="1.5"/>
  <rect x="38" y="55" width="44" height="6" rx="3" fill="#d0d0e0"/>
  {/* ネクタイ */}
  <polygon points="60,61 56,80 60,85 64,80" fill="#4a6cf7"/>
  {/* 顔 */}
  <circle cx="60" cy="38" r="22" fill="#ffdcb5"/>
  <circle cx="60" cy="38" r="22" fill="none" stroke="#e8b88a" strokeWidth="1"/>
  {/* メガネ */}
  <circle cx="51" cy="36" r="7" fill="none" stroke="#555" strokeWidth="2"/>
  <circle cx="69" cy="36" r="7" fill="none" stroke="#555" strokeWidth="2"/>
  <line x1="58" y1="36" x2="62" y2="36" stroke="#555" strokeWidth="2"/>
  <line x1="44" y1="36" x2="36" y2="33" stroke="#555" strokeWidth="1.5"/>
  <line x1="76" y1="36" x2="84" y2="33" stroke="#555" strokeWidth="1.5"/>
  {/* 目 */}
  <circle cx="51" cy="36" r="2.5" fill="#333"/>
  <circle cx="69" cy="36" r="2.5" fill="#333"/>
  <circle cx="52" cy="35" r="1" fill="#fff"/>
  <circle cx="70" cy="35" r="1" fill="#fff"/>
  {/* 眉 */}
  <path d="M46 30 Q51 27 56 30" stroke="#555" strokeWidth="1.5" fill="none"/>
  <path d="M64 30 Q69 27 74 30" stroke="#555" strokeWidth="1.5" fill="none"/>
  {/* 口 - ニッコリ */}
  <path d="M54 46 Q60 52 66 46" stroke="#c77" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  {/* ひげ（白い口ひげ） */}
  <path d="M50 43 Q55 46 60 43 Q65 46 70 43" stroke="#ccc" strokeWidth="2" fill="none" strokeLinecap="round"/>
  {/* 髪（白髪・ボサボサ） */}
  <path d="M38 30 Q35 18 45 15 Q52 10 60 12 Q68 10 75 15 Q85 18 82 30" fill="#ddd" stroke="#bbb" strokeWidth="1"/>
  <path d="M36 28 Q33 22 38 20" stroke="#ccc" strokeWidth="2" fill="none"/>
  <path d="M84 28 Q87 22 82 20" stroke="#ccc" strokeWidth="2" fill="none"/>
  {/* ポケットのペン */}
  <line x1="42" y1="62" x2="42" y2="72" stroke="#e53935" strokeWidth="2" strokeLinecap="round"/>
  <line x1="46" y1="62" x2="46" y2="70" stroke="#1e88e5" strokeWidth="2" strokeLinecap="round"/>
  {/* 試験管（手に持っている） */}
  <rect x="82" y="50" width="8" height="24" rx="4" fill="none" stroke="#4fc3f7" strokeWidth="1.5"/>
  <rect x="83" y="62" width="6" height="10" rx="3" fill="#4fc3f7" opacity=".5"/>
  <circle cx="86" cy="58" r="2" fill="#4fc3f7" opacity=".6"/>
</svg>;

const MonsterSVG = ({id,size=100,color="#81D4FA"}) => {
  const c = color;
  const d = color + "88";
  // 各モンスターの個別SVG
  const monsters = {
    // バブリン - 泡のモンスター
    1: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="52" r="30" fill={c} opacity=".3"/>
      <circle cx="50" cy="52" r="25" fill={c} opacity=".5"/>
      <circle cx="50" cy="50" r="20" fill={c} opacity=".7" stroke="#fff" strokeWidth="1" strokeOpacity=".4"/>
      {/* 目 */}
      <ellipse cx="42" cy="46" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="58" cy="46" rx="5" ry="6" fill="#fff"/>
      <circle cx="43" cy="46" r="3" fill="#333"/>
      <circle cx="59" cy="46" r="3" fill="#333"/>
      <circle cx="44" cy="45" r="1.2" fill="#fff"/>
      <circle cx="60" cy="45" r="1.2" fill="#fff"/>
      {/* 口 */}
      <ellipse cx="50" cy="58" rx="6" ry="4" fill="#fff" opacity=".8"/>
      {/* 泡 */}
      <circle cx="30" cy="35" r="6" fill={c} opacity=".4" stroke="#fff" strokeWidth=".5" strokeOpacity=".3"/>
      <circle cx="72" cy="38" r="5" fill={c} opacity=".35"/>
      <circle cx="25" cy="55" r="4" fill={c} opacity=".3"/>
      <circle cx="78" cy="58" r="3" fill={c} opacity=".25"/>
      <circle cx="38" cy="25" r="3.5" fill={c} opacity=".3"/>
      {/* ハイライト */}
      <ellipse cx="44" cy="38" rx="8" ry="4" fill="#fff" opacity=".2" transform="rotate(-20,44,38)"/>
    </svg>,
    // アクアン - 水のモンスター
    2: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 20 Q30 45 30 60 Q30 80 50 82 Q70 80 70 60 Q70 45 50 20Z" fill={c} opacity=".6"/>
      <path d="M50 25 Q35 45 35 58 Q35 75 50 77 Q65 75 65 58 Q65 45 50 25Z" fill={c} opacity=".8"/>
      {/* 目 */}
      <ellipse cx="43" cy="55" rx="4" ry="5" fill="#fff"/>
      <ellipse cx="57" cy="55" rx="4" ry="5" fill="#fff"/>
      <circle cx="44" cy="55" r="2.5" fill="#1a237e"/>
      <circle cx="58" cy="55" r="2.5" fill="#1a237e"/>
      <circle cx="44.5" cy="54" r="1" fill="#fff"/>
      <circle cx="58.5" cy="54" r="1" fill="#fff"/>
      {/* 口 - 波型 */}
      <path d="M44 65 Q47 68 50 65 Q53 68 56 65" stroke="#1565c0" strokeWidth="1.5" fill="none"/>
      {/* 水滴 */}
      <path d="M25 50 Q23 55 25 57 Q27 55 25 50Z" fill={c} opacity=".5"/>
      <path d="M76 48 Q74 52 76 54 Q78 52 76 48Z" fill={c} opacity=".4"/>
      <ellipse cx="45" cy="38" rx="6" ry="3" fill="#fff" opacity=".25" transform="rotate(-15,45,38)"/>
    </svg>,
    // ソルティ - 塩の結晶モンスター
    3: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="30" y="30" width="40" height="40" rx="4" fill={c} opacity=".7" transform="rotate(15,50,50)"/>
      <rect x="33" y="33" width="34" height="34" rx="3" fill={c} opacity=".9" transform="rotate(15,50,50)"/>
      {/* 目 */}
      <circle cx="43" cy="48" r="4" fill="#fff"/>
      <circle cx="57" cy="48" r="4" fill="#fff"/>
      <circle cx="44" cy="48" r="2.5" fill="#5d4037"/>
      <circle cx="58" cy="48" r="2.5" fill="#5d4037"/>
      {/* 口 */}
      <path d="M46 58 L50 62 L54 58" stroke="#8d6e63" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* 小結晶 */}
      <rect x="20" y="45" width="8" height="8" rx="1" fill={c} opacity=".4" transform="rotate(30,24,49)"/>
      <rect x="72" y="40" width="7" height="7" rx="1" fill={c} opacity=".35" transform="rotate(-20,75,43)"/>
      <rect x="60" y="25" width="6" height="6" rx="1" fill={c} opacity=".3" transform="rotate(45,63,28)"/>
      {/* キラキラ */}
      <path d="M38 32 L40 28 L42 32 L38 32" fill="#fff" opacity=".5"/>
      <path d="M62 68 L64 64 L66 68 L62 68" fill="#fff" opacity=".4"/>
    </svg>,
    // エアロン - 空気のモンスター
    4: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="28" ry="22" fill={c} opacity=".3"/>
      <ellipse cx="50" cy="50" rx="22" ry="18" fill={c} opacity=".5"/>
      {/* 渦巻き模様 */}
      <path d="M40 50 Q45 40 55 42 Q65 44 60 52 Q55 58 48 55 Q42 52 46 48" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".3"/>
      {/* 目（風っぽく細い） */}
      <path d="M38 46 Q42 42 46 46" stroke="#2e7d32" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M54 46 Q58 42 62 46" stroke="#2e7d32" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* 口 */}
      <ellipse cx="50" cy="57" rx="5" ry="3" fill="#fff" opacity=".5"/>
      {/* 風の線 */}
      <path d="M15 45 Q25 42 35 45" stroke={c} strokeWidth="1.5" fill="none" opacity=".4"/>
      <path d="M65 42 Q75 38 85 42" stroke={c} strokeWidth="1.5" fill="none" opacity=".4"/>
      <path d="M20 58 Q28 55 36 58" stroke={c} strokeWidth="1" fill="none" opacity=".3"/>
      <path d="M68 55 Q76 52 84 55" stroke={c} strokeWidth="1" fill="none" opacity=".3"/>
    </svg>,
    // コッパー - 銅のヨロイ
    5: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* 体 */}
      <rect x="32" y="45" width="36" height="35" rx="6" fill={c} stroke="#bf360c" strokeWidth="1.5"/>
      {/* 頭（兜） */}
      <path d="M30 45 Q30 22 50 20 Q70 22 70 45Z" fill={c} stroke="#bf360c" strokeWidth="1.5"/>
      <rect x="28" y="42" width="44" height="6" rx="3" fill="#e65100"/>
      {/* 目（光るスリット） */}
      <rect x="38" y="34" width="8" height="4" rx="2" fill="#fff200"/>
      <rect x="54" y="34" width="8" height="4" rx="2" fill="#fff200"/>
      {/* 腕 */}
      <rect x="22" y="50" width="10" height="22" rx="5" fill={c} stroke="#bf360c" strokeWidth="1"/>
      <rect x="68" y="50" width="10" height="22" rx="5" fill={c} stroke="#bf360c" strokeWidth="1"/>
      {/* 装飾 */}
      <circle cx="50" cy="58" r="6" fill="none" stroke="#fff200" strokeWidth="1.5" opacity=".6"/>
      <circle cx="50" cy="58" r="3" fill="#fff200" opacity=".4"/>
    </svg>,
    // シルバーグ - 銀の騎士
    6: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* マント */}
      <path d="M30 40 L25 85 Q50 90 75 85 L70 40Z" fill="#78909c" opacity=".5"/>
      {/* 体 */}
      <rect x="35" y="42" width="30" height="38" rx="5" fill={c} stroke="#78909c" strokeWidth="1.5"/>
      {/* 頭（騎士の兜） */}
      <path d="M33 42 Q33 18 50 15 Q67 18 67 42Z" fill={c} stroke="#78909c" strokeWidth="1.5"/>
      {/* バイザー */}
      <rect x="37" y="30" width="26" height="10" rx="3" fill="#455a64"/>
      <rect x="40" y="32" width="8" height="5" rx="1" fill="#e0e0e0" opacity=".8"/>
      <rect x="52" y="32" width="8" height="5" rx="1" fill="#e0e0e0" opacity=".8"/>
      {/* 剣 */}
      <line x1="75" y1="30" x2="75" y2="70" stroke="#cfd8dc" strokeWidth="3" strokeLinecap="round"/>
      <line x1="70" y1="42" x2="80" y2="42" stroke="#90a4ae" strokeWidth="3" strokeLinecap="round"/>
      {/* 羽飾り */}
      <path d="M50 15 Q48 5 45 3 Q50 8 50 15" fill="#e0e0e0"/>
      <path d="M50 15 Q52 5 55 3 Q50 8 50 15" fill="#cfd8dc"/>
    </svg>,
    // アイアンX - 鉄の巨人
    7: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* 巨大な体 */}
      <rect x="28" y="38" width="44" height="45" rx="8" fill={c} stroke="#5d4037" strokeWidth="2"/>
      {/* 頭 */}
      <rect x="34" y="18" width="32" height="24" rx="6" fill={c} stroke="#5d4037" strokeWidth="2"/>
      {/* 目（赤く光る） */}
      <rect x="40" y="26" width="7" height="5" rx="2" fill="#ff1744"/>
      <rect x="53" y="26" width="7" height="5" rx="2" fill="#ff1744"/>
      {/* 口 */}
      <rect x="42" y="35" width="16" height="3" rx="1" fill="#3e2723"/>
      {/* 腕（太い） */}
      <rect x="18" y="42" width="12" height="28" rx="6" fill={c} stroke="#5d4037" strokeWidth="1.5"/>
      <rect x="70" y="42" width="12" height="28" rx="6" fill={c} stroke="#5d4037" strokeWidth="1.5"/>
      {/* ボルト */}
      <circle cx="36" cy="44" r="3" fill="#5d4037"/>
      <circle cx="64" cy="44" r="3" fill="#5d4037"/>
      {/* X マーク */}
      <path d="M44 52 L56 66 M56 52 L44 66" stroke="#ff1744" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>,
    // サルファー - 硫黄の毒モンスター
    8: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="55" rx="25" ry="22" fill={c} opacity=".7"/>
      {/* 毒々しいガス */}
      <circle cx="35" cy="30" r="8" fill={c} opacity=".3"/>
      <circle cx="65" cy="28" r="6" fill={c} opacity=".25"/>
      <circle cx="28" cy="42" r="5" fill={c} opacity=".2"/>
      <circle cx="72" cy="45" r="4" fill={c} opacity=".2"/>
      {/* 目（邪悪） */}
      <path d="M38 48 L42 44 L46 48" stroke="#f57f17" strokeWidth="2.5" fill={c}/>
      <path d="M54 48 L58 44 L62 48" stroke="#f57f17" strokeWidth="2.5" fill={c}/>
      <circle cx="42" cy="47" r="1.5" fill="#fff"/>
      <circle cx="58" cy="47" r="1.5" fill="#fff"/>
      {/* 口 */}
      <path d="M42 60 Q46 65 50 60 Q54 65 58 60" stroke="#f57f17" strokeWidth="2" fill="none"/>
      {/* 毒マーク */}
      <circle cx="50" cy="38" r="4" fill="none" stroke="#f57f17" strokeWidth="1.5"/>
      <path d="M48 36 L52 40 M52 36 L48 40" stroke="#f57f17" strokeWidth="1.5"/>
    </svg>,
    // ドクターカオス - 暴走科学者
    9: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* 白衣（ボロボロ） */}
      <path d="M30 55 L28 95 L72 95 L70 55Z" fill="#e0e0e0" stroke="#aaa" strokeWidth="1" strokeDasharray="3,2"/>
      {/* 顔 */}
      <circle cx="50" cy="38" r="18" fill="#e8d5b7"/>
      {/* 狂気の目 */}
      <circle cx="43" cy="35" r="5" fill="#fff"/>
      <circle cx="57" cy="35" r="5" fill="#fff"/>
      <circle cx="44" cy="35" r="3" fill="#e91e63"/>
      <circle cx="58" cy="35" r="2" fill="#e91e63"/>
      <circle cx="44.5" cy="34" r="1" fill="#fff"/>
      {/* 眉（つり上がり） */}
      <path d="M37 28 L48 30" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
      <path d="M63 28 L52 30" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
      {/* 口（狂笑） */}
      <path d="M40 46 Q45 54 50 46 Q55 54 60 46" stroke="#c62828" strokeWidth="2" fill="none"/>
      {/* 髪（逆立ち） */}
      <path d="M32 30 Q30 15 40 10 L38 25" fill="#555"/>
      <path d="M42 28 Q42 8 50 5 L48 22" fill="#444"/>
      <path d="M52 22 Q55 5 58 8 L56 28" fill="#555"/>
      <path d="M60 25 Q65 10 68 15 L65 30" fill="#444"/>
      {/* 稲妻エフェクト */}
      <path d="M22 30 L26 38 L23 38 L28 48" stroke={c} strokeWidth="2" fill="none"/>
      <path d="M78 28 L74 36 L77 36 L72 46" stroke={c} strokeWidth="2" fill="none"/>
    </svg>,
    // ダイヤキング - 最強の結晶モンスター
    10: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* ダイヤモンド型ボディ */}
      <polygon points="50,15 75,45 60,85 40,85 25,45" fill={c} opacity=".6"/>
      <polygon points="50,20 70,45 58,80 42,80 30,45" fill={c} opacity=".8"/>
      {/* キラキラ面 */}
      <polygon points="50,20 70,45 50,55 30,45" fill="#fff" opacity=".15"/>
      {/* 王冠 */}
      <path d="M35 18 L40 8 L45 15 L50 5 L55 15 L60 8 L65 18Z" fill="#ffd700" stroke="#ff8f00" strokeWidth="1"/>
      <circle cx="50" cy="10" r="2.5" fill="#ff1744"/>
      <circle cx="42" cy="13" r="1.5" fill="#2196f3"/>
      <circle cx="58" cy="13" r="1.5" fill="#4caf50"/>
      {/* 目（威圧） */}
      <path d="M40 42 L44 38 L48 42" stroke="#fff" strokeWidth="2.5" fill="none"/>
      <path d="M52 42 L56 38 L60 42" stroke="#fff" strokeWidth="2.5" fill="none"/>
      <circle cx="44" cy="41" r="1.5" fill="#ffd700"/>
      <circle cx="56" cy="41" r="1.5" fill="#ffd700"/>
      {/* 口 */}
      <path d="M44 52 L50 56 L56 52" stroke="#fff" strokeWidth="1.5" fill="none"/>
      {/* 放射光 */}
      {[0,45,90,135,180,225,270,315].map((a,i)=><line key={i} x1="50" y1="50" x2={50+Math.cos(a*Math.PI/180)*45} y2={50+Math.sin(a*Math.PI/180)*45} stroke={c} strokeWidth="0.5" opacity=".3"/>)}
    </svg>,
    // EXステージ以降は共通テンプレートで色変え + 特徴追加
    11: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="28" fill={c} opacity=".4"/>
      <circle cx="50" cy="50" r="22" fill={c} opacity=".6" stroke="#fff" strokeWidth="1" strokeOpacity=".3"/>
      <circle cx="50" cy="50" r="16" fill={c} opacity=".8"/>
      <ellipse cx="42" cy="46" rx="4" ry="5" fill="#fff"/>
      <ellipse cx="58" cy="46" rx="4" ry="5" fill="#fff"/>
      <circle cx="43" cy="46" r="2.5" fill="#e91e63"/>
      <circle cx="59" cy="46" r="2.5" fill="#e91e63"/>
      <path d="M44 58 Q50 64 56 58" stroke="#e91e63" strokeWidth="2" fill="none"/>
      <path d="M30 30 Q35 22 42 28" stroke={c} strokeWidth="2" fill="none" opacity=".5"/>
      <path d="M70 30 Q65 22 58 28" stroke={c} strokeWidth="2" fill="none" opacity=".5"/>
      <text x="50" y="38" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="900" opacity=".6">NEO</text>
    </svg>,
    12: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="25" y="35" width="22" height="40" rx="6" fill="#FF8A65" stroke="#bf360c" strokeWidth="1.5"/>
      <rect x="53" y="35" width="22" height="40" rx="6" fill="#8D6E63" stroke="#5d4037" strokeWidth="1.5"/>
      <path d="M47 35 L50 25 L53 35" fill={c}/>
      <rect x="40" y="45" width="20" height="8" rx="4" fill={c} opacity=".6"/>
      <circle cx="36" cy="48" r="3" fill="#fff200"/><circle cx="64" cy="48" r="3" fill="#ff1744"/>
      <rect x="30" y="56" width="12" height="3" rx="1" fill="#bf360c"/><rect x="58" y="56" width="12" height="3" rx="1" fill="#5d4037"/>
      <path d="M45 80 L50 90 L55 80" stroke={c} strokeWidth="2" fill="none"/>
    </svg>,
    13: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 20 Q25 35 30 60 Q35 82 50 85 Q65 82 70 60 Q75 35 50 20Z" fill={c} opacity=".6"/>
      <circle cx="50" cy="28" r="8" fill={c} opacity=".3"/>
      <path d="M42 15 Q45 8 50 12 Q55 8 58 15" fill={c} opacity=".4"/>
      <ellipse cx="43" cy="46" rx="5" ry="6" fill="#fff"/>
      <ellipse cx="57" cy="46" rx="5" ry="6" fill="#fff"/>
      <circle cx="44" cy="46" r="3" fill="#4a148c"/><circle cx="58" cy="46" r="3" fill="#4a148c"/>
      <path d="M46 44 L42 40" stroke="#4a148c" strokeWidth="1.5"/><path d="M54 44 L58 40" stroke="#4a148c" strokeWidth="1.5"/>
      <path d="M44 60 Q50 66 56 60" stroke="#4a148c" strokeWidth="1.5" fill="none"/>
      <path d="M28 65 Q25 75 30 80" stroke={c} strokeWidth="2" fill="none" opacity=".4"/>
      <path d="M72 65 Q75 75 70 80" stroke={c} strokeWidth="2" fill="none" opacity=".4"/>
    </svg>,
    14: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="30" y="50" width="40" height="38" rx="6" fill="#3949ab" stroke="#1a237e" strokeWidth="1.5"/>
      <circle cx="50" cy="35" r="18" fill="#e8d5b7"/>
      <rect x="36" y="28" width="28" height="10" rx="2" fill="none" stroke="#1a237e" strokeWidth="2"/>
      <rect x="38" y="30" width="10" height="6" rx="1" fill="rgba(255,255,255,.8)"/>
      <rect x="52" y="30" width="10" height="6" rx="1" fill="rgba(255,255,255,.8)"/>
      <circle cx="43" cy="33" r="2" fill="#1a237e"/><circle cx="57" cy="33" r="2" fill="#1a237e"/>
      <path d="M45 44 Q50 48 55 44" stroke="#8d6e63" strokeWidth="1.5" fill="none"/>
      <path d="M32 22 Q38 10 50 8 Q62 10 68 22" fill="#ccc" stroke="#aaa" strokeWidth="1"/>
      <path d="M65 60 Q70 55 75 60 L75 72 Q70 68 65 72Z" fill="#1a237e" opacity=".6"/>
      <text x="50" y="68" textAnchor="middle" fill="#7986cb" fontSize="7" fontWeight="900">DNA</text>
    </svg>,
    15: <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="30" fill={c} opacity=".2"/>
      <circle cx="50" cy="50" r="22" fill={c} opacity=".4"/>
      <circle cx="50" cy="50" r="14" fill={c} opacity=".7"/>
      <circle cx="43" cy="46" r="4" fill="#fff" opacity=".9"/>
      <circle cx="57" cy="46" r="4" fill="#fff" opacity=".9"/>
      <circle cx="44" cy="46" r="2.5" fill={c}/><circle cx="58" cy="46" r="2.5" fill={c}/>
      <path d="M44 58 Q50 62 56 58" stroke="#fff" strokeWidth="1.5" fill="none" opacity=".8"/>
      {[0,60,120,180,240,300].map((a,i)=><line key={i} x1="50" y1="50" x2={50+Math.cos(a*Math.PI/180)*38} y2={50+Math.sin(a*Math.PI/180)*38} stroke={c} strokeWidth="1" opacity=".3"/>)}
      <text x="50" y="38" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="900" opacity=".5">???</text>
    </svg>
  };
  return monsters[id] || monsters[1];
};

/* ── プロローグ・ストーリー背景 ─── */
const PROLOGUE = [
  "ここは、原子科学研究所。",
  "世界的な化学者・ゲンシ博士が\n日夜研究を続ける場所だ。",
  "ある日、実験中の事故で\n原子エネルギーが暴走！",
  "原子の力を持つモンスターたちが\n研究所から逃げ出してしまった！",
  "博士「大変じゃ！キミの力で\nモンスターを止めてくれ！」",
  "原子を組み合わせて化合物を作り、\nモンスターたちを倒すのだ！"
];

/* ── プロローグ画面コンポーネント ─── */
const Prologue = ({onDone}) => {
  const [page,setPage] = useState(0);
  const [fade,setFade] = useState(true);
  const goNext = () => {
    if(page >= PROLOGUE.length-1) { onDone(); return; }
    setFade(false);
    setTimeout(()=>{ setPage(p=>p+1); setFade(true); },300);
    SE.tap();
  };
  const isLast = page >= PROLOGUE.length-1;
  const showDr = page >= 1;
  return <div onClick={goNext} style={{
    minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
    padding:"calc(24px + env(safe-area-inset-top)) 28px 24px",cursor:"pointer",position:"relative",overflow:"hidden",
    background:"radial-gradient(ellipse at 50% 40%,rgba(167,139,250,.1),transparent 60%),linear-gradient(180deg,#060612,#0c0c24)"
  }}>
    <Orbs n={6} />
    <NoiseOverlay />
    {/* 博士イラスト */}
    {showDr && <div style={{marginBottom:20,animation:"fadeScale .5s ease both",filter:"drop-shadow(0 8px 30px rgba(167,139,250,.3))"}}>
      <DrSVG size={page>=4?140:100} />
    </div>}
    {/* テキスト */}
    <div style={{
      position:"relative",zIndex:2,maxWidth:300,width:"100%",
      padding:24,borderRadius:20,
      background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",
      backdropFilter:"blur(8px)",
      opacity:fade?1:0,transition:"opacity .3s",
      animation:fade?"slideUp .4s ease both":"none"
    }}>
      <p style={{fontSize:16,color:"rgba(255,255,255,.8)",lineHeight:2,textAlign:"center",whiteSpace:"pre-line",fontWeight:600}}>{PROLOGUE[page]}</p>
    </div>
    {/* ページインジケーター */}
    <div style={{display:"flex",gap:6,marginTop:20,position:"relative",zIndex:2}}>
      {PROLOGUE.map((_,i)=><div key={i} style={{width:i===page?20:6,height:6,borderRadius:3,background:i===page?"#a78bfa":"rgba(255,255,255,.15)",transition:"all .3s"}} />)}
    </div>
    <div style={{marginTop:16,fontSize:13,color:"rgba(255,255,255,.25)",position:"relative",zIndex:2}}>
      {isLast?"タップしてはじめる":"タップでつぎへ ▶"}
    </div>
  </div>;
};

/* ── CPU AI ─── */
const cpuBond = (hand,d,prem) => {
  const p=findP(cntA(hand),prem); if(!p.length) return null;
  if(d==="easy"){if(Math.random()<0.5) return null; return [...p].sort((a,b)=>a.p-b.p)[0];}
  if(d==="normal"){if(Math.random()<0.2) return null; const s=[...p].sort((a,b)=>b.p-a.p); return s[0|s.length/2]||s[0];}
  return [...p].sort((a,b)=>b.p-a.p)[0];
};
const cpuDiscard = (hand,d) => {
  if(d==="hard"){const c=cntA(hand),ss={}; for(const card of hand){if(!ss[card.s]) ss[card.s]=0; for(const comp of COMPS) if(comp.a[card.s]) ss[card.s]+=comp.p;} let w=hand[0],ws=Infinity; for(const card of hand){const sc=ss[card.s]/(c[card.s]||1); if(sc<ws){ws=sc;w=card;}} return w.id;}
  return hand[0|Math.random()*hand.length].id;
};
const cpuCards = (hand,comp) => { const n={...comp.a},ids=[]; for(const c of hand) if(n[c.s]>0){ids.push(c.id);n[c.s]--;} return ids; };

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
const Orbs = ({n=10,co="rgba(167,139,250,.05)"}) => {
  const o = useRef(Array.from({length:n},(_,i)=>({id:i,x:Math.random()*100,y:Math.random()*100,sz:80+Math.random()*200,d:15+Math.random()*25,dl:Math.random()*-20}))).current;
  return <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
    {o.map(v=><div key={v.id} style={{position:"absolute",left:`${v.x}%`,top:`${v.y}%`,width:v.sz,height:v.sz,borderRadius:"50%",background:co,filter:"blur(60px)",animation:`bo ${v.d}s ${v.dl}s ease-in-out infinite`}} />)}
  </div>;
};

/* ── ノイズテクスチャ ─── */
const NoiseOverlay = () => <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:1,opacity:0.03,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundRepeat:"repeat",backgroundSize:"128px 128px"}} />;

/* ── プレミアムボタン ─── */
const PremBtn = ({children,onClick,gradient="linear-gradient(135deg,#a78bfa,#818cf8)",shadow="rgba(167,139,250,.35)",disabled,style,...rest}) =>
  <button onClick={()=>{if(!disabled){onClick?.();SE.tap();}}} style={{
    padding:"14px 28px",borderRadius:16,border:"none",
    background:disabled?"rgba(255,255,255,.06)":gradient,
    color:disabled?"rgba(255,255,255,.25)":"#fff",
    fontSize:16,fontWeight:800,cursor:disabled?"default":"pointer",
    boxShadow:disabled?"none":`0 4px 24px ${shadow},inset 0 1px 0 rgba(255,255,255,.15)`,
    letterSpacing:".02em",position:"relative",overflow:"hidden",...style
  }} {...rest}>{children}
    {!disabled && <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent)",backgroundSize:"200% 100%",animation:"shimmer 3s linear infinite"}} />}
  </button>;

/* ── BGMボタン ─── */
const BgmBtn = () => {
  const t = useT();
  const [on,setOn] = useState(BGM.on());
  return <button onClick={()=>{if(on){BGM.stop();setOn(false);}else{BGM.start();setOn(true);}}} style={{
    padding:"5px 12px",borderRadius:20,
    border:`1px solid ${on?"rgba(167,139,250,.3)":"rgba(255,255,255,.1)"}`,
    background:on?"rgba(167,139,250,.12)":"rgba(255,255,255,.04)",
    color:on?"#a78bfa":"rgba(255,255,255,.3)",
    fontSize:11,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",
    backdropFilter:"blur(8px)",position:"fixed",top:"max(12px,env(safe-area-inset-top))",right:12,zIndex:100
  }}>{on?t("bgmOn"):t("bgmOff")}</button>;
};

/* ── 設定ボタン ─── */
const SBtn = ({l,a,co="#a78bfa",onClick}) =>
  <button onClick={()=>{onClick();SE.tap();}} style={{
    padding:"8px 14px",borderRadius:12,
    border:`2px solid ${a?co+"99":"rgba(255,255,255,.08)"}`,
    background:a?co+"15":"rgba(255,255,255,.03)",
    color:a?co:"rgba(255,255,255,.35)",
    fontSize:13,fontWeight:800,cursor:"pointer",
    boxShadow:a?`0 0 12px ${co}22`:"none",
    backdropFilter:"blur(4px)"
  }}>{l}</button>;

/* ═══════════════════════════════════════════════════════════
   🃏 PREMIUM カードデザイン
   ═══════════════════════════════════════════════════════════ */
const Card = ({card,sel,onTap,dl=0}) => {
  const t = useT();
  const i = getAI(card.s);
  const rarity = RARITY[card.s]||1;
  const rarityBorder = rarity>=3?"rgba(255,215,0,.5)":rarity>=2?"rgba(167,139,250,.4)":"rgba(255,255,255,.1)";
  const rarityGlow = rarity>=3?`0 0 20px ${i.g}44`:rarity>=2?`0 0 12px ${i.g}33`:"none";
  
  return <div onClick={()=>onTap?.(card)} style={{
    width:72,minWidth:72,height:96,borderRadius:14,position:"relative",overflow:"hidden",
    background:sel
      ?`linear-gradient(145deg,${i.c},${i.c}88)`
      :`linear-gradient(160deg,rgba(20,20,40,.95),rgba(15,15,35,.98))`,
    border:sel?`2.5px solid ${i.g}`:`1.5px solid ${rarityBorder}`,
    display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
    boxShadow:sel?`0 0 20px ${i.g}88,0 8px 20px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.15)`
      :`0 4px 12px rgba(0,0,0,.4),${rarityGlow}`,
    cursor:onTap?"pointer":"default",
    transition:"all .25s cubic-bezier(.34,1.56,.64,1)",
    flexShrink:0,
    transform:sel?"translateY(-10px) scale(1.1)":"none",
    gap:2,
    "--g":i.g+"88","--gi":i.g+"22",
    animation:sel?"pg 1.5s ease-in-out infinite":`ca .35s ${dl}s ease both`
  }}>
    {/* ホログラフィック光沢 */}
    <div style={{position:"absolute",inset:0,borderRadius:12,
      background:sel
        ?"linear-gradient(135deg,transparent 20%,rgba(255,255,255,.15) 40%,transparent 60%)"
        :"linear-gradient(135deg,transparent 30%,rgba(255,255,255,.04) 50%,transparent 70%)",
      backgroundSize:"200% 200%",animation:rarity>=2?"cardHolo 4s ease infinite":"none",
      pointerEvents:"none"}} />
    {/* レア度インジケーター */}
    {rarity>=3 && <div style={{position:"absolute",top:4,right:4,fontSize:7,color:"#ffd700",textShadow:"0 0 6px rgba(255,215,0,.6)"}}>★★★</div>}
    {rarity===2 && <div style={{position:"absolute",top:4,right:4,fontSize:7,color:"#a78bfa",textShadow:"0 0 4px rgba(167,139,250,.5)"}}>★★</div>}
    <span style={{fontSize:22,filter:sel?"drop-shadow(0 2px 6px rgba(0,0,0,.3))":"none",position:"relative",zIndex:2}}>{i.e}</span>
    <span style={{fontSize:22,fontWeight:900,color:sel?i.tc:"#fff",lineHeight:1,position:"relative",zIndex:2,textShadow:sel?"none":"0 1px 3px rgba(0,0,0,.5)"}}>{card.s}</span>
    <span style={{fontSize:9,color:sel?i.tc+"cc":"rgba(255,255,255,.4)",fontWeight:700,position:"relative",zIndex:2}}>{t(card.k)}</span>
  </div>;
};

/* ── バッジ ─── */
const Badge = ({comp}) => {
  const t = useT();
  const tier = comp.p>=20?"#f97316":comp.p>=8?"#a78bfa":comp.p>=5?"#38bdf8":"#4ade80";
  return <div style={{
    display:"inline-flex",alignItems:"center",gap:5,
    background:"rgba(255,255,255,.04)",borderRadius:10,padding:"4px 10px",
    border:comp.sp?`1.5px solid #c084fc`:`1px solid rgba(255,255,255,.08)`,
    backdropFilter:"blur(4px)"
  }}>
    <span style={{fontSize:14}}>{comp.e}</span>
    <span style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,.75)"}}>{t(comp.k)}</span>
    <span style={{fontSize:10,fontWeight:800,color:"#000",background:comp.sp?"linear-gradient(135deg,#c084fc,#a855f7)":tier,borderRadius:6,padding:"1px 6px"}}>{comp.p}{t("pt")}</span>
  </div>;
};

/* ── カード残数 ─── */
const Inv = ({state,myHand}) => {
  const t = useT();
  const [open,setOpen] = useState(false);
  const hc=cntA(myHand),dc=cntA(state.dp||[]);
  const bu={};ATOMS.forEach(a=>bu[a.s]=0);
  state.pl.forEach(p=>p.bonds.forEach(b=>Object.entries(b.a).forEach(([s,n])=>bu[s]=(bu[s]||0)+n)));
  return <div style={{marginTop:12}}>
    <button onClick={()=>{setOpen(!open);SE.tap();}} style={{
      width:"100%",padding:12,borderRadius:14,
      border:"1px solid rgba(255,255,255,.06)",
      background:"rgba(255,255,255,.03)",color:"rgba(255,255,255,.4)",
      fontSize:13,fontWeight:700,cursor:"pointer",backdropFilter:"blur(4px)"
    }}>🧪 {open?t("crC"):t("crO")}</button>
    {open && <div style={{marginTop:6,padding:12,borderRadius:14,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",animation:"su .3s ease"}}>
      <div style={{display:"flex",gap:4,justifyContent:"center",flexWrap:"wrap",marginBottom:8}}>
        {ATOMS.map(at=>{
          const rem=at.n-(hc[at.s]||0)-(bu[at.s]||0)-(dc[at.s]||0);
          return <div key={at.s} style={{display:"flex",flexDirection:"column",alignItems:"center",width:28}}>
            <div style={{width:20,height:36,borderRadius:5,background:"rgba(255,255,255,.04)",position:"relative",overflow:"hidden",border:"1px solid rgba(255,255,255,.06)"}}>
              <div style={{position:"absolute",bottom:0,width:"100%",height:`${Math.max(0,rem/at.n*100)}%`,background:`linear-gradient(180deg,${at.g}88,${at.g}33)`,borderRadius:3,transition:"height .3s"}} />
            </div>
            <span style={{fontSize:10,marginTop:2}}>{at.e}</span>
            <span style={{fontSize:9,fontWeight:800,color:at.g}}>{at.s}</span>
            <span style={{fontSize:10,fontWeight:800,color:rem>at.n*.5?"#4ade80":rem>0?"#fbbf24":"#ef4444"}}>{rem}</span>
          </div>;
        })}
      </div>
      <div style={{fontSize:10,color:"rgba(255,255,255,.2)",textAlign:"center"}}>{t("crN")}</div>
    </div>}
  </div>;
};

/* ═══════════════════════════════════════════════════════════
   🎆 おいわい（派手版 - 既存ロジック保持）
   ═══════════════════════════════════════════════════════════ */
const Celeb = ({comp,onDone}) => {
  const t=useT(); const pts=comp.p;
  const [ph,setPh]=useState(0);
  const tier=pts>=35?3:pts>=8?2:pts>=5?1:0;
  const mc=["#4ade80","#fbbf24","#f97316","#c084fc"][tier];
  const bg=["rgba(10,30,15,.96)","rgba(30,25,5,.96)","rgba(40,12,3,.96)","rgba(20,5,35,.96)"][tier];
  useEffect(()=>{
    if(tier>=2){SE.tap();requestAnimationFrame(()=>setPh(1));const a=setTimeout(()=>{SE.bond(pts);setPh(2);},tier>=3?2000:1200);const b=setTimeout(()=>setPh(3),tier>=3?2600:1700);const c=setTimeout(()=>setPh(4),tier>=3?3200:2200);const d=setTimeout(onDone,tier>=3?5500:4000);return ()=>{[a,b,c,d].forEach(clearTimeout);};}
    else{SE.bond(pts);requestAnimationFrame(()=>setPh(2));const a=setTimeout(()=>setPh(3),300);const b=setTimeout(()=>setPh(4),600);const c=setTimeout(onDone,tier>=1?2200:1600);return ()=>{[a,b,c].forEach(clearTimeout);};}
  },[]);
  const ce=[["✨","⭐"],["✨","⭐","🎵","💫"],["🎉","✨","⭐","🔥","💫","🌟"],["🎉","🎆","✨","⭐","🔥","💎","🌟","🏆","💫","🎊","⚡","👑"]][tier];
  const ec=[8,14,28,50][tier];
  const ep=useRef(Array.from({length:ec},(_,i)=>{const a=i/ec*360+Math.random()*20,d=50+Math.random()*(60+tier*50),r=a*Math.PI/180;return {id:i,x:Math.cos(r)*d,y:Math.sin(r)*d,em:ce[i%ce.length],dl:Math.random()*.5,sz:16+Math.random()*(10+tier*8)};})).current;
  const spinS=useRef(tier>=2?Array.from({length:tier>=3?16:8},(_,i)=>({id:i,ang:i/(tier>=3?16:8)*360,dist:80+Math.random()*60,sz:12+Math.random()*16,dl:Math.random()*.6,co:["#fbbf24","#f97316","#c084fc","#38bdf8","#4ade80","#ef4444"][i%6]})):[]).current;
  const rings=tier>=2?[0,.3,.6]:[];
  return <div style={{position:"fixed",inset:0,zIndex:9999,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:ph>=1?bg:"rgba(0,0,0,0)",transition:`background ${tier>=2?'.5s':'.3s'}`,overflow:"hidden"}}>
    {ph>=2&&tier>=2&&<div style={{position:"absolute",inset:0,background:mc,animation:"bgFlash .4s ease forwards",zIndex:1}} />}
    {ph===1&&tier>=2&&<div style={{position:"absolute",width:tier>=3?160:120,height:tier>=3?160:120,borderRadius:"50%",background:`radial-gradient(circle,${mc}44,${mc}11,transparent)`,"--cg":`${mc}66`,animation:`charge ${tier>=3?'1.8s':'1s'} ease both, chargeGlow .4s ease-in-out infinite`,zIndex:2}} />}
    {ph===1&&tier>=3&&Array.from({length:20}).map((_,i)=>{const a=i/20*360*Math.PI/180;return <div key={`ch${i}`} style={{position:"absolute",width:6,height:6,borderRadius:"50%",background:mc,left:`calc(50% + ${Math.cos(a)*150}px)`,top:`calc(50% + ${Math.sin(a)*150}px)`,animation:`charge 1.5s ${i*.08}s ease both`,zIndex:3}} />;})}
    {ph>=2&&rings.map((dl,i)=><div key={`r${i}`} style={{position:"absolute",width:100,height:100,borderRadius:"50%",border:`4px solid ${mc}`,animation:`ringBurst .8s ${dl}s ease-out forwards`,opacity:0,zIndex:4}} />)}
    {ph>=2&&ep.map(p=><div key={p.id} style={{position:"absolute",fontSize:p.sz,"--dx":`${p.x}px`,"--dy":`${p.y}px`,animation:`ke ${.6+tier*.3}s ${p.dl}s cubic-bezier(.2,.6,.3,1) forwards`,opacity:0,zIndex:5}}>{p.em}</div>)}
    {ph>=2&&spinS.map(s=><div key={`ss${s.id}`} style={{position:"absolute",width:s.sz,height:s.sz,borderRadius:"50%",background:s.co,boxShadow:`0 0 ${s.sz}px ${s.co}`,animation:`starSpin 1s ${s.dl}s ease-out forwards`,opacity:0,zIndex:5,left:`calc(50% + ${Math.cos(s.ang*Math.PI/180)*s.dist}px)`,top:`calc(50% + ${Math.sin(s.ang*Math.PI/180)*s.dist}px)`}} />)}
    {ph>=2&&<div style={{position:"relative",zIndex:10,textAlign:"center",animation:tier>=2?"megaBounce .8s ease both":"kb .5s ease both"}}>
      <div style={{fontSize:tier>=3?80:56,filter:`drop-shadow(0 8px 30px ${mc}66)`}}>{comp.e}</div>
    </div>}
    {ph>=3&&<div style={{position:"relative",zIndex:10,textAlign:"center",animation:tier>=3?"textReveal .6s ease both":"su .4s ease both"}}>
      <div style={{fontSize:24,fontWeight:900,color:"#fff",marginTop:4}}>{t(comp.k)}</div>
      <div style={{fontSize:14,color:"rgba(255,255,255,.5)",marginTop:2}}>{comp.f}</div>
    </div>}
    {ph>=4&&<div style={{position:"relative",zIndex:10,textAlign:"center",animation:"sp .4s ease both"}}>
      <div style={{fontSize:44,fontWeight:900,color:mc,textShadow:`0 0 30px ${mc}88`,marginTop:4}}>+{comp.p}<span style={{fontSize:20}}>{t("pt")}</span></div>
      {comp.sp&&<div style={{fontSize:16,color:"#c084fc",fontWeight:800,marginTop:2}}>💎 {t("sp")}</div>}
    </div>}
  </div>;
};

/* ── CPUオーバーレイ ─── */
const CpuOv = ({name,action,comp}) => {
  const t=useT(); const [ph,setPh]=useState(0);
  useEffect(()=>{requestAnimationFrame(()=>setPh(1));},[]);
  const emoji=(name.match(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/u)||["🤖"])[0];
  // ストーリーモードのモンスターか判定
  const stageMatch = STORY.find(s => name.includes(s.name));
  return <div style={{position:"fixed",inset:0,zIndex:9998,display:"flex",alignItems:"center",justifyContent:"center",background:ph>=1?"rgba(6,6,18,.96)":"rgba(0,0,0,0)",transition:"background .3s"}}>
    <div style={{textAlign:"center",animation:ph>=1?"cb .4s ease both":"none",opacity:0}}>
      {stageMatch
        ? <div style={{marginBottom:8,filter:`drop-shadow(0 8px 30px ${stageMatch.color}55)`}}><MonsterSVG id={stageMatch.id} size={100} color={stageMatch.color} /></div>
        : <div style={{fontSize:56,marginBottom:8,filter:"drop-shadow(0 4px 20px rgba(167,139,250,.3))"}}>{emoji}</div>
      }
      <div style={{fontSize:18,fontWeight:900,color:stageMatch?stageMatch.color:"#a78bfa",marginBottom:4}}>{name}</div>
      {action==="bond"&&comp&&<>
        <div style={{fontSize:15,color:"#4ade80",fontWeight:800}}>{t("cpuB")}</div>
        <div style={{fontSize:40,marginTop:4}}>{comp.e}</div>
        <div style={{fontSize:18,fontWeight:900,color:"#fff",marginTop:2}}>{t(comp.k)}</div>
        <div style={{fontSize:14,color:"#fbbf24",fontWeight:800}}>+{comp.p}{t("pt")}</div>
      </>}
      {action==="pass"&&<div style={{fontSize:15,color:"rgba(255,255,255,.35)"}}>{t("cpuT")}</div>}
    </div>
  </div>;
};

/* ── パス画面 ─── */
const Pass = ({pn,onReady,info}) => {
  const t=useT();
  return <div style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"calc(24px + env(safe-area-inset-top)) 24px 24px 24px",background:BG,position:"relative"}}>
    <Orbs /><NoiseOverlay />
    <div style={{position:"relative",zIndex:2,textAlign:"center"}}>
      <div style={{fontSize:64,marginBottom:16,animation:"fl 2s ease-in-out infinite",filter:"drop-shadow(0 4px 20px rgba(167,139,250,.3))"}}>📱</div>
      <h2 style={{fontSize:22,fontWeight:900,color:"#fff",margin:"0 0 8px",textAlign:"center"}}>{t("passD")}</h2>
      <p style={{fontSize:18,color:"rgba(255,255,255,.5)",margin:"0 0 4px"}}>{t("next")} <strong style={{color:"#a78bfa",fontSize:22}}>{pn}</strong> {t("trn")}</p>
      <p style={{fontSize:13,color:"rgba(255,255,255,.25)",margin:"0 0 28px"}}>{info}</p>
      <PremBtn onClick={onReady} gradient="linear-gradient(135deg,#7c3aed,#a78bfa)" shadow="rgba(124,58,237,.4)" style={{padding:"18px 48px",fontSize:20,borderRadius:20}}>{t("ready")}</PremBtn>
    </div>
  </div>;
};

/* ═══════════════════════════════════════════════════════════
   📱 タイトル画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Title({onStart,onStartCpu,onStartStory,onTest,lang,setLang,premium,setPremium,cleared}) {
  const t=useT();
  const [mode,setMode]=useState(null);
  const [pc,setPc]=useState(2);
  const [names,setNames]=useState(["","","",""]);
  const [cn,setCn]=useState("");
  const [cc,setCc]=useState(1);
  const [cd,setCd]=useState("normal");
  const [hl,setHL]=useState(7);
  const [storySt,setStorySt]=useState(null);
  const [prologueSeen,setPrologueSeen]=useState(false);
  const [bgmOn,setBgmOn]=useState(BGM.on());
  const [seOn,setSeOn]=useState(SE.isEnabled());
  
  const Stg = () => <div style={{marginTop:18,padding:18,borderRadius:20,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",maxWidth:300,width:"100%",backdropFilter:"blur(8px)"}}>
    <div style={{fontSize:14,fontWeight:900,color:"#fbbf24",marginBottom:12}}>⚙️ {t("settings")}</div>
    <div style={{fontSize:13,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:6}}>🔤 {t("langLabel")}</div>
    <div style={{display:"flex",gap:6,justifyContent:"center",marginBottom:14}}>
      <SBtn l={t("langH")} a={lang==="hiragana"} co="#a78bfa" onClick={()=>setLang("hiragana")} />
      <SBtn l={t("langK")} a={lang==="kanji"} co="#a78bfa" onClick={()=>setLang("kanji")} />
    </div>
    <div style={{fontSize:13,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:6}}>🔊 {t("soundLabel")}</div>
    <div style={{display:"flex",gap:12,justifyContent:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <span style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>{t("bgmLabel")}</span>
        <SBtn l={t("onLabel")} a={bgmOn} co="#4ade80" onClick={()=>{BGM.start();setBgmOn(true);}} />
        <SBtn l={t("offLabel")} a={!bgmOn} co="#ef4444" onClick={()=>{BGM.stop();setBgmOn(false);}} />
      </div>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <span style={{fontSize:12,color:"rgba(255,255,255,.3)"}}>{t("seLabel")}</span>
        <SBtn l={t("onLabel")} a={seOn} co="#4ade80" onClick={()=>{SE.setEnabled(true);setSeOn(true);}} />
        <SBtn l={t("offLabel")} a={!seOn} co="#ef4444" onClick={()=>{SE.setEnabled(false);setSeOn(false);}} />
      </div>
    </div>
  </div>;
  
  const PremPanel = () => <div style={{marginTop:12,padding:18,borderRadius:20,background:premium?"rgba(74,222,128,.03)":"linear-gradient(135deg,rgba(251,191,36,.04),rgba(249,115,22,.04))",border:premium?"1px solid rgba(74,222,128,.15)":"1.5px solid rgba(251,191,36,.15)",maxWidth:300,width:"100%",backdropFilter:"blur(8px)"}}>
    <div style={{fontSize:15,fontWeight:900,color:premium?"#4ade80":"#fbbf24",marginBottom:6}}>{t("premTitle")}</div>
    {premium ? <div style={{fontSize:13,color:"#4ade80",fontWeight:700}}>{t("premDone")}</div> : <>
      <div style={{fontSize:13,color:"rgba(255,255,255,.4)",marginBottom:10,lineHeight:1.6}}>{t("premMsg")}</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:10}}>
        {COMPS.filter(c=>!c.free).map(c=><span key={c.k} style={{fontSize:11,padding:"2px 8px",borderRadius:8,background:"rgba(255,255,255,.04)",border:"1px solid rgba(251,191,36,.15)",color:"rgba(255,255,255,.4)"}}>{t("locked")} {t(c.k)}</span>)}
      </div>
      <PremBtn onClick={()=>{SE.gStart();setPremium(true);}} gradient="linear-gradient(135deg,#f59e0b,#fbbf24)" shadow="rgba(245,158,11,.3)" style={{width:"100%",fontSize:15}}>{t("premBtn")}</PremBtn>
      <div style={{fontSize:10,color:"rgba(255,255,255,.2)",marginTop:6,textAlign:"center"}}>※ App Store公開時に実際の課金に切り替わります</div>
    </>}
  </div>;
  
  const wrap = ch => <div style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"calc(24px + env(safe-area-inset-top)) 24px calc(24px + env(safe-area-inset-bottom)) 24px",background:BG,position:"relative"}}>
    <Orbs /><NoiseOverlay />
    <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:340}}>{ch}</div>
  </div>;
  
  // ─ タイトルトップ ─
  if(mode===null) return wrap(<>
    {/* ロゴ */}
    <div style={{position:"relative",marginBottom:6}}>
      <div style={{fontSize:72,animation:"fl 3s ease-in-out infinite",filter:"drop-shadow(0 6px 30px rgba(167,139,250,.5))",position:"relative",zIndex:2}}>🧪</div>
      <div style={{position:"absolute",inset:"-20px",borderRadius:"50%",background:"radial-gradient(circle,rgba(167,139,250,.15),transparent 70%)",animation:"pulseRing 3s ease-in-out infinite",zIndex:1}} />
    </div>
    <h1 style={{fontSize:34,fontWeight:900,color:"#fff",textAlign:"center",margin:"0 0 2px",letterSpacing:".04em",animation:"titleGlow 4s ease-in-out infinite"}}>{t("title1")}</h1>
    <h2 style={{fontSize:20,fontWeight:700,color:"#a78bfa",margin:"0 0 40px",letterSpacing:".08em"}}>{t("title2")}</h2>
    
    {/* メニューボタン */}
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:12}}>
      <button onClick={()=>{setMode("story");SE.tap();}} style={{width:"100%",padding:"18px 20px",borderRadius:20,border:"none",
        background:"linear-gradient(135deg,#be185d,#ec4899)",color:"#fff",fontSize:17,fontWeight:900,cursor:"pointer",
        boxShadow:"0 4px 30px rgba(190,24,93,.35),inset 0 1px 0 rgba(255,255,255,.15)",
        display:"flex",alignItems:"center",justifyContent:"center",gap:12,position:"relative",overflow:"hidden"
      }}>
        <span style={{fontSize:28}}>⚔️</span>
        <span style={{textAlign:"left"}}>{t("story")}<br/><span style={{fontSize:12,fontWeight:600,opacity:.85}}>{t("storySub")}</span></span>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",backgroundSize:"200% 100%",animation:"shimmer 3s linear infinite"}} />
      </button>
      
      <button onClick={()=>{setMode("cpu");SE.tap();}} style={{width:"100%",padding:"18px 20px",borderRadius:20,border:"none",
        background:"linear-gradient(135deg,#ea580c,#f97316)",color:"#fff",fontSize:17,fontWeight:900,cursor:"pointer",
        boxShadow:"0 4px 30px rgba(234,88,12,.35),inset 0 1px 0 rgba(255,255,255,.15)",
        display:"flex",alignItems:"center",justifyContent:"center",gap:12,position:"relative",overflow:"hidden"
      }}>
        <span style={{fontSize:28}}>🤖</span>
        <span style={{textAlign:"left"}}>{t("solo")}<br/><span style={{fontSize:12,fontWeight:600,opacity:.85}}>{t("soloSub")}</span></span>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",backgroundSize:"200% 100%",animation:"shimmer 3s linear infinite"}} />
      </button>
      
      <button onClick={()=>{setMode("multi");SE.tap();}} style={{width:"100%",padding:"18px 20px",borderRadius:20,border:"none",
        background:"linear-gradient(135deg,#6d28d9,#8b5cf6)",color:"#fff",fontSize:17,fontWeight:900,cursor:"pointer",
        boxShadow:"0 4px 30px rgba(109,40,217,.35),inset 0 1px 0 rgba(255,255,255,.15)",
        display:"flex",alignItems:"center",justifyContent:"center",gap:12,position:"relative",overflow:"hidden"
      }}>
        <span style={{fontSize:28}}>👫</span>
        <span style={{textAlign:"left"}}>{t("multi")}<br/><span style={{fontSize:12,fontWeight:600,opacity:.85}}>{t("multiSub")}</span></span>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)",backgroundSize:"200% 100%",animation:"shimmer 3s linear infinite"}} />
      </button>
    </div>
  </>);

  // ─ CPU対戦セットアップ ─
  if(mode==="cpu") return wrap(<>
    <div style={{fontSize:52,marginBottom:8,filter:"drop-shadow(0 4px 20px rgba(249,115,22,.3))"}}>🤖</div>
    <h2 style={{fontSize:22,fontWeight:900,color:"#fff",margin:"0 0 24px"}}>{t("solo")}</h2>
    <div style={{width:"100%",marginBottom:16}}>
      <input value={cn} onChange={e=>setCn(e.target.value)} placeholder={t("name")} style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"1.5px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.04)",color:"#fff",fontSize:16,outline:"none",boxSizing:"border-box",fontWeight:600,backdropFilter:"blur(4px)"}} />
    </div>
    <div style={{fontSize:14,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:8}}>{t("opp")}</div>
    <div style={{display:"flex",gap:8,marginBottom:16}}>{[1,2,3].map(n=><SBtn key={n} l={`${n}${t("unit")}`} a={cc===n} co="#f97316" onClick={()=>setCc(n)} />)}</div>
    <div style={{fontSize:14,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:8}}>{t("str")}</div>
    <div style={{display:"flex",gap:8,marginBottom:16}}>{["easy","normal","hard"].map(d=><SBtn key={d} l={t(d)} a={cd===d} co="#f97316" onClick={()=>setCd(d)} />)}</div>
    <div style={{fontSize:14,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:8}}>🃏 {t("hlLabel")}</div>
    <div style={{display:"flex",gap:6,marginBottom:28,flexWrap:"wrap",justifyContent:"center"}}>{[7,8,9,10].map(n=><SBtn key={n} l={`${n}${t("mai")}${n===7?`（${t("basic")}）`:""}`} a={hl===n} onClick={()=>setHL(n)} />)}</div>
    <PremBtn onClick={()=>{SE.gStart();onStartCpu(cn.trim()||"あなた",Array.from({length:cc},(_,i)=>CPUN[i%3]),cd,hl);}} gradient="linear-gradient(135deg,#ea580c,#f97316)" shadow="rgba(234,88,12,.35)" style={{padding:"16px 48px",fontSize:20,borderRadius:20}}>🎮 {t("start")}</PremBtn>
    <Stg />
    <div style={{marginTop:12,padding:18,borderRadius:20,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",maxWidth:300,width:"100%"}}>
      <div style={{fontSize:14,fontWeight:900,color:"#a78bfa",marginBottom:8}}>🎴 {t("rules")}</div>
      <div style={{fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:2}}>① {t("r1")}<br/>② {t("r2")}<br/>③ {t("r3")}<br/>④ {t("hand")}{hl}{t("r4")}<br/>⑤ {t("r5")}<br/>{t("r6")}<br/>{t("r7")}</div>
    </div>
    <button onClick={()=>setMode(null)} style={{marginTop:14,padding:"10px 24px",borderRadius:12,border:"1px solid rgba(255,255,255,.08)",background:"transparent",color:"rgba(255,255,255,.35)",fontSize:14,fontWeight:700,cursor:"pointer"}}>{t("back")}</button>
  </>);

  // ─ ストーリーモード ─
  if(mode==="story") {
    // プロローグ（初回のみ）
    if(!prologueSeen) {
      return <Prologue onDone={()=>setPrologueSeen(true)} />;
    }
    if(storySt===null) {
      const mainStages=STORY.filter(s=>!s.ex);
      const exStages=STORY.filter(s=>s.ex);
      const allMainCleared=cleared.has(10);
      return wrap(<>
        {/* 博士ヘッダー */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20,animation:"fadeScale .4s ease both"}}>
          <div style={{filter:"drop-shadow(0 4px 12px rgba(167,139,250,.3))"}}>
            <DrSVG size={64} />
          </div>
          <div>
            <h2 style={{fontSize:20,fontWeight:900,color:"#fff",margin:0}}>{t("story")}</h2>
            <p style={{fontSize:12,color:"rgba(255,255,255,.4)",margin:"2px 0 0",fontWeight:600}}>モンスターを倒して進め！</p>
          </div>
        </div>
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:8}}>
          {mainStages.map((s,i)=>{
            const unlocked=i===0||cleared.has(STORY[i-1].id);
            const isCleared=cleared.has(s.id);
            const diffLabel={easy:"★☆☆",normal:"★★☆",hard:"★★★"}[s.diff];
            const diffColor={easy:"#4ade80",normal:"#fbbf24",hard:"#ef4444"}[s.diff];
            return <button key={s.id} onClick={()=>{if(unlocked){SE.tap();setStorySt(s);}}} style={{
              padding:"12px 14px",borderRadius:16,
              border:`1.5px solid ${unlocked?s.color+'44':'rgba(255,255,255,.05)'}`,
              background:unlocked?`linear-gradient(135deg,${s.color}08,${s.color}04)`:'rgba(255,255,255,.01)',
              color:"#fff",cursor:unlocked?"pointer":"default",opacity:unlocked?1:.35,textAlign:"left",
              position:"relative",overflow:"hidden"
            }}>
              {isCleared && <div style={{position:"absolute",top:0,right:0,padding:"3px 10px",borderRadius:"0 14px 0 10px",background:"rgba(74,222,128,.15)",border:"1px solid rgba(74,222,128,.2)"}}>
                <span style={{fontSize:10,color:"#4ade80",fontWeight:800}}>✓ {t("storyClear")}</span>
              </div>}
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                {/* モンスターイラスト */}
                <div style={{width:52,height:52,borderRadius:14,background:`${s.color}12`,border:`1px solid ${s.color}33`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
                  {unlocked ? <MonsterSVG id={s.id} size={48} color={s.color} /> : <span style={{fontSize:24,opacity:.5}}>🔒</span>}
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:15,fontWeight:900}}>{unlocked?`${t("storyStage")} ${s.id}  ${s.name}`:t("storyLocked")}</div>
                  <div style={{fontSize:12,color:diffColor,fontWeight:700,marginTop:2}}>{diffLabel}</div>
                </div>
              </div>
              {unlocked && <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.02),transparent)",backgroundSize:"200% 100%",animation:"shimmer 4s linear infinite"}} />}
            </button>;
          })}
          {allMainCleared && <>
            <div style={{textAlign:"center",margin:"12px 0 4px",fontSize:13,fontWeight:800,color:"#c084fc",letterSpacing:".06em"}}>— EX STAGES —</div>
            {exStages.map((s,i)=>{
              const prev=i===0?10:exStages[i-1].id;
              const unlocked=cleared.has(prev);
              const isCleared=cleared.has(s.id);
              return <button key={s.id} onClick={()=>{if(unlocked){SE.tap();setStorySt(s);}}} style={{
                padding:"12px 14px",borderRadius:16,
                border:`1.5px solid ${unlocked?s.color+'44':'rgba(255,255,255,.05)'}`,
                background:unlocked?`linear-gradient(135deg,${s.color}0a,${s.color}04)`:'rgba(255,255,255,.01)',
                color:"#fff",cursor:unlocked?"pointer":"default",opacity:unlocked?1:.35,textAlign:"left",
                position:"relative",overflow:"hidden"
              }}>
                {isCleared && <div style={{position:"absolute",top:0,right:0,padding:"3px 10px",borderRadius:"0 14px 0 10px",background:"rgba(74,222,128,.15)",border:"1px solid rgba(74,222,128,.2)"}}>
                  <span style={{fontSize:10,color:"#4ade80",fontWeight:800}}>✓ {t("storyClear")}</span>
                </div>}
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:52,height:52,borderRadius:14,background:`${s.color}12`,border:`1px solid ${s.color}33`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
                    {unlocked ? <MonsterSVG id={s.id} size={48} color={s.color} /> : <span style={{fontSize:24,opacity:.5}}>🔒</span>}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:15,fontWeight:900}}>{unlocked?`EX${s.id-10}  ${s.name}`:t("storyLocked")}</div>
                    <div style={{fontSize:12,color:"#ef4444",fontWeight:700,marginTop:2}}>★★★</div>
                  </div>
                </div>
              </button>;
            })}
          </>}
        </div>
        <button onClick={()=>setMode(null)} style={{marginTop:18,padding:"10px 24px",borderRadius:12,border:"1px solid rgba(255,255,255,.08)",background:"transparent",color:"rgba(255,255,255,.35)",fontSize:14,fontWeight:700,cursor:"pointer"}}>{t("back")}</button>
      </>);
    }
    // ステージ詳細（モンスターイラスト大表示 + 博士の会話）
    return wrap(<>
      {/* モンスターイラスト（大） */}
      <div style={{position:"relative",marginBottom:12,animation:"fadeScale .5s ease both"}}>
        <div style={{filter:`drop-shadow(0 8px 40px ${storySt.color}66)`,animation:"fl 3s ease-in-out infinite"}}>
          <MonsterSVG id={storySt.id} size={140} color={storySt.color} />
        </div>
        {/* 背景グロウ */}
        <div style={{position:"absolute",inset:"-30px",borderRadius:"50%",background:`radial-gradient(circle,${storySt.color}22,transparent 70%)`,zIndex:-1,animation:"pulseRing 3s ease-in-out infinite"}} />
      </div>
      <h2 style={{fontSize:28,fontWeight:900,color:"#fff",margin:"0 0 2px",textShadow:`0 0 20px ${storySt.color}44`}}>{storySt.name}</h2>
      <div style={{fontSize:14,color:storySt.color,fontWeight:700,marginBottom:16}}>{storySt.ex?`EX ${t("storyStage")} ${storySt.id-10}`:`${t("storyStage")} ${storySt.id}`}</div>
      
      {/* 博士の会話ボックス */}
      <div style={{display:"flex",gap:12,alignItems:"flex-start",maxWidth:320,width:"100%",marginBottom:20,animation:"slideUp .5s .2s ease both",opacity:0}}>
        <div style={{flexShrink:0,filter:"drop-shadow(0 4px 10px rgba(167,139,250,.2))"}}>
          <DrSVG size={56} />
        </div>
        <div style={{flex:1,padding:14,borderRadius:"4px 16px 16px 16px",background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",backdropFilter:"blur(4px)",position:"relative"}}>
          {/* 吹き出し三角 */}
          <div style={{position:"absolute",left:-6,top:12,width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:"6px solid rgba(255,255,255,.08)"}} />
          <p style={{fontSize:14,color:"rgba(255,255,255,.7)",lineHeight:1.8,margin:0}}>{storySt.intro}</p>
        </div>
      </div>
      
      {/* 難易度・ルール情報 */}
      <div style={{display:"flex",gap:12,marginBottom:20,animation:"slideUp .5s .35s ease both",opacity:0}}>
        <div style={{padding:"8px 14px",borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",textAlign:"center"}}>
          <div style={{fontSize:10,color:"rgba(255,255,255,.3)",fontWeight:700}}>難易度</div>
          <div style={{fontSize:14,fontWeight:900,color:{easy:"#4ade80",normal:"#fbbf24",hard:"#ef4444"}[storySt.diff]}}>{{easy:"★☆☆",normal:"★★☆",hard:"★★★"}[storySt.diff]}</div>
        </div>
        <div style={{padding:"8px 14px",borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",textAlign:"center"}}>
          <div style={{fontSize:10,color:"rgba(255,255,255,.3)",fontWeight:700}}>手札上限</div>
          <div style={{fontSize:14,fontWeight:900,color:"#a78bfa"}}>{storySt.hl}枚</div>
        </div>
        {storySt.deckSize && <div style={{padding:"8px 14px",borderRadius:12,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",textAlign:"center"}}>
          <div style={{fontSize:10,color:"rgba(255,255,255,.3)",fontWeight:700}}>山札</div>
          <div style={{fontSize:14,fontWeight:900,color:"#ef4444"}}>{storySt.deckSize}枚</div>
        </div>}
      </div>
      
      <PremBtn onClick={()=>{SE.gStart();onStartStory(storySt);}} gradient={`linear-gradient(135deg,${storySt.color}cc,${storySt.color})`} shadow={`${storySt.color}44`} style={{padding:"16px 48px",fontSize:20,borderRadius:20,animation:"slideUp .5s .5s ease both",opacity:0}}>⚔️ {t("storyFight")}</PremBtn>
      <button onClick={()=>setStorySt(null)} style={{marginTop:14,padding:"10px 24px",borderRadius:12,border:"1px solid rgba(255,255,255,.08)",background:"transparent",color:"rgba(255,255,255,.35)",fontSize:14,fontWeight:700,cursor:"pointer"}}>{t("storyBack")}</button>
    </>);
  }

  // ─ マルチプレイヤーセットアップ ─
  if(mode==="multi") return wrap(<>
    <div style={{fontSize:52,marginBottom:8}}>👫</div>
    <h2 style={{fontSize:22,fontWeight:900,color:"#fff",margin:"0 0 24px"}}>{t("multi")}</h2>
    <div style={{fontSize:14,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:8}}>{t("howMany")}</div>
    <div style={{display:"flex",gap:8,marginBottom:16}}>{[2,3,4].map(n=><SBtn key={n} l={`${n}${t("unitP")}`} a={pc===n} co="#8b5cf6" onClick={()=>setPc(n)} />)}</div>
    {Array.from({length:pc}).map((_,i)=><input key={i} value={names[i]} onChange={e=>{const nn=[...names];nn[i]=e.target.value;setNames(nn);}} placeholder={`${i+1}${t("pn")}`} style={{width:"100%",maxWidth:280,padding:"12px 16px",borderRadius:14,border:"1.5px solid rgba(255,255,255,.08)",background:"rgba(255,255,255,.04)",color:"#fff",fontSize:15,outline:"none",fontWeight:600,marginBottom:8,boxSizing:"border-box"}} />)}
    <div style={{fontSize:14,color:"rgba(255,255,255,.4)",fontWeight:700,marginBottom:8,marginTop:4}}>🃏 {t("hlLabel")}</div>
    <div style={{display:"flex",gap:6,marginBottom:24,flexWrap:"wrap",justifyContent:"center"}}>{[7,8,9,10].map(n=><SBtn key={n} l={`${n}${t("mai")}${n===7?`（${t("basic")}）`:""}`} a={hl===n} onClick={()=>setHL(n)} />)}</div>
    <PremBtn onClick={()=>{SE.gStart();const pn=Array.from({length:pc},(_,i)=>names[i].trim()||`P${i+1}`);onStart(pn,hl);}} gradient="linear-gradient(135deg,#6d28d9,#8b5cf6)" shadow="rgba(109,40,217,.35)" style={{padding:"16px 48px",fontSize:20,borderRadius:20}}>🎮 {t("gstart")}</PremBtn>
    <Stg />
    <div style={{marginTop:12,padding:18,borderRadius:20,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",maxWidth:300,width:"100%"}}>
      <div style={{fontSize:14,fontWeight:900,color:"#a78bfa",marginBottom:8}}>🎴 {t("rules")}</div>
      <div style={{fontSize:13,color:"rgba(255,255,255,.45)",lineHeight:2}}>① {t("r1")}<br/>② {t("r2")}<br/>③ {t("r3")}<br/>④ {t("hand")}{hl}{t("r4")}<br/>⑤ {t("r5")}<br/>{t("r6")}<br/>{t("r7")}</div>
    </div>
    <PremPanel />
    <button onClick={()=>setMode(null)} style={{marginTop:14,padding:"10px 24px",borderRadius:12,border:"1px solid rgba(255,255,255,.08)",background:"transparent",color:"rgba(255,255,255,.35)",fontSize:14,fontWeight:700,cursor:"pointer"}}>{t("back")}</button>
  </>);
}

/* ═══════════════════════════════════════════════════════════
   🎮 ゲーム画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Game({state,pi,onDraw,onBond,onPass,onDiscard,hl,onFinish,premium,onQuit}) {
  const t=useT();
  const pl=state.pl[pi],hand=pl.hand;
  const PLCOLORS=[
    {bg:"linear-gradient(180deg,#060612,#0c0c24)",accent:"#a78bfa",headerBg:"rgba(167,139,250,.05)",border:"rgba(167,139,250,.1)"},
    {bg:"linear-gradient(180deg,#060e12,#0a1c10)",accent:"#4ade80",headerBg:"rgba(74,222,128,.05)",border:"rgba(74,222,128,.1)"},
    {bg:"linear-gradient(180deg,#120606,#241010)",accent:"#fb923c",headerBg:"rgba(251,146,60,.05)",border:"rgba(251,146,60,.1)"},
    {bg:"linear-gradient(180deg,#121206,#242010)",accent:"#fbbf24",headerBg:"rgba(251,191,36,.05)",border:"rgba(251,191,36,.1)"}
  ];
  const pco=PLCOLORS[pi%PLCOLORS.length];
  const [sel,setSel]=useState(new Set());
  const [showC,setSC]=useState(false);
  const [drew,setDrew]=useState(false);
  const [drawnC,setDrC]=useState(null);
  const [bonded,setBon]=useState(false);
  const [cel,setCel]=useState(null);
  const selC=hand.filter(c=>sel.has(c.id));
  const selCnt=cntA(selC);
  const match=COMPS.find(c=>(premium||c.free)&&Object.entries(c.a).every(([s,n])=>(selCnt[s]||0)===n)&&Object.entries(selCnt).every(([s,n])=>(c.a[s]||0)===n));
  const hc=cntA(hand);
  const poss=findP(hc,premium);
  const psc=pl.bonds.reduce((s,b)=>s+b.p,0);
  const overLimit=hand.length>hl;
  const toggle=card=>{if(cel)return;setSel(p=>{const n=new Set(p);if(n.has(card.id)){n.delete(card.id);SE.cardDesel();}else{n.add(card.id);SE.cardSel();}return n;});};
  const doDiscard=cardId=>{if(cel)return;SE.discard();onDiscard(cardId);};
  const doDraw=()=>{if(cel)return;const d=onDraw();if(d){SE.cardDraw();setDrew(true);setDrC(d);}};
  const doBond=()=>{if(match&&!cel){setCel(match);onBond([...sel],match);setSel(new Set());setBon(true);}};
  const doPass=()=>{if(cel)return;SE.pass();onPass();};
  
  return <div style={{minHeight:"100dvh",display:"flex",flexDirection:"column",background:pco.bg,paddingTop:"env(safe-area-inset-top)"}}>
    {cel && <Celeb comp={cel} onDone={()=>setCel(null)} />}
    
    {/* ── ヘッダー ── */}
    <div style={{padding:"max(14px, env(safe-area-inset-top)) 16px 12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:pco.headerBg,borderBottom:`1px solid ${pco.border}`,backdropFilter:"blur(12px)"}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <button onClick={()=>{if(window.confirm(t("quitConfirm"))){BGM.stop();onQuit();}}} style={{padding:"5px 10px",borderRadius:10,border:"1px solid rgba(255,255,255,.1)",background:"rgba(255,255,255,.04)",color:"rgba(255,255,255,.35)",fontSize:11,fontWeight:700,cursor:"pointer"}}>{t("quit")}</button>
        <span style={{fontSize:16,fontWeight:900,color:pco.accent}}>{pl.name}</span>
        <span style={{fontSize:12,color:"rgba(255,255,255,.25)"}}>{t("tl")}</span>
      </div>
      <div style={{display:"flex",gap:14,alignItems:"center"}}>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:9,color:"rgba(255,255,255,.25)",fontWeight:700,letterSpacing:".05em"}}>{t("sc")}</div>
          <div style={{fontSize:20,fontWeight:900,color:"#fbbf24",textShadow:"0 0 12px rgba(251,191,36,.3)"}}>{psc}</div>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:9,color:"rgba(255,255,255,.25)",fontWeight:700,letterSpacing:".05em"}}>{t("dk")}</div>
          <div style={{fontSize:20,fontWeight:900,color:state.deck.length>20?pco.accent:"#ef4444",textShadow:state.deck.length<=10?"0 0 12px rgba(239,68,68,.3)":"none"}}>{state.deck.length}</div>
        </div>
      </div>
    </div>
    
    {/* ── 既存の結合表示 ── */}
    {pl.bonds.length>0 && <div style={{padding:"8px 16px",display:"flex",flexWrap:"wrap",gap:6,background:"rgba(255,255,255,.01)",borderBottom:"1px solid rgba(255,255,255,.04)"}}>
      {pl.bonds.map((b,i)=><Badge key={i} comp={b} />)}
    </div>}
    
    {/* ── 引いたカード ── */}
    {drawnC && <div style={{padding:"10px 16px",display:"flex",alignItems:"center",gap:10,background:`${pco.accent}08`,borderBottom:`1px solid ${pco.accent}11`,animation:"su .3s ease"}}>
      <span style={{fontSize:13,color:pco.accent,fontWeight:700}}>{t("drawn")}</span>
      <Card card={drawnC} />
    </div>}
    
    {bonded&&!cel && <div style={{padding:"10px 16px",textAlign:"center",background:"rgba(74,222,128,.06)",borderBottom:"1px solid rgba(74,222,128,.1)"}}>
      <span style={{fontSize:14,color:"#4ade80",fontWeight:800}}>{t("bondOk")}</span>
    </div>}
    
    {overLimit && <div style={{padding:"10px 16px",textAlign:"center",background:"rgba(239,68,68,.06)",borderBottom:"1px solid rgba(239,68,68,.1)"}}>
      <span style={{fontSize:14,color:"#ef4444",fontWeight:800}}>⚠️ {t("hand")}{hl}{t("discW")}</span>
    </div>}
    
    {/* ── メインエリア ── */}
    <div style={{flex:1,padding:"14px 12px",overflowY:"auto"}}>
      <div style={{fontSize:13,color:"rgba(255,255,255,.3)",marginBottom:8,paddingLeft:4,fontWeight:700}}>🃏 {t("hand")} ({hand.length}{t("mai")}) {t("tapS")}</div>
      
      {(()=>{
        const order="H O C N S Cl Na Cu Ag Fe".split(" ");
        const sorted=[...hand].sort((a,b)=>order.indexOf(a.s)-order.indexOf(b.s));
        let lastS="";
        return <div style={{display:"flex",flexWrap:"wrap",gap:7,justifyContent:"center"}}>
          {sorted.map((c,i)=>{
            const gap=c.s!==lastS&&i>0; lastS=c.s;
            return <div key={c.id} style={{position:"relative",marginLeft:gap?10:0}}>
              <Card card={c} sel={sel.has(c.id)} onTap={toggle} dl={i*.03} />
              {overLimit && <button onClick={()=>doDiscard(c.id)} style={{
                position:"absolute",top:-6,right:-6,width:24,height:24,borderRadius:12,border:"none",
                background:"linear-gradient(135deg,#ef4444,#dc2626)",color:"#fff",fontSize:14,fontWeight:900,
                cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
                boxShadow:"0 2px 8px rgba(239,68,68,.5)",lineHeight:1,zIndex:2
              }}>×</button>}
            </div>;
          })}
        </div>;
      })()}
      
      {/* ── 合成プレビュー ── */}
      {match&&!cel && <div style={{marginTop:18,padding:18,borderRadius:18,background:"rgba(74,222,128,.04)",border:"1.5px solid rgba(74,222,128,.15)",textAlign:"center",animation:"fadeScale .3s ease",backdropFilter:"blur(4px)"}}>
        <div style={{fontSize:13,color:"#4ade80",fontWeight:700,marginBottom:4}}>{t("canB")}</div>
        <div style={{fontSize:36}}>{match.e}</div>
        <div style={{fontSize:20,fontWeight:900,color:"#fff"}}>{t(match.k)}</div>
        <div style={{fontSize:14,color:"rgba(255,255,255,.4)"}}>
          {match.f}（+{match.p}{t("pt")}）
        </div>
        {match.sp && <div style={{fontSize:12,color:"#c084fc",fontWeight:800,marginTop:2}}>💎 {t("sp")}</div>}
        <PremBtn onClick={doBond} gradient="linear-gradient(135deg,#059669,#34d399)" shadow="rgba(5,150,105,.35)" style={{marginTop:12,padding:"12px 36px",fontSize:18}}>{t("bBtn")}</PremBtn>
      </div>}
      
      <Inv state={state} myHand={hand} />
      
      {/* ── 化合物リスト ── */}
      <div style={{marginTop:8}}>
        <button onClick={()=>{setSC(!showC);SE.tap();}} style={{
          width:"100%",padding:12,borderRadius:14,border:"1px solid rgba(255,255,255,.06)",
          background:"rgba(255,255,255,.03)",color:"rgba(255,255,255,.4)",fontSize:13,fontWeight:700,cursor:"pointer"
        }}>📋 {showC?t("cpC"):t("cpO")}</button>
        {showC && <div style={{marginTop:6,padding:12,borderRadius:14,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.04)",maxHeight:350,overflowY:"auto",animation:"su .3s ease"}}>
          {poss.length>0 && <div style={{marginBottom:12}}>
            <div style={{fontSize:13,color:"#4ade80",fontWeight:900,marginBottom:6}}>{t("now")}</div>
            {poss.map((c,i)=><div key={i} style={{padding:"8px 6px",marginBottom:6,borderRadius:10,background:"rgba(74,222,128,.03)",border:c.sp?"1.5px solid #c084fc":"1px solid rgba(74,222,128,.1)"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{fontSize:14,color:"#4ade80",fontWeight:800}}>{c.e} {t(c.k)}</span>
                <span style={{fontSize:14,fontWeight:900,color:"#000",background:c.sp?"#c084fc":"#4ade80",borderRadius:8,padding:"2px 8px"}}>{c.p}{t("pt")}</span>
              </div>
              <div style={{display:"flex",gap:3,flexWrap:"wrap",alignItems:"center"}}>
                {Object.entries(c.a).map(([s,n])=>{const inf=getAI(s);return Array.from({length:n}).map((_,j)=><div key={`${s}${j}`} style={{width:32,height:38,borderRadius:7,background:"rgba(255,255,255,.04)",border:`1.5px solid ${inf.g}33`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:10}}>{inf.e}</span><span style={{fontSize:11,fontWeight:900,color:inf.g}}>{s}</span>
                </div>);})}
                <span style={{color:"rgba(74,222,128,.3)"}}>→</span>
                <span style={{fontSize:12,color:"#4ade80",fontWeight:600}}>{c.f}</span>
              </div>
            </div>)}
          </div>}
          <div style={{fontSize:13,color:"rgba(255,255,255,.25)",fontWeight:900,marginBottom:6}}>{t("all")}</div>
          {[...COMPS].sort((a,b)=>a.p-b.p).map((c,i)=>{
            const isLocked=!premium&&!c.free;
            return <div key={i} style={{padding:"8px 6px",marginBottom:6,borderRadius:10,background:isLocked?"rgba(255,255,255,.005)":"rgba(255,255,255,.015)",border:c.sp?"1.5px solid #c084fc":isLocked?"1px solid rgba(255,255,255,.02)":"1px solid rgba(255,255,255,.04)",opacity:isLocked?.45:1}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{fontSize:13,color:isLocked?"rgba(255,255,255,.25)":"rgba(255,255,255,.55)",fontWeight:700}}>{isLocked?"🔒 ":""}{c.e} {t(c.k)}{c.sp&&<span style={{marginLeft:4,fontSize:10,color:"#c084fc"}}>{t("sp")}</span>}</span>
                <span style={{fontSize:14,fontWeight:900,color:isLocked?"rgba(255,255,255,.25)":"#000",background:isLocked?"rgba(255,255,255,.06)":c.sp?"#c084fc":c.p>=8?"#f97316":c.p>=5?"#fbbf24":c.p>=4?"#fb923c":"#4ade80",borderRadius:8,padding:"2px 8px",minWidth:40,textAlign:"center"}}>{c.p}{t("pt")}</span>
              </div>
              <div style={{display:"flex",gap:3,flexWrap:"wrap",alignItems:"center"}}>
                {Object.entries(c.a).map(([s,n])=>{const inf=getAI(s);return Array.from({length:n}).map((_,j)=><div key={`${s}${j}`} style={{width:32,height:38,borderRadius:7,background:isLocked?"rgba(255,255,255,.015)":"rgba(255,255,255,.03)",border:`1.5px solid ${isLocked?'rgba(255,255,255,.04)':inf.g+'22'}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontSize:10,opacity:isLocked?.3:1}}>{inf.e}</span><span style={{fontSize:11,fontWeight:900,color:isLocked?"rgba(255,255,255,.15)":inf.g}}>{s}</span>
                </div>);})}
                <span style={{color:"rgba(255,255,255,.1)"}}>→</span>
                <span style={{fontSize:12,color:isLocked?"rgba(255,255,255,.15)":"rgba(255,255,255,.35)",fontWeight:600}}>{c.f}</span>
              </div>
            </div>;
          })}
        </div>}
      </div>
      
      {/* ── スコアボード ── */}
      <div style={{marginTop:12}}>
        <div style={{fontSize:13,color:"rgba(255,255,255,.3)",marginBottom:4,paddingLeft:4,fontWeight:700}}>{t("scL")}</div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {state.pl.map((p,i)=><div key={i} style={{padding:"8px 14px",borderRadius:12,background:i===pi?`${pco.accent}0a`:"rgba(255,255,255,.02)",border:i===pi?`1.5px solid ${pco.accent}33`:"1px solid rgba(255,255,255,.04)"}}>
            <span style={{fontSize:13,color:i===pi?pco.accent:"rgba(255,255,255,.35)",fontWeight:700}}>{p.name}</span>
            <span style={{fontSize:15,color:"#fbbf24",fontWeight:900,marginLeft:6}}>{p.bonds.reduce((s,b)=>s+b.p,0)}{t("pt")}</span>
          </div>)}
        </div>
      </div>
    </div>
    
    {/* ── アクションバー ── */}
    <div style={{padding:"12px 16px max(28px, env(safe-area-inset-bottom))",borderTop:"1px solid rgba(255,255,255,.05)",display:"flex",gap:10,background:"rgba(6,6,18,.97)",backdropFilter:"blur(12px)"}}>
      {!drew&&!bonded
        ? state.deck.length>0
          ? <PremBtn onClick={doDraw} disabled={!!cel} gradient={`linear-gradient(135deg,#6d28d9,${pco.accent})`} shadow="rgba(109,40,217,.35)" style={{flex:1,padding:16,fontSize:18,borderRadius:18}}>{t("drB")}</PremBtn>
          : <PremBtn onClick={onFinish} gradient="linear-gradient(135deg,#ea580c,#f97316)" shadow="rgba(234,88,12,.35)" style={{flex:1,padding:16,fontSize:18,borderRadius:18,"--g":"rgba(249,115,22,.4)",animation:"pg 1.5s ease-in-out infinite"}}>{t("fin")}</PremBtn>
        : !overLimit&&!cel && <button onClick={doPass} style={{flex:1,padding:16,borderRadius:18,border:"none",background:"linear-gradient(135deg,#334155,#475569)",color:"#fff",fontSize:18,fontWeight:900,cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,.3)"}}>{bonded?t("tEnd"):poss.length>0?t("exp"):t("tEnd")}</button>
      }
    </div>
  </div>;
}

/* ═══════════════════════════════════════════════════════════
   🏆 結果画面 - PREMIUM
   ═══════════════════════════════════════════════════════════ */
function Result({state,onRestart,isCpu,storyStage,onStoryWin}) {
  const t=useT();
  const [ph,setPh]=useState(0);
  const ranks=state.pl.map((p,i)=>({...p,idx:i,sc:p.bonds.reduce((s,b)=>s+b.p,0)})).sort((a,b)=>b.sc-a.sc);
  const win=ranks[0];
  const isDraw=ranks.length>1&&ranks[0].sc===ranks[1].sc;
  const diff=ranks.length>1?ranks[0].sc-ranks[1].sc:0;
  const playerLost=isCpu&&!isDraw&&ranks[0].idx!==0;
  const playerWon=!isDraw&&(!isCpu||ranks[0].idx===0);
  useEffect(()=>{
    BGM.stop(); SE.drum();
    const t1=setTimeout(()=>{setPh(1);playerLost?SE.lose():SE.victory();},1500);
    const t2=setTimeout(()=>setPh(2),2800);
    const t3=setTimeout(()=>setPh(3),3600);
    const t4=setTimeout(()=>setPh(4),4200);
    if(storyStage&&playerWon&&onStoryWin) setTimeout(()=>onStoryWin(),100);
    return ()=>{[t1,t2,t3,t4].forEach(clearTimeout);};
  },[]);
  const conf=useRef(Array.from({length:40},(_,i)=>({id:i,x:Math.random()*100,dl:Math.random()*3,dur:2+Math.random()*3,co:["#ef4444","#fbbf24","#4ade80","#38bdf8","#a78bfa","#f97316","#22d3ee","#c084fc"][i%8],sz:6+Math.random()*8}))).current;
  const fws=useRef(Array.from({length:12},(_,i)=>({id:i,x:15+Math.random()*70,y:10+Math.random()*40,dl:.5+Math.random()*2.5,sz:40+Math.random()*60,co:["#ef4444","#fbbf24","#4ade80","#a78bfa","#22d3ee","#f97316"][i%6]}))).current;
  const raindrops=useRef(Array.from({length:30},(_,i)=>({id:i,x:Math.random()*100,dl:Math.random()*4,dur:1.5+Math.random()*2,sz:2+Math.random()*3}))).current;
  
  return <div style={{minHeight:"100dvh",display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 20px",paddingTop:20,background:playerLost?"radial-gradient(ellipse at 50% 30%,rgba(100,100,180,.06) 0%,transparent 50%),linear-gradient(180deg,#060612,#0a0e20)":isDraw?"radial-gradient(ellipse at 50% 30%,rgba(180,180,180,.05) 0%,transparent 50%),linear-gradient(180deg,#060612,#0c0c24)":"radial-gradient(ellipse at 50% 30%,rgba(251,191,36,.08) 0%,transparent 50%),linear-gradient(180deg,#060612,#0c0c24)",position:"relative",overflow:"hidden"}}>
    <Orbs n={10} co={playerLost?"rgba(100,130,200,.03)":"rgba(251,191,36,.03)"} />
    <NoiseOverlay />
    
    {ph>=1&&playerWon&&conf.map(c=><div key={c.id} style={{position:"fixed",left:`${c.x}%`,top:-20,width:c.sz,height:c.sz*1.4,background:c.co,borderRadius:2,opacity:0,animation:`cf ${c.dur}s ${c.dl}s linear infinite`,zIndex:5}} />)}
    {ph>=1&&playerWon&&fws.map(f=><div key={f.id} style={{position:"fixed",left:`${f.x}%`,top:`${f.y}%`,width:f.sz,height:f.sz,borderRadius:"50%",border:`2px solid ${f.co}`,opacity:0,animation:`fw 1.2s ${f.dl}s ease-out infinite`,boxShadow:`0 0 20px ${f.co}`,zIndex:4}} />)}
    {ph>=1&&playerLost&&raindrops.map(r=><div key={r.id} style={{position:"fixed",left:`${r.x}%`,top:0,width:r.sz,height:r.sz*8,background:"linear-gradient(180deg,transparent,rgba(150,180,220,.3))",borderRadius:"0 0 2px 2px",opacity:0,animation:`rain ${r.dur}s ${r.dl}s linear infinite`,zIndex:5}} />)}
    
    <div style={{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:380}}>
      {ph===0 && <div style={{textAlign:"center",marginTop:"30vh"}}>
        <div style={{fontSize:48,animation:"fl .5s ease-in-out infinite"}}>🥁</div>
        <div style={{fontSize:20,fontWeight:900,color:"rgba(255,255,255,.5)",marginTop:12,animation:"kt .5s ease-in-out infinite"}}>{t("res")}</div>
      </div>}
      
      {ph>=1&&playerWon&&<>
        <div style={{fontSize:88,animation:"crb .8s cubic-bezier(.34,1.56,.64,1) both",filter:"drop-shadow(0 8px 40px rgba(251,191,36,.5))",marginBottom:8}}>👑</div>
        <div style={{fontSize:36,fontWeight:900,color:"#fff","--gc":"rgba(251,191,36,.5)",animation:"gp 2s ease-in-out infinite",textAlign:"center"}}>{win.name}<br/><span style={{color:"#fbbf24"}}>{t("win")}</span></div>
      </>}
      {ph>=1&&playerLost&&<>
        <div style={{fontSize:88,animation:"sadBounce .8s ease both",filter:"drop-shadow(0 4px 15px rgba(100,130,200,.3))",marginBottom:8}}>😢</div>
        <div style={{fontSize:30,fontWeight:900,color:"rgba(150,180,220,.85)",textAlign:"center",animation:"su .5s ease both"}}>{t("loseMsg")}</div>
        <div style={{fontSize:16,color:"rgba(150,180,220,.45)",marginTop:6,animation:"su .5s .2s ease both",opacity:0}}>{win.name}{t("win")}</div>
      </>}
      {ph>=1&&isDraw&&<>
        <div style={{fontSize:88,animation:"crb .8s cubic-bezier(.34,1.56,.64,1) both",marginBottom:8}}>🤝</div>
        <div style={{fontSize:36,fontWeight:900,color:"rgba(200,200,200,.85)",textAlign:"center"}}>{t("tie")}</div>
      </>}
      
      {ph>=2 && <div style={{marginTop:16,animation:"sp .5s cubic-bezier(.34,1.56,.64,1) both"}}>
        <div style={{fontSize:64,fontWeight:900,color:playerLost?"rgba(150,180,220,.65)":"#fbbf24",textShadow:playerLost?"none":"0 0 40px rgba(251,191,36,.4),0 0 80px rgba(251,191,36,.2)",textAlign:"center"}}>{win.sc}<span style={{fontSize:28}}>{t("pt")}</span></div>
        {!isDraw&&diff>0 && <div style={{textAlign:"center",marginTop:4,fontSize:16,color:playerLost?"rgba(150,180,220,.4)":"#f97316",fontWeight:800,animation:"su .4s .3s ease both",opacity:0}}>{playerLost?`📉 ${diff}${t("pdif")}`:`🔥 ${diff}${t("more")}`}</div>}
      </div>}
      
      {ph>=3 && <div style={{width:"100%",display:"flex",flexDirection:"column",gap:10,marginTop:20}}>
        {ranks.map((p,r)=><div key={p.idx} style={{padding:16,borderRadius:18,background:r===0?playerLost?"rgba(100,130,200,.04)":"rgba(251,191,36,.05)":"rgba(255,255,255,.02)",border:r===0?playerLost?"1.5px solid rgba(100,130,200,.15)":"1.5px solid rgba(251,191,36,.2)":"1px solid rgba(255,255,255,.04)",boxShadow:r===0?playerLost?"0 4px 20px rgba(100,130,200,.08)":"0 4px 30px rgba(251,191,36,.15)":"none",animation:`slideUp .4s ${r*.15}s ease both`,opacity:0}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:p.bonds.length>0?8:0}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:24}}>{"🥇🥈🥉4️⃣"[r]?["🥇","🥈","🥉","4️⃣"][r]:"4️⃣"}</span>
              <span style={{fontSize:16,fontWeight:900,color:"#fff"}}>{p.name}</span>
            </div>
            <span style={{fontSize:22,fontWeight:900,color:r===0?playerLost?"rgba(150,180,220,.7)":"#fbbf24":"rgba(255,255,255,.5)"}}>{p.sc}<span style={{fontSize:14}}>{t("pt")}</span></span>
          </div>
          {p.bonds.length>0 && <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {p.bonds.map((b,bi)=><Badge key={bi} comp={b} />)}
          </div>}
          {p.bonds.length===0 && <div style={{fontSize:12,color:"rgba(255,255,255,.2)"}}>{t("noB")}</div>}
        </div>)}
      </div>}
      
      {ph>=4 && <div style={{marginTop:24,animation:"su .4s ease both",width:"100%",display:"flex",flexDirection:"column",gap:10,alignItems:"center"}}>
        {storyStage && <div style={{padding:18,borderRadius:16,background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",width:"100%",marginBottom:4}}>
          {/* 博士の感想 + イラスト */}
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{flexShrink:0,filter:"drop-shadow(0 4px 10px rgba(167,139,250,.2))"}}>
              <DrSVG size={52} />
            </div>
            <div style={{flex:1,padding:12,borderRadius:"4px 14px 14px 14px",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.06)",position:"relative"}}>
              <div style={{position:"absolute",left:-6,top:10,width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:"6px solid rgba(255,255,255,.06)"}} />
              <p style={{fontSize:14,color:"rgba(255,255,255,.65)",lineHeight:1.8,margin:0}}>{playerWon?storyStage.win:storyStage.lose}</p>
            </div>
          </div>
          {playerLost&&<div style={{fontSize:13,color:"rgba(255,255,255,.35)",marginTop:8,textAlign:"center"}}>{t("retry")}</div>}
        </div>}
        <PremBtn onClick={onRestart} gradient="linear-gradient(135deg,#ea580c,#f97316)" shadow="rgba(234,88,12,.35)" style={{padding:"16px 48px",fontSize:20,borderRadius:20,width:"100%",maxWidth:280}}>{t("again")}</PremBtn>
      </div>}
    </div>
  </div>;
}

/* ═══════════════════════════════════════════════════════════
   🎮 App
   ═══════════════════════════════════════════════════════════ */
window.__App = function App() {
  const [scr,setScr]=useState("title");
  const [gs,setGS]=useState(null);
  const [cp,setCP]=useState(0);
  const [sp,setSP]=useState(false);
  const [tc,setTC]=useState(0);
  const [lrs,setLRS]=useState(false);
  const [lrsp,setLRSP]=useState(-1);
  const [isCpu,setIC]=useState(false);
  const [cpuP,setCpuP]=useState(new Set());
  const [cpuD,setCpuD]=useState("normal");
  const [cpuOv,setCpuOv]=useState(null);
  const [hl,setHL]=useState(7);
  const [lang,setLang]=useState("kanji");
  const [premium,setPremium]=useState(true);
  const [cleared,setCleared]=useState(new Set());
  const [storyStage,setStoryStage]=useState(null);

  useEffect(()=>{const handler=e=>{if(scr==="game"){e.preventDefault();e.returnValue="";}};window.addEventListener("beforeunload",handler);return ()=>window.removeEventListener("beforeunload",handler);},[scr]);
  
  const init=(pn,cs,d,lim,testCards)=>{let deck=buildDeck();if(testCards)deck=deck.slice(0,testCards);const pl=pn.map(name=>({name,hand:[],bonds:[]}));const h=lim||7;setHL(h);setGS({deck,pl,dp:[],hl:h});setCP(0);setSP(!cs||!cs.has(0));setScr("game");setTC(0);setLRS(false);setLRSP(-1);setCpuP(cs||new Set());setIC(!!cs);setCpuD(d||"normal");setCpuOv(null);};
  
  const draw=useCallback(()=>{if(!gs||gs.deck.length===0)return null;const nd=[...gs.deck],dr=nd.pop();const np=gs.pl.map((p,i)=>i===cp?{...p,hand:[...p.hand,dr]}:p);setGS({...gs,deck:nd,pl:np});if(nd.length===0&&!lrs){setLRS(true);setLRSP(cp);}return dr;},[gs,cp,lrs]);
  
  const bond=useCallback((ids,comp)=>{const s=new Set(ids);setGS(prev=>({...prev,pl:prev.pl.map((p,i)=>i===cp?{...p,hand:p.hand.filter(c=>!s.has(c.id)),bonds:[...p.bonds,comp]}:p)}));},[cp]);
  
  const disc=useCallback(cid=>{setGS(prev=>{let d=null;const np=prev.pl.map((p,i)=>{if(i===cp){d=p.hand.find(c=>c.id===cid);return {...p,hand:p.hand.filter(c=>c.id!==cid)};}return p;});return {...prev,pl:np,dp:[...(prev.dp||[]),...(d?[d]:[])]};});},[cp]);
  
  const goNext=useCallback((g,fi)=>{const n=g.pl.length,nx=(fi+1)%n;setTC(t=>t+1);if(lrs&&nx===(lrsp+1)%n){setScr("result");return;}setCP(nx);if(cpuP.has(nx)){setSP(false);setTimeout(()=>runCpu(g,nx),600);}else if(isCpu){setSP(false);}else{setSP(true);}},[lrs,lrsp,cpuP,isCpu]);
  
  const advance=useCallback(()=>{setGS(g=>{if(g)goNext(g,cp);return g;});},[cp,goNext]);
  
  const runCpu=useCallback((ps,ci)=>{
    setGS(cs=>{
      const g=cs||ps; const cn=g.pl[ci].name;
      if(g.deck.length>0){
        const nd=[...g.deck],dr=nd.pop();
        const np=g.pl.map((p,i)=>i===ci?{...p,hand:[...p.hand,dr]}:p);
        let ns={...g,deck:nd,pl:np};
        if(nd.length===0&&!lrs){setLRS(true);setLRSP(ci);}
        const uh=np[ci].hand;
        if(uh.length>(g.hl||7)){const di=cpuDiscard(uh,cpuD),dc=uh.find(c=>c.id===di);ns={...ns,pl:ns.pl.map((p,i)=>i===ci?{...p,hand:uh.filter(c=>c.id!==di)}:p),dp:[...(ns.dp||[]),...(dc?[dc]:[])]};}
        const fh=ns.pl[ci].hand,bc=cpuBond(fh,cpuD,premium);
        if(bc){const ids=cpuCards(fh,bc),idS=new Set(ids);ns={...ns,pl:ns.pl.map((p,i)=>i===ci?{...p,hand:p.hand.filter(c=>!idS.has(c.id)),bonds:[...p.bonds,bc]}:p)};setCpuOv({name:cn,action:"bond",comp:bc});const fs=ns;setTimeout(()=>{setCpuOv(null);setCP(ci);setTimeout(()=>{setGS(fs);goNext(fs,ci);},100);},2200);return ns;}
        else{setCpuOv({name:cn,action:"pass"});const fs=ns;setTimeout(()=>{setCpuOv(null);setCP(ci);setTimeout(()=>{setGS(fs);goNext(fs,ci);},100);},1400);return ns;}
      } else {setCpuOv({name:cn,action:"pass"});setTimeout(()=>{setCpuOv(null);setScr("result");},1200);}
      return g;
    });
  },[cpuD,lrs,lrsp,goNext]);
  
  const restart=()=>{setScr("title");setGS(null);setCP(0);setIC(false);setCpuP(new Set());setCpuOv(null);setStoryStage(null);if(BGM.on())BGM.start("title");};
  const finishGame=()=>{setScr("result");};
  const startStory=stage=>{const stageHl=stage.hl||7;let deck=buildDeck();if(stage.deckSize)deck=deck.slice(0,stage.deckSize);const pl=[{name:"あなた",hand:[],bonds:[]},{name:stage.emoji+" "+stage.name,hand:[],bonds:[]}];setHL(stageHl);setGS({deck,pl,dp:[],hl:stageHl});setCP(0);setSP(false);setScr("game");setTC(0);setLRS(false);setLRSP(-1);setCpuP(new Set([1]));setIC(true);setCpuD(stage.diff);setCpuOv(null);setStoryStage(stage);BGM.startForStage(stage.id);};
  const storyWin=()=>{if(storyStage){setCleared(prev=>new Set([...prev,storyStage.id]));}};
  const tx=TX[lang];
  
  return <LangCtx.Provider value={lang}>
    <style>{CSS}</style>
    {scr==="title" && <Title onStart={(n,l)=>init(n,null,null,l)} onStartCpu={(m,c,d,l)=>init([m,...c],new Set(c.map((_,i)=>i+1)),d,l)} onStartStory={startStory} onTest={l=>init(["あなた","コンピュータ🤖"],new Set([1]),"normal",l,6)} lang={lang} setLang={setLang} premium={premium} setPremium={setPremium} cleared={cleared} />}
    {scr==="result"&&gs && <Result state={gs} onRestart={restart} isCpu={isCpu} storyStage={storyStage} onStoryWin={storyWin} />}
    {scr==="game"&&cpuOv && <><BgmBtn /><CpuOv name={cpuOv.name} action={cpuOv.action} comp={cpuOv.comp} /></>}
    {scr==="game"&&!cpuOv&&sp&&!isCpu&&gs && <Pass pn={gs.pl[cp].name} onReady={()=>setSP(false)} info={gs.deck.length>0?`${tx.dkRem} ${gs.deck.length} ${tx.mai}`:tx.lastR} />}
    {scr==="game"&&!cpuOv&&!(sp&&!isCpu)&&gs && <Game key={`${cp}-${tc}`} state={gs} pi={cp} onDraw={draw} onBond={bond} onPass={advance} onDiscard={disc} hl={hl} onFinish={finishGame} premium={premium} onQuit={()=>{setScr("title");setGS(null);}} />}
  </LangCtx.Provider>;
};
