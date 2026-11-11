import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Joystick, Activity, Bike, Headphones, Clapperboard } from "lucide-react";


const hobbies = [
  {
    title: "Basketball",
    icon: Trophy,
    description: "I enjoy playing basketball, improving my skills, and having fun with teammates.",
  },
  {
    title: "Gaming",
    icon: Joystick,
    description: "I enjoy playing games, competing with others, and improving my skills while having fun.",
  },
  {
    title: "Jogging",
    icon:  Activity,
    description: "I enjoy jogging to stay active, improve my fitness, and refresh my mind.",
  },
  {
    title: "Rides",
    icon: Bike,
    description: "I enjoy going on rides, exploring new places, and enjoying the fresh air.",
  },
  {
    title: "Listening to Music",
    icon: Headphones,
    description: "I enjoy listening to my favorite music to relax and improve my mood.",
  },
  {
    title: "Watching Movies",
    icon: Clapperboard,
    description: "I enjoy watching movies and series for entertainment and relaxation.",
  },
];


export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding .</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover: shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-1g text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-1g">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
