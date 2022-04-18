import { Persistent } from "../store/store";

export class Tweet extends Persistent {

}

Persistent.registerPersistentFactory( 'tweets', ()=>new Tweet() )

