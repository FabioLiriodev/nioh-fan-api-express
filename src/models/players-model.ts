export interface PlayerModel {
    id: number;
    name: string;
    level: number;
    life: number;
    ki: number;
    attributes: {
        strength: number;
        essence: number;
        dexterity: number;
        magic: number;
        spirit: number;
    }
}