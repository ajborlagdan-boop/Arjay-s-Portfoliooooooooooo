import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";


const educationList = [
  {
    School: "Tabuco Central School",
    Year: "2013-2019",
    Education: "Elementary",
    description: "Building the foundation of my education through basic learning, classroom activities, and meaningful experiences. Developing good habits, discipline, and friendships while learning the importance of responsibility and punctuality..",
    achievements: ["Most Punctual"],
  },
  {
    School: "Camarines Sur National Highschool",
    Year: "2019-2023",
    Education: "Junior High School",
    description: "Building a strong academic foundation while developing essential knowledge, skills, and values. Striving for academic excellence, personal growth, and preparing for future opportunities..",
    achievements: ["Achiever"],
  },
  {
    School: "Camarines Sur National High School",
    Year: "2023-2025",
    Education: "Senior High School",
    description: "Strengthening my knowledge and skills through specialized subjects while preparing for higher education and future career opportunities. Developing confidence, responsibility, and determination while striving for academic excellence as an achiever.",
    achievements: ["Achiever"],
  },
];  


export default function Education() {
  return (
    <div className="space-y-8 max-w-3x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background and formal training.</p>
      </div>


      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-1g text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.School}</CardTitle>
                    <CardDescription>{item.Education}</CardDescription>
                  </div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.Year}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2">
                  <Award className="h-4 w-4 text-primary" /> Key Highlights
                </h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}    
