export type ComponentStyleType = "primary" | "secondary" | "ternary";

export type AnnouncementStatus = "NOVO" | "USADO";

export interface IAnnouncement {
  key: number;
  item: number;
  status: AnnouncementStatus;
}
