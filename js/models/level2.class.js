class Level2 extends Level {
    levelStartX = 2876;
    levelEndX = 6471;
    howLongLevelX = this.levelEndX - this.levelStartX;
    howLongLevel = 3;


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
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2'),
            new Chicken('level2')
        ];
    }
}