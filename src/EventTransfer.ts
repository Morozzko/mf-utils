type EventTransferPayloadType = {
    EventName: string;
    data: object;
    tag?: string;
    name: string;
    debug?: boolean;
}
export const EventTransfer = ({data, EventName, tag, name, debug}: EventTransferPayloadType) => {
    const thisTag = tag ? `${tag}-` : ''
    const type = `${name}-${thisTag}${EventName}`
    const Event = new CustomEvent(type, {detail: {data}})

    dispatchEvent(Event)

    if (debug) {
        console.log('Event type:', type, '\nevent.detail.data: ', data)
    }
}
