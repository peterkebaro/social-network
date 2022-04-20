import { Persistent } from "../store/store";

export class Tweet extends Persistent {

    public body: string
    public dateTime: number
    public userNick: string
    public id: number
    
    entityName = "tweets"
}

Persistent.registerPersistentFactory( 'tweets', ()=>new Tweet() )

