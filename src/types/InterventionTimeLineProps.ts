export interface TimelineStep {
    title: string;
    description: string;
    items?: string[];
}

export interface InterventionTimelineProps {
    heading?: string;
    steps: TimelineStep[];
    className?: string;
}
