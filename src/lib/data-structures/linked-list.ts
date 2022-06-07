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

    getElementsAsArray() {
        const elementArray = []
        let pointer = this.firstElement

        while (pointer !== undefined) {
            elementArray.push(pointer.value)
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