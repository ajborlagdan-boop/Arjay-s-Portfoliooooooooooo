import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const skills = [
  "JavaScript / TypeScript",
  "React & Next. js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIS & GraphQL",
  "Shadcn UI",


];


export default function About() {
  return (
    <div className="space-y-8 max-w-3x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
           Hi! My name is Ar-Jay Borlagdan. I am a student from the Philippines who is interested in technology and computer-related subjects. I am continuously learning and improving my knowledge and skills, especially in database management, SQL programming, and computer systems. I consider myself a hardworking person who is willing to learn new things, face challenges, and improve myself.
          </p>
          <p>
           I also believe that every experience is an opportunity to learn and grow as a person. I always try my best to improve my skills, overcome challenges, and become more confident in everything I do. I know that success takes time, patience, and hard work, so I am willing to keep learning and never give up on my dreams. My goal is to finish my studies, build a successful career, make my family proud, and become a better version of myself every day.
          </p>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) =>(
              <span key={skill} className="rounded-full bg-secondary text-secondary-foreground text-sm px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>  
  );
}
