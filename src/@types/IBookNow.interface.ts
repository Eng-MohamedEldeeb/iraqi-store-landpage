export type TSessionServices =
  | "real estate"
  | "fashion"
  | "event"
  | "products"
  | "brand";

export type TClientType = "individual" | "company";

export interface IBookNow {
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  notes?: string;
  clientType: TClientType;
  services: TSessionServices[];
}
