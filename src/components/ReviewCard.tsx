import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export function ReviewCard({ name, rating, comment, date, avatar }: ReviewCardProps) {
  return (
    <Card className="h-full border-0 shadow-card">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <span className="text-luxury-foreground font-semibold">
                    {name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{name}</h4>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < rating
                        ? "fill-luxury text-luxury"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">{date}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">{comment}</p>
        </div>
      </CardContent>
    </Card>
  );
}
