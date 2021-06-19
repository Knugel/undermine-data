import Context from "./Context";
import { PropsWithChildren, useEffect, useState } from 'react';
import { Behavior, DataObject, EntityExt, Store } from '../interfaces';
import { get } from '../helpers';

function Provider(props: PropsWithChildren<any>) {
    const [store, setStore] = useState<Store>({ behaviors: [], entities: [], dataObjects: [] });

    useEffect(() => {
        async function fetch() {
            if(store.entities.length > 0)
                return;
            const behaviors = await get<Behavior[]>('/undermine-data/data/Behaviors.json');
            const entities = await get<EntityExt[]>('/undermine-data/data/Entities.json');
            const dataObjects = await get<DataObject[]>('/undermine-data/data/DataObjects.json');
            setStore({ behaviors, entities, dataObjects });
        }
        fetch();
    });

    return (
        <Context.Provider value={store}>{props.children}</Context.Provider>
    )
}

export default Provider;
