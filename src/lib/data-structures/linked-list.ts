export class LinkedList {
    constructor() {
        this.firstElement = undefined
        this.lastElement = this.firstElement
    }

    add(element: any) {
        const wrapper = new ElementWrapper(element)
        if (!this.firstElement) this.firstElement = wrapper
        if (!this.lastElement) this.lastElement = wrapper
        else {
            this.lastElement.nextElement = wrapper
            this.lastElement = wrapper
        }
    }

    addAt(element: any, position: number) {

        const wrapper = new ElementWrapper(element)
        let pointer = this.firstElement

        if (position < 0) {
            throw new Error('Number is negative')
        }

        if (position != 0) {


            for (let i = 0; i < position - 1; i++) {

                if (pointer.nextElement.nextElement === undefined) throw new Error('There is no number in that position')
                pointer = pointer.nextElement
            }

            wrapper.nextElement = pointer.nextElement
            pointer.nextElement = wrapper

        }
        else {

            this.firstElement.value = wrapper.value
        }

    }

    delete(element: any){

        if (this.firstElement.value === element) {

            this.firstElement.value === this.firstElement.nextElement

        }

        else {

           //Me cuesta ver como recorrerlo y como funciona esta memoria vs un array
        
        }
    }

    getElementsAsArray() {
        const elementArray = []
        let pointer = this.firstElement

        while (pointer !== undefined) {
            elementArray.push(pointer.value)
            pointer = pointer.nextElement
        }

        return elementArray
    }

    private firstElement: ElementWrapper
    private lastElement: ElementWrapper
}

class ElementWrapper {
    constructor(element: any) {
        this.value = element
    }

    nextElement: ElementWrapper
    value: any
}