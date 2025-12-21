export type Level = Record<string, string>;

export interface Skill{
    name: string;
    icon: string;
    iconDark?: string;
    level?: Level;
}