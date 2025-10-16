import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const ModeSelection = () => {
  const navigate = useNavigate();

  const handleModeSelection = (mode: "gig" | "regular") => {
    // Store mode selection (later we'll integrate with auth)
    localStorage.setItem("userMode", mode);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        <img src={logo} alt="AURA-FIN Logo" className="w-32 h-32 mx-auto drop-shadow-xl" />
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your Mode
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the mode that best describes your income pattern. 
            This helps AURA-FIN provide tailored financial insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card 
            className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary group"
            onClick={() => handleModeSelection("gig")}
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                <Briefcase className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Gig Worker</h2>
                <p className="text-muted-foreground">
                  Freelancer, contractor, or irregular income earner
                </p>
              </div>
              <ul className="text-sm text-left space-y-2 text-muted-foreground w-full">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Variable income tracking
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Project-based insights
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Flexible budgeting
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Select Gig Worker
              </Button>
            </div>
          </Card>
          
          <Card 
            className="p-8 hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary group"
            onClick={() => handleModeSelection("regular")}
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform">
                <UserCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Regular User</h2>
                <p className="text-muted-foreground">
                  Salaried employee or consistent income earner
                </p>
              </div>
              <ul className="text-sm text-left space-y-2 text-muted-foreground w-full">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Monthly budget planning
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Predictable cash flow
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  Savings optimization
                </li>
              </ul>
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Select Regular User
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
