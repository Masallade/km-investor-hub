import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, FileCheck, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-4">
              <span className="text-white font-bold text-3xl">KM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              KM-USTAWANA
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Investment Management System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive enterprise solution for investor onboarding, investment plan management, 
              accounting, compliance, and financial reporting.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-glow text-lg px-8"
                onClick={() => navigate("/auth")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                onClick={() => navigate("/dashboard")}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Platform Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage investments, investors, and financial operations in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-smooth">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Investment Plans</h3>
              <p className="text-muted-foreground">
                Create custom plans with flexible durations and ROI schedules (monthly, quarterly, yearly)
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-smooth">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">KYC & Compliance</h3>
              <p className="text-muted-foreground">
                AI-assisted KYC verification with secure document storage and audit trail management
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-smooth">
              <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Contract Management</h3>
              <p className="text-muted-foreground">
                Track multiple contracts per investor with aging alerts and renewal notifications
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-smooth">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Financial Reporting</h3>
              <p className="text-muted-foreground">
                Complete accounting with P&L, balance sheets, cash flow statements, and custom reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Investment Management?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join leading investment firms using KM-USTAWANA for comprehensive portfolio management
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-glow text-lg px-8"
            onClick={() => navigate("/auth")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
