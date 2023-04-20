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

const icons = {
    "강아지": "dog",
    "고양이": "cat",
    "토끼": "bunny",
    "병아리": "chicken",
    "얼룩소": "cow",
    "사자": "lion",
    "원숭이": "monkey",
    "돼지": "pig",
    "쏘미": "somi",
    "코미": "comi"
};

export const name2profile = name => {
  return [colors[name.split(' ')[0]], icons[name.split(' ')[1]]];
}

export const newName = () => {
    const randomColor = Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)];
    const randomIcon = Object.keys(icons)[Math.floor(Math.random() * Object.keys(icons).length)];
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `${randomColor} ${randomIcon} ${randomNum}`;
}