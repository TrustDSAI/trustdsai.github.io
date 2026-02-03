import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Thesis({
  title,
  student,
  advisors,
  abstract,
  year,
  pdf,
}: {
  title: string;
  student: string;
  advisors: string[];
  abstract: string;
  year: string;
  pdf: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground">Student: {student}</p>
        <p className="text-muted-foreground">Advisor(s): {advisors.join(", ")}</p>
        <p className="text-muted-foreground">Year: {year}</p>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{abstract}</p>
        <div className="flex flex-wrap gap-3">
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
