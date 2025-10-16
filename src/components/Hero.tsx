import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import headerLogo from "@/assets/header-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-6xl w-full mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={headerLogo} alt="AURA-FIN Logo" className="w-40 h-40 drop-shadow-2xl" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AURA-FIN
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-100">
          Financial Well-being & Intelligence
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
          AI-powered financial insights tailored for gig workers and regular earners. 
          Track, predict, and optimize your financial health with intelligent guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <Link to="/mode-selection">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-400">
          <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Smart Predictions</h3>
            <p className="text-sm text-muted-foreground text-center">
              AI analyzes your patterns to predict financial stress before it happens
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Secure & Private</h3>
            <p className="text-sm text-muted-foreground text-center">
              Bank-level security with encrypted data and complete privacy control
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
            <div className="p-3 rounded-full bg-gradient-primary">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">AI Assistant</h3>
            <p className="text-sm text-muted-foreground text-center">
              Conversational chatbot explains every recommendation in plain language
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
