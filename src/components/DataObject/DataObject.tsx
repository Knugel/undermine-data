import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from 'react-bootstrap';
import Context from '../../store/Context';
import { DataObject } from '../../interfaces';
import Extension from '../Entity/Extensions/Extension';

type Params = {
    guid: string
}

function Entity() {
    let { guid } = useParams<Params>();
    const context = useContext(Context);
    const [dataObject, setDataObject] = useState<DataObject | null>();

    useEffect(() => {
        const item = context.dataObjects.find(x => x.Guid === guid);
        setDataObject(item);
    }, [guid, context.dataObjects])

    return (
        <Fragment>
            <Tabs>
                <Tab eventKey="root" title="Data Object">
                    <Extension Instance={ dataObject as any }/>
                </Tab>
            </Tabs>
        </Fragment>
    );
}
export default Entity;
