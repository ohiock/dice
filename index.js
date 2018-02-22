(() => {
    const numberConfig = {
        '1': [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ],
        '2': [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ],
        '3': [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ],
        '4': [
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1]
        ],
        '5': [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1]
        ],
        '6': [
            [1, 0, 1],
            [1, 0, 1],
            [1, 0, 1]
        ]
    };

    const setNumberConfigs = (die, num) => {
        for (let i = 0; i < 3; i++) {
            const row = die.getElementsByClassName(`row ${i + 1}`)[0];
            const rowConfig = numberConfig[num.toString()][i];

            const content = rowConfig.map(item => {
                return item
                    ? '<span class="dot-container active"></span>'
                    : '<span class="dot-container"></span>';
            });

            row.innerHTML = content.join('');
        }
    };

    const roll = () => {
        const numberOne = Math.floor(Math.random() * 6) + 1;
        const numberTwo = Math.floor(Math.random() * 6) + 1;

        const dieOne = document.getElementsByClassName('die 1')[0];
        const dieTwo = document.getElementsByClassName('die 2')[0];

        setNumberConfigs(dieOne, numberOne);
        setNumberConfigs(dieTwo, numberTwo);
    };

    roll();
})();