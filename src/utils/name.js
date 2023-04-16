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
        "어두운": "#000000"
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

export const name2profile = name => {
  return [name2Color(name.split(' ')[0]), name2Icon(name.split(' ')[1])];
}

export const newName = () => {
    const colors = ["예쁜", "매혹적인", "멋진", "차가운", "파릇파릇한", "활발한", "밝은", "쓸쓸한", "어두운"];
    const animals = ["고양이", "강아지", "토끼", "햄스터", "거북이", "고슴도치", "펭귄", "뱀", "원숭이", "코끼리", "말", "돼지", "코알라", "낙타"];
    return `${colors[Math.floor(Math.random() * colors.length)]} ${animals[Math.floor(Math.random() * animals.length)]} ${Math.floor(Math.random() * 9000)+1000}`;
}