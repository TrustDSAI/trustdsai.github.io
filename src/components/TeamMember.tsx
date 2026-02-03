import { Card, CardFooter, CardHeader } from "./ui/card";
import { Image } from "astro:assets";

export function TeamMember({
  name,
  image,
  linkedin = null,
  googleScholar = null,
  personalWebsite = null,
}: {
  name: string;
  image: string;
  linkedin?: string | null;
  googleScholar?: string | null;
  personalWebsite?: string | null;
}) {
  return (
    <Card className="overflow-hidden items-center w-[250px]">
      <img
        src={image}
        alt={name}
        className="h-32 w-32 object-cover rounded-full mt-4"
      />
      <CardHeader className="text-lg text-center font-medium py-2">
        {name}
      </CardHeader>
      <CardFooter className="flex justify-center space-x-4 pb-4">
        {googleScholar && (
          <a
            href={googleScholar}
            className="text-primary hover:text-primary/80"
            aria-label="Google Scholar"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5Z" />
            </svg>
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            className="text-primary hover:text-primary/80"
            aria-label="LinkedIn"
            target="_blank"
          >
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
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        )}
        {personalWebsite && (
          <a
            href={personalWebsite}
            className="text-primary hover:text-primary/80"
            aria-label="Personal Website"
            target="_blank"
          >
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
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
