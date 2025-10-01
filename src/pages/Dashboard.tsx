import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  FileText,
  AlertCircle,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome to KM-USTAWANA Investment Management System</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Investments"
            value="$24.5M"
            change="+12.5% from last month"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-primary"
          />
          <StatCard
            title="Active Investors"
            value="1,248"
            change="+8 new this week"
            changeType="positive"
            icon={Users}
            iconColor="text-secondary"
          />
          <StatCard
            title="ROI Performance"
            value="15.8%"
            change="Above target by 2.3%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-success"
          />
          <StatCard
            title="Active Contracts"
            value="456"
            change="23 expiring soon"
            changeType="neutral"
            icon={FileText}
            iconColor="text-accent"
          />
        </div>

        {/* Recent Activity and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { investor: "John Anderson", action: "New investment", amount: "$150,000", time: "2 hours ago" },
                { investor: "Sarah Williams", action: "ROI disbursed", amount: "$12,500", time: "5 hours ago" },
                { investor: "Michael Chen", action: "Contract renewed", amount: "$200,000", time: "1 day ago" },
                { investor: "Emma Davis", action: "KYC approved", amount: "-", time: "1 day ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.investor}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{activity.amount}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                Alerts & Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-start gap-3">
                  <Badge variant="destructive">Urgent</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">23 contracts expiring within 30 days</p>
                    <p className="text-sm text-muted-foreground mt-1">Review and process renewals</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-start gap-3">
                  <Badge className="bg-accent text-accent-foreground">Pending</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">15 KYC verifications pending</p>
                    <p className="text-sm text-muted-foreground mt-1">Requires admin approval</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-start gap-3">
                  <Badge className="bg-success text-success-foreground">Info</Badge>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Monthly ROI disbursement scheduled</p>
                    <p className="text-sm text-muted-foreground mt-1">Processing on 1st of next month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Portfolio Status */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Portfolio Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">1-Year Plans</span>
                <span className="font-semibold">35% • $8.6M</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">3-Year Plans</span>
                <span className="font-semibold">45% • $11.0M</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">5-Year Plans</span>
                <span className="font-semibold">20% • $4.9M</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
