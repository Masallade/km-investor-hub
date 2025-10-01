import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-dashboard.jpg";

export default function Auth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-4">
              <span className="text-white font-bold text-2xl">KM</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">KM-USTAWANA</h1>
            <p className="text-muted-foreground mt-2">Investment Management System</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="admin@km-ustawana.com"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        required 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary shadow-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Get started with KM-USTAWANA platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input 
                        id="signup-name" 
                        type="text" 
                        placeholder="John Anderson"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="john@company.com"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="••••••••"
                        required 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary shadow-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right side - Hero Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Professional Investment<br />Management Platform
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              Comprehensive investor onboarding & KYC
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              Flexible investment plans with ROI scheduling
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              Complete accounting & financial management
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent" />
              Real-time dashboards & comprehensive reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
