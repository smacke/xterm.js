
export enum MessageType {
    REQUEST_ANIMATION_FRAME,
    ANIMATION_SUCCESSFUL,
    POPUP_OPENED
}

export interface ChromeMessage {
    type: MessageType,
    payload?: any
}

