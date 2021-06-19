import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, Fragment } from 'react';
import Context from '../../store/Context';
import { Behavior } from '../../interfaces';
import BehaviorTreeGraph from './BehaviorTreeGraph';
import Extension from '../Entity/Extensions/Extension';
import { Form, Table } from 'react-bootstrap';

type Params = {
    id: string
}

function BehaviorTree() {
    let { id } = useParams<Params>();
    const context = useContext(Context);
    const [behavior, setBehavior] = useState<Behavior | null>(null);

    useEffect(() => {
        const tmp = context.behaviors.find(x => x.ID === Number(id));
        if(tmp)
            setBehavior(tmp);
    }, [id, context]);

    return (
        <Fragment>
            {
                behavior ?
                    <Fragment>
                        <div style={{ height: 400 }}>
                            <BehaviorTreeGraph Instance={ behavior }/>
                        </div>
                        <div>
                            <Table>
                                <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{ behavior.Name }</td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>{ behavior.ID }</td>
                                </tr>
                                <tr>
                                    <td>AutoStart</td>
                                    <td>
                                        <Form.Check
                                            disabled
                                            checked={behavior.AutoStart}
                                            type="checkbox"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Interruptable</td>
                                    <td>
                                        <Form.Check
                                            disabled
                                            checked={behavior.Interruptable}
                                            type="checkbox"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>PauseWhenDisabled</td>
                                    <td>
                                        <Form.Check
                                            disabled
                                            checked={behavior.PauseWhenDisabled}
                                            type="checkbox"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>PreProcess</td>
                                    <td>
                                        <Form.Check
                                            disabled
                                            checked={behavior.PreProcess}
                                            type="checkbox"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>RestartWhenComplete</td>
                                    <td>
                                        <Form.Check
                                            disabled
                                            checked={behavior.RestartWhenComplete}
                                            type="checkbox"
                                        />
                                    </td>
                                </tr>
                                { behavior.Objects.length > 0 ?
                                    <tr>
                                        <td colSpan={2}>
                                            <Extension Instance={{ Objects: behavior.Objects }}/>
                                        </td>
                                    </tr> : null
                                }
                                </tbody>
                            </Table>
                        </div>
                    </Fragment>
                    : null
            }
        </Fragment>
    )
}

export default BehaviorTree
