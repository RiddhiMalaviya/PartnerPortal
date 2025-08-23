import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  icon: React.ReactNode;
}

const ProductCard = ({ title, description, image, slug, icon }: ProductCardProps) => {
  const { userRole } = useAuth();

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 bg-accent rounded-xl text-primary">
            {icon}
          </div>
        </div>
        <div>
          <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="px-6">
        <div className="aspect-video rounded-lg overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6">
        <Button asChild className="w-full group/btn" variant="outline">
          <Link to={`/products/${slug}`} className="flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;