class Level1 extends Level {
    levelStartX = 600;
    levelEndX = 2157;
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
            this.enemies = [
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1'),
                new Chicken('level1')
            ];
        }
    }
}