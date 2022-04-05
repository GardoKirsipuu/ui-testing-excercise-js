// gardo.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('find bugs', () => {
    it('Check if items kept after refresh', () => {
        cy.visit('localhost:3000')

        // clicking to add blank item to list
        cy.get('.TodoList').contains('Add new item').click()

        // checking if list now has 2 items
        cy.get('.TodoList').find('li').should('have.length', 2)

        // reloading page
        cy.reload()

        //checking again if list has 2 items after reload
        cy.get('.TodoList').find('li').should('have.length', 2)
    }),

    it('Check that only 1 empty item can be added to list', () => {
        cy.visit('localhost:3000')

        // clicking 2 times to try to create 2 empty items
        cy.get('.TodoList').contains('Add new item').click()
        cy.get('.TodoList').contains('Add new item').click()

        // check items in list (1 button, 1 empty = 2)
        cy.get('.TodoList').find('li').should('have.length', 2)
    }),

    it('Check that empty item does not have checkbox', () => {
        cy.visit('localhost:3000')

        // create empty item
        cy.get('.TodoList').contains('Add new item').click()

        // check if checkbox is missing
        cy.get('.empty-label').find('.TodoListItem__toggle').should('have.css','visibility', 'hidden')
    }),

    it('Check that filled item with text has checkbox', () => {
        cy.visit('localhost:3000')

        // create item with text
        cy.get('.TodoList').contains('Add new item').click()
        cy.get('.TodoList').find('input').type('Hello world')


        // check if checkbox is seen
        cy.get('.TodoListItem').find('.TodoListItem__toggle').should('not.have.css','visibility', 'hidden')
    }),

    it('Check if text is editable', () => {
        cy.visit('localhost:3000')

        // create item with text
        cy.get('.TodoList').contains('Add new item').click()
        cy.get('.TodoListItem').find('input').type('Hello world')

        // edit item text
        cy.get('.TodoListItem').find('input').type(' edited')

        cy.get('.TodoListItem').find('input').should('have.value', 'Hello world edited')
    }),

    it('Check if items can be deleted from list', () => {
        cy.visit('localhost:3000')

        // create item with text
        cy.get('.TodoList').contains('Add new item').click()
        cy.get('.TodoListItem').find('input').type('Hello world')

        // check if new list item has been created
        cy.get('.TodoList').find('li').should('have.length', 2)

        // press x next to item to delete
        cy.get('.TodoListItem__remove').click()

        // check if list has 1 less item
        cy.get('.TodoList').find('li').should('have.length', 1)
    }),

    it('Check if order of list items can be change by clicking and draghing', () => {
        cy.visit('localhost:3000')

        // create 2 items, 1 empty and 1 with text
        cy.get('.TodoList').contains('Add new item').click()
        cy.get('.TodoListItem').find('input').type('Hello world')
        cy.get('.TodoList').contains('Add new item').click()

        // drag and drop item
        cy.get('.TodoListItem').eq(0)
            .trigger('mouseover')
            .trigger('mousedown', { button: 0 })
            .trigger('mousemove', 125, 100, { force: true })
            .trigger('mouseup', { button: 0 })

        // check if first item is now empty
        cy.get('.TodoListItem').eq(0).should('have.class', 'empty-label')
    })
});