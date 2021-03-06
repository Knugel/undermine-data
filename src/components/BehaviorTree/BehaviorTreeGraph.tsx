import { Behavior } from '../../interfaces';
import ReactFlow, { Background, Elements, isNode, Position } from 'react-flow-renderer';
import { fromOffset, fromTaskJSON, toFlowElement } from '../../helpers';
import { Fragment, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import dagre from 'dagre';
import {  Col, Overlay, Row, Tooltip } from 'react-bootstrap';
import { Edge, Node } from 'react-flow-renderer/dist/types';
import Extension from '../Entity/Extensions/Extension';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';

type Props = {
    Instance: Behavior
}

function BehaviorTreeGraph(props: Props) {
    const nodeWidth = 172;
    const nodeHeight = 36;

    const [elements, setElements] = useState<Elements>([]);
    const [selected, setSelected] = useState<Node | null>();

    const [show, setShow] = useState(false);
    const target = useRef(null);
    const copy = () => {
        const tasks = fromTaskJSON(props.Instance.TaskJSON);

        const setOffset = (element: any, task: any) => {

            if(task.ID.toString() === element.id)
            {
                task.NodeData.Offset = `(${(element as any).position.x}, ${(element as any).position.y})`;
                return;
            }
            for(const child of task.Children ?? []) {
                if(child.ID.toString() === element.id)
                {
                    child.NodeData.Offset = `(${(element as any).position.x}, ${(element as any).position.y})`;
                    return;
                }
                setOffset(element, child);
            }
        }

        for(const element of elements) {
            let task = tasks.RootTask;
            let entry = tasks.EntryTask;
            setOffset(element, task);
            setOffset(element, entry);
        }

        navigator.clipboard.writeText(JSON.stringify(tasks));
        setShow(true);
        setTimeout(() => setShow(false), 2000);
    };

    useEffect(() => {
        const dagreGraph = new dagre.graphlib.Graph();
        dagreGraph.setDefaultEdgeLabel(() => ({}));

        const doLayout = (elements: Elements, direction = 'TB') => {
            const isHorizontal = direction === 'LR';
            dagreGraph.setGraph({ rankdir: direction });

            elements.forEach((el) => {
                if (isNode(el)) {
                    dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
                } else {
                    dagreGraph.setEdge(el.source, el.target);
                }
            });

            dagre.layout(dagreGraph);

            return elements.map((el) => {
                if (isNode(el)) {
                    const nodeWithPosition = dagreGraph.node(el.id);
                    el.targetPosition = isHorizontal ? Position.Left : Position.Top;
                    el.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

                    // unfortunately we need this little hack to pass a slightly different position
                    // to notify react flow about the change. Moreover we are shifting the dagre node position
                    // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
                    el.position = {
                        x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
                        y: nodeWithPosition.y - nodeHeight / 2,
                    };
                }
                return el;
            });
        }

        const tasks = fromTaskJSON(props.Instance.TaskJSON);
        if(tasks == null) {
            setElements([]);
            return;
        }

        let entry = toFlowElement(tasks.EntryTask);
        entry = entry.concat(toFlowElement(tasks.RootTask));
        entry.push({ id: '0-1', source: '0', target: '1' });
        setElements(doLayout(entry));
    }, [props.Instance.TaskJSON]);

    const onNodeClick = (event: ReactMouseEvent, element: Node | Edge) => {
        if('data' in element) {
            const task = element.data.task;
            if(!task.Comment)
                delete task.Comment;

            delete task.Children;
            delete task.NodeData;
            setSelected(task);
        }
    }

    return (
        <>
            <div className="btn" style={{ position: 'absolute', zIndex: 10, marginLeft: '8px', marginTop: '8px', backdropFilter: 'blur(4px)', background: 'rgba(0, 0, 0, 0.4)' }} onClick={() => copy()} ref={target}><FontAwesomeIcon icon={faClipboard} /></div>
            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Copied to clipboard
                    </Tooltip>
                )}
            </Overlay>
            <Row style={{ height: '100%'}}>
                <Col>
                    <ReactFlow elements={ elements } nodesDraggable={false} onElementClick={onNodeClick}>
                        <Background/>
                    </ReactFlow>
                </Col>
                <Col xs lg={5} style={{ overflow: "hidden", overflowY: "auto", height: "100%", wordBreak: "break-all" }}>
                    {
                        selected ?
                            <Fragment>
                                <Extension Instance={ selected as any }/>
                            </Fragment> : null
                    }
                </Col>
            </Row>
        </>

    );
}

export default BehaviorTreeGraph;
