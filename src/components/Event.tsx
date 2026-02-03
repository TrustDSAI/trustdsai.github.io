import { Card, CardContent } from "./ui/card";

export function Events({
  date,
  title,
  description,
  location,
  link = null,
}: {
  date: string;
  title: string;
  description: string;
  location: string;
  link?: string | null;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="px-6 py-2">
        <div className="flex items-center text-muted-foreground mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex items-center text-muted-foreground mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{location}</span>
        </div>
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-primary/65 hover:text-primary/80"
          >
            Page of the event?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        )}
      </CardContent>
    </Card>
  );
}
