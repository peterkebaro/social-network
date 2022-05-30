import { MemStore } from "./mem-store";
import { Persistent } from "./store";

class TestPersistent extends Persistent {
    entityName = "TestPersistent";
    aNumber: number;
    aString: string;
}

Persistent.registerPersistentFactory(
    "TestPersistent",
    () => new TestPersistent()
);

class NewPersistent extends Persistent {
    entityName = "NewPersistent"
    aNumber: number
    newValue: string
    address: { 
        street: string
        city: string
    }
}

Persistent.registerPersistentFactory( "NewPersistent", ()=>new NewPersistent() )

describe("MemStore", () => {
    let memStore: MemStore;

    beforeEach(() => {
        //tear-up
        memStore = new MemStore();
    });

    it("should store an entity", async () => {
        const entity = new TestPersistent()
        entity.aNumber = 234
        entity.aString = "Test string"

        await memStore.save(entity)

        const result = (await memStore.findById(
            entity.id,
            entity.entityName
        )) as TestPersistent;

        expect(result.aNumber).toEqual(entity.aNumber)
        expect(result.aString).toEqual(entity.aString)
        expect(result).toBeInstanceOf(TestPersistent)
    });

    it("should update an entity", async () => {
        const entity = new TestPersistent()
        entity.aNumber = 234
        entity.aString = "Test string"

        await memStore.save(entity)

        const updateEntity = new TestPersistent()
        updateEntity.id = entity.id
        updateEntity.aNumber = 100
        updateEntity.aString = "Update string"
        
        memStore.update(updateEntity)

        const result = (await memStore.findById(
            entity.id,
            entity.entityName
        )) as TestPersistent;
            
        expect(result.aNumber).toEqual(updateEntity.aNumber)
        expect(result.aString).toEqual(updateEntity.aString)
    })

    // it("should delete an entity", async () => {
    //     const entity = new TestPersistent()
    //     entity.aNumber = 234
    //     entity.aString = "Test string"
    //     console.log(entity)
    //     memStore.delete(entity)
    //     console.log(entity)

    //     const result = (await memStore.findById(
    //         entity.id,
    //         entity.entityName
    //     )) as TestPersistent;

    //     expect(result).toEqual(undefined)

    // })

    it( 'should store NewPersistent entities', async ()=>{
        const newEntity  = new NewPersistent()

        newEntity.newValue = "ValorNuevo"
        newEntity.address = {
            city: "Las Palmas",
            street: "Camelia"
        }

        await memStore.save(newEntity)

        const  result =  await memStore.findById (newEntity.id, newEntity.entityName ) as NewPersistent

        expect(result.newValue).toEqual(newEntity.newValue)
        expect(result.address.city).toEqual(newEntity.address.city)
        expect(result.address.street).toEqual(newEntity.address.street)
    })

    it( 'should find all elements of same entity even we store several entities', async ()=>{
        const entity = new TestPersistent()
        const newEntity = new NewPersistent()

        entity.aNumber = 100
        newEntity.aNumber = 100

        await memStore.save( entity )
        await memStore.save( newEntity )

        const allTestPersistent = memStore.findAll(entity.entityName)

        expect( allTestPersistent ).toHaveLength( 1 )
    })
});



