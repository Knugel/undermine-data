import { BehaviorTasks, Task } from '../interfaces';
import { Edge, FlowElement, Node, XYPosition } from 'react-flow-renderer/dist/types';

export async function get<T>(url: string) {
    const response = await window.fetch(url, { method: 'GET' });
    if(response.ok)
        return await response.json() as T;
    else
        return Promise.reject(response.statusText);
}

export function fromTaskJSON(json: string): BehaviorTasks {
    if(!json)
        return null;
    return JSON.parse(json) as BehaviorTasks
}

export function toFlowElement(task: Task, parent?: Task): FlowElement[] {
    const parentOffset = parent != null ? fromOffset(parent.NodeData.Offset) : { x: 0, y: 0 };
    const offset = fromOffset(task.NodeData.Offset);

    const element: Node = {
        id: task.ID.toString(),
        type: task.Children ? undefined : 'output',
        position: { x: parentOffset.x + offset.x, y: parentOffset.y + offset.y },
        data: { label: task.Name, task: { Comment: task.NodeData.Comment, ...task } }
    };

    if(task.Type === "BehaviorDesigner.Runtime.Tasks.EntryTask")
        element.type = 'input';

    let ret: FlowElement[] = [element];
    if(task.Children) {
        for(const child of task.Children) {
            ret = ret.concat(toFlowElement(child, task));
            const edge: Edge = {
                id: task.ID + '-' + child.ID,
                source: task.ID.toString(),
                target: child.ID.toString(),
                type: 'smoothstep'
            }
            ret.push(edge);
        }
    }
    return ret;
}

export function fromOffset(offset: string): XYPosition {
    const split = offset
        .replace('(', '')
        .replace(')', '')
        .split(',');
    const x = Number.parseFloat(split[0]);
    const y = Number.parseFloat(split[1]);
    return { x, y };
}

export function getEntries<T>(entity: T | null): { key: string, value: any }[] {
    if(!entity)
        return [];
    return Object.keys(entity).filter(x => !x.endsWith("Ext")).map(x => { return { key: x, value: (entity as any)[x] } });
}

const types = [
    "SharedInt",
    "SharedBool",
    "SharedFloat",
    "SharedEntity",
    "SharedVector2",
    "SharedVector3",
    "SharedDataObject",
    "SharedEntityList",
    "SharedString",
    "Boolean",
    "String",
    "Int32",
    "Int64",
    "Single",
    "Entity",
    "Vector2",
    "Vector3",
    "List",
    "DataObject",
    "Double",
    "AbortType"
]

export function beautify(value: string): string {
    let index = value.indexOf("m_");
    if(index > -1) {
        value = value.substr(index + 2);
        value = value[0].toUpperCase() + value.substr(1);
    }
    const type = types.find(x => value.startsWith(x));
    if(type) {
        value = value.substr(type.length);
        value = value[0].toUpperCase() + value.substr(1);
    }

    return value;
}
