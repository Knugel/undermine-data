import { Reference } from './index';

export interface Behavior {
    Name: string
    ID: number
    Interruptable: boolean
    AutoStart: boolean
    PreProcess: boolean
    PauseWhenDisabled: boolean
    RestartWhenComplete: boolean
    TaskJSON: string
    Objects: Reference[]
}

export interface Component extends Reference {
    Component: string
}

export interface BehaviorTasks {
    EntryTask: Task
    RootTask: Task
}

export interface Task {
    Type: string
    NodeData: NodeData
    ID: number
    Name: string
    Instant: boolean
    Children?: Task[]
}

export interface NodeData {
    Offset: string
    X: number
    Y: number
}
