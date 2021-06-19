import { Behavior } from './Behavior';
import { EntityExt } from './Entities';
import { DataObject } from './DataObject';

export * from "./Behavior";
export * from './Entities';
export * from './DataObject';

export interface Reference {
    $Ref: string | number
}

export interface Store {
    behaviors: Behavior[]
    entities: EntityExt[]
    dataObjects: DataObject[]
}
