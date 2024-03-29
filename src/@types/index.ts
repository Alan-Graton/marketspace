export type ComponentStyleType = "primary" | "secondary" | "ternary";

export type AnnouncementStatus = "NOVO" | "USADO";

/**
 * @description 0 if the product has been used and 1 if product if brand new
 */
export type ProductStatus = 0 | 1;

export interface IAnnouncement {
  key: number;
  item: number;
  status: AnnouncementStatus;
}
