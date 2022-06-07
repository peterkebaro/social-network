import { LinkedList } from './linked-list'

describe('Linked List', () => {
    let list: LinkedList

    beforeEach(() => {
        list = new LinkedList()
    })

    it('should insert an element in an empty list', () => {
        list.add(5)

        expect(list.getElementsAsArray()[0]).toBe(5)
    })

    it('should insert an element in an arbitrary position in a list', () => {
        expect.assertions(1)
    })

    it('should delete an element from the list', () => {
        expect.assertions(1)
    })

})