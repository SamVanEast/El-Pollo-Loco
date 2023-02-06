class Level3 extends Level {
    levelStartX = 7190;
    levelEndX = 12223;
    howLongLevelX = this.levelEndX - this.levelStartX;
    howLongLevel = 5;


    constructor(loadEnemiesGo) {
        super().loadEnemies(loadEnemiesGo);
    }

    /**
     * Opponents from level one are loaded
     * @param {string} loadEnemiesGo gives permission to load the opponents 
     */
    loadEnemies(loadEnemiesGo) {
        if (loadEnemiesGo == 'loadEnemies') {
            this.enemies = this.alleEnemies();
        }
    }

/**
 * 
 * @returns enemies who should be loaded
 */
    alleEnemies() {
        return [
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chicken('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3'),
            new Chick('level3')
        ];
    }
}