import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from 'react-bootstrap';
import Context from '../../store/Context';
import { EntityExt, ThorExt } from '../../interfaces';
import Extension from './Extensions/Extension';

type Params = {
    guid: string
    name: string
}

function Entity() {
    let { guid, name } = useParams<Params>();
    const context = useContext(Context);
    const [entity, setEntity] = useState<EntityExt | null>();

    useEffect(() => {
        const items = context.entities.filter(x => x.Guid === guid);
        setEntity(name ? items.find(x => x.Name === name) : items.find(_ => true));
    }, [guid, name, context.entities])

    const getTabs = (entity: EntityExt | null | undefined): string[] => {
        if(!entity)
            return [];
        return Object.keys(entity).filter(x => x.endsWith("Ext"));
    }

    const getComponent = (entity: EntityExt | null | undefined, component: string): ThorExt | null => {
        if(!entity)
            return null;
        return (entity as any)[component][0];
    }

    return (
        <Fragment>
            <Tabs>
                <Tab eventKey="root" title="Entity">
                    <Extension Instance={ entity as any }/>
                </Tab>
                {
                    getTabs(entity).map(component => (
                        <Tab eventKey={component} title={component} key={component}>
                            <Extension Instance={getComponent(entity, component)}/>
                        </Tab>
                    ))
                }
            </Tabs>
        </Fragment>
    );
}
export default Entity;
