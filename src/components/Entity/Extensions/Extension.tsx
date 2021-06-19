import { Reference, ThorExt } from '../../../interfaces';
import { beautify, getEntries } from '../../../helpers';
import { Fragment } from 'react';
import { Accordion, Table, Card, Form } from 'react-bootstrap';
import ReferenceLink from '../ReferenceLink';

type Props = {
    Instance: ThorExt | null
}

function Extension(props: Props) {
    const isReference = (obj: any): obj is Reference => {
        if(typeof obj !== 'object' || obj == null)
            return false;
        return '$Ref' in obj;
    }
    const isEmpty = (obj: any): boolean => {
        if(obj == null)
            return true;
        if(typeof obj !== 'object')
            return false;
        const values = Object.values(obj);

        if(values.length === 1 && Object.values(values[0]).length === 1) {
            return true;
        }

        return values.every(x => !x);
    }

    const renderValue = (value: any) => {
        if(value === null || value === undefined)
            return null;
        if(typeof value === 'boolean')
            return <Form.Check disabled checked={value} type="checkbox"/>
        if(isReference(value)) {
            return <ReferenceLink $Ref={ value.$Ref }/>;
        }
        if(typeof value === 'object') {
            return renderValue(Object.values(value)[0]);
        }

        return (<span>{value.toString()}</span>)
    }

    return (
        <Fragment>
            <Table>
                <tbody>
                {
                    getEntries(props.Instance).map(entry => {
                        return (
                            <tr key={entry.key}>
                                {
                                    (typeof entry.value === 'object' && entry.value != null && !isEmpty(entry.value) )
                                        ? <Fragment>
                                            {
                                                isReference(entry.value) ?
                                                    <Fragment>
                                                        <td>{beautify(entry.key)}</td>
                                                        <td><ReferenceLink $Ref={ entry.value.$Ref }/></td>
                                                    </Fragment>
                                                    : <td colSpan={2}>
                                                        <Accordion>
                                                            <Card>
                                                                <Accordion.Toggle as={Card.Header} eventKey={entry.key}>
                                                                    { beautify(entry.key) }
                                                                </Accordion.Toggle>
                                                                <Accordion.Collapse eventKey={entry.key}>
                                                                    <Card.Body>
                                                                        <Extension Instance={ entry.value as ThorExt }/>
                                                                    </Card.Body>
                                                                </Accordion.Collapse>
                                                            </Card>
                                                        </Accordion>
                                                    </td>
                                            }
                                        </Fragment>
                                        : <Fragment>
                                            <td>{beautify(entry.key)}</td>
                                            <td>
                                                { renderValue(entry.value) }
                                            </td>
                                        </Fragment>
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Extension
