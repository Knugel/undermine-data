import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../store/Context';

type Props = {
    $Ref: string | number;
}

function ReferenceLink(props: Props) {
    const context = useContext(Context);

    const isGuid = !Number.isInteger(props.$Ref);
    const isEntity = context.entities.some(x => x.Guid === props.$Ref);

    let element;
    if(isEntity) {
        element = context.entities.find(x => x.Guid === props.$Ref);
    } else {
        element = context.dataObjects.find(x => x.Guid === props.$Ref);
    }
    if(!isGuid)
        element = context.behaviors.find(x => x.ID === props.$Ref);

    return (
        <Fragment>
            {
                isGuid ?
                    <Fragment>
                        {
                            isEntity ? <Link to={`/entities/${props.$Ref}`}>{element?.Name}</Link> : <Link to={`/data-objects/${props.$Ref}`}>{element?.Name}</Link>
                        }
                    </Fragment>
                    : <Link to={`/behaviors/${props.$Ref}`}>{element?.Name}</Link>
            }
        </Fragment>
    )
}


export default ReferenceLink
