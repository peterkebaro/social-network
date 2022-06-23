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

    it('should insert an element at the end of the list', () => {
        list.add(5)
        list.add(10)

        const listArray = list.getElementsAsArray()
        expect(listArray[listArray.length - 1]).toBe(10)
    })

    it('should insert an element in an arbitrary position in a list', () => {
        list.add(5)
        list.add(10)
        list.add(8)
        list.add(3)

        list.addAt(20, 2)

        const listArray = list.getElementsAsArray()
        expect(listArray[2]).toBe(20)
    })

    it('should throw execption if position is negative', () => {

        list.add(5)
        list.add(10)
        list.add(8)
        list.add(3)

        
        expect(()=>{
            list.addAt(12, -1)
        }).toThrow(Error)

    })

    it('should throw execption if position beyond the element count', () => {

        list.add(5)
        list.add(10)
        list.add(8)
        
    
        expect( ()=> {
            list.addAt(14, 3) 
        }).toThrow(Error)

    })

    it('should insert at position 0', () => {

        list.add(5)
        list.add(10)
        list.add(8)
        list.add(3)

        list.addAt(14, 0)

        const listArray = list.getElementsAsArray()
        expect(listArray[0]).toBe(14)

    })

    xit('should delete an element from the list', () => {

        list.add(5)
        list.add(10)
        list.add(8)
        list.add(3)

        expect.assertions(5)

    })

})