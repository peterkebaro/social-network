function mistery(x: number) {
    if (x === 0) return 1;
    if (x === 1) return 3;

    let acum0 = 1;
    let acum1 = 3;
    for (let i = 2; i <= x; i++) {
        const antAcum1 = acum1;
        acum1 = acum0 + acum1;
        acum0 = antAcum1;
    }
    return acum1;
}

describe("Tonterias del profe", () => {
    describe("Una funcion matematica desconocida", () => {
        it("should return 1 for param 0", () => {
            expect(mistery(0)).toBe(1);
        });

        it("should return 3 for param 1", () => {
            expect(mistery(1)).toBe(3);
        });

        it("should return the last element of a series of x elements (past as parameter) where the last number is the sum of the previous 2 numbers", () => {
            expect(mistery(2)).toBe(4);
            expect(mistery(3)).toBe(7);
            expect(mistery(4)).toBe(11);
            expect(mistery(5)).toBe(18);
            expect(mistery(6)).toBe(29);
            expect(mistery(7)).toBe(47);
        });
    });
});
