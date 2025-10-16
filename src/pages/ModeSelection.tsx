import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import headerLogo from "@/assets/header-logo.png";

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
        <img src={headerLogo} alt="AURA-FIN Logo" className="w-32 h-32 mx-auto drop-shadow-xl" />
        
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
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold">Gig Worker</h2>
                <p className="text-muted-foreground">
                  Freelancer, contractor, or irregular income earner
                </p>
              </div>
              <div className="w-full space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Variable income tracking</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Project-based insights</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Flexible budgeting</span>
                </div>
              </div>
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
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold">Regular User</h2>
                <p className="text-muted-foreground">
                  Salaried employee or consistent income earner
                </p>
              </div>
              <div className="w-full space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Monthly budget planning</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Predictable cash flow</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>Savings optimization</span>
                </div>
              </div>
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
