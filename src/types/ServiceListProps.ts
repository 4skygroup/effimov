import type {ServiceCardProps} from "./ServicesCardProps.ts";

export interface ServiceListProps {
    title?: string;
    desc?: string;
    items: ServiceCardProps[];
}