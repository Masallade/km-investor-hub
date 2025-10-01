import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, TrendingUp, DollarSign } from "lucide-react";

export default function InvestmentPlans() {
  const plans = [
    {
      id: "PLAN-001",
      name: "Short-Term Growth",
      duration: "1 Year",
      roi: "12% Annual",
      schedule: "Monthly",
      minInvestment: "$50,000",
      investors: 342,
      totalValue: "$8.6M",
      status: "Active"
    },
    {
      id: "PLAN-002",
      name: "Medium-Term Investment",
      duration: "3 Years",
      roi: "15% Annual",
      schedule: "Quarterly",
      minInvestment: "$100,000",
      investors: 456,
      totalValue: "$11.0M",
      status: "Active"
    },
    {
      id: "PLAN-003",
      name: "Long-Term Premium",
      duration: "5 Years",
      roi: "18% Annual",
      schedule: "Half-Yearly",
      minInvestment: "$250,000",
      investors: 198,
      totalValue: "$4.9M",
      status: "Active"
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Investment Plans</h1>
            <p className="text-muted-foreground mt-1">Create and manage investment plans with customizable durations and ROI schedules</p>
          </div>
          <Button className="bg-gradient-primary shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            Create Plan
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="hover:shadow-lg transition-smooth">
              <CardHeader className="bg-gradient-subtle">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{plan.id}</p>
                  </div>
                  <Badge className="bg-success">{plan.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>Duration</span>
                    </div>
                    <p className="font-semibold text-foreground">{plan.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>ROI</span>
                    </div>
                    <p className="font-semibold text-success">{plan.roi}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Payout Schedule</p>
                  <p className="font-semibold text-foreground">{plan.schedule}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Minimum Investment</p>
                  <p className="font-semibold text-foreground">{plan.minInvestment}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Total Investors</span>
                    <span className="font-semibold text-foreground">{plan.investors}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="font-bold text-primary">{plan.totalValue}</span>
                  </div>
                </div>

                <div className="pt-4 flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Plan Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-gradient-subtle border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total AUM</p>
                    <p className="text-2xl font-bold text-foreground">$24.5M</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-subtle border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average ROI</p>
                    <p className="text-2xl font-bold text-success">15.8%</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-subtle border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Plans</p>
                    <p className="text-2xl font-bold text-foreground">{plans.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
