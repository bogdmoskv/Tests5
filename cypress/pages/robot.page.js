class RobotPage {
    get xValue() {
        return cy.get('#input_value')
    }

    get answerField() {
        return cy.get('#answer')
    }

    get robotCheckbox() {
        return cy.get('#robotCheckbox')
    }

    get robotsRule() {
        return cy.get('#robotsRule')
    }

    get submitButton() {
        return cy.get('button.btn')
    }

    solveExample() {
        this.xValue.invoke('text')
            .then(x => {
                const result = Math.log(Math.abs(12 * Math.sin(parseFloat(x))))
                this.answerField.type(result)
                this.robotCheckbox.click()
                this.robotsRule.click()
                this.submitButton.click()
            })
    }
}
module.exports = new RobotPage()