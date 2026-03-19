import { useState } from "react";

const spots = {
  tourist: [
    {
      name: "サグラダ・ファミリア",
      nameEn: "Sagrada Família",
      area: "Eixample",
      emoji: "⛪",
      time: "2-3時間",
      tip: "日本語ガイドツアー予約済み！鐘楼チケットも絶対つけて。2026年はガウディ没後100年＆完成目標年。歴史的瞬間を目撃できる",
      vibe: "必須",
      tag: "建築",
    },
    {
      name: "カサ・バトリョ",
      nameEn: "Casa Batlló",
      area: "Passeig de Gràcia",
      emoji: "🏠",
      time: "1-1.5時間",
      tip: "夜のライトアップ体験「La Pedrera Night Experience」がおすすめ。屋上でカバを飲みながらプロジェクションマッピング",
      vibe: "必須",
      tag: "建築",
    },
    {
      name: "カサ・ミラ（ラ・ペドレラ）",
      nameEn: "Casa Milà / La Pedrera",
      area: "Passeig de Gràcia",
      emoji: "🌊",
      time: "1-1.5時間",
      tip: "ガウディの集合住宅。屋上の煙突群が映画みたい。夜の体験チケットは早めに予約を",
      vibe: "必須",
      tag: "建築",
    },
    {
      name: "グエル公園",
      nameEn: "Park Güell",
      area: "Gràcia（丘の上）",
      emoji: "🦎",
      time: "1.5-2時間",
      tip: "有名なモザイクのトカゲ（El Drac）がいる。朝一番のチケットが空いてて◎。有料エリアは要予約",
      vibe: "定番",
      tag: "建築",
    },
    {
      name: "ゴシック地区",
      nameEn: "Barri Gòtic",
      area: "Ciutat Vella",
      emoji: "🏰",
      time: "2-3時間（散策）",
      tip: "中世の路地迷宮。バルセロナ大聖堂、王の広場、ユダヤ人街跡など。迷子になるのが楽しい",
      vibe: "必須",
      tag: "歴史",
    },
    {
      name: "ピカソ美術館",
      nameEn: "Museu Picasso",
      area: "El Born",
      emoji: "🎨",
      time: "1.5-2時間",
      tip: "ピカソの初期作品が充実。中世の邸宅5棟をつなげた建物自体も見もの。木曜17時以降は無料",
      vibe: "おすすめ",
      tag: "アート",
    },
    {
      name: "ボケリア市場",
      nameEn: "Mercat de la Boqueria",
      area: "La Rambla",
      emoji: "🍓",
      time: "30分-1時間",
      tip: "超有名だけど観光客で混雑。朝の早い時間なら地元感あり。フレッシュジュースとイベリコ生ハムをつまんで",
      vibe: "定番",
      tag: "フード",
    },
    {
      name: "カタルーニャ音楽堂",
      nameEn: "Palau de la Música Catalana",
      area: "El Born近く",
      emoji: "🎵",
      time: "1時間（ガイドツアー）",
      tip: "モデルニスモ建築の最高傑作。ステンドグラスの天井が圧巻。コンサートがあれば最高",
      vibe: "おすすめ",
      tag: "建築",
    },
  ],
  local: [
    {
      name: "ローマ神殿の柱",
      nameEn: "Temple d'August",
      area: "Gòtic（Carrer del Paradís 10）",
      emoji: "🏛️",
      time: "15分",
      tip: "中世の建物の中庭に突然ローマ時代の柱が4本。無料＆ほぼ観光客ゼロ。好奇心で行くと報われる",
      vibe: "穴場",
      tag: "歴史",
    },
    {
      name: "カエルム",
      nameEn: "Caelum",
      area: "Gòtic",
      emoji: "☕",
      time: "30分-1時間",
      tip: "地下に中世の遺跡があるカフェ。スペイン各地の修道院が作ったお菓子を食べられる。雰囲気◎",
      vibe: "穴場",
      tag: "カフェ",
    },
    {
      name: "サンタ・カテリーナ市場",
      nameEn: "Mercat de Santa Caterina",
      area: "El Born",
      emoji: "🌈",
      time: "30分-1時間",
      tip: "ボケリアより全然ローカル。カラフルなモザイク屋根が美しい。元修道院。フードコートも充実",
      vibe: "おすすめ",
      tag: "フード",
    },
    {
      name: "ブンカーズ・デル・カルメル",
      nameEn: "Bunkers del Carmel",
      area: "El Carmel（丘の上）",
      emoji: "🌅",
      time: "1-2時間",
      tip: "内戦時代の対空砲台跡。バルセロナ360度パノラマの絶景。サンセットにカバを持って行くのが正解。TikTokでバズり中だけど価値あり",
      vibe: "必須",
      tag: "絶景",
    },
    {
      name: "グラシア地区",
      nameEn: "Gràcia",
      area: "Gràcia",
      emoji: "🎸",
      time: "2-3時間（散策）",
      tip: "かつて独立した村だった地区。ヴィンテージショップ、ヴィーガンコスメ、独立系書店。プラサ・デル・ソルでベルムットを",
      vibe: "必須",
      tag: "街歩き",
    },
    {
      name: "パーク・デル・ラベリント・ドルタ",
      nameEn: "Parc del Laberint d'Horta",
      area: "Horta",
      emoji: "🌿",
      time: "1-1.5時間",
      tip: "バルセロナ最古の庭園。本物の迷路がある。観光客ほぼゼロ。おとぎ話の世界。入場€2.23",
      vibe: "穴場",
      tag: "自然",
    },
    {
      name: "MACBA＋CCCB",
      nameEn: "MACBA + CCCB",
      area: "El Raval",
      emoji: "🛹",
      time: "1.5-2時間",
      tip: "現代美術館（MACBA）の前はスケーターの聖地。隣のCCCBでは展覧会（World Press Photoなど）。アート好きに◎",
      vibe: "おすすめ",
      tag: "アート",
    },
    {
      name: "ポブレノウ地区",
      nameEn: "Poblenou",
      area: "Poblenou",
      emoji: "🏭",
      time: "2-3時間（散策）",
      tip: "元工場地帯→今はクリエイティブの中心。ストリートアート、おしゃれカフェ、ギャラリー。ブルックリンっぽい雰囲気",
      vibe: "おすすめ",
      tag: "街歩き",
    },
    {
      name: "チョコレート博物館",
      nameEn: "Museu de la Xocolata",
      area: "El Born",
      emoji: "🍫",
      time: "45分-1時間",
      tip: "チョコレートでできた彫刻（サグラダ・ファミリアのレプリカなど）が見られるユニークな博物館",
      vibe: "穴場",
      tag: "ミュージアム",
    },
    {
      name: "カサ・ビセンス",
      nameEn: "Casa Vicens",
      area: "Gràcia",
      emoji: "🧱",
      time: "1時間",
      tip: "ガウディの処女作。カサ・バトリョほど混まないのに建築的にはめちゃくちゃ面白い。タイル装飾が美しい",
      vibe: "おすすめ",
      tag: "建築",
    },
    {
      name: "サン・パウ病院",
      nameEn: "Hospital de Sant Pau",
      area: "Eixample",
      emoji: "🏥",
      time: "1-1.5時間",
      tip: "世界一美しい病院。モデルニスモ建築のユネスコ世界遺産。サグラダ・ファミリアから徒歩10分なのに観光客少なめ",
      vibe: "おすすめ",
      tag: "建築",
    },
  ],
  may: [
    {
      name: "🏛️ 世界建築首都 2026",
      nameEn: "World Capital of Architecture 2026",
      date: "2月〜12月（通年）",
      tip: "2026年バルセロナはUNESCO認定の「世界建築首都」。10地区で1,500以上のイベント（建築ツアー、展覧会、ワークショップ等）。ガウディ没後100年＆セルダ没後150年。建築好きには一生に一度のタイミング",
      tag: "建築",
      hot: true,
    },
    {
      name: "🌙 ミュージアム・ナイト",
      nameEn: "Nit dels Museus",
      date: "5月中旬（国際博物館の日・5/18前後）",
      tip: "バルセロナ中の美術館・博物館が夜間無料開放。ピカソ美術館、MACBA、MNACなどに深夜まで入れる。特別イベントやコンサートも。無料でハシゴできる最高の夜",
      tag: "アート",
      hot: true,
    },
    {
      name: "🎶 プリマヴェーラ・サウンド",
      nameEn: "Primavera Sound Festival",
      date: "5月下旬〜6月初旬",
      tip: "世界最高峰の音楽フェス。2026年はPinkPantheress、Massive Attack、Skrillex等。Parc del Fòrumの海沿い会場。チケットは早めに",
      tag: "音楽",
      hot: true,
    },
    {
      name: "🏎️ スペインGP（F1）",
      nameEn: "Spanish Grand Prix",
      date: "5月下旬",
      tip: "バルセロナ近郊のモンメロ・サーキットでF1開催。街全体がレースの雰囲気に。興味なくても街の盛り上がりは楽しい",
      tag: "スポーツ",
      hot: false,
    },
    {
      name: "🎨 フィラ・モデルニスタ",
      nameEn: "Fira Modernista",
      date: "5月29〜31日",
      tip: "19世紀末〜20世紀初頭にタイムスリップするフェア。コスプレした人々が街を歩く。モデルニスモ建築のガイドツアーや市場も",
      tag: "文化",
      hot: true,
    },
    {
      name: "🌹 ジローナ花祭り（日帰り可）",
      nameEn: "Temps de Flors, Girona",
      date: "5月9〜17日",
      tip: "バルセロナから電車で1.5時間のジローナ。中世の街が花で埋め尽くされる。ゲーム・オブ・スローンズのロケ地でもある。日帰りで行ける",
      tag: "お花",
      hot: true,
    },
    {
      name: "📚 バルセロナ国際コミックサロン",
      nameEn: "Salón del Cómic",
      date: "5月15〜17日",
      tip: "スペイン最大のコミック・マンガイベント。1981年から続く歴史あるフェア。日本の漫画もたくさん",
      tag: "サブカル",
      hot: false,
    },
    {
      name: "☀️ ビーチシーズン開始！",
      nameEn: "Beach Season Begins",
      date: "5月全般",
      tip: "5月のバルセロナは気温22-25℃で快適。海に入れるレベル。バルセロネータは混むので、ボガテルやノヴァ・イカリアビーチがおすすめ",
      tag: "ビーチ",
      hot: false,
    },
  ],
};

const tagColors = {
  "建築": { bg: "#fef3c7", text: "#92400e", border: "#f59e0b" },
  "歴史": { bg: "#ede9fe", text: "#5b21b6", border: "#8b5cf6" },
  "アート": { bg: "#fce7f3", text: "#9d174d", border: "#ec4899" },
  "フード": { bg: "#fef2f2", text: "#991b1b", border: "#ef4444" },
  "カフェ": { bg: "#f0fdf4", text: "#166534", border: "#22c55e" },
  "絶景": { bg: "#fff7ed", text: "#9a3412", border: "#f97316" },
  "街歩き": { bg: "#f0f9ff", text: "#075985", border: "#0ea5e9" },
  "自然": { bg: "#ecfdf5", text: "#065f46", border: "#10b981" },
  "ミュージアム": { bg: "#faf5ff", text: "#6b21a8", border: "#a855f7" },
  "音楽": { bg: "#fdf4ff", text: "#86198f", border: "#d946ef" },
  "文化": { bg: "#fffbeb", text: "#78350f", border: "#eab308" },
  "スポーツ": { bg: "#f0fdf4", text: "#14532d", border: "#16a34a" },
  "サブカル": { bg: "#f8fafc", text: "#334155", border: "#64748b" },
  "お花": { bg: "#fff1f2", text: "#9f1239", border: "#fb7185" },
  "ビーチ": { bg: "#ecfeff", text: "#155e75", border: "#06b6d4" },
};

function Tag({ tag }) {
  const c = tagColors[tag] || { bg: "#f1f5f9", text: "#475569", border: "#94a3b8" };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 600,
        background: c.bg,
        color: c.text,
        border: `1.5px solid ${c.border}`,
        letterSpacing: "0.02em",
      }}
    >
      {tag}
    </span>
  );
}

function VibeBadge({ vibe }) {
  const styles = {
    "必須": { bg: "#dc2626", text: "#fff" },
    "おすすめ": { bg: "#2563eb", text: "#fff" },
    "定番": { bg: "#7c3aed", text: "#fff" },
    "穴場": { bg: "#059669", text: "#fff" },
  };
  const s = styles[vibe] || { bg: "#6b7280", text: "#fff" };
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "10px",
        fontWeight: 700,
        background: s.bg,
        color: s.text,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {vibe}
    </span>
  );
}

function SpotCard({ spot, type }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "var(--bg-card, #fff)",
        borderRadius: "14px",
        padding: "16px 18px",
        marginBottom: "10px",
        cursor: "pointer",
        border: "1px solid var(--border, #e5e7eb)",
        transition: "all 0.2s ease",
        boxShadow: open ? "0 4px 20px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "20px" }}>{spot.emoji || "📍"}</span>
            <span style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary, #111)" }}>
              {spot.name}
            </span>
            {spot.vibe && <VibeBadge vibe={spot.vibe} />}
            {spot.hot && (
              <span style={{ fontSize: "10px", background: "#ef4444", color: "#fff", padding: "2px 7px", borderRadius: "4px", fontWeight: 700 }}>
                HOT
              </span>
            )}
          </div>
          <div style={{ fontSize: "12px", color: "var(--text-secondary, #6b7280)", marginTop: "4px", display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontStyle: "italic" }}>{spot.nameEn}</span>
            {spot.area && <span>📍 {spot.area}</span>}
            {spot.date && <span>📅 {spot.date}</span>}
            {spot.time && <span>⏱ {spot.time}</span>}
            <Tag tag={spot.tag} />
          </div>
        </div>
        <span style={{ fontSize: "18px", color: "var(--text-secondary, #9ca3af)", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
          ▾
        </span>
      </div>
      {open && (
        <div
          style={{
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px dashed var(--border, #e5e7eb)",
            fontSize: "13.5px",
            lineHeight: 1.7,
            color: "var(--text-primary, #374151)",
          }}
        >
          💡 {spot.tip}
        </div>
      )}
    </div>
  );
}

const tabs = [
  { key: "tourist", label: "👑 観光スポット", subtitle: "王道・必見" },
  { key: "local", label: "🔍 地元スポット", subtitle: "穴場・ローカル" },
  { key: "may", label: "🌸 5月限定", subtitle: "イベント・季節" },
];

export default function BarcelonaGuide() {
  const [activeTab, setActiveTab] = useState("tourist");

  return (
    <div
      style={{
        fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
        maxWidth: "560px",
        margin: "0 auto",
        padding: "0",
        color: "var(--text-primary, #111827)",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #c2185b 50%, #f9a825 100%)",
          borderRadius: "18px",
          padding: "28px 24px 20px",
          marginBottom: "16px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "100px", opacity: 0.12 }}>🏗️</div>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", opacity: 0.85, textTransform: "uppercase" }}>
          Barcelona Spots Guide — May 2026
        </div>
        <div style={{ fontSize: "26px", fontWeight: 900, marginTop: "6px", lineHeight: 1.3 }}>
          バルセロナ<br />おすすめスポット完全リスト
        </div>
        <div style={{ fontSize: "12px", marginTop: "10px", opacity: 0.9, lineHeight: 1.6 }}>
          🏛️ 2026年 = UNESCO世界建築首都 × ガウディ没後100年<br />
          観光客の定番から地元民の穴場、5月限定イベントまで
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            style={{
              flex: 1,
              padding: "10px 6px 8px",
              borderRadius: "12px",
              border: activeTab === t.key ? "2px solid #1e3a5f" : "1.5px solid var(--border, #e5e7eb)",
              background: activeTab === t.key ? "#1e3a5f" : "var(--bg-card, #fff)",
              color: activeTab === t.key ? "#fff" : "var(--text-primary, #374151)",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 700,
              textAlign: "center",
              transition: "all 0.15s",
              lineHeight: 1.3,
              fontFamily: "inherit",
            }}
          >
            <div>{t.label}</div>
            <div style={{ fontSize: "10px", fontWeight: 400, opacity: 0.7, marginTop: "2px" }}>{t.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Count */}
      <div style={{ fontSize: "12px", color: "var(--text-secondary, #9ca3af)", marginBottom: "10px", paddingLeft: "4px" }}>
        {spots[activeTab].length}件のスポット — タップで詳細を見る
      </div>

      {/* Cards */}
      <div>
        {spots[activeTab].map((spot, i) => (
          <SpotCard key={i} spot={spot} type={activeTab} />
        ))}
      </div>

      {/* Footer tip */}
      <div
        style={{
          marginTop: "16px",
          padding: "14px 16px",
          borderRadius: "12px",
          background: "var(--bg-card, #fffbeb)",
          border: "1px solid #fde68a",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "var(--text-primary, #92400e)",
        }}
      >
        <strong>💡 5月のバルセロナ豆知識：</strong><br />
        気温は22〜25℃で過ごしやすい。夏の激混みを避けつつビーチも楽しめるベストシーズン。
        5/1（メーデー）と5/25（聖霊降臨祭翌日）は祝日で一部店舗・美術館が休み。要チェック！
      </div>
    </div>
  );
}
