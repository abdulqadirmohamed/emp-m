export class Item {
    id: number
    item_name: string
    item_description: any
    open_meter_reading: number
    close_meter_reading: number
    volume: number
    item_rate: number
    evaporation_loss: number
    receiving_tank: string
    entry_date: string
    item_price: number

    constructor() {
        this.id = 0
        this.item_name = ''
        this.item_description = ''
        this.open_meter_reading = 0
        this.close_meter_reading = 0
        this.volume = 0
        this.item_rate = 0
        this.evaporation_loss = 0
        this.receiving_tank = ''
        this.entry_date = ''
        this.item_price = 0
    }
}