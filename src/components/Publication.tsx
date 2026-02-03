import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Publication({
  title,
  authors,
  abstract,
  venue,
  link,
  code,
  pdf,
}: {
  title: string;
  authors: string[];
  abstract: string;
  venue: string;
  link: string;
  code: string;
  pdf: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">{authors.join(", ")}</p>
        <p className="text-muted-foreground">{venue}</p>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{abstract}</p>
        <div className="flex flex-wrap gap-3">
          {link && (
            <a
              href={link}
              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          )}
          {code && (
            <a
              href={code}
              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
          {pdf && (
            <a
              href={pdf}
              className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
