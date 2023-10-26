const RobotPage = require('../pages/robot.page')

describe('First task', () => {
    before(() => {
        cy.visit('https://suninjuly.github.io/math.html')
    });
    it('should solve an example', () => {
        RobotPage.solveExample()
    });
});