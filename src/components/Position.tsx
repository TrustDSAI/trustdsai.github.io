import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Positions({
  title,
  description,
  requirements,
  link,
  tag,
}: {
  title: string;
  description: string;
  requirements: string[];
  link: string;
  tag: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
          <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
            {tag}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          Apply Now
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
      </CardFooter>
    </Card>
  );
}
