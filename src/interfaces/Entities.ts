import { Reference } from './index';

export interface EntityExt {
    Name: string
    Data: Reference
    Guid: string
}

export interface ThorExt {

}

export interface StatusEffectExt extends ThorExt {
    LoadOrder: number
    DefaultDuration: number
    MaxLevel: number
    StackPolicy: string
    Position: string
    ShowInUI: boolean
    Save: boolean
    SaveUserData: boolean
    ForceNoSave: boolean
    UserDataFormat: string
    LevelFormat: string
    Behaviors: Reference
}
