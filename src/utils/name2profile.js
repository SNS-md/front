const name2Color = name => {
    const colors = {
        "예쁜": "#E91E63",
        "매혹적인": "#9C27B0",
        "멋진": "#2196F3",
        "차가운": "#3F51B5",
        "파릇파릇한": "#4CAF50",
        "활발한": "#FFEB3B",
        "밝은": "#FF9800",
        "쓸쓸한": "#9E9E9E",
        "검은": "#000000"
    };
    return colors[name];
};

const name2Icon = name => {
    const icons = {
        "고양이": "😺",
        "강아지": "🐶",
        "토끼": "🐰",
        "햄스터": "🐹",
        "거북이": "🐢",
        "고슴도치": "🐿",
        "펭귄": "🐧",
        "뱀": "🐍",
        "원숭이": "🐒",
        "코끼리": "🐘",
        "말": "🐴",
        "돼지": "🐷",
        "코알라": "🐨",
        "낙타": "🐫"
    };
    return icons[name];
}

const name2profile = name => {
  return [name2Color(name.split(' ')[0]), name2Icon(name.split(' ')[1])];
}

export default name2profile;