const subsidyTypeList = [
    {
        id: "test_radio_1",
        value: "facility",
        label: "ラジオボタン11",
        checked: true
    },
    {
        id: "test_radio_2",
        value: "service",
        label: "ラジオボタン12",
        checked: false
    }
];

const radioGroup = document.getElementById("radioGroup");

subsidyTypeList.forEach(function (item) {
    const div = document.createElement("div");

    const input = document.createElement("input");
    input.type = "radio";
    input.id = item.id;
    input.name = "tokyoSubsidyType";
    input.value = item.value;

    if (item.checked) {
        input.checked = true;
    }

    const label = document.createElement("label");
    label.className = "radio_button";
    label.htmlFor = item.id;
    label.textContent = item.label;

    const img = document.createElement("img");
    img.src = "question.png";
    img.className = "question pointer";

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(img);

    radioGroup.appendChild(div);
});